import React, {useRef, useState} from "react";
import { ReactNode } from "react-markdown/lib/react-markdown";
import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";
import {useHover} from "ahooks";
import arrow20Animation from "../../assets/lotties/arrow20.json";
import Lottie from "lottie-react";
import {MobileOrTablet} from "../MediaQuery/MediaQueryWrapper";

type ButtonProps = {
  icon?: ReactNode;
  text?: string;
  click?: () => void;
};

type LinkButtonProps = ButtonProps & { link: string };

type NavlinkButtonProps = ButtonProps & { to: string; end: boolean; }

const SubtleButtonStyled = styled.button`
  display: flex;
  gap: 0.2rem;
  padding: 0.3rem 0.3rem;
  background-color: transparent;
  border-radius: 0.4rem;
  border-color: transparent;

  &:hover {
    background-color: rgb(237, 237, 237);
  }
`;

const OutlineButtonStyled = styled.button`
  display: flex;
  gap: 0.2rem;
  padding: 0.3rem 0.3rem;
  background-color: rgb(250, 250, 250);
  border-radius: 0.4rem;
  border-style: solid;
  border-top-color: rgb(200, 200, 200);
  border-bottom-color: rgb(200, 200, 200);
  border-left-color: rgb(200, 200, 200);
  border-right-color: rgb(200, 200, 200);
  border-width: 1px;

  &:hover {
    background-color: rgb(237, 237, 237);
  }
`;

const LinkButtonStyled = styled(Link)`
  display: flex;
  gap: 0.2rem;
  padding: 0.3rem 0.3rem;
  background-color: transparent;
  border-radius: 0.4rem;
  border-color: transparent;
  text-decoration: none;
  color: black;
`;


const NavigationItemContainer = styled(NavLink)`
  text-decoration: none;
`;

const NavigationItemStyleBase = styled.span`
  &::after {
    content: "";
    display: block;
    height: 1.2px;
    width: 0;
    transition: width 0.5s;
    transition-timing-function: cubic-bezier(0.33, 0, 0.1, 1);
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavigationItemStyle = styled(NavigationItemStyleBase)`
  text-decoration: none;
  color: black;

  &::after {
    background-color: black;
  }
`;

const NavigationItemActiveStyle = styled(NavigationItemStyleBase)`
  color: rgb(71, 109, 197);
  font-weight: 600;

  &::after {
    background-color: rgb(71, 109, 197);
    height: 2px;
  }
`;

const NavigationItemContentStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SubtleButton: React.FC<ButtonProps> = (props) => {
  return (
    <SubtleButtonStyled onClick={props.click}>
      {props.icon != null && props.icon}
      {props.text != null && (
        <>
          <div>{props.text}</div>
        </>
      )}
    </SubtleButtonStyled>
  );
};

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return (
    <LinkButtonStyled to={props.link} onClick={props.click}>
      {props.icon != null && props.icon}
      {props.text != null && (
        <>
          <div>{props.text}</div>
        </>
      )}
    </LinkButtonStyled>
  );
};

const NavlinkButton: React.FC<NavlinkButtonProps> = (props) => {
  const itemRef = useRef(null);
  const arrowRef = useRef(null);
  const [arrowAnimationDirection, setArrowAnimationDirection] = useState<number>(1);
  useHover(itemRef, {
    onChange: () => {
      // @ts-ignore
      arrowRef.current.play();
      setArrowAnimationDirection(-arrowAnimationDirection);
      // @ts-ignore
      arrowRef.current.setDirection(arrowAnimationDirection);
    }
  });
  return (
      <NavigationItemContainer
          ref={itemRef}
          to={props.to}
          end={props.end}
      >
        {({ isActive }) => {
          return isActive ? (
              <>
                <NavigationItemActiveStyle>
                  <NavigationItemContentStyle>
                    {props.icon}
                    {props.text}
                    <MobileOrTablet>
                      <Lottie style={{height: `20px`, zIndex: 10}} animationData={arrow20Animation} loop={false} autoplay={false} lottieRef={arrowRef} />
                    </MobileOrTablet>
                  </NavigationItemContentStyle>
                </NavigationItemActiveStyle>
              </>
          ) : (
              <>
                <NavigationItemStyle>
                  <NavigationItemContentStyle>
                    {props.icon}
                    {props.text}
                    <MobileOrTablet>
                      <Lottie style={{height: `20px`, zIndex: 10}} animationData={arrow20Animation} loop={false} autoplay={false} lottieRef={arrowRef} />
                    </MobileOrTablet>
                  </NavigationItemContentStyle>
                </NavigationItemStyle>
              </>
          );
        }}
      </NavigationItemContainer>
  )
}

const OutlineButton: React.FC<ButtonProps> = (props) => {
  return (
    <OutlineButtonStyled onClick={props.click}>
      {props.icon != null && props.icon}
      {props.text != null && (
        <>
          <div>{props.text}</div>
        </>
      )}
    </OutlineButtonStyled>
  );
};

export { SubtleButton, LinkButton, OutlineButton, NavlinkButton };
