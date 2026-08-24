const recipes = [
  {
    title: "Bramboráky",
    time: "30 min",
    ingredients: ["4 velké brambory", "2 stroužky česneku", "1 vejce", "3 lžíce hladké mouky", "majoránka, sůl, pepř"],
    steps: [
      "Brambory a česnek najemno nastrouhejte.",
      "Přidejte vejce, mouku a koření, promíchejte na hladké těsto.",
      "Smažte lžící těsta na rozpáleném oleji z obou stran do zlatova."
    ]
  },
  {
    title: "Smažený květák",
    time: "35 min",
    ingredients: ["1 menší květák", "2 vejce", "hladká mouka", "strouhanka", "sůl"],
    steps: [
      "Květák rozeberte na růžičky a povařte 5 minut ve slané vodě.",
      "Obalte postupně v mouce, vejci a strouhance.",
      "Smažte do zlatova."
    ]
  },
  {
    title: "Čočka na kyselo s vejcem",
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
      "1 kg kuřecích křídel", "sůl, pepř", "2 lžičky sušeného česneku", "2 lžičky kypřícího prášku",
      "1 lžíce medu", "šťáva z půlky citrónu", "2 lžíce světlé sójové omáčky", "chilli dle chuti",
      "3 stroužky česneku", "1 lžíce nasekané petrželky"
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
    ingredients: ["červené fazole", "kukuřice", "rajčata", "paprika", "červená cibule", "avokádo", "limetka", "koriandr", "olivový olej", "sůl, pepř, špetka chilli"],
    steps: [
      "Všechny suroviny nakrájejte na kousky.",
      "Smíchejte fazole, kukuřici, rajčata, papriku, cibuli a avokádo.",
      "Zakápněte olivovým olejem a limetkovou šťávou, dochuťte solí, pepřem a chilli, promíchejte s koriandrem."
    ]
  },
  {
    title: "Boloňská omáčka",
    time: "60 min",
    ingredients: ["400 g mletého hovězího masa", "1 cibule", "2 stroužky česneku", "1 mrkev", "2 stonky řapíkatého celeru", "400 g rajčat v konzervě", "2 lžíce rajčatového protlaku", "špagety na servírování"],
    steps: [
      "Na oleji orestujte nadrobno nakrájenou cibuli, mrkev a celer doměkka.",
      "Přidejte mleté maso a osmahněte dozlatova, poté vmíchejte protlak, rajčata a česnek.",
      "Duste na mírném ohni alespoň 40 minut a podávejte se špagetami."
    ]
  },
  {
    title: "Carbonara",
    time: "25 min",
    ingredients: ["350 g špaget", "150 g pancetty nebo slaniny", "3 vejce", "60 g parmazánu", "černý pepř", "sůl"],
    steps: [
      "Špagety uvařte al dente ve slané vodě.",
      "Pancettu osmahněte dokřupava na pánvi bez oleje.",
      "Vejce prošlehejte s parmazánem, smíchejte s odkapanými těstovinami a pancettou mimo oheň, aby vejce jen zhoustla.",
      "Dochuťte hodně pepřem a podávejte hned."
    ]
  },
  {
    title: "Amatriciana",
    time: "30 min",
    ingredients: ["350 g bucatini nebo špaget", "150 g guanciale nebo slaniny", "400 g rajčat v konzervě", "chilli papřička", "50 g pecorina", "sůl"],
    steps: [
      "Slaninu osmahněte dokřupava, vyjměte a odlijte většinu tuku.",
      "Na zbylém tuku orestujte chilli, přidejte rajčata a duste 15 minut.",
      "Vmíchejte zpět slaninu, promíchejte s uvařenými těstovinami a posypte pecorinem."
    ]
  },
  {
    title: "Noky s kuřecím a špenátem",
    time: "25 min",
    ingredients: ["500 g bramborových noků", "2 kuřecí prsa", "150 g listového špenátu", "150 ml smetany ke šlehání", "stroužek česneku", "sůl, pepř, muškátový oříšek"],
    steps: [
      "Kuřecí maso nakrájejte na kostky a osmahněte dozlatova.",
      "Přidejte česnek a špenát, nechte trochu zvadnout.",
      "Zalijte smetanou, dochuťte a promíchejte s uvařenými noky."
    ]
  },
  {
    title: "Orzo s cuketou a kuřecím masem",
    time: "30 min",
    ingredients: ["250 g orza", "2 kuřecí prsa", "1 cuketa", "stroužek česneku", "citronová šťáva", "olivový olej", "parmazán"],
    steps: [
      "Orzo uvařte podle návodu na obalu.",
      "Kuřecí maso a cuketu nakrájejte na kostky a orestujte na olivovém oleji s česnekem.",
      "Promíchejte s orzem, dochuťte citronovou šťávou a posypte parmazánem."
    ]
  },
  {
    title: "Orzo se špenátem a ricottou",
    time: "25 min",
    ingredients: ["250 g orza", "150 g listového špenátu", "200 g ricotty", "stroužek česneku", "olivový olej", "sůl, pepř"],
    steps: [
      "Orzo uvařte podle návodu.",
      "Na oleji zpěňte česnek, přidejte špenát a nechte zvadnout.",
      "Vmíchejte ricottu a uvařené orzo, promíchejte doteplá a dochuťte."
    ]
  },
  {
    title: "Domácí pizza",
    time: "90 min",
    ingredients: ["500 g hladké mouky", "7 g sušeného droždí", "300 ml vlažné vody", "1 lžíce olivového oleje", "rajčatový protlak", "mozzarella", "oblíbená pizza obloha"],
    steps: [
      "Z mouky, droždí, vody, soli a oleje vypracujte těsto a nechte hodinu kynout.",
      "Rozválejte na plech, potřete protlakem a poklaďte oblohou a mozzarellou.",
      "Pečte při 230 °C 10-12 minut do zlatova."
    ]
  },
  {
    title: "Lasagne",
    time: "90 min",
    ingredients: ["250 g lasagní", "500 g mletého masa", "400 g rajčat v konzervě", "1 cibule", "500 ml bešamelu", "150 g strouhaného sýra"],
    steps: [
      "Připravte boloňskou omáčku z masa, cibule a rajčat.",
      "Střídavě vrstvěte plátky lasagní, omáčku a bešamel do zapékací mísy.",
      "Posypte sýrem a pečte při 180 °C 35-40 minut."
    ]
  },
  {
    title: "Těstoviny s kuřecím a sušenými rajčaty",
    time: "25 min",
    ingredients: ["350 g těstovin", "2 kuřecí prsa", "100 g sušených rajčat", "150 ml smetany", "stroužek česneku", "parmazán"],
    steps: [
      "Kuřecí maso nakrájejte na proužky a osmahněte se sušenými rajčaty a česnekem.",
      "Zalijte smetanou a nechte krátce provařit.",
      "Promíchejte s uvařenými těstovinami a posypte parmazánem."
    ]
  },
  {
    title: "Těstoviny s pestem",
    time: "15 min",
    ingredients: ["350 g těstovin", "4 lžíce bazalkového pesta", "parmazán", "piniové oříšky", "olivový olej"],
    steps: [
      "Těstoviny uvařte al dente.",
      "Promíchejte s pestem a trochou vody z vaření pro hladší konzistenci.",
      "Podávejte posypané parmazánem a piniovými oříšky."
    ]
  },
  {
    title: "Krémové rizoto z pečených paprik s ricottou",
    time: "45 min",
    ingredients: ["250 g rýže na rizoto", "2 červené papriky", "1 cibule", "zeleninový vývar", "100 g ricotty", "bílé víno na podlití"],
    steps: [
      "Papriky opečte v troubě dozlatova, oloupejte a rozmixujte na pyré.",
      "Na cibuli osmahněte rýži, podlijte vínem a postupně přidávejte horký vývar za stálého míchání.",
      "Na závěr vmíchejte paprikové pyré a ricottu."
    ]
  },
  {
    title: "Egg fried rice",
    time: "20 min",
    ingredients: ["300 g uvařené studené rýže", "2 vejce", "hrášek a mrkev", "jarní cibulka", "sójová omáčka", "olej"],
    steps: [
      "Na pánvi rozehřejte olej a orestujte zeleninu.",
      "Přisuňte na stranu, na volné místo rozklepněte vejce a rozmíchejte na míchaná.",
      "Přidejte rýži, vše promíchejte a dochuťte sójovou omáčkou."
    ]
  },
  {
    title: "Udon nudle se zeleninou",
    time: "20 min",
    ingredients: ["300 g udon nudlí", "paprika, mrkev, brokolice", "stroužek česneku", "zázvor", "sójová omáčka", "sezamový olej"],
    steps: [
      "Udon nudle uvařte podle návodu.",
      "Zeleninu orestujte na sezamovém oleji s česnekem a zázvorem.",
      "Přidejte nudle a sójovou omáčku, promíchejte doteplá."
    ]
  },
  {
    title: "Gyoza knedlíčky",
    time: "40 min",
    ingredients: ["250 g mletého vepřového masa", "zelí", "jarní cibulka", "zázvor", "sójová omáčka", "těsto na knedlíčky (kolečka)"],
    steps: [
      "Smíchejte maso se zelím, cibulkou, zázvorem a sójovou omáčkou.",
      "Plňte do koleček těsta a slepte do půlměsíčků.",
      "Osmahněte na pánvi zespodu dozlatova, podlijte vodou a poklopte, ať se propaří."
    ]
  },
  {
    title: "Losos na kari",
    time: "25 min",
    ingredients: ["2 filety lososa", "kari koření", "kokosové mléko", "cibule", "stroužek česneku", "rýže na přílohu"],
    steps: [
      "Cibuli a česnek orestujte s kari kořením.",
      "Zalijte kokosovým mlékem a nechte krátce provařit.",
      "Vložte lososa a duste doměkka, podávejte s rýží."
    ]
  },
  {
    title: "Zeleninové kari s rýží",
    time: "30 min",
    ingredients: ["mrkev, brokolice, paprika, cuketa", "kari koření", "kokosové mléko", "cibule, česnek", "rýže"],
    steps: [
      "Zeleninu nakrájejte na kousky a orestujte s cibulí a česnekem.",
      "Přidejte kari koření a zalijte kokosovým mlékem.",
      "Duste doměkka a podávejte s rýží."
    ]
  },
  {
    title: "Pad thai",
    time: "30 min",
    ingredients: ["rýžové nudle", "krevety nebo kuře", "vejce", "klíčky", "arašídy", "pad thai omáčka (tamarind, rybí omáčka, cukr)"],
    steps: [
      "Rýžové nudle namočte podle návodu.",
      "Na pánvi osmahněte maso, přidejte rozklepnuté vejce a nudle.",
      "Zalijte omáčkou, přidejte klíčky a posypte arašídy."
    ]
  },
  {
    title: "Bůček po asijsku",
    time: "90 min",
    ingredients: ["500 g vepřového bůčku", "sójová omáčka", "med", "zázvor, česnek", "hvězdicový badyán", "rýže na přílohu"],
    steps: [
      "Bůček nakrájejte na kostky a orestujte dozlatova.",
      "Zalijte sójovou omáčkou, medem a vodou s kořením.",
      "Duste doměkka asi hodinu a podávejte s rýží."
    ]
  },
  {
    title: "Pad Krapow",
    time: "20 min",
    ingredients: ["300 g mletého kuřecího nebo vepřového masa", "thajská bazalka", "chilli", "česnek", "rybí omáčka", "vejce na osmažení"],
    steps: [
      "Na oleji orestujte česnek a chilli.",
      "Přidejte mleté maso a osmahněte dozlatova, dochuťte rybí omáčkou.",
      "Na závěr vmíchejte bazalku, podávejte s rýží a smaženým vejcem."
    ]
  },
  {
    title: "Čočkový dhal",
    time: "35 min",
    ingredients: ["250 g červené čočky", "cibule", "česnek, zázvor", "kari koření, kurkuma", "rajče", "kokosové mléko"],
    steps: [
      "Cibuli, česnek a zázvor orestujte s kořením.",
      "Přidejte čočku, rajče a zalijte vodou, vařte doměkka asi 20 minut.",
      "Na závěr vmíchejte kokosové mléko a dochuťte."
    ]
  },
  {
    title: "Butter chicken",
    time: "45 min",
    ingredients: ["500 g kuřecích prsou", "jogurt na marinádu", "cibule, česnek, zázvor", "rajčatový protlak", "smetana", "garam masala"],
    steps: [
      "Kuře marinujte v jogurtu s kořením alespoň hodinu.",
      "Na másle orestujte cibuli, česnek a zázvor, přidejte protlak a koření.",
      "Vložte kuře, zalijte smetanou a duste doměkka."
    ]
  },
  {
    title: "Kuře ala kachna",
    time: "75 min",
    ingredients: ["1 kuře", "kmín, sůl", "cibule", "zelí na přílohu", "houskový nebo bramborový knedlík"],
    steps: [
      "Kuře potřete solí a kmínem a vložte do pekáče s cibulí.",
      "Pečte při 180 °C dozlatova, průběžně podlévejte výpekem.",
      "Podávejte se zelím a knedlíkem."
    ]
  },
  {
    title: "Šunkofleky",
    time: "30 min",
    ingredients: ["300 g fleků (těstovin)", "200 g šunky", "2 vejce", "100 ml smetany nebo mléka", "sůl, pepř", "muškátový oříšek"],
    steps: [
      "Fleky uvařte podle návodu.",
      "Šunku nakrájejte na kostičky a orestujte.",
      "Promíchejte s fleky, zalijte rozšlehanými vejci se smetanou a nechte na pánvi zapéct."
    ]
  },
  {
    title: "Sekaná",
    time: "60 min",
    ingredients: ["500 g mletého masa", "1 vejce", "houska namočená v mléce", "cibule", "česnek", "sůl, pepř, majoránka"],
    steps: [
      "Housku vyždímejte a smíchejte s masem, vejcem, cibulí, česnekem a kořením.",
      "Vytvarujte do bochníku a vložte do vymazané zapékací mísy.",
      "Pečte při 180 °C přibližně 45 minut."
    ]
  },
  {
    title: "Karbanátky",
    time: "40 min",
    ingredients: ["500 g mletého masa", "1 vejce", "houska namočená v mléce", "cibule", "strouhanka na obalení", "sůl, pepř"],
    steps: [
      "Smíchejte maso s vyždímanou houskou, vejcem, cibulí a kořením.",
      "Formujte placičky a obalte ve strouhance.",
      "Smažte na pánvi z obou stran dozlatova."
    ]
  },
  {
    title: "Výpečky",
    time: "90 min",
    ingredients: ["500 g vepřového bůčku nebo výřezu", "sůl, kmín", "cibule", "chléb a hořčice na servírování"],
    steps: [
      "Maso nakrájejte na kostky, osolte a okmínujte.",
      "Pomalu pečte v troubě dozlatova a dokřupava, případně podlévejte vodou.",
      "Podávejte s čerstvým chlebem a hořčicí."
    ]
  },
  {
    title: "Pečené kuře",
    time: "90 min",
    ingredients: ["1 celé kuře", "sůl, pepř, paprika", "česnek", "bylinky (tymián, rozmarýn)", "olivový olej"],
    steps: [
      "Kuře potřete olejem s kořením, česnekem a bylinkami.",
      "Pečte při 180 °C přibližně 70-80 minut do zlatova.",
      "Nechte před krájením chvíli odpočinout."
    ]
  },
  {
    title: "Vepřová panenka na grilu",
    time: "30 min",
    ingredients: ["1 vepřová panenka", "olivový olej", "česnek", "hořčice", "sůl, pepř"],
    steps: [
      "Panenku potřete olejem, hořčicí, česnekem a kořením.",
      "Grilujte na rozpáleném grilu ze všech stran dozlatova.",
      "Nechte pár minut odpočinout a nakrájejte na plátky."
    ]
  },
  {
    title: "Pstruh na másle",
    time: "20 min",
    ingredients: ["2 pstruzi", "máslo", "citron", "sůl, pepř", "hladká mouka na obalení"],
    steps: [
      "Pstruhy osolte, opepřete a lehce obalte v mouce.",
      "Opékejte na másle z obou stran dozlatova.",
      "Podávejte s citronem a bramborami."
    ]
  },
  {
    title: "Pečené vepřové koleno",
    time: "150 min",
    ingredients: ["1 vepřové koleno", "sůl, kmín", "česnek", "tmavé pivo na podlití", "hořčice a chren na servírování"],
    steps: [
      "Koleno potřete solí, kmínem a česnekem.",
      "Pečte při 160 °C dlouho a pomalu, podlévejte pivem, aby zůstalo šťavnaté.",
      "Poslední půlhodinu zvyšte teplotu, ať zkrásní kůže."
    ]
  },
  {
    title: "Knedlík s vajíčkem",
    time: "20 min",
    ingredients: ["staré rohlíky nebo knedlík", "3 vejce", "cibule", "sůl, pepř", "pažitka"],
    steps: [
      "Knedlík nakrájejte na kostičky a orestujte na másle.",
      "Zalijte rozšlehanými vejci a za míchání osmahněte doměkka.",
      "Dochuťte a posypte pažitkou."
    ]
  },
  {
    title: "Kuře na kari",
    time: "35 min",
    ingredients: ["500 g kuřecích prsou", "kari koření", "cibule", "smetana ke šlehání", "rýže na přílohu"],
    steps: [
      "Kuře nakrájejte na kostky a osmahněte s cibulí.",
      "Přisypte kari koření a krátce restujte.",
      "Zalijte smetanou, duste doměkka a podávejte s rýží."
    ]
  },
  {
    title: "Kuře na paprice",
    time: "40 min",
    ingredients: ["500 g kuřecích stehen", "cibule", "mletá paprika", "smetana ke šlehání", "knedlík na přílohu"],
    steps: [
      "Cibuli osmahněte dozlatova, přidejte kuře a orestujte.",
      "Zasypte paprikou, podlijte vodou a duste doměkka.",
      "Na závěr zjemněte smetanou a podávejte s knedlíkem."
    ]
  },
  {
    title: "Živáňská pečeně",
    time: "45 min",
    ingredients: ["4 vepřové plátky", "slanina", "cibule", "paprika, klobása", "kečup nebo protlak"],
    steps: [
      "Maso opečte na pánvi z obou stran.",
      "Přidejte slaninu, cibuli, papriku a klobásu a orestujte společně.",
      "Podlijte trochou vývaru s kečupem a krátce produste."
    ]
  },
  {
    title: "Pečená krůtí stehna s bramborami a kapustičkami",
    time: "90 min",
    ingredients: ["krůtí stehna", "slanina", "brambory", "růžičková kapusta", "červená cibule, česnek", "rozmarýn, olivový olej, balzamikový ocet"],
    steps: [
      "Stehna osolte a obložte plátky slaniny, pečte v troubě dozlatova.",
      "Brambory povařte, rozmačkejte v pekáči, osolte a osmahněte s cibulí, česnekem, rozmarýnem, olejem a octem.",
      "Kapustičky nakrájejte na kolečka a orestujte se slaninou, chilli a troškou vody doměkka."
    ]
  },
  {
    title: "Krůta na medovohořčicové omáčce",
    time: "75 min",
    ingredients: ["krůtí stehna", "med", "hořčice", "olivový olej", "česnek", "bylinky"],
    steps: [
      "Stehna marinujte v medovohořčicové směsi s česnekem alespoň hodinu.",
      "Pomalu pečte v troubě při nižší teplotě do měkka.",
      "Průběžně podlévejte výpekem, aby zůstala šťavnatá."
    ]
  },
  {
    title: "Burgery",
    time: "30 min",
    ingredients: ["500 g mletého hovězího masa", "burgerové housky", "sýr, salát, rajče", "cibule", "kečup, hořčice"],
    steps: [
      "Z masa vytvarujte placičky, osolte a opepřete.",
      "Opékejte na pánvi nebo grilu z obou stran dozlatova.",
      "Skládejte do housek se sýrem, zeleninou a omáčkami."
    ]
  },
  {
    title: "Tortilla wrap",
    time: "20 min",
    ingredients: ["tortilly", "kuřecí maso nebo fazole", "salát, rajče, paprika", "sýr", "jogurtová nebo salsa omáčka"],
    steps: [
      "Maso nebo fazole orestujte s kořením.",
      "Naplňte tortilly zeleninou, náplní a sýrem.",
      "Zaviňte a případně krátce opečte na pánvi."
    ]
  },
  {
    title: "Chili con carne",
    time: "45 min",
    ingredients: ["400 g mletého hovězího masa", "červené fazole", "rajčata v konzervě", "cibule, česnek", "chilli, kmín", "paprika"],
    steps: [
      "Cibuli a česnek orestujte, přidejte maso a osmahněte.",
      "Zasypte kořením, přidejte rajčata a fazole.",
      "Duste na mírném ohni alespoň 25 minut."
    ]
  },
  {
    title: "Zapečený lilek s mletým masem",
    time: "60 min",
    ingredients: ["2 lilky", "400 g mletého masa", "cibule, česnek", "rajčatový protlak", "sýr na zapečení"],
    steps: [
      "Lilky rozpulte, vydlabejte dužinu a lilkové lodičky osolte.",
      "Dužinu s masem, cibulí a protlakem orestujte na náplň.",
      "Naplňte lilky, posypte sýrem a zapékejte při 180 °C 25 minut."
    ]
  },
  {
    title: "Kuličky z mletého kuřecího masa",
    time: "35 min",
    ingredients: ["500 g mletého kuřecího masa", "1 vejce", "strouhanka", "cibule, česnek", "sůl, pepř, bylinky"],
    steps: [
      "Suroviny smíchejte v hladkou hmotu.",
      "Formujte kuličky a orestujte na pánvi dozlatova.",
      "Podávejte s omáčkou nebo přílohou dle chuti."
    ]
  },
  {
    title: "Hovězí po burgundsku",
    time: "150 min",
    ingredients: ["800 g hovězího na guláš", "červené víno", "slanina", "cibule, mrkev", "žampiony", "bobkový list, tymián"],
    steps: [
      "Slaninu osmahněte, přidejte maso a orestujte dohněda.",
      "Zalijte vínem, přidejte zeleninu a koření.",
      "Duste pomalu alespoň 2 hodiny doměkka, na závěr přidejte žampiony."
    ]
  },
  {
    title: "Francouzské brambory",
    time: "60 min",
    ingredients: ["1 kg brambor", "500 g uzeného masa nebo klobásy", "500 ml smetany nebo mléka", "4 vejce", "sýr na zapečení"],
    steps: [
      "Brambory a maso nakrájejte na plátky a vrstvěte do zapékací mísy.",
      "Zalijte rozšlehanými vejci se smetanou.",
      "Zapékejte při 180 °C asi 40 minut, posledních 10 minut se sýrem."
    ]
  },
  {
    title: "Toasty",
    time: "10 min",
    ingredients: ["toustový chléb", "šunka, sýr", "máslo", "kečup nebo hořčice dle chuti"],
    steps: [
      "Chléb namažte máslem a naplňte šunkou a sýrem.",
      "Vložte do toustovače nebo opečte na pánvi z obou stran.",
      "Podávejte teplé, případně s kečupem."
    ]
  },
  {
    title: "Masové kuličky s brusinkovou omáčkou",
    time: "40 min",
    ingredients: ["500 g mletého masa", "1 vejce", "strouhanka", "brusinková omáčka", "brambory nebo bramborová kaše"],
    steps: [
      "Z masa, vejce a strouhanky vytvarujte kuličky.",
      "Osmahněte na pánvi dozlatova.",
      "Podávejte s brusinkovou omáčkou a bramborovou kaší."
    ]
  },
  {
    title: "Španělští ptáčci",
    time: "90 min",
    ingredients: ["4 plátky hovězího masa", "slanina, okurka, cibule", "hořčice", "vývar na dušení", "hladká mouka na zahuštění"],
    steps: [
      "Plátky masa potřete hořčicí a naplňte slaninou, okurkou a cibulí, srolujte a sepněte párátkem.",
      "Opečte ze všech stran a zalijte vývarem.",
      "Duste doměkka alespoň hodinu a omáčku podle chuti zahustěte."
    ]
  },
  {
    title: "Orzo s pórkem",
    time: "25 min",
    ingredients: ["250 g orza", "1 pórek", "smetana ke šlehání", "parmazán", "máslo"],
    steps: [
      "Pórek nakrájejte na kolečka a orestujte na másle doměkka.",
      "Přidejte uvařené orzo a zalijte smetanou.",
      "Prohřejte a posypte parmazánem."
    ]
  },
  {
    title: "Česnečka",
    time: "30 min",
    ingredients: ["1 l vývaru", "5 stroužků česneku", "brambory", "uzené maso nebo slanina", "vejce, chléb na osmažení"],
    steps: [
      "Ve vývaru povařte nakrájené brambory doměkka.",
      "Přidejte prolisovaný česnek a uzené maso.",
      "Podávejte s opečeným chlebem a případně vejcem."
    ]
  },
  {
    title: "Rajská polévka",
    time: "40 min",
    ingredients: ["vývar", "rajčatový protlak", "mrkev, celer", "smetana", "houskové knedlíčky nebo těstoviny"],
    steps: [
      "Ve vývaru povařte nakrájenou zeleninu doměkka.",
      "Vmíchejte protlak a krátce provařte.",
      "Zjemněte smetanou a podávejte s knedlíčky."
    ]
  },
  {
    title: "Hráškový krém",
    time: "25 min",
    ingredients: ["400 g hrášku", "1 brambora", "cibule", "zeleninový vývar", "smetana"],
    steps: [
      "Cibuli a bramboru orestujte a zalijte vývarem.",
      "Přidejte hrášek a vařte doměkka.",
      "Rozmixujte dohladka a zjemněte smetanou."
    ]
  },
  {
    title: "Žampiónový krém",
    time: "30 min",
    ingredients: ["400 g žampionů", "cibule, česnek", "zeleninový vývar", "smetana", "tymián"],
    steps: [
      "Žampiony s cibulí a česnekem orestujte doměkka.",
      "Zalijte vývarem a vařte 10 minut.",
      "Rozmixujte dohladka a zjemněte smetanou."
    ]
  },
  {
    title: "Špenátový krém",
    time: "25 min",
    ingredients: ["300 g listového špenátu", "brambora", "cibule, česnek", "zeleninový vývar", "smetana"],
    steps: [
      "Cibuli, česnek a bramboru orestujte a zalijte vývarem.",
      "Přidejte špenát a krátce provařte.",
      "Rozmixujte dohladka a zjemněte smetanou."
    ]
  },
  {
    title: "Vývar",
    time: "120 min",
    ingredients: ["kuřecí nebo hovězí maso s kostí", "mrkev, celer, petržel", "cibule", "bobkový list, nové koření", "sůl"],
    steps: [
      "Maso s kostí zalijte studenou vodou a přiveďte k varu.",
      "Sbírejte pěnu, přidejte zeleninu a koření.",
      "Vařte na mírném ohni alespoň 2 hodiny a přeceďte."
    ]
  },
  {
    title: "Zelňačka",
    time: "40 min",
    ingredients: ["kysané zelí", "uzené maso", "brambory", "cibule", "kmín, bobkový list"],
    steps: [
      "Cibuli orestujte, přidejte zelí a krátce podusit.",
      "Zalijte vodou, přidejte uzené maso, brambory a koření.",
      "Vařte doměkka asi 30 minut."
    ]
  },
  {
    title: "Kyselo",
    time: "40 min",
    ingredients: ["žitný kvásek nebo droždí na zákvas", "brambory", "houby sušené", "česnek, kmín", "vejce natvrdo"],
    steps: [
      "Připravte kyselý zákvas rozmíchaný s vodou.",
      "Přivařte s bramborami, houbami a kořením doměkka.",
      "Podávejte s vejcem natvrdo a osmaženou cibulkou."
    ]
  },
  {
    title: "Gulášová polévka",
    time: "90 min",
    ingredients: ["400 g hovězího na guláš", "cibule", "mletá paprika", "brambory", "kmín, česnek"],
    steps: [
      "Cibuli osmahněte dozlatova, přidejte maso a orestujte.",
      "Zasypte paprikou, podlijte vodou a duste doměkka.",
      "Přidejte brambory a doduste do měkka."
    ]
  },
  {
    title: "Studený těstovinový salát",
    time: "25 min",
    ingredients: ["300 g těstovinových šroubků", "kukuřice, paprika, okurka", "šunka nebo tuňák", "majonéza nebo jogurt", "sůl, pepř"],
    steps: [
      "Těstoviny uvařte a nechte vychladnout.",
      "Zeleninu a šunku nakrájejte na kostičky.",
      "Vše promíchejte s majonézou a dochuťte."
    ]
  },
  {
    title: "Salát z pečených brambor",
    time: "40 min",
    ingredients: ["600 g brambor", "olivový olej", "červená cibule", "hořčice, ocet", "čerstvé bylinky"],
    steps: [
      "Brambory nakrájejte na kostky a upečte s olejem do křupava.",
      "Smíchejte zálivku z hořčice, octu a oleje.",
      "Propojte s cibulí a bylinkami, dochuťte."
    ]
  },
  {
    title: "Řecký salát",
    time: "15 min",
    ingredients: ["rajčata, okurka, paprika", "červená cibule", "olivy", "balkánský sýr", "olivový olej, oregano"],
    steps: [
      "Zeleninu nakrájejte na kostky.",
      "Přidejte olivy a nakrájený sýr.",
      "Zakápněte olivovým olejem a posypte oreganem."
    ]
  },
  {
    title: "Caesar salát",
    time: "20 min",
    ingredients: ["salát römana", "kuřecí prsa", "krutony", "parmazán", "caesar dresink"],
    steps: [
      "Kuřecí maso opečte a nakrájejte na proužky.",
      "Salát natrhejte a smíchejte s krutony.",
      "Zalijte dresinkem, přidejte kuře a posypte parmazánem."
    ]
  },
  {
    title: "Caprese salát",
    time: "10 min",
    ingredients: ["rajčata", "mozzarella", "čerstvá bazalka", "olivový olej", "balzamikový krém"],
    steps: [
      "Rajčata a mozzarellu nakrájejte na plátky.",
      "Naskládejte střídavě na talíř s lístky bazalky.",
      "Zakápněte olejem a balzamikovým krémem."
    ]
  },
  {
    title: "Tabouleh",
    time: "25 min",
    ingredients: ["kuskus nebo bulgur", "petrželka, máta", "rajčata, okurka", "citronová šťáva", "olivový olej"],
    steps: [
      "Kuskus zalijte horkou vodou a nechte nabobtnat.",
      "Zeleninu a bylinky najemno nasekejte.",
      "Vše promíchejte s citronovou šťávou a olejem."
    ]
  },
  {
    title: "Okurkový salát s koprem a bazalkou",
    time: "10 min",
    ingredients: ["2 hadovky", "kopr, bazalka", "ocet, cukr", "sůl, pepř"],
    steps: [
      "Okurky nakrájejte na tenká kolečka.",
      "Osolte a nechte pár minut pustit šťávu.",
      "Promíchejte s bylinkami, octem a cukrem."
    ]
  },
  {
    title: "Turecká vejce",
    time: "15 min",
    ingredients: ["2 vejce", "řecký jogurt", "česnek", "máslo, sladká paprika", "chléb na servírování"],
    steps: [
      "Vejce uvařte na měkko nebo poší.",
      "Jogurt smíchejte s prolisovaným česnekem a rozetřete na talíř.",
      "Vejce položte na jogurt, zalijte máslem s paprikou a podávejte s chlebem."
    ]
  },
  {
    title: "Palačinky",
    time: "30 min",
    ingredients: ["250 g hladké mouky", "2 vejce", "400 ml mléka", "špetka soli", "olej na smažení"],
    steps: [
      "Suroviny smíchejte na hladké těsto.",
      "Na pánvi smažte tenké placky z obou stran dozlatova.",
      "Plňte marmeládou, tvarohem nebo dle chuti."
    ]
  },
  {
    title: "Lívance",
    time: "40 min",
    ingredients: ["250 g hladké mouky", "7 g droždí", "250 ml mléka", "1 vejce", "cukr, sůl"],
    steps: [
      "Z mouky, droždí, mléka a vejce vypracujte těsto a nechte 20 minut kynout.",
      "Smažte na pánvi malé placičky z obou stran.",
      "Podávejte s tvarohem, marmeládou nebo povidly."
    ]
  },
  {
    title: "Wafle",
    time: "25 min",
    ingredients: ["250 g hladké mouky", "2 vejce", "250 ml mléka", "100 g rozpuštěného másla", "kypřicí prášek"],
    steps: [
      "Suroviny smíchejte na hladké těsto.",
      "Pečte ve vaflovači dle návodu do zlatova.",
      "Podávejte se šlehačkou nebo ovocem."
    ]
  },
  {
    title: "Vejce benedikt",
    time: "25 min",
    ingredients: ["2 vejce", "anglická muffinka", "šunka", "máslo na hollandaise", "žloutky, citron"],
    steps: [
      "Vejce si poštírujte v octové vodě.",
      "Muffinku opečte a poklaďte šunkou.",
      "Navrch dejte poší vejce a přelijte hollandaise omáčkou."
    ]
  },
  {
    title: "Bruschetta",
    time: "15 min",
    ingredients: ["bageta", "rajčata", "česnek", "bazalka", "olivový olej"],
    steps: [
      "Bagetu nakrájejte na plátky a opečte.",
      "Rajčata nakrájejte na kostičky a smíchejte s bazalkou a olejem.",
      "Plátky potřete česnekem a navrch dejte rajčatovou směs."
    ]
  },
  {
    title: "Bábovka s kefírem a kousky čokolády",
    time: "70 min",
    ingredients: ["300 g hladké mouky", "200 g cukru", "3 vejce", "250 ml kefíru", "100 g čokolády", "kypřicí prášek"],
    steps: [
      "Vyšlehejte vejce s cukrem, přidejte olej a kefír.",
      "Vmíchejte mouku s práškem do pečiva a nasekanou čokoládu.",
      "Pečte v bábovkové formě při 170 °C asi 50 minut."
    ]
  },
  {
    title: "Guláš s houskovým knedlíkem",
    time: "120 min",
    ingredients: ["600 g hovězího na guláš", "3 cibule", "mletá paprika", "česnek, kmín", "houskový knedlík"],
    steps: [
      "Cibuli osmahněte dozlatova, přidejte maso a orestujte.",
      "Zasypte paprikou, podlijte vodou a duste doměkka alespoň hodinu a půl.",
      "Podávejte s houskovým knedlíkem."
    ]
  },
  {
    title: "Plněné papriky",
    time: "70 min",
    ingredients: ["6 paprik", "400 g mletého masa", "rýže", "cibule", "rajčatová omáčka", "smetana na dozdobení"],
    steps: [
      "Maso smíchejte s uvařenou rýží, cibulí a kořením.",
      "Naplňte vydlabané papriky a vložte do rajčatové omáčky.",
      "Duste doměkka asi 40 minut, podávejte se smetanou."
    ]
  },
  {
    title: "Škubánky",
    time: "40 min",
    ingredients: ["1 kg brambor", "200 g hrubé mouky", "máslo", "mák nebo tvaroh na posyp", "cukr"],
    steps: [
      "Brambory uvařte a rozmačkejte, zapracujte mouku na těsto.",
      "Vytvarujte malé knedlíčky nebo trhejte lžící přímo do vroucí vody.",
      "Podávejte s rozpuštěným máslem a mákem nebo tvarohem."
    ]
  },
  {
    title: "Frankfurtská polévka",
    time: "30 min",
    ingredients: ["kysané zelí", "párky nebo klobása", "brambory", "cibule", "kmín"],
    steps: [
      "Cibuli orestujte, přidejte zelí a krátce podusit.",
      "Zalijte vodou, přidejte brambory a koření, vařte doměkka.",
      "Na závěr přidejte nakrájené párky a krátce provařte."
    ]
  },
  {
    title: "Krupicová kaše",
    time: "15 min",
    ingredients: ["500 ml mléka", "80 g krupice", "cukr", "špetka soli", "skořice nebo kakao na posyp"],
    steps: [
      "Mléko přiveďte k varu se špetkou soli.",
      "Za stálého míchání vsypte krupici a vařte doměkka.",
      "Osladťe a podávejte posypanou skořicí nebo kakaem."
    ]
  },
  {
    title: "Čočka s párkem",
    time: "40 min",
    ingredients: ["250 g čočky", "cibule", "bobkový list", "párek", "ocet na dochucení"],
    steps: [
      "Čočku uvařte s cibulí a bobkovým listem doměkka.",
      "Dochuťte solí, pepřem a octem.",
      "Podávejte s ohřátým párkem."
    ]
  },
  {
    title: "Domácí rohlíky",
    time: "120 min",
    ingredients: ["500 g hladké mouky", "250 ml mléka", "20 g droždí", "máslo", "sůl, cukr"],
    steps: [
      "Z mouky, droždí, mléka, másla, soli a cukru vypracujte hladké těsto a nechte kynout.",
      "Rozdělte na kousky, vyválejte trojúhelníky a stočte do tvaru rohlíků.",
      "Nechte dokynout a pečte při 200 °C do zlatova."
    ]
  },
  {
    title: "Zelená čočka se zeleninou",
    time: "35 min",
    ingredients: ["250 g zelené čočky", "mrkev, celer", "cibule, česnek", "zeleninový vývar", "olivový olej"],
    steps: [
      "Cibuli, česnek a nakrájenou zeleninu orestujte na oleji.",
      "Přidejte čočku a zalijte vývarem.",
      "Vařte doměkka asi 20-25 minut a dochuťte."
    ]
  },
  {
    title: "Beluga čočka s zeleninou",
    time: "30 min",
    ingredients: ["200 g beluga čočky", "cibule, česnek", "mrkev", "zeleninový vývar", "olivový olej, bylinky"],
    steps: [
      "Cibuli, česnek a mrkev orestujte na oleji.",
      "Přidejte čočku a zalijte vývarem.",
      "Vařte doměkka asi 20 minut a dochuťte bylinkami."
    ]
  },
  {
    title: "Čočka s uzeným masem",
    time: "45 min",
    ingredients: ["250 g čočky", "uzené maso", "cibule", "bobkový list", "ocet na dochucení"],
    steps: [
      "Čočku uvařte s cibulí, bobkovým listem a kouskem uzeného masa doměkka.",
      "Maso vyjměte, nakrájejte a vraťte zpět do čočky.",
      "Dochuťte solí, pepřem a octem."
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

  document.getElementById("eyebrow").textContent = `Karta ${randomIndex + 1} · ${recipes.length} v krabici`;
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

  const card = document.getElementById("card");
  card.classList.remove("deal");
  void card.offsetWidth;
  card.classList.add("deal");
}

renderRandomRecipe();

document.getElementById("reroll").addEventListener("click", renderRandomRecipe);
document.getElementById("google-search").addEventListener("click", function () {
  const title = document.getElementById("recipe-title").textContent;
  const query = encodeURIComponent(title + " recept");
  window.open(`https://www.google.com/search?q=${query}`, "_blank");
});

document.getElementById("copy-ingredients").addEventListener("click", async () => {
  const title = document.getElementById("recipe-title").textContent;
  const items = Array.from(document.querySelectorAll("#recipe-ingredients li"))
    .map(li => "- " + li.textContent.trim());
  const text = title + "\nSuroviny:\n" + items.join("\n");

  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }

  const btn = document.getElementById("copy-ingredients");
  const original = btn.textContent;
  btn.textContent = "✅ Zkopírováno";
  setTimeout(() => { btn.textContent = original; }, 1500);
});
document.getElementById("copy-full-recipe").addEventListener("click", async () => {
  const title = document.getElementById("recipe-title").textContent;
  const time = document.getElementById("recipe-time").textContent;

  const ingredients = Array.from(document.querySelectorAll("#recipe-ingredients li"))
    .map(li => "- " + li.textContent.trim());

  const steps = Array.from(document.querySelectorAll("#recipe-steps li"))
    .map((li, index) => (index + 1) + ". " + li.textContent.trim());

  const text = title + "\n" + time +
    "\n\nSuroviny:\n" + ingredients.join("\n") +
    "\n\nPostup:\n" + steps.join("\n");

  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }

  const btn = document.getElementById("copy-full-recipe");
  const original = btn.textContent;
  btn.textContent = "✅ Zkopírováno";
  setTimeout(() => { btn.textContent = original; }, 1500);
});