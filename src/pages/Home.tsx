import { ColumnLayout, Header, RowLayout } from '../components';
import { TemplateLayout } from '../components/common/Layout';

const Home = () => {
  return (
    <TemplateLayout>
      <ColumnLayout>
        <Header />
      </ColumnLayout>
      <RowLayout></RowLayout>
    </TemplateLayout>
  );
};

export default Home;
