import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const H1 = styled.h1<HeadingProps>`
  ${({ theme, inverse }) => css`
    font-size: ${theme.size.h1}px;
    margin-top: ${theme.unit * 2}px;
    margin-bottom: ${theme.unit * 4}px;
    color: ${inverse ? 'white' : ''};
  `}
`;

const H2 = styled.h2<HeadingProps>`
  ${({ theme, inverse }) => css`
    font-size: ${theme.size.h2}px;
    margin-top: ${theme.unit * 2}px;
    margin-bottom: ${theme.unit * 4}px;
    color: ${inverse ? 'white' : ''};
  `}
`;

const H3 = styled.h3<HeadingProps>`
  ${({ theme, inverse }) => css`
    font-size: ${theme.size.h3}px;
    margin-top: ${theme.unit * 1.5}px;
    margin-bottom: ${theme.unit * 2}px;
    color: ${inverse ? 'white' : ''};
  `}
`;

const H4 = styled.h4<HeadingProps>`
  ${({ theme, inverse }) => css`
    font-size: ${theme.size.xg}px;
    margin-top: ${theme.unit}px;
    margin-bottom: ${theme.unit * 2}px;
    color: ${inverse ? 'white' : ''};
  `}
`;

const H5 = styled.h5<HeadingProps>`
  ${({ theme, inverse }) => css`
    font-size: ${theme.size.md}px;
    margin-top: ${theme.unit}px;
    margin-bottom: ${theme.unit * 2}px;
    color: ${inverse ? 'white' : ''};
  `}
`;

const H6 = styled.h6<HeadingProps>`
  ${({ theme, inverse }) => css`
    font-size: ${theme.size.md}px;
    margin-top: ${theme.unit}px;
    margin-bottom: ${theme.unit}px;
    color: ${inverse ? 'white' : ''};
  `}
`;

const headingTags = [H1, H2, H3, H4, H5, H6];

export interface HeadingProps {
  level?: number;
  inverse?: boolean;
}

const Heading: FC<HeadingProps> = ({ children, level = 1, inverse }) => {
  const HeadingTag = headingTags[level - 1];

  return <HeadingTag inverse={inverse}>{children}</HeadingTag>;
};

export default Heading;
