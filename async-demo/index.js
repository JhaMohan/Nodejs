console.log('Before')

const user = getUser(1)
console.log(user)  // this will give undefine 

console.log('After')

// to deal with above problem we will use
//callback
// promises
// async/wait


function getUser(id) {
    setTimeout( () =>{
        console.log('display after the time out.......')
        return {id:id};
    },2000);
    
}