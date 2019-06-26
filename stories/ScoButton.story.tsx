import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from "../components/sco/Button";

const stories = storiesOf('Sco/Button', module);

const info = withInfo({ inline: true, source: true });

stories.add('Buttons', info(() => {
 return (
   <div>
    <h1>Buttons</h1>
    <div style={{height:"100px", width:"100px"}}>
      <Button href={"sample"} color="PRIMARY">
      Primary
      </Button>
    </div>
    <div style={{height:"100px", width:"100px"}}>
      <Button href={"sample"} color="OK">
      Okay
      </Button>
    </div>
    <div style={{height:"100px", width:"100px"}}>
      <Button href={"sample"} color="RETURN">
      Return
      </Button>
    </div>
    <div style={{height:"100px", width:"100px"}}>
      <Button href={"sample"} color="BLACK">
      Black
      </Button>
    </div>
   </div>
 );
}));

stories.add('Icon Buttons', info(() => {
 return (
   <div>
    <h1>Buttons</h1>
    <div style={{height:"100px", width:"200px"}}>
      <Button href="#" color={'PRIMARY'} isBig={true} icon={"ic_magnifying.png"} isLeft={true}>
      On the left
      </Button>
    </div>
    <div style={{height:"100px", width:"200px"}}>
      <Button href="#" color={'OK'} isBig={false} icon={"ic_magnifying.png"}>
      As it is
      </Button>
    </div>
   </div>
 );
}));
