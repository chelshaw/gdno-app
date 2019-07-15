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

const lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis lobortis lorem eu posuere. Maecenas luctus scelerisque tellus. Donec vehicula eleifend nibh sit amet condimentum. Quisque ipsum est, condimentum eu faucibus sed, gravida in justo. Curabitur sit amet congue ipsum. Praesent non mollis nulla, non semper risus. Donec porttitor, mi ac suscipit dignissim, lectus augue dignissim ligula, vel auctor nibh lorem at augue. In at mollis velit. Pellentesque interdum, enim nec faucibus ultricies, purus ipsum sollicitudin purus, non facilisis lorem ex eu velit. Ut iaculis rhoncus efficitur. Duis vitae nisi mollis, consequat libero ac, ultrices mauris. In quis libero eu ipsum viverra ullamcorper quis et risus.';

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
    details: lipsum
  },
  biennial: {
    text: 'Biennial',
    icon: biennialIcon,
    details: lipsum
  },
  perennial: {
    text: 'Perennial',
    icon: perennialIcon,
    details: lipsum
  }
};

export const sunFeatures = {
  full: {
    text: 'Full Sun',
    icon: fullSunIcon,
    details: lipsum
  },
  partial: {
    text: 'Partial Sun',
    icon: partialSunIcon,
    details: lipsum
  }
};

export const waterFeatures = {
  'not thirsty': {
    text: 'Less Water',
    icon: lessWaterIcon,
    details: lipsum,
  },
  regular: {
    text: 'Regular Water',
    icon: regularWaterIcon,
    details: lipsum,
  },
  'very thirsty': {
    text: 'More Water',
    icon: moreWaterIcon,
    details: lipsum,
  },
};

export const petFeatures = {
  cat: {
    text: 'Cat Friendly',
    icon: placeholder,
    details: lipsum,
  },
  dog: {
    text: 'Dog Friendly',
    icon: placeholder,
    details: lipsum,
  },
  'cat and dog': {
    text: 'Pet Friendly',
    icon: placeholder,
    details: lipsum,
  },
  none: {
    text: 'Not Pet Friendly',
    icon: placeholder,
    details: lipsum,
  },
};

export const frostFeatures = {
  hardy: {
    text: 'Frost Hardy',
    icon: placeholder,
    details: lipsum,
  },
  tolerant: {
    text: 'Frost Tolerant',
    icon: placeholder,
    details: lipsum,
  },
  sensitive: {
    text: 'Frost Sensitive',
    icon: placeholder,
    details: lipsum,
  }
};

export const soilFeatures = {
  'Lean, rocky soil': {
    text: 'Lean, rocky soil',
    icon: placeholder,
    details: lipsum,
  },
  'Loose, fertile soil': {
    text: 'Loose, fertile soil',
    icon: placeholder,
    details: lipsum,
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
