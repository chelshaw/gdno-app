import { values } from 'lodash';

const placeholder = require('../assets/images/icon.png');
const annualIcon = require('../assets/images/life_annual.png');
const biennialIcon = require('../assets/images/life_biennial.png');
const perennialIcon = require('../assets/images/life_perennial.png');
const fullSunIcon = require('../assets/images/sun_full.png');
const partialSunIcon = require('../assets/images/sun_partial.png');
const lessWaterIcon = require('../assets/images/water_01.png');
const regularWaterIcon = require('../assets/images/water_02.png');
const moreWaterIcon = require('../assets/images/water_03.png');

export const keyifyName = name => name.toString().trim().toLowerCase().replace(/[^a-z0-9]/g, '');

/* DETAILS SCREENS */
export const detailsScreens = {
  essentials: 'ESSENTIALS',
  grow: 'GROW',
  issues: 'ISSUES',
  enjoy: 'ENJOY',
};

export const detailsScreensArray = values(detailsScreens);

/* CARE GUIDE FEATURES */
export const lifespanFeatures = {
  annual: {
    text: 'Annual',
    icon: annualIcon,
    detailKey: ''
  },
  biennial: {
    text: 'Biennial',
    icon: biennialIcon,
    detailKey: ''
  },
  perennial: {
    text: 'Perennial',
    icon: perennialIcon,
    detailKey: ''
  }
};

export const sunFeatures = {
  full: {
    text: 'Full Sun',
    icon: fullSunIcon,
    detailKey: 'sunDetails'
  },
  partial: {
    text: 'Partial Sun',
    icon: partialSunIcon,
    detailKey: 'sunDetails'
  }
};

export const waterFeatures = {
  'not thirsty': {
    text: 'Less Water',
    icon: lessWaterIcon,
    detailKey: '',
  },
  regular: {
    text: 'Regular Water',
    icon: regularWaterIcon,
    detailKey: '',
  },
  'very thirsty': {
    text: 'More Water',
    icon: moreWaterIcon,
    detailKey: '',
  },
};

export const petFeatures = {
  cat: {
    text: 'Cat Friendly',
    icon: placeholder,
    detailKey: 'petDetails',
  },
  dog: {
    text: 'Dog Friendly',
    icon: placeholder,
    detailKey: 'petDetails',
  },
  'cat and dog': {
    text: 'Pet Friendly',
    icon: placeholder,
    detailKey: 'petDetails',
  },
  none: {
    text: 'Not Pet Friendly',
    icon: placeholder,
    detailKey: 'petDetails',
  },
};

export const frostFeatures = {
  hardy: {
    text: 'Frost Hardy',
    icon: placeholder,
    detailKey: 'frostDetails',
  },
  tolerant: {
    text: 'Frost Tolerant',
    icon: placeholder,
    detailKey: 'frostDetails',
  },
  sensitive: {
    text: 'Frost Sensitive',
    icon: placeholder,
    detailKey: 'frostDetails',
  }
};

export const soilFeatures = {
  'Lean, rocky soil': {
    text: 'Lean, rocky soil',
    icon: placeholder,
    detailKey: 'soilDetails',
  },
  'Loose, fertile soil': {
    text: 'Loose, fertile soil',
    icon: placeholder,
    detailKey: 'soilDetails',
  }
};

export const allFeatures = {
  lifespan: lifespanFeatures,
  sun: sunFeatures,
  water: waterFeatures,
  soil: soilFeatures,
  pet: petFeatures,
  frost: frostFeatures,
};

export const links = {
  instagram: 'https://instagram.com/growgardenio',
  facebook: 'https://facebook.com/growgardenio',
  shop: 'https://growgardenio.com/',
  help: 'mailto:help@growgardenio.zendesk.com',
  feedback: 'mailto:feedback@growgardenio.zendesk.com',
};
