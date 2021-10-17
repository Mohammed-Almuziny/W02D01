//function 1
const sum = function (a, b) {
  return a + b;
};

//function 2
const average = function (a, b) {
  return (a + b) / 2;
};

//function 3
const findFactorial = function (num) {
  let n = 1;
  while (num > 0) {
    n = n * num;
    --num;
  }
  return n;
};

//function 4
const round = function (number) {
  return Math.round(number);
};

//function 5
const toThePowerOf = function (base, exponent) {
  return Math.pow(base, exponent);
};

//function 6
const randomNumber = function () {
  return Math.random();
};

//function 7
const oneOrZero = function () {
  return Math.floor(Math.random() * 2);
};

//function 8
const randomRange = function (number) {
  return Math.round(Math.random() * number);
};

//function 9
const includeOf = function (string, character) {
  return string.includes(character);
};

//array 1
const addToArray = function (array, string) {
  array.push(string);
  return array;
};

//array 2
const convertToString = function (array) {
  return array.join(" ");
};

//array 3
const updateValue = function (array, index, value) {
  if (array[index] === undefined) {
    return "there is no element to updated in this index";
  } else {
    array.splice(index, 1, value);
    return array;
  }
};

//array 4
const onlyString = function (array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "string") {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

//array 5
const users = [
  ["Jane", "123456"],
  ["admin", "abc123"],
];

const login = function (username, password) {
  for (let i = 0; i < users.length; i++) {
    if (username == users[i][0] && password == users[i][1]) {
      return "Login Successful";
    }
  }
  return "Login Failed";
};

//array 6
const maximumNumber = function (numbers) {
  let maxNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
};

//array 7
const reversString = function (string) {
  return string.split("").reverse().join("");
};

//Extra 1
const allUsers = [
  { username: "Jane", password: "123456" },
  { username: "admin", password: "abc123" },
];

const createUser = function (username, password) {
  for (let i = 0; i < allUsers.length; i++) {
    if (username === allUsers[i].username) {
      return "That username is not available";
    }
  }
  allUsers.push({ username: `${username}`, password: `${password}` });
  return "Registration successful";
};

//Extra 2
const sliceArray = function (array, control) {
    let newArray = [];
    for(let i = 0; i <= array.length/control+1; i++ ){
        newArray.push(array.splice(0,control)); 
    }
    return newArray;
};