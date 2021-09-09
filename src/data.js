const initialData = [
  {
    name: "CA",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/a/a6/Cr%C3%A9dit_Agricole.svg/langfr-800px-Cr%C3%A9dit_Agricole.svg.png",
    list: [
      [
        {
          depart: "porte italie",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/tram/picto_tram_ligne-t3a.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/tramways/3a/porte%20italie/R",
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
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-68.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/68/porte%20d%27orléans/R",
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
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-185.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/185/porte%20d%27italie/A",
        },

        {
          depart: "Porte d'italie",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-47.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/47/porte%20d%27italie/A",
        },
        {
          depart: "Porte d'italie",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-131.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/131/porte%20d%27italie/A",
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
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/noctilien/picto_noctilien_ligne-n15.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/noctiliens/15/Roger%20Salengro%20Fontainebleau/R",
        },
        {
          depart: "Roger Salengro Fontainebleau",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/noctilien/picto_noctilien_ligne-n22.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/noctiliens/22/Roger%20Salengro%20Fontainebleau/R",
        },
      ],
      [
        {
          depart: "Porte d'italie",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-186.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/186/porte%20d%27italie/A",
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
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/metro/picto_metro_ligne-7.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/7/Villejuif%20Leo%20Lagrange/R",
        },
        {
          depart: "Dauphin - Anatole France",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-185.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/185/Dauphin%20-%20Anatole%20France/R",
        },
        {
          depart: "Vivaldi",
          query: "48002",
        },
        {
          depart: "Dauphin - Anatole France",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/noctilien/picto_noctilien_ligne-n15.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/noctiliens/15/Dauphin%20-%20Anatole%20France/R",
        },
        {
          depart: "Dauphin - Anatole France",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/noctilien/picto_noctilien_ligne-n22.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/noctiliens/22/Dauphin%20-%20Anatole%20France/R",
        },
      ],
      [
        {
          depart: "Kremlin Bicetre",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-47.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/47/Kremlin%20Bicetre/R",
        },
        {
          depart: "Kremlin",
          query: "42703",
        },
        {
          depart: "Kremlin Bicetre",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-131.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/131/Kremlin%20Bicetre/R",
        },
        {
          depart: "Kremlin Bicetre",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-185.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/185/Kremlin%20Bicetre/R",
        },
        {
          depart: "Kremlin Bicetre",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/metro/picto_metro_ligne-7.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/7/Kremlin%20Bicetre/R",
        },
        {
          depart: "Kremlin Bicetre",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/noctilien/picto_noctilien_ligne-n15.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/noctiliens/15/Kremlin%20Bicetre/R",
        },
        {
          depart: "Kremlin Bicetre",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/noctilien/picto_noctilien_ligne-n22.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/noctiliens/22/Kremlin%20Bicetre/R",
        },
      ],
    ],
  },
  {
    name: "Fac",
    logo: "https://moodle.u-paris.fr/pluginfile.php/1/theme_fordson/favicon/1628026585/favicon.png",
    list: [
      [
        {
          depart: "porte italie",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/tram/picto_tram_ligne-t3a.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/tramways/3a/porte%20italie/A",
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
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-185.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/185/Convention%20-%20Fontainebleau/A",
        },
        {
          depart: "Kremlin Bicetre",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/metro/picto_metro_ligne-7.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/7/Kremlin%20Bicetre/A",
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
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-185.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/185/Roger%20Salengro%20Fontainebleau/A",
        },
        {
          depart: "Lidl",
          query: "42706",
        },
        {
          depart: "Roger Salengro Fontainebleau",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-47.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/47/Roger%20Salengro%20Fontainebleau/A",
        },
        {
          depart: "Roger Salengro Fontainebleau",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-131.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/131/Roger%20Salengro%20Fontainebleau/A",
        },

        {
          depart: "Roger Salengro Fontainebleau",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-186.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/186/Roger%20Salengro%20Fontainebleau/A",
        },

        {
          depart: "Roger Salengro Fontainebleau",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/noctilien/picto_noctilien_ligne-n15.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/noctiliens/15/Roger%20Salengro%20Fontainebleau/A",
        },
        {
          depart: "Roger Salengro Fontainebleau",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/noctilien/picto_noctilien_ligne-n22.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/noctiliens/22/Roger%20Salengro%20Fontainebleau/A",
        },
      ],
    ],
  },
];

export default initialData;
