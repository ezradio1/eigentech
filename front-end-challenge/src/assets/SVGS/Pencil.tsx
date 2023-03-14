import { IconProps } from "../../types/iconProps";

const Pencil = (props: IconProps) => {
  const { size = "18" } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 16.9998H5L15.5 6.49981C16.0304 5.96938 16.3284 5.24996 16.3284 4.49981C16.3284 3.74967 16.0304 3.03025 15.5 2.49981C14.9696 1.96938 14.2501 1.67139 13.5 1.67139C12.7499 1.67139 12.0304 1.96938 11.5 2.49981L1 12.9998V16.9998Z'
        stroke='#A4A4A4'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.5 3.49982L14.5 7.49982'
        stroke='#A4A4A4'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Pencil;
