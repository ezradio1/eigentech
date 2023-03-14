import { cx } from "@emotion/css";
import { noop } from "utils/noop";
import * as css from "./index.styles";
import type { FlexLayoutProps } from "./index.types";

const FlexLayout = (props: FlexLayoutProps) => {
  const {
    children,
    justify = "flex-start",
    align = "center",
    gap = "0px",
    width = "fit-content",
    height = "fit-content",
    direction = "row",
    padding = "",
    className = "",
    wrap = "",
    onClick = noop,
  } = props;

  return (
    <div
      onClick={onClick}
      className={cx(
        css.wrapper(
          direction,
          justify,
          align,
          gap,
          width,
          height,
          padding,
          wrap
        ),
        className
      )}
    >
      {children}
    </div>
  );
};

export default FlexLayout;
