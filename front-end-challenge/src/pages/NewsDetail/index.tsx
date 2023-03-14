import { Image } from "antd";
import ErrorState from "components/ErrorState";
import FlexLayout from "components/FlexLayout";
import LoadingState from "components/LoadingState";
import convertDate from "helpers/convertDate";
import { Helmet } from "react-helmet";
import useIndex from "./index.hook";
import * as css from "./index.styles";

const NewsDetail = () => {
  const { data, error, loading } = useIndex();
  const { urlToImage, title, author, url, description, publishedAt, content } =
    data;

  if (loading) return <LoadingState />;

  if (error) return <ErrorState />;

  return (
    <FlexLayout direction='column' padding='24px 0' align='start'>
      <Helmet>
        <title>E-News | News Detail</title>
      </Helmet>
      <FlexLayout align='start' gap='24px'>
        <Image width={500} height={400} src={urlToImage || ""} />
        <FlexLayout direction='column' align='start' gap='14px'>
          <h2>{title}</h2>
          <hr className={css.title} />
          <div>
            <p className={css.infoDetail}>Author: {author}</p>
            <p className={css.infoDetail}>
              Published Date: {convertDate(publishedAt)}
            </p>
            <p className={css.infoDetail}>
              Source Url:{" "}
              <a href={url} target='_blank' rel='noreferrer'>
                {url}
              </a>
            </p>
          </div>
          <p className={css.description}>{description}</p>
        </FlexLayout>
      </FlexLayout>
      <p className={css.description}>{content}</p>
    </FlexLayout>
  );
};

export default NewsDetail;
