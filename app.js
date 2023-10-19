console.log("Its Working")
function findUserByUsername(arr, username){
    return arr.find(function(user){
        return user.username === username;
    })
}

function removeUser(arr, username) {
    const indexToRemove = arr.findIndex(function (obj) {
      return obj.username === username;
    });
  
    if (indexToRemove !== -1) {
      return arr.splice(indexToRemove, 1)[0];
    }
  
    return undefined;
  }