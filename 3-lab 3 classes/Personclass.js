class Person
{
    constructor(firstName, lastName, age, email) {
        [this.firstName,this.lastName,this.age,this.email]= [firstName, lastName, age,email];
    }
    toString()
    {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        //return this.firstName + ' '+ this.lastName  + ' (age :'+ this.age + ', email : '+this.email + ')';
    }
}
let person = new Person('Maria', 'Petterson', 22, 'mp@gmail.com');
console.log( person.toString());