const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data
    .trim()
    .split('\n')
    .map((line) => line.split(','));

  const students = lines.slice(1); // ignore header

  console.log(`Number of students: ${students.length}`);

  const fields = {};

  students.forEach((student) => {
    const firstname = student[0].trim();
    const field = student[student.length - 1].trim();

    if (!fields[field]) {
      fields[field] = [];
    }

    fields[field].push(firstname);
  });

  Object.keys(fields).forEach((field) => {
    console.log(
      `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`,
    );
  });
}

module.exports = countStudents;
