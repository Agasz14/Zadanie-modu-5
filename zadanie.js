// doubled numbers

const doubleNumber = (numbers) => {
    const DoubledArray = numbers.map((number) => number * 2);
    return DoubledArray;
};
    const number = [1,2,3,4,5]
    
    console.log (number)
    console.log (doubleNumber(number))
    
    
    // students
    
    const students = [
        {name: "Student 1", surname: "Surname 1"},
        {name: "Student 2", surname: "Surname 2"},
        {name: "Student 3", surname: "Surname 3"},
        {name: "Student 4", surname: "Surname 4"},
        ];

    const nameStudents =
        students.map((student) => student.name);

    console.log (students)
    console.log (nameStudents)
