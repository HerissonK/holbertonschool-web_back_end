export default function updateStudentGradeByCity (list, city, newGrades) {
  if (!Array.isArray(list)) {
    return [];
  }
  return list
    .filter((loop) => loop.location === city)
    .map((student) => {
      const grades = newGrades.filter((loop) => loop.studentId === student.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...student,
        grade,
      };
    });
}