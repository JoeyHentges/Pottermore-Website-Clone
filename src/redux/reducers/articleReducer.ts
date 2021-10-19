const initialState = {
  articleError: null,
  articles: null,
  article: null,
};

export const articleReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'FETCH_ARTICLES_SUCCESS':
      console.log('fetch articles success', action);
      newState.articles = action.articles;
      break;

    case 'FETCH_ARTICLE_SUCCESS':
      console.log('fetch article success', action);
      newState.article = action.article;
      break;

    case 'FETCH_ARTICLE_ERROR':
      console.log('fetch article error', action);
      newState.error = action.error;
      break;

    default:
      return newState;
  }
  return newState;
};
