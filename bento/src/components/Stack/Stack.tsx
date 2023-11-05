import styled, { css } from "styled-components";
import { useResponsiveStyle } from "../../utils";
import { SpaceValue, useSpaceValue } from "../../utils/space";

const Stack = styled.div<{
  spaceBetween: SpaceValue;
}>(
  ({ spaceBetween }) => css`
    > * + * {
      ${useResponsiveStyle("margin-top", useSpaceValue(spaceBetween))}
    }
  `
);

export { Stack };
