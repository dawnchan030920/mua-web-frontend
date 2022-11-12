import React from "react";
import {SiteNavKey} from "../../data/SiteNavData";
import useAxios from "axios-hooks";
import CategoryLayout from "../Layout/CategoryLayout";
import ArticleListContent from "./ArticleListContent";
import {ArticleList} from "./ArticleListContent";

type ArticleListProps = {
  category: SiteNavKey;
  categoryNumber: number;
}

const ArticleListHOC: React.FC<ArticleListProps> = (props) => {
  const [{
    data: listData,
    loading: isListLoading,
    error: isListError
  }] = useAxios(`/api/passage/getPassage/${props.categoryNumber}`);
  return (
    <CategoryLayout category={props.category} list={[]}>
      {(!isListError && !isListLoading && (listData as ArticleList != null)) && (
        <ArticleListContent articles={
          (listData as ArticleList).passage
        } categoryName={SiteNavKey.Project}/>
      )}
    </CategoryLayout>
  )
}

export default ArticleListHOC;