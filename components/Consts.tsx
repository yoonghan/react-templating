import getConfig from 'next/config';

let _OVERRIDE = "true"; //default setting according to next export
/**[1. S] These codes are to make possible for next export/next dev **/
if((getConfig && getConfig() && getConfig().publicRuntimeConfig) || process.env.NODE_ENV === "STORYBOOK") {
  _OVERRIDE = "false";
}
/**[1. E] **/

export const OVERRIDE_URL=(_OVERRIDE === "true");
export const GENERAL_IMG_FOLDER="/img/";
export const GENERAL_CSS_FOLDER="/css/";
export const GENERAL_STYLE=(
  <style jsx global>
  {`
    html {
      font-size: 42px;
    }
    body {
      font-family: Roboto;
      padding: 0;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    body::before {
      // content: 'Carrefour Screen Design';
      // margin-bottom: 10px;
      // text-align: center;
      // font-size: 0.7rem;
    }
    body::after {
      content: 'Supports Chrome, Safari and FireFox browsers only.';
      font-size: 0.5rem;
      font-weight: bold;
      text-align: center;
      padding-top: 10px;
    }
    div#__next {
      height: 768px;
      width: 1024px;
      position: relative;
      border: 1px solid #AAAAAA;
      align-self: center;
    }
  `}
  </style>
);
