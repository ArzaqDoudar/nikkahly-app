// export const FONTS = {
//   // Font families
//   weight: {
//     regular: "Poppins-Regular",
//     medium: "Poppins-Medium",
//     semibold: "Poppins-Semibold",
//     bold: "Poppins-Bold",
//   },
//   // Font sizes
//   sizes: {
//     display_2xl: 72,
//     display_xl: 60,
//     display_lg: 48,
//     display_md: 36,
//     display_sm: 30,
//     display_xs: 24,
//     text_xl: 20,
//     text_lg: 18,
//     text_md: 16,
//     text_sm: 14,
//     text_xs: 12,
//   },
//   line_height: {
//     display_2xl: 90,
//     display_xl: 72,
//     display_lg: 60,
//     display_md: 44,
//     display_sm: 38,
//     display_xs: 32,
//     text_xl: 30,
//     text_lg: 28,
//     text_md: 24,
//     text_sm: 20,
//     text_xs: 20,
//   },
// };

export const FONT_SIZES = {
  display_2xl: 72,
  display_xl: 60,
  display_lg: 48,
  display_md: 36,
  display_sm: 30,
  display_xs: 24,
  text_xl: 20,
  text_lg: 18,
  text_md: 16,
  text_sm: 14,
  text_xs: 12,
};

export const LINE_HEIGHT = {
  display_2xl: 90,
  display_xl: 72,
  display_lg: 60,
  display_md: 44,
  display_sm: 38,
  display_xs: 32,
  text_xl: 30,
  text_lg: 28,
  text_md: 24,
  text_sm: 20,
  text_xs: 20,
};

export const FONT_FAMILIES = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semibold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
};

// Combine sizes + weights for easy usage
export const FONTS = {};

// Loop through sizes and assign each weight
Object.keys(FONT_SIZES).forEach((size) => {
  FONTS[size] = {
    regular: { fontFamily: FONT_FAMILIES.regular, fontSize: FONT_SIZES[size] },
    medium: { fontFamily: FONT_FAMILIES.medium, fontSize: FONT_SIZES[size] },
    semibold: {
      fontFamily: FONT_FAMILIES.semibold,
      fontSize: FONT_SIZES[size],
    },
    bold: { fontFamily: FONT_FAMILIES.bold, fontSize: FONT_SIZES[size] },
  };
});

// export const TEXT = {
//   Display2xl: {
//     fontWeight: FONTS.weight,
//     fontSize: FONTS.sizes.display_2xl,
//     lineHeight: FONTS.line_height.display_2xl,
//   },

//   DisplayXl: {
//     fontWeight: FONTS.weight,
//     fontSize: FONTS.sizes.display_xl,
//     lineHeight: FONTS.line_height.display_xl,
//   },

//   DisplayLg: {
//     fontWeight: FONTS.weight,
//     fontSize: FONTS.sizes.display_lg,
//     lineHeight: FONTS.line_height.display_lg,
//   },
//   DisplayMd: {
//     fontWeight: FONTS.weight,
//     fontSize: FONTS.sizes.display_md,
//     lineHeight: FONTS.line_height.display_md,
//   },
//   DisplaySm: {
//     fontFamily: FONTS.weight,
//     fontSize: FONTS.sizes.display_sm,
//     lineHeight: FONTS.line_height.display_sm,
//   },
//   DisplayXs: {
//     fontFamily: FONTS.weight,
//     fontSize: FONTS.sizes.display_xs,
//     lineHeight: FONTS.line_height.display_xs,
//   },
//   TextXl: {
//     fontFamily: FONTS.weight,
//     fontSize: FONTS.sizes.text_xl,
//     lineHeight: FONTS.line_height.text_xl,
//   },
//   TextLg: {
//     fontFamily: FONTS.weight,
//     fontSize: FONTS.sizes.text_lg,
//     lineHeight: FONTS.line_height.text_lg,
//   },
//   TextMd: {
//     fontFamily: FONTS.weight,
//     fontSize: FONTS.sizes.text_md,
//     lineHeight: FONTS.line_height.text_md,
//   },
//   TextSm: {
//     fontFamily: FONTS.weight,
//     fontSize: FONTS.sizes.text_sm,
//     lineHeight: FONTS.line_height.text_sm,
//   },
//   TextXs: {
//     fontFamily: FONTS.weight,
//     fontSize: FONTS.sizes.text_xs,
//     lineHeight: FONTS.line_height.text_xs,
//   },
// };
