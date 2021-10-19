import * as CMS from '../../constants/cms';

export const fetchArticles = (endpoint) => (dispatch, getState) => {
  fetch(`${CMS.URL}/${endpoint}`)
    .then(async (response) => dispatch({ type: 'FETCH_ARTICLES_SUCCESS', articles: await response.json() }))
    .catch((error) => dispatch({ type: 'FETCH_ARTICLE_ERROR', error }));
};

export const fetchArticle = (endpoint) => (dispatch, getState) => {
  fetch(`${CMS.URL}/${endpoint}`)
    .then(async (response) => {
      const article = (await response.json())[0];
      if (article) {
        dispatch({ type: 'FETCH_ARTICLE_SUCCESS', article });
      } else {
        dispatch({ type: 'FETCH_ARTICLE_ERROR', error: 'No Article Found' });
      }
    })
    .catch((error) => dispatch({ type: 'FETCH_ARTICLE_ERROR', error }));
};
