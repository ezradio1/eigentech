import CustomLayout from "./layout/CustomLayout";
import "./App.css";
import { ConfigProvider } from "antd";
import { PRIMARY } from "constants/colors";
import { UserProvider } from "context/UserContext";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: PRIMARY,
        },
      }}
    >
      <UserProvider>
        <CustomLayout />
      </UserProvider>
    </ConfigProvider>
  );
};

export default App;
