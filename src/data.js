import { ratpImgs, apiLinks } from "./constantes"

const initialData = [
  {
    name: "CA",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/a/a6/Cr%C3%A9dit_Agricole.svg/langfr-800px-Cr%C3%A9dit_Agricole.svg.png",
    list: [
      [
        {
          depart: "porte italie",
          imgUrl: ratpImgs.t + "3a.svg",
          query: apiLinks.t + "3a/porte%20italie/R",
        },
        {
          depart: "Vers Maison Blanche",
          query: "13032",
        },
        {
          depart: "Dir Tram",
          query: "13110",
        },
      ],
      [
        {
          depart: "porte d'orléans",
          imgUrl: ratpImgs.b + "68.svg",
          query: apiLinks.b + "68/porte%20d%27orléans/R",
        },
        {
          depart: "Porte d'Orléans",
          query: "14018",
        },
      ],
      [
        {
          depart: "Montrouge",
          query: "21217",
        },
      ],
    ],
  },
  {
    name: "PorteItalie",
    logo: "https://cdn.countryflags.com/thumbs/italy/flag-button-round-250.png",
    list: [
      [
        {
          depart: "Porte d'italie",
          imgUrl: ratpImgs.b + "185.svg",
          query: apiLinks.b + "185/porte%20d%27italie/A",
        },

        {
          depart: "Porte d'italie",
          imgUrl: ratpImgs.b + "47.svg",
          query: apiLinks.b + "47/porte%20d%27italie/A",
        },
        {
          depart: "Porte d'italie",
          imgUrl: ratpImgs.b + "131.svg",
          query: apiLinks.b + "131/porte%20d%27italie/A",
        },
        {
          depart: "Vers Maison Blanche",
          query: "13032",
        },
        {
          depart: "Pompe à essence",
          query: "13033",
        },

        {
          depart: "Roger Salengro Fontainebleau",
          imgUrl: ratpImgs.n + "n15.svg",
          query: apiLinks.n + "15/Roger%20Salengro%20Fontainebleau/R",
        },
        {
          depart: "Roger Salengro Fontainebleau",
          imgUrl: ratpImgs.n + "n22.svg",
          query: apiLinks.n + "22/Roger%20Salengro%20Fontainebleau/R",
        },
      ],
      [
        {
          depart: "Porte d'italie",
          imgUrl: ratpImgs.b + "186.svg",
          query: apiLinks.b + "186/porte%20d%27italie/A",
        },
        {
          depart: "Lidl",
          query: "42706",
        },
        {
          depart: "Okabé",
          query: "42707",
        },
      ],
    ],
  },
  {
    name: "Paris",
    logo: "https://www.clipartmax.com/png/full/11-110571_eiffel-tower-free-icon-eiffel-tower-icon-png.png",
    list: [
      [
        {
          depart: "Villejuif Leo Lagrange",
          imgUrl: ratpImgs.m + "7.svg",
          query: apiLinks.m + "7/Villejuif%20Leo%20Lagrange/R",
        },
        {
          depart: "Dauphin - Anatole France",
          imgUrl: ratpImgs.b + "185.svg",
          query: apiLinks.b + "185/Dauphin%20-%20Anatole%20France/R",
        },
        {
          depart: "Vivaldi",
          query: "48002",
        },
        {
          depart: "Dauphin - Anatole France",
          imgUrl: ratpImgs.n + "n15.svg",
          query: apiLinks.n + "15/Dauphin%20-%20Anatole%20France/R",
        },
        {
          depart: "Dauphin - Anatole France",
          imgUrl: ratpImgs.n + "n22.svg",
          query: apiLinks.n + "22/Dauphin%20-%20Anatole%20France/R",
        },
      ],
      [
        {
          depart: "Kremlin Bicetre",
          imgUrl: ratpImgs.b + "47.svg",
          query: apiLinks.b + "47/Kremlin%20Bicetre/R",
        },
        {
          depart: "Kremlin",
          query: "42703",
        },
        {
          depart: "Kremlin Bicetre",
          imgUrl: ratpImgs.b + "131.svg",
          query: apiLinks.b + "131/Kremlin%20Bicetre/R",
        },
        {
          depart: "Kremlin Bicetre",
          imgUrl: ratpImgs.b + "185.svg",
          query: apiLinks.b + "185/Kremlin%20Bicetre/R",
        },
        {
          depart: "Kremlin Bicetre",
          imgUrl: ratpImgs.m + "7.svg",
          query: apiLinks.m + "7/Kremlin%20Bicetre/R",
        },
        {
          depart: "Kremlin Bicetre",
          imgUrl: ratpImgs.n + "n15.svg",
          query: apiLinks.n + "15/Kremlin%20Bicetre/R",
        },
        {
          depart: "Kremlin Bicetre",
          imgUrl: ratpImgs.n + "n22.svg",
          query: apiLinks.n + "22/Kremlin%20Bicetre/R",
        },
      ],
    ],
  },
  {
    name: "Fac",
    logo: "https://moodle.u-paris.fr/pluginfile.php/1/theme_fordson/favicon/1628026585/favicon.png",
    description: ["", "Retour", "Vers la Fac si pas de Tram"],
    list: [
      [
        {
          depart: "porte italie",
          imgUrl: ratpImgs.t + "3a.svg",
          query: apiLinks.t + "3a/porte%20italie/A",
        },
      ],
      [
        {
          depart: "Avenue de France",
          imgUrl: ratpImgs.t + "3a.svg",
          query: apiLinks.t + "3a/porte%20italie/A",
        },
        {
          depart: "Pont jardin",
          query: "13055",
        },
        {
          depart: "Agoraé",
          query: "13050",
        },
        {
          depart: "Hebta vers tram",
          query: "13118",
        },
        {
          depart: "Buger King",
          query: "13016",
        },
      ],
      [
        {
          depart: "Italie - Tolbiac",
          imgUrl: ratpImgs.b + "62.svg",
          query: apiLinks.b + "62/Italie%20-%20Tolbiac/A",
        },
      ],
    ],
  },
  {
    name: "Auchan",
    logo: "https://logo-marque.com/wp-content/uploads/2021/02/Auchan-Logo.png",
    list: [
      [
        {
          depart: "Convention - Fontainebleau",
          imgUrl: ratpImgs.b + "185.svg",
          query: apiLinks.b + "185/Convention%20-%20Fontainebleau/A",
        },
        {
          depart: "Kremlin Bicetre",
          imgUrl: ratpImgs.m + "7.svg",
          query: apiLinks.m + "7/Kremlin%20Bicetre/A",
        },
        {
          depart: "Okabé",
          query: "42707",
        },
        {
          depart: "Kremlin",
          query: "42703",
        },
      ],
      [
        {
          depart: "Roger Salengro Fontainebleau",
          imgUrl: ratpImgs.b + "185.svg",
          query: apiLinks.b + "185/Roger%20Salengro%20Fontainebleau/A",
        },
        {
          depart: "Lidl",
          query: "42706",
        },
        {
          depart: "Roger Salengro Fontainebleau",
          imgUrl: ratpImgs.b + "47.svg",
          query: apiLinks.b + "47/Roger%20Salengro%20Fontainebleau/A",
        },
        {
          depart: "Roger Salengro Fontainebleau",
          imgUrl: ratpImgs.b + "131.svg",
          query: apiLinks.b + "131/Roger%20Salengro%20Fontainebleau/A",
        },

        {
          depart: "Roger Salengro Fontainebleau",
          imgUrl: ratpImgs.b + "186.svg",
          query: apiLinks.b + "186/Roger%20Salengro%20Fontainebleau/A",
        },

        {
          depart: "Roger Salengro Fontainebleau",
          imgUrl: ratpImgs.n + "n15.svg",
          query: apiLinks.n + "15/Roger%20Salengro%20Fontainebleau/A",
        },
        {
          depart: "Roger Salengro Fontainebleau",
          imgUrl: ratpImgs.n + "n22.svg",
          query: apiLinks.n + "22/Roger%20Salengro%20Fontainebleau/A",
        },
      ],
    ],
  },
  {
    name: "Danone",
    logo: "https://logos-marques.com/wp-content/uploads/2021/03/Danone-Logo-500x283.png",
    list: [
      [
        {
          depart: "Avenue Émile Zola",
          imgUrl: ratpImgs.m + "10.svg",
          query: apiLinks.m + "10/Avenue%20Emile%20Zola/A",
        },
        {
          depart: "Emile Zola - Fondary",
          query: "15022",
        },
        {
          depart: "Commerce",
          query: "15034",
        },
      ],
    ],
  },
]

export default initialData
