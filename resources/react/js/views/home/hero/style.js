import styled from '@emotion/styled';
import tw from 'tailwind.macro';

export const CanvasContainer = styled('div')`
  ${tw`w-screen h-screen relative flex justify-center items-center`}
`;

export const Canvas = styled('canvas')`
  ${tw`w-full h-full max-w-full absolute top-0 left-0`}
`;
