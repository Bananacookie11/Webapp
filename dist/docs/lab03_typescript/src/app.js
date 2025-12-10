"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StudentManager_js_1 = require("./managers/StudentManager.js");
const showList_js_1 = require("./utils/showList.js");
const manager = new StudentManager_js_1.StudentManager();
manager.loadFromLocalStorage();
function renderTable(elementId = "studentTableBody") {
    const tableBody = document.getElementById(elementId);
    tableBody.innerHTML = "";
    const students = manager.getAllStudents();
    (0, showList_js_1.showList)(students);
    students.forEach((s) => {
        tableBody.innerHTML += `
    <tr>
      <td>${s.id}</td>
      <td>${s.title_name}</td>
      <td>${s.first_name}</td>
      <td>${s.last_name}</td>
      <td>${s.email}</td>
      <td>${s.year}</td>
      <td>${s.major}</td>
    </tr>
  `;
    });
}
;
document.getElementById("addBtn").onclick = () => {
    const id = document.getElementById("id").value;
    const title_name = document.getElementById("title_name").value;
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const year = Number(document.getElementById("year").value);
    const major = document.getElementById("major").value;
    const student = {
        id,
        title_name,
        first_name,
        last_name,
        email,
        year,
        major
    };
    manager.addStudent(student);
    renderTable();
};
document.getElementById("searchNameBtn").onclick = () => {
    const keyword = document.getElementById("searchName").value;
    const results = manager.findStudentsByName(keyword);
    (0, showList_js_1.showList)(results);
    alert(`ผลการค้นหา: ${results.length} คน`);
};
document.getElementById("searchMajorBtn").onclick = () => {
    const keyword = document.getElementById("searchMajor").value;
    const results = manager.findStudentsByMajor(keyword);
    (0, showList_js_1.showList)(results);
    alert(`พบในสาขา: ${results.length} คน`);
};
// เพิ่มค้นหาด้วย Email
document.getElementById("searchEmailBtn").onclick = () => {
    const emailKeyword = document.getElementById("searchEmail").value;
    const result = manager.findStudentByEmail(emailKeyword);
    if (result) {
        alert(`พบข้อมูลนักศึกษา:\nรหัส: ${result.id}\nชื่อ: ${result.first_name} ${result.last_name}\nอีเมล: ${result.email}`);
        (0, showList_js_1.showList)([result]);
    }
    else {
        alert("ไม่พบนักศึกษาที่มีอีเมลนี้");
    }
};
renderTable("studentTableBody");
