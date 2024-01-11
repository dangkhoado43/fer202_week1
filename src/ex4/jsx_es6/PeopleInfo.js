// ============================== Exercise 1 ==============================

var people = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 },
    { name: 'John', age: 40 },
    { name: 'Ann', age: 19 },
    { name: 'Elisabeth', age: 16 }
];

const isTeenager = (person) => person.age >= 10 && person.age <= 20;

const PeopleInfo = () => {
    // Find the first teenager
    const firstTeenager = people.find(isTeenager);

    console.log(firstTeenager)

    // Find all teenagers
    const allTeenagers = people.filter(isTeenager);
    console.log(allTeenagers)

    // Check if every person is a teenager
    const isEveryoneTeenager = people.every(isTeenager);
    console.log(isEveryoneTeenager)

    // Check if any person is a teenager
    const isAnyoneTeenager = people.some(isTeenager);
    console.log(isAnyoneTeenager)

    return (
        <div>
            <h2>People Information</h2>
            <p>First Teenager: {firstTeenager ? firstTeenager.name : "None"}</p>
            <p>All Teenagers: {allTeenagers.map((teenager) => teenager.name).join(", ")}</p>
            <p>Is everyone a teenager? {isEveryoneTeenager ? "Yes" : "No"}</p>
            <p>Is anyone a teenager? {isAnyoneTeenager ? "Yes" : "No"}</p>
        </div>
    );
};

export default PeopleInfo