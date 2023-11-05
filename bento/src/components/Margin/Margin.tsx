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
  negative?: boolean;
};

const Margin = styled.div<Props>(
  ({ top, bottom, left, right, horizontal, vertical, all, negative }) => {
    const negate = (value: string) => (negative ? `-${value}` : value);
    return css`
      ${useResponsiveStyle(
        "margin-left",
        useSpaceValue(horizontal || left),
        negate
      )}
      ${useResponsiveStyle(
        "margin-right",
        useSpaceValue(horizontal || right),
        negate
      )}
      ${useResponsiveStyle(
        "margin-top",
        useSpaceValue(vertical || top),
        negate
      )}
      ${useResponsiveStyle(
        "margin-bottom",
        useSpaceValue(vertical || bottom),
        negate
      )}
      ${useResponsiveStyle("margin", useSpaceValue(all), negate)}
    `;
  }
);

export { Margin };
