const closeAsideBtn = document.querySelector('.close-sidebar');
const openAsideBtn = document.querySelector('.open-sidebar');

const asideSection = document.querySelector('aside');

closeAsideBtn.addEventListener('click', () => {
    closeAsideBtn.classList.toggle('active');
    openAsideBtn.classList.toggle('active');
    asideSection.classList.toggle('active');
});

openAsideBtn.addEventListener('click', () => {
    closeAsideBtn.classList.toggle('active');
    openAsideBtn.classList.toggle('active');
    asideSection.classList.toggle('active');
});

const projectsSwitchBtn = document.querySelector('.projects-switch');
const employeesSwitchBtn = document.querySelector('.employees-switch');

const projectsContent = document.querySelector('.projects-content');
const employeesContent = document.querySelector('.employees-content');

projectsSwitchBtn.addEventListener('click', () => {
    projectsSwitchBtn.classList.add('active');
    employeesSwitchBtn.classList.remove('active');
    projectsContent.classList.add('active');
    employeesContent.classList.remove('active');
});

employeesSwitchBtn.addEventListener('click', () => {
    projectsSwitchBtn.classList.remove('active');
    employeesSwitchBtn.classList.add('active');
    projectsContent.classList.remove('active');
    employeesContent.classList.add('active');
});

const addProjectBtn = document.querySelector('.add-project');
const cancelProjectBtn = document.querySelector('.cancel-add-project');
const addEmployeeBtn = document.querySelector('.add-employee');
const cancelEmployeeBtn = document.querySelector('.cancel-add-employee');
const seedProjectBtn = document.querySelector('.seed-project');
const closeSeedProjectBtn = document.querySelector('.close-seed-data');

const projectPopup = document.querySelector('.add-project-popup');
const employeePopup = document.querySelector('.add-employee-popup');
const seedPopup = document.querySelector('.seed-data-popup');

addProjectBtn.addEventListener('click', () => {
    projectPopup.classList.add('active');
    document.body.classList.add('active');
});

cancelProjectBtn.addEventListener('click', () => {
    projectPopup.classList.remove('active');
    document.body.classList.remove('active');
});

addEmployeeBtn.addEventListener('click', () => {
    employeePopup.classList.add('active');
    document.body.classList.add('active');
});

cancelEmployeeBtn.addEventListener('click', () => {
    employeePopup.classList.remove('active');
    document.body.classList.remove('active');
});

seedProjectBtn.addEventListener('click', () => {
    seedPopup.classList.add('active');
    document.body.classList.add('active');
});

closeSeedProjectBtn.addEventListener('click', () => {
    seedPopup.classList.remove('active');
    document.body.classList.remove('active');
});

const popupBackdrop = document.querySelector('.popup-backdrop');

popupBackdrop.addEventListener('click', (e) => {
    projectPopup.classList.remove('active');
    employeePopup.classList.remove('active');
    seedPopup.classList.remove('active');
    document.body.classList.remove('active');
});