import styled, { css } from "styled-components";
import { useResponsiveStyle } from "../../utils";
import { SpaceValue, useSpaceValue } from "../../utils/space";

const Stack = styled.div<{
  spaceBetween: SpaceValue;
  direction?: "row" | "column";
}>(
  ({ spaceBetween, direction = "column" }) => css`
    display: flex;
    flex-direction: ${direction};
    > * + * {
      ${useResponsiveStyle(
        direction === "column" ? "margin-top" : "margin-left",
        useSpaceValue(spaceBetween)
      )}
    }
  `
);

export { Stack };
