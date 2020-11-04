import { css, createGlobalStyle, keyframes } from "styled-components";
import reset from "./Reset";

/* ===============================================
#  color setting
=============================================== */
export const colors = {};

colors.background = "#fffeff";
colors.text = "#617e8c";

colors.paleGray = "#f9f9f9";
colors.lightGray = "#ddd";
colors.gray = "#a9b8bc";

colors.primary = "#feaa2e";
colors.secondary = "#f96281";
colors.danger = "#FF5C55";
colors.success = "#43d36c";
colors.warn = "#feaa2e";
colors.info = "#2490eb";

/* ===============================================
#  rgba function
=============================================== */
export function rgba(hex, alpha = 1) {
  let r = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  let c = null;
  if (r) {
    c = r.slice(1, 4).map((x) => parseInt(x, 16));
  }
  r = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
  if (r) {
    c = r.slice(1, 4).map((x) => 0x11 * parseInt(x, 16));
  }
  if (!c) {
    return null;
  }
  return `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${alpha})`;
}

/* ===============================================
#  sizes
=============================================== */
const sizes = () => {
  let str = "";
  for (let i = 1; i <= 10; i++) {
    str += `
      .mt-${i * 5} {
        margin-top: ${5 * i}px;
      }
      .mr-${i * 5} {
        margin-right: ${5 * i}px;
      }
      .mb-${i * 5} {
        margin-bottom: ${5 * i}px;
      }
      .ml-${i * 5} {
        margin-left: ${5 * i}px;
      }
      .pt-${i * 5} {
        padding-top: ${5 * i}px;
      }
      .pr-${i * 5} {
        padding-right: ${5 * i}px;
      }
      .pb-${i * 5} {
        padding-bottom: ${5 * i}px;
      }
      .pl-${i * 5} {
        padding-left: ${5 * i}px;
      }
      .w${i * 10}p {
        width: ${10 * i}%;
      }
      .w${i * 100} {
        width: 100px * $i;
      }
    `;
  }
  return css`
    ${str}
  `;
};

/* ===============================================
#  set css variables
=============================================== */
function setColor() {
  let styles = "";
  for (const key in colors) {
    styles += `--${key}: ${colors[key]};`;
  }
  return css`
    :root {
      ${styles}
    }
  `;
}
/* ===============================================
#  mixins
=============================================== */
export const fadeIn = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
  }
`;

/* ===============================================
#  font setting
=============================================== */
const font = css`
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
    "Hiragino Sans", Meiryo, sans-serif;
  word-wrap: break-word;
  word-break: break-all;
  -webkit-font-kerning: normal;
  font-kerning: normal;
  -moz-font-feature-settings: "palt" 1;
  -webkit-font-feature-settings: "palt" 1;
  font-feature-settings: "palt" 1;
  font-variant-ligatures: no-common-ligatures;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: unset;
  text-rendering: auto;
  -webkit-text-stroke: 1px transparent;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  letter-spacing: 0.08em;
  font-weight: 400;
  color: var(--text);
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 2dppx) {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

/* ===============================================
#  global style
=============================================== */
const GlobalStyle = createGlobalStyle`
  ${reset}
  ${setColor}
  ${sizes}
  body {
    ${font}
    font-size: 15px;
    line-height: 1.5;
    padding: 0;
    margin: 0;
    min-height: 100vh;
    position: relative;
    background: var(--background);
    a {
      color: var(--text);
    }
  }
  * {
    box-sizing: boreder-box;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  *:before, *:after {
    box-sizing: border-box;
  }
  input, button, textarea, button, select {
    ${font}
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background: none;
    line-height: 1.5;
    font-size: 15px;
    &:focus {
      outline: none;
    }
    ::placeholder {
      color: ${colors.gray};
    }
  }
  .flex {
    display: flex;
    &.center {
      align-items: center;
      justify-content: center;
    }
    &.row {
      flex-direction: row;
    }
    &.column {
      flex-direction: column;
    }
    &.space {
      justify-content: space-between;
    }
  }
  .mt-auto {
    margin-top: auto;
  }
  .mr-auto {
    margin-left: auto;
  }
  .mb-auto {
    margin-bottom: auto;
  }
  .ml-auto {
    margin-left: auto;
  }
  .fade-in {
    opacity: 0;
    visibility: hidden;
    animation: ${fadeIn} 0.4s ease-in-out forwards;
  }
  h1 {
    font-weight: 600;
    padding: 30px 0;
    font-size: 1.7em;
    span {
      color: var(--lightGray);
      padding-right: 5px;
    }
  }
  /* ===============================================
  # smart phone
  =============================================== */
  @media screen and (max-width: 480px) {
    .pc {
      display: none !important;
    }
  }

  /* ===============================================
  # pc
  =============================================== */
  @media screen and (min-width: 480px) {
    .sp {
      display: none !important;
    }
  }
`;

export default GlobalStyle;
