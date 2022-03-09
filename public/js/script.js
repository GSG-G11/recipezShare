// eslint-disable-next-line import/extensions
import postData from './postData.js';

const login = document.querySelector('#login');
const reciepes = document.querySelector('#addReciepe');

login?.addEventListener('submit', (e) => {
  e.preventDefault();
  const { username, password } = e.target;
  postData({ username: username.value.trim(), password: password.value.trim() }, '/log-in')
    .then((res) => {
      if (res === 'AUTH') {
        window.location.href = '/user';
      }
    });
});

reciepes.addEventListener('submit', (e) => {
  e.preventDefault();
  const { title, detail, userId } = e.target;
  postData({ title: title.value.trim(), detail: detail.value.trim(), userId: Number(userId.value.trim()) }, '/user/addReciepes');
});
