console.log('Before')

getUser(1, (user)=>{
    console.log(user)
    getRepository(user.gitRepository,(repo)=>{
        console.log(repo)
    })
})

console.log('After')

// to deal with above problem we will use
//callback
// promises
// async/wait


function getUser(id, callback) {
    setTimeout( () =>{
        console.log('display after the time out.......')
        callback({id:id,gitRepository:'aditya'});
    },2000);
    
}


function getRepository(username,callback) {
    setTimeout( () =>{
        console.log('git repository of the user.......')
        callback(['repo1','repo2','repo3']);
    },2000);
}