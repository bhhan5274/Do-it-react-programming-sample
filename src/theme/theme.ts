import baseStyled, { ThemedStyledInterface } from 'styled-components';
import bright from './bright';

export const defaultTheme = bright;

export type Theme = typeof defaultTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
