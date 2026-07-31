/* ============================================================
   DATA
   ============================================================ */
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
const DISHES = [
  {name:"Pani Puri",country:"India",dietary:"Vegetarian",techniques:["DeepFrying","Assembling"],ingredientSets:["IngSet9883","IngSet9886","IngSet9887"],variant:["Gol Gappay","Fuchka"],emoji:"🫙",grad:["#006994","#00B4D8"],imgKey:"Golgappay"},
  {name:"Gol Gappay",country:"Pakistan",dietary:"Vegetarian",techniques:["DeepFrying","Assembling"],ingredientSets:["IngSet9884","IngSet9886","IngSet9887"],variant:["Pani Puri","Fuchka"],emoji:"🫙",grad:["#6B21A8","#A855F7"],imgKey:"Golgappay"},
  {name:"Fuchka",country:"Bangladesh",dietary:"Vegetarian",techniques:["DeepFrying","Assembling"],ingredientSets:["IngSet9885","IngSet9886","IngSet9887"],variant:["Pani Puri","Gol Gappay"],emoji:"🫙",grad:["#16633C","#2DC653"],imgKey:"Chotpoti & Fuchka"},
  {name:"Aloo Tikki",country:"India/Pakistan",dietary:"Vegetarian",techniques:["Boiling","Mixing","PanFrying"],ingredientSets:["IngSet9887"],emoji:"🥔",grad:["#B7791F","#F6C90E"],imgKey:"Aloo Tikki Chaat"},
  {name:"Beguni",country:"Bangladesh",dietary:"Vegetarian",techniques:["Mixing","DeepFrying"],ingredientSets:["IngSet9892","IngSet9893"],emoji:"🍆",grad:["#5B21B6","#8B5CF6"],imgKey:"Baingan Bhaja"},
  {name:"Bhel Puri",country:"India",dietary:"Vegetarian",techniques:["Roasting","Mixing","Assembling"],ingredientSets:["IngSet9891","IngSet9893","IngSet9894"],emoji:"🌾",grad:["#C2410C","#FB923C"],imgKey:"Bhel Puri"},
  {name:"Chana Chaat",country:"India",dietary:"Vegetarian",techniques:["Boiling","Cutting","Mixing","Seasoning"],ingredientSets:["IngSet9891","IngSet9893"],emoji:"🫘",grad:["#92400E","#F59E0B"],imgKey:"Chana Chaat"},
  {name:"Chapli Kebab",country:"Pakistan",dietary:"NonVegetarian",techniques:["Mixing","PanFrying"],ingredientSets:["IngSet9914"],emoji:"🥩",grad:["#7F1D1D","#DC2626"],imgKey:"Chapli Kabab"},
  {name:"Chotpoti",country:"Bangladesh",dietary:"Vegetarian",techniques:["Boiling","Mixing","Seasoning"],ingredientSets:["IngSet9891","IngSet9893"],emoji:"🫘",grad:["#14532D","#16A34A"],imgKey:"Chotpoti & Fuchka"},
  {name:"Dahi Bhare",country:"India",dietary:"Vegetarian",techniques:["Grinding","DeepFrying","Mixing"],ingredientSets:["IngSet9896"],emoji:"🥣",grad:["#1E3A5F","#3B82F6"],imgKey:"Dahi Baray"},
  {name:"Idli Sambhar",country:"India",dietary:"Vegetarian",techniques:["Steaming","Boiling","Tempering"],ingredientSets:["IngSet9889","IngSet9897"],emoji:"🍚",grad:["#78350F","#F59E0B"],imgKey:"Idli Sambhar"},
  {name:"Jhalmuri",country:"Bangladesh",dietary:"Vegetarian",techniques:["Cutting","Mixing","Seasoning"],ingredientSets:["IngSet9899"],emoji:"🌿",grad:["#365314","#84CC16"],imgKey:"Jhalmuri"},
  {name:"Masala Dosa",country:"India",dietary:"Vegetarian",techniques:["Mixing","PanFrying","Assembling"],ingredientSets:["IngSet9889","IngSet9887"],emoji:"🫓",grad:["#9A3412","#EA580C"],imgKey:"Masala Dosa"},
  {name:"Samosa",country:"Pakistan",dietary:"Vegetarian",techniques:["Mixing","Rolling","DeepFrying"],ingredientSets:["IngSet9904","IngSet9888"],variant:["Shingara"],emoji:"🥟",grad:["#92400E","#D97706"],imgKey:"Samosa"},
  {name:"Shingara",country:"Bangladesh",dietary:"Vegetarian",techniques:["Mixing","Rolling","DeepFrying"],ingredientSets:["IngSet9904","IngSet9888"],variant:["Samosa"],emoji:"🥟",grad:["#78350F","#A16207"],imgKey:"Samosa"},
  {name:"Vada Pav",country:"India",dietary:"Vegetarian",techniques:["Mixing","DeepFrying","Assembling"],ingredientSets:["IngSet9887","IngSet9893"],emoji:"🫓",grad:["#9F1239","#E11D48"],imgKey:"Vada Pav"},
];

const INGSET = {
  "IngSet9883":{label:"Mint-Tamarind Water",ingredients:["Mint","Cumin","Lemon Juice","Water","Salt"]},
  "IngSet9884":{label:"Pepper Spiced Water",ingredients:["Black Pepper","Cumin","Tamarind","Salt","Green Chilli"]},
  "IngSet9885":{label:"Tamarind Mustard Water",ingredients:["Tamarind","Mustard","Green Chilli","Black Salt"]},
  "IngSet9886":{label:"Spiced Water Base",ingredients:["Water","Salt","Black Salt","ChaatMasala"]},
  "IngSet9887":{label:"Boiled Potatoes & Chickpeas",ingredients:["Potato","Chickpeas","Salt","Cumin","Coriander"]},
  "IngSet9888":{label:"Pastry Dough",ingredients:["Flour","Salt","Oil","Water"]},
  "IngSet9889":{label:"Fermented Rice Batter",ingredients:["Rice","Urad Dal","Salt","Water","Fenugreek"]},
  "IngSet9891":{label:"Chickpea Base",ingredients:["Chickpeas","Onion","Tomato","Salt","Lemon"]},
  "IngSet9892":{label:"Eggplant Batter",ingredients:["Eggplant","GramFlour","Salt","Turmeric"]},
  "IngSet9893":{label:"Chaat Masala Mix",ingredients:["ChaatMasala","Tamarind","Cumin","Salt","Lemon"]},
  "IngSet9894":{label:"Puffed Rice Mix",ingredients:["Puffed Rice","Sev","Onion","Coriander","Green Chilli"]},
  "IngSet9896":{label:"Yogurt Lentil",ingredients:["Urad Dal","Yogurt","Salt","Cumin","ChaatMasala"]},
  "IngSet9897":{label:"Sambhar Lentil",ingredients:["Toor Dal","Tamarind","Tomato","Asafoetida","Mustard"]},
  "IngSet9899":{label:"Jhalmuri Mix",ingredients:["Puffed Rice","Mustard Oil","Green Chilli","Onion","Coriander"]},
  "IngSet9904":{label:"Potato-Pea Filling",ingredients:["Potato","Peas","Cumin","Coriander","Green Chilli","Ginger"]},
  "IngSet9914":{label:"Minced Meat Mix",ingredients:["Minced Beef","Onion","Coriander","Green Chilli","Pomegranate Seeds","Cumin"]},
};

const STEPS = {
  "Pani Puri":["Deep-fry small semolina discs until crispy and puffed — medium heat so they inflate evenly.","Boil potatoes and chickpeas. Mash potatoes, mix with chickpeas, salt, and chaat masala.","Blend mint, coriander, cumin, black salt, tamarind pulp, and chilled water to make the tangy pani.","Make a small hole in each puri, fill with the potato-chickpea mix, and submerge in cold spiced water just before eating."],
  "Gol Gappay":["Deep-fry semolina and flour discs until hollow and golden. Larger than Pani Puri.","Boil and mash potatoes, mix with chickpeas, cumin, and salt. Some add boiled lentils.","Prepare peppery water: blend tamarind, black pepper, cumin, green chilli, black salt, and coriander in chilled water.","Crack the top of each puri, spoon in filling, and dip fully into the peppery imli water."],
  "Fuchka":["Deep-fry semolina puris until crisp and hollow.","Boil potatoes and yellow peas. Mash coarsely with mustard, green chilli, and salt.","Prepare strong tamarind water with mustard notes, green chilli paste, and black salt.","Pierce each puri, fill with the pea-potato mixture, and fill with sharp tamarind water. Eat immediately."],
  "Aloo Tikki":["Boil potatoes until soft, then mash completely — no lumps.","Mix with cumin, coriander, green chilli, ginger, and salt. Add cornflour as binder. Shape into flat round patties.","Pan-fry on medium-high until a golden-brown crust forms on both sides, about 4 minutes per side.","Serve with green chutney and tamarind chutney."],
  "Beguni":["Slice eggplant into thin rounds (~5mm). Salt slices and rest 10 minutes, then pat dry.","Make thick batter with gram flour, turmeric, salt, cumin, and red chilli.","Dip each eggplant slice in batter and deep-fry in hot oil until golden and crisp.","Drain on paper and serve hot — traditionally eaten during Ramadan in Bangladesh."],
  "Bhel Puri":["Dry-roast puffed rice briefly to restore crunch.","Finely dice onion, tomato, and green chilli. Roughly crush sev and fried puris.","Combine puffed rice, sev, diced vegetables, boiled potato chunks, and chickpeas.","Add tamarind chutney, green chutney, chaat masala, and lemon juice. Toss quickly and serve immediately."],
  "Chana Chaat":["Soak dried chickpeas overnight, then boil until soft.","Dice onion, tomato, cucumber, and green chilli. Squeeze lemon juice over.","Combine chickpeas and vegetables. Season with chaat masala, roasted cumin, salt, and black salt.","Drizzle tamarind and green chutneys. Toss and garnish with coriander."],
  "Chapli Kebab":["Combine minced beef with onion, coriander, green chilli, tomato, cumin, pomegranate seeds, and egg. Mix well.","Rest the mixture 30 minutes. Flatten into wide thin patties.","Fry on high heat 3–4 minutes per side until dark-edged and caramelised.","Serve with naan and yoghurt raita."],
  "Chotpoti":["Soak white peas overnight. Boil until just soft but not mushy.","Boil potatoes, peel and dice. Combine with boiled peas.","Season with tamarind water, cumin, black salt, green chilli, and coriander.","Top with chopped egg, diced onion, and drizzle of mustard oil."],
  "Dahi Bhare":["Soak urad dal overnight. Grind to thick smooth batter with green chilli and ginger.","Deep-fry tablespoon-sized portions until light golden. Soak in warm water 10 minutes, then squeeze out.","Whip fresh yoghurt with salt and a little sugar until smooth. Place vadas in yoghurt.","Top with tamarind chutney, green chutney, roasted cumin, chilli powder, and sev."],
  "Idli Sambhar":["Soak rice and urad dal (3:1) separately for 6 hours. Grind to smooth batter. Ferment overnight.","Pour batter into greased idli moulds. Steam 10–12 minutes until a toothpick comes out clean.","Boil toor dal with tamarind, tomato, and vegetables. Make a tempering of mustard seeds, curry leaves, red chilli, and asafoetida. Add to dal and simmer.","Serve hot idlis with fresh sambhar and coconut chutney."],
  "Jhalmuri":["Measure out fresh puffed rice.","Finely chop onion, green chilli, and coriander. Dice tomato and cucumber.","Add mustard oil, tamarind pulp, green chilli, onion, and chaat masala. Toss vigorously 1–2 minutes — rice must stay crunchy.","Serve in paper cones for the authentic Dhaka street food experience."],
  "Masala Dosa":["Ferment rice-urad batter overnight — it should double and smell slightly sour.","Boil and mash potatoes roughly. Make tempering of mustard seeds, curry leaves, green chilli, ginger, and turmeric. Add mashed potato.","Heat griddle to high. Ladle batter and spread in thin circles. Drizzle oil along edges.","Add potato masala on one half once surface dries. Fold and serve with sambhar and coconut chutney."],
  "Samosa":["Make firm dough with flour, ajwain, salt, and oil. Rest 20 minutes.","Boil and mash potatoes and peas. Cook with cumin, coriander, ginger, green chilli, and amchur. Cool.","Roll dough thin, cut into semicircles, fold into cones, fill, and seal into triangles.","Deep-fry in medium-hot oil until golden and crisp, about 8 minutes."],
  "Shingara":["Make slightly richer dough. Roll thin.","Prepare filling with potato, peas, and milder spice blend — less cumin, more onion, finished with mustard oil.","Shape into smaller triangles with tighter pleating than samosa.","Deep-fry at medium heat until pastry is flaky and pale golden."],
  "Vada Pav":["Boil potatoes, mash with mustard seeds, curry leaves, green chilli, ginger, and turmeric.","Make small balls of potato mix. Dip in gram flour batter seasoned with turmeric and red chilli. Deep-fry until golden.","Prepare dry garlic-coconut chutney by grinding roasted garlic, dried coconut, red chilli, and salt.","Slit a soft pav bun, spread chutney on both sides, place the vada inside. Press and serve."],
};

const FLAGS = {India:"🇮🇳",Pakistan:"🇵🇰",Bangladesh:"🇧🇩","India/Pakistan":"🇮🇳🇵🇰"};
const PKG = ["Potato","Salt","Tamarind","Rice","Lentil","Onion","Tomato","Cumin","Coriander","GreenChilli","Ginger","Garlic","Yogurt","Oil","Flour","Peas","Water","Mustard","Turmeric","BlackPepper","Lemon","Mint","UradDal","ToorDal","Chickpeas","PuffedRice","MincedBeef","MustardOil","Fenugreek","Cardamom"];
const CUSTOM = ["Sev","ChaatMasala","Jaggery","Asafoetida","BlackSalt","PomegranateSeeds","GramFlour","Eggplant"];


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
  const q=searchInput.value.trim().toLowerCase();
  if(!q){sugEl.classList.remove('open');return}
  const hits=DISHES.filter(d=>d.name.toLowerCase().includes(q)||d.country.toLowerCase().includes(q)||d.techniques.some(t=>t.toLowerCase().includes(q)));
  if(!hits.length){sugEl.classList.remove('open');return}
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
  const q=searchInput.value.trim().toLowerCase();
  const m=DISHES.find(d=>d.name.toLowerCase().startsWith(q)||d.name.toLowerCase().includes(q));
  if(m)selectDish(m.name);
});
searchInput.addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('search-btn').click()});
function selectDish(name){sugEl.classList.remove('open');searchInput.value=name;openRecipe(name)}

/* ============================================================
   RECIPE MODAL
   ============================================================ */
function openRecipe(name){
  const dish=DISHES.find(d=>d.name===name);
  if(!dish)return;
    const heroEl=document.getElementById('modal-hero'),emojiEl=document.getElementById('modal-emoji');
  const mImgSrc=dish.imgKey&&window.DISH_IMGS&&window.DISH_IMGS[dish.imgKey];
  if(mImgSrc){heroEl.style.background=`linear-gradient(to bottom,rgba(0,0,0,.18) 0%,rgba(0,0,0,.55) 100%),url(${mImgSrc}) center/cover no-repeat`;emojiEl.style.display='none';}
  else{heroEl.style.background=`linear-gradient(135deg,${dish.grad[0]},${dish.grad[1]})`;emojiEl.style.display='';emojiEl.textContent=dish.emoji;}  document.getElementById('modal-flag').textContent=FLAGS[dish.country]||'🌏';
  document.getElementById('modal-country').textContent=dish.country;
  document.getElementById('modal-name').textContent=dish.name;

  const veg=dish.dietary==='Vegetarian';
  let badges=`<span class="rbadge ${veg?'veg':'nonveg'}">${veg?'🌿 Vegetarian':'🍖 Non-Vegetarian'}</span>`;
  if(dish.variant)badges+=dish.variant.map(v=>`<span class="rbadge variant">⇄ ${v}</span>`).join('');
  document.getElementById('modal-badges').innerHTML=badges;

  const seen=new Set(), ings=[];
  dish.ingredientSets.forEach(id=>(INGSET[id]?.ingredients||[]).forEach(ing=>{if(!seen.has(ing)){seen.add(ing);ings.push(ing)}}));
  document.getElementById('modal-ingredients').innerHTML=ings.map(i=>`<div class="ingredient-item"><div class="ing-dot"></div>${i}</div>`).join('');

  const steps=STEPS[dish.name]||['Prepare ingredients.','Cook using traditional methods.','Serve immediately.'];
  document.getElementById('modal-steps').innerHTML=steps.map((s,i)=>`<div class="step-item"><div class="step-num">${i+1}</div><div class="step-text">${s}</div></div>`).join('');

  document.getElementById('modal-techniques').innerHTML=dish.techniques.map(t=>`<span class="technique-chip">${t}</span>`).join('');

  const varSec=document.getElementById('modal-variants-sec');
  if(dish.variant?.length){
    varSec.style.display='block';
    document.getElementById('modal-variants').innerHTML=dish.variant.map(v=>{const vd=DISHES.find(d=>d.name===v);return`<span class="variant-link-chip" onclick="switchRecipe('${v}')">${FLAGS[vd?.country]||''} ${v} →</span>`}).join('');
  } else varSec.style.display='none';

  const shared=new Set(dish.ingredientSets);
  const rel=DISHES.filter(d=>d.name!==dish.name&&d.ingredientSets.some(s=>shared.has(s)));
  const rRow=document.getElementById('modal-related-row');
  if(rel.length){rRow.style.display='block';document.getElementById('modal-related').innerHTML=rel.map(d=>`<span class="related-chip" onclick="switchRecipe('${d.name}')">${d.emoji} ${d.name}</span>`).join('')}
  else rRow.style.display='none';

  document.getElementById('recipe-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function switchRecipe(n){openRecipe(n)}
function closeRecipe(){document.getElementById('recipe-overlay').classList.remove('open');document.body.style.overflow='';}
document.getElementById('recipe-close').addEventListener('click',closeRecipe);
document.getElementById('recipe-overlay').addEventListener('click',e=>{if(e.target===e.currentTarget)closeRecipe()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeRecipe()});

/* ============================================================
   DISHES GRID
   ============================================================ */
let activeCountry='all', activeDiet=null;
let cardBatches=[];

function renderDishes(animate=true){
  const grid=document.getElementById('dishes-grid');
  // Kill old scroll triggers
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
    const imgSrc2 = dish.imgKey && window.DISH_IMGS && window.DISH_IMGS[dish.imgKey];
    const imgHTML2 = imgSrc2
      ? `<div class="dish-img dish-img--photo"><img src="${imgSrc2}" alt="${dish.name}" loading="lazy"><div class="country-badge">${FLAGS[dish.country]||'🌏'} ${dish.country}</div><div class="diet-dot" title="${dish.dietary}">${isVeg?'🌿':'🍖'}</div></div>`
      : `<div class="dish-img" style="background:linear-gradient(135deg,${dish.grad[0]},${dish.grad[1]})"><div class="img-pattern"></div><span class="big-emoji">${dish.emoji}</span><div class="country-badge">${FLAGS[dish.country]||'🌏'} ${dish.country}</div><div class="diet-dot" title="${dish.dietary}">${isVeg?'🌿':'🍖'}</div></div>`;
    card.innerHTML=`${imgHTML2}
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
    // Set initial state then batch animate
    gsap.set('.dish-card', {opacity:0, y:55, scale:0.93});
    cardBatches=ScrollTrigger.batch('.dish-card', {
      onEnter: batch => gsap.to(batch, {
        opacity:1, y:0, scale:1,
        duration:.65, stagger:.07,
        ease:'power3.out',
        overwrite:true
      }),
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

  /* ── SCROLL PROGRESS BAR ── */
  gsap.to('#scroll-progress', {
    scaleX:1, ease:'none',
    scrollTrigger:{ start:'top top', end:'max', scrub:0 }
  });

  /* ── HERO ENTRANCE ── */
  gsap.fromTo('.hero-eyebrow',
    { clipPath:'inset(0 100% 0 0)', opacity:1 },
    { clipPath:'inset(0 0% 0 0)', duration:.9, ease:'power3.out', delay:.15 }
  );
  gsap.fromTo('.hero-title',
    { y:90, opacity:0, scale:.94 },
    { y:0, opacity:1, scale:1, duration:1.1, ease:'power4.out', delay:.35 }
  );
  gsap.fromTo('.hero-sub',
    { y:40, opacity:0 },
    { y:0, opacity:1, duration:.9, ease:'power3.out', delay:.55 }
  );
  gsap.fromTo('.search-wrap',
    { y:50, opacity:0 },
    { y:0, opacity:1, duration:1, ease:'power3.out', delay:.85 }
  );
  gsap.fromTo('.country-card',
    { y:26, opacity:0, scale:.91 },
    { y:0, opacity:1, scale:1, duration:.55, stagger:.1, ease:'back.out(1.4)', delay:1 }
  );
  gsap.fromTo('.hero-credits',
    { opacity:0 },
    { opacity:1, duration:.6, delay:1.3 }
  );
  gsap.fromTo('.hero-scroll',
    { opacity:0, y:-8 },
    { opacity:1, y:0, duration:.5, delay:1.5 }
  );
  /* Ken Burns on hero image */
  gsap.to('.hero-video', { scale:1.1, duration:12, ease:'none', transformOrigin:'center center' });

  /* ── DISH MARQUEE PARALLAX ── */
  gsap.fromTo('.dish-marquee-section',
    { opacity:0, y:30 },
    { opacity:1, y:0, duration:.8, ease:'power2.out',
      scrollTrigger:{ trigger:'.dish-marquee-section', start:'top 90%' }
    }
  );

  /* ── STATS ── */
  gsap.fromTo('.stat-card',
    { opacity:0, y:48, scale:.85 },
    { opacity:1, y:0, scale:1, duration:.8, stagger:.14, ease:'back.out(1.4)',
      scrollTrigger:{ trigger:'#stats-band', start:'top 78%',
        onEnter:()=>document.querySelectorAll('.stat-number').forEach(el=>countUp(el,+el.dataset.target,el.dataset.suffix||''))
      }
    }
  );

  /* ── BROWSE SECTION HEADER ── */
  const browseHeader=document.querySelector('#browse .section-header');
  const browseLabel=browseHeader.querySelector('.section-label');
  gsap.fromTo(browseLabel,
    { opacity:0, y:16 },
    { opacity:1, y:0, duration:.6, ease:'power2.out',
      scrollTrigger:{ trigger:browseHeader, start:'top 88%' }
    }
  );
  gsap.to(browseLabel.querySelector('::after') ? browseLabel : browseLabel, {});
  // Label underline sweep
  gsap.fromTo(browseLabel,
    { '--w':'0%' }, { '--w':'40px', duration:.8, ease:'power2.out', delay:.2,
      scrollTrigger:{ trigger:browseHeader, start:'top 88%' }
    }
  );
  gsap.fromTo(browseHeader.querySelector('.section-title'),
    { opacity:0, y:30 },
    { opacity:1, y:0, duration:.75, ease:'power2.out', delay:.1,
      scrollTrigger:{ trigger:browseHeader, start:'top 88%' }
    }
  );
  gsap.fromTo(browseHeader.querySelector('.section-desc'),
    { opacity:0, y:20 },
    { opacity:1, y:0, duration:.65, ease:'power2.out', delay:.22,
      scrollTrigger:{ trigger:browseHeader, start:'top 88%' }
    }
  );

  /* ── FILTER CONTROLS ── */
  gsap.fromTo('#explorer-controls .pill-btn',
    { opacity:0, y:16, scale:.9 },
    { opacity:1, y:0, scale:1, duration:.5, stagger:.05, ease:'back.out(1.3)',
      scrollTrigger:{ trigger:'#explorer-controls', start:'top 88%' }
    }
  );

  /* ── STORY SECTION ── */
  // Text block — children stagger from left
  gsap.fromTo('#story-text > *',
    { opacity:0, x:-45 },
    { opacity:1, x:0, duration:.9, stagger:.13, ease:'power3.out',
      scrollTrigger:{ trigger:'.story-section', start:'top 72%' }
    }
  );
  // Hierarchy card from right
  gsap.fromTo('#hierarchy-card',
    { opacity:0, x:55 },
    { opacity:1, x:0, duration:1, ease:'power3.out',
      scrollTrigger:{ trigger:'.story-section', start:'top 72%' }
    }
  );
  // H-nodes cascade
  gsap.fromTo('.h-node',
    { opacity:0, x:-14 },
    { opacity:1, x:0, duration:.48, stagger:.1, ease:'power2.out',
      scrollTrigger:{ trigger:'#hierarchy-card', start:'top 80%' }, delay:.4
    }
  );
  gsap.fromTo('.h-connector',
    { opacity:0, scaleY:0 },
    { opacity:1, scaleY:1, duration:.28, stagger:.1, ease:'power2.out',
      scrollTrigger:{ trigger:'#hierarchy-card', start:'top 80%' }, delay:.55
    }
  );
  // Deco cards pop
  gsap.fromTo('.deco-card',
    { opacity:0, scale:.72, rotation:-4 },
    { opacity:1, scale:1, rotation:0, duration:.65, stagger:.22, ease:'back.out(1.8)',
      scrollTrigger:{ trigger:'#story-visual', start:'top 72%' }, delay:.6
    }
  );

  /* ── ONTO SECTION HEADER ── */
  gsap.fromTo('#onto-header > *',
    { opacity:0, y:24 },
    { opacity:1, y:0, duration:.7, stagger:.12, ease:'power2.out',
      scrollTrigger:{ trigger:'#onto-header', start:'top 88%' }
    }
  );

  /* ── ONTO CARDS ── */
  gsap.fromTo('#onto-grid .onto-card',
    { opacity:0, y:42 },
    { opacity:1, y:0, duration:.8, stagger:.18, ease:'power2.out',
      scrollTrigger:{ trigger:'#onto-grid', start:'top 80%' }
    }
  );

  /* ── INGREDIENT CHIPS ── */
  gsap.fromTo('.ing-chip',
    { opacity:0, scale:.55 },
    { opacity:1, scale:1, duration:.38, stagger:.025, ease:'back.out(1.6)',
      scrollTrigger:{ trigger:'#onto-grid', start:'top 62%' }, delay:.45
    }
  );

  /* ── SUBSUMPTION DIAGRAM ── */
  const subTl=gsap.timeline({
    scrollTrigger:{ trigger:'#sub-diagram', start:'top 82%' }
  });
  subTl
    .fromTo('.sub-node.root', {opacity:0,scale:0}, {opacity:1,scale:1,duration:.5,ease:'back.out(2)'})
    .fromTo('.sub-arrow', {opacity:0}, {opacity:1,duration:.3,stagger:.08}, '-=.05')
    .fromTo('.sub-label', {opacity:0,y:6}, {opacity:1,y:0,duration:.3,stagger:.08}, '<')
    .fromTo('.sub-node.mid', {opacity:0,scale:0}, {opacity:1,scale:1,duration:.5,stagger:.1,ease:'back.out(2)'}, '-=.1')
    .fromTo('.sub-node.leaf', {opacity:0,scale:0}, {opacity:1,scale:1,duration:.42,stagger:.07,ease:'back.out(2)'}, '-=.05');

  /* ── FOOTER ── */
  gsap.fromTo('#footer-inner > *',
    { opacity:0, y:30 },
    { opacity:1, y:0, duration:.8, stagger:.15, ease:'power2.out',
      scrollTrigger:{ trigger:'footer', start:'top 88%' }
    }
  );

}

/* ============================================================
   DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded',()=>{
  // Build ontology chips (elements may not exist if section removed)
  const pkgEl=document.getElementById('pkg-ings');
  const customEl=document.getElementById('custom-ings');
  if(pkgEl) pkgEl.innerHTML=PKG.map(i=>`<span class="ing-chip pkg">${i}</span>`).join('');
  if(customEl) customEl.innerHTML=CUSTOM.map(i=>`<span class="ing-chip custom">${i}</span>`).join('');

  // Render dishes
  renderDishes(false); // no animation on first render — GSAP batch takes over

  // Wire up filter buttons
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

  // Init GSAP — defer one frame so DOM is fully painted
  requestAnimationFrame(()=>{
    // Trigger the initial dish batch (they're in viewport area potentially)
    gsap.set('.dish-card', {opacity:0, y:55, scale:0.93});
    cardBatches=ScrollTrigger.batch('.dish-card', {
      onEnter: batch => gsap.to(batch, {
        opacity:1, y:0, scale:1, duration:.65, stagger:.07, ease:'power3.out', overwrite:true
      }),
      start:'top 92%',
      once:true
    });

    initGSAP();
  });
});
