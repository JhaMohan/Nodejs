console.log('Before');
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     })
//   })
// });

// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('commits of user',commits))
//     .catch(err => console.log('Error',err.message));



//async and await approach    
async function displayCommit(){
try {      
const user = await getUser(1);
const repos = await getRepositories(user.gitHubUsername);
const commit = await getCommits(repos[0])
console.log(commit)
}
catch(err) {
    console.log('Error',err.message)
}
}

displayCommit()








console.log('After');

function getUser(id) {

  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Reading a user from a database...');
        resolve({ id: id, gitHubUsername: 'mosh' });
      }, 2000);
  })

 
}

function getRepositories(username) {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log('Calling GitHub API...');
        // resolve(['repo1', 'repo2', 'repo3']);
        reject(new Error('there is no repo.......'))
      }, 2000);
  })  
  
}

function getCommits(repo) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Calling GitHub commits...');
        resolve(['commit']);
      }, 2000);
  })  
 
}