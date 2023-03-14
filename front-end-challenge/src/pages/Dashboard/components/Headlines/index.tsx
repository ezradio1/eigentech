import FlexLayout from "components/FlexLayout";
import useIndex from "./index.hook";
import * as css from "./index.styles";

import ErrorState from "components/ErrorState";
import LoadingState from "components/LoadingState";
import NewsCard from "components/NewsCard";
import { noop } from "utils/noop";
import convertDate from "helpers/convertDate";

const Headline = () => {
  const { data, loading, error } = useIndex();
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
      <h1>HEADLINE</h1>
      <FlexLayout gap='16px' align='start'>
        <a
          className={css.image(urlToImage || "")}
          href={url}
          target='_blank'
          rel='noreferrer'
        >
          <p className={css.title}>{title}</p>
        </a>

        <FlexLayout direction='column' align='start' width='100%' height='100%'>
          <p className={css.headerTitle}>{title}</p>
          <p className={css.authorPublishDate}>
            {author || "No Author"} - {convertDate(publishedAt)} -{" "}
            {source?.name}
          </p>

          <p className={css.content}>{content}</p>
        </FlexLayout>
      </FlexLayout>

      <FlexLayout direction='column' align='start' className={css.otherNews}>
        <h1>Other Top News</h1>
        <FlexLayout gap='16px' align='start' wrap='wrap'>
          {data?.articles.map((article, key) => {
            if (key > 0) {
              return (
                <NewsCard
                  key={key}
                  urlToImage={article.urlToImage || ""}
                  title={article.title}
                  author={article.author || ""}
                  sourceName={source?.name || ""}
                  content={article.content || ""}
                  publishedAt={convertDate(article.publishedAt)}
                  onClick={noop}
                />
              );
            }
            return null;
          })}
        </FlexLayout>
      </FlexLayout>
    </FlexLayout>
  );
};

export default Headline;
