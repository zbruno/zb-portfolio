import React from 'react';
import { observer } from 'mobx-react';

import { CanvasContainer } from './style';
import Canvas from './heroCanvas';

const Hero = () => {
  return (
    <CanvasContainer>
      <Canvas />
      <h1>Hello</h1>
    </CanvasContainer>
  );
};

export default observer(Hero);
