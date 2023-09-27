import { Layout, Box } from './Styled';

const LEFT: string = 'left';
const CENTER: string = 'center';
const RIGHT: string = 'right';

export const Header = () => {
  return (
    <Layout>
      <Box justify_Content={LEFT}>{/* Title */}타이틀</Box>
      <Box justify_Content={CENTER}>{/* Search */}검색</Box>
      <Box justify_Content={RIGHT}>{/* Menu */}메뉴</Box>
    </Layout>
  );
};
