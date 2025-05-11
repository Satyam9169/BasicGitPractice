const employees = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        department: "Engineering",
        position: "Software Engineer",
        salary: 70000,
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 25,
        department: "Marketing",
        position: "Marketing Specialist",
        salary: 50000,
    },
    {
        id: 3,
        name: "Alice Johnson",
        age: 35,
        department: "HR",
        position: "HR Manager",
        salary: 60000,
    },
    {
        id: 4,
        name: "Bob Brown",
        age: 28,
        department: "Sales",
        position: "Sales Executive",
        salary: 55000,
    },
    {
        id: 5,
        name: "Charlie Davis",
        age: 40,
        department: "Finance",
        position: "Accountant",
        salary: 65000,
    },
    {
        id: 6,
        name: "Emily Wilson",
        age: 32,
        department: "Engineering",
        position: "DevOps Engineer",
        salary: 75000,
    },
    {
        id: 7,
        name: "Frank Thomas",
        age: 29,
        department: "Customer Support",
        position: "Support Specialist",
        salary: 45000,
    },
    {
        id: 8,
        name: "Grace Lee",
        age: 27,
        department: "Design",
        position: "UI/UX Designer",
        salary: 60000,
    },
    {
        id: 9,
        name: "Henry Walker",
        age: 33,
        department: "Engineering",
        position: "Backend Developer",
        salary: 72000,
    },
    {
        id: 10,
        name: "Ivy Martinez",
        age: 26,
        department: "Product",
        position: "Product Manager",
        salary: 80000,
    },
];

// Function to validate employee data
function validateEmployees(employees) {
    employees.forEach(employee => {
        if (typeof employee.age !== 'number' || employee.age <= 0) {
            throw new Error(`Invalid age for employee with id ${employee.id}`);
        }
    });
}

// Validate employees before exporting
validateEmployees(employees);
// show the name of employee over browser
employees.forEach(employee => {
    console.log(`Employee Name: ${employee.name}`);
    // You can also use document.write() if you want to display it on a web page
    // document.write(`Employee Name: ${employee.name}<br>`);
    const respose = document.createElement('div');
    respose.innerHTML = `Employee Name: ${employee.name}`;
    document.body.appendChild(respose);
    document.write(`Employee Name: ${employee.name}<br>`);
})

module.exports = employees;