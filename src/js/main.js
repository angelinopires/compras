const submit = document.querySelector('.form-control .form__button');
const requests = Array.from(document.querySelectorAll('.request-list .request'));
const modalList = document.querySelector('.modal');
const modalFeedback = document.querySelector('.modal--feedback');
const openFeedback = document.querySelector('#open-modal');
const closeFeedback = document.querySelector('#close-modal');

if (submit) {
  submit.addEventListener('click', () => window.location.href = "/solicitar.html");
}

if (requests) {
  requests.map(request => {
    request.addEventListener('click', () => {

      if (modalList) {
        modalList.classList.toggle('show');
      }
    });
  })
}

if (modalList) {
  modalList.addEventListener('click', () => modalList.classList.toggle('show'));
}

if (openFeedback) {
  openFeedback.addEventListener('click', () => modalFeedback.classList.toggle('show'));
}

if (closeFeedback) {
  closeFeedback.addEventListener('click', () => modalFeedback.classList.toggle('show'));
}
