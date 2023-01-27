class Item {
  constructor(text, form, templateSelector) {
    this._text = text;
    this._templateSelector = templateSelector;
    this._form = form;
  }

  //Получение шаблона карторчки и всех нужных элементов
  _getTemplate() {
    this._template = document.querySelector(this._templateSelector).content.querySelector('.todo__item');
    this._card = this._template.cloneNode(true);
    this._textContainer = this._card.querySelector('.todo__text');
    this._buttonEdit = this._card.querySelector('.todo__edit-btn');
    this._buttonDelete = this._card.querySelector('.todo__delete-btn');
    this._buttonImportant = this._card.querySelector('.todo__important-btn');
    this._fieldInput = this._form.querySelector('.todo__input');

  }

  //Наполнение карточки текстом
  _setCardText() {
    this._textContainer.textContent = this._text;
  }

  //Обработчик кнопки "Редактировать"
  _handleEditButton() {
    this._fieldInput.value = this._textContainer.textContent;
  }

  //Обработчик кнопки "Удалить"
  _handleDeleteButton() {
    this._card.remove();
  }

  //Обработчик кнопки "Важное"
  _handleImportantButton() {
    console.log(this._card)
    this._card.classList.toggle('todo__item_important');
  }

  //Добавление слушателей
  _setListeners() {
    this._buttonEdit.addEventListener('click', () => this._handleEditButton());
    this._buttonDelete.addEventListener('click', () => this._handleDeleteButton());
    this._buttonImportant.addEventListener('click', () => this._handleImportantButton());
  }

  //Создание карточки
  createCard() {
    this._getTemplate();
    this._setCardText();
    this._setListeners();

    return this._card;
  }
}

export {Item};