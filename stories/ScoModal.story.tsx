import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Modal from "../components/sco/Modal";

const stories = storiesOf('Sco/Modal', module);

const info = withInfo({ inline: true, source: true });


stories.add('Modal', info(() => {
 return (
   <div>
    <Modal
      content={"content below title"}
      title={"Title"}
      imgsrc="none.png"
      callbackClose={()=>{console.log("Not implemented")}}
    />
   </div>
 );
}));
