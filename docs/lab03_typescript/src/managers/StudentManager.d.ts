import { Student } from "../models/Student.js";
export declare class StudentManager {
    private students;
    addStudent(student: Student): void;
    getAllStudents(): Student[];
    findStudentByID(id: string): Student | undefined;
    findStudentsByName(name: string): Student[];
    findStudentsByMajor(major: string): Student[];
    saveToLocalStorage(): void;
    loadFromLocalStorage(): void;
    findStudentByEmail(email: string): Student | undefined;
}
//# sourceMappingURL=StudentManager.d.ts.map