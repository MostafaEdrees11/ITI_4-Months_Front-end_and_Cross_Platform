var students = [
  { name: "Ali", age: 20, Crs: "CS" },
  { name: "Sara", age: 22, Crs: "Math" },
  { name: "Omar", age: 19, Crs: "Physics" },
  { name: "Laila", age: 21, Crs: "CS" },
  { name: "Hassan", age: 23, Crs: "Engineering" },
  { name: "Mona", age: 20, Crs: "Biology" },
  { name: "Kareem", age: 24, Crs: "Math" },
  { name: "Noor", age: 18, Crs: "CS" }
];

tableBody = document.querySelector("table").children[0];

function listStudentsInTable(_students) {
    
    _students.forEach(function (elm) {
        var newRow = document.createElement("tr");
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        var cell3 = document.createElement("td");
        
        cell1.textContent = elm.name;
        cell2.textContent = elm.age;
        cell3.textContent = elm.Crs;

        newRow.appendChild(cell1);
        newRow.appendChild(cell2);
        newRow.appendChild(cell3);

        tableBody.appendChild(newRow);
    });
}

listStudentsInTable(students);

searchArea = document.getElementById("search");

function clearCurrentTableData(_table) {

    while (_table.children.length > 1)
    {
        _table.deleteRow(1);
    }
}

searchArea.addEventListener('keyup', function (e) {

    if (searchArea.value === "") {
        clearCurrentTableData(tableBody);
        listStudentsInTable(students);
    } else {
        filteredStudents = students.filter(function (elm) {
            return (searchArea.value === elm.name) || (searchArea.value === elm.Crs);
        })

        if (filteredStudents.length != 0) {
            clearCurrentTableData(tableBody);
            listStudentsInTable(filteredStudents);
        } else {
            clearCurrentTableData(tableBody);
        }
    }
})


function sortStudent() {
    
    if (this.value === 'no') {
        clearCurrentTableData(tableBody);
        listStudentsInTable(students);
    } else if (this.value === 'Age') {
        students.sort(function (a, b) {
            return a.age - b.age;
        })
        clearCurrentTableData(tableBody);
        listStudentsInTable(students);
    } else if (this.value = 'Name') {
        students.sort(function (a, b) {
            if (a.name[0].toLowerCase() > b.name[0].toLowerCase())
                return 1;
            else if (a.name[0].toLowerCase() < b.name[0].toLowerCase())
                return -1;
            else
                return 0;
        })
        clearCurrentTableData(tableBody);
        listStudentsInTable(students);
    }
}
selectionOption = document.getElementsByName("sortStudents")[0];
selectionOption.addEventListener('change', sortStudent)