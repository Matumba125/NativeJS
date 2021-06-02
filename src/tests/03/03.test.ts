import {StudentType} from "../02/02";
import {addSkill, doesStudentLivesIn, makeStudentUnActive} from "./03";

let student: StudentType;
beforeEach(()=>{
    student = {
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
                title: "React"
            }
        ]
    }
})

test("new tech skill should be addeed to student",()=>{
    expect(student.technologies.length).toBe(3);

    addSkill(student, "JS");

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("JS");
    expect(student.technologies.length).toBeDefined();

})

test("student should be unactive",()=>{
    expect(student.isActive).toBe(true);

    makeStudentUnActive(student);

    expect(student.isActive).toBe(false);

})

test("student should live in city",()=>{

    let result1 = doesStudentLivesIn(student, "Moscow");
    let result2 = doesStudentLivesIn(student, "Minsk");

    expect(result1).toBe(false);
    expect(result2).toBe(true);

})