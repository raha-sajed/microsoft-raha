/** @type {import('tailwindcdd').config} */
export default {
  content: ["./*.html"],
  theme: {

    screens: {
      '2xs':'540px',

      'xs':'860px',

      'sm': '880px',

      'md': '930px',

      'lg': '1015px',

      'xl': '1050px',

      '2xl': '1400px',

    },
    extend: {
      
    },
  },
  plugins: [require("daisyui")],
};
 