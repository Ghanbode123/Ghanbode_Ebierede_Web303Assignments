const randomNames = [
    { firstName: "John", lastName: "Doe", gender: "Male", occupation: "Actor", maritalStatus:"Single" },
    { firstName: "Jane", lastName: "Smith", gender: "Female", occupation: "Actress", maritalStatus:"Single" },
    { firstName: "Antonella", lastName: "Roccusso", gender: "Female", occupation: "Actress", maritalStatus:"Married" },
    { firstName: "Chritopher", lastName: "Gustov", gender: "Male", occupation: "Actor", maritalStatus:"Married" },
    { firstName: "Beatrice", lastName: "Okene", gender: "Female", occupation: "Actress", maritalStatus:"Single" },
    { firstName: "Kasandra", lastName: "Rogrigues", gender: "Female", occupation: "Actress", maritalStatus:"Married" },
    { firstName: "Randolph", lastName: "Anderson", gender: "Male", occupation: "Actor", maritalStatus:"Single" },
    
];

function displayRandomNames() {
    const tableBody = $('#charactersTable tbody');
    tableBody.empty();  

    randomNames.forEach(function(name) {
        const row = $('<tr>');
        Object.values(name).forEach(function(value) {
            row.append($('<td>').text(value));
        });
        tableBody.append(row);
    });
}



$(document).ready(function() {
    displayRandomNames();
});
