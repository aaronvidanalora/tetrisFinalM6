import { panel } from "../componentes/panel";
import { orden } from "../funciones/funciones";

// Define una lista para almacenar todas las partidas
let juegos = [];

export const ranking = {
    template: //html
    `
    <header class="d-flex align-items-center justify-content-center">
        <img src="img/logo.png" alt="logo" width="200" class="mt-5" />
    </header>
    <main class="container mt-5 bg-opacity-50 bg-dark p-2">
       
        <!-- Pantalla tablas y ranking -->
        <div id="info" class="">
            <div id="ranking" class="m-5 p-5 bg-dark">
            </div>
            <div id="partidas" class="m-5 p-5 bg-dark">
            </div>
        </div>
    </main>
    `
    ,
    script: () => {
        function pintaRanking() {
            const rankingElement = document.querySelector('#ranking');
            rankingElement.innerHTML = //html 
                `<h2 class="text-center text-light">Ranking</h2>
                <table class="table table-dark align-middle">
                    <thead>
                        <tr class="bg-dark">
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${juegos.slice(1).map((datos, index) => `
                            <tr>
                                <td class="fs-2">${index + 1}</td>
                                <td><img src="${datos.avatar}" alt="avatar" style="width: 30px;" /></td>
                                <td>${datos.nick}</td>
                                <td>${datos.puntos}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                    <tfoot></tfoot>
                </table>`;
        }
        

        function pintaTabla() {
            const partidasElement = document.querySelector('#partidas');
            partidasElement.innerHTML = //html 
                `<h2 class="text-center text-light">Partidas</h2>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nick</th>
                            <th>Puntuación</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${juegos.slice(1).map(datos => `
                            <tr>
                                <td><img src="${datos.avatar}" alt="avatar" style="width: 30px;" /></td>
                                <td>${datos.nick}</td>
                                <td>${datos.puntos}</td>
                                <td>${formatoFecha(datos.fecha)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                    <tfoot></tfoot>
                </table>`;
        }

        function formatoFecha(fecha) {
            // Formatea la fecha en formato dd/mm/yyyy
            const dia = fecha.getDate().toString().padStart(2, '0');
            const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
            const año = fecha.getFullYear();
            return `${dia}/${mes}/${año}`;
        }

        function insertaNuevaPartida(datosNuevos) {
            console.log("Guardando partida");
            juegos.push(datosNuevos);
            console.log(juegos);
            pintaTabla();
            pintaRanking();
        }

        const fechaActual = new Date();
        const datosNuevos = {
            avatar: 'https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg',
            nick: panel.nick,
            puntos: panel.puntos,
            fecha: fechaActual
        };

        insertaNuevaPartida(datosNuevos);
        
        const botonBuscar = document.getElementById('botonBuscar');
        botonBuscar.addEventListener('click', buscar);

        function buscar() {
            const inputNick = document.getElementById('buscadorNick').value;
            console.log('nombre buscado: ', inputNick);

            // Filtra las partidas que coinciden con el nombre buscado
            const partidasFiltradas = juegos.filter(partida => partida.nick.toLowerCase().includes(inputNick.toLowerCase()));

            // Pinta la tabla con las partidas filtradas
            pintaTablaFiltrada(partidasFiltradas);
        }

        function pintaTablaFiltrada(partidas) {
            const partidasElement = document.querySelector('#partidas tbody');

            // Limpia la tabla actual
            partidasElement.innerHTML = '';

            // Agrega las filas de las partidas filtradas
            partidas.forEach(element => {
                const filaHTML = `
                    <tr>
                        <td><img src="${element.avatar}" style="width: 30px" alt=""></td>
                        <td>${element.nick}</td>
                        <td>${element.puntos}</td>
                        <td>${formatoFecha(element.fecha)}</td>
                    </tr>
                `;
                partidasElement.insertAdjacentHTML('beforeend', filaHTML);
            });
        }

        const iconoNick = document.querySelector('#flechaNick');
        iconoNick.addEventListener('click', function () {
            console.log('Click en flechaNick');
            orden('nick', 'down');
        });

        const iconoPoints = document.querySelector('#flechaPuntuacion');
        iconoPoints.addEventListener('click', function () {
            console.log('Click en flechaPuntuacion');
            orden('points', 'down');
        });

        const iconoDate = document.querySelector('#flechaFecha');
        iconoDate.addEventListener('click', function () {
            console.log('Click en flechaFecha');
            orden('date', 'down');
        });
    }
};
