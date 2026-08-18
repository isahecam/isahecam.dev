import type { SVGProps } from "react";

const BetterAuth = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 500 500">
    <path d="M0 0h500v500H0z" className="fill-black dark:fill-white" />
    <path
      className="fill-white dark:fill-black"
      d="M69 121h86.988v259H69zM337.575 121H430v259h-92.425z"
    />
    <path
      className="fill-white dark:fill-black"
      d="M427.282 121v83.456h-174.52V121zM430 296.544V380H252.762v-83.456z"
    />
    <path className="fill-white dark:fill-black" d="M252.762 204.455v92.089h-96.774v-92.089z" />
  </svg>
);

export { BetterAuth };
