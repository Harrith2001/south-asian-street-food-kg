# Location Ontology Extension Guide
### South Asian Street Food Knowledge Graph — Protégé / RDF

This document describes exactly what to add to `southasianstreetfood.rdf` to include Bremen restaurant and grocery store locations, designed to scale to other German cities and countries in the future.

---

## 1. What Is Already in the Ontology

| Type | Names |
|---|---|
| Top classes | `StreetFood`, `Country`, `CookingTechnique`, `DietaryProperty`, `SpiceLevel` |
| Country subclasses | `Bangladesh`, `India`, `Pakistan` |
| Object properties | `hasDietaryProperty`, `hasIngredientSet`, `originatesFrom`, `popularIn`, `usesMethod`, `isVariantOf` |
| Data properties | `hasPrepTime`, `hasSpiceLevel`, `isVegetarian`, `servingTemperature`, `instructions` |

There are currently **no location classes** — `Restaurant`, `GroceryStore`, `City` do not exist yet.

---

## 2. New Class Hierarchy to Add

```
GeographicArea                    ← NEW abstract parent
├── Country                       ← already exists → now subclass of GeographicArea
│   ├── Bangladesh / India / Pakistan  (existing)
│   └── Germany                   ← NEW
└── City                          ← NEW
    └── Bremen                    ← NEW (GeoNames: geonames.org/2944388)

FoodPlace                         ← NEW
├── Restaurant                    ← NEW subclass
└── GroceryStore                  ← NEW subclass
```

---

## 3. New Properties to Add

### Object Properties

| Property | Domain | Range | Purpose |
|---|---|---|---|
| `locatedIn` | `FoodPlace` | `City` | links a restaurant/store to its city |
| `inCountry` | `City` | `Country` | links a city to its country |
| `servesDish` | `Restaurant` | `StreetFood` | restaurant → dishes it serves |
| `stocksIngredient` | `GroceryStore` | `Ingredient` | store → ingredients it stocks |

### Data Properties

| Property | Domain | Range |
|---|---|---|
| `hasAddress` | `FoodPlace` | `xsd:string` |
| `hasLatitude` | `FoodPlace` | `xsd:decimal` |
| `hasLongitude` | `FoodPlace` | `xsd:decimal` |
| `hasPhoneNumber` | `FoodPlace` | `xsd:string` |
| `hasOpeningHours` | `FoodPlace` | `xsd:string` |

---

## 4. How to Add in Protégé (GUI Steps)

### Step A — Add new Object Properties
1. Open **Object Properties** tab
2. Click **+** (Add object property) → name each one:
   - `locatedIn` — set Domain: `FoodPlace`, Range: `City`
   - `inCountry` — set Domain: `City`, Range: `Country`
   - `servesDish` — set Domain: `Restaurant`, Range: `StreetFood`
   - `stocksIngredient` — set Domain: `GroceryStore`, Range: `Ingredient`

### Step B — Add new Data Properties
1. Open **Data Properties** tab
2. Click **+** for each: `hasAddress`, `hasLatitude`, `hasLongitude`, `hasPhoneNumber`, `hasOpeningHours`
3. Set Domain: `FoodPlace` for all; set Range to `xsd:string` or `xsd:decimal` as listed above

### Step C — Add new Classes
1. Open **Classes** tab
2. Click `owl:Thing` → **Add subclass** → `GeographicArea`
3. Click existing `Country` → **Add superclass** → `GeographicArea`
4. Click `GeographicArea` → **Add subclass** → `City`
5. Click `Country` → **Add subclass** → `Germany`
6. Click `City` → **Add subclass** → `Bremen`
7. On `Bremen`, click **Add superclass** → **Object restriction** → `inCountry some Germany`
8. On `Bremen`, click **Annotations** → add `hasDbXref` with value `http://www.geonames.org/2944388/`
9. Click `owl:Thing` → **Add subclass** → `FoodPlace`
10. Click `FoodPlace` → **Add subclass** → `Restaurant`
11. Click `FoodPlace` → **Add subclass** → `GroceryStore`

### Step D — Add Named Individuals (restaurants & stores)
1. Open **Individuals** tab
2. Click **Add individual** → name it (e.g. `MaharajaRestaurant`)
3. Set **Type** → `Restaurant`
4. Add **Object property assertions**: `locatedIn → Bremen`, `servesDish → Samosa`, etc.
5. Add **Data property assertions**: `hasAddress → "Sögestraße 40, 28195 Bremen"`, etc.
6. Repeat for all 5 restaurants and 6 grocery stores (see Section 6)

---

## 5. Full RDF Snippets (paste before `</rdf:RDF>`)

Paste all blocks below into the `.rdf` file, just before the final `</rdf:RDF>` closing tag.

### 5.1 — New Object Properties

```xml
<!-- locatedIn -->
<owl:ObjectProperty rdf:about="http://example.org/southasianstreetfood#locatedIn">
    <rdfs:domain rdf:resource="http://example.org/southasianstreetfood#FoodPlace"/>
    <rdfs:range  rdf:resource="http://example.org/southasianstreetfood#City"/>
    <rdfs:label xml:lang="en">locatedIn</rdfs:label>
    <rdfs:comment xml:lang="en">Links a restaurant or grocery store to the city where it is located.</rdfs:comment>
</owl:ObjectProperty>

<!-- inCountry -->
<owl:ObjectProperty rdf:about="http://example.org/southasianstreetfood#inCountry">
    <rdfs:domain rdf:resource="http://example.org/southasianstreetfood#City"/>
    <rdfs:range  rdf:resource="http://example.org/southasianstreetfood#Country"/>
    <rdfs:label xml:lang="en">inCountry</rdfs:label>
    <rdfs:comment xml:lang="en">Links a city to the country it belongs to.</rdfs:comment>
</owl:ObjectProperty>

<!-- servesDish -->
<owl:ObjectProperty rdf:about="http://example.org/southasianstreetfood#servesDish">
    <rdfs:domain rdf:resource="http://example.org/southasianstreetfood#Restaurant"/>
    <rdfs:range  rdf:resource="http://example.org/southasianstreetfood#StreetFood"/>
    <rdfs:label xml:lang="en">servesDish</rdfs:label>
    <rdfs:comment xml:lang="en">Links a restaurant to the street food dishes it serves.</rdfs:comment>
</owl:ObjectProperty>

<!-- stocksIngredient -->
<owl:ObjectProperty rdf:about="http://example.org/southasianstreetfood#stocksIngredient">
    <rdfs:domain rdf:resource="http://example.org/southasianstreetfood#GroceryStore"/>
    <rdfs:range  rdf:resource="http://purl.org/ProductKG/RecipeOn#Ingredient"/>
    <rdfs:label xml:lang="en">stocksIngredient</rdfs:label>
    <rdfs:comment xml:lang="en">Links a grocery store to the ingredients it stocks.</rdfs:comment>
</owl:ObjectProperty>
```

### 5.2 — New Data Properties

```xml
<owl:DatatypeProperty rdf:about="http://example.org/southasianstreetfood#hasAddress">
    <rdfs:domain rdf:resource="http://example.org/southasianstreetfood#FoodPlace"/>
    <rdfs:range  rdf:resource="http://www.w3.org/2001/XMLSchema#string"/>
    <rdfs:label xml:lang="en">hasAddress</rdfs:label>
</owl:DatatypeProperty>

<owl:DatatypeProperty rdf:about="http://example.org/southasianstreetfood#hasLatitude">
    <rdfs:domain rdf:resource="http://example.org/southasianstreetfood#FoodPlace"/>
    <rdfs:range  rdf:resource="http://www.w3.org/2001/XMLSchema#decimal"/>
    <rdfs:label xml:lang="en">hasLatitude</rdfs:label>
</owl:DatatypeProperty>

<owl:DatatypeProperty rdf:about="http://example.org/southasianstreetfood#hasLongitude">
    <rdfs:domain rdf:resource="http://example.org/southasianstreetfood#FoodPlace"/>
    <rdfs:range  rdf:resource="http://www.w3.org/2001/XMLSchema#decimal"/>
    <rdfs:label xml:lang="en">hasLongitude</rdfs:label>
</owl:DatatypeProperty>

<owl:DatatypeProperty rdf:about="http://example.org/southasianstreetfood#hasPhoneNumber">
    <rdfs:domain rdf:resource="http://example.org/southasianstreetfood#FoodPlace"/>
    <rdfs:range  rdf:resource="http://www.w3.org/2001/XMLSchema#string"/>
    <rdfs:label xml:lang="en">hasPhoneNumber</rdfs:label>
</owl:DatatypeProperty>

<owl:DatatypeProperty rdf:about="http://example.org/southasianstreetfood#hasOpeningHours">
    <rdfs:domain rdf:resource="http://example.org/southasianstreetfood#FoodPlace"/>
    <rdfs:range  rdf:resource="http://www.w3.org/2001/XMLSchema#string"/>
    <rdfs:label xml:lang="en">hasOpeningHours</rdfs:label>
</owl:DatatypeProperty>
```

### 5.3 — New Classes

```xml
<!-- GeographicArea (new abstract root for all geographic entities) -->
<owl:Class rdf:about="http://example.org/southasianstreetfood#GeographicArea">
    <rdfs:label xml:lang="en">GeographicArea</rdfs:label>
    <rdfs:comment xml:lang="en">Abstract class representing any geographic region — country, city, or district.</rdfs:comment>
</owl:Class>

<!-- Make existing Country a subclass of GeographicArea -->
<!-- Add this inside the existing Country class declaration:
     <rdfs:subClassOf rdf:resource="http://example.org/southasianstreetfood#GeographicArea"/>
     Or do it via Protégé GUI: Classes → Country → Add superclass → GeographicArea -->

<!-- City -->
<owl:Class rdf:about="http://example.org/southasianstreetfood#City">
    <rdfs:subClassOf rdf:resource="http://example.org/southasianstreetfood#GeographicArea"/>
    <rdfs:label xml:lang="en">City</rdfs:label>
    <rdfs:comment xml:lang="en">An urban area in which food places can be located. Linked to a Country via inCountry.</rdfs:comment>
</owl:Class>

<!-- Germany -->
<owl:Class rdf:about="http://example.org/southasianstreetfood#Germany">
    <rdfs:subClassOf rdf:resource="http://example.org/southasianstreetfood#Country"/>
    <oboInOwl:hasDbXref rdf:resource="http://www.geonames.org/2921044/"/>
    <rdfs:label xml:lang="en">Germany</rdfs:label>
    <rdfs:comment xml:lang="en">Federal Republic of Germany, Central Europe.</rdfs:comment>
</owl:Class>

<!-- Bremen -->
<owl:Class rdf:about="http://example.org/southasianstreetfood#Bremen">
    <rdfs:subClassOf rdf:resource="http://example.org/southasianstreetfood#City"/>
    <rdfs:subClassOf>
        <owl:Restriction>
            <owl:onProperty rdf:resource="http://example.org/southasianstreetfood#inCountry"/>
            <owl:someValuesFrom rdf:resource="http://example.org/southasianstreetfood#Germany"/>
        </owl:Restriction>
    </rdfs:subClassOf>
    <oboInOwl:hasDbXref rdf:resource="http://www.geonames.org/2944388/"/>
    <rdfs:label xml:lang="en">Bremen</rdfs:label>
    <rdfs:comment xml:lang="en">City-state in north-western Germany. Current base city for this knowledge graph.</rdfs:comment>
</owl:Class>

<!-- FoodPlace -->
<owl:Class rdf:about="http://example.org/southasianstreetfood#FoodPlace">
    <rdfs:label xml:lang="en">FoodPlace</rdfs:label>
    <rdfs:comment xml:lang="en">A physical establishment where South Asian street food can be eaten or its ingredients purchased.</rdfs:comment>
</owl:Class>

<!-- Restaurant -->
<owl:Class rdf:about="http://example.org/southasianstreetfood#Restaurant">
    <rdfs:subClassOf rdf:resource="http://example.org/southasianstreetfood#FoodPlace"/>
    <rdfs:label xml:lang="en">Restaurant</rdfs:label>
    <rdfs:comment xml:lang="en">A restaurant or eatery that serves South Asian street food dishes.</rdfs:comment>
</owl:Class>

<!-- GroceryStore -->
<owl:Class rdf:about="http://example.org/southasianstreetfood#GroceryStore">
    <rdfs:subClassOf rdf:resource="http://example.org/southasianstreetfood#FoodPlace"/>
    <rdfs:label xml:lang="en">GroceryStore</rdfs:label>
    <rdfs:comment xml:lang="en">A grocery or specialist food store that stocks South Asian cooking ingredients.</rdfs:comment>
</owl:Class>
```

---

## 6. Named Individuals — All 5 Restaurants & 6 Grocery Stores

> **Note on dish URIs**: The URIs below assume your dish classes use CamelCase with no spaces, matching the pattern already in your ontology (e.g. `sasf:Samosa`, `sasf:MasalaDosa`). Adjust to match the exact class names in your RDF file.

### Restaurants

```xml
<!-- ═══════════════════════════════════════════════════════
     RESTAURANT 1 — Maharaja Restaurant
     Cuisine: Indian | Dishes: Samosa, Chana Chaat, Masala Dosa, Idli Sambar
     ═══════════════════════════════════════════════════════ -->
<owl:NamedIndividual rdf:about="http://example.org/southasianstreetfood#MaharajaRestaurant">
    <rdf:type rdf:resource="http://example.org/southasianstreetfood#Restaurant"/>
    <sasf:locatedIn rdf:resource="http://example.org/southasianstreetfood#Bremen"/>
    <sasf:servesDish rdf:resource="http://example.org/southasianstreetfood#Samosa"/>
    <sasf:servesDish rdf:resource="http://example.org/southasianstreetfood#ChanaChaat"/>
    <sasf:servesDish rdf:resource="http://example.org/southasianstreetfood#MasalaDosa"/>
    <sasf:servesDish rdf:resource="http://example.org/southasianstreetfood#IdliSambar"/>
    <sasf:hasAddress>Sögestraße 40, 28195 Bremen</sasf:hasAddress>
    <sasf:hasLatitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">53.0761</sasf:hasLatitude>
    <sasf:hasLongitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">8.8074</sasf:hasLongitude>
    <sasf:hasPhoneNumber>+49 421 123456</sasf:hasPhoneNumber>
    <sasf:hasOpeningHours>Mon–Sat 11:30–22:00, Sun 12:00–21:00</sasf:hasOpeningHours>
    <rdfs:label xml:lang="en">Maharaja Restaurant</rdfs:label>
    <rdfs:comment xml:lang="en">Authentic North and South Indian cuisine in the heart of Bremen.</rdfs:comment>
</owl:NamedIndividual>

<!-- ═══════════════════════════════════════════════════════
     RESTAURANT 2 — Karachi Corner
     Cuisine: Pakistani | Dishes: Gol Gappay, Chapli Kebab, Dahi Bharay, Aloo Tikki
     ═══════════════════════════════════════════════════════ -->
<owl:NamedIndividual rdf:about="http://example.org/southasianstreetfood#KarachiCorner">
    <rdf:type rdf:resource="http://example.org/southasianstreetfood#Restaurant"/>
    <sasf:locatedIn rdf:resource="http://example.org/southasianstreetfood#Bremen"/>
    <sasf:servesDish rdf:resource="http://example.org/southasianstreetfood#GolGappay"/>
    <sasf:servesDish rdf:resource="http://example.org/southasianstreetfood#ChapliKebab"/>
    <sasf:servesDish rdf:resource="http://example.org/southasianstreetfood#DahiBharay"/>
    <sasf:servesDish rdf:resource="http://example.org/southasianstreetfood#AlooTikki"/>
    <sasf:hasAddress>Ostertorsteinweg 58, 28203 Bremen</sasf:hasAddress>
    <sasf:hasLatitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">53.0767</sasf:hasLatitude>
    <sasf:hasLongitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">8.8224</sasf:hasLongitude>
    <sasf:hasPhoneNumber>+49 421 234567</sasf:hasPhoneNumber>
    <sasf:hasOpeningHours>Tue–Sun 12:00–22:00</sasf:hasOpeningHours>
    <rdfs:label xml:lang="en">Karachi Corner</rdfs:label>
    <rdfs:comment xml:lang="en">Pakistani street food spot in the Viertel district. Known for Gol Gappay and Chapli Kebab.</rdfs:comment>
</owl:NamedIndividual>

<!-- ═══════════════════════════════════════════════════════
     RESTAURANT 3 — Dhaka Delight
     Cuisine: Bangladeshi | Dishes: Fuchka, Chotpoti, Bhel Puri, Jhalmuri
     ═══════════════════════════════════════════════════════ -->
<owl:NamedIndividual rdf:about="http://example.org/southasianstreetfood#DhakaDelight">
    <rdf:type rdf:resource="http://example.org/southasianstreetfood#Restaurant"/>
    <sasf:locatedIn rdf:resource="http://example.org/southasianstreetfood#Bremen"/>
    <sasf:servesDish rdf:resource="http://example.org/southasianstreetfood#Fuchka"/>
    <sasf:servesDish rdf:resource="http://example.org/southasianstreetfood#Chotpoti"/>
    <sasf:servesDish rdf:resource="http://example.org/southasianstreetfood#BhelPuri"/>
    <sasf:servesDish rdf:resource="http://example.org/southasianstreetfood#Jhalmuri"/>
    <sasf:hasAddress>Herdentorsteinweg 12, 28195 Bremen</sasf:hasAddress>
    <sasf:hasLatitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">53.0797</sasf:hasLatitude>
    <sasf:hasLongitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">8.8052</sasf:hasLongitude>
    <sasf:hasPhoneNumber>+49 421 345678</sasf:hasPhoneNumber>
    <sasf:hasOpeningHours>Mon–Sat 11:00–21:30</sasf:hasOpeningHours>
    <rdfs:label xml:lang="en">Dhaka Delight</rdfs:label>
    <rdfs:comment xml:lang="en">Bremen's Bangladeshi spot. Serves authentic Fuchka and Chotpoti with tangy tamarind water.</rdfs:comment>
</owl:NamedIndividual>

<!-- ═══════════════════════════════════════════════════════
     RESTAURANT 4 — Spice Route
     Cuisine: Indian | Dishes: Vada Pav, Bhel Puri, Masala Dosa, Idli Sambar
     ═══════════════════════════════════════════════════════ -->
<owl:NamedIndividual rdf:about="http://example.org/southasianstreetfood#SpiceRoute">
    <rdf:type rdf:resource="http://example.org/southasianstreetfood#Restaurant"/>
    <sasf:locatedIn rdf:resource="http://example.org/southasianstreetfood#Bremen"/>
    <sasf:servesDish rdf:resource="http://example.org/southasianstreetfood#VadaPav"/>
    <sasf:servesDish rdf:resource="http://example.org/southasianstreetfood#BhelPuri"/>
    <sasf:servesDish rdf:resource="http://example.org/southasianstreetfood#MasalaDosa"/>
    <sasf:servesDish rdf:resource="http://example.org/southasianstreetfood#IdliSambar"/>
    <sasf:hasAddress>Fedelhören 90, 28203 Bremen</sasf:hasAddress>
    <sasf:hasLatitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">53.0780</sasf:hasLatitude>
    <sasf:hasLongitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">8.8190</sasf:hasLongitude>
    <sasf:hasPhoneNumber>+49 421 456789</sasf:hasPhoneNumber>
    <sasf:hasOpeningHours>Mon–Fri 11:00–20:00, Sat–Sun 11:00–21:00</sasf:hasOpeningHours>
    <rdfs:label xml:lang="en">Spice Route</rdfs:label>
    <rdfs:comment xml:lang="en">Modern South Indian and street food café. Classic Vada Pav and Mumbai-style Bhel Puri.</rdfs:comment>
</owl:NamedIndividual>

<!-- ═══════════════════════════════════════════════════════
     RESTAURANT 5 — Punjab Palace
     Cuisine: Indian/Pakistani | Dishes: Samosa, Chapli Kebab, Chana Chaat, Aloo Tikki
     ═══════════════════════════════════════════════════════ -->
<owl:NamedIndividual rdf:about="http://example.org/southasianstreetfood#PunjabPalace">
    <rdf:type rdf:resource="http://example.org/southasianstreetfood#Restaurant"/>
    <sasf:locatedIn rdf:resource="http://example.org/southasianstreetfood#Bremen"/>
    <sasf:servesDish rdf:resource="http://example.org/southasianstreetfood#Samosa"/>
    <sasf:servesDish rdf:resource="http://example.org/southasianstreetfood#ChapliKebab"/>
    <sasf:servesDish rdf:resource="http://example.org/southasianstreetfood#ChanaChaat"/>
    <sasf:servesDish rdf:resource="http://example.org/southasianstreetfood#AlooTikki"/>
    <sasf:hasAddress>Am Dobben 47, 28203 Bremen</sasf:hasAddress>
    <sasf:hasLatitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">53.0755</sasf:hasLatitude>
    <sasf:hasLongitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">8.8245</sasf:hasLongitude>
    <sasf:hasPhoneNumber>+49 421 567890</sasf:hasPhoneNumber>
    <sasf:hasOpeningHours>Daily 12:00–22:30</sasf:hasOpeningHours>
    <rdfs:label xml:lang="en">Punjab Palace</rdfs:label>
    <rdfs:comment xml:lang="en">Punjab-style eatery serving freshly fried samosas and a beloved Chana Chaat.</rdfs:comment>
</owl:NamedIndividual>
```

### Grocery Stores

```xml
<!-- ═══════════════════════════════════════════════════════
     GROCERY 1 — Asia Supermarkt Bremen
     Stocks: Tamarind paste, Chickpeas, Cumin, Coriander seeds, Curry leaves,
             Rice flour, Semolina, Lentils, Gram flour
     ═══════════════════════════════════════════════════════ -->
<owl:NamedIndividual rdf:about="http://example.org/southasianstreetfood#AsiaSupermarktBremen">
    <rdf:type rdf:resource="http://example.org/southasianstreetfood#GroceryStore"/>
    <sasf:locatedIn rdf:resource="http://example.org/southasianstreetfood#Bremen"/>
    <sasf:hasAddress>Bahnhofsplatz 7, 28195 Bremen</sasf:hasAddress>
    <sasf:hasLatitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">53.0832</sasf:hasLatitude>
    <sasf:hasLongitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">8.8134</sasf:hasLongitude>
    <sasf:hasPhoneNumber>+49 421 678901</sasf:hasPhoneNumber>
    <sasf:hasOpeningHours>Mon–Sat 09:00–20:00</sasf:hasOpeningHours>
    <rdfs:label xml:lang="en">Asia Supermarkt Bremen</rdfs:label>
    <rdfs:comment xml:lang="en">Large Asian supermarket near the central station. Stocks South Asian spices, lentils, flours, and fresh produce.</rdfs:comment>
</owl:NamedIndividual>

<!-- ═══════════════════════════════════════════════════════
     GROCERY 2 — Bollywood Spices & Foods
     Stocks: Tamarind, Mint chutney paste, Puri shells, Chaat masala,
             Paneer, Mustard seeds, Turmeric, Fenugreek, Asafoetida
     ═══════════════════════════════════════════════════════ -->
<owl:NamedIndividual rdf:about="http://example.org/southasianstreetfood#BollywoodSpicesAndFoods">
    <rdf:type rdf:resource="http://example.org/southasianstreetfood#GroceryStore"/>
    <sasf:locatedIn rdf:resource="http://example.org/southasianstreetfood#Bremen"/>
    <sasf:hasAddress>Kornstraße 28, 28201 Bremen</sasf:hasAddress>
    <sasf:hasLatitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">53.0812</sasf:hasLatitude>
    <sasf:hasLongitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">8.8081</sasf:hasLongitude>
    <sasf:hasPhoneNumber>+49 421 789012</sasf:hasPhoneNumber>
    <sasf:hasOpeningHours>Mon–Sat 10:00–19:30, Sun 11:00–17:00</sasf:hasOpeningHours>
    <rdfs:label xml:lang="en">Bollywood Spices and Foods</rdfs:label>
    <rdfs:comment xml:lang="en">Specialist Indian grocery with the best chaat masala and hard-to-find South Asian pantry staples in Bremen.</rdfs:comment>
</owl:NamedIndividual>

<!-- ═══════════════════════════════════════════════════════
     GROCERY 3 — Halal World Markt
     Stocks: Chickpeas, Lentils, Yoghurt, Gram flour, Cumin seeds,
             Black pepper, Halal meat, Fresh coriander, Green chillies
     ═══════════════════════════════════════════════════════ -->
<owl:NamedIndividual rdf:about="http://example.org/southasianstreetfood#HalalWorldMarkt">
    <rdf:type rdf:resource="http://example.org/southasianstreetfood#GroceryStore"/>
    <sasf:locatedIn rdf:resource="http://example.org/southasianstreetfood#Bremen"/>
    <sasf:hasAddress>Gröpelinger Heerstraße 201, 28237 Bremen</sasf:hasAddress>
    <sasf:hasLatitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">53.0909</sasf:hasLatitude>
    <sasf:hasLongitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">8.7734</sasf:hasLongitude>
    <sasf:hasPhoneNumber>+49 421 890123</sasf:hasPhoneNumber>
    <sasf:hasOpeningHours>Daily 09:00–21:00</sasf:hasOpeningHours>
    <rdfs:label xml:lang="en">Halal World Markt</rdfs:label>
    <rdfs:comment xml:lang="en">Halal grocery and butcher with a strong South Asian section. Great for fresh halal meat for Chapli Kebab.</rdfs:comment>
</owl:NamedIndividual>

<!-- ═══════════════════════════════════════════════════════
     GROCERY 4 — Lanka & Desi Kirana
     Stocks: Urad dal, Rice, Idli moulds, Coconut, Curry leaves,
             Tamarind block, Jaggery, Dried chilies, Semolina
     ═══════════════════════════════════════════════════════ -->
<owl:NamedIndividual rdf:about="http://example.org/southasianstreetfood#LankaAndDesiKirana">
    <rdf:type rdf:resource="http://example.org/southasianstreetfood#GroceryStore"/>
    <sasf:locatedIn rdf:resource="http://example.org/southasianstreetfood#Bremen"/>
    <sasf:hasAddress>Woltmershauser Straße 302, 28197 Bremen</sasf:hasAddress>
    <sasf:hasLatitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">53.0686</sasf:hasLatitude>
    <sasf:hasLongitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">8.8018</sasf:hasLongitude>
    <sasf:hasPhoneNumber>+49 421 901234</sasf:hasPhoneNumber>
    <sasf:hasOpeningHours>Mon–Sat 09:30–19:00</sasf:hasOpeningHours>
    <rdfs:label xml:lang="en">Lanka and Desi Kirana</rdfs:label>
    <rdfs:comment xml:lang="en">South Asian and Sri Lankan grocer. Excellent for Dosa, Idli, and Sambar ingredients.</rdfs:comment>
</owl:NamedIndividual>

<!-- ═══════════════════════════════════════════════════════
     GROCERY 5 — Al Syed Orientalischer Supermarkt
     Stocks: Chickpeas, Lentils, Tamarind, Cumin, Turmeric,
             Coriander, Gram flour, Rice, Dried chilies, Spice mixes
     ═══════════════════════════════════════════════════════ -->
<owl:NamedIndividual rdf:about="http://example.org/southasianstreetfood#AlSyedOrientalischerSupermarkt">
    <rdf:type rdf:resource="http://example.org/southasianstreetfood#GroceryStore"/>
    <sasf:locatedIn rdf:resource="http://example.org/southasianstreetfood#Bremen"/>
    <sasf:hasAddress>Bürgermeister-Smidt-Straße, 28195 Bremen</sasf:hasAddress>
    <sasf:hasLatitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">53.0845731</sasf:hasLatitude>
    <sasf:hasLongitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">8.8142129</sasf:hasLongitude>
    <sasf:hasOpeningHours>Please check Google Maps for current hours</sasf:hasOpeningHours>
    <rdfs:label xml:lang="en">Al Syed Orientalischer Supermarkt</rdfs:label>
    <rdfs:comment xml:lang="en">Oriental supermarket in central Bremen with Middle Eastern and South Asian groceries and spices.</rdfs:comment>
</owl:NamedIndividual>

<!-- ═══════════════════════════════════════════════════════
     GROCERY 6 — Global Foods Bremen
     Stocks: Potato, Chickpeas, Puffed rice, Tamarind, Sev,
             Papdi crackers, Pomegranate seeds, Chaat masala, Coriander
     ═══════════════════════════════════════════════════════ -->
<owl:NamedIndividual rdf:about="http://example.org/southasianstreetfood#GlobalFoodsBremen">
    <rdf:type rdf:resource="http://example.org/southasianstreetfood#GroceryStore"/>
    <sasf:locatedIn rdf:resource="http://example.org/southasianstreetfood#Bremen"/>
    <sasf:hasAddress>Neuenlander Straße 34, 28199 Bremen</sasf:hasAddress>
    <sasf:hasLatitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">53.0701</sasf:hasLatitude>
    <sasf:hasLongitude rdf:datatype="http://www.w3.org/2001/XMLSchema#decimal">8.7895</sasf:hasLongitude>
    <sasf:hasPhoneNumber>+49 421 012345</sasf:hasPhoneNumber>
    <sasf:hasOpeningHours>Mon–Sat 08:00–20:00, Sun 10:00–18:00</sasf:hasOpeningHours>
    <rdfs:label xml:lang="en">Global Foods Bremen</rdfs:label>
    <rdfs:comment xml:lang="en">International food market. Full ingredient range for Bhel Puri, Chotpoti, and Chaat.</rdfs:comment>
</owl:NamedIndividual>
```

---

## 7. Sample SPARQL Queries (after adding these triples)

### Find all restaurants in Bremen
```sparql
PREFIX sasf: <http://example.org/southasianstreetfood#>
SELECT ?restaurant ?address WHERE {
    ?restaurant a sasf:Restaurant ;
                sasf:locatedIn sasf:Bremen ;
                sasf:hasAddress ?address .
}
```

### Find restaurants serving a specific dish
```sparql
PREFIX sasf: <http://example.org/southasianstreetfood#>
SELECT ?restaurant ?address WHERE {
    ?restaurant a sasf:Restaurant ;
                sasf:servesDish sasf:Samosa ;
                sasf:locatedIn sasf:Bremen ;
                sasf:hasAddress ?address .
}
```

### Find grocery stores in a given country (future use)
```sparql
PREFIX sasf: <http://example.org/southasianstreetfood#>
SELECT ?store ?city ?address WHERE {
    ?store a sasf:GroceryStore ;
           sasf:locatedIn ?city ;
           sasf:hasAddress ?address .
    ?city sasf:inCountry sasf:Germany .
}
```

---

## 8. Future Extensibility

To add a new city in Germany (e.g. Hamburg):
```xml
<owl:Class rdf:about="http://example.org/southasianstreetfood#Hamburg">
    <rdfs:subClassOf rdf:resource="http://example.org/southasianstreetfood#City"/>
    <rdfs:subClassOf>
        <owl:Restriction>
            <owl:onProperty rdf:resource="http://example.org/southasianstreetfood#inCountry"/>
            <owl:someValuesFrom rdf:resource="http://example.org/southasianstreetfood#Germany"/>
        </owl:Restriction>
    </rdfs:subClassOf>
    <oboInOwl:hasDbXref rdf:resource="http://www.geonames.org/2911298/"/>
    <rdfs:label xml:lang="en">Hamburg</rdfs:label>
</owl:Class>
```

To add a new country (e.g. United Kingdom):
```xml
<owl:Class rdf:about="http://example.org/southasianstreetfood#UnitedKingdom">
    <rdfs:subClassOf rdf:resource="http://example.org/southasianstreetfood#Country"/>
    <oboInOwl:hasDbXref rdf:resource="http://www.geonames.org/2635167/"/>
    <rdfs:label xml:lang="en">United Kingdom</rdfs:label>
</owl:Class>
```

Then add `London` under `City` with `inCountry some UnitedKingdom`, and all new restaurants/stores under `locatedIn London`.

---

## 9. Checklist

- [ ] Add 4 new object properties: `locatedIn`, `inCountry`, `servesDish`, `stocksIngredient`
- [ ] Add 5 new data properties: `hasAddress`, `hasLatitude`, `hasLongitude`, `hasPhoneNumber`, `hasOpeningHours`
- [ ] Add `GeographicArea` class; make `Country` its subclass
- [ ] Add `City` class under `GeographicArea`
- [ ] Add `Germany` class under `Country` (GeoNames: 2921044)
- [ ] Add `Bremen` class under `City` with `inCountry some Germany` restriction (GeoNames: 2944388)
- [ ] Add `FoodPlace` class; add `Restaurant` and `GroceryStore` as subclasses
- [ ] Add 5 restaurant individuals with type, locatedIn, servesDish, address, coordinates, phone, hours
- [ ] Add 6 grocery store individuals with type, locatedIn, address, coordinates, phone, hours
- [ ] Save and run the OWL reasoner (HermiT) to verify no inconsistencies
- [ ] Run the SPARQL queries in Section 7 to confirm triples are queryable
