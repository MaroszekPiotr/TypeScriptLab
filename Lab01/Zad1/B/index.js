var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.Show = function () {
        document.body.innerHTML = "<h1>Witaj " + this.firstName + " i " + this.lastName + " mam " + this.age + " lat</h1>";
    };
    return Person;
}());
var p = new Person("John", "Blake", 11);
p.Show();
