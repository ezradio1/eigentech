import { Image } from "antd";
import ErrorIllustration from "assets/img/error-illustration.png";
import FlexLayout from "components/FlexLayout";

const ErrorState = () => {
  return (
    <FlexLayout width='100%' height='calc(100vh - 120px)' justify='center'>
      <FlexLayout direction='column' width='700px' justify='center'>
        <Image preview={false} src={ErrorIllustration} alt='error-state' />
        <h2>An error occurred on the server</h2>
        <p>Please try again later</p>
      </FlexLayout>
    </FlexLayout>
  );
};

export default ErrorState;
