import LinkedList from "./linked-lists";

const list = new LinkedList();

list.append('Once');
console.log(list);
list.append('upon');
console.log(list);
list.append('a');
list.append('time');

list.prepend('story');

console.log(list);