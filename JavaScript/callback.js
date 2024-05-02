function fetchdata(callback){
  setTimeout(()=>{
    console.log('data fetched successfully');
    callback();
  },2000)
  
}

function handlefetching(){
  console.log('suucessfully handeld fecthing');
}

fetchdata(handlefetching);
console.log('fetching started');