

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