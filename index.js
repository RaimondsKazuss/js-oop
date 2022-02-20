import css from './src/main.css';
import Table from './src/components/Table.js';
import Modal from './src/components/Modal.js';
import data from './server/data';




const table = new Table();
const modal = new Modal();

document.querySelector('body').appendChild(table.init());
document.querySelector('body').appendChild(modal.init());


document.addEventListener('click', selectedRow);
function selectedRow() {

    var index,
        table = document.getElementById('table');

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            index = this.rowIndex - 1;
            $('#exampleModal').modal('show');
            var info = data[index].last_name + " " + data[index].first_name + " " + data[index].email + " " + data[index].gender;
            console.log(info);
        };
    }
}







fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(json => {
        json.map(row => {
            document.querySelector('table')
                .appendChild(table.row(row));
        });

    });





