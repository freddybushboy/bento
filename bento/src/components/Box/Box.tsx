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

const Box = styled.div<Props>(
  ({ top, bottom, left, right, horizontal, vertical, all }) => css`
    ${useResponsiveStyle("padding-left", useSpaceValue(horizontal || left))}
    ${useResponsiveStyle("padding-right", useSpaceValue(horizontal || right))}
    ${useResponsiveStyle("padding-top", useSpaceValue(vertical || top))}
    ${useResponsiveStyle("padding-bottom", useSpaceValue(vertical || bottom))}
    ${useResponsiveStyle("padding", useSpaceValue(all))}
  `
);

export { Box };
