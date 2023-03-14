import { NN0 } from "../../constants/colors";
import { IconProps } from "../../types/iconProps";

const Plus = (props: IconProps) => {
  const { size = "24px", color = NN0 } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8 0.999878V14.9999'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='square'
        strokeLinejoin='round'
      />
      <path
        d='M1 8H15'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='square'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Plus;
