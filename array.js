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