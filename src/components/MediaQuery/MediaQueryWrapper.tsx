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

const MobileOrTablet: React.FC<PropsWithChildren<{}>> = (props) => {
  return (
    <>
      <Mobile>{props.children}</Mobile>
      <Tablet>{props.children}</Tablet>
    </>
  );
};

const DesktopOrTablet: React.FC<PropsWithChildren<{}>> = (props) => {
  return (
      <>
        <Desktop>{props.children}</Desktop>
        <Tablet>{props.children}</Tablet>
      </>
  )
}

export { Desktop, Tablet, Mobile, MobileOrTablet, DesktopOrTablet };
