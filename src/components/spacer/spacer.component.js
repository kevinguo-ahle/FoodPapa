import React from "react";
import styled, { useTheme } from "styled-components/native";

const positionVariant = {
  top: "marginTop",
  bottom: "marginBottom",
  left: "marginLeft",
  right: "marginRight",
};

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const spaceValue = theme.space[sizeIndex];
  return `${property}: ${spaceValue}`;
};

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};
