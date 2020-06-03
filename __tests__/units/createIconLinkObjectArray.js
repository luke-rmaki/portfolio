import { createIconLinkObjectArray } from '../../src/utils';

describe('createIconLinkObjectArray works. Will need to make this test', () => {
  const icons = [
    {
      node: {
        publicURL: '/static/3c80532aa0ff009034db7633d113f5ff/codepen.svg',
        name: 'codepen',
      },
    },
    {
      node: {
        publicURL: '/static/bae2ba8586328bdfb7d93d1b94cf4984/github.svg',
        name: 'github',
      },
    },
    {
      node: {
        publicURL: '/static/26799a10c78321edc8a5c13cf53ef55c/linkedin.svg',
        name: 'linkedin',
      },
    },
    {
      node: {
        publicURL: '/static/f11a9f1bd830df52e218f262958eab05/twitter.svg',
        name: 'twitter',
      },
    },
  ];
  const links = [
    'https://github.com/luke-rmaki/',
    ' https://www.linkedin.com/in/luke-ruokaismaki-01b537159/',
    ' https://twitter.com/luke_rmaki',
    ' https://codepen.io/luke_rmaki',
  ];

  const result = [
    {
      iconURL: '/static/3c80532aa0ff009034db7633d113f5ff/codepen.svg',
      name: 'codepen',
      link: ' https://codepen.io/luke_rmaki',
    },
    {
      iconURL: '/static/bae2ba8586328bdfb7d93d1b94cf4984/github.svg',
      name: 'github',
      link: 'https://github.com/luke-rmaki/',
    },
    {
      iconURL: '/static/26799a10c78321edc8a5c13cf53ef55c/linkedin.svg',
      name: 'linkedin',
      link: ' https://www.linkedin.com/in/luke-ruokaismaki-01b537159/',
    },
    {
      iconURL: '/static/f11a9f1bd830df52e218f262958eab05/twitter.svg',
      name: 'twitter',
      link: ' https://twitter.com/luke_rmaki',
    },
  ];
  expect(createIconLinkObjectArray(icons, links)).to.eql(result);
});
