"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManager = void 0;
const Student_js_1 = require("../models/Student.js");
class StudentManager {
    students = [];
    addStudent(student) {
        this.students.push(student);
        this.saveToLocalStorage();
    }
    getAllStudents() {
        return this.students;
    }
    findStudentByID(id) {
        return this.students.find(s => s.id === id);
    }
    findStudentsByName(name) {
        const lowercasedName = name.toLowerCase();
        return this.students.filter(s => s.first_name.toLowerCase().includes(lowercasedName) ||
            s.last_name.toLowerCase().includes(lowercasedName));
    }
    findStudentsByMajor(major) {
        return this.students.filter(s => s.major.toLowerCase().includes(major.toLowerCase()));
    }
    saveToLocalStorage() {
        localStorage.setItem("students", JSON.stringify(this.students));
    }
    loadFromLocalStorage() {
        const data = localStorage.getItem("students");
        if (data) {
            this.students = JSON.parse(data);
        }
    }
    findStudentByEmail(email) {
        const lowercasedEmail = email.toLowerCase();
        return this.students.find(s => 
        // นำเงื่อนไขการเปรียบเทียบอีเมลมาใส่ตรงนี้
        s.email.toLowerCase() === lowercasedEmail);
    }
}
exports.StudentManager = StudentManager;
//# sourceMappingURL=StudentManager.js.map