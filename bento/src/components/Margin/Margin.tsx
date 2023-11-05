import styled, { css } from "styled-components";
import { useResponsiveStyle } from "../../utils";
import { SpaceValue, useSpaceValue } from "../../utils/space";

type Props = {
  top?: SpaceValue;
  bottom?: SpaceValue;
  left?: SpaceValue;
  right?: SpaceValue;
  horizontal?: SpaceValue;
  vertical?: SpaceValue;
  all?: SpaceValue;
};

const Margin = styled.div<Props>(
  ({
    theme: { spaceScale, sizes },
    top,
    bottom,
    left,
    right,
    horizontal,
    vertical,
    all,
  }) => {
    return css`
      ${useResponsiveStyle("margin-left", useSpaceValue(horizontal || left))}
      ${useResponsiveStyle("margin-right", useSpaceValue(horizontal || right))}
      ${useResponsiveStyle("margin-top", useSpaceValue(vertical || top))}
      ${useResponsiveStyle("margin-bottom", useSpaceValue(vertical || bottom))}
      ${useResponsiveStyle("margin", useSpaceValue(all))}
    `;
  }
);

export { Margin };
