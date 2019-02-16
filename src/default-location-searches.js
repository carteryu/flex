import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-santamonica',
    predictionPlace: {
      address: 'Santa Monica, CA',
      bounds: new LatLngBounds(
        new LatLng(34.3373061, -118.1552891),
        new LatLng(33.7036519, -118.6681759)
      ),
    },
  },
  {
    id: 'default-culvercity',
    predictionPlace: {
      address: 'Culver City, CA',
      bounds: new LatLngBounds(new LatLng(60.53045, 22.38197), new LatLng(60.33361, 22.06644)),
    },
  },
  {
    id: 'default-dtla',
    predictionPlace: {
      address: 'Downtown Los Angeles, CA',
      bounds: new LatLngBounds(
        new LatLng(34.062481, 118.236551),
        new LatLng(34.023801, 118.273976)
      ),
    },
  },
  {
    id: 'default-hollywood',
    predictionPlace: {
      address: 'Hollywood, CA',
      bounds: new LatLngBounds(new LatLng(65.56434, 26.77069), new LatLng(64.8443, 24.11494)),
    },
  },
  {
    id: 'default-koreatown',
    predictionPlace: {
      address: 'Koreatown, CA',
      bounds: new LatLngBounds(new LatLng(66.16997, 29.16773), new LatLng(66.16095, 29.13572)),
    },
  },
];
