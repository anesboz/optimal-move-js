

// (assetsORapi: `api | assets`, mode: `metro | bus | tram | noctilien | rer`  )
const properType = (assetsORapi, mode) => {
  const types = {
    assets: {
      metro: `metro`,
      bus: `busratp`,
      tram: `tram`,
      rer: `rer`,
      noctilien: `noctilien`,
    },
    api: {
      metro: `metros`,
      bus: `buses`,
      tram: `tramways`,
      rer: `rers`,
      noctilien: `noctiliens`,
    },
  }
  return types[assetsORapi][mode]
}

export const om_api = (mode) => {
  const obj = {
    linesURL: grimaudAPI+`lines/${properType(`api`,mode)}/`,
    scheduleURL_prefix: grimaudAPI+`schedules/${properType(`api`,mode)}/`,
  }
  return obj
}

export const om_assets = (mode) => {
  const obj = {
    logoURL: assetsURL+`${properType(`assets`,mode)}/symbole.1634824971.svg`,
    lineImgURL_prefix: assetsURL+`metro/picto_metro_ligne-`,
  }
  return obj
}


function getSchedeleURL(mode,line, station, dir = `R`) {
  return om_api(mode).scheduleLinkPrefix+`${line}/${encodeURIComponent(station.trim())}/${dir}`
}

function getLineImgURL(mode,line) {
  return om_assets(mode).lineImgURL_prefix+`${line}.svg`
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
          station: "porte d'orléans",
          imgUrl: ratpImgs.b + "68.svg",
          query: apiLinks.b + "68/porte%20d%27orléans/R",
        },
        {
          station: "Porte d'Orléans",
          query: "14018",
        },
      ],
      [
        {
          station: "Radiguey",
          imgUrl: ratpImgs.b + "126.svg",
          query: apiLinks.b + "126/Radiguey/R",
        },
        {
          station: "Montrouge",
          query: "21217",
        },
      ],
      [
        {
          station: "porte italie",
          imgUrl: ratpImgs.t + "3a.svg",
          query: apiLinks.t + "3a/porte%20italie/R",
        },
        {
          station: "Vers Maison Blanche",
          query: "13032",
        },
        {
          station: "Dir Tram",
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
          station: "Porte d'italie",
          imgUrl: ratpImgs.b + "185.svg",
          query: apiLinks.b + "185/porte%20d%27italie/A",
        },

        {
          station: "Porte d'italie",
          imgUrl: ratpImgs.b + "47.svg",
          query: apiLinks.b + "47/porte%20d%27italie/A",
        },
        {
          station: "Porte d'italie",
          imgUrl: ratpImgs.b + "131.svg",
          query: apiLinks.b + "131/porte%20d%27italie/A",
        },
        {
          station: "Vers Maison Blanche",
          query: "13032",
        },
        {
          station: "Pompe à essence",
          query: "13033",
        },
        {
          station: "Porte d'Italie - Hélène Boucher",
          imgUrl: ratpImgs.n + "n15.svg",
          query:
            apiLinks.n +
            "15/Porte%20d'Italie%20-%20H%C3%A9l%C3%A8ne%20Boucher/A",
        },
        {
          station: "Porte d'Italie - Hélène Boucher",
          imgUrl: ratpImgs.n + "n22.svg",
          query:
            apiLinks.n +
            "22/Porte%20d'Italie%20-%20H%C3%A9l%C3%A8ne%20Boucher/A",
        },
        {
          station: "Porte d'Italie",
          imgUrl: ratpImgs.m + "7.svg",
          query: apiLinks.m + "7/Porte%20d'Italie/R",
        },
        {
          station: "maison blanche",
          imgUrl: ratpImgs.m + "7.svg",
          query: apiLinks.m + "7/maison%20blanche/A",
          destination: "Villejuif-Louis Aragon",
        },
      ],
      [
        {
          station: "Porte d'italie",
          imgUrl: ratpImgs.b + "186.svg",
          query: apiLinks.b + "186/porte%20d%27italie/A",
        },
        {
          station: "Lidl",
          query: "42706",
        },
        {
          station: "Okabé",
          query: "42707",
        },
      ],
      [
        {
          station: "Porte d'Italie",
          imgUrl: ratpImgs.m + "7.svg",
          query: apiLinks.m + "7/Porte%20d'Italie/R",
        },
        {
          station: "maison blanche",
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
          station: "Villejuif Leo Lagrange",
          imgUrl: ratpImgs.m + "7.svg",
          query: apiLinks.m + "7/Villejuif%20Leo%20Lagrange/R",
        },
        {
          station: "Dauphin - Anatole France",
          imgUrl: ratpImgs.b + "185.svg",
          query: apiLinks.b + "185/Dauphin%20-%20Anatole%20France/R",
        },
        {
          station: "Vivaldi",
          query: "48002",
        },
        {
          station: "Dauphin - Anatole France",
          imgUrl: ratpImgs.n + "n15.svg",
          query: apiLinks.n + "15/Dauphin%20-%20Anatole%20France/R",
        },
        {
          station: "Dauphin - Anatole France",
          imgUrl: ratpImgs.n + "n22.svg",
          query: apiLinks.n + "22/Dauphin%20-%20Anatole%20France/R",
        },
      ],
      [
        {
          station: "Kremlin Bicetre",
          imgUrl: ratpImgs.b + "47.svg",
          query: apiLinks.b + "47/Kremlin%20Bicetre/R",
        },
        {
          station: "Kremlin",
          query: "42703",
        },
        {
          station: "Kremlin Bicetre",
          imgUrl: ratpImgs.b + "131.svg",
          query: apiLinks.b + "131/Kremlin%20Bicetre/R",
        },
        {
          station: "Kremlin Bicetre",
          imgUrl: ratpImgs.b + "185.svg",
          query: apiLinks.b + "185/Kremlin%20Bicetre/R",
        },
        {
          station: "Kremlin Bicetre",
          imgUrl: ratpImgs.m + "7.svg",
          query: apiLinks.m + "7/Kremlin%20Bicetre/R",
        },
        {
          station: "Kremlin Bicetre",
          imgUrl: ratpImgs.n + "n15.svg",
          query: apiLinks.n + "15/Kremlin%20Bicetre/R",
        },
        {
          station: "Kremlin Bicetre",
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
          station: "Convention - Fontainebleau",
          imgUrl: ratpImgs.b + "185.svg",
          query: apiLinks.b + "185/Convention%20-%20Fontainebleau/A",
        },
        {
          station: "Kremlin Bicetre",
          imgUrl: ratpImgs.m + "7.svg",
          query: apiLinks.m + "7/Kremlin%20Bicetre/A",
        },
        {
          station: "Okabé",
          query: "42707",
        },
        {
          station: "Kremlin",
          query: "42703",
        },
      ],
      [
        {
          station: "Roger Salengro Fontainebleau",
          imgUrl: ratpImgs.b + "185.svg",
          query: apiLinks.b + "185/Roger%20Salengro%20Fontainebleau/A",
        },
        {
          station: "Lidl",
          query: "42706",
        },
        {
          station: "Roger Salengro Fontainebleau",
          imgUrl: ratpImgs.b + "47.svg",
          query: apiLinks.b + "47/Roger%20Salengro%20Fontainebleau/A",
        },
        {
          station: "Roger Salengro Fontainebleau",
          imgUrl: ratpImgs.b + "131.svg",
          query: apiLinks.b + "131/Roger%20Salengro%20Fontainebleau/A",
        },

        {
          station: "Roger Salengro Fontainebleau",
          imgUrl: ratpImgs.b + "186.svg",
          query: apiLinks.b + "186/Roger%20Salengro%20Fontainebleau/A",
        },

        {
          station: "Roger Salengro Fontainebleau",
          imgUrl: ratpImgs.n + "n15.svg",
          query: apiLinks.n + "15/Roger%20Salengro%20Fontainebleau/A",
        },
        {
          station: "Roger Salengro Fontainebleau",
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
          station: "porte italie",
          imgUrl: ratpImgs.t + "3a.svg",
          query: apiLinks.t + "3a/porte%20italie/A",
        },
        {
          station: "maison blanche",
          imgUrl: ratpImgs.m + "7.svg",
          query: apiLinks.m + "7/maison%20blanche/A",
          destination: "Mairie d'Ivry",
        },
      ],
      [
        {
          station: "Avenue de France",
          imgUrl: ratpImgs.t + "3a.svg",
          query: apiLinks.t + "3a/porte%20italie/R",
        },
        {
          station: "Pont jardin",
          query: "13055",
        },
        {
          station: "Agoraé",
          query: "13050",
        },
        {
          station: "Hebta vers tram",
          query: "13118",
        },
        {
          station: "Buger King",
          query: "13016",
        },
      ],
      [
        {
          station: "Italie - Tolbiac",
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
          station: "Avenue Émile Zola",
          imgUrl: ratpImgs.m + "10.svg",
          query: apiLinks.m + "10/Avenue%20Emile%20Zola/A",
        },
        {
          station: "Emile Zola - Fondary",
          query: "15022",
        },
        {
          station: "Commerce",
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
          station: "Porte de France",
          imgUrl: ratpImgs.b + "89.svg",
          query: apiLinks.b + "89/Porte%20de%20France/R",
        },
        {
          station: "Bibliothèque Rue Mann",
          imgUrl: ratpImgs.b + "62.svg",
          query: apiLinks.b + "62/Bibliotheque%20Rue%20Mann/R",
        },
        {
          station: "Pont jardin",
          query: "13055",
        },
        {
          station: "Drouj Metro 14",
          query: "13053",
        },
        {
          station: "Hebta Avenue Principale",
          query: "13054",
        },
      ],
      [
        {
          station: "Station F",
          query: "13051",
        },
        {
          station: "Station F (coté route  derriere)",
          query: "13015",
        },
        {
          station: "Vers ligne 6",
          query: "13049",
        },
        {
          station: "Bouche de Métro 6",
          query: "13018",
        },
        {
          station: "Chevaleret",
          imgUrl: ratpImgs.m + "6.svg",
          query: apiLinks.m + "6/Chevaleret/A",
        },
      ],
      [
        {
          station: "Bibliotheque Francois Mitterrand",
          imgUrl: ratpImgs.b + "62.svg",
          query: apiLinks.b + "62/Bibliotheque%20Francois%20Mitterrand/A",
        },
        {
          station: "Bibliotheque Francois Mitterrand",
          imgUrl: ratpImgs.b + "89.svg",
          query: apiLinks.b + "89/Bibliotheque%20Francois%20Mitterrand/A",
        },
      ],
      [
        {
          station: "Avenue de France",
          imgUrl: ratpImgs.t + "3a.svg",
          query: apiLinks.t + "3a/porte%20italie/A",
        },
        {
          station: "Pont jardin",
          query: "13055",
        },
        {
          station: "Agoraé",
          query: "13050",
        },
        {
          station: "Hebta vers tram",
          query: "13118",
        },
        {
          station: "Buger King",
          query: "13016",
        },
      ],
    ],
  },
]

export default initalData
