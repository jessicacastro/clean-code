const necessaryGradeToBeApproved = 7
const studentGrade = 10

const numberOfAbsensesToFailSchool = 100
const studentNumberOfAbsenses = 109

function checkIfStudentPassedTheSchoolYear() {
  const isStudentApproved = studentGrade >= necessaryGradeToBeApproved
  const hasStudentTooManyAbsenses = studentNumberOfAbsenses >= numberOfAbsensesToFailSchool

  if (isStudentApproved) {
    return { error: false, message: 'Student was approved :)'}
  }

  if (hasStudentTooManyAbsenses) {
    return { error: true, message: 'Student was not approved because of his absenses'}
  }

  return { error: true, message: 'Student was not approved because his grade was below the necessary.'}
}

console.log(checkIfStudentPassedTheSchoolYear())