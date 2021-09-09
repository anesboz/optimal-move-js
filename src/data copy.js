const initialData = [
  {
    name: "McDo-Stalingrad",
    logo: "https://www.citypng.com/public/uploads/preview/-11600735522qbwj7xtpxu.png",
    description: ["De chez moi vers MAcdo", "desc 2eme page Bus"],
    list: [
      [
        {
          depart: "place italie",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/metro/picto_metro_ligne-5.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/5/place%20italie/R",
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
          depart: "Cardinal Lemoine Monge",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-75.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/75/Cardinal%20Lemoine%20Monge/A",
        },
        {
          depart: "Cite - Palais de Justice",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-38.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/38/Cite%20-%20Palais%20de%20Justice/A",
        },
      ],
      [
        {
          depart: "Dauphin - Anatole France",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-185.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/185/Dauphin%20-%20Anatole%20France/R",
        },
        {
          depart: "Kremlin Bicetre",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-47.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/47/Kremlin%20Bicetre/R",
        },
        {
          depart: "Kremlin Bicetre",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-131.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/131/Kremlin%20Bicetre/R",
        },
        {
          depart: "Convention - Fontainebleau",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-186.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/186/Convention%20-%20Fontainebleau/R",
        },
      ],
      [
        {
          depart: "Dauphin - Anatole France",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/noctilien/picto_noctilien_ligne-n22.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/noctiliens/22/Dauphin%20-%20Anatole%20France/R",
        },
        {
          depart: "Dauphin - Anatole France",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/noctilien/picto_noctilien_ligne-n15.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/noctiliens/15/Dauphin%20-%20Anatole%20France/R",
        },
        {
          depart: "Chatelet",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/noctilien/picto_noctilien_ligne-n13.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/noctiliens/13/Chatelet/R",
        },
        {
          depart: "Chatelet",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/noctilien/picto_noctilien_ligne-n14.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/noctiliens/14/Chatelet/A",
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
          depart: "Dauphin - Anatole France",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-185.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/185/Dauphin%20-%20Anatole%20France/R",
        },
        {
          depart: "Villejuif Leo Lagrange",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/metro/picto_metro_ligne-7.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/7/Villejuif%20Leo%20Lagrange/R",
        },
        {
          depart: "Vivaldi",
          query: "48002",
        },
        {
          depart: "Kremlin",
          query: "42703",
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
    ],
  },
  {
    name: "Agorae",
    logo: "https://www.universite-paris-saclay.fr/sites/default/files/2020-07/agorae.png",
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
    name: "PorteItalie",
    logo: "https://cdn.countryflags.com/thumbs/italy/flag-button-round-250.png",
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
          depart: "Kremlin",
          query: "42703",
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
      [
        {
          depart: "Convention Fontainebleau",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-47.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/47/Convention%20Fontainebleau/R",
        },
        {
          depart: "Convention Fontainebleau",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-131.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/131/Convention%20Fontainebleau/R",
        },
        {
          depart: "Convention Fontainebleau",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-185.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/185/Convention%20Fontainebleau/R",
        },
        {
          depart: "Convention Fontainebleau",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-186.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/186/Convention%20Fontainebleau/R",
        },
        {
          depart: "Okabé",
          query: "42707",
        },
        {
          depart: "Convention Fontainebleau",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/noctilien/picto_noctilien_ligne-n15.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/noctiliens/15/Convention%20Fontainebleau/R",
        },
        {
          depart: "Convention Fontainebleau",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/noctilien/picto_noctilien_ligne-n22.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/noctiliens/22/Convention%20Fontainebleau/R",
        },
      ],
      [
        {
          depart: "Roger Salengro Fontainebleau",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-47.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/47/Roger%20Salengro%20Fontainebleau/R",
        },
        {
          depart: "Roger Salengro Fontainebleau",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-131.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/131/Roger%20Salengro%20Fontainebleau/R",
        },
        {
          depart: "Roger Salengro Fontainebleau",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-185.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/185/Roger%20Salengro%20Fontainebleau/R",
        },
        {
          depart: "Roger Salengro Fontainebleau",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-186.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/186/Roger%20Salengro%20Fontainebleau/R",
        },
        {
          depart: "Lidl",
          query: "42706",
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
    ],
  },
  {
    name: "Montsouris",
    logo: "https://logodix.com/logo/403615.jpg",
    list: [
      [
        {
          depart: "porte italie",
          imgUrl:
            "https://www.ratp.fr/sites/default/files/lines-assets/picto/tram/picto_tram_ligne-t3a.svg",
          query:
            "https://api-ratp.pierre-grimaud.fr/v4/schedules/tramways/3a/porte%20italie/R",
        },
      ],
    ],
  },
];

export default initialData;
