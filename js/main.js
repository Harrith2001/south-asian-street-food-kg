/* ============================================================
   SPARQL ENDPOINT
   ============================================================ */
const SPARQL_ENDPOINT = 'https://triplydb.com/_api/datasets/Areesha/South-Asian-Street-Food-KG/sparql';

/* ── UI METADATA (not in KG: emoji, gradient, image key, prepTime, spiceLevel) ── */
const DISH_UI = {
  'Pani Puri':    { emoji: '🫙', grad: ['#006994','#00B4D8'],  imgKey: 'Golgappay',       prepTime: 45,  spiceLevel: 'Hot' },
  'Gol Gappay':  { emoji: '🫙', grad: ['#6B21A8','#A855F7'],  imgKey: 'Golgappay',       prepTime: 45,  spiceLevel: 'Hot' },
  'Fuchka':      { emoji: '🫙', grad: ['#16633C','#2DC653'],   imgKey: 'Fuchka',          prepTime: 45,  spiceLevel: 'Hot' },
  'Aloo Tikki':  { emoji: '🥔', grad: ['#B7791F','#F6C90E'],  imgKey: 'Aloo Tikki Chaat',prepTime: 30,  spiceLevel: 'Medium' },
  'Beguni':      { emoji: '🍆', grad: ['#5B21B6','#8B5CF6'],  imgKey: 'Baingan Bhaja',   prepTime: 20,  spiceLevel: 'Mild' },
  'Bhel Puri':   { emoji: '🌾', grad: ['#C2410C','#FB923C'],  imgKey: 'Bhel Puri',       prepTime: 15,  spiceLevel: 'Medium' },
  'Chana Chaat': { emoji: '🫘', grad: ['#92400E','#F59E0B'],  imgKey: 'Chana Chaat',     prepTime: 30,  spiceLevel: 'Medium' },
  'Chapli Kebab':{ emoji: '🥩', grad: ['#7F1D1D','#DC2626'],  imgKey: 'Chapli Kabab',    prepTime: 60,  spiceLevel: 'Hot' },
  'Chotpoti':    { emoji: '🫘', grad: ['#14532D','#16A34A'],  imgKey: 'Chotpoti',        prepTime: 45,  spiceLevel: 'Hot' },
  'Dahi Bharay': { emoji: '🥣', grad: ['#1E3A5F','#3B82F6'],  imgKey: 'Dahi Baray',      prepTime: 90,  spiceLevel: 'Mild' },
  'Idli Sambar': { emoji: '🍚', grad: ['#78350F','#F59E0B'],  imgKey: 'Idli Sambhar',    prepTime: 90,  spiceLevel: 'Medium' },
  'Jhalmuri':    { emoji: '🌿', grad: ['#365314','#84CC16'],  imgKey: 'Jhalmuri',        prepTime: 15,  spiceLevel: 'VeryHot' },
  'Masala Dosa': { emoji: '🫓', grad: ['#9A3412','#EA580C'],  imgKey: 'Masala Dosa',     prepTime: 90,  spiceLevel: 'Medium' },
  'Samosa':      { emoji: '🥟', grad: ['#92400E','#D97706'],  imgKey: 'Samosa',          prepTime: 60,  spiceLevel: 'Medium' },
  'Shingara':    { emoji: '🥟', grad: ['#78350F','#A16207'],  imgKey: 'Shingara',        prepTime: 60,  spiceLevel: 'Medium' },
  'VadaPav':     { emoji: '🫓', grad: ['#9F1239','#E11D48'],  imgKey: 'Vada Pav',        prepTime: 45,  spiceLevel: 'Hot' },
};

const STATIC_IMGS = {
  "Golgappay":          "./images/golgappay.jpg",
  "Chotpoti":           "./images/chotpoti-fuchka.jpg",
  "Fuchka":             "./images/fuchka.jpg",
  "Aloo Tikki Chaat":   "./images/aloo-tikki-chaat.jpg",
  "Baingan Bhaja":      "./images/baingan-bhaja.jpg",
  "Chana Chaat":        "./images/chana-chaat.jpg",
  "Vada Pav":           "./images/vada-pav.jpg",
  "Dahi Baray":         "./images/dahi-baray.jpg",
  "Bhel Puri":          "./images/bhel-puri.jpg",
  "Chapli Kabab":       "./images/chapli-kabab.jpg",
  "Idli Sambhar":       "./images/idli-sambhar.jpg",
  "Jhalmuri":           "./images/jhalmuri.jpg",
  "Masala Dosa":        "./images/masala-dosa.jpg",
  "Samosa":             "./images/samosa.jpg",
  "Shingara":           "./images/shingara.jpg"
  
};
window.DISH_IMGS = STATIC_IMGS;

const FLAG_SVG = {
  India: `<svg viewBox="0 0 900 600" class="flag-icon"><rect width="900" height="200" fill="#FF9933"/><rect y="200" width="900" height="200" fill="#fff"/><rect y="400" width="900" height="200" fill="#138808"/><circle cx="450" cy="300" r="60" fill="none" stroke="#000080" stroke-width="4"/></svg>`,
  Pakistan: `<svg viewBox="0 0 900 600" class="flag-icon"><rect width="225" height="600" fill="#fff"/><rect x="225" width="675" height="600" fill="#01411C"/><circle cx="510" cy="300" r="130" fill="#fff"/><circle cx="540" cy="300" r="110" fill="#01411C"/><polygon points="590,220 600,255 635,255 607,275 617,310 590,290 563,310 573,275 545,255 580,255" fill="#fff"/></svg>`,
  Bangladesh: `<svg viewBox="0 0 900 600" class="flag-icon"><rect width="900" height="600" fill="#006a4e"/><circle cx="400" cy="300" r="150" fill="#F42A41"/></svg>`,
};
FLAG_SVG["India/Pakistan"] = FLAG_SVG.India + FLAG_SVG.Pakistan;
const FLAGS = { India: "🇮🇳", Pakistan: "🇵🇰", Bangladesh: "🇧🇩", "India/Pakistan": "🇮🇳🇵🇰" };

// const SET_NAME_MAPPINGS = {
//   'IngSet9893': 'Mint-Coriander Chutney',
//   'IngSet9887': 'Spiced Potato & Chickpea Filling',
//   'IngSet9886': 'Semolina Pastry Dough (Puri Shells)',
//   'IngSet9891': 'Sweet & Sour Tamarind Sauce',
//   'IngSet9892': 'Spiced Gram Flour Batter',
//   'IngSet9894': 'Crispy Bhel Mix',
//   'IngSet9897': 'Sambar (Lentil Vegetable Stew)',
//   'IngSet9896': 'Lentil Dumplings Base',
//   'IngSet9885': 'Tangy Tamarind Water',
//   'IngSet9884': 'Spiced Mint-Tamarind Water',
//   'IngSet9883': 'Sweet & Sour Spiced Water',
//   'IngSet9889': 'Fermented Rice & Lentil Batter'
// };

// Only emoji mappings for ingredient sets - names come from rdfs:label in Protégé
const SET_ICONS = {
  'IngSet9893': '🌿', 'IngSet9887': '🥔', 'IngSet9886': '🫓',
  'IngSet9891': '🫙', 'IngSet9892': '🥣', 'IngSet9894': '🌾',
  'IngSet9897': '🥕', 'IngSet9896': '🥣', 'IngSet9885': '🍋',
  'IngSet9884': '🌶️','IngSet9883': '💧', 'IngSet9889': '🍚',
  'IngSet9888': '🥟', 'IngSet9898': '🥟'  // Samosa & Shingara
};

/* ── RUNTIME STATE ── */
let DISHES = [];
let cardBatches = [];
let currentSPARQLQuery = '';
let basesLoaded = false;
let locationsLoaded = false;
let locMap = null;
let locMarkers = [];
let locData = { restaurants: [], groceries: [] };

/* ── FILTER STATE ── */
const filterState = {
  country: 'all',       // 'all' | 'india' | 'pakistan' | 'bangladesh'
  dietary: [],          // [] | ['veg'] | ['nonveg'] | ['veg','nonveg']
  maxPrepTime: 'any',   // 'any' | '30' | '60' | '90'
  spiceLevels: [],      // [] | ['Mild','Medium','Hot','VeryHot']
  excludeMethods: [],   // e.g. ['DeepFrying', 'Boiling']
  q6Ingredients: [],    // string array from input
  q6Results: null,      // Set<uri> from last Q6 SPARQL call | null = not yet fetched
};

/* ============================================================
   SPARQL ENGINE WITH LIVE CONSOLE LOGGING
   ============================================================ */
async function querySPARQL(query) {
  currentSPARQLQuery = query.trim();
  updateConsoleState('running');
  const startTime = performance.now();
  try {
    const res = await fetch(SPARQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/sparql-query',
        'Accept': 'application/sparql-results+json'
      },
      body: query
    });
    const duration = (performance.now() - startTime).toFixed(0);
    if (!res.ok) {
      const errMsg = await res.text();
      updateConsoleState('error', 0, duration, errMsg);
      throw new Error('SPARQL ' + res.status + ': ' + errMsg);
    }
    const json = await res.json();
    const bindings = json.results.bindings;
    updateConsoleState('success', bindings.length, duration);
    return bindings;
  } catch (err) {
    const duration = (performance.now() - startTime).toFixed(0);
    updateConsoleState('error', 0, duration, err.message);
    throw err;
  }
}

function updateConsoleState(status, count = 0, duration = 0, errorDetails = '') {
  const consoleEl  = document.getElementById('sparql-console');
  const statusEl   = document.getElementById('console-status');
  const codeEl     = document.getElementById('console-query-code');
  const durationEl = document.getElementById('console-duration');
  const resultsEl  = document.getElementById('console-results');
  if (!consoleEl) return;
  statusEl.className = 'console-status-pill ' + status;
  statusEl.textContent = status.toUpperCase();
  if (status === 'running') {
    codeEl.textContent = currentSPARQLQuery;
    durationEl.textContent = 'Running…';
    resultsEl.textContent = '-';
  } else if (status === 'success') {
    codeEl.textContent = currentSPARQLQuery;
    durationEl.textContent = duration + ' ms';
    resultsEl.textContent = count;
  } else if (status === 'error') {
    codeEl.textContent = currentSPARQLQuery + '\n\n# ERROR:\n# ' + errorDetails;
    durationEl.textContent = duration + ' ms';
    resultsEl.textContent = 'Error';
  }
}

function initSPARQLConsole() {
  const consoleEl = document.getElementById('sparql-console');
  const headerEl  = document.getElementById('sparql-console-header');
  const toggleBtn = document.getElementById('console-toggle');
  const copyBtn   = document.getElementById('copy-query-btn');
  const codeEl    = document.getElementById('console-query-code');
  if (!consoleEl) return;
  headerEl.addEventListener('click', () => {
    consoleEl.classList.toggle('minimized');
    toggleBtn.textContent = consoleEl.classList.contains('minimized') ? '▲' : '▼';
  });
  copyBtn.addEventListener('click', e => {
    e.stopPropagation();
    navigator.clipboard.writeText(codeEl.textContent).then(() => {
      const orig = copyBtn.textContent;
      copyBtn.textContent = 'Copied!';
      copyBtn.style.background = '#84E296';
      copyBtn.style.color = '#000';
      setTimeout(() => { copyBtn.textContent = orig; copyBtn.style.background = ''; copyBtn.style.color = ''; }, 1500);
    });
  });
}

function uriLocalName(uri) {
  return decodeURIComponent(uri.replace(/^.*[#/]/, '').replace(/_/g, ' '));
}

function getFriendlyBaseName(uri) {
  // Fallback: extract local name from URI if rdfs:label is not available
  const local = uri.replace(/^.*[#/]/, '');
  return local.replace(/_/g, ' ');
}

function getFriendlyBaseIcon(uri) {
  const local = uri.replace(/^.*[#/]/, '');
  return SET_ICONS[local] || '🍛';
}

/* ============================================================
   SPARQL QUERIES (Q2, Q3, Q6)
   Q1/Q4/Q5 are handled locally using loaded dish data
   ============================================================ */

// Q2. Regional Variants of [Street Food] — used in modal
async function getRegionalVariants(dishName) {
  const query = `
PREFIX sasf: <http://example.org/southasianstreetfood#>
PREFIX owl:  <http://www.w3.org/2002/07/owl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT ?variant ?country WHERE {
  {
    ?variant rdfs:subClassOf [
      owl:onProperty sasf:isVariantOf ;
      owl:someValuesFrom sasf:${dishName}
    ] .
  }
  UNION
  {
    ?variant rdfs:subClassOf [
      owl:intersectionOf ?list
    ] .
    ?list rdf:rest*/rdf:first [
      owl:onProperty sasf:isVariantOf ;
      owl:someValuesFrom sasf:${dishName}
    ] .
  }
  {
    ?variant rdfs:subClassOf [
      owl:onProperty sasf:originatesFrom ;
      owl:someValuesFrom ?country
    ] .
  }
  UNION
  {
    ?variant rdfs:subClassOf [
      owl:intersectionOf ?list2
    ] .
    ?list2 rdf:rest*/rdf:first [
      owl:onProperty sasf:originatesFrom ;
      owl:someValuesFrom ?country
    ] .
  }
}`;
  return await querySPARQL(query);
}

// Q3. Shared Culinary Bases (used in Culinary Bases tab)
async function getDishesFromIngredientSet() {
  const query = `
PREFIX rdfs:   <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl:    <http://www.w3.org/2002/07/owl#>
PREFIX rdf:    <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX sasf:   <http://example.org/southasianstreetfood#>
PREFIX recipe: <http://purl.org/ProductKG/RecipeOn#>
SELECT ?ingSet ?ingSetLabel (COUNT(DISTINCT ?dish) AS ?numberOfDishes)
       (GROUP_CONCAT(DISTINCT ?dishLabel; separator=", ") AS ?dishNames)
       (GROUP_CONCAT(DISTINCT ?ingLabel; separator=", ") AS ?ingredientNames)
WHERE {
  ?dish rdfs:subClassOf sasf:StreetFood ; rdfs:label ?dishLabel .
  {
    ?dish rdfs:subClassOf [
      owl:onProperty sasf:hasIngredientSet ;
      owl:someValuesFrom ?ingSet
    ] .
  }
  UNION
  {
    ?dish rdfs:subClassOf [
      owl:intersectionOf ?list
    ] .
    ?list rdf:rest*/rdf:first [
      owl:onProperty sasf:hasIngredientSet ;
      owl:someValuesFrom ?ingSet
    ] .
  }
  OPTIONAL { ?ingSet rdfs:label ?ingSetLabel }
  OPTIONAL {
    {
      ?ingSet rdfs:subClassOf [
        owl:onProperty recipe:hasIngredient ;
        owl:someValuesFrom ?ing
      ] .
    }
    UNION
    {
      ?ingSet rdfs:subClassOf [
        owl:intersectionOf ?listIng
      ] .
      ?listIng rdf:rest*/rdf:first [
        owl:onProperty recipe:hasIngredient ;
        owl:someValuesFrom ?ing
      ] .
    }
    OPTIONAL { ?ing rdfs:label ?ingL }
    BIND(COALESCE(?ingL, REPLACE(STR(?ing), "^.*[#]", "")) AS ?ingLabelRaw)
  }
  BIND(REPLACE(COALESCE(?ingLabelRaw, ""), "%20", " ") AS ?ingLabel)
}
GROUP BY ?ingSet ?ingSetLabel
ORDER BY DESC(?numberOfDishes)`;
  return await querySPARQL(query);
}

// Q6. Dishes containing given ingredients
async function getDishesFromIngredients(ingredients) {
  const filterConditions = ingredients
    .map(ing => `contains(?cleanLabel, "${ing.trim().toLowerCase()}")`)
    .join(' || ');

  const query = `
PREFIX rdfs:   <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl:    <http://www.w3.org/2002/07/owl#>
PREFIX rdf:    <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX sasf:   <http://example.org/southasianstreetfood#>
PREFIX recipe: <http://purl.org/ProductKG/RecipeOn#>
SELECT ?dish WHERE {
  ?dish rdfs:subClassOf* sasf:StreetFood .
  FILTER(?dish != sasf:StreetFood)
  {
    {
      ?dish rdfs:subClassOf [owl:onProperty recipe:hasIngredient ; owl:someValuesFrom ?ingredient] .
    }
    UNION
    {
      ?dish rdfs:subClassOf [owl:onProperty sasf:hasIngredientSet ; owl:someValuesFrom ?ingSet] .
      ?ingSet rdfs:subClassOf [owl:onProperty recipe:hasIngredient ; owl:someValuesFrom ?ingredient] .
    }
    UNION
    {
      ?dish rdfs:subClassOf [owl:intersectionOf ?list] .
      ?list rdf:rest*/rdf:first [owl:onProperty recipe:hasIngredient ; owl:someValuesFrom ?ingredient] .
    }
    UNION
    {
      ?dish rdfs:subClassOf [owl:intersectionOf ?list] .
      ?list rdf:rest*/rdf:first [owl:onProperty sasf:hasIngredientSet ; owl:someValuesFrom ?ingSet] .
      ?ingSet rdfs:subClassOf [owl:onProperty recipe:hasIngredient ; owl:someValuesFrom ?ingredient] .
    }
    OPTIONAL { ?ingredient rdfs:label ?labelVal }
    BIND(REPLACE(LCASE(COALESCE(?labelVal, REPLACE(STR(?ingredient), "^.*[#]", ""))), "%20", " ") AS ?cleanLabel)
    FILTER (${filterConditions})
  }
}
GROUP BY ?dish
HAVING (COUNT(DISTINCT ?ingredient) >= ${ingredients.length})`;
  return await querySPARQL(query);
}

/* ============================================================
   CORE DATA INGESTION
   ============================================================ */
async function loadDishData() {
  const PFX = `
    PREFIX sakg: <http://example.org/southasianstreetfood#>
    PREFIX pkg:  <http://purl.org/ProductKG/RecipeOn#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX owl:  <http://www.w3.org/2002/07/owl#>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  `;

  const [coreRows, techRows, ingRows, ingSetRows, varRows] = await Promise.all([
    querySPARQL(PFX + `
      SELECT DISTINCT ?dish ?name ?comment ?instructions ?country ?dietary ?popularInCountry WHERE {
        ?dish rdfs:subClassOf* sakg:StreetFood ; rdfs:label ?name .
        FILTER(?dish != sakg:StreetFood)
        OPTIONAL { ?dish rdfs:comment ?comment }
        OPTIONAL { ?dish sakg:instructions ?instructions }
        OPTIONAL {
          ?dish rdfs:subClassOf ?r1 .
          ?r1 owl:onProperty sakg:originatesFrom ; owl:someValuesFrom ?c .
          ?c rdfs:label ?country .
        }
        OPTIONAL {
          ?dish rdfs:subClassOf ?r2 .
          ?r2 owl:onProperty sakg:hasDietaryProperty;
          owl:someValuesFrom ?dietary .
        }
        OPTIONAL {
          ?dish rdfs:subClassOf ?r3 .
          ?r3 owl:onProperty sakg:popularIn;
          owl:someValuesFrom ?popularInCountry .
        }
      }
    `),
    querySPARQL(PFX + `
      SELECT ?dish ?t ?technique WHERE {
        ?dish rdfs:subClassOf* sakg:StreetFood.
        FILTER(?dish != sakg:StreetFood).
        ?dish rdfs:subClassOf ?r .
        ?r owl:onProperty sakg:usesMethod ; owl:someValuesFrom ?t .
        OPTIONAL { ?t rdfs:label ?technique }
      }
    `),
    querySPARQL(PFX + `
      SELECT ?dish ?ingURI ?ingLabel WHERE {
        ?dish rdfs:subClassOf* sakg:StreetFood .
        FILTER(?dish != sakg:StreetFood).
        ?dish rdfs:subClassOf ?r .
        ?r owl:onProperty pkg:hasIngredient ; owl:someValuesFrom ?ingURI .
        OPTIONAL { ?ingURI rdfs:label ?ingLabel }
      }
    `),
    querySPARQL(PFX + `
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      SELECT ?dish ?ingSet ?ingSetLabel ?ingSetInstr ?ingURI ?ingLabel WHERE {
        ?dish rdfs:subClassOf* sakg:StreetFood .
        FILTER(?dish != sakg:StreetFood)
        {
          ?dish rdfs:subClassOf ?r1 .
          ?r1 owl:onProperty sakg:hasIngredientSet ; owl:someValuesFrom ?ingSet .
        }
        UNION
        {
          ?dish rdfs:subClassOf ?interNode .
          ?interNode owl:intersectionOf ?list .
          ?list rdf:rest*/rdf:first ?r1 .
          ?r1 owl:onProperty sakg:hasIngredientSet ; owl:someValuesFrom ?ingSet .
        }
        OPTIONAL { ?ingSet rdfs:label ?ingSetLabel }
        OPTIONAL { ?ingSet sakg:instructions ?ingSetInstr }
        OPTIONAL {

  {
    ?ingSet rdfs:subClassOf [
      owl:onProperty pkg:hasIngredient ;
      owl:someValuesFrom ?ingURI
    ] .
  }

  UNION

  {
    ?ingSet rdfs:subClassOf [
      owl:intersectionOf ?listIng
    ] .

    ?listIng rdf:rest*/rdf:first [
      owl:onProperty pkg:hasIngredient ;
      owl:someValuesFrom ?ingURI
    ] .
  }

  OPTIONAL {
    ?ingURI rdfs:label ?ingLabel
  }
}
      }
    `),
    querySPARQL(PFX + `
      SELECT ?dish ?variant WHERE {
        ?dish rdfs:subClassOf* sakg:StreetFood .
        FILTER(?dish != sakg:StreetFood)
        {
          ?dish rdfs:subClassOf [
            owl:onProperty sakg:isVariantOf ;
            owl:someValuesFrom ?v
          ] .
        }
        UNION
        {
          ?dish rdfs:subClassOf [
            owl:intersectionOf ?listVar
          ] .
          ?listVar rdf:rest*/rdf:first [
            owl:onProperty sakg:isVariantOf ;
            owl:someValuesFrom ?v
          ] .
        }
        ?v rdfs:label ?variant .
      }
    `)
  ]);

  const map = {};

  for (const row of coreRows) {
    const uri  = row.dish.value;
    if (!map[uri]) {
      const name = row.name.value;
      const ui   = DISH_UI[name] || { emoji: '🍛', grad: ['#C4501A','#E8A020'], imgKey: null };
      map[uri] = {
        uri, name,
        country: '', dietary: '',
        instructions: '', comment: '',
        techniques: [],     // display labels (with fallback to URI local name)
        techniqueKeys: [],  // URI local names for filtering (normalised)
        ingredients: [],
        variant: [],
        popularIn: [],
        emoji: ui.emoji, grad: ui.grad, imgKey: ui.imgKey,
        prepTime: ui.prepTime || null,
        spiceLevel: ui.spiceLevel || null,
      };
    }
    if (row.country?.value    && !map[uri].country)      map[uri].country      = row.country.value;
    if (row.dietary?.value && !map[uri].dietary) map[uri].dietary = uriLocalName(row.dietary.value);
    if (row.instructions?.value && !map[uri].instructions) map[uri].instructions = row.instructions.value;
    if (row.comment?.value    && !map[uri].comment)      map[uri].comment      = row.comment.value;

    if (row.popularInCountry?.value) {
      const country = uriLocalName(row.popularInCountry.value);

      if (!map[uri].popularIn.includes(country)) {
        map[uri].popularIn.push(country);
      }
    }
  }

  for (const row of techRows) {
    const d = map[row.dish.value];
    if (d) {
      const uriKey   = row.t.value.replace(/^.*[#/]/, ''); // e.g. "DeepFrying"
      const label    = row.technique?.value || uriKey;
      if (!d.techniqueKeys.includes(uriKey)) d.techniqueKeys.push(uriKey);
      if (!d.techniques.includes(label))     d.techniques.push(label);
    }
  }

  for (const row of ingRows) {
    const d = map[row.dish.value];
    if (d) {
      const label = row.ingLabel?.value || uriLocalName(row.ingURI.value);
      if (!d.ingredients.includes(label)) d.ingredients.push(label);
    }
  }

  const ingSetMap = {};
  for (const row of ingSetRows) {
    const dishURI = row.dish.value;
    const setURI  = row.ingSet.value;
    if (!ingSetMap[dishURI])        ingSetMap[dishURI] = {};
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
      const s   = ingSetMap[dishURI][setURI];
      if (!s.ingredients.includes(ing)) s.ingredients.push(ing);
    }
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
(() => {
  const nav     = document.getElementById('main-nav');
  const onScroll = () => { nav.classList.toggle('nav--scrolled', window.scrollY > 60); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mobile-menu a').forEach(a =>
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  })
);

/* ============================================================
   PAGE TAB SWITCHING
   ============================================================ */
function switchPage(page) {
  document.querySelectorAll('.page-tab').forEach(t => t.classList.toggle('active', t.dataset.page === page));
  document.querySelectorAll('.page-view').forEach(v => v.classList.remove('active'));
  const pageIds = { dishes: 'dishes-page', 'culinary-bases': 'culinary-bases-page', locations: 'locations-page' };
  const target = document.getElementById(pageIds[page]);
  if (target) target.classList.add('active');

  if (page === 'culinary-bases' && !basesLoaded) {
    basesLoaded = true;
    loadSharedBases();
  }
  if (page === 'locations' && !locationsLoaded) {
    locationsLoaded = true;
    loadLocations();
  }
}

/* ============================================================
   LOCATIONS — BREMEN MAP
   ============================================================ */
function loadLocations() {
  fetch('./data/locations.json')
    .then(r => r.json())
    .then(data => {
      locData = data;
      initLocMap();
      renderLocList('all');
      wireLocToggles();
    })
    .catch(() => {
      document.getElementById('locations-list').innerHTML =
        '<div class="loc-empty">Could not load location data. Please try again.</div>';
    });
}

function initLocMap() {
  if (locMap) return;
  locMap = L.map('locations-map').setView([53.0793, 8.8017], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(locMap);
  renderLocMarkers('all');
}

function makeIcon(type) {
  const color = type === 'restaurant' ? '#DC3C3C' : '#28A064';
  const emoji = type === 'restaurant' ? '🍽️' : '🛒';
  return L.divIcon({
    className: '',
    html: `<div style="
      width:36px;height:36px;border-radius:50%;
      background:${color};border:3px solid #fff;
      box-shadow:0 2px 8px rgba(0,0,0,.3);
      display:flex;align-items:center;justify-content:center;
      font-size:15px;cursor:pointer;">${emoji}</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -22]
  });
}

function buildPopupHtml(loc) {
  const tagItems = (loc.dishes || loc.stocks || []).slice(0, 5)
    .map(t => `<span class="loc-popup-tag">${t}</span>`).join('');
  const moreCount = (loc.dishes || loc.stocks || []).length - 5;
  return `
    <div class="loc-popup">
      <div class="loc-popup-name">${loc.name}</div>
      <div class="loc-popup-address">📍 ${loc.address}</div>
      <div class="loc-popup-desc">${loc.description}</div>
      ${tagItems ? `<div class="loc-popup-tags">${tagItems}${moreCount > 0 ? `<span class="loc-popup-tag">+${moreCount} more</span>` : ''}</div>` : ''}
      <div class="loc-popup-hours">🕐 ${loc.openingHours}</div>
    </div>`;
}

function renderLocMarkers(filterType) {
  locMarkers.forEach(({ marker }) => locMap.removeLayer(marker));
  locMarkers = [];

  const all = [...locData.restaurants, ...locData.groceries];
  all.forEach(loc => {
    if (filterType !== 'all' && loc.type !== filterType) return;
    const marker = L.marker([loc.lat, loc.lng], { icon: makeIcon(loc.type) })
      .addTo(locMap)
      .bindPopup(buildPopupHtml(loc), { maxWidth: 280 });
    marker.on('click', () => highlightLocCard(loc.id));
    locMarkers.push({ marker, id: loc.id });
  });
}

function renderLocList(filterType) {
  const list = document.getElementById('locations-list');
  const all = [...locData.restaurants, ...locData.groceries];
  const filtered = filterType === 'all' ? all : all.filter(l => l.type === filterType);

  if (!filtered.length) {
    list.innerHTML = '<div class="loc-empty">No locations found.</div>';
    return;
  }

  list.innerHTML = filtered.map(loc => {
    const isRest = loc.type === 'restaurant';
    const iconClass = isRest ? 'loc-card-icon--restaurant' : 'loc-card-icon--grocery';
    const emoji = isRest ? '🍽️' : '🛒';
    const chips = (loc.dishes || loc.stocks || []).slice(0, 6)
      .map(t => `<span class="loc-chip">${t}</span>`).join('');
    const moreCount = (loc.dishes || loc.stocks || []).length - 6;

    return `
      <div class="loc-card" data-id="${loc.id}">
        <div class="loc-card-header">
          <div class="loc-card-icon ${iconClass}">${emoji}</div>
          <div>
            <div class="loc-card-name">${loc.name}</div>
            <div class="loc-card-address">📍 ${loc.address}</div>
          </div>
        </div>
        <div class="loc-card-desc">${loc.description}</div>
        <div class="loc-card-chips">
          ${chips}
          ${moreCount > 0 ? `<span class="loc-chip">+${moreCount} more</span>` : ''}
        </div>
        <div class="loc-card-hours">🕐 ${loc.openingHours}</div>
      </div>`;
  }).join('');

  list.querySelectorAll('.loc-card').forEach(card => {
    card.addEventListener('click', () => {
      const loc = all.find(l => l.id === card.dataset.id);
      if (!loc || !locMap) return;
      locMap.setView([loc.lat, loc.lng], 16, { animate: true });
      const entry = locMarkers.find(m => m.id === loc.id);
      if (entry) entry.marker.openPopup();
      highlightLocCard(loc.id);
    });
  });
}

function highlightLocCard(id) {
  document.querySelectorAll('.loc-card').forEach(c => {
    c.classList.toggle('highlighted', c.dataset.id === id);
  });
  const card = document.querySelector(`.loc-card[data-id="${id}"]`);
  if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function wireLocToggles() {
  document.querySelectorAll('.loc-type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.loc-type-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const type = btn.dataset.type;
      renderLocMarkers(type);
      renderLocList(type);
    });
  });
}

/* ============================================================
   FILTER SIDEBAR — COLLAPSIBLE PANELS
   ============================================================ */
function initFilterPanels() {
  document.querySelectorAll('.filter-panel-toggle').forEach(btn => {
    const panel = btn.closest('.filter-panel');
    const body  = panel.querySelector('.filter-panel-body');
    // Set natural height for animation
    body.style.maxHeight = body.scrollHeight + 'px';
    btn.addEventListener('click', () => {
      const collapsed = panel.classList.toggle('collapsed');
      btn.setAttribute('aria-expanded', String(!collapsed));
      body.style.maxHeight = collapsed ? '0' : body.scrollHeight + 'px';
    });
  });
}

/* ============================================================
   FILTER STATE MANAGEMENT
   ============================================================ */
function getFilterState() {
  const country      = document.querySelector('input[name="f-country"]:checked')?.value || 'all';
  const dietary      = [...document.querySelectorAll('#fp-dietary-body input:checked')].map(cb => cb.value);
  const maxPrepTime  = document.querySelector('input[name="f-preptime"]:checked')?.value || 'any';
  const spiceLevels  = [...document.querySelectorAll('.spice-check:checked')].map(cb => cb.value);
  const excluded     = [...document.querySelectorAll('.method-check:checked')].map(cb => cb.value);
  return { country, dietary, maxPrepTime, spiceLevels, excluded };
}

/* ── Check if a dish technique matches an excluded method ── */
function techniqueMatchesMethod(dish, method) {
  // Check URI local name (e.g. "DeepFrying")
  if (dish.techniqueKeys.some(k => k.toLowerCase() === method.toLowerCase())) return true;
  // Check display label (e.g. "Deep Frying")
  const normMethod = method.toLowerCase().replace(/\s+/g, '');
  return dish.techniques.some(t => t.toLowerCase().replace(/\s+/g, '') === normMethod);
}

/* ── Render active filter tags ── */
function renderActiveFilterTags() {
  const container = document.getElementById('active-filters');
  if (!container) return;
  const tags = [];

  if (filterState.country !== 'all') {
    const label = { india: (FLAG_SVG.India + ' India'), pakistan: (FLAG_SVG.Pakistan + ' Pakistan'), bangladesh: (FLAG_SVG.Bangladesh + ' Bangladesh') }[filterState.country] || filterState.country;
    tags.push({ label, clear: () => { document.getElementById('f-country-all').checked = true; filterState.country = 'all'; applyAllFilters(); } });
  }

  filterState.dietary.forEach(d => {
    const label = d === 'veg' ? '🥕 Veg' : '🍖 Non-Veg';
    tags.push({ label, clear: () => {
      document.getElementById(d === 'veg' ? 'diet-veg' : 'diet-nonveg').checked = false;
      filterState.dietary = filterState.dietary.filter(x => x !== d);
      applyAllFilters();
    }});
  });

  if (filterState.maxPrepTime !== 'any') {
    tags.push({ label: `≤ ${filterState.maxPrepTime} min`, clear: () => { document.getElementById('f-preptime-any').checked = true; filterState.maxPrepTime = 'any'; applyAllFilters(); } });
  }

  filterState.spiceLevels.forEach(s => {
    const nice = { Mild: '🟢 Mild', Medium: '🟡 Medium', Hot: '🔴 Hot', VeryHot: '🌶️ Very Hot' }[s] || s;
    tags.push({ label: nice, clear: () => {
      const cb = document.querySelector(`.spice-check[value="${s}"]`);
      if (cb) cb.checked = false;
      filterState.spiceLevels = filterState.spiceLevels.filter(x => x !== s);
      applyAllFilters();
    }});
  });

  filterState.excludeMethods.forEach(m => {
    const nice = { DeepFrying: 'No Deep Frying', PanFrying: 'No Pan Frying', Boiling: 'No Boiling', Steaming: 'No Steaming' }[m] || ('No ' + m);
    tags.push({ label: nice, clear: () => {
      const cb = document.querySelector(`.method-check[value="${m}"]`);
      if (cb) cb.checked = false;
      filterState.excludeMethods = filterState.excludeMethods.filter(x => x !== m);
      applyAllFilters();
    }});
  });

  if (filterState.q6Ingredients.length) {
    tags.push({ label: `🧺 ${filterState.q6Ingredients.join(', ')}`, clear: () => {
      const inp = document.getElementById('filter-ingredient-input');
      if (inp) inp.value = '';
      filterState.q6Ingredients = [];
      filterState.q6Results = null;
      const status = document.getElementById('filter-q6-status');
      if (status) status.textContent = '';
      applyAllFilters();
    }});
  }

  container.innerHTML = tags.map((t, i) =>
    `<span class="active-filter-tag">${t.label}<button onclick="__clearTag(${i})" aria-label="Remove filter">✕</button></span>`
  ).join('');

  // Expose clear callbacks
  window.__filterTagClears = tags.map(t => t.clear);
}

window.__clearTag = i => { if (window.__filterTagClears?.[i]) window.__filterTagClears[i](); };

/* ── Main filter application ── */
async function applyAllFilters() {
  renderActiveFilterTags();

  const { country, dietary, maxPrepTime, spiceLevels, excluded } = getFilterState();
  filterState.country        = country;
  filterState.dietary        = dietary;
  filterState.maxPrepTime    = maxPrepTime;
  filterState.spiceLevels    = spiceLevels;
  filterState.excludeMethods = excluded;

  let result = [...DISHES];

  // Country (local, using loaded data)
  if (country !== 'all') {
    result = result.filter(d => d.country.toLowerCase().includes(country));
  }

  // Dietary (local)
  if (dietary.length > 0 && dietary.length < 2) {
    result = result.filter(d => {
      const isVeg = d.dietary === 'Vegetarian';
      return (dietary.includes('veg') && isVeg) || (dietary.includes('nonveg') && !isVeg);
    });
  }

  // Prep time filter
  if (maxPrepTime !== 'any') {
    const max = parseInt(maxPrepTime);
    result = result.filter(d => d.prepTime != null && d.prepTime <= max);
  }

  // Spice level filter
  if (spiceLevels.length > 0) {
    result = result.filter(d => d.spiceLevel != null && spiceLevels.includes(d.spiceLevel));
  }

  // Exclude cooking methods (local, using loaded technique data — Q5)
  if (excluded.length > 0) {
    result = result.filter(d =>
      !excluded.some(method => techniqueMatchesMethod(d, method))
    );
  }

  // Ingredient search (SPARQL Q6 — only if ingredients were searched via button)
  if (filterState.q6Ingredients.length > 0) {
    if (filterState.q6Results === null) {
      // Run Q6 live
      const q6Status = document.getElementById('filter-q6-status');
      if (q6Status) q6Status.textContent = 'Searching…';
      try {
        const bindings = await getDishesFromIngredients(filterState.q6Ingredients);
        filterState.q6Results = new Set(bindings.map(b => b.dish.value));
        if (q6Status) q6Status.textContent = `Found ${filterState.q6Results.size} match${filterState.q6Results.size !== 1 ? 'es' : ''}`;
      } catch {
        if (q6Status) q6Status.textContent = 'Search failed. Try again.';
        filterState.q6Results = new Set();
      }
    }
    if (filterState.q6Results !== null) {
      result = result.filter(d => filterState.q6Results.has(d.uri));
    }
  }

  renderDishes(false, result);
  updateResultsCount(result.length);
  document.getElementById('filter-ingredient-input').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearAllFilters() {
  document.getElementById('f-country-all').checked     = true;
  document.getElementById('diet-veg').checked           = false;
  document.getElementById('diet-nonveg').checked        = false;
  document.getElementById('f-preptime-any').checked     = true;
  document.querySelectorAll('.spice-check').forEach(cb => { cb.checked = false; });
  document.querySelectorAll('.method-check').forEach(cb => { cb.checked = false; });
  const inp = document.getElementById('filter-ingredient-input');
  if (inp) inp.value = '';
  const status = document.getElementById('filter-q6-status');
  if (status) status.textContent = '';

  filterState.country        = 'all';
  filterState.dietary        = [];
  filterState.maxPrepTime    = 'any';
  filterState.spiceLevels    = [];
  filterState.excludeMethods = [];
  filterState.q6Ingredients  = [];
  filterState.q6Results      = null;

  applyAllFilters();
}

function updateResultsCount(count) {
  const el = document.getElementById('results-count');
  if (el) el.textContent = `${count} dish${count !== 1 ? 'es' : ''} found`;
}

/* ============================================================
   SEARCH DROPDOWN
   ============================================================ */
const searchInput = document.getElementById('search-input');
const sugEl       = document.getElementById('search-suggestions');

searchInput.addEventListener('input', () => {
  if (!DISHES.length) { sugEl.classList.remove('open'); return; }
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { sugEl.classList.remove('open'); return; }
  const hits = DISHES.filter(d =>
    d.name.toLowerCase().includes(q) ||
    d.country.toLowerCase().includes(q) ||
    d.techniques.some(t => t.toLowerCase().includes(q))
  );
  if (!hits.length) { sugEl.classList.remove('open'); return; }
  sugEl.innerHTML = hits.slice(0, 6).map(d => `
    <div class="suggestion-item" onclick="selectDish('${d.name}')">
      <span style="font-size:1.4rem">${d.emoji}</span>
      <span style="font-weight:500">${d.name}</span>
      <span class="suggestion-meta">${FLAGS[d.country] || '🌏'} ${d.country} · ${d.dietary === 'Vegetarian' ? 'Veg' : 'Non-Veg'}</span>
    </div>`).join('');
  sugEl.classList.add('open');
});

document.addEventListener('click', e => { if (!e.target.closest('.search-wrap')) sugEl.classList.remove('open'); });

document.getElementById('search-btn').addEventListener('click', () => {
  if (!DISHES.length) return;
  const q = searchInput.value.trim().toLowerCase();
  const m = DISHES.find(d => d.name.toLowerCase().startsWith(q) || d.name.toLowerCase().includes(q));
  if (m) selectDish(m.name);
});

searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('search-btn').click(); });

function selectDish(name) { sugEl.classList.remove('open'); searchInput.value = name; openRecipe(name); }
window.selectDish = selectDish;

/* ============================================================
   RECIPE MODAL (WITH LIVE Q2 REGIONAL VARIANTS)
   ============================================================ */
async function openRecipe(name) {
  const dish = DISHES.find(d => d.name === name);
  if (!dish) return;

  const heroEl = document.getElementById('modal-hero');
  const emojiEl = document.getElementById('modal-emoji');
  const imgSrc = dish.imgKey && window.DISH_IMGS && window.DISH_IMGS[dish.imgKey];
  if (imgSrc) {
    heroEl.style.background = `linear-gradient(to bottom,rgba(0,0,0,.18) 0%,rgba(0,0,0,.55) 100%),url(${imgSrc}) center/cover no-repeat`;
    emojiEl.style.display = 'none';
  } else {
    heroEl.style.background = `linear-gradient(135deg,${dish.grad[0]},${dish.grad[1]})`;
    emojiEl.style.display = '';
    emojiEl.textContent = dish.emoji;
  }

  document.getElementById('modal-flag').innerHTML       = FLAG_SVG[dish.country] || '🌏';
  document.getElementById('modal-country').textContent = dish.country;
  document.getElementById('modal-name').textContent    = dish.name;

  const isVeg = dish.dietary === 'Vegetarian';
  const SPICE_EMOJI = { Mild: '🌶️', Medium: '🌶️🌶️', Hot: '🌶️🌶️🌶️', VeryHot: '🌶️🌶️🌶️🌶️' };
  const SPICE_LABEL = { Mild: '', Medium: '', Hot: '', VeryHot: '' };
  document.getElementById('modal-badges').innerHTML =
    `<span class="rbadge ${isVeg ? 'veg' : 'nonveg'}">${isVeg ? '🥕 Vegetarian' : '🍖 Non-Vegetarian'}</span>`
    + (dish.spiceLevel ? `<span class="rbadge spice">${SPICE_EMOJI[dish.spiceLevel] || '🌶️'}</span>` : '')
    + (dish.prepTime   ? `<span class="rbadge preptime">⏱ ${dish.prepTime} min</span>` : '');

  // About
  const aboutSec = document.getElementById('modal-about-sec');
  if (dish.comment) { document.getElementById('modal-about').textContent = dish.comment; aboutSec.style.display = ''; }
  else aboutSec.style.display = 'none';

  // Ingredients & Preparation
  const ingWrap = document.getElementById('modal-ingredients-wrap');
  const sets    = dish.ingredientSets || [];
  if (sets.length) {
    ingWrap.innerHTML = sets.map(s => {
      const displayLabel = getFriendlyBaseName(s.uri);
      const icon         = getFriendlyBaseIcon(s.uri);
      const ingHTML      = s.ingredients.length
        ? `<div class="ingset-ing-grid">${s.ingredients.map(ing => `<div class="ingredient-item"><div class="ing-dot"></div>${ing}</div>`).join('')}</div>`
        : '';
      const prepSteps = s.instructions
        ? s.instructions.split(/\.\s+|\n/).map(t => t.trim()).filter(Boolean).map(t => t.endsWith('.') ? t : t + '.')
        : [];
      const prepHTML  = prepSteps.length
        ? `<div class="ingset-prep-title">Preparation</div><div class="ingset-steps">${prepSteps.map((t, n) => `<div class="ingset-step"><div class="ingset-step-num">${n + 1}</div><div class="ingset-step-text">${t}</div></div>`).join('')}</div>`
        : '';
      return `<div class="ingset-block">
        <div class="ingset-body">${ingHTML}${prepHTML}</div>
      </div>`;
    }).join('');

    if (dish.ingredients.length) {
      const setIngs = new Set(sets.flatMap(s => s.ingredients));
      const direct  = dish.ingredients.filter(i => !setIngs.has(i));
      if (direct.length) {
        ingWrap.innerHTML += `<div class="direct-ing-grid">${direct.map(i => `<div class="ingredient-item"><div class="ing-dot"></div>${i}</div>`).join('')}</div>`;
      }
    }
    document.getElementById('modal-assembly-title').textContent = 'Assembly';
  } else {
    ingWrap.innerHTML = dish.ingredients.length
      ? `<div class="ingredients-grid">${dish.ingredients.map(i => `<div class="ingredient-item"><div class="ing-dot"></div>${i}</div>`).join('')}</div>`
      : '<p style="color:var(--text-muted);font-size:.9rem">Ingredients not available</p>';
    document.getElementById('modal-assembly-title').textContent = 'How to Make It';
  }

  // Assembly steps
  const assemblyTitleEl = document.getElementById('modal-assembly-title');
  const stepsEl         = document.getElementById('modal-steps');
  if (dish.instructions) {
    const steps = dish.instructions.split(/\.\s+|\n/).map(s => s.trim()).filter(Boolean).map(s => s.endsWith('.') ? s : s + '.');
    stepsEl.innerHTML = steps.map((s, i) => `<div class="step-item"><div class="step-num">${i + 1}</div><div class="step-text">${s}</div></div>`).join('');
    assemblyTitleEl.style.display = '';
    stepsEl.style.display = '';
  } else {
    assemblyTitleEl.style.display = 'none';
    stepsEl.style.display = 'none';
  }

  document.getElementById('modal-techniques').innerHTML =
    dish.techniques.map(t => `<span class="technique-chip">${t}</span>`).join('');

  // LIVE Q2 — Regional Variants
  const varSec = document.getElementById('modal-variants-sec');
  varSec.style.display = 'none';
  try {
    const localName     = dish.uri.split('#')[1];
    const variantBindings = await getRegionalVariants(localName);
    if (variantBindings.length > 0) {
      varSec.style.display = 'block';
      document.getElementById('modal-variants').innerHTML = variantBindings.map(b => {
        const vName  = uriLocalName(b.variant.value);
        const cName  = uriLocalName(b.country.value);
        return `<span class="variant-link-chip" onclick="switchRecipe('${vName}')">${FLAGS[cName] || '🌏'} ${vName} →</span>`;
      }).join('');
    }
  } catch (err) { console.error('Failed to load variants:', err); }

  // Related dishes (share ≥1 ingredient)
  // const sharedIngs = new Set(dish.ingredients);
  // const related    = DISHES.filter(d => d.name !== dish.name && d.ingredients.some(i => sharedIngs.has(i)));
  // const rRow       = document.getElementById('modal-related-row');
  // if (related.length) {
  //   rRow.style.display = 'block';
  //   document.getElementById('modal-related').innerHTML = related.map(d =>
  //     `<span class="related-chip" onclick="switchRecipe('${d.name}')">${d.emoji} ${d.name}</span>`
  //   ).join('');
  // } else rRow.style.display = 'none';

  // popular in Countries
  const popularSec = document.getElementById('modal-popular-sec');
  console.log('dish.popularIn:', dish.popularIn);
  if (dish.popularIn && dish.popularIn.length) {
    popularSec.style.display = 'block';
    document.getElementById('modal-popular').innerHTML =
      dish.popularIn
        .filter(country => country !== dish.country)
        .map(country =>
          `<span class="variant-link-chip">
            ${FLAGS[country] || '🌏'} ${country}
          </span>`
        ).join('');
  } else {
    popularSec.style.display = 'none';
  }

  document.getElementById('recipe-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function switchRecipe(n) { openRecipe(n); }
window.switchRecipe = switchRecipe;

function closeRecipe() { document.getElementById('recipe-overlay').classList.remove('open'); document.body.style.overflow = ''; }
document.getElementById('recipe-close').addEventListener('click', closeRecipe);
document.getElementById('recipe-overlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeRecipe(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeRecipe(); });

/* ============================================================
   DISHES GRID RENDERING
   ============================================================ */
function renderDishes(animate = true, dishesList = DISHES) {
  const grid = document.getElementById('dishes-grid');
  cardBatches.forEach(t => t.kill());
  cardBatches = [];
  grid.innerHTML = '';

  if (!dishesList.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-muted)">
      <div style="font-size:2.5rem;margin-bottom:14px">🔍</div>
      <div style="font-size:1rem;font-weight:600">No dishes match your filters</div>
      <div style="font-size:.85rem;margin-top:8px">Try adjusting or clearing the active filters.</div>
    </div>`;
    return;
  }

  const SPICE_EMOJI = { Mild: '🌶️', Medium: '🌶️🌶️', Hot: '🌶️🌶️🌶️', VeryHot: '🌶️🌶️🌶️🌶️' };
  const SPICE_LABEL = { Mild: '', Medium: '', Hot: '', VeryHot: '' };

  dishesList.forEach(dish => {
    const isVeg = dish.dietary === 'Vegetarian';
    const card  = document.createElement('div');
    card.className = 'dish-card';

    const badgesHTML = `<div class="card-badges-col">
      <div class="card-badge card-badge--diet" title="${dish.dietary}">${isVeg ? '🥕' : '🍖'}</div>
      ${dish.spiceLevel ? `<div class="card-badge card-badge--spice" title="${dish.spiceLevel}">${SPICE_EMOJI[dish.spiceLevel] || '🌶️'}</div>` : ''}
      ${dish.prepTime  ? `<div class="card-badge card-badge--time" title="Prep time">⏱ ${dish.prepTime}m</div>` : ''}
    </div>`;

    const imgSrc  = dish.imgKey && window.DISH_IMGS && window.DISH_IMGS[dish.imgKey];
    const imgHTML = imgSrc
      ? `<div class="dish-img dish-img--photo"><img src="${imgSrc}" alt="${dish.name}" loading="lazy"><div class="country-badge">${FLAG_SVG[dish.country] || '🌏'} ${dish.country}</div>${badgesHTML}</div>`
      : `<div class="dish-img" style="background:linear-gradient(135deg,${dish.grad[0]},${dish.grad[1]})"><div class="img-pattern"></div><span class="big-emoji">${dish.emoji}</span><div class="country-badge">${FLAG_SVG[dish.country] || '🌏'} ${dish.country}</div>${badgesHTML}</div>`;

    const sets = dish.ingredientSets || [];
    const ingSetsHTML = sets.length
      ? sets.map(s => `<span class="ing-set-tag">${getFriendlyBaseIcon(s.uri)} ${s.label || getFriendlyBaseName(s.uri)}</span>`).join('')
      : dish.techniques.map(t => `<span class="technique-tag">${t}</span>`).join('');

    card.innerHTML = `${imgHTML}
      <div class="dish-card-body">
        <div class="dish-name">${dish.name}</div>

        <button class="view-recipe-btn" onclick="selectDish('${dish.name}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          View Recipe &amp; Ingredients
        </button>
      </div>`;
    grid.appendChild(card);
    initCard3D(card);
  });

  if (animate && dishesList.length) {
    gsap.set('.dish-card', { opacity: 0, y: 55, scale: 0.93 });
    cardBatches = ScrollTrigger.batch('.dish-card', {
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, scale: 1, duration: .65, stagger: .07, ease: 'power3.out', overwrite: true }),
      start: 'top 92%', once: true
    });
    ScrollTrigger.refresh();
  }
}

/* ============================================================
   Q3: LOAD SHARED CULINARY BASES
   ============================================================ */
async function loadSharedBases() {
  const container = document.getElementById('ingredient-sets-grid');
  if (!container) return;

  try {
    const results = await getDishesFromIngredientSet();
    container.innerHTML = '';

    results.forEach(b => {
      const setURI    = b.ingSet.value;
      const dishesStr = b.dishNames.value;
      const ingsStr   = b.ingredientNames.value;

      const title = b.ingSetLabel?.value || getFriendlyBaseName(setURI);
      const icon   = getFriendlyBaseIcon(setURI);

      const dishChipsHTML = dishesStr.split(', ').map(dName =>
        `<span class="base-dish-chip-link" onclick="event.stopPropagation();selectDish('${dName}')">${dName}</span>`
      ).join('');

      const ingChipsHTML = ingsStr
        ? ingsStr.split(', ').map(ing => `<span class="base-ing-chip-item">${ing}</span>`).join('')
        : '<span style="color:var(--text-muted);font-style:italic">No direct ingredients</span>';

      const card = document.createElement('div');
      card.className = 'base-card';
      card.innerHTML = `
        <div class="base-card-title" role="button" tabindex="0">
          <span class="base-title-text">${icon} ${title}</span>
          <svg class="base-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="base-card-details">
          <div class="base-card-details-inner">
            <div class="base-dishes-box">
              <div class="base-section-lbl">Shared By</div>
              <div class="base-dishes-chips">${dishChipsHTML}</div>
            </div>
            <div>
              <div class="base-section-lbl">Base Ingredients</div>
              <div class="base-ings-chips">${ingChipsHTML}</div>
            </div>
          </div>
        </div>
      `;

      const titleEl = card.querySelector('.base-card-title');
      titleEl.addEventListener('click', () => card.classList.toggle('open'));
      titleEl.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.classList.toggle('open'); }});

      container.appendChild(card);
    });

  } catch (err) {
    console.error('Q3 load failed:', err);
    container.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:#e05">Failed to load culinary bases.</div>`;
  }
}

/* ============================================================
   GSAP ANIMATIONS
   ============================================================ */

/* ── Hero word-reveal ── */
function initHeroReveal() {
  gsap.set('.ht-word', { yPercent: 115 });
  gsap.to('.ht-word', {
    yPercent: 0,
    duration: 0.95,
    stagger: 0.12,
    ease: 'power4.out',
    delay: 0.2
  });
  gsap.fromTo('.hero-sub',    { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: .9, ease: 'power3.out', delay: .7  });
  gsap.fromTo('.search-wrap', { y: 44, opacity: 0 }, { y: 0, opacity: 1, duration: 1,  ease: 'power3.out', delay: .9  });
  gsap.fromTo('.hero-scroll', { opacity: 0 },         { opacity: 1, duration: .5, delay: 1.6 });
}

/* ── Floating gold particles in hero ── */
function initHeroParticles() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles, raf;

  function resize() {
    const hero = document.querySelector('.hero');
    w = canvas.width  = hero ? hero.offsetWidth  : window.innerWidth;
    h = canvas.height = hero ? hero.offsetHeight : window.innerHeight;
  }

  function spawn() {
    particles = Array.from({ length: 55 }, () => ({
      x:  Math.random() * w,
      y:  Math.random() * h,
      r:  Math.random() * 1.8 + 0.4,
      vy: Math.random() * 0.45 + 0.15,
      vx: (Math.random() - 0.5) * 0.25,
      o:  Math.random() * 0.45 + 0.08,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(240,178,74,${p.o})`;
      ctx.fill();
      p.y -= p.vy;
      p.x += p.vx;
      if (p.y < -4) { p.y = h + 4; p.x = Math.random() * w; }
      if (p.x <  -4) p.x = w + 4;
      if (p.x > w + 4) p.x = -4;
    });
    raf = requestAnimationFrame(draw);
  }

  resize();
  spawn();
  draw();

  window.addEventListener('resize', () => { cancelAnimationFrame(raf); resize(); spawn(); draw(); });

  /* pause when hero scrolls out of view — perf */
  ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    onLeave:      () => cancelAnimationFrame(raf),
    onEnterBack:  () => { resize(); draw(); },
  });
}

/* ── Marquee: GSAP-driven, scroll-velocity reactive ──
   Previously this mutated CSS `animation-duration` on every scroll tick.
   The browser re-maps elapsed time onto the new duration each time, so the
   track teleported to a new offset — that is what read as "rapidly fast".
   Driving it with GSAP and nudging timeScale() keeps position continuous. */
function initMarquee() {
  const section = document.querySelector('.dish-marquee-section');
  const tracks  = document.querySelectorAll('.dish-marquee-track');
  if (!section || !tracks.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const loops  = [];

  tracks.forEach(track => {
    const reversed = track.classList.contains('dish-marquee-track--rev');
    /* Content is duplicated in markup, so -50% is exactly one seamless cycle. */
    const base = reversed
      ? gsap.fromTo(track, { xPercent: -50 }, {
          xPercent: 0, duration: 46, ease: 'none', repeat: -1
        })
      : gsap.fromTo(track, { xPercent: 0 }, {
          xPercent: -50, duration: 42, ease: 'none', repeat: -1
        });

    if (reduce) base.pause();
    loops.push(base);

    const wrap = track.closest('.dish-marquee-track-wrap');
    if (wrap) {
      wrap.addEventListener('mouseenter', () => gsap.to(base, { timeScale: 0.15, duration: .5 }));
      wrap.addEventListener('mouseleave', () => gsap.to(base, { timeScale: 1,    duration: .7 }));
    }
  });

  if (reduce) return;

  /* Scroll velocity nudges speed within a tight, clamped band. Decay back to
     rest is a tween, not a jump, so the tracks never visibly snap. */
  let decay;
  ScrollTrigger.create({
    trigger: section,
    start: 'top bottom',
    end: 'bottom top',
    onUpdate(self) {
      const v      = self.getVelocity();
      const boost  = gsap.utils.clamp(-2.2, 2.2, v / 900);
      const scale  = gsap.utils.clamp(0.3, 3.2, 1 + Math.abs(boost));
      /* Flip direction with the scroll — reads as the row being "pushed". */
      const signed = v < 0 ? -scale : scale;

      loops.forEach(l => gsap.to(l, { timeScale: signed, duration: .25, overwrite: true }));

      clearTimeout(decay);
      decay = setTimeout(() => {
        loops.forEach(l => gsap.to(l, { timeScale: 1, duration: 1.1, ease: 'power2.out', overwrite: true }));
      }, 180);
    }
  });
}


/* ── Per-card 3D tilt + spotlight ── */
function initCard3D(card) {
  const spotlight = document.createElement('div');
  spotlight.className = 'card-spotlight';
  card.appendChild(spotlight);

  card.addEventListener('mousemove', e => {
    const r   = card.getBoundingClientRect();
    const x   = e.clientX - r.left;
    const y   = e.clientY - r.top;
    const rx  = ((y - r.height / 2) / r.height) * -10;
    const ry  = ((x - r.width  / 2) / r.width)  *  12;

    gsap.to(card, {
      rotateX: rx, rotateY: ry,
      transformPerspective: 900,
      transformOrigin: 'center center',
      duration: 0.25, ease: 'power2.out',
    });
    spotlight.style.setProperty('--sx', x + 'px');
    spotlight.style.setProperty('--sy', y + 'px');
    spotlight.style.opacity = '1';
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      rotateX: 0, rotateY: 0,
      duration: 0.55, ease: 'power3.out',
    });
    spotlight.style.opacity = '0';
  });

  card.addEventListener('mousedown', () => {
    gsap.to(card, { scale: 0.97, duration: 0.1, ease: 'power2.out' });
  });

  card.addEventListener('mouseup', () => {
    gsap.to(card, { scale: 1, duration: 0.25, ease: 'back.out(1.5)' });
  });
}

/* ── Nav magnetic hover ── */
function initNavMagnetic() {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mousemove', e => {
      const r  = link.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width  / 2)) * 0.25;
      const dy = (e.clientY - (r.top  + r.height / 2)) * 0.25;
      gsap.to(link, { x: dx, y: dy, duration: 0.25, ease: 'power2.out' });
    });
    link.addEventListener('mouseleave', () => {
      gsap.to(link, { x: 0, y: 0, duration: 0.45, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

/* ── Main GSAP init ── */
function initGSAP() {
  gsap.registerPlugin(ScrollTrigger);

  /* scroll progress bar */
  gsap.to('#scroll-progress', {
    scaleX: 1, ease: 'none',
    scrollTrigger: { start: 'top top', end: 'max', scrub: 0 }
  });

  /* hero word-reveal + particles */
  initHeroReveal();
  initHeroParticles();

  /* hero bg parallax (separate from JS zoom) */
  gsap.to('.hero-video', {
    yPercent: 22, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  });

  /* marquee: GSAP-driven loop + scroll graphics */
  initMarquee();

  /* marquee head stagger — no opacity tween on the section itself, it would
     fight the parallax transforms running on its children */
  gsap.fromTo('.dm-eyebrow, .dm-title, .dm-desc',
    { opacity: 0, y: 34 },
    { opacity: 1, y: 0, duration: .85, stagger: .12, ease: 'power3.out',
      scrollTrigger: { trigger: '.dish-marquee-head', start: 'top 90%' } }
  );

  /* section-header clip-path reveals */
  document.querySelectorAll('.section-header').forEach(header => {
    const label = header.querySelector('.section-label');
    const title = header.querySelector('.section-title');
    const desc  = header.querySelector('.section-desc');

    if (label) gsap.fromTo(label,
      { opacity: 0, yPercent: 60, clipPath: 'inset(0 0 100% 0)' },
      { opacity: 1, yPercent: 0,  clipPath: 'inset(0 0 0% 0)',
        duration: .65, ease: 'power3.out',
        scrollTrigger: { trigger: header, start: 'top 88%' } }
    );
    if (title) gsap.fromTo(title,
      { opacity: 0, y: 50, clipPath: 'inset(0 0 100% 0)' },
      { opacity: 1, y: 0,  clipPath: 'inset(0 0 0% 0)',
        duration: .85, ease: 'power4.out', delay: .12,
        scrollTrigger: { trigger: header, start: 'top 88%' } }
    );
    if (desc) gsap.fromTo(desc,
      { opacity: 0, y: 22 },
      { opacity: 1, y: 0, duration: .75, ease: 'power2.out', delay: .3,
        scrollTrigger: { trigger: header, start: 'top 88%' } }
    );
  });

  /* filter sidebar slide in */
  gsap.fromTo('.filter-sidebar',
    { opacity: 0, x: -28 },
    { opacity: 1, x: 0, duration: .75, ease: 'power3.out',
      scrollTrigger: { trigger: '.browse-layout', start: 'top 85%' } }
  );

  /* footer stagger */
  gsap.fromTo('#footer-inner > *',
    { opacity: 0, y: 32 },
    { opacity: 1, y: 0, duration: .8, stagger: .15, ease: 'power2.out',
      scrollTrigger: { trigger: 'footer', start: 'top 88%' } }
  );

  /* nav magnetic */
  initNavMagnetic();
}

/* ============================================================
   DOM READY INITIALIZATION
   ============================================================ */
document.addEventListener('DOMContentLoaded', async () => {
  initSPARQLConsole();
  initFilterPanels();

  // Show loading state
  const grid = document.getElementById('dishes-grid');
  grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted);font-family:var(--font-sans);font-size:.95rem;letter-spacing:.05em">Loading dishes from knowledge graph…</div>`;
  document.getElementById('results-count').textContent = 'Loading…';

  console.table(
    DISHES.map(d => ({
      name: d.name,
      popularIn: d.popularIn.join(', ')
    }))
  );

  try {
    DISHES = await loadDishData();
    console.log("Loaded dishes:", DISHES.length);

      console.table(
        DISHES.map(d => ({
          name: d.name,
          dietary: d.dietary
        }))
      );
    renderDishes(false);
    updateResultsCount(DISHES.length);
  } catch (e) {
    console.error('SPARQL initial load failed:', e);
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#e05;font-family:var(--font-sans);font-size:.95rem">Failed to load dishes from SPARQL endpoint. Please refresh.</div>`;
    document.getElementById('results-count').textContent = 'Error loading data';
    return;
  }

  /* ── Page Tab Switching ── */
  document.querySelectorAll('.page-tab').forEach(tab => {
    tab.addEventListener('click', () => switchPage(tab.dataset.page));
  });

  /* ── Nav links for Culinary Bases ── */
  ['nav-culinary-bases', 'mobile-nav-culinary-bases', 'footer-culinary-bases'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('browse').scrollIntoView({ behavior: 'smooth' });
      switchPage('culinary-bases');
    });
  });

  ['nav-dishes', 'mobile-nav-dishes', 'footer-dishes'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => switchPage('dishes'));
  });

  /* ── Sidebar filter change listeners ── */
  document.querySelectorAll('input[name="f-country"]').forEach(r =>
    r.addEventListener('change', applyAllFilters)
  );

  ['diet-veg', 'diet-nonveg'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', applyAllFilters);
  });

  document.querySelectorAll('input[name="f-preptime"]').forEach(r =>
    r.addEventListener('change', applyAllFilters)
  );

  document.querySelectorAll('.spice-check').forEach(cb =>
    cb.addEventListener('change', applyAllFilters)
  );

  document.querySelectorAll('.method-check').forEach(cb =>
    cb.addEventListener('change', applyAllFilters)
  );

  /* ── Q6 Ingredient search button ── */
  const q6SearchBtn = document.getElementById('filter-ing-search-btn');
  const q6Input     = document.getElementById('filter-ingredient-input');

  const triggerQ6 = () => {
    const rawText    = (q6Input?.value || '').trim();
    const ingredients = rawText.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
    filterState.q6Ingredients = ingredients;
    filterState.q6Results     = null; // force re-fetch
    const status = document.getElementById('filter-q6-status');
    if (ingredients.length === 0 && status) status.textContent = '';
    if (ingredients.length) switchPage('dishes'); // results only show on the Dishes grid
    applyAllFilters();
  };

  if (q6SearchBtn) q6SearchBtn.addEventListener('click', triggerQ6);
  if (q6Input)     q6Input.addEventListener('keydown', e => { if (e.key === 'Enter') triggerQ6(); });

  /* ── Clear All Filters button ── */
  document.getElementById('clear-filters-btn')?.addEventListener('click', clearAllFilters);

  /* ── Init GSAP ── */
  requestAnimationFrame(() => {
    gsap.set('.dish-card', { opacity: 0, y: 55, scale: 0.93 });
    cardBatches = ScrollTrigger.batch('.dish-card', {
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, scale: 1, duration: .65, stagger: .07, ease: 'power3.out', overwrite: true }),
      start: 'top 92%', once: true
    });
    initGSAP();
  });
});
