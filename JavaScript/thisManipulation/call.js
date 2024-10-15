const person1 = {
    fullName : function(place) {
      return this.firstName + " " + this.lastName + place
    }
}

const person2 = {
  firstName : " marloon",
  lastName : "johanson "

}

const a = person1.fullName.call(person2,"hello");
console.log(a);