import styled, { css } from "styled-components";
import { useResponsiveStyle } from "../../utils";
import { SpaceValue, useSpaceValue } from "../../utils/space";

const Switcher = styled.div<{
  spaceBetween: SpaceValue;
  threshold: string;
}>(
  ({ spaceBetween, threshold }) => css`
    display: flex;
    flex-wrap: wrap;
    ${useResponsiveStyle("gap", useSpaceValue(spaceBetween))}

    > * {
      flex-grow: 1;
      flex-basis: calc((${threshold} - 100%) * 999);
    }
  `
);

export { Switcher };
