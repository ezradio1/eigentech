import { Col, Row } from "antd";
import ErrorState from "components/ErrorState";
import FlexLayout from "components/FlexLayout";
import LoadingState from "components/LoadingState";
import NewsCard from "components/NewsCard";
import { Helmet } from "react-helmet";
import useIndex from "./index.hook";
import * as css from "./index.styles";

const SearchResultPage = () => {
  const { data, loading, error, searchKey, handleClickNews } = useIndex();

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState />;
  }
  return (
    <FlexLayout direction='column' padding='24px 0' align='start'>
      <Helmet>
        <title>E-News | Search Result Page</title>
      </Helmet>
      <h2 className={css.searchResultTitle}>
        Search result for <span>'{searchKey}'</span>
      </h2>
      <FlexLayout gap='16px' align='start' wrap='wrap'>
        <Row gutter={[12, 12]}>
          {data?.articles.map((article, key) => (
            <Col
              key={key}
              className='gutter-row'
              xs={24}
              sm={12}
              md={12}
              lg={8}
              xl={6}
            >
              <NewsCard
                urlToImage={article.urlToImage || ""}
                title={article.title}
                author={article.author || ""}
                sourceName={article.source?.name || ""}
                content={article.content || ""}
                publishedAt={article.publishedAt || ""}
                onClick={() => handleClickNews(article)}
              />
            </Col>
          ))}
        </Row>
      </FlexLayout>
    </FlexLayout>
  );
};

export default SearchResultPage;
