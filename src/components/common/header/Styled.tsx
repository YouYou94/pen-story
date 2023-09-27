import styled from '@emotion/styled';

export const Layout = styled.header`
  height: 4rem;

  display: flex;
`;

export const Box = styled.div<{ justify_Content?: string }>`
  flex: 1;

  display: flex;
  justify-content: ${(prop) => prop.justify_Content};
  align-items: center;

  padding: 2rem;
`;
