import * as React from "react";

interface CrossIconI {
  size?: number;
  height?: number;
  width?: number;
  fill?: string;
}

const Cross: React.FC<CrossIconI & React.HTMLAttributes<HTMLOrSVGElement>> = ({
  size,
  height,
  width,
  fill,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size || height || 23}
      width={size || width || 23}
      fill={fill || "rgba(0, 0, 0, 1)"}
      {...props}
    >
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.207 12.793-1.414 1.414L12 13.414l-2.793 2.793-1.414-1.414L10.586 12 7.793 9.207l1.414-1.414L12 10.586l2.793-2.793 1.414 1.414L13.414 12l2.793 2.793z"></path>
    </svg>
  );
};

export default Cross;
