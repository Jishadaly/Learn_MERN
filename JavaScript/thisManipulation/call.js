const person1 = {
    fullName : function() {
      return this.firstName + " " + this.lastName
    }
}

const person2 = {
  firstName : " marloon",
  lastName : "johanson "

}

const a = person1.fullName.call(person2);
console.log(a);