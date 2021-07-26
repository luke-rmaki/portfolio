module.exports = {
  extends: [`rmaki`, `react-app`],

  rules: {
    'react/prop-types': `off`,
    'react/jsx-one-expression-per-line': `off`,
  },
  // settings: {
  //   'import/resolver': {
  //     alias: {
  //       map: [
  //         [`@utils`, `./src/utils`],
  //         [`@global`, `./src/components/global`],
  //       ],
  //     },
  //   },
  // },
};
