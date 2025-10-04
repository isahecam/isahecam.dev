import type { SVGProps } from "react";

const ShadcnUI = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' {...props}>
    <path fill='none' d='M0 0h256v256H0z' />
    <path
      fill='none'
      stroke='currentColor'
      strokeWidth={25}
      strokeLinecap='round'
      d='M208 128l-80 80m64-168L40 192'
    />
  </svg>
);

export { ShadcnUI };
