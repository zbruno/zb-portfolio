import styled from '@emotion/styled';
import tw from 'tailwind.macro';

export const CanvasContainer = styled('div')`
  ${tw`w-screen h-screen relative flex justify-center items-center`};
  background-color: #2c2e43;

  & > div {
    ${tw`absolute inset-0`};
  }
`;

export const HeroText = styled('h1')`
  ${tw`text-5xl text-center`};
  color: white;

`;
