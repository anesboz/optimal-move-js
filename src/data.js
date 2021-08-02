const liste = [
  {
    name: "McDo-Stalingrad",
    logo: "https://www.citypng.com/public/uploads/preview/-11600735522qbwj7xtpxu.png",
    list: [
      ["(Villejuif-Louis Aragon) m7 Stalingrad"],
      ["m5 jaures", "(Villejuif-Louis Aragon) m7 place italie"],
      [
        "m5 jaures",
        "(Villejuif-Louis Aragon) m7 gare de l est",
        "(Villejuif-Louis Aragon) m7 place italie",
        "n15 place d'italie italie 2",
        "n22 place d'italie italie 2",
        "b47 place d'italie italie 2",
      ],
      [
        "velib 19004 Bassin Vilette, 19003 La place",
        "velib 10037 Canal St-Martin, 10036 Stalingrad",
      ],
      [
        "n13 jaures",
        "n41 jaures",
        "n45 jaures",
        "n14 gare de est",
        "n15 chatelet",
        "n22 chatelet",
      ],
      [
        "n43 place de la chapelle",
        "velib 19004 Bassin Vilette, 19003 La place",
        "velib 10037 Canal St-Martin, 10036 Stalingrad",
        "velib 33018 Villebois",
      ],
    ],
  },
  {
    name: "Auchan",
    logo: "https://logo-marque.com/wp-content/uploads/2021/02/Auchan-Logo.png",
    list: [
      [
        "b185 Convention - Fontainebleau",
        "m7 Le Kremlin-Bicetre",
        "velib 42707 Okabé",
        "velib 42703  Kremlin",
      ],
    ],
  },
  {
    name: "Paris",
    logo: "http://cdn.shopify.com/s/files/1/0066/0478/3687/products/FA205-france_1200x1200.jpg?v=1580479406",
    list: [
      [
        "m7 Villejuif Leo Lagrange",
        "b185 Dauphin - Anatole France",
        "velib 48002 Vivaldi",
        "n15 Dauphin - Anatole France",
        "n22 Dauphin - Anatole France",
      ],
    ],
  },
  {
    name: "Agorae",
    logo: "https://www.universite-paris-saclay.fr/sites/default/files/2020-07/agorae.png",
    list: [["t3a porte italie"]],
    backList: [["t3a avenue de france"]],
  },
  {
    name: "PorteItalie",
    logo: "https://cdn.countryflags.com/thumbs/italy/flag-button-round-250.png",
    list: [
      [
        "m7 Villejuif Leo Lagrange",
        "b185 Dauphin - Anatole France",
        "velib 48002 Vivaldi",
        "n15 Dauphin - Anatole France",
        "n22 Dauphin - Anatole France",
      ],
      [
        "b47 Kremlin Bicetre",
        "b131 Kremlin Bicetre",
        "b185 Kremlin Bicetre",
        "m7 Kremlin Bicetre",
        "velib 42703 Kremlin",
        "n15 Kremlin Bicetre",
        "n22 Kremlin Bicetre",
      ],
      [
        "b47 Convention Fontainebleau",
        "b131 Convention Fontainebleau",
        "b185 Convention Fontainebleau",
        "b186 Convention Fontainebleau",
        "velib 42707 Okabé",
        "n15 Convention Fontainebleau",
        "n22 Convention Fontainebleau",
      ],
      [
        "b47 Roger Salengro Fontainebleau",
        "b131 Roger Salengro Fontainebleau",
        "b185 Roger Salengro Fontainebleau",
        "b186 Roger Salengro Fontainebleau",
        "velib 42706 Lidl",
        "n15 Roger Salengro Fontainebleau",
        "n22 Roger Salengro Fontainebleau",
      ],
    ],
    backList: [
      [
        "b185 Porte Italie",
        "b131 Porte Italie",
        "b186 Porte Italie",
        "b47 porte d'italie   helene boucher",
        "(Villejuif-Louis Aragon) m7 maison blanche",
        "velib 13032 Porte-Italie",
        "n15 porte d'italie   helene boucher",
        "n22 porte d'italie   helene boucher",
      ],
      [
        "b47 Roger Salengro Fontainebleau",
        "b131 Roger Salengro Fontainebleau",
        "b185 Roger Salengro Fontainebleau",
        "b186 Roger Salengro Fontainebleau",
        "velib 42706 Lidl",
        "n15 Roger Salengro Fontainebleau",
        "n22 Roger Salengro Fontainebleau",
      ],
      [
        "b47 Convention Fontainebleau",
        "b131 Convention Fontainebleau",
        "b185 Convention Fontainebleau",
        "b186 Convention Fontainebleau",
        "velib 42707 Okabé",
        "n15 Convention Fontainebleau",
        "n22 Convention Fontainebleau",
      ],
      [
        "b185 Kremlin Bicetre",
        "m7 Kremlin Bicetre",
        "velib 42703 Kremlin",
        "n15 Kremlin Bicetre",
        "n22 Kremlin Bicetre",
      ],
    ],
  },
  {
    name: "Montsouris",
    logo: "https://logodix.com/logo/403615.jpg",
    list: [["t3a porte italie"]],
    backList: [
      ["t3a Cite universitaire"],
      [
        "b185 Porte Italie",
        "b131 Porte Italie",
        "b186 Porte Italie",
        "b47 porte d'italie   helene boucher",
        "velib 13032 Porte-Italie",
        "n15 porte d'italie   helene boucher",
        "n22 porte d'italie   helene boucher",
      ],
    ],
  },
]

export default liste;
/*
var obsolete = [
  {
    name: "qwartz",
    logo: null,
    list: [
      [
        "b173 murger",
        "b137 jean jaures-mairie",
        "b166 jean jaures-mairie",
      ],
    ],
    backList: [
      [
        "b137 lycee petiet   c. commercial",
        "b173 mairie de Saint ouen   metro",
        "b166 quatre chemins",
      ],
    ],
  },
  {
    name: "StadeFrance",
    logo: null,
    list: [
      [
        "b239 Saint Gobain",
        "b139 Saint Gobain",
        "b173 murger",
        "velib 33020 Waldeck",
      ],
      [
        "rb La Plaine Stade de France",
        "(Villejuif-Louis Aragon) m7 chatelet",
      ],
      ["m10 cluny la sorbonne", "(Villejuif-Louis Aragon) m7 Jussieu"],
    ],
    backList: [
      [
        "b239 La Plaine Stade de France",
        "b139 La Plaine-Stade de France",
        "b173 La Plaine-Stade de France",
        "velib 32011",
      ],
      ["rb chatelet"],
    ],
  },
  {
    name: "m12",
    logo: null,
    list: [
      [
        "b239 Saint Gobain",
        "b139 Saint Gobain",
        "m12 Front Populaire",
        "velib 33020 Waldeck",
      ],
    ],
    backList: [
      [
        "m2 jaures",
        "m12 pigalle",
        "b239 front-populaire proudhon",
        "b139 front-populaire proudhon",
        "b512 front-populaire proudhon",
        "velib 32021 Waldeck",
      ],
      ["m7 Villejuif Leo Lagrange", "rb chatelet", "rb gare du nord"],
    ],
  },
  {
    name: "Millenaire",
    logo: null,
    list: [
      ["b239 Saint Gobain", "velib 33020 Waldeck"],
      ["b139 Saint Gobain", "velib 33020 Waldeck"],
    ],
    backList: [
      [
        "b239 parc du millenaire",
        "velib 33019 Millenaire,  33001  M.Generaux",
      ],
      ["b139 quai lucien lefranc"],
    ],
  },
];

var _Obj_List_D = [
  {
    name: "m12",
    logo: null,
    list: [
      [
        "b239 Saint Gobain",
        "b139 Saint Gobain",
        "m12 Front Populaire",
        "velib 33020 Waldeck",
      ],
    ],
    backList: [
      [
        "m2 jaures",
        "m12 pigalle",
        "b239 front-populaire proudhon",
        "b139 front-populaire proudhon",
        "b512 front-populaire proudhon",
        "velib 32021 Waldeck",
      ],
      ["m7 Villejuif Leo Lagrange", "rb chatelet", "rb gare du nord"],
    ],
  },
  {
    name: "StadeFrance",
    logo: null,
    list: [
      [
        "b239 Saint Gobain",
        "b139 Saint Gobain",
        "b173 murger",
        "velib 33020 Waldeck",
      ],
      [
        "rb La Plaine Stade de France",
        "(Villejuif-Louis Aragon) m7 chatelet",
      ],
      ["m10 cluny la sorbonne", "(Villejuif-Louis Aragon) m7 Jussieu"],
    ],
    backList: [
      [
        "b239 La Plaine Stade de France",
        "b139 La Plaine-Stade de France",
        "b173 La Plaine-Stade de France",
        "velib 32011",
      ],
      ["rb chatelet"],
    ],
  },
  { name: "pray" },
  {
    name: "qwartz",
    logo: null,
    list: [
      [
        "b173 murger",
        "b137 jean jaures-mairie",
        "b166 jean jaures-mairie",
      ],
    ],
    backList: [
      [
        "b137 lycee petiet   c. commercial",
        "b173 mairie de Saint ouen   metro",
        "b166 quatre chemins",
      ],
    ],
  },
  {
    name: "Anes",
    logo: null,
    list: [
      [
        "t3a pont de garigliano",
        "b185 Porte Italie",
        "b47 porte d'italie helene boucher",
        "b131 Porte Italie",
      ],
    ],
    backList: [
      [
        "b185 Dauphin - Anatole France",
        "m7 Villejuif Leo Lagrange",
        "t3a porte italie",
      ],
    ],
  },
];

var _ongletsPredefinis = [
  {
    name: "Jussieu",
    logo: null,
    list: [
      ["m7 Jussieu", "m10 Jussieu"],
      [
        "(Mairie d'Ivry) m7 Jussieu",
        "(Villejuif-Louis Aragon)  m7 Jussieu",
        "m10 Jussieu",
      ],
      [
        "velib 5119 O'Tacos, 5021 City-Center",
        "velib 5022 C.Lemoine, 5020 M.Arabe",
      ],
    ],
  },
  {
    name: "Vivaldi",
    logo: null,
    list: [
      [
        "m7 Villejuif Leo Lagrange",
        "b185 Dauphin - Anatole France",
        "velib 48002 Vivaldi",
        "n15 Dauphin - Anatole France",
        "n22 Dauphin - Anatole France",
      ],
      [
        "m7 Villejuif Leo Lagrange",
        "b185 Dauphin - Anatole France",
        "velib 48002 Vivaldi",
        "n15 Dauphin - Anatole France",
        "n22 Dauphin - Anatole France",
      ],
    ],
  },
  {
    name: "PorteItalie",
    logo: null,
    list: [
      [
        "m7 Villejuif Leo Lagrange",
        "b185 Dauphin - Anatole France",
        "velib 48002 Vivaldi",
        "n15 Dauphin - Anatole France",
        "n22 Dauphin - Anatole France",
      ],
      [
        "b47 Kremlin Bicetre",
        "b131 Kremlin Bicetre",
        "b185 Kremlin Bicetre",
        "m7 Kremlin Bicetre",
        "velib 42703 Kremlin",
        "n15 Kremlin Bicetre",
        "n22 Kremlin Bicetre",
      ],
      [
        "b47 Convention Fontainebleau",
        "b131 Convention Fontainebleau",
        "b185 Convention Fontainebleau",
        "b186 Convention Fontainebleau",
        "velib 42707 Okabé",
        "n15 Convention Fontainebleau",
        "n22 Convention Fontainebleau",
      ],
      [
        "b47 Roger Salengro Fontainebleau",
        "b131 Roger Salengro Fontainebleau",
        "b185 Roger Salengro Fontainebleau",
        "b186 Roger Salengro Fontainebleau",
        "velib 42706 Lidl",
        "n15 Roger Salengro Fontainebleau",
        "n22 Roger Salengro Fontainebleau",
      ],
    ],
    backList: [
      [
        "b185 Porte Italie",
        "b131 Porte Italie",
        "b186 Porte Italie",
        "b47 porte d'italie   helene boucher",
        "(Villejuif-Louis Aragon) m7 maison blanche",
        "velib 13032 Porte-Italie",
        "n15 porte d'italie   helene boucher",
        "n22 porte d'italie   helene boucher",
      ],
      [
        "b47 Roger Salengro Fontainebleau",
        "b131 Roger Salengro Fontainebleau",
        "b185 Roger Salengro Fontainebleau",
        "b186 Roger Salengro Fontainebleau",
        "velib 42706 Lidl",
        "n15 Roger Salengro Fontainebleau",
        "n22 Roger Salengro Fontainebleau",
      ],
      [
        "b47 Convention Fontainebleau",
        "b131 Convention Fontainebleau",
        "b185 Convention Fontainebleau",
        "b186 Convention Fontainebleau",
        "velib 42707 Okabé",
        "n15 Convention Fontainebleau",
        "n22 Convention Fontainebleau",
      ],
      [
        "b185 Kremlin Bicetre",
        "m7 Kremlin Bicetre",
        "velib 42703 Kremlin",
        "n15 Kremlin Bicetre",
        "n22 Kremlin Bicetre",
      ],
    ],
  },
  {
    name: "McDo-Stalingrad",
    logo: null,
    list: [
      [
        // Metros
        "m5 Jaures",
        "(Villejuif-Louis Aragon) m7 Stalingrad",
        "m2 Jaures",
        "m7b Jaures",
      ],
      ["m5 Jaures", "m7 Stalingrad", "m2 Jaures", "m7b Jaures"],
      [
        // Velib
        "velib 19004 Bassin Vilette, 19003 La place",
        "velib 10037 Canal St-Martin, 10036 Stalingrad",
      ],
      [
        // Noctiliens
        "n13 Jaures",
        "n41 Jaures",
        "n45 Jaures",
        "n42 Stalingrad",
      ],
      ["n13 Jaures", "n41 Jaures", "n45 Jaures", "n42 Stalingrad"],
      [
        // Buses
        "b48 Jaures",
        "b26 Jaures - Stalingrad",
        "b54 Quai de la Seine - Stalingrad",
      ],
      [
        "b48 Jaures",
        "b26 Jaures - Stalingrad",
        "b54 Quai de la Seine - Stalingrad",
      ],
    ],
  },
];
*/
