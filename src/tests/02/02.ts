type ChatType ={
    students: Array<{}>
}

type LocalCityType ={
    title: string
    country: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type TechType = {
    id: number
    title: string
}

export type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>

}

export const Nikita: StudentType = {
    name: "Nikita",
    age: 20,
    isActive: true,
    address: {
        streetTitle: "Kamayskaya 14",
        city: {
            title: "Minsk",
            country: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "JS"
        },
        {
            id: 4,
            title: "React"
        }
    ]
}

console.log(Nikita.technologies[3].title)

const Petr = {
    name: "Petr",
    age: 26,
    isActive: true
}

const Ivan = {
    name: "Ivan",
    age: 44,
    isActive: false
}

let ViktorSt = {
    name: "Viktor",
    age: 58,
    isActiveDeveloper: false
}
let Dzimych = {
    name: "Dmitry",
    age: 32,
    isActiveDeveloper: true
}

const MondayChat: ChatType ={
    students: [Nikita, Petr]
}

const TuesdayChat: ChatType ={
    students: [Petr, Ivan]
}

const school = {
    name: "IT-INCUBATOR.BY",
    isOpen: true,
    mentors: [ViktorSt, Dzimych],
    students: [Nikita, Petr, Ivan],
    chats: [MondayChat, TuesdayChat],
    age: 6
}