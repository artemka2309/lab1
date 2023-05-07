// Получаем ссылки на элементы страницы
var form = document.querySelector('form');
var cardList = document.querySelector('.card-list');
var addCardButton = document.querySelector('.add-card');
var modal = document.getElementById('myModal');
var closeModalButton = document.querySelector('.close-modal');

// Функция для создания новой карточки на основе данных из формы
function createCard() {
  // Получаем значения полей формы
  var number = form.querySelector('#card-number').value;
  var type = form.querySelector('#card-type').value;
  var expiry = form.querySelector('#card-expiry').value;
  var cvc = form.querySelector('#card-cvc').value;
  var firstName = form.querySelector('#first-name').value;
  var lastName = form.querySelector('#last-name').value;

  // Создаем HTML-разметку для новой карточки
  var cardHTML = `
    <div class="card"> 
      <div class="card-number">${number}</div> 
      <div class="card-type">${type}</div> 
      <div class="card-status active">Активна</div> 
      <button class="delete-card">Удалить карту</button> 
    </div>`;

  // Добавляем разметку карточки в список карточек
  cardList.insertAdjacentHTML('beforeend', cardHTML);

  // Очищаем поля формы
  form.reset();
}

// Обработчик отправки формы
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Отменяем стандартное поведение формы
  createCard(); // Создаем новую карточку
  closeModal(); // Закрываем модальное окно
});

// Обработчик клика на кнопку "Добавить банковскую карту"
addCardButton.addEventListener('click', function() {
  modal.style.display = 'block';
});

// Обработчик клика на кнопку закрытия модального окна
closeModalButton.addEventListener('click', function() {
  closeModal();
});

// Функция для закрытия модального окна
function closeModal() {
  modal.style.display = 'none';
}

// Обработчик клика на кнопку "Удалить карту"
cardList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-card')) {
    event.target.parentNode.remove(); // Удаляем родительский элемент кнопки (карточку)
  }
});

