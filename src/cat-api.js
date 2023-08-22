const URl = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_TTdZnq2NxN3qJP8pJOHqB7GRmx3M3XB91kolFn3PckAJpFBMyXGzNaZGBJP87nEy';

export function fetchBreeds() {
  return fetch(`${URl}/breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${URl}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
