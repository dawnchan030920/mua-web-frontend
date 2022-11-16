import React from "react";
import ArticleLayout from "../Layout/ArticleLayout";
import {SiteNavKey} from "../../data/SiteNavData";
import useAxios from "axios-hooks";
import {Parser, HtmlRenderer} from "commonmark";
import {ReactComponent as Pen20} from "../../assets/icons/pen20.svg";
import {ReactComponent as Calendar20} from "../../assets/icons/calendar20.svg";

type ArticleHOC = {
  pid: string;
  category: SiteNavKey;
  categoryNumber: string;
  isSchool?: boolean;
}

type Article = {
  title: string;
  author: string;
  content: string;
  time: string;
}

function process(markdown: string): {titles: { header: string; level: number; id: string }[], html: string} {
  let titles = new Array<{ header: string; level: number; id: string }>();
  let parser = new Parser();
  let renderer = new HtmlRenderer();
  let parsed = parser.parse(markdown);
  let walker = parsed.walker();
  let event, node;
  let prevIsHeading: boolean = false;
  let headingLevel: number = 0;
  while ((event = walker.next())) {
    node = event.node;
    if (event.entering) {
      if (node.type === 'heading') {
        prevIsHeading = true;
        headingLevel = node.level;
      }
      if (node.type === 'text' && prevIsHeading) {
        prevIsHeading = false;
        titles.push({
          header: node.literal == null ? "" : node.literal,
          level: headingLevel,
          id: node.literal == null ? "" : node.literal.toLowerCase()
        })
      }
    }
  }

  return {
    titles: titles,
    html: renderer.render(parsed)
  }
}

const ArticleHOC: React.FC<ArticleHOC> = (props) => {
  const [{
    data: articleData,
    loading: isArticleLoading,
    error: isArticleError
  }] = useAxios(props.isSchool ? `/api/school/getSchoolContent/${props.pid}` : `/api/passage/getPassageContent/${props.categoryNumber}/${props.pid}`);
  const processedData = !isArticleLoading && !isArticleError && (articleData as Article != null) ? process(
    (articleData as Article).content
  ) : {titles: [], html: ""};

  return (
    <>
      {(!isArticleLoading && !isArticleError && (articleData as Article != null)) && (
        <ArticleLayout passageTitles={processedData.titles} category={props.category} title={(articleData as Article).title}>
          <div style={{
            padding: `4rem 2rem`
          }}>
            <div style={{
              fontSize: `2.5rem`,
              fontWeight: `700`
            }}>{(articleData as Article).title}</div>
            <div style={{
              display: `flex`,
              gap: `1.5rem`,
              color: `rgb(120, 120, 120)`
            }}>
              <div style={{
                display: `flex`,
                gap: `0.2rem`,
                alignItems: `center`,
              }}>
                <Pen20 />
                <span>{(articleData as Article).author}</span>
              </div>
              <div style={{
                display: `flex`,
                gap: `0.2rem`,
                alignItems: `center`,
              }}>
                <Calendar20 />
                <span>{(articleData as Article).time}</span>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{__html: processedData.html}} />
          </div>
        </ArticleLayout>
      )}
    </>
  )
}

export default ArticleHOC;