import React from "react";
import styled from "styled-components";

type TransitionWrapperProps = {
    isActive?: boolean;
    duration: string;
    delay?: string;
};

const OpacityTransition = styled.div.attrs<TransitionWrapperProps>({})<TransitionWrapperProps>`
  opacity: ${props => props?.isActive ? "1" : "0"};
  transition: opacity ${props => props.duration};
  ${props => props.delay != null ? `transition-delay: ${props.delay};` : ``}
`

const HeightTransition = styled.div.attrs<TransitionWrapperProps>({})<TransitionWrapperProps>`
  transform-origin: 0 0;
  transform: scaleY(${props => props?.isActive ? "1" : "0"});
  transition: transform ${props => props.duration};
  ${props => props.delay != null ? `transition-delay: ${props.delay};` : ``}
`

const HorizontalMoveTransition = styled.div.attrs<TransitionWrapperProps>({})<TransitionWrapperProps>`
  transform: translateX(${props => props?.isActive ? "0px" : "-15px"});
  opacity: ${props => props.isActive ? "1" : "0"};
  transition: all ${props => props.duration};
  ${props => props.delay != null ? `transition-delay: ${props.delay};` : ``}
`

export { HeightTransition, OpacityTransition, HorizontalMoveTransition };