import FlexLayout from "components/FlexLayout";
import useIndex from "./index.hook";
import * as css from "./index.styles";

import { Col, Row, Typography } from "antd";
import ErrorState from "components/ErrorState";
import LoadingState from "components/LoadingState";
import NewsCard from "components/NewsCard";
import convertDate from "helpers/convertDate";

const { Title, Paragraph } = Typography;

const Headline = () => {
  const { data, loading, error, handleClickNews } = useIndex();
  const firstData = data?.articles[0];

  const { urlToImage, title, author, url, publishedAt, content, source } =
    firstData || {};

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState />;
  }

  return (
    <FlexLayout direction='column' gap='8px' align='start'>
      <Title level={1}>HEADLINE</Title>
      <Row gutter={{ md: 64, lg: 32 }}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <a
            className={css.image(urlToImage || "")}
            href={url}
            target='_blank'
            rel='noreferrer'
          >
            <Title level={3} className={css.title}>
              {title}
            </Title>
          </a>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Title level={3}>{title}</Title>
          <Paragraph className={css.authorPublishDate}>
            {author || "No Author"} - {convertDate(publishedAt)} -{" "}
            {source?.name}
          </Paragraph>

          <Paragraph className={css.content}>{content}</Paragraph>
        </Col>
      </Row>

      <FlexLayout direction='column' align='start' className={css.otherNews}>
        <h1>Other Top News</h1>
        <Row gutter={[12, 12]}>
          {data?.articles.map((article, key) => {
            if (key > 0) {
              return (
                <Col key={key} xs={24} md={12} lg={8} xl={6}>
                  <NewsCard
                    key={key}
                    urlToImage={article.urlToImage || ""}
                    title={article.title}
                    author={article.author || ""}
                    sourceName={source?.name || ""}
                    content={article.content || ""}
                    publishedAt={convertDate(article.publishedAt)}
                    onClick={() => handleClickNews(article)}
                  />
                </Col>
              );
            }
            return null;
          })}
        </Row>
      </FlexLayout>
    </FlexLayout>
  );
};

export default Headline;
