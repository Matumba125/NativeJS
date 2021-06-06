import {createGreetingsMessage, ManType} from "./05";


let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18}
    ]
})

test("should get array of greeting messages", () => {
    let greetings = createGreetingsMessage(people);

    expect(greetings.length).toBe(3);
    expect(greetings[0]).toBe("Hello Andrew");
    expect(greetings[1]).toBe("Hello Alexander");
    expect(greetings[2]).toBe("Hello Dmitry");
})