import Typography from 'typography';
import fairyGatesTheme from 'typography-theme-fairy-gates';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import tw from 'tailwind.macro';

const typography = new Typography(fairyGatesTheme);

typography.toString();

export const GlobalStyles = css`
  ${typography.toString()};
`;

export const MainContainer = styled('div')`
  ${tw`flex min-h-screen`};
`;
