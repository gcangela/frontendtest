// Task: Implement isNameInList function

var names = [
  'jax',
  'tryndamere',
  'anivia',
  'ahri'
];

function isNameInList(name) {
  return names.includes(name) ;

}

console.log('Is Pikachu a league of legends champion? ' , isNameInList('pikachu'));
