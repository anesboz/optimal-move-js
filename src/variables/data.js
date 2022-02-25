const ratpImgs = {
  m: "https://www.ratp.fr/sites/default/files/lines-assets/picto/metro/picto_metro_ligne-",
  b: "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-",
  n: "https://www.ratp.fr/sites/default/files/lines-assets/picto/noctilien/picto_noctilien_ligne-",
  t: "https://www.ratp.fr/sites/default/files/lines-assets/picto/tram/picto_tram_ligne-t",
  // r: "https://www.ratp.fr/sites/default/files/lines-assets/picto/rer/picto_rer_ligne-",
}

const apiLinks = {
  m: "https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/",
  b: "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/",
  n: "https://api-ratp.pierre-grimaud.fr/v4/schedules/noctiliens/",
  t: "https://api-ratp.pierre-grimaud.fr/v4/schedules/tramways/",
  // r: "https://www.ratp.fr/sites/default/files/lines-assets/picto/rer/picto_rer_ligne-",
}

const initalData = [
  {
    name: "CA",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/a/a6/Cr%C3%A9dit_Agricole.svg/langfr-800px-Cr%C3%A9dit_Agricole.svg.png",
    description: [
      "📍 porte d'Orléans ➙ Boulot ",
      "📍 Boulot ➙ Chez moi ",
      "Le tram marche pas ",
    ],
    list: [
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
          depart: "Radiguey",
          imgUrl: ratpImgs.b + "126.svg",
          query: apiLinks.b + "126/Radiguey/R",
        },
        {
          depart: "Montrouge",
          query: "21217",
        },
      ],
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
          depart: "Porte d'Italie - Hélène Boucher",
          imgUrl: ratpImgs.n + "n15.svg",
          query:
            apiLinks.n +
            "15/Porte%20d'Italie%20-%20H%C3%A9l%C3%A8ne%20Boucher/A",
        },
        {
          depart: "Porte d'Italie - Hélène Boucher",
          imgUrl: ratpImgs.n + "n22.svg",
          query:
            apiLinks.n +
            "22/Porte%20d'Italie%20-%20H%C3%A9l%C3%A8ne%20Boucher/A",
        },
        {
          depart: "Porte d'Italie",
          imgUrl: ratpImgs.m + "7.svg",
          query: apiLinks.m + "7/Porte%20d'Italie/R",
        },
        {
          depart: "maison blanche",
          imgUrl: ratpImgs.m + "7.svg",
          query: apiLinks.m + "7/maison%20blanche/A",
          destination: "Villejuif-Louis Aragon",
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
      [
        {
          depart: "Porte d'Italie",
          imgUrl: ratpImgs.m + "7.svg",
          query: apiLinks.m + "7/Porte%20d'Italie/R",
        },
        {
          depart: "maison blanche",
          imgUrl: ratpImgs.m + "7.svg",
          query: apiLinks.m + "7/maison%20blanche/A",
          destination: "Villejuif-Louis Aragon",
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
        {
          depart: "maison blanche",
          imgUrl: ratpImgs.m + "7.svg",
          query: apiLinks.m + "7/maison%20blanche/A",
          destination: "Mairie d'Ivry",
        },
      ],
      [
        {
          depart: "Avenue de France",
          imgUrl: ratpImgs.t + "3a.svg",
          query: apiLinks.t + "3a/porte%20italie/R",
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
    name: "Danone",
    logo: "https://logos-marques.com/wp-content/uploads/2021/03/Danone-Logo-500x283.png",
    description: [""],
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
  {
    name: "lafelicita",
    logo: "https://www.lafelicita.fr/wp-content/uploads/2018/05/felicita-loading.gif",
    description: ["Aller vers Felicita", "Retour via Metro", "Retour via Tram"],
    list: [
      [
        {
          depart: "Porte de France",
          imgUrl: ratpImgs.b + "89.svg",
          query: apiLinks.b + "89/Porte%20de%20France/R",
        },
        {
          depart: "Bibliothèque Rue Mann",
          imgUrl: ratpImgs.b + "62.svg",
          query: apiLinks.b + "62/Bibliotheque%20Rue%20Mann/R",
        },
        {
          depart: "Pont jardin",
          query: "13055",
        },
        {
          depart: "Drouj Metro 14",
          query: "13053",
        },
        {
          depart: "Hebta Avenue Principale",
          query: "13054",
        },
      ],
      [
        {
          depart: "Station F",
          query: "13051",
        },
        {
          depart: "Station F (coté route  derriere)",
          query: "13015",
        },
        {
          depart: "Vers ligne 6",
          query: "13049",
        },
        {
          depart: "Bouche de Métro 6",
          query: "13018",
        },
        {
          depart: "Chevaleret",
          imgUrl: ratpImgs.m + "6.svg",
          query: apiLinks.m + "6/Chevaleret/A",
        },
      ],
      [
        {
          depart: "Bibliotheque Francois Mitterrand",
          imgUrl: ratpImgs.b + "62.svg",
          query: apiLinks.b + "62/Bibliotheque%20Francois%20Mitterrand/A",
        },
        {
          depart: "Bibliotheque Francois Mitterrand",
          imgUrl: ratpImgs.b + "89.svg",
          query: apiLinks.b + "89/Bibliotheque%20Francois%20Mitterrand/A",
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
    ],
  },
]

export default initalData