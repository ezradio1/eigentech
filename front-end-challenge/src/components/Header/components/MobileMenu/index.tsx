import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Input, MenuProps, Space, Typography } from "antd";
import { useUserContext } from "context/UserContext";
import useIndex from "./index.hook";
import * as css from "./index.styles";
import { MobileMenuProps } from "./index.types";

const { Search } = Input;
const { Paragraph } = Typography;

const MobileMenu = (props: MobileMenuProps) => {
  const { visible, setVisible, handleAction } = useIndex();
  const { handleSearch, handleLogout, handleLogin, handleSignup } = props;
  const { loggedUser } = useUserContext();
  const { name } = loggedUser || {};

  const itemsUserLoggedIn: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Search
          placeholder='Find your favorite news'
          onSearch={(value) => handleAction(() => handleSearch(value))}
        />
      ),
    },
    {
      key: "2",
      label: "Logout",
      onClick: () => handleAction(handleLogout),
    },
  ];
  const itemsUserNotLoggedIn: MenuProps["items"] = [
    {
      key: "1",
      label: "Login",
      onClick: () => handleAction(handleLogin),
    },
    {
      key: "2",
      label: "Sign Up",
      onClick: () => handleAction(handleSignup),
    },
  ];

  return (
    <Dropdown
      open={visible}
      menu={{ items: name ? itemsUserLoggedIn : itemsUserNotLoggedIn }}
    >
      <Paragraph onClick={() => setVisible(!visible)} className={css.wrapper}>
        <Space>
          {name ? (
            <Paragraph ellipsis className={css.paragraph}>
              Hello, <span className={css.username}>{name}</span>
            </Paragraph>
          ) : (
            "Menu"
          )}
          <DownOutlined />
        </Space>
      </Paragraph>
    </Dropdown>
  );
};

export default MobileMenu;
