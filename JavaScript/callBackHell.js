
// asyncFunction1(arg1 , function (err1 ,result1){
//    if (err1) {
//      handlError();
//    }else{
//       asyncFunction2(result1  , function(err2 , result2){
//          if (err2) {
//            handlError(err2)
//          }else{
//           asyncFunction3(result2 , function(err3 , result3){
//             if (err3) {
//               handlError(err3)
//             }else{
//               console.log(result3);
//             }
//           })
//          }
//       })
//    }
// })


// function asyncTask1(callback){
//   setTimeout(function(){
//       console.log('async 1');
//       callback()
//   },1000)
// }


// function asyncTask2(callback){
//   setTimeout(function(){
//       console.log('async 2');
//       callback()
//   },2000)
// }


// function asyncTask3(callback){
//   setTimeout(function(){
//       callback()
//   },3000)
// }


// asyncTask1(function(){
//   asyncTask2(function(){
//       asyncTask3(function(){
//           console.log('ended');
//       })
//   })
// })


function asyncTask1(){
  return new Promise((res, rej)=>{
    setTimeout(()=>{
      console.log('async 1');
      res()
    },1000)
  })
}

function asyncTask2(){
  return new Promise((res, rej)=>{
    setTimeout(()=>{
      console.log('async 2');
      res()
    },2000)
  })
}

function asyncTask3(){
  return new Promise((res, rej)=>{
    setTimeout(()=>{
      console.log('async 3');
      res()
    },3000)
  })
}


// asyncTask1()
//   .then(()=> asyncTask2())
//   .then(()=> asyncTask3 ())
//   .then(()=> {
//     console.log('ended');
//   })
//   .catch((error)=>{
//     console.error('erroo' , error);
//   })

async function main(){
  try{
   await asyncTask1();
   await asyncTask2();
   await asyncTask3();
  } catch(error){
      console.error('errr',error)
  }
}

main();