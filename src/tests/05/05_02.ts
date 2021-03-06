import {GovernmentBuildingsType, HouseType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (building: Array<GovernmentBuildingsType>) => {
    return building.map(m => m.address.street.title);
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(m => m.address.street.title);
}

export const greetingsToStreet = (houses: Array<HouseType>) =>{

    let callbackfn = (m: HouseType) =>{
        return `Hello to all ${m.address.street.title} livers`;
    }

    return houses.map(callbackfn);
}