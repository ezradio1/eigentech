import FlexLayout from "components/FlexLayout";
import Headline from "./components/Headlines";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  return (
    <FlexLayout padding='24px 0' width='100%'>
      <Helmet>
        <title>E-News | Dashboard</title>
      </Helmet>
      <Headline />
    </FlexLayout>
  );
};

export default Dashboard;
