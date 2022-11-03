import React from "react";
import styled from "styled-components";
import {SiteNavKey, SiteNavMap} from "../../data/SiteNavData";
import {Mobile, DesktopOrTablet} from "../MediaQuery/MediaQueryWrapper";
import {Link} from "react-router-dom";
import { ReactComponent as ChevronDown24 } from "../../assets/icons/chevronDown24.svg";
import {SubtleButton} from "../Basic/Button";
import {useToggle} from "ahooks/es";

type CategoryTitlebarProps = {
    category: SiteNavKey;
    list: {
        tag: string;
        to: string;
    }[];
}

const CategoryTitlebarContainer = styled.div`
  min-height: 3rem;
  max-height: 3rem;
  height: auto;
  display: flex;
  padding: 0.25rem 1rem;
  align-items: center;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.72);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);
  flex-wrap: wrap;
  transition: all 0.8s;
  transition-timing-function: cubic-bezier(0.8, 0, 0.1, 1);

  @media (min-width: 992px) {
    padding: 0.25rem 14vw;
  }
`

const CategoryTitlebarHeader = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  gap: 1rem;
  align-items: center;
`

const CategoryTitlebarList = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 0.8rem;
  margin-left: auto;
  justify-content: end;
  align-items: center;
`

const CategoryTitlebarIcon = styled.div`
  padding: 0.3rem 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CategoryTitlebarItem = styled(Link)`
  text-decoration: none;
  color: black;
  opacity: 1;
  transition: all 0.25s;
  &:hover {
    opacity: 0.6;
  }
`

const ButtonPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`

const CategoryTitlebar: React.FC<CategoryTitlebarProps> = (props) => {
    const [listOpen, { toggle: toggleListOpen } ] = useToggle();
    return (
        <>
            <CategoryTitlebarContainer style={{
                maxHeight: listOpen? `100vh` : `3rem`
            }}>
                <CategoryTitlebarHeader>
                    <CategoryTitlebarIcon>
                        {SiteNavMap[props.category].icon}
                    </CategoryTitlebarIcon>
                    {SiteNavMap[props.category].tag}
                </CategoryTitlebarHeader>
                <DesktopOrTablet>
                    <CategoryTitlebarList>
                        {props.list.map((value, index, _array) => {
                            return (
                                <CategoryTitlebarItem key={index} to={value.to}>
                                    {value.tag}
                                </CategoryTitlebarItem>
                            )
                        })}
                    </CategoryTitlebarList>
                </DesktopOrTablet>
                <Mobile>
                    <ButtonPosition>
                        <SubtleButton icon={<ChevronDown24 />} click={toggleListOpen} />
                    </ButtonPosition>
                    <ul style={{
                        width: `100vw`,
                        display: "flex",
                        position: `sticky`,
                        height: `auto`,
                        listStyle: `none`,
                        justifyContent: `center`,
                        flexDirection: `column`,
                        alignItems: `center`,
                        gap: `1rem`,
                        paddingInlineStart: `0`
                    }}>
                        {props.list.map((value, index, _array) => {
                            return (
                                <li style={{
                                    fontSize: `1rem`,
                                    opacity: listOpen ? `1` : `0`,
                                    transition: `opacity 0.4s`
                                }}>
                                    <CategoryTitlebarItem key={index} to={value.to}>
                                        {value.tag}
                                    </CategoryTitlebarItem>
                                </li>
                            )
                        })}
                    </ul>
                </Mobile>
            </CategoryTitlebarContainer>
        </>
    )
}

export default CategoryTitlebar;