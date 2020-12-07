// eslint-disable-next-line max-len
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export const loadBooks = async(request = '') => {
  const response = await fetch(BASE_URL + request);

  return response.json();
};
