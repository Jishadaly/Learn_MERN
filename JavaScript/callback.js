// function fetchdata(callback){
//   setTimeout(()=>{
//     console.log('data fetched successfully');
//     callback();
//   },2000)
  
// }

// function handlefetching(){
//   console.log('suucessfully handeld fecthing');
// }

// fetchdata(handlefetching);
// console.log('fetching started');


function fecthing(callback){
    setTimeout(()=>{
      console.log('data fethed succefully');
      callback()
    },1000)
}

function handlefetching(){
  console.log('succefullly handeled fething');
}

fecthing(handlefetching)