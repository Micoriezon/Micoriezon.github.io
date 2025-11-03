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
 
function getUserInput() {
    return {
        id: idNumber.value.trim(),
        first: firstName.value.trim(),
        middle: middleName.value.trim(),
        last: lastName.value.trim(),
        gen: gender.value.trim(),
        bday: birthday.value.trim()
    };
}
 
function clearInputs() {
    [idNumber, firstName, middleName, lastName, gender, birthday].forEach(input => input.value = '');
}
 
function saveUserData() {
    let userInput = getUserInput();
 
    if (Object.values(userInput).some(value => value === '')) {
        alert('Please fill in all fields before saving.');
        return;
    }
 
    userData.push(userInput);
 
    dataTable.style.display = 'table';
 
    let tbody = dataTable.querySelector('tbody');
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        ${userInput.id}</td>
        <td>${userInput.first}</td>
        <td>${userInput.middle}</td>
        <td>${userInput.last}</td>
        <td>${userInput.gen}</td>
        <td>${userInput.bday}</td>
    `;
    tbody.appendChild(newRow);
 
    clearInputs();
    saveBtn.style.backgroundColor = '#a7d8de';
}
 
saveBtn.addEventListener('click', saveUserData);
 