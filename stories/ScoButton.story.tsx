import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from "../components/sco/Button";
import StoryboardContainer from "../components/sco/StoryboardContainer";

const stories = storiesOf('Sco/Button', module);

const info = withInfo({ inline: true, source: true });

stories.add('Buttons', info(() => {
 return (
   <StoryboardContainer>
    <div style={{height:"100px"}}>
      <Button href={"sample"} color="PRIMARY">
      Primary
      </Button>
    </div>
    <div style={{height:"100px"}}>
      <Button href={"sample"} color="OK">
      Okay
      </Button>
    </div>
    <div style={{height:"100px"}}>
      <Button href={"sample"} color="RETURN">
      Return
      </Button>
    </div>
    <div style={{height:"100px"}}>
      <Button href={"sample"} color="BLACK">
      Black
      </Button>
    </div>
    <div style={{height:"100px"}}>
      <Button href={"sample"} color="OK" isDisabled={true}>
      Disabled OK
      </Button>
    </div>
    <div style={{height:"100px"}}>
      <Button href="secondpage" color={'OK'} isBig={true}>
        <div style={{textAlign: "left"}}>
          Click Here<br/><span style={{fontSize: "0.6rem"}}>to Process Scanned Items</span>
        </div>
      </Button>
    </div>
   </StoryboardContainer>
 );
}));

stories.add('Icon Buttons', info(() => {
 return (
   <StoryboardContainer>
    <div style={{height:"100px"}}>
      <Button href="#" color={'PRIMARY'} isBig={true} icon={"ic_magnifying.png"} isLeft={true}>
      On the left
      </Button>
    </div>
    <div style={{height:"100px"}}>
      <Button href="#" color={'OK'} isBig={false} icon={"ic_magnifying.png"}>
      As it is
      </Button>
    </div>
    <div style={{height:"100px"}}>
      <Button href="secondpage" color={'BLACK'} isBig={true} icon={"ic_clickhere.png"} isLeft={true}>
        <div style={{textAlign: "left"}}>
          Click Here<br/><span style={{fontSize: "0.6rem"}}>to Process Scanned Items</span>
        </div>
      </Button>
    </div>
   </StoryboardContainer>
 );
}));
