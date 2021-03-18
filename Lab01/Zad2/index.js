var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var users = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
];
var admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(person) {
    console.log(person.name + ", " + person.surname + ", " + person.age + ", " + person.role);
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
}
function filterPersons(persons, criteria) {
    return persons.filter(function (person) {
        var criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every(function (fieldName) {
            return person[fieldName] === criteria[fieldName];
        });
    });
}
;
// TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
console.log('-------------------------------------');
console.log('Przy pomocy funkcji logPerson wypisać osoby z tablicy users');
users.forEach(function (user) { return logPerson(user); });
console.log('-------------------------------------');
console.log('Przy pomocy funkcji logPerson wypisać osoby z tablicy admins');
admins.forEach(function (admin) { return logPerson(admin); });
var allUsers = __spreadArray(__spreadArray([], users), admins);
console.log('-------------------------------------');
console.log('Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)');
allUsers.forEach(function (user) { return logPerson(user); });
console.log('-------------------------------------');
console.log('Wypisać osoby powyżej 25 lat (patrz operator filter)');
var userOlderThan25 = allUsers.filter(function (user) { return user.age > 25; });
userOlderThan25.forEach(function (user) { return console.log(user); });
var filtered = filterPersons(allUsers, { name: 'Adam' });
console.log(filtered);
// TODO:
// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
// 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
// 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
