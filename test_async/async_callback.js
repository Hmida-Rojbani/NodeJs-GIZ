console.log('Begin');
getUser(1, (user)=> displayUser(user)  );

console.log('End');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('getUser Exec');
        let user =  {user : 'John'}
        callback(user)
    }, 2000);
    
}

function displayUser(user) {
    console.log('user :', user);
}