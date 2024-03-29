import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

// Creates a CSS object to pass to letter paths in order to stagger animation delay
function createLetterCSS() {
  let styles = ``;
  for (let i = 1; i < 16; i += 1) {
    styles += `
      &:nth-child(${i}) {
        fill: none;
        stroke-dasharray: 1;
        stroke-dashoffset: 1;
        animation: writeName 0.2s forwards ease-in;
        animation-delay: calc( ${i}s / 5);
      }
    `;
  }
  return css`
    ${styles}
  `;
}

const LogoWrapper = styled.div`
  margin-top: 100px;

  @media screen and (min-width: 600px) {
    margin-top: 0;
    svg {
      width: 600px;
    }
  }

  svg {
    .name {
      opacity: 1;
      animation: hideLetters 1s forwards ease-in;
      animation-delay: 4s;

      path {
        ${createLetterCSS()}
      }
    }

    .bracket-left {
      animation: slideLeftBracket 0.5s forwards ease-in;
      animation-delay: 5s;

      path {
        stroke-dasharray: 1;
        stroke-dashoffset: 1;
        animation: drawBracketsAndSlash 0.5s forwards ease-in;
        animation-delay: 3s;
      }
    }
    .bracket-right {
      animation: slideRightBracket 0.5s forwards ease-in;
      animation-delay: 5s;
      path {
        stroke-dasharray: 1;
        stroke-dashoffset: 1;
        animation: drawBracketsAndSlash 0.5s forwards ease-in;
        animation-delay: 3.2s;
      }
    }
    .l-big {
      animation: showBigL 0.5s forwards ease-in;
      animation-delay: 5.5s;
      opacity: 0;
    }
    .r-big {
      animation: showBigR 0.5s forwards ease-in;
      animation-delay: 5.5s;
      opacity: 0;
    }
    .slash {
      path {
        stroke-dasharray: 1;
        stroke-dashoffset: 1;
        animation: drawBracketsAndSlash 0.5s forwards ease-in;
        animation-delay: 5.5s;
      }
    }
  }

  @keyframes writeName {
    from {
      stroke-dashoffset: 1;
      fill: none;
    }
    to {
      stroke-dashoffset: 0;
      fill: var(--accent);
    }
  }

  @keyframes hideLetters {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes drawBracketsAndSlash {
    from {
      stroke-dashoffset: 1;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
  @keyframes hideLetters {
    from {
      visibility: visible;
    }
    to {
      visibility: hidden;
    }
  }

  @keyframes slideLeftBracket {
    from {
      transform: matrix(1, 0, 0, 1, -198.947, 0);
    }
    to {
      transform: translatex(1%);
    }
  }

  @keyframes slideRightBracket {
    from {
      transform: matrix(1, 0, 0, 1, 222.463, 0);
    }
    to {
      transform: translatex(1%);
    }
  }

  @keyframes showBigL {
    from {
      opacity: 0;
      transform: matrix(1, 0, 0, 1, 159.492, 235.054);
    }
    to {
      opacity: 1;
      transform: matrix(1, 0, 0, 1, 179.492, 235.054);
    }
  }

  @keyframes showBigR {
    from {
      opacity: 0;
      transform: matrix(1, 0, 0, 1, 357.669, 235.054);
    }
    to {
      opacity: 1;
      transform: matrix(1, 0, 0, 1, 337.669, 235.054);
    }
  }
`;

// Need to extend CSSProperties type in order to be able to pass CSS variables
interface CustomCSSProp extends CSSProperties {
  // eslint-disable-next-line quotes
  '--i': string;
}

export const AnimatedLogo = () => (
  <LogoWrapper>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 600"
      version="1.1"
      style={{
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        strokeLinejoin: `round`,
        strokeMiterlimit: 2,
      }}
    >
      <g transform="matrix(1,0,0,1,-9.84333,209.203)" className="name">
        <path
          pathLength="1"
          d="M102.052,115.789L127.718,115.789L128.374,110.702L107.763,110.702L107.763,70.596L102.052,70.596L102.052,115.789Z"
          style={
            {
              fillRule: `nonzero`,
              stroke: `var(--accent)`,
              strokeWidth: `4px`,
              '--i': `1s`,
            } as CustomCSSProp
          }
        />
        <path
          pathLength="1"
          d="M144.653,81.229L139.139,81.229L139.139,106.37C139.139,112.77 142.421,116.544 149.117,116.544C153.154,116.544 157.453,114.641 160.177,111.129L160.637,115.789L165.33,115.789L165.33,81.229L159.816,81.229L159.816,106.665C157.946,109.619 154.237,112.146 150.463,112.146C146.458,112.146 144.653,110.243 144.653,105.714L144.653,81.229Z"
          style={
            {
              fillRule: `nonzero`,
              stroke: `var(--accent)`,
              strokeWidth: `4px`,
              '--i': `2s`,
            } as CustomCSSProp
          }
        />
        <path
          pathLength="1"
          d="M184.399,66.624L178.885,67.314L178.885,115.789L184.399,115.789L184.399,66.624ZM207.472,81.229L200.317,81.229L185.023,96.918L202.024,115.789L209.277,115.789L191.915,96.786L207.472,81.229Z"
          style={
            {
              fillRule: `nonzero`,
              stroke: `var(--accent)`,
              strokeWidth: `4px`,
              '--i': `3s`,
            } as CustomCSSProp
          }
        />
        <path
          pathLength="1"
          d="M222.241,100.462L245.478,100.462C245.544,99.707 245.609,98.624 245.609,97.443C245.609,86.94 240.292,80.507 231.562,80.507C222.372,80.507 216.465,88.089 216.465,98.559C216.465,109.291 222.175,116.544 232.284,116.544C236.584,116.544 240.949,115.002 244.165,112.475L241.572,108.832C238.52,110.899 235.861,111.949 232.35,111.949C227,111.949 222.536,108.471 222.241,100.462ZM231.628,85.037C236.813,85.037 240.161,88.811 240.292,96.196L222.274,96.196C222.733,88.581 226.475,85.037 231.628,85.037Z"
          style={
            {
              fillRule: `nonzero`,
              stroke: `var(--accent)`,
              strokeWidth: `4px`,
              '--i': `4s`,
            } as CustomCSSProp
          }
        />
        <path
          pathLength="1"
          d="M325.363,83.264C325.363,74.928 319.521,70.596 308.362,70.596L296.744,70.596L296.744,115.789L302.454,115.789L302.454,96.393L308.559,96.393L320.899,115.789L327.726,115.789L314.335,95.736C320.538,94.226 325.363,90.058 325.363,83.264ZM319.258,83.264C319.258,89.533 315.517,91.929 309.018,91.929L302.454,91.929L302.454,75.125L309.018,75.125C315.976,75.125 319.258,77.488 319.258,83.264Z"
          style={
            {
              fillRule: `nonzero`,
              stroke: `var(--accent)`,
              strokeWidth: `4px`,
              '--i': `5s`,
            } as CustomCSSProp
          }
        />
        <path
          pathLength="1"
          d="M341.576,81.229L336.063,81.229L336.063,106.37C336.063,112.77 339.345,116.544 346.04,116.544C350.077,116.544 354.376,114.641 357.1,111.129L357.56,115.789L362.253,115.789L362.253,81.229L356.739,81.229L356.739,106.665C354.869,109.619 351.16,112.146 347.386,112.146C343.381,112.146 341.576,110.243 341.576,105.714L341.576,81.229Z"
          style={
            {
              fillRule: `nonzero`,
              stroke: `var(--accent)`,
              strokeWidth: `4px`,
              '--i': `6s`,
            } as CustomCSSProp
          }
        />
        <path
          pathLength="1"
          d="M388.608,80.507C378.86,80.507 373.675,87.892 373.675,98.559C373.675,109.422 378.795,116.544 388.543,116.544C398.225,116.544 403.41,109.061 403.41,98.493C403.41,87.531 398.356,80.507 388.608,80.507ZM388.608,85.004C394.483,85.004 397.503,89.303 397.503,98.493C397.503,107.683 394.483,112.015 388.543,112.015C382.602,112.015 379.583,107.683 379.583,98.559C379.583,89.303 382.668,85.004 388.608,85.004Z"
          style={
            {
              fillRule: `nonzero`,
              stroke: `var(--accent)`,
              strokeWidth: `4px`,
              '--i': `7s`,
            } as CustomCSSProp
          }
        />
        <path
          pathLength="1"
          d="M420.707,66.624L415.193,67.314L415.193,115.789L420.707,115.789L420.707,66.624ZM443.779,81.229L436.625,81.229L421.33,96.918L438.331,115.789L445.585,115.789L428.223,96.786L443.779,81.229Z"
          style={
            {
              fillRule: `nonzero`,
              stroke: `var(--accent)`,
              strokeWidth: `4px`,
              '--i': `8s`,
            } as CustomCSSProp
          }
        />
        <path
          pathLength="1"
          d="M478.963,108.241L478.963,91.666C478.963,84.84 474.631,80.507 466.032,80.507C462.684,80.507 458.943,81.098 454.741,82.674L456.186,86.842C459.763,85.595 462.881,85.069 465.178,85.069C470.331,85.069 473.416,86.94 473.416,91.929L473.416,94.817L468.329,94.817C457.827,94.817 452.116,98.756 452.116,105.878C452.116,112.311 456.35,116.544 463.275,116.544C467.738,116.544 471.644,114.903 474.106,111.687C475.09,114.772 477.453,116.151 480.44,116.544L481.786,112.672C479.849,112.081 478.963,111.031 478.963,108.241ZM464.686,112.343C460.19,112.343 458.024,110.112 458.024,105.812C458.024,101.381 460.813,98.559 468.428,98.559L473.416,98.559L473.416,107.453C471.349,110.538 468.099,112.343 464.686,112.343Z"
          style={
            {
              fillRule: `nonzero`,
              stroke: `var(--accent)`,
              strokeWidth: `4px`,
              '--i': `9s`,
            } as CustomCSSProp
          }
        />
        <path
          pathLength="1"
          d="M506.696,65.049C504.366,65.049 502.725,66.723 502.725,68.889C502.725,71.121 504.366,72.827 506.696,72.827C509.158,72.827 510.733,71.121 510.733,68.889C510.733,66.723 509.158,65.049 506.696,65.049ZM511.094,81.229L495.242,81.229L495.242,85.595L505.58,85.595L505.58,111.424L494.914,111.424L494.914,115.789L520.842,115.789L520.842,111.424L511.094,111.424L511.094,81.229Z"
          style={
            {
              fillRule: `nonzero`,
              stroke: `var(--accent)`,
              strokeWidth: `4px`,
              '--i': `10s`,
            } as CustomCSSProp
          }
        />
        <path
          pathLength="1"
          d="M544.735,111.982C540.666,111.982 537.055,110.505 534.364,108.241L531.213,111.884C534.167,114.444 538.499,116.544 544.735,116.544C552.12,116.544 559.308,113.623 559.308,106.239C559.308,99.773 554.844,97.41 548.083,95.572C541.092,93.668 538.893,92.585 538.893,89.5C538.893,86.842 540.928,84.971 546.376,84.971C550.84,84.971 553.827,86.284 556.419,88.056L558.848,84.315C555.96,82.181 551.857,80.507 546.311,80.507C538.499,80.507 533.183,84.118 533.183,89.927C533.183,95.933 537.777,98.099 544.965,99.872C552.284,101.709 553.334,103.383 553.334,106.501C553.334,109.849 550.052,111.982 544.735,111.982Z"
          style={
            {
              fillRule: `nonzero`,
              stroke: `var(--accent)`,
              strokeWidth: `4px`,
              '--i': `11s`,
            } as CustomCSSProp
          }
        />
        <path
          pathLength="1"
          d="M595.148,80.507C591.603,80.507 589.404,82.345 587.533,85.069C586.45,81.492 583.89,80.507 581.265,80.507C577.818,80.507 575.619,82.575 573.749,85.234L573.42,81.229L569.088,81.229L569.088,115.789L574.175,115.789L574.175,88.942C576.079,85.988 578.081,84.807 580.214,84.807C582.709,84.807 582.873,86.612 582.873,90.944L582.873,115.789L588.026,115.789L588.026,88.942C589.929,85.988 591.997,84.807 594.065,84.807C596.559,84.807 596.723,86.612 596.723,90.944L596.723,115.789L601.843,115.789L601.843,90.058C601.843,82.083 598.43,80.507 595.148,80.507Z"
          style={
            {
              fillRule: `nonzero`,
              stroke: `var(--accent)`,
              strokeWidth: `4px`,
              '--i': `12s`,
            } as CustomCSSProp
          }
        />
        <path
          pathLength="1"
          d="M617.531,73.221C619.5,73.221 621.076,71.744 621.076,69.742C621.076,67.707 619.5,66.198 617.531,66.198C615.431,66.198 613.921,67.707 613.921,69.742C613.921,71.744 615.431,73.221 617.531,73.221ZM631.053,73.221C633.121,73.221 634.664,71.744 634.664,69.742C634.664,67.707 633.121,66.198 631.053,66.198C629.051,66.198 627.509,67.707 627.509,69.742C627.509,71.744 629.051,73.221 631.053,73.221ZM636.501,108.241L636.501,91.666C636.501,84.84 632.169,80.507 623.57,80.507C620.223,80.507 616.481,81.098 612.28,82.674L613.724,86.842C617.301,85.595 620.419,85.069 622.717,85.069C627.87,85.069 630.955,86.94 630.955,91.929L630.955,94.817L625.868,94.817C615.365,94.817 609.654,98.756 609.654,105.878C609.654,112.311 613.888,116.544 620.813,116.544C625.277,116.544 629.183,114.903 631.644,111.687C632.629,114.772 634.992,116.151 637.978,116.544L639.324,112.672C637.388,112.081 636.501,111.031 636.501,108.241ZM622.225,112.343C617.728,112.343 615.562,110.112 615.562,105.812C615.562,101.381 618.352,98.559 625.966,98.559L630.955,98.559L630.955,107.453C628.887,110.538 625.638,112.343 622.225,112.343Z"
          style={
            {
              fillRule: `nonzero`,
              stroke: `var(--accent)`,
              strokeWidth: `4px`,
              '--i': `13s`,
            } as CustomCSSProp
          }
        />
        <path
          pathLength="1"
          d="M657.014,66.624L651.5,67.314L651.5,115.789L657.014,115.789L657.014,66.624ZM680.087,81.229L672.932,81.229L657.638,96.918L674.639,115.789L681.892,115.789L664.53,96.786L680.087,81.229Z"
          style={
            {
              fillRule: `nonzero`,
              stroke: `var(--accent)`,
              strokeWidth: `4px`,
              '--i': `14s`,
            } as CustomCSSProp
          }
        />
        <path
          pathLength="1"
          d="M703.619,65.049C701.289,65.049 699.648,66.723 699.648,68.889C699.648,71.121 701.289,72.827 703.619,72.827C706.081,72.827 707.656,71.121 707.656,68.889C707.656,66.723 706.081,65.049 703.619,65.049ZM708.017,81.229L692.165,81.229L692.165,85.595L702.504,85.595L702.504,111.424L691.837,111.424L691.837,115.789L717.765,115.789L717.765,111.424L708.017,111.424L708.017,81.229Z"
          style={
            {
              fillRule: `nonzero`,
              stroke: `var(--accent)`,
              strokeWidth: `4px`,
              '--i': `15s`,
            } as CustomCSSProp
          }
        />
      </g>
      <g
        transform="matrix(1,0,0,1,-198.947,-5.68434e-14)"
        className="bracket-left"
      >
        <g transform="matrix(1.40172,0,0,0.826641,-79.9203,52.0077)">
          <path
            pathLength={1}
            d="M198.947,300L272.662,160.526L198.947,300Z"
            style={{
              fill: `none`,
              stroke: `var(--purple)`,
              strokeWidth: `6.95px`,
              strokeLinecap: `round`,
              strokeMiterlimit: 1.5,
            }}
          />
        </g>
        <g transform="matrix(-1.40172,0,0,0.826641,581.142,167.302)">
          <path
            pathLength={1}
            d="M198.947,300L272.662,160.526L198.947,300Z"
            style={{
              fill: `none`,
              stroke: `var(--purple)`,
              strokeWidth: `6.95px`,
              strokeLinecap: `round`,
              strokeMiterlimit: 1.5,
            }}
          />
        </g>
      </g>
      <g
        transform="matrix(1,0,0,1,222.463,-5.68434e-14)"
        className="bracket-right"
      >
        <g transform="matrix(-1.40172,0,0,0.826641,856.405,52.0077)">
          <path
            pathLength={1}
            d="M198.947,300L272.662,160.526L198.947,300Z"
            style={{
              fill: `none`,
              stroke: `var(--purple)`,
              strokeWidth: `6.95px`,
              strokeLinecap: `round`,
              strokeMiterlimit: 1.5,
            }}
          />
        </g>
        <g transform="matrix(1.40172,0,0,0.826641,195.343,167.302)">
          <path
            pathLength={1}
            d="M198.947,300L272.662,160.526L198.947,300Z"
            style={{
              fill: `none`,
              stroke: `var(--purple)`,
              strokeWidth: `6.95px`,
              strokeLinecap: `round`,
              strokeMiterlimit: 1.5,
            }}
          />
        </g>
      </g>
      <g className="l-big" transform="matrix(1,0,0,1,179.492,235.054)">
        <path
          d="M113.17,115.789L170.918,115.789L172.395,104.343L126.019,104.343L126.019,14.103L113.17,14.103L113.17,115.789Z"
          style={{
            fill: `none`,
            fillRule: `nonzero`,
            stroke: `var(--accent)`,
            strokeWidth: `7px`,
          }}
        />
        <g transform="matrix(144,0,0,144,93.1579,115.789)">
          <path
            d="M0.139,-0L0.54,-0L0.55,-0.079L0.228,-0.079L0.228,-0.706L0.139,-0.706L0.139,-0Z"
            style={{ fill: `var(--accent)`, fillRule: `nonzero` }}
          />
        </g>
      </g>
      <g className="r-big" transform="matrix(1,0,0,1,337.669,235.054)">
        <path
          d="M172.543,42.608C172.543,23.851 159.398,14.103 134.29,14.103L108.149,14.103L108.149,115.789L120.998,115.789L120.998,72.146L134.733,72.146L162.499,115.789L177.859,115.789L147.73,70.669C161.687,67.273 172.543,57.894 172.543,42.608ZM158.807,42.608C158.807,56.713 150.389,62.103 135.767,62.103L120.998,62.103L120.998,24.294L135.767,24.294C151.423,24.294 158.807,29.611 158.807,42.608Z"
          style={{
            fill: `var(--accent)`,
            fillRule: `nonzero`,
            stroke: `var(--accent)`,
            strokeWidth: `7px`,
          }}
        />
      </g>
      <g
        className="slash"
        transform="matrix(1.62304,-0.233229,0.244237,1.69965,-280.327,-97.5099)"
      >
        <path
          pathLength={1}
          d="M438.149,195.789L312.118,389.474"
          style={{
            fill: `none`,
            stroke: `var(--purple)`,
            strokeWidth: `2.98px`,
            strokeLinecap: `round`,
            strokeMiterlimit: 1.5,
          }}
        />
      </g>
    </svg>
  </LogoWrapper>
);
