console.log('Begin');
getUser(0).then(user => displayUser(user))
            .catch(err=> console.log('Error :',err));

console.log('End');

function getUser(id) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('getUser Exec');
            if(id==0)
                reject('Id zero is not accepted');
            let user =  {user : 'John'}
            resolve (user)
        }, 2000);
    });
    
    
}

function displayUser(user) {
    console.log('user :', user);
}