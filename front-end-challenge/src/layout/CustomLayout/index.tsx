import Container from "components/Container";
import Navbar from "components/Header";
import { ROUTES } from "constants/definitions";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as css from "./index.styles";
const CustomLayout = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Container className={css.container}>
          <Switch>
            {ROUTES.map((route, key) => (
              <Route
                key={key}
                exact
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default CustomLayout;
