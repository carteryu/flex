/*
 * Marketplace specific configuration.
 */

export const amenities = [
  {
    key: 'towels',
    label: 'Weight Loss',
  },
  {
    key: 'bathroom',
    label: 'Post-Rehabilitation',
  },
  {
    key: 'swimming_pool',
    label: 'Calisthenics',
  },
  {
    key: 'own_drinks',
    label: 'Tone up',
  },
  // {
  //   key: 'jacuzzi',
  //   label: 'Jacuzzi',
  // },
  // {
  //   key: 'audiovisual_entertainment',
  //   label: 'Audiovisual entertainment',
  // },
  // {
  //   key: 'barbeque',
  //   label: 'Barbeque',
  // },
  // {
  //   key: 'own_food_allowed',
  //   label: 'Own food allowed',
  // },
];

export const categories = [
  { key: 'diet', label: 'Diet' },
  { key: 'keto', label: 'Keto' },
  { key: 'other', label: 'Other' },
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 200,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};
