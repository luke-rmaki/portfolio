module.exports = {
  extends: [`rmaki`, `react-app`],

  rules: {
    'react/prop-types': `off`,
    'react/jsx-one-expression-per-line': `off`,
    'jsx-a11y/label-has-associated-control': [
      `error`,
      {
        required: {
          some: [`nesting`, `id`],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      `error`,
      {
        required: {
          some: [`nesting`, `id`],
        },
      },
    ],
    'react/require-default-props': `off`,
  },
  ignorePatterns: [`*.mdx`],
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
