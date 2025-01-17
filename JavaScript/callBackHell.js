
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


function asyncTask1(callback) {
  setTimeout(() =>{
    console.log('async 1');
    callback();
  }, 1000);
}

// function asyncFunction1(callback){
//  callback()
// }

function asyncTask2(callback) {
  setTimeout(() =>{
    console.log('async 2');
    callback();
  }, 2000);
}

function asyncTask3(callback) {
  setTimeout(()=> {
    console.log('async 3');
    callback();
  }, 3000);
}

// Chaining the async tasks using callbacks
// asyncTask1(function() {
//   asyncTask2(function() {
//     asyncTask3(function() {
//       console.log('ended');
//     });
//   });
// });





// async function main(){
//   try{
//    await asyncTask1();
//    await asyncTask2();asyncTask1()
  // .then(()=> asyncTask2())
  // .then(()=> asyncTask3 ())
  // .then(()=> {
  //   console.log('ended');
  // })
  // .catch((error)=>{
  //   console.error('erroo' , error);
  // })
//    await asyncTask3();
//   } catch(error){
//       console.error('errr',error)
//   }
// }

// main();


function firstTask(){
  return new  Promise((res)=>{
    setTimeout(()=>{ 
     res('task 1 is completed ')
   },1000)
  })
}

function secondTask(){
  return new Promise((res , rej)=>{
    setTimeout(()=>{
      rej('task tow is complted')
    },1000)
  })
}

function thirdTask(){
  return new Promise((res)=>{
    setTimeout(()=>{
      res('task 3 is completed ')
    },1000)
  })
}

// firstTask()
//   .then((data)=> {
//     console.log(data);
//    return secondTask()
//   })
//   .then((data)=>{
//     console.log(data)
//    return thirdTask()
//   })
//   .then((data)=>{
//     console.log(data)
//   })
//   .then(()=>{
//     console.log('completed')
//   })
//   .catch((err)=>{
//     console.log(err)
//   });
 
async function handleAsyncFun(){
   try{
    console.log(await firstTask())
    console.log(await secondTask())
    console.log(await thirdTask())
    console.log('complered')
   }catch(err){
    console.log(err);
   }
}

// handleAsyncFun();

Promise.any([firstTask() , secondTask() , thirdTask()]).then((values)=>{
  console.log('res : ',values);
}).catch((err)=>{
  console.log('Errorr occured',err);
})
