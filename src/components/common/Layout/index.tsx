import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100%;

  display: flex;
`;

export const TemplateLayout = styled(Layout)`
  height: 100vh;

  flex-direction: column;
`;

export const RowLayout = styled(Layout)``;

export const ColumnLayout = styled(Layout)`
  flex-direction: column;
`;
