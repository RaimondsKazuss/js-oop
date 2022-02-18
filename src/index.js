import css from './main.css'
import Table from './components/Table'
import { response } from 'express';

const table = new Table();

document.querySelector('body').appendChild(table.init())

// get data from "server", populate table with data
//TODO: fix errors
// fetch('http://localhost:3000/router')
//     .then(response => response.json())
//     .then(json => {
//         json.map(row => {
//             document.querySelector('table')
//                     .appendChild(table.row(row))
//         })
//     })