import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useDebouns } from '../../hooks/debouns';
import CardCreator from "../cardCreator";
import { useSelector, useDispatch } from "react-redux";
// import { updateSearchValue } from "../../store/actions";


import { updateSearchValue } from "../../store/slices/newsSlice";

const ArticlesList: React.FC = (data = []) => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState<string>('');
  const debounced = useDebouns(searchValue);
  // const { data } = useSearchArticleQuery('');

  // const filteredArticles = useMemo(() => {
  //   return data?.filter(article => {
  //     return (article.title.toLowerCase().includes(searchValue.toLowerCase())
  //       || article.summary.toLowerCase().includes(searchValue.toLowerCase()));
  //   })
  // }, [searchValue, data]);

  // useEffect(() => {
  //   dispatch(updateSearchValue(searchValue))
  // }, [searchValue]);

  return (
    <div className='main'>
      {/* <div className="filter">
        <p className="filter__title">Filter by keywords</p>
        <div className="filter__input">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7832 14.3911L20 18.6069L18.6069 20L14.3911 15.7832C12.8224 17.0407 10.8713 17.7246 8.86088 17.7218C3.96968 17.7218 0 13.7521 0 8.86088C0 3.96968 3.96968 0 8.86088 0C13.7521 0 17.7218 3.96968 17.7218 8.86088C17.7246 10.8713 17.0407 12.8224 15.7832 14.3911ZM13.8082 13.6605C15.0577 12.3756 15.7555 10.6532 15.7527 8.86088C15.7527 5.05267 12.6681 1.96909 8.86088 1.96909C5.05267 1.96909 1.96909 5.05267 1.96909 8.86088C1.96909 12.6681 5.05267 15.7527 8.86088 15.7527C10.6532 15.7555 12.3756 15.0577 13.6605 13.8082L13.8082 13.6605Z" fill="#575757" />
          </svg>
          <input
            type="text"
            placeholder='Search...'
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)} />
        </div>
        <p className="filter__title filter__title_subtitle">Results: {filteredArticles?.length}</p>
        <div className="divider"></div>
      </div> */}

      <div className="card__field">
        {/* {filteredArticles?.map(({ ...props }) => {
          return (
            <CardCreator
              key={props.id}
              {...props}
            />) */}
        {/* })} */}
      </div>
    </div>
  );
};

export default ArticlesList;