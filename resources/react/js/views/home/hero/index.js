import React from 'react';
import { observer } from 'mobx-react';

import { CanvasContainer, HeroText } from './style';
import Canvas from './heroCanvas';

const Hero = () => {
  return (
    <CanvasContainer>
      {/* <Canvas /> */}
      <HeroText>Welcome. My name is <br/> Zach</HeroText>
    </CanvasContainer>
  );
};

export default observer(Hero);
