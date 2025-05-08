export const normalizedData = {
    continentsById: {
      asia: { label: "Asia", value: "asia", countries: ["in"] },
      america: { label: "America", value: "america", countries: ["us", "bz"] },
    },
    countriesById: {
      in: { label: "India", value: "in", states: ["mh", "ap", "kn"] },
      us: { label: "USA", value: "us", states: ["ws", "la", "tx"] },
      bz: { label: "Brazil", value: "bz", states: ["sp", "rj"] },
    },
    statesById: {
      mh: { label: "Maharashtra", value: "mh", cities: ["mum", "pun"] },
      ap: { label: "Andhra Pradesh", value: "ap", cities: ["vij", "viz"] },
      kn: { label: "Karnataka", value: "kn", cities: ["blr", "mys"] },
      ws: { label: "Washington", value: "ws", cities: ["sea"] },
      la: { label: "Los Angeles", value: "la", cities: ["sant"] },
      tx: { label: "Texas", value: "tx", cities: ["dal"] },
      sp: { label: "São Paulo", value: "sp", cities: ["camp"] },
      rj: { label: "Rio de Janeiro", value: "rj", cities: ["niter"] },
    },
    citiesById: {
      mum: { label: "Mumbai", value: "mum" },
      pun: { label: "Pune", value: "pun" },
      vij: { label: "Vijayawada", value: "vij" },
      viz: { label: "Vizag", value: "viz" },
      blr: { label: "Bangalore", value: "blr" },
      mys: { label: "Mysore", value: "mys" },
      sea: { label: "Seattle", value: "sea" },
      sant: { label: "Santa Monica", value: "sant" },
      dal: { label: "Dallas", value: "dal" },
      camp: { label: "Campinas", value: "camp" },
      niter: { label: "Niterói", value: "niter" },
    },
    continentOrder: ["asia", "america"], // optional for display order
  };
  