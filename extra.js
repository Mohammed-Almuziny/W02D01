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