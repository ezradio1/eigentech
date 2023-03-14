import { IconProps } from "../../types/iconProps";

const Check = (props: IconProps) => {
  const { size = "13" } = props;
  return (
    <svg
      width={size}
      height={Number(size) - 3}
      viewBox='0 0 13 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.75 5L4.5 8.75L12 1.25'
        stroke='#4A4A4A'
        strokeLinecap='square'
      />
    </svg>
  );
};

export default Check;
