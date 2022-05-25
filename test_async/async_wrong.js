console.log('Begin');
let user = getUser(1);
console.log('user :', user);
console.log('End');

function getUser(id) {
    setTimeout(() => {
        console.log('getUser Exec');
        return {user : 'John'}
    }, 5000);
    
}