import {CityType, GovernmentBuildingsType} from "../02/02_02";

export const demolishHousesOnTheStreet = (city: CityType, street: string) =>{
    city.houses = city.houses.filter(house => house.address.street.title !== street )
}

export const getBuildingsWithStaffCountGreaterThan = (building: Array<GovernmentBuildingsType>, number: number) =>{
   return building.filter(b => b.staffCount > number );
}