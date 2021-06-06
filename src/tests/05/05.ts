export type  ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18}
]

const dimychTransformator = (man: ManType) => {
    return {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    }
}

const dev2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const devs3 = people.map(m => ({
        stack: ["css, html", "js", "tdd", "react"],
        firstName: m.name.split(" ")[0],
        lastName: m.name.split(" ")[1]
    })
);

const message = people.map(m => `Hello ${m.name.split(" ")[0]}`);

export const createGreetingsMessage = (people: Array<ManType>) => {
   return people.map(m => `Hello ${m.name.split(" ")[0]}`);
}