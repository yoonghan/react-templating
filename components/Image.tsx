import * as React from "react";
import * as Consts from "./Consts";

export interface ImageProps {
  imgsrc: string;
  isIndexPage?: boolean;
}

const Image: React.SFC<ImageProps> = ({imgsrc}) => {
  //Created that this is not in subfolders.
  return (
    <React.Fragment>
      <img src={`${Consts.GENERAL_IMG_FOLDER}${imgsrc}`}/>
    </React.Fragment>
  )
}

export default Image;
