import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const input = document.querySelector('.search-input');
const btn = document.querySelector('.search-btn');
const gallery = document.querySelector('.gallery');
const request = {
  key: '41300766-2a2685b0426849001fa971f21',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};
const options = {
  overlayOpacity: 0.8,
  captionsData: 'alt',
  captionDelay: 250,
};
let URL = `https://pixabay.com/api/?`;
const lightbox = new SimpleLightbox('.gallery a', options);

const getImagesFromAPI = url => {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(response => {
      if (!response.hits[0]) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: '#EF4040',
          messageColor: '#FAFAFB',
          position: 'topRight',
          iconUrl: './img/bi_x-octagon.svg',
          iconColor: '#ffffff',
          maxWidth: 432,
          messageSize: 16,
        });

        gallery.innerHTML = '';
        return;
      }

      renderMarkup(response);
    })
    .catch(error => {
      console.log(error);
    });
};

btn.addEventListener('click', event => {
  event.preventDefault();
  gallery.innerHTML = `<span class="loader"></span>`;

  request.q = input.value;
  URL += new URLSearchParams(request);
  input.value = '';
  getImagesFromAPI(URL);
});

const renderMarkup = data => {
  let markup = data.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
        <a class="gallery-link" href=${largeImageURL}>
          <img class="gallery-image" src=${webformatURL} data-source=${largeImageURL} alt="${tags}" width="360" height="200"/>
          <ul class="image-stats">
            <li class="stats-item"><h3 class="stat-title">Likes</h3><p class="stat-value">${likes}</p></li>
            <li class="stats-item"><h3 class="stat-title">Views</h3><p class="stat-value">${views}</p></li>
            <li class="stats-item"><h3 class="stat-title">Comments</h3><p class="stat-value">${comments}</p></li>
            <li class="stats-item"><h3 class="stat-title">Downloads</h3><p class="stat-value">${downloads}</p></li>
          </ul>  
          </a>
        </li>`;
      }
    )
    .join('');

  gallery.innerHTML = markup;
  lightbox.refresh();
};
