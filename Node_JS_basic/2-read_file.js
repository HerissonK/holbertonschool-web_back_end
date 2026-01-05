const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const headers = lines[0].split(',').map((header) => header.trim());
      const students = lines.slice(1).map((line) => {
        const values = line.split(',');
        const student = {};

        headers.forEach((header, index) => {
          student[header] = values[index].trim();
        });

        return student;
      });

      console.log(`Number of students: ${students.length}`);

      const fields = {};
      students.forEach((student) => {
        if (!fields[student.field]) {
          fields[student.field] = [];
        }
        fields[student.field].push(student.firstname);
      });

      Object.keys(fields).forEach((field) => {
        console.log(
          `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`,
        );
      });

      resolve();
    });
  });
}

module.exports = countStudents;
