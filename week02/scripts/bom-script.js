const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const liItem = document.createElement('li');
const deleteButton = document.createElement('button');

liItem.textContent = input.value;
deleteButton.textContent = '&#x274C';

liItem.append(deleteButton);

list.append(liItem);