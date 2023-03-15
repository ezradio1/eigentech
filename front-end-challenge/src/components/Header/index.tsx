import { Button, Input, Layout, Typography } from "antd";
import Container from "components/Container";
import FlexLayout from "components/FlexLayout";
import ModalLogin from "components/ModalLogin";
import ModalSignUp from "components/ModalSignUp";
import { useUserContext } from "context/UserContext";
import useResponsive from "hooks/useResponsive";
import MobileMenu from "./components/MobileMenu";
import { MODAL_LOGIN, MODAL_SIGNUP } from "./index.constants";
import useIndex from "./index.hook";

import * as css from "./index.styles";

const { Header } = Layout;
const { Paragraph } = Typography;
const { Search } = Input;

const Navbar = () => {
  const {
    handleSearch,
    modal,
    setModal,
    handleLogout,
    loading,
    handleClickLogo,
  } = useIndex();
  const { loggedUser } = useUserContext();
  const { username, name } = loggedUser || {};
  const isLogin = username;

  const { isMobile } = useResponsive();

  return (
    <Header className={css.header}>
      <Container>
        <ModalLogin
          title='Login'
          show={modal === MODAL_LOGIN}
          onCloseModal={() => setModal("")}
        />
        <ModalSignUp
          title='Sign Up'
          show={modal === MODAL_SIGNUP}
          onCloseModal={() => setModal("")}
        />
        <FlexLayout justify='space-between' width='100%' height='100%'>
          <Paragraph onClick={handleClickLogo} className={css.brandName} strong>
            EIGEN NEWS
          </Paragraph>

          {isMobile && (
            <MobileMenu
              handleSearch={handleSearch}
              handleLogout={handleLogout}
              handleLogin={() => setModal(MODAL_LOGIN)}
              handleSignup={() => setModal(MODAL_SIGNUP)}
            />
          )}

          {!isMobile && (
            <FlexLayout height='100%' gap='8px'>
              <Search
                placeholder='Find your favorite news'
                onSearch={handleSearch}
              />
              {isLogin && (
                <FlexLayout gap='8px'>
                  <FlexLayout gap='8px' width='100px' justify='center'>
                    <Paragraph ellipsis>
                      Hello, <span className={css.username}>{name}</span>
                    </Paragraph>
                  </FlexLayout>

                  <Button
                    danger
                    type='primary'
                    onClick={handleLogout}
                    loading={loading}
                  >
                    Logout
                  </Button>
                </FlexLayout>
              )}
              {!isLogin && (
                <>
                  <Button type='default' onClick={() => setModal(MODAL_LOGIN)}>
                    Login
                  </Button>
                  <Button type='primary' onClick={() => setModal(MODAL_SIGNUP)}>
                    Sign Up
                  </Button>
                </>
              )}
            </FlexLayout>
          )}
        </FlexLayout>
      </Container>
    </Header>
  );
};

export default Navbar;
