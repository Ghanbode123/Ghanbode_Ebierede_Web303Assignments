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

$(document).ready(function () {
    const tableBody = $('#charactersTable tbody');
    const tableHeadings = $('#charactersTable th');
    let sortDirection = {}; 

    function displayRandomNames() {
        tableBody.empty();

        randomNames.forEach(function (name) {
            const row = $('<tr>');
            Object.values(name).forEach(function (value) {
                row.append($('<td>').text(value));
            });
            tableBody.append(row);
        });
    }

    function sortTable(columnIndex) {
        const isAscending = sortDirection[columnIndex] === 'asc';

        randomNames.sort(function (a, b) {
            const valueA = Object.values(a)[columnIndex];
            const valueB = Object.values(b)[columnIndex];

            if (valueA < valueB) {
                return isAscending ? -1 : 1;
            } else if (valueA > valueB) {
                return isAscending ? 1 : -1;
            } else {
                return 0;
            }
        });

        displayRandomNames();
        updateChevrons(columnIndex, isAscending);
        sortDirection[columnIndex] = isAscending ? 'desc' : 'asc';
    }

    function updateChevrons(columnIndex, isAscending) {
        tableHeadings.find('span').remove(); 

        const chevron = isAscending ? '&#x25B2;' : '&#x25BC;';
        tableHeadings.eq(columnIndex).append(`<span>${chevron}</span>`);
    }

    tableHeadings.click(function () {
        const columnIndex = $(this).index();
        sortTable(columnIndex);
    });

    displayRandomNames();
});
