const { countries, continents, languages } = require("./data");

const resolvers = {
  Query: {
    countries: () => countries,
    country: (_, { code }) => countries.find((c) => c.code === code),
    continents: () => continents,
    continent: (_, { id }) => continents.find((c) => c.id === id),
    languages: () => languages,
    language: (_, { id }) => languages.find((l) => l.id === id),
  },
  Country: {
    continent: (country) => continents.find((c) => c.id === country.continentId),
    languages: (country) => languages.filter((l) => country.languageIds.includes(l.id)),
  },
};

module.exports = resolvers;
