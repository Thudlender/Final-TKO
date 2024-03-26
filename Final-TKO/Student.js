// สร้างข้อมูลของบริษัทและความต้องการของแต่ละบริษัท
const companies = [
  { name: "บริษัท A", requirements: ["JavaScript", "HTML", "CSS"] },
  { name: "บริษัท B", requirements: ["Python", "Django", "Flask"] },
  { name: "บริษัท C", requirements: ["Java", "Spring", "Hibernate"] },
];

// ฟังก์ชันสำหรับให้นักศึกษาเลือกบริษัทที่ต้องการฝึกงาน
function chooseCompany(studentAbilities) {
  const availableCompanies = [];
  companies.forEach((company) => {
    // ตรวจสอบว่าความสามารถของนักศึกษาสอดคล้องกับความต้องการของบริษัทหรือไม่
    const matchedSkills = company.requirements.filter((skill) =>
      studentAbilities.includes(skill)
    );
    if (matchedSkills.length === company.requirements.length) {
      availableCompanies.push(company.name);
    }
  });
  return availableCompanies;
}

// เพิ่มเหตุการณ์ที่เกิดขึ้นเมื่อมีการเลือกไฟล์
const imageInput = document.getElementById("image");
imageInput.addEventListener("change", function () {
  const file = this.files[0];
  const imgPreview = document.getElementById("imagePreview");

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imgPreview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    imgPreview.src = "";
  }
});

// เลือกบริษัทที่นักศึกษาสามารถฝึกงานได้
// ฟังก์ชันสำหรับแสดงข้อมูลของนักศึกษาและบริษัทที่เหมาะสม
function displayMatches() {
    const matchesContainer = document.getElementById('matches');
    matchesContainer.innerHTML = '';
    studentAbilities.forEach(student => {
        const availableCompanies = chooseCompany(student.abilities);
        if (availableCompanies.length > 0) {
            const studentElement = document.createElement('div');
            studentElement.classList.add('student-match');
            studentElement.innerHTML = `
                <h2>${student.name} (${student.age} ปี)</h2>
                <img src="${student.image}" alt="${student.name}">
            `;
            availableCompanies.forEach(company => {
                const companyElement = document.createElement('div');
                companyElement.classList.add('match');
                companyElement.innerHTML = `
                    <h3>${company.name}</h3>
                    <img src="${company.image}" alt="${company.name}">
                `;
                studentElement.appendChild(companyElement);
            });
            matchesContainer.appendChild(studentElement);
        }
    });
}


// ข้อมูลความสามารถของนักศึกษาแต่ละคน
const studentAbilities = [
  { name: "นางสาว X", abilities: ["JavaScript", "HTML", "CSS"] },
  { name: "นาย Y", abilities: ["Python", "Machine Learning", "Data Science"] },
  { name: "นาง Z", abilities: ["Java", "Android Development", "Database"] },
];

// เรียกใช้งานฟังก์ชัน displayMatches เพื่อแสดงผลลัพธ์
displayMatches();
