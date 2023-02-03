// ! datatypes
// ? primitives

var myString = 'i am a string';
var myNumber = 42;
var myBoolean = true;
var undef = undefined; // ! var undef;
var myNull = null;

console.log(myString);

myString = 'I am another string';

console.log(myString);

// ? complex

var myArray = ['elem 0'];

var userObj = {
	id: 1,
	username: 'bleek42',
	friends: ['bob34', 'patrickj45', 'liz34', 'chris21'],
	isOnline: false,
};

const userList = [
	{
		id: 1,
		username: 'bleek42',
		friends: ['bob34', 'patrickj45', 'liz34', 'chris21'],
		isOnline: false,
	},
	{
		id: 1,
		username: 'bleek42',
		friends: ['bob34', 'patrickj45', 'liz34', 'chris21'],
		isOnline: false,
	},
	{
		id: 1,
		username: 'bleek42',
		friends: ['bob34', 'patrickj45', 'liz34', 'chris21'],
		isOnline: false,
	},
	{
		id: 1,
		username: 'bleek42',
		friends: ['bob34', 'patrickj45', 'liz34', 'chris21'],
		isOnline: false,
	},
	{
		id: 1,
		username: 'bleek42',
		friends: ['bob34', 'patrickj45', 'liz34', 'chris21'],
		isOnline: false,
	},
];

// function getIndex(list = [], index = 0) {
// 	if (!Array.isArray(list)) {
// 		throw TypeError('List is not of type Array!');
// 	}

// 	console.log('getting index from list', list, index);
// 	const listItem = list[index];

// 	if (!listItem) {
// 		throw Error('List item does not exist in the list...');
// 	}

// 	return listItem;
// }

// console.log(getIndex(userList, 5));

function displayList(list = []) {
	let index = 0;
	const userListElem = document.createElement('ul');
	console.log('displaying list...', list);
	while (index < list.length) {
		const userObj = list[index];
		console.log(userObj);
		const userItem = document.createElement('li');

		index++;
	}
}

displayList(userList);

// function addToList(userObj = {}, itemToAdd = '') {
// 	if (userObj && userObj.friends && Array.isArray(userObj.friends)) {
// 		console.table(userObj);

// 		var index = 0;
// 		while (index < userObj.friends.length) {
// 			console.log('current loop iteration', userObj.friends[index]);
// 			userObj.friends.push(itemToAdd);
// 			index++;
// 		}
// 	}

// 	console.log(userObj.friends);

// 	return userObj;
// }

// addToList(myObj, myString);
