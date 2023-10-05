import { useEffect, useState } from 'react';
import { Layout, Box } from './Styled';
import { useNavigate } from 'react-router-dom';

export const Menu = () => {
  const navigate = useNavigate();
  const [isLogined, setIsLogined] = useState<boolean>(false);

  const handleOnClickMenuButton = (menu: string) => {
    navigate(`/penstory/${menu}`);
  };

  useEffect(() => {
    setIsLogined(true);
  }, []);

  return (
    <Layout>
      <Box>
        {/* 메뉴 */}
        {/* 로그인 여부 확인 */}
        {isLogined ? <>{/* 로그인 메뉴 */}</> : <>{/* 비로그인 메뉴 */}</>}
      </Box>
    </Layout>
  );
};
