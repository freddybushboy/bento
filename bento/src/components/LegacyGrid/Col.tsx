import styled, { css } from "styled-components";
import { stripUnit } from "../../utils/units";
import {
  ResponsiveValue,
  responsiveValueArray,
  useResponsiveStyle,
} from "../../theme";

type Props = {
  span?: ResponsiveValue<number>;
};
const Col = styled.div<Props>(({ theme: { sizes }, span = 12 }) => {
  const halfGutter = responsiveValueArray(sizes.gutter).map((g: string) => {
    const { value, unit } = stripUnit(g);
    return value / 2 + unit;
  });

  const colSize = responsiveValueArray(span).map((v) => `${(v / 12) * 100}%`);

  return css`
    flex: 0 0 auto;
    ${useResponsiveStyle("flex-basis", colSize)}
    ${useResponsiveStyle("max-width", colSize)}
    box-sizing: border-box;
    ${useResponsiveStyle("padding-left", halfGutter)}
    ${useResponsiveStyle("padding-right", halfGutter)}
    ${useResponsiveStyle("margin-bottom", sizes.gutter)}
    width: 100%;
  `;
});

export { Col };
