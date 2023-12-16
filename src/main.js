// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('.search-input');
const btn = document.querySelector('.search-btn');
const itemList = document.querySelector('.item-list');
const request = {
  key: '41300766-2a2685b0426849001fa971f21',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};
const URL = `https://pixabay.com/api/?${new URLSearchParams(request)}`;

const getImagesFromAPI = url => {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => console.log(error));
};

btn.addEventListener('click', () => {
  request.q = input.value;
  getImagesFromAPI(URL);
});
