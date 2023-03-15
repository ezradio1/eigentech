import React from "react";
import { Col, Image, Row, Typography } from "antd";
import ErrorState from "components/ErrorState";
import FlexLayout from "components/FlexLayout";
import LoadingState from "components/LoadingState";
import convertDate from "helpers/convertDate";
import { Helmet } from "react-helmet";
import useIndex from "./index.hook";
import * as css from "./index.styles";

const { Title, Paragraph } = Typography;
const NewsDetail = () => {
  const { data, error, loading } = useIndex();
  const {
    urlToImage,
    title,
    author,
    url,
    description,
    publishedAt,
    content,
    source,
  } = data || {};

  if (loading) return <LoadingState />;

  if (error) return <ErrorState />;

  return (
    <FlexLayout direction='column' padding='24px 0' align='start'>
      <Helmet>
        <title>E-News | News Detail</title>
      </Helmet>
      <Row gutter={{ sm: 32, lg: 32 }}>
        <Col xs={24} sm={24} lg={12}>
          <Image
            height={400}
            src={urlToImage || ""}
            alt={urlToImage || ""}
            className={css.newsImage}
          />
        </Col>
        <Col xs={24} sm={24} lg={12}>
          <Title level={2}>{title}</Title>
          <hr className={css.title} />
          <div>
            <Paragraph className={css.infoDetail} strong>
              Author: {author}
            </Paragraph>
            <Paragraph className={css.infoDetail} strong>
              Published Date: {convertDate(publishedAt)}
            </Paragraph>
            <Paragraph className={css.infoDetail} strong>
              Source: {source.name}
            </Paragraph>
            <Paragraph className={css.infoDetail} strong>
              Source Url:{" "}
              <a href={url} target='_blank' rel='noreferrer'>
                {url}
              </a>
            </Paragraph>
          </div>
          <Paragraph className={css.description}>{description}</Paragraph>
        </Col>
      </Row>
      <Paragraph className={css.description}>{content}</Paragraph>
    </FlexLayout>
  );
};

export default NewsDetail;
