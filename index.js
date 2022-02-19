import  css from './src/main.css';
import Table from './src/components/Table.js'

const table = new Table();

document.querySelector('body').appendChild(table.init())

fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(json => {
        json.map(row => {
            document.querySelector('table')
                .appendChild(table.row(row))
        })
    })