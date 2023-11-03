/* eslint-disable sort-keys */
interface Size {
  md: string;
  lg: string;
  xl: string;
}

const size: Size = {
  md: '601px', // for tablets
  lg: '901px', // for laptops
  xl: '1281px', // for desktop / monitors
};

export const device = {
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
};
