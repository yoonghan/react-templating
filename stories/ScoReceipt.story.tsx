import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Receipt from "../components/sco/Receipt";

const stories = storiesOf('Sco/Receipt', module);

const info = withInfo({ inline: true, source: true });


stories.add('Receipt Initial', info(() => {
 return (
   <div style={{display: "relative"}}>
    <Receipt isInit={true}/>
   </div>
 );
}));

stories.add('Receipt', info(() => {
 return (
   <div style={{display: "relative"}}>
    <Receipt/>
   </div>
 );
}));

stories.add('Receipt Complete', info(() => {
 return (
   <div style={{display: "relative"}}>
    <Receipt isComplete={true}/>
   </div>
 );
}));

stories.add('Receipt show in center', info(() => {
 return (
   <div style={{display: "relative"}}>
    <Receipt isComplete={true} isCenter={true}/>
   </div>
 );
}));
