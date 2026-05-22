// CREATE
function addEmployee() {
    let employee = {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        department: document.getElementById("department").value,
        salary: document.getElementById("salary").value
    };

    fetch("http://localhost:8081/addEmployee", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(employee)

    })

    .then(response => response.json())

    .then(data => {

        loadEmployees();
    });
}
// READ
function loadEmployees() {
    fetch("http://localhost:8081/employees")
    .then(response => response.json())

    .then(data => {

        let table = document.getElementById("employeeTable");

        table.innerHTML = "";

        data.forEach(emp => {

            let row = `

                <tr>
                    <td>${emp.id}</td>
                    <td>${emp.name}</td>
                    <td>${emp.department}</td>
                    <td>${emp.salary}</td>

                </tr>

            `;

            table.innerHTML += row;
        });

    });
}



// UPDATE
function updateEmployee() {

    let employee = {

        id: document.getElementById("id").value,

        name: document.getElementById("name").value,

        department: document.getElementById("department").value,

        salary: document.getElementById("salary").value
    };

    fetch("http://localhost:8081/updateEmployee", {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(employee)

    })

    .then(response => response.json())

    .then(data => {

        loadEmployees();
    });
}



// DELETE
function deleteEmployee() {

    let id = document.getElementById("id").value;

    fetch(`http://localhost:8081/delete/${id}`, {

        method: "DELETE"

    })

    .then(response => response.text())

    .then(data => {

        loadEmployees();
    });
}



// AUTO LOAD
loadEmployees();