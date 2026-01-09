class StudentsController {
    constructor(service) {
        this.service = service;
    }

    async getAllStudents(request, response) {
        try {
            const students = await this.service.getAllStudents();
            response.status(200).json(students);
        } catch (error) {
            response.status(500).json({ error: 'Cannot load the database' });
        }
    }

    async getStudentsByMajor(request, response) {
        const major = request.params.major;
        try {
            const students = await this.service.getStudentsByMajor(major);
            response.status(200).json(students);
        } catch (error) {
            response.status(500).json({ error: 'Cannot load the database' });
        }
    }
}
module.exports = StudentsController;
