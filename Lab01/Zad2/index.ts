interface Person {
    // TODO: dodać pola: imię (string), nazwisko (string), wiek (number) oraz rola (string)
    name:string;
    surname:string;
    age:number;
    role:string;
    }
    
    const users: Person[] = [
        { name: 'John', surname: 'Smith', age: 25, role: 'user'},
        { name: 'Adam', surname: 'Johnson', age: 35, role: 'user'},
        { name: 'Andy', surname: 'Cole', age: 18, role: 'user'},
    ]
    
    const admins: Person[] = [
        { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
        { name: 'Adam', surname: 'Terry', age: 24, role: 'admin'},
    ]
    
    function logPerson(person: Person) {
        console.log(`${person.name}, ${person.surname}, ${person.age}, ${person.role}`)
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
    }
    
    function filterPersons(persons: Person[], criteria: any): Person[] {
        return persons.filter(person=>{
            let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
            return criteriaKeys.every((fieldName) => {
            return person[fieldName] === criteria[fieldName];
            })
        })
    };
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
    console.log('-------------------------------------');
    console.log('Przy pomocy funkcji logPerson wypisać osoby z tablicy users');
    users.forEach(user=>logPerson(user));
    console.log('-------------------------------------');
    console.log('Przy pomocy funkcji logPerson wypisać osoby z tablicy admins');
    admins.forEach(admin=>logPerson(admin));
    
    const allUsers: Person[] = [...users,...admins];
    console.log('-------------------------------------');
    console.log('Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)');
    allUsers.forEach(user=>logPerson(user));
    console.log('-------------------------------------');
    console.log('Wypisać osoby powyżej 25 lat (patrz operator filter)');
    const userOlderThan25:Person[] = allUsers.filter(user=>user.age>25);
    userOlderThan25.forEach(user=>console.log(user));
    const filtered = filterPersons(allUsers, { name: 'Adam' });
    console.log(filtered);
    // TODO:
    // 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
    // 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
    // 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
    // 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
     