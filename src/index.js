import LinkedList from "./linked-lists";

const list = new LinkedList();

list.append('upon');
list.append('a');
list.append('time');

list.prepend('Once');

console.log(list);

console.log('size:', list.size(this));
console.log('head:', list.listHead(this));
console.log('tail:', list.listTail(this));

console.log('index 0:', list.at(0));
console.log('index 2:', list.at(2));
console.log('index 3:', list.at(3));
console.log('index 5:', list.at(5));

console.log(list.pop(this));

console.log('contains "a":', list.contains('a'));
console.log('contains "dog":', list.contains('dog'));

console.log('index of "upon":', list.find('upon'));
console.log('index of "dog":', list.find('dog'));
console.log('index of "Once":', list.find('Once'));

console.log('to string:', list.toString());