const obj = {
    name : 'jishad',
    job : 'mern stack',
    greet:function(...greting){
        console.log(`${greting} ${this.name}!!!! welcome to our new ${this.job} devoloper`);
    }
}

const anotherObj = {
    name: 'Jane',
    job: 'Full Stack'
  };

  const argArray  = ['hello','hey']
obj.greet.apply(anotherObj , argArray)