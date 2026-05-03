const addEmployeeForm = document.querySelector('.add-employee-form');

function calculateAge(dateOfBirth, targetDate = new Date()) {
    let birthDate = new Date(dateOfBirth);
    let age = targetDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = targetDate.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && targetDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

addEmployeeForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = formData.get('name');
    const surname = formData.get('surname');
    const dateOfBirth = formData.get('date-of-birth');
    const position = formData.get('position');
    const salary = formData.get('salary');

    const employeeTablesBody = document.querySelector('.employees-table').querySelector('tbody');
    const newRow = employeeTablesBody.insertRow();
    const nameCell = newRow.insertCell(0);
    const surnameCell = newRow.insertCell(1);
    const dateOfBirthCell = newRow.insertCell(2);
    const positionCell = newRow.insertCell(3);
    const salaryCell = newRow.insertCell(4);

    nameCell.textContent = name;
    surnameCell.textContent = surname;
    dateOfBirthCell.textContent = calculateAge(dateOfBirth);
    positionCell.textContent = position;
    salaryCell.textContent = salary;

    this.reset();
    employeePopup.classList.remove('active');
    document.body.classList.remove('active');
});

const addProjectForm = document.querySelector('.add-project-form');

addProjectForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const projectName = formData.get('projectName');
    const companyName = formData.get('companyName');
    const budget = formData.get('budget');
    const employeeCapacity = formData.get('employeeCapacity');

    const projectTablesBody = document.querySelector('.projects-table').querySelector('tbody');
    const newRow = projectTablesBody.insertRow();
    const projectNameCell = newRow.insertCell(0);
    const companyNameCell = newRow.insertCell(1);
    const budgetCell = newRow.insertCell(2);
    const employeeCapacityCell = newRow.insertCell(3);

    projectNameCell.textContent = projectName;
    companyNameCell.textContent = companyName;
    budgetCell.textContent = budget;
    employeeCapacityCell.textContent = employeeCapacity;

    this.reset();
    projectPopup.classList.remove('active');
    document.body.classList.remove('active');
});