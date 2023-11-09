import styled, { css } from "styled-components";
import { stripUnit } from "../../utils/units";
import { responsiveValueArray, useResponsiveStyle } from "../../utils";

const negative = (value: string) => `-${value}`;

type Props = {
  isContainer?: boolean;
};

const Row = styled.div<Props>(({ theme: { sizes }, isContainer }) => {
  const halfGutter = responsiveValueArray(sizes.gutter).map((g: string) => {
    const { value, unit } = stripUnit(g);
    return value / 2 + unit;
  });

  return css`
    display: flex;
    box-sizing: border-box;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 100%;
    width: ${sizes.container};
    ${useResponsiveStyle("padding-left", halfGutter)}
    ${useResponsiveStyle("padding-right", halfGutter)}
    ${useResponsiveStyle("margin-bottom", sizes.gutter, negative)}

    & + & {
      ${useResponsiveStyle("margin-top", sizes.gutter)}
    }

    ${!isContainer
      ? css`
          ${useResponsiveStyle("margin-left", sizes.gutter, negative)}
          ${useResponsiveStyle("margin-right", sizes.gutter, negative)}
          width: auto;
          max-width: none;
        `
      : ""}
  `;
});

export { Row };
