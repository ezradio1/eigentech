import Loader from "assets/SVGS/Loader";
import FlexLayout from "components/FlexLayout";
import { PRIMARY } from "constants/colors";

const LoadingState = () => {
  return (
    <FlexLayout width='100%' height='calc(100vh - 120px)' justify='center'>
      <FlexLayout direction='column' width='100%' justify='center'>
        <Loader color={PRIMARY} size='72' />
        <p>loading...</p>
      </FlexLayout>
    </FlexLayout>
  );
};

export default LoadingState;
