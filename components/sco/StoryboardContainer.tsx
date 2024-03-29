import * as React from 'react';
import * as Consts from "../Consts";

const StoryboardContainer: React.SFC<any> = ({children}) => {
  return (
    <React.Fragment>
      <div id="__next">
        {children}
      </div>
      {Consts.GENERAL_STYLE}
      {Consts.GENERAL_STYLE_STORYBOOK}
    </React.Fragment>
  );
}

export default StoryboardContainer;
