const recipes = [
    {
        title: "Bramboráky - default",
        time: "30 min",
        ingredients: ["4 velké brambory", "2 stroužky česneku", "1 vejce", "3 lžíce hladké mouky", "majoránka, sůl, pepř"],
        steps: [
            "Brambory a česnek najemno nastrouhejte.",
            "Přidejte vejce, mouku a koření, promíchejte na hladké těsto.",
            "Smažte lžící těsta na rozpáleném oleji z obou stran do zlatova."
        ]
    },
    {
        title: "Smažený květák - default",
        time: "35 min",
        ingredients: ["1 menší květák", "2 vejce", "hladká mouka", "strouhanka", "sůl"],
        steps: [
            "Květák rozeberte na růžičky a povařte 5 minut ve slané vodě.",
            "Obalte postupně v mouce, vejci a strouhance.",
            "Smažte do zlatova."
        ]
    },
    {
        title: "Čočka na kyselo s vejcem - default",
        time: "50 min",
        ingredients: ["250 g čočky", "1 cibule", "2 lžíce octa", "lžíce hladké mouky", "bobkový list"],
        steps: [
            "Čočku uvařte doměkka s bobkovým listem.",
            "Osmahněte cibuli s moukou na jíšku a vmíchejte do čočky.",
            "Dochuťte octem a solí."
        ]
    },
    {
        title: "Medovo-česneková křidélka",
        time: "45 min",
        ingredients: [
            "1 kg kuřecích křídel",
            "sůl, pepř",
            "2 lžičky sušeného česneku",
            "2 lžičky kypřícího prášku",
            "1 lžíce medu",
            "šťáva z půlky citrónu",
            "2 lžíce světlé sójové omáčky",
            "chilli dle chuti",
            "3 stroužky česneku",
            "1 lžíce nasekané petrželky"
        ],
        steps: [
            "Křídla promíchejte se solí, pepřem a sušeným česnekem, poté přidejte kypřící prášek a znovu promíchejte.",
            "Vyskládejte na plech s pečicím papírem a pečte 30 minut při 180 °C, v polovině otočte.",
            "V rendlíku přiveďte k varu med, citronovou šťávu, sójovou omáčku a chilli, hned stáhněte z plotny a vmíchejte utřený česnek.",
            "Upečená křídla promíchejte s omáčkou a na závěr posypte petrželkou."
        ]
    },
    {
        title: "Mexický fazolový salát s kukuřicí",
        time: "15 min",
        ingredients: [
            "červené fazole",
            "kukuřice",
            "rajčata",
            "paprika",
            "červená cibule",
            "avokádo",
            "limetka",
            "koriandr",
            "olivový olej",
            "sůl, pepř, špetka chilli"
        ],
        steps: [
            "Všechny suroviny nakrájejte na kousky.",
            "Smíchejte fazole, kukuřici, rajčata, papriku, cibuli a avokádo.",
            "Zakápněte olivovým olejem a limetkovou šťávou, dochuťte solí, pepřem a chilli, promíchejte s koriandrem."
        ]
    }
];

let lastIndex = -1;

function renderRandomRecipe() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * recipes.length);
    } while (randomIndex === lastIndex && recipes.length > 1);

    lastIndex = randomIndex;
    const recipe = recipes[randomIndex];

    document.getElementById("recipe-title").textContent = recipe.title;
    document.getElementById("recipe-time").textContent = "Doba přípravy: " + recipe.time;

    const ingredientsList = document.getElementById("recipe-ingredients");
    ingredientsList.innerHTML = recipe.ingredients
        .map(item => `<li>${item}</li>`)
        .join("");

    const stepsList = document.getElementById("recipe-steps");
    stepsList.innerHTML = recipe.steps
        .map(step => `<li>${step}</li>`)
        .join("");
}

renderRandomRecipe();

document.getElementById("reroll").addEventListener("click", renderRandomRecipe);
