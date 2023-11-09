import styled, { css } from "styled-components";
import { useResponsiveStyle } from "../../utils";
import { SpaceValue, useSpaceValue } from "../../utils/space";

const Grid = styled.div<{
  spaceBetween: SpaceValue;
  min: string;
}>(
  ({ spaceBetween, min }) => css`
    display: grid;
    ${useResponsiveStyle("grid-gap", useSpaceValue(spaceBetween))}

    @supports (width: min(${min}, 100%)) {
      grid-template-columns: repeat(auto-fit, minmax(min(${min}, 100%), 1fr));
    }
  `
);

export { Grid };
