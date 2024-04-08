const person1 = {
    fullName : function(palce) {
      return this.firstName + " " + this.lastName + palce
    }
}

const person2 = {
  firstName : " marloon",
  lastName : "johanson "

}

const a = person1.fullName.call(person2,"hello");
console.log(a);