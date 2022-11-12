import React from "react";
import styled from "styled-components";
import Card from "../Basic/Card";
import {ReactComponent as Pen20} from "../../assets/icons/pen20.svg";
import {ReactComponent as Calendar20} from "../../assets/icons/calendar20.svg";
import {Link} from "react-router-dom";
import {SiteNavKey, SiteNavMap} from "../../data/SiteNavData";

type ArticleListContentProps = {
  articles: Array<{
    pid: number;
    name: string;
    time: string;
    author: string;
  }>,
  categoryName: SiteNavKey;
}

const CardContent = styled.div`
  padding: 1rem 1rem;

  &:hover > #title {
    color: rgb(73, 109, 193);
  }

  & > #title {
    font-size: 2.5rem;
    font-weight: 600;
    padding: 0.5rem 0;
    text-decoration: none;
    color: black;
    transition: all 0.2s;
  }

  & > #title:hover {
    text-decoration: underline solid;
  }

  & > #sub {
    font-size: 1rem;
  }
`

const IconText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`

const ArticleListContent: React.FC<ArticleListContentProps> = (props) => {
  return (
    <div style={{
      padding: `2rem 4rem`,
      display: `flex`,
      flexDirection: `column`,
      gap: `1.5rem`
    }}>
      {props.articles.map((value, index, _array) => {
        return (
          <Card>
            <CardContent>
              <Link id={"title"} to={`${SiteNavMap[props.categoryName].to}/${value.pid}`}>{value.name}</Link>
              <div style={{
                display: `flex`,
                gap: `1rem`,
                color: `rgb(120, 120, 120)`
              }} id={"sub"}>
                <IconText><Pen20/><span>{value.author}</span></IconText>
                <IconText><Calendar20 /><span>{value.time}</span></IconText>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

export default ArticleListContent;