import React, { PropsWithChildren } from "react";
import { useMediaQuery } from "react-responsive";

type MediaQueryProps = PropsWithChildren<{}>;

const Desktop: React.FC<MediaQueryProps> = (props) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return <>{isDesktop && props.children}</>;
};

const Tablet: React.FC<MediaQueryProps> = (props) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return <>{isTablet && props.children}</>;
};

const Mobile: React.FC<MediaQueryProps> = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return <>{isMobile && props.children}</>;
};

export { Desktop, Tablet, Mobile };
