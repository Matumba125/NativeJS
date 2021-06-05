import {StudentType} from "../02/02";
import {GovernmentBuildingsType, HouseType} from "../02/02_02";


export const addSkill = (student: StudentType, skill: string) =>{
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentUnActive(student: StudentType){
    student.isActive = false;
}

export const doesStudentLivesIn = (student: StudentType, cityName: string) =>{
    return student.address.city.title === cityName;
}

export function addMoneyToBudget(building: GovernmentBuildingsType, budget: number) {
    building.budget += budget;
}

export function repairHouse(houseType: HouseType){
    houseType.repaired = true;
}

export function toFireStaff(building: GovernmentBuildingsType, staffToFire: number){
    building.staffCount -= staffToFire;
}

export function toHireStaff(building: GovernmentBuildingsType, staffToHire: number){
    building.staffCount += staffToHire;
}