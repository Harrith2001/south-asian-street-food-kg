/* ============================================================
   SPARQL ENDPOINT
   ============================================================ */
const SPARQL_ENDPOINT = 'https://triplydb.com/_api/datasets/Areesha/South-Asian-Street-Food-KG/sparql';

/* ── UI METADATA (not in KG: emoji, gradient, image key) ── */
const DISH_UI = {
  'Pani Puri':    {emoji:'🫙', grad:['#006994','#00B4D8'], imgKey:'Golgappay'},
  'Gol Gappay':   {emoji:'🫙', grad:['#6B21A8','#A855F7'], imgKey:'Golgappay'},
  'Fuchka':       {emoji:'🫙', grad:['#16633C','#2DC653'], imgKey:'Chotpoti & Fuchka'},
  'Aloo Tikki':   {emoji:'🥔', grad:['#B7791F','#F6C90E'], imgKey:'Aloo Tikki Chaat'},
  'Beguni':       {emoji:'🍆', grad:['#5B21B6','#8B5CF6'], imgKey:'Baingan Bhaja'},
  'Bhel Puri':    {emoji:'🌾', grad:['#C2410C','#FB923C'], imgKey:'Bhel Puri'},
  'Chana Chaat':  {emoji:'🫘', grad:['#92400E','#F59E0B'], imgKey:'Chana Chaat'},
  'Chapli Kebab': {emoji:'🥩', grad:['#7F1D1D','#DC2626'], imgKey:'Chapli Kabab'},
  'Chotpoti':     {emoji:'🫘', grad:['#14532D','#16A34A'], imgKey:'Chotpoti & Fuchka'},
  'Dahi Bharay':  {emoji:'🥣', grad:['#1E3A5F','#3B82F6'], imgKey:'Dahi Baray'},
  'Idli Sambar':  {emoji:'🍚', grad:['#78350F','#F59E0B'], imgKey:'Idli Sambhar'},
  'Jhalmuri':     {emoji:'🌿', grad:['#365314','#84CC16'], imgKey:'Jhalmuri'},
  'Masala Dosa':  {emoji:'🫓', grad:['#9A3412','#EA580C'], imgKey:'Masala Dosa'},
  'Samosa':       {emoji:'🥟', grad:['#92400E','#D97706'], imgKey:'Samosa'},
  'Shingara':     {emoji:'🥟', grad:['#78350F','#A16207'], imgKey:'Samosa'},
  'VadaPav':      {emoji:'🫓', grad:['#9F1239','#E11D48'], imgKey:'Vada Pav'},
};

const STATIC_IMGS = {
  "Golgappay":         "./images/golgappay.jpg",
  "Chotpoti & Fuchka": "./images/chotpoti-fuchka.jpg",
  "Aloo Tikki Chaat":  "./images/aloo-tikki-chaat.jpg",
  "Baingan Bhaja":     "./images/baingan-bhaja.jpg",
  "Chana Chaat":       "./images/chana-chaat.jpg",
  "Vada Pav":          "./images/vada-pav.jpg",
  "Dahi Baray":        "./images/dahi-baray.jpg",
  "Bhel Puri":         "./images/bhel-puri.jpg",
  "Chapli Kabab":      "./images/chapli-kabab.jpg",
  "Idli Sambhar":      "./images/idli-sambhar.jpg",
  "Jhalmuri":          "./images/jhalmuri.jpg",
  "Masala Dosa":       "./images/masala-dosa.jpg",
  "Samosa":            "./images/samosa.jpg"
};
window.DISH_IMGS = STATIC_IMGS;

const FLAGS = {India:"🇮🇳",Pakistan:"🇵🇰",Bangladesh:"🇧🇩","India/Pakistan":"🇮🇳🇵🇰"};
const PKG = ["Potato","Salt","Tamarind","Rice","Lentil","Onion","Tomato","Cumin","Coriander","GreenChilli","Ginger","Garlic","Yogurt","Oil","Flour","Peas","Water","Mustard","Turmeric","BlackPepper","Lemon","Mint","UradDal","ToorDal","Chickpeas","PuffedRice","MincedBeef","MustardOil","Fenugreek","Cardamom"];
const CUSTOM = ["Sev","ChaatMasala","Jaggery","Asafoetida","BlackSalt","PomegranateSeeds","GramFlour","Eggplant"];

/* ── RUNTIME STATE ── */
let DISHES = [];
let activeCountry = 'all';
let activeDiet = null;
let cardBatches = [];

/* ============================================================
   SPARQL
   ============================================================ */
async function querySPARQL(query) {
  const res = await fetch(SPARQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/sparql-query',
      'Accept': 'application/sparql-results+json'
    },
    body: query
  });
  if (!res.ok) throw new Error('SPARQL ' + res.status);
  const json = await res.json();
  return json.results.bindings;
}

function uriLocalName(uri) {
  return decodeURIComponent(uri.replace(/^.*[#/]/, '').replace(/_/g, ' '));
}

async function loadDishData() {
  const PFX = `
    PREFIX sakg: <http://example.org/southasianstreetfood#>
    PREFIX pkg:  <http://purl.org/ProductKG/RecipeOn#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX owl:  <http://www.w3.org/2002/07/owl#>
  `;

  const [coreRows, techRows, ingRows, ingSetRows, varRows] = await Promise.all([
    querySPARQL(PFX + `
      SELECT DISTINCT ?dish ?name ?comment ?instructions ?country ?dietary WHERE {
        ?dish rdfs:subClassOf sakg:StreetFood ; rdfs:label ?name .
        OPTIONAL { ?dish rdfs:comment ?comment }
        OPTIONAL { ?dish sakg:instructions ?instructions }
        OPTIONAL {
          ?dish rdfs:subClassOf ?r1 .
          ?r1 owl:onProperty sakg:originatesFrom ; owl:someValuesFrom ?c .
          ?c rdfs:label ?country .
        }
        OPTIONAL {
          ?dish rdfs:subClassOf ?r2 .
          ?r2 owl:onProperty sakg:hasDietaryProperty ; owl:someValuesFrom ?d .
          ?d rdfs:label ?dietary .
        }
      }
    `),
    querySPARQL(PFX + `
      SELECT ?dish ?technique WHERE {
        ?dish rdfs:subClassOf sakg:StreetFood .
        ?dish rdfs:subClassOf ?r .
        ?r owl:onProperty sakg:usesMethod ; owl:someValuesFrom ?t .
        ?t rdfs:label ?technique .
      }
    `),
    querySPARQL(PFX + `
      SELECT ?dish ?ingURI ?ingLabel WHERE {
        ?dish rdfs:subClassOf sakg:StreetFood .
        ?dish rdfs:subClassOf ?r .
        ?r owl:onProperty pkg:hasIngredient ; owl:someValuesFrom ?ingURI .
        OPTIONAL { ?ingURI rdfs:label ?ingLabel }
      }
    `),
    querySPARQL(PFX + `
      SELECT ?dish ?ingSet ?ingSetLabel ?ingSetInstr ?ingURI ?ingLabel WHERE {
        ?dish rdfs:subClassOf sakg:StreetFood .
        ?dish rdfs:subClassOf ?r1 .
        ?r1 owl:onProperty sakg:hasIngredientSet ; owl:someValuesFrom ?ingSet .
        OPTIONAL { ?ingSet rdfs:label ?ingSetLabel }
        OPTIONAL { ?ingSet sakg:instructions ?ingSetInstr }
        OPTIONAL {
          ?ingSet rdfs:subClassOf ?r2 .
          ?r2 owl:onProperty pkg:hasIngredient ; owl:someValuesFrom ?ingURI .
          OPTIONAL { ?ingURI rdfs:label ?ingLabel }
        }
      }
    `),
    querySPARQL(PFX + `
      SELECT ?dish ?variant WHERE {
        ?dish rdfs:subClassOf sakg:StreetFood .
        ?dish rdfs:subClassOf ?r .
        ?r owl:onProperty sakg:isVariantOf ; owl:someValuesFrom ?v .
        ?v rdfs:label ?variant .
      }
    `)
  ]);

  const map = {};

  for (const row of coreRows) {
    const uri = row.dish.value;
    if (!map[uri]) {
      const name = row.name.value;
      const ui = DISH_UI[name] || {emoji:'🍛', grad:['#C4501A','#E8A020'], imgKey:null};
      map[uri] = {
        name,
        country: '',
        dietary: 'Vegetarian',
        instructions: '',
        comment: '',
        techniques: [],
        ingredients: [],
        variant: [],
        emoji: ui.emoji,
        grad: ui.grad,
        imgKey: ui.imgKey
      };
    }
    if (row.country?.value && !map[uri].country) map[uri].country = row.country.value;
    if (row.dietary?.value && !map[uri].dietary) map[uri].dietary = row.dietary.value;
    if (row.instructions?.value && !map[uri].instructions) map[uri].instructions = row.instructions.value;
    if (row.comment?.value && !map[uri].comment) map[uri].comment = row.comment.value;
  }

  for (const row of techRows) {
    const d = map[row.dish.value];
    if (d) {
      const t = row.technique.value;
      if (!d.techniques.includes(t)) d.techniques.push(t);
    }
  }

  for (const row of ingRows) {
    const d = map[row.dish.value];
    if (d) {
      const label = row.ingLabel?.value || uriLocalName(row.ingURI.value);
      if (!d.ingredients.includes(label)) d.ingredients.push(label);
    }
  }

  // Build ingredient sets (grouped by ingSet URI)
  const ingSetMap = {}; // dishURI → { ingSetURI → {label,instructions,ingredients[]} }
  for (const row of ingSetRows) {
    const dishURI = row.dish.value;
    const setURI = row.ingSet.value;
    if (!ingSetMap[dishURI]) ingSetMap[dishURI] = {};
    if (!ingSetMap[dishURI][setURI]) {
      ingSetMap[dishURI][setURI] = {
        uri: setURI,
        label: row.ingSetLabel?.value || uriLocalName(setURI),
        instructions: row.ingSetInstr?.value || '',
        ingredients: []
      };
    }
    if (row.ingURI) {
      const ing = row.ingLabel?.value || uriLocalName(row.ingURI.value);
      const s = ingSetMap[dishURI][setURI];
      if (!s.ingredients.includes(ing)) s.ingredients.push(ing);
    }
    // Also keep flat ingredient list for related-dish matching
    const d = map[dishURI];
    if (d && row.ingURI) {
      const ing = row.ingLabel?.value || uriLocalName(row.ingURI.value);
      if (!d.ingredients.includes(ing)) d.ingredients.push(ing);
    }
  }
  for (const [dishURI, sets] of Object.entries(ingSetMap)) {
    if (map[dishURI]) map[dishURI].ingredientSets = Object.values(sets);
  }

  for (const row of varRows) {
    const d = map[row.dish.value];
    if (d) {
      const v = row.variant.value;
      if (!d.variant.includes(v)) d.variant.push(v);
    }
  }

  return Object.values(map).sort((a, b) => a.name.localeCompare(b.name));
}

/* ── NAV TRANSPARENCY ── */
(()=>{
  const nav=document.getElementById('main-nav');
  const onScroll=()=>{ nav.classList.toggle('nav--scrolled', window.scrollY > 60); };
  window.addEventListener('scroll',onScroll,{passive:true});
  onScroll();
})();

document.getElementById('hamburger').addEventListener('click',()=>document.getElementById('mobile-menu').classList.toggle('open'));
document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>document.getElementById('mobile-menu').classList.remove('open')));

/* ============================================================
   SEARCH
   ============================================================ */
const searchInput=document.getElementById('search-input');
const sugEl=document.getElementById('search-suggestions');

searchInput.addEventListener('input',()=>{
  if (!DISHES.length) { sugEl.classList.remove('open'); return; }
  const q=searchInput.value.trim().toLowerCase();
  if(!q){sugEl.classList.remove('open');return;}
  const hits=DISHES.filter(d=>d.name.toLowerCase().includes(q)||d.country.toLowerCase().includes(q)||d.techniques.some(t=>t.toLowerCase().includes(q)));
  if(!hits.length){sugEl.classList.remove('open');return;}
  sugEl.innerHTML=hits.slice(0,6).map(d=>`
    <div class="suggestion-item" onclick="selectDish('${d.name}')">
      <span style="font-size:1.4rem">${d.emoji}</span>
      <span style="font-weight:500">${d.name}</span>
      <span class="suggestion-meta">${FLAGS[d.country]||'🌏'} ${d.country} · ${d.dietary==='Vegetarian'?'Veg':'Non-Veg'}</span>
    </div>`).join('');
  sugEl.classList.add('open');
});
document.addEventListener('click',e=>{if(!e.target.closest('.search-wrap'))sugEl.classList.remove('open')});
document.getElementById('search-btn').addEventListener('click',()=>{
  if (!DISHES.length) return;
  const q=searchInput.value.trim().toLowerCase();
  const m=DISHES.find(d=>d.name.toLowerCase().startsWith(q)||d.name.toLowerCase().includes(q));
  if(m)selectDish(m.name);
});
searchInput.addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('search-btn').click()});
function selectDish(name){sugEl.classList.remove('open');searchInput.value=name;openRecipe(name);}

/* ============================================================
   RECIPE MODAL
   ============================================================ */
function openRecipe(name){
  const dish=DISHES.find(d=>d.name===name);
  if(!dish) return;

  const heroEl=document.getElementById('modal-hero');
  const emojiEl=document.getElementById('modal-emoji');
  const imgSrc=dish.imgKey && window.DISH_IMGS && window.DISH_IMGS[dish.imgKey];
  if(imgSrc){
    heroEl.style.background=`linear-gradient(to bottom,rgba(0,0,0,.18) 0%,rgba(0,0,0,.55) 100%),url(${imgSrc}) center/cover no-repeat`;
    emojiEl.style.display='none';
  } else {
    heroEl.style.background=`linear-gradient(135deg,${dish.grad[0]},${dish.grad[1]})`;
    emojiEl.style.display='';
    emojiEl.textContent=dish.emoji;
  }

  document.getElementById('modal-flag').textContent=FLAGS[dish.country]||'🌏';
  document.getElementById('modal-country').textContent=dish.country;
  document.getElementById('modal-name').textContent=dish.name;

  const isVeg=dish.dietary==='Vegetarian';
  let badges=`<span class="rbadge ${isVeg?'veg':'nonveg'}">${isVeg?'🌿 Vegetarian':'🍖 Non-Vegetarian'}</span>`;
  if(dish.variant?.length) badges+=dish.variant.map(v=>`<span class="rbadge variant">⇄ ${v}</span>`).join('');
  document.getElementById('modal-badges').innerHTML=badges;

  // About section
  const aboutSec=document.getElementById('modal-about-sec');
  if(dish.comment){
    document.getElementById('modal-about').textContent=dish.comment;
    aboutSec.style.display='';
  } else {
    aboutSec.style.display='none';
  }

  // Ingredients & Preparation
  const ingWrap=document.getElementById('modal-ingredients-wrap');
  const sets=dish.ingredientSets||[];
  if(sets.length){
    const SET_ICONS=['🫙','🥣','💧','🥬','🌶️','🧄'];
    const isRawUri = label => /^IngSet\d+$/i.test(label) || /^ingset/i.test(label);
    ingWrap.innerHTML=sets.map((s,i)=>{
      const displayLabel = isRawUri(s.label) ? `Component ${i+1}` : s.label;
      const ingHTML=s.ingredients.length
        ? `<div class="ingset-ing-grid">${s.ingredients.map(ing=>`<div class="ingredient-item"><div class="ing-dot"></div>${ing}</div>`).join('')}</div>`
        : '';
      const prepSteps=s.instructions
        ? s.instructions.split(/\.\s+|\n/).map(t=>t.trim()).filter(Boolean).map(t=>t.endsWith('.')?t:t+'.')
        : [];
      const prepHTML=prepSteps.length
        ? `<div class="ingset-prep-title">Preparation</div><div class="ingset-steps">${prepSteps.map((t,n)=>`<div class="ingset-step"><div class="ingset-step-num">${n+1}</div><div class="ingset-step-text">${t}</div></div>`).join('')}</div>`
        : '';
      return `<div class="ingset-block">
        <div class="ingset-header"><span class="ingset-icon">${SET_ICONS[i]||'🍴'}</span><span class="ingset-label">${displayLabel}</span></div>
        <div class="ingset-body">${ingHTML}${prepHTML}</div>
      </div>`;
    }).join('');
    // Also show any direct ingredients not in a set
    if(dish.ingredients.length){
      const setIngs=new Set(sets.flatMap(s=>s.ingredients));
      const direct=dish.ingredients.filter(i=>!setIngs.has(i));
      if(direct.length){
        ingWrap.innerHTML+=`<div class="direct-ing-grid">${direct.map(i=>`<div class="ingredient-item"><div class="ing-dot"></div>${i}</div>`).join('')}</div>`;
      }
    }
    document.getElementById('modal-assembly-title').textContent='Assembly';
  } else {
    // No sets — flat ingredient grid
    ingWrap.innerHTML=dish.ingredients.length
      ? `<div class="ingredients-grid">${dish.ingredients.map(i=>`<div class="ingredient-item"><div class="ing-dot"></div>${i}</div>`).join('')}</div>`
      : '<p style="color:var(--text-muted);font-size:.9rem">Ingredients not available</p>';
    document.getElementById('modal-assembly-title').textContent='How to Make It';
  }

  // Assembly / main instructions
  const assemblyTitleEl=document.getElementById('modal-assembly-title');
  const stepsEl=document.getElementById('modal-steps');
  if(dish.instructions){
    const steps=dish.instructions.split(/\.\s+|\n/).map(s=>s.trim()).filter(Boolean).map(s=>s.endsWith('.')?s:s+'.');
    stepsEl.innerHTML=steps.map((s,i)=>`<div class="step-item"><div class="step-num">${i+1}</div><div class="step-text">${s}</div></div>`).join('');
    assemblyTitleEl.style.display='';
    stepsEl.style.display='';
  } else {
    assemblyTitleEl.style.display='none';
    stepsEl.style.display='none';
  }

  document.getElementById('modal-techniques').innerHTML=dish.techniques.map(t=>`<span class="technique-chip">${t}</span>`).join('');

  const varSec=document.getElementById('modal-variants-sec');
  if(dish.variant?.length){
    varSec.style.display='block';
    document.getElementById('modal-variants').innerHTML=dish.variant.map(v=>{
      const vd=DISHES.find(d=>d.name===v);
      return `<span class="variant-link-chip" onclick="switchRecipe('${v}')">${FLAGS[vd?.country]||''} ${v} →</span>`;
    }).join('');
  } else {
    varSec.style.display='none';
  }

  // Related dishes (share at least one ingredient)
  const sharedIngs=new Set(dish.ingredients);
  const related=DISHES.filter(d=>d.name!==dish.name && d.ingredients.some(i=>sharedIngs.has(i)));
  const rRow=document.getElementById('modal-related-row');
  if(related.length){
    rRow.style.display='block';
    document.getElementById('modal-related').innerHTML=related.map(d=>`<span class="related-chip" onclick="switchRecipe('${d.name}')">${d.emoji} ${d.name}</span>`).join('');
  } else {
    rRow.style.display='none';
  }

  document.getElementById('recipe-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function switchRecipe(n){openRecipe(n);}
function closeRecipe(){document.getElementById('recipe-overlay').classList.remove('open');document.body.style.overflow='';}
document.getElementById('recipe-close').addEventListener('click',closeRecipe);
document.getElementById('recipe-overlay').addEventListener('click',e=>{if(e.target===e.currentTarget)closeRecipe();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeRecipe();});

/* ============================================================
   DISHES GRID
   ============================================================ */
function renderDishes(animate=true){
  const grid=document.getElementById('dishes-grid');
  cardBatches.forEach(t=>t.kill());
  cardBatches=[];
  grid.innerHTML='';

  const visibleDishes=DISHES.filter(dish=>{
    const cl=dish.country.toLowerCase();
    const matchC=activeCountry==='all'||cl.includes(activeCountry);
    const isVeg=dish.dietary==='Vegetarian';
    const matchD=!activeDiet||(activeDiet==='veg'&&isVeg)||(activeDiet==='nonveg'&&!isVeg);
    return matchC&&matchD;
  });

  visibleDishes.forEach(dish=>{
    const isVeg=dish.dietary==='Vegetarian';
    const card=document.createElement('div');
    card.className='dish-card';
    const imgSrc=dish.imgKey && window.DISH_IMGS && window.DISH_IMGS[dish.imgKey];
    const imgHTML=imgSrc
      ? `<div class="dish-img dish-img--photo"><img src="${imgSrc}" alt="${dish.name}" loading="lazy"><div class="country-badge">${FLAGS[dish.country]||'🌏'} ${dish.country}</div><div class="diet-dot" title="${dish.dietary}">${isVeg?'🌿':'🍖'}</div></div>`
      : `<div class="dish-img" style="background:linear-gradient(135deg,${dish.grad[0]},${dish.grad[1]})"><div class="img-pattern"></div><span class="big-emoji">${dish.emoji}</span><div class="country-badge">${FLAGS[dish.country]||'🌏'} ${dish.country}</div><div class="diet-dot" title="${dish.dietary}">${isVeg?'🌿':'🍖'}</div></div>`;
    card.innerHTML=`${imgHTML}
      <div class="dish-card-body">
        <div class="dish-name">${dish.name}</div>
        <div class="techniques-row">${dish.techniques.map(t=>`<span class="technique-tag">${t}</span>`).join('')}</div>
        <button class="view-recipe-btn" onclick="openRecipe('${dish.name}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          View Recipe & Ingredients
        </button>
      </div>`;
    grid.appendChild(card);
  });

  if(animate && visibleDishes.length){
    gsap.set('.dish-card',{opacity:0,y:55,scale:0.93});
    cardBatches=ScrollTrigger.batch('.dish-card',{
      onEnter:batch=>gsap.to(batch,{opacity:1,y:0,scale:1,duration:.65,stagger:.07,ease:'power3.out',overwrite:true}),
      start:'top 92%',
      once:true
    });
    ScrollTrigger.refresh();
  }
}

function filterAndScroll(c){
  activeCountry=c;
  document.querySelectorAll('[data-country]').forEach(b=>b.classList.toggle('active',b.dataset.country===c));
  renderDishes(true);
  document.getElementById('browse').scrollIntoView({behavior:'smooth'});
}

/* ============================================================
   COUNT-UP
   ============================================================ */
function countUp(el,target,suffix){
  const start=performance.now(), dur=1400;
  const step=now=>{
    const p=Math.min((now-start)/dur,1);
    el.textContent=Math.round(p*target)+(p===1?suffix:'');
    if(p<1)requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ============================================================
   GSAP ANIMATIONS
   ============================================================ */
function initGSAP(){
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('#scroll-progress',{scaleX:1,ease:'none',scrollTrigger:{start:'top top',end:'max',scrub:0}});

  gsap.fromTo('.hero-eyebrow',{clipPath:'inset(0 100% 0 0)',opacity:1},{clipPath:'inset(0 0% 0 0)',duration:.9,ease:'power3.out',delay:.15});
  gsap.fromTo('.hero-title',{y:90,opacity:0,scale:.94},{y:0,opacity:1,scale:1,duration:1.1,ease:'power4.out',delay:.35});
  gsap.fromTo('.hero-sub',{y:40,opacity:0},{y:0,opacity:1,duration:.9,ease:'power3.out',delay:.55});
  gsap.fromTo('.search-wrap',{y:50,opacity:0},{y:0,opacity:1,duration:1,ease:'power3.out',delay:.85});
  gsap.fromTo('.hero-scroll',{opacity:0,y:-8},{opacity:1,y:0,duration:.5,delay:1.5});
  gsap.to('.hero-video',{scale:1.1,duration:12,ease:'none',transformOrigin:'center center'});

  gsap.fromTo('.dish-marquee-section',{opacity:0,y:30},{opacity:1,y:0,duration:.8,ease:'power2.out',scrollTrigger:{trigger:'.dish-marquee-section',start:'top 90%'}});

  const browseHeader=document.querySelector('#browse .section-header');
  if(browseHeader){
    const browseLabel=browseHeader.querySelector('.section-label');
    gsap.fromTo(browseLabel,{opacity:0,y:16},{opacity:1,y:0,duration:.6,ease:'power2.out',scrollTrigger:{trigger:browseHeader,start:'top 88%'}});
    gsap.fromTo(browseHeader.querySelector('.section-title'),{opacity:0,y:30},{opacity:1,y:0,duration:.75,ease:'power2.out',delay:.1,scrollTrigger:{trigger:browseHeader,start:'top 88%'}});
    gsap.fromTo(browseHeader.querySelector('.section-desc'),{opacity:0,y:20},{opacity:1,y:0,duration:.65,ease:'power2.out',delay:.22,scrollTrigger:{trigger:browseHeader,start:'top 88%'}});
  }

  gsap.fromTo('#explorer-controls .pill-btn',{opacity:0,y:16,scale:.9},{opacity:1,y:0,scale:1,duration:.5,stagger:.05,ease:'back.out(1.3)',scrollTrigger:{trigger:'#explorer-controls',start:'top 88%'}});

  gsap.fromTo('#footer-inner > *',{opacity:0,y:30},{opacity:1,y:0,duration:.8,stagger:.15,ease:'power2.out',scrollTrigger:{trigger:'footer',start:'top 88%'}});
}

/* ============================================================
   DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded', async () => {
  // Ontology chips (section may be removed)
  const pkgEl=document.getElementById('pkg-ings');
  const customEl=document.getElementById('custom-ings');
  if(pkgEl) pkgEl.innerHTML=PKG.map(i=>`<span class="ing-chip pkg">${i}</span>`).join('');
  if(customEl) customEl.innerHTML=CUSTOM.map(i=>`<span class="ing-chip custom">${i}</span>`).join('');

  // Show loading state
  const grid=document.getElementById('dishes-grid');
  grid.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted);font-family:var(--font-sans);font-size:.95rem;letter-spacing:.05em">Loading dishes from knowledge graph…</div>`;

  try {
    DISHES = await loadDishData();
  } catch(e) {
    console.error('SPARQL load failed:', e);
    grid.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#e05;font-family:var(--font-sans);font-size:.95rem">Failed to load dishes. Please refresh.</div>`;
    return;
  }

  // Render dishes
  renderDishes(false);

  // Filter buttons
  document.querySelectorAll('[data-country]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('[data-country]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      activeCountry=btn.dataset.country;
      renderDishes(true);
    });
  });
  document.querySelectorAll('[data-diet]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      if(btn.classList.contains('active')&&activeDiet===btn.dataset.diet){
        btn.classList.remove('active'); activeDiet=null;
      } else {
        document.querySelectorAll('[data-diet]').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active'); activeDiet=btn.dataset.diet;
      }
      renderDishes(true);
    });
  });

  // Init GSAP
  requestAnimationFrame(()=>{
    gsap.set('.dish-card',{opacity:0,y:55,scale:0.93});
    cardBatches=ScrollTrigger.batch('.dish-card',{
      onEnter:batch=>gsap.to(batch,{opacity:1,y:0,scale:1,duration:.65,stagger:.07,ease:'power3.out',overwrite:true}),
      start:'top 92%',
      once:true
    });
    initGSAP();
  });
});
