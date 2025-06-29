// utils/languageFlags.js
export const languageToCountry = {
  en: 'gb', // English -> United Kingdom
  ru: 'ru', // Russian -> Russia
  az: 'az', // Azerbaijani -> Azerbaijan
  fr: 'fr', // French -> France
  es: 'es', // Spanish -> Spain
  de: 'de', // German -> Germany
  it: 'it', // Italian -> Italy
  nl: 'nl', // Dutch -> Netherlands
  pl: 'pl', // Polish -> Poland
  pt: 'pt', // Portuguese -> Portugal
  tr: 'tr', // Turkish -> Turkey
  uk: 'gb', // Ukrainian -> United Kingdom
  vi: 'vn', // Vietnamese -> Vietnam
  
  // Add more as needed
  default: 'un' // United Nations for unknown
};

export const getCountryCode = (langCode) => {
  return languageToCountry[langCode?.toLowerCase()] || languageToCountry.default;
};