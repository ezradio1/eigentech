import { Image } from "antd";
import NotFoundImage from "assets/img/not-found.png";
import * as css from "./index.styles";

const NoImage = () => {
  return (
    <div className={css.wrapper}>
      <Image preview={false} src={NotFoundImage} alt='article' height={200} />
    </div>
  );
};

export default NoImage;
