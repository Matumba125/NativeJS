import {CityType} from "../02/02_02";
import {getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses, greetingsToStreet} from "./05_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1, builtAt: 2012, repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                id: 2, builtAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                id: 3, builtAt: 2020, repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            },
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {
                    street: {title: "Central Str"}
                }
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {
                    street: {title: "South Str"}
                }
            }
        ],
        citizenNumber: 100000
    }
})

test("list of streets titles of government buildings", () =>{
    let streets = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streets.length).toBe(2);
    expect(streets[0]).toBe("Central Str");
    expect(streets[1]).toBe("South Str");
})

test("list of streets titles", () =>{
    let streets = getStreetsTitlesOfHouses(city.houses);

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe("White street");
    expect(streets[1]).toBe("Happy street");
    expect(streets[2]).toBe("Happy street");
})

test("greetings to all street livers", () =>{
    let streets = greetingsToStreet(city.houses);

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe("Hello to all White street livers");
    expect(streets[1]).toBe("Hello to all Happy street livers");
    expect(streets[2]).toBe("Hello to all Happy street livers");
})