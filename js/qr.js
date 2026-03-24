const translations = {
    en: {
        language_label: "Language",
        subtitle: "Spumante brut",
        title: "Cuvée Rosé",
        ingredients_heading: "Ingredients",
        ingredients_text: 'Grapes, sugar syrup, preservatives and antioxidants (<strong>sulphites</strong>), stabilizing agents (gum arabic).',
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
        subtitle: "Spumante brut",
        title: "Cuvée Rosé",
        ingredients_heading: "Ingredienti",
        ingredients_text: 'Uve, sciroppo zuccherino, conservanti e antiossidanti (<strong>solfiti</strong>), agenti stabilizzanti (gomma arabica).',
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
        subtitle: "Espumante brut",
        title: "Cuvée Rosé",
        ingredients_heading: "Ingredientes",
        ingredients_text: 'Uvas, jarabe de azúcar, conservantes y antioxidantes (<strong>sulfitos</strong>), agentes estabilizantes (goma arábiga).',
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
};

function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;

    try {
        localStorage.setItem("selectedLanguage", lang);
    } catch (e) {
        console.warn("Could not save language preference.", e);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const languageSelect = document.getElementById("languageSelect");
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";

    if (languageSelect) {
        languageSelect.value = savedLanguage;
        setLanguage(savedLanguage);

        languageSelect.addEventListener("change", function () {
            setLanguage(this.value);
        });
    }
});