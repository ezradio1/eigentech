import { Card, Image, Typography } from "antd";
import dayjs from "dayjs";
import { noop } from "utils/noop";
import NoImage from "./components/NoImage";
import { isImage } from "./index.helpers";
import * as css from "./index.styles";
import { NewsCardProps } from "./index.types";

const { Paragraph } = Typography;
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
    <Image preview={false} src={urlToImage} alt='article' height={200} />
  ) : (
    <NoImage />
  );

  return (
    <Card className={css.articleCard} cover={cover} onClick={onClick}>
      <Paragraph strong className={css.articleTitle}>
        {title}
      </Paragraph>
      <Paragraph className={css.articleInfo} strong>
        {author || "No Author"}
      </Paragraph>
      <Paragraph className={css.articleInfo} strong>
        {dayjs(publishedAt).format("DD MMMM YYYY")} - {sourceName}
      </Paragraph>
      <Paragraph className={css.articleContent}>{content}</Paragraph>
    </Card>
  );
};

export default NewsCard;
