import styled from "styled-components";

const Container = styled.div<{ containerName?: string }>(
  ({ containerName }) => `
    container-type: inline-size;
    ${containerName ? `container-name: ${containerName};` : ""}
  `
);

export { Container };
