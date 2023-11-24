// CustomTypography.tsx

import { CSSProperties, FunctionComponent, PropsWithChildren } from "react";

interface CustomTypographyProps extends PropsWithChildren {
  variant?: "h1" | "h2" | "h3" | "body1" | "body2";
  className?: string;
  sx?: CSSProperties;
}

const Typography: FunctionComponent<CustomTypographyProps> = ({
  variant = "body1",
  children,
  className,
  sx,
  ...restOfProps
}) => {
  let Tag: keyof JSX.IntrinsicElements = "p";

  switch (variant) {
    case "h1":
      Tag = "h1";
      break;
    case "h2":
      Tag = "h2";
      break;
    case "h3":
      Tag = "h3";
      break;
    case "body1":
      Tag = "p";
      break;
    case "body2":
      Tag = "p";
      break;
    default:
      Tag = "p";
  }

  return (
    <Tag className={className} style={sx} {...restOfProps}>
      {children}
    </Tag>
  );
};

export default Typography;
