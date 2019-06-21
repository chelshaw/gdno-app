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
  },
  biennial: {
    text: 'Biennial',
    icon: biennialIcon,
  },
  perennial: {
    text: 'Perennial',
    icon: perennialIcon,
  }
};

export const sunFeatures = {
  full: {
    text: 'Full Sun',
    icon: fullSunIcon,
  },
  partial: {
    text: 'Partial Sun',
    icon: partialSunIcon,
  }
};

export const waterFeatures = {
  'not thirsty': {
    text: 'Less Water',
    icon: lessWaterIcon,
  },
  regular: {
    text: 'Regular Water',
    icon: regularWaterIcon,
  },
  'very thirsty': {
    text: 'More Water',
    icon: moreWaterIcon,
  },
};

export const petFeatures = {
  cat: {
    text: 'Cat Friendly',
    icon: placeholder,
  },
  dog: {
    text: 'Dog Friendly',
    icon: placeholder,
  },
  'cat and dog': {
    text: 'Pet Friendly',
    icon: placeholder,
  },
  none: {
    text: 'Not Pet Friendly',
    icon: placeholder,
  },
};

export const frostFeatures = {
  hardy: {
    text: 'Frost Hardy',
    icon: placeholder,
  },
  tolerant: {
    text: 'Frost Tolerant',
    icon: placeholder,
  },
  sensitive: {
    text: 'Frost Sensitive',
    icon: placeholder,
  }
};

export const soilFeatures = {
  'Lean, rocky soil': {
    text: 'Lean, rocky soil',
    icon: placeholder,
  },
  'Loose, fertile soil': {
    text: 'Loose, fertile soil',
    icon: placeholder,
  }
};
