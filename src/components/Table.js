export default class Table {
    // intialize table
    init() {
        const table = document.createElement('table');

        table.innerHTML = `
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Gender</th>
            </tr>
        `;

        return table;
    }

    // create table row
    row(data) {
        const row = document.createElement('tr');
        row.id = `${data.id}`;

        row.innerHTML = `
        <td>${data.id}</td>
        <td>${data.first_name}</td>
        <td>${data.last_name}</td>
        <td>${data.email}</td>
        <td>${data.gender}</td>
        `
    }
}