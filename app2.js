// Array Filter Students (Less Than 5 Characters)

const students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa", "Richard"];

const lessThanSix = students.filter(student => student.length < 5);
console.log(lessThanSix);

// Check if the array contains Junshen

const includesJunshen = students.includes("Jushen");
console.log(includesJunshen);

// "Some" of the Array
const selectedStudents = ["Alan", "Savva"];

console.log(students.includes(selectedStudents[0]) || students.includes(selectedStudents[1]));