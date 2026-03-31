const translations = {
    global: {
        en: {
            language_label: "Language",
            ingredients_heading: "Ingredients",
            bottled_text: "Bottled in a protected atmosphere.",
            nutrition_heading: "Nutritional value",
            energy_label: "Energy Value",
            fats_label: "Fats",
            saturated_fats_label: "Saturated Fats",
            carbohydrates_label: "Carbohydrates",
            sugars_label: "Sugars",
            proteins_label: "Proteins",
            salt_label: "Salt",
            recycling_heading: "Recycling information",
            bottle_label: "Bottle",
            bottle_material: "Glass",
            cap_label: "Cap",
            cap_material: "Aluminium",
            wirehood_label: "Wirehood",
            wirehood_material: "Steel",
            stopper_label: "Stopper",
            stopper_material: "Cork",
            recycling_note: "Check your municipality's specific recycling guidelines."
        },
        it: {
            language_label: "Lingua",
            ingredients_heading: "Ingredienti",
            bottled_text: "Imbottigliato in atmosfera protetta.",
            nutrition_heading: "Dichiarazione Nutrizionale",
            energy_label: "Valore Energetico/Energia",
            fats_label: "Grassi",
            saturated_fats_label: "Acidi Grassi Saturi",
            carbohydrates_label: "Carboidrati",
            sugars_label: "Zuccheri",
            proteins_label: "Proteine",
            salt_label: "Sale",
            recycling_heading: "Tabella ambientale",
            bottle_label: "Bottiglia",
            bottle_material: "Vetro",
            cap_label: "Capsula",
            cap_material: "Alluminio",
            wirehood_label: "Gabbietta",
            wirehood_material: "Acciaio",
            stopper_label: "Tappo",
            stopper_material: "Sughero",
            recycling_note: "Verifica le linee guida specifiche per il riciclo del tuo comune."
        },
        es: {
            language_label: "Idioma",
            ingredients_heading: "Ingredientes",
            bottled_text: "Embotellado en atmósfera protegida.",
            nutrition_heading: "Información nutricional",
            energy_label: "Valor energético",
            fats_label: "Grasas",
            saturated_fats_label: "Grasas saturadas",
            carbohydrates_label: "Hidratos de carbono",
            sugars_label: "Azúcares",
            proteins_label: "Proteínas",
            salt_label: "Sal",
            recycling_heading: "Información de reciclaje",
            bottle_label: "Botella",
            bottle_material: "Vidrio",
            cap_label: "Cápsula",
            cap_material: "Aluminio",
            wirehood_label: "Bozal",
            wirehood_material: "Acero",
            stopper_label: "Tapón",
            stopper_material: "Corcho",
            recycling_note: "Consulta las directrices específicas de reciclaje de tu municipio."
        }
    },

    "cuvee-rose": {
        en: {
            subtitle: "Spumante brut",
            title: "Cuvée Rosé",
            ingredients_text: 'Grapes, sugar syrup, preservatives and antioxidants (<strong>sulphites</strong>), stabilizing agents (gum arabic).'
        },
        it: {
            subtitle: "Spumante brut",
            title: "Cuvée Rosé",
            ingredients_text: 'Uve, sciroppo zuccherino, conservanti e antiossidanti (<strong>solfiti</strong>), agenti stabilizzanti (gomma arabica).'
        },
        es: {
            subtitle: "Espumante brut",
            title: "Cuvée Rosé",
            ingredients_text: 'Uvas, jarabe de azúcar, conservantes y antioxidantes (<strong>sulfitos</strong>), agentes estabilizantes (goma arábiga).'
        }
    },

    "nani-dei-berti": {
        en: {
            subtitle: "Valdobbiadene Prosecco Superiore Millesimato DOCG Brut",
            title: "Nani Dei Berti",
            ingredients_text: 'Grapes, sugar syrup, preservatives and antioxidants (<strong>sulphites</strong>), acidity regulator (tartaric acid), stabilizing agents (gum arabic).'
        },
        it: {
            subtitle: "Valdobbiadene Prosecco Superiore Millesimato DOCG Brut",
            title: "Nani Dei Berti",
            ingredients_text: 'Uve, sciroppo zuccherino, conservanti e antiossidanti (<strong>solfiti</strong>), correttore di acidità (acido tartarico), agenti stabilizzanti (gomma arabica).'
        },
        es: {
            subtitle: "Valdobbiadene Prosecco Superiore Millesimato DOCG Brut",
            title: "Nani Dei Berti",
            ingredients_text: 'Uvas, jarabe de azúcar, conservantes y antioxidantes (<strong>sulfitos</strong>), corrector de acidez (ácido tartárico), agentes estabilizantes (goma arábiga).'
        }
    },

    "farder": {
        en: {
            subtitle: "SPUMANTE PROSECCO DOC TREVISO EXTRA DRY",
            title: "Fardér",
            ingredients_text: 'Grapes, sugar syrup, preservatives and antioxidants (<strong>sulphites</strong>), stabilizing agents (gum arabic).'
        },
        it: {
            subtitle: "SPUMANTE PROSECCO DOC TREVISO EXTRA DRY",
            title: "Fardér",
            ingredients_text: 'Uve, sciroppo zuccherino, conservanti e antiossidanti (<strong>solfiti</strong>), agenti stabilizzanti (gomma arabica).'
        },
        es: {
            subtitle: "ESPUMOSO PROSECCO DOC TREVISO EXTRA DRY",
            title: "Fardér",
            ingredients_text: 'Uvas, jarabe de azúcar, conservantes y antioxidantes (<strong>sulfitos</strong>), agentes estabilizantes (goma arábiga).'
        }
    }
};

function getPageKey() {
    return document.body.getAttribute("data-page") || "";
}

function getMergedTranslations(pageKey, lang) {
    const globalSet = (translations.global && translations.global[lang]) || {};
    const pageSet = (translations[pageKey] && translations[pageKey][lang]) || {};
    return { ...globalSet, ...pageSet };
}

function setLanguage(lang) {
    const pageKey = getPageKey();
    const activeTranslations = getMergedTranslations(pageKey, lang);
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (activeTranslations[key]) {
            element.innerHTML = activeTranslations[key];
        }
    });

    document.documentElement.lang = lang;

    const spanishQrSection = document.getElementById("spanishQrSection");
    if (spanishQrSection) {
        spanishQrSection.style.display = lang === "es" ? "block" : "none";
    }

    try {
        localStorage.setItem("selectedLanguage", lang);
    } catch (e) {
        console.warn("Could not save language preference.", e);
    }
}

function detectLanguage() {
    // Use the primary language tag from the device locale (e.g. "it-IT" → "it")
    const deviceLang = (navigator.language || navigator.userLanguage || "en")
        .split("-")[0]
        .toLowerCase();
    const supported = ["en", "it", "es"];
    return supported.includes(deviceLang) ? deviceLang : "en";
}

document.addEventListener("DOMContentLoaded", function () {
    const languageSelect = document.getElementById("languageSelect");
    const langDisplay = document.getElementById("langDisplay");

    // Saved preference takes priority; fall back to device locale, then English
    const activeLanguage = localStorage.getItem("selectedLanguage") || detectLanguage();

    function updateLangDisplay(lang) {
        if (!langDisplay || !languageSelect) return;
        const selected = languageSelect.querySelector(`option[value="${lang}"]`);
        if (selected) langDisplay.textContent = selected.textContent;
    }

    if (languageSelect) {
        languageSelect.value = activeLanguage;
        setLanguage(activeLanguage);
        updateLangDisplay(activeLanguage);

        languageSelect.addEventListener("change", function () {
            setLanguage(this.value);
            updateLangDisplay(this.value);
        });
    } else {
        setLanguage(activeLanguage);
    }
});