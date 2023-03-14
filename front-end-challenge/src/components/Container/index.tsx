import { cx } from "@emotion/css";
import * as css from "./index.styles";
import type { ContainerProps } from "./index.types";

const Container = (props: ContainerProps) => {
  const { children, className = "" } = props;

  return (
    <div className={css.wrapper}>
      <div className={cx(css.container, className)}>{children}</div>
    </div>
  );
};

export default Container;
