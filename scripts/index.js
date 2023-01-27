import {Item} from './Item.js'

const list = document.querySelector('.todo__list');
const form = document.querySelector('.todo__form');
// const item = new Item('Накидаться пивища', form, '#item')

function renderCard(card, container) {
  container.prepend(card);
}