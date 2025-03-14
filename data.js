const continents = [
    { id: "1", name: "Europe" },
    { id: "2", name: "Asia" },
    { id: "3", name: "Africa" },
  ];
  
  const languages = [
    { id: "1", name: "English", native: "English" },
    { id: "2", name: "Turkish", native: "Türkçe" },
    { id: "3", name: "French", native: "Français" },
  ];
  
  const countries = [
    {
      id: "1",
      name: "Türkiye",
      code: "TR",
      emoji: "🇹🇷",
      continentId: "2",
      languageIds: ["2"],
    },
    {
      id: "2",
      name: "France",
      code: "FR",
      emoji: "🇫🇷",
      continentId: "1",
      languageIds: ["3"],
    },
    {
      id: "3",
      name: "United Kingdom",
      code: "GB",
      emoji: "🇬🇧",
      continentId: "1",
      languageIds: ["1"],
    },
    
  ];
  
  module.exports = { continents, languages, countries };
  