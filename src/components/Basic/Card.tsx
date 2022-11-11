import React, {PropsWithChildren} from "react";
import styled from "styled-components";

type CardProps = PropsWithChildren<{}>;

const CardContainer = styled.div`
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;
  transition: all 0.5s;
  background-color: white;
  position: relative;
  
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    transform: translateY(-1);
  }
`

const Card: React.FC<CardProps> = (props) => {
  return (
    <CardContainer>
      {props.children}
    </CardContainer>
  )
}

export default Card;