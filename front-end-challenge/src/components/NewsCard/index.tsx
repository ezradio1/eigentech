import { Card } from "antd";
import dayjs from "dayjs";
import { noop } from "utils/noop";
import NoImage from "./components/NoImage";
import { isImage } from "./index.helpers";
import * as css from "./index.styles";
import { NewsCardProps } from "./index.types";

const NewsCard = (props: NewsCardProps) => {
  const {
    urlToImage,
    title,
    author,
    publishedAt,
    sourceName,
    content,
    onClick = noop,
  } = props;

  const cover = isImage(urlToImage) ? (
    <img src={urlToImage} alt='article' height={200} />
  ) : (
    <video width='100' height='200' controls>
      <source src={urlToImage} type='video/mp4' />
    </video>
  );
  return (
    <Card
      className={css.articleCard}
      cover={urlToImage ? cover : <NoImage />}
      onClick={onClick}
    >
      <p className={css.articleTitle}>{title}</p>
      <p className={css.articleInfo}>{author || "No Author"}</p>
      <p className={css.articleInfo}>
        {dayjs(publishedAt).format("DD MMMM YYYY")} - {sourceName}
      </p>
      <p className={css.articleContent}>{content}</p>
    </Card>
  );
};

export default NewsCard;
