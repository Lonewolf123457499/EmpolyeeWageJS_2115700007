const IS_Absent = 0;

let empCheck = Math.floor(Math.random() * 10) % 2;

if (empCheck == IS_Absent) {
    console.log("Employee is Absent");
    return;
} else {
    console.log("Employee is Present");
}
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 4;

empCheck = Math.floor(Math.random() * 10) % 3;

switch (empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    default:
        empHrs = 4;
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: " + empWage)

function getworkingHours(empCheck) {

    switch (empCheck) {

        case IS_PART_TIME:

            return PART_TIME_HOURS;

        case IS_FULL_TIME:

            return FULL_TIME_HOURS;

        default:

            return 0;

    }

}