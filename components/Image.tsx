import * as React from "react";
import * as Consts from "./Consts";

export interface ImageProps {
  imgsrc: string;
  isIndexPage?: boolean;
}

const Image: React.SFC<ImageProps> = ({isIndexPage, imgsrc}) => {
  //Created that this is not in subfolders.
  const adjustIndexFolder = (isIndexPage? (Consts.OVERRIDE_URL?"./static/":""): "");

  return (
    <React.Fragment>
      <img src={`${adjustIndexFolder}${Consts.GENERAL_IMG_FOLDER}${imgsrc}`}/>
    </React.Fragment>
  )
}

export default Image;
