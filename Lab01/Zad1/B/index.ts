class Person{
    firstName:string;
    lastName: string;
    age:number;
    constructor(firstName:string, lastName:string,age:number){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    Show(){
        document.body.innerHTML = `<h1>Witaj ${this.firstName} i ${this.lastName} mam ${this.age} lat</h1>`
    }
}

let p = new Person("John", "Blake", 11);
p.Show();