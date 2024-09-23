export const image500 = path => {
  return path ? `https://image.tmdb.org/t/p/w500/${path}` : null;
};
export const image342 = path => {
  return path ? `https://image.tmdb.org/t/p/w342/${path}` : null;
};
export const image185 = path => {
  return path ? `https://image.tmdb.org/t/p/w185/${path}` : null;
};

export const fallbackMoviePoster =
  'https://via.placeholder.com/500x750?text=No+Movie+Poster';
export const fallbackPersonImage =
  'https://via.placeholder.com/300x450?text=No+Person+Image';
