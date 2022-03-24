import * as React from "react";

interface BrandIconI {
  size?: number;
  height?: number;
  width?: number;
}

const Brand: React.FC<BrandIconI> = ({ size, height, width, ...props }) => {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23 23"
      height={size || height || 23}
      width={size || width || 23}
      data-type="ugc"
      role="presentation"
      aria-hidden="true"
      aria-labelledby="svgcid--iai9te4big2d"
      {...props}
    >
      <title id="svgcid--iai9te4big2d"></title>
      <g>
        <path
          fill="url(#svgcid-nn0jwc-48ka18)"
          d="M18.419 18.376a11.16 11.16 0 0 1-5.546 2.592v-8.756l5.539 6.164h.007ZM0 10.5C0 5.176 4.067.769 9.372 0v21C4.067 20.232 0 15.823 0 10.5Zm4.863 1.76c1.01 0 1.827-.788 1.827-1.76s-.818-1.76-1.827-1.76c-1.01 0-1.827.788-1.827 1.76s.818 1.76 1.827 1.76ZM22.05 10.5c0-1.655-.393-3.222-1.095-4.618l-4.896 5.28 4.463 4.73A10.273 10.273 0 0 0 22.05 10.5Zm-4.413-5.751h2.654C18.646 2.295 15.98.538 12.873.032v10.19l4.764-5.473Z"
        ></path>
        <defs fill="none">
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y2="10.5"
            x2="22.05"
            y1="10.5"
            x1="0"
            id="svgcid-nn0jwc-48ka18"
          >
            <stop stop-color="#0052A1"></stop>
            <stop stop-color="#00AEEA" offset=".999"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
};

export default Brand;
