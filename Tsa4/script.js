 let idNumber = document.getElementById('idNumber');
let firstName = document.getElementById('firstName');
let middleName = document.getElementById('middleName');
let lastName = document.getElementById('lastName');
let gender = document.getElementById('gender');
let birthday = document.getElementById('birthday');
 
let saveBtn = document.getElementById('saveBtn');
let dataTable = document.getElementById('dataTable');
 
dataTable.style.display = 'none';
 
let userData = [];
 
[idNumber, firstName, middleName, lastName, gender, birthday].forEach(input => {
    input.addEventListener('focus', () => {
        removeHighlight();
        input.style.backgroundColor = '#4ffcfcff';
    });
});
 
function removeHighlight() {
    idNumber.style.backgroundColor = '';
    firstName.style.backgroundColor = '';
    middleName.style.backgroundColor = '';
    lastName.style.backgroundColor = '';
    gender.style.backgroundColor = '';
    birthday.style.backgroundColor = '';
}
 
function saveData() {
    if (
        idNumber.value === '' ||
        firstName.value === '' ||
        middleName.value === '' ||
        lastName.value === '' ||
        gender.value === '' ||
        birthday.value === ''
    ) {
        alert('Please fill in all fields before saving.');
        return;
    }
 
    let user = {
        id: idNumber.value,
        first: firstName.value,
        middle: middleName.value,
        last: lastName.value,
        gen: gender.value,
        bday: birthday.value
    };
 
    userData.push(user);
 
    dataTable.style.display = 'table';
 
    let newRow = dataTable.insertRow();
    newRow.insertCell(0).textContent = user.id;
    newRow.insertCell(1).textContent = user.first;
    newRow.insertCell(2).textContent = user.middle;
    newRow.insertCell(3).textContent = user.last;
    newRow.insertCell(4).textContent = user.gen;
    newRow.insertCell(5).textContent = user.bday;
 
    saveBtn.style.backgroundColor = 'lightblue';
 
    idNumber.value = '';
    firstName.value = '';
    middleName.value = '';
    lastName.value = '';
    gender.value = '';
    birthday.value = '';
}
 
saveBtn.addEventListener('click', saveData);
