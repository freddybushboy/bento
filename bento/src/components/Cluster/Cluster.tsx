import styled, { css } from "styled-components";
import { useResponsiveStyle } from "../../utils";
import { SpaceValue, useSpaceValue } from "../../utils/space";

const ClusterItem = styled.li``;

const Cluster = styled.ul<{
  spaceBetween: SpaceValue;
}>(
  ({ spaceBetween }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    ${useResponsiveStyle("gap", useSpaceValue(spaceBetween))}
  `
);

export { Cluster, ClusterItem };
