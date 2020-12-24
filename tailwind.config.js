module.exports = {
  darkMode: 'class', // This can be 'media' if preferred.
  purge: [
    './src/**/*.svelte',
    './src/**/*.html',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "DEFAULT": "#9b9099",
          "50": "#fff5ff",
          "100": "#faeef8",
          "200": "#f0e4ee",
          "300": "#e0d4dd",
          "400": "#bbb0b9",
          "500": "#9b9099",
          "600": "#726871",
          "700": "#5f555d",
          "800": "#40363e",
          "900": "#1f171e"
        },
        secondary: {
          "DEFAULT": "#a3c9aa",
          "50": "#e7f2ea",
          "100": "#c6decb",
          "200": "#a3c9aa",
          "300": "#7db688",
          "400": "#60a96e",
          "500": "#429b54",
          "600": "#3b8d4b",
          "700": "#317c40",
          "800": "#286b36",
          "900": "#184d23"
        },
        complementary: {
          "DEFAULT": "#36112f",
          "50": "#ffe0ec",
          "100": "#e5bdd0",
          "200": "#c397af",
          "300": "#a4718b",
          "400": "#8c5573",
          "500": "#75395b",
          "600": "#693152",
          "700": "#592746",
          "800": "#471d3c",
          "900": "#36112f"
        },
        alternate: {
          "DEFAULT": "#00f0b4",
          "50": "#e2fdf2",
          "100": "#b8f8df",
          "200": "#81f4cb",
          "300": "#00f0b4",
          "400": "#00eaa1",
          "500": "#00e28f",
          "600": "#00d182",
          "700": "#00bd73",
          "800": "#00ab65",
          "900": "#00894d"
        }
      },
      fontFamily: {
        'sans': ['PoiretOne', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      transitionProperty: {
        'top': 'top',
      }
    }
  },
  variants: {
    extend: {
      borderWidth: ['hover']
    }
  },
  plugins: [],
}
