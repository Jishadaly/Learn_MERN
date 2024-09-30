[
  {
    "id": 12345,
    "name": "John Doe",
    "subjects": [
      { "subject": "math", "marks": 85 },
      { "subject": "science", "marks": 90 },
      { "subject": "history", "marks": 78 },
      { "subject": "english", "marks": 92 }
    ],
  },
  {
    "id": 67890,
    "name": "Jane Smith",
    "subjects": [
      { "subject": "math", "marks": 92 },
      { "subject": "science", "marks": 88 },
      { "subject": "history", "marks": 76 },
      { "subject": "english", "marks": 95 }
    ],
  },
  {
    "id": 13579,
    "name": "Alice Johnson",
    "subjects": [
      { "subject": "math", "marks": 78 },
      { "subject": "science", "marks": 94 },
      { "subject": "history", "marks": 82 },
      { "subject": "english", "marks": 88 }
    ],
  }
]

// return an an array of objects containing each students name and sum of their mark
// get all the fibonacci numbers within the limit of 100 using reccursion.

function printNum() {
  let i = 10;
  do {
    console.log(i);
    i--;
  } while (i >= 0);
}

// printNum();

//callback 

function greet(name, callback) {
  console.log('helo', name);

  bye();
}

function bye() {
  console.log('byeeee');
}

// greet('jishad',bye);


//callback hell
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('fecthing data');
      resolve()
    }, 3000)
  })
}

function processData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('proseesing data');
      resolve()
    }, 2000)
  })

}

function saveData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('saving data');
      resolve()
    }, 3000)
  })
}

function finish() {
  console.log("finished");
}


// getData()
//   .then(()=> processData())
//   .then(()=> saveData())
//   .then(()=> finish());

async function exicute() {
  await getData();
  await processData();
  await saveData();
  finish();
}

//  exicute();

function* printNum() {
  let i = 1;
  while (i < 10) {
    if (i % 2 === 0) {
      yield i
    }
    i++
  }


}

const generate = printNum();
// console.log(generate.next().value);

(function () {
  console.log('imedeate inviokde');
})
// ();


// function logenstsubStr(str) {
//   let longest = '';
//   let globCount = 0;
//   for (let i = 0; i < str.length; i++) {
//     let count = 0 ;

//     for (let j = 0; j < str.length; j++) {
//       if (i !== j && str[i] === str[j]) {
//         count ++
//       }
//     }
//     if ( count >  ) {

//        longest =  word;
//     }
//   }
//   return longest;
// }

// const str = 'fbsdjkkkkkkkkksssssssssjjjjjjjjjjjsguyh';
// console.log(logenstsubStr(str));

function findLongestStr(str) {
  let map = new Map();
  let string = '';
  for (let i = 0; i < str.length; i++) {
    map.set(str[i],(map.get(str[i])|| 0)+1)

  }

  let strq = ''
  let count=0;
  map.forEach((key , index)=>{
    // console.log(key);
    if (key > count) {
      count = key
      strq = index
    }
    
  });

 return strq
}

console.log(findLongestStr(str));