import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Modal from "../components/sco/Modal";
import StoryboardContainer from "../components/sco/StoryboardContainer";

const stories = storiesOf('Sco/Modal', module);

const info = withInfo({ inline: true, source: true });


stories.add('Modal', info(() => {
 return (
   <StoryboardContainer>
    <Modal
      content={"content below title"}
      title={"Title"}
      imgsrc="img_helper.png"
      callbackClose={()=>{console.log("Not implemented")}}
    />
   </StoryboardContainer>
 );
}));
