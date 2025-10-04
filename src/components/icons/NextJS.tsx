import type { SVGProps } from "react";

const Nextjs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={180}
    height={180}
    viewBox='0 0 180 180'
    fill='none'
    {...props}>
    <mask
      id='a'
      style={{
        maskType: "alpha",
      }}
      maskUnits='userSpaceOnUse'
      x={0}
      y={0}
      width={180}
      height={180}>
      <circle cx={90} cy={90} r={90} fill='#000' />
    </mask>
    <g mask='url(#a)'>
      <circle
        cx={90}
        cy={90}
        r={87}
        fill='#000'
        stroke='#fff'
        strokeWidth={6}
      />
      <path
        d='M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z'
        fill='url(#nextjs_icon_dark__paint0_linear_408_139)'
      />
      <path
        fill='url(#nextjs_icon_dark__paint1_linear_408_139)'
        d='M115 54H127V126H115z'
      />
    </g>
    <defs>
      <linearGradient
        id='nextjs_icon_dark__paint0_linear_408_139'
        x1={109}
        y1={116.5}
        x2={144.5}
        y2={160.5}
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#fff' />
        <stop offset={1} stopColor='#fff' stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='nextjs_icon_dark__paint1_linear_408_139'
        x1={121}
        y1={54}
        x2={120.799}
        y2={106.875}
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#fff' />
        <stop offset={1} stopColor='#fff' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export { Nextjs };
