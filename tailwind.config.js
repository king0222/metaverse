module.exports = {
    content: [
      "./src/**/*.{html,js}",
      "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    plugins: [require("tw-elements/dist/plugin")],
    theme: {
    //   colors: {
    //     gray: colors.coolGray,
    //     blue: colors.lightBlue,
    //     red: colors.rose,
    //     pink: colors.fuchsia,
    //   },
    //   fontFamily: {
    //     sans: ['Graphik', 'sans-serif'],
    //     serif: ['Merriweather', 'serif'],
    //   },
    //   extend: {
    //     spacing: {
    //       '128': '32rem',
    //       '144': '36rem',
    //     },
    //     borderRadius: {
    //       '4xl': '2rem',
    //     }
    //   }
    },
    variants: {
    //   extend: {
    //     borderColor: ['focus-visible'],
    //     opacity: ['disabled'],
    //   }
    }
  }