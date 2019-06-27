import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Receipt from "../components/sco/Receipt";
import StoryboardContainer from "../components/sco/StoryboardContainer";

const stories = storiesOf('Sco/Receipt', module);

const info = withInfo({ inline: true, source: true });


stories.add('Receipt Initial', info(() => {
 return (
   <StoryboardContainer>
     <div style={{display: "relative"}}>
      <Receipt isInit={true}/>
     </div>
   </StoryboardContainer>
 );
}));

stories.add('Receipt', info(() => {
 return (
  <StoryboardContainer>
    <div style={{display: "relative"}}>
      <Receipt/>
    </div>
  </StoryboardContainer>
 );
}));

stories.add('Receipt Complete', info(() => {
 return (
  <StoryboardContainer>
     <div style={{display: "relative"}}>
      <Receipt isComplete={true}/>
     </div>
  </StoryboardContainer>
 );
}));

stories.add('Receipt show in center', info(() => {
 return (
  <StoryboardContainer>
   <div style={{display: "relative"}}>
    <Receipt isComplete={true} isCenter={true}/>
   </div>
  </StoryboardContainer>
 );
}));
