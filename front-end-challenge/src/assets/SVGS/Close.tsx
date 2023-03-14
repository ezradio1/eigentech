import { IconProps } from "../../types/iconProps";

const Close = (props: IconProps) => {
  const { size = "14" } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13 1L1 13'
        stroke='#A4A4A4'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1 1L13 13'
        stroke='#A4A4A4'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Close;