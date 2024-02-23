(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const g of n.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();const y=[{color:"bg-primary",nombre:"palo",matriz:[[[1],[1],[1],[1]],[[1,1,1,1]],[[1],[1],[1],[1]],[[1,1],[1,1]]]},{color:"bg-secondary",nombre:"cuadrado",matriz:[[[1,1],[1,1]],[[1,1],[1,1]],[[1,1],[1,1]],[[1,1],[1,1]]]},{color:"bg-success",nombre:"L",matriz:[[[1,0],[1,0],[1,1]],[[1,1,1],[1,0,0]],[[1,1],[0,1],[0,1]],[[1,1,1],[0,0,1]]]},{color:"bg-danger",nombre:"L invertida",matriz:[[[0,1],[0,1],[1,1]],[[1,0,0],[1,1,1]],[[1,0],[1,0],[1,1]],[[1,1,1],[1,0,0]]]},{color:"bg-warning",nombre:"T",matriz:[[[1,1,1],[0,1,0]],[[1,0],[1,1],[1,0]],[[0,1,0],[1,1,1]],[[0,1],[1,1],[0,1]]]},{color:"bg-info",nombre:"Z",matriz:[[[1,1,0],[0,1,1]],[[0,1],[1,1],[1,0]],[[1,1,0],[0,1,1]],[[0,1],[1,1],[0,1]]]},{color:"bg-dark",nombre:"Z invertida",matriz:[[[0,1,1],[1,1,0]],[[1,0],[1,1],[0,1]],[[0,1,1],[1,1,0]],[[1,0],[1,1],[0,1]]]}];class x{constructor(r,a=0,o=0,i=0){this.modelo=r,this.angulo=i,this.matriz=y[this.modelo].matriz[this.angulo],this.x=a,this.y=o,this.longitud=this.matriz[0].length,this.altura=this.matriz.length}girar(){this.angulo=this.angulo+1,this.angulo>3&&(this.angulo=0),this.matriz=y[this.modelo].matriz[this.angulo],this.longitud=this.matriz[0].length,this.altura=this.matriz.length}}const l=[{avatar:"img/account-avatar-profile-user-13-svgrepo-com.svg",nick:"Aaronvl31",puntos:"455",fecha:"31/12/2004"},{avatar:"img/account-avatar-profile-user-13-svgrepo-com.svg",nick:"OscarPajarraco",puntos:"2",fecha:"30/05/2004"},{avatar:"img/account-avatar-profile-user-13-svgrepo-com.svg",nick:"RaulicoBarcelona",puntos:"345",fecha:"04/12/2004"}],f=(t,r)=>{let a="";const o=document.querySelector("#partidas tbody");switch(t){case"nick":return console.log("Ordenar por nick"),l.sort((i,n)=>i.nick.localeCompare(n.nick,"es",{sensitivity:"base"})),a=h(l),o.innerHTML=a,l;case"points":return console.log("Ordenar por puntos"),l.sort((i,n)=>n.puntos-i.puntos),a=h(l),o.innerHTML=a,l;default:return console.log("Ordenar por fecha"),l.sort((i,n)=>new Date(i.fecha)-new Date(n.fecha)),a=h(l),o.innerHTML=a,l}},h=t=>{let r="";return t.forEach(a=>{r+=`
            <tr>
                <td><img src="${a.avatar}" style= "width: 30px" alt=""></td>
                <td>${a.nick}</td>
                <td>${a.puntos}</td>
                <td>${a.fecha}</td>
            </tr>`}),r};let p=[];const u={template:`
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
    `,script:()=>{function t(){const c=document.querySelector("#ranking");c.innerHTML=`<h2 class="text-center text-light">Ranking</h2>
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
                        ${p.slice(1).map((s,d)=>`
                            <tr>
                                <td class="fs-2">${d+1}</td>
                                <td><img src="${s.avatar}" alt="avatar" style="width: 30px;" /></td>
                                <td>${s.nick}</td>
                                <td>${s.puntos}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                    <tfoot></tfoot>
                </table>`}function r(){const c=document.querySelector("#partidas");c.innerHTML=`<h2 class="text-center text-light">Partidas</h2>
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
                        ${p.slice(1).map(s=>`
                            <tr>
                                <td><img src="${s.avatar}" alt="avatar" style="width: 30px;" /></td>
                                <td>${s.nick}</td>
                                <td>${s.puntos}</td>
                                <td>${a(s.fecha)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                    <tfoot></tfoot>
                </table>`}function a(c){const s=c.getDate().toString().padStart(2,"0"),d=(c.getMonth()+1).toString().padStart(2,"0"),b=c.getFullYear();return`${s}/${d}/${b}`}function o(c){console.log("Guardando partida"),p.push(c),console.log(p),r(),t()}const i=new Date,n={avatar:"https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg",nick:e.nick,puntos:e.puntos,fecha:i};o(n),document.getElementById("botonBuscar").addEventListener("click",z);function z(){const c=document.getElementById("buscadorNick").value;console.log("nombre buscado: ",c);const s=p.filter(d=>d.nick.toLowerCase().includes(c.toLowerCase()));P(s)}function P(c){const s=document.querySelector("#partidas tbody");s.innerHTML="",c.forEach(d=>{const b=`
                    <tr>
                        <td><img src="${d.avatar}" style="width: 30px" alt=""></td>
                        <td>${d.nick}</td>
                        <td>${d.puntos}</td>
                        <td>${a(d.fecha)}</td>
                    </tr>
                `;s.insertAdjacentHTML("beforeend",b)})}document.querySelector("#flechaNick").addEventListener("click",function(){console.log("Click en flechaNick"),f("nick")}),document.querySelector("#flechaPuntuacion").addEventListener("click",function(){console.log("Click en flechaPuntuacion"),f("points")}),document.querySelector("#flechaFecha").addEventListener("click",function(){console.log("Click en flechaFecha"),f("date")})}},L={template:`
  <!-- Pantalla del juego -->

  <div id="guardar" class="mt-5  d-flex justify-content-center align-items-center">
  <div  class="bg-dark position-center p-2" style="">
      <h3>Quieres guardar la partida?</h3>
          <label for="nick">Nick:</label><br>
          <input type="text" id="nick" name="nick" required><br><br>
          <button id="btnGuardar">Guardar</button>
        <button id="btnCancelar">Cancelar</button>
   
  </div>
</div>
  
    `,script:()=>{}},e={matriz:[[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1]],pintaPanel:()=>{const t=document.querySelector("#panel");t.innerHTML="";for(let a=0;a<e.matriz.length-1;a++){let o='<div class="fila" style="display: flex; justify-content: center;">';for(let i=1;i<e.matriz[a].length-1;i++){let n="";e.matriz[a][i]===0?n+='<div class="celda" style="background-color: #343a40; border: 1px solid black"></div>':n+='<div class="celda" style="background-color: #007bff; border: 1px solid black"></div>',o+=n}o+="</div>",t.innerHTML+=o}const r=document.querySelector("#puntos");r.textContent=e.puntos},borrarPieza:()=>{if(e.nuevaPieza){for(let t=0;t<e.nuevaPieza.altura;t++)for(let r=0;r<e.nuevaPieza.longitud;r++)e.nuevaPieza.matriz[t][r]&&(e.matriz[t+e.nuevaPieza.y][r+e.nuevaPieza.x]=0);e.pintaPanel()}},crearNuevaPieza:()=>{const t=Math.floor(Math.random()*7),r=y[t].matriz[0].length;let a;switch(r){case 1:a=Math.floor(Math.random()*10);break;case 2:a=Math.floor(Math.random()*9);break;case 3:a=Math.floor(Math.random()*8);break;case 4:a=Math.floor(Math.random()*7);break}const o=new x(t,a,1,0);return e.nuevaPieza=o,o},insertarPieza:()=>{for(let t=0;t<e.nuevaPieza.altura;t++)for(let r=0;r<e.nuevaPieza.longitud;r++){const a=e.nuevaPieza.matriz[t][r];a&&(e.matriz[t+e.nuevaPieza.y][r+e.nuevaPieza.x]=a)}e.pintaPanel()},puntos:0,moverIzq(){for(let t=0;t<e.nuevaPieza.altura;t++)if(e.matriz[e.nuevaPieza.y+t][e.nuevaPieza.x-1]==1)return;e.borrarPieza(),e.nuevaPieza.x-=1,e.puntos+=10,console.log("Puntos:",e.puntos),e.insertarPieza(),e.pintaPanel()},moverDra(){for(let t=0;t<e.nuevaPieza.altura;t++)if(e.matriz[e.nuevaPieza.y+t][e.nuevaPieza.x+e.nuevaPieza.longitud]==1)return;e.borrarPieza(),e.nuevaPieza.x+=1,e.puntos+=10,console.log("Puntos:",e.puntos),e.insertarPieza(),e.pintaPanel()},bajar(){let t=!1;for(let r=0;r<e.nuevaPieza.longitud;r++)if(e.matriz[e.nuevaPieza.y+e.nuevaPieza.altura][e.nuevaPieza.x+r]==1){t=!0,e.insertarPieza(),e.nuevaPieza=e.crearNuevaPieza();break}if(t){e.puntos+=50,console.log("Puntos",this.puntos);const r=document.querySelector("#juego");r.innerHTML=L.template;const a=document.querySelector("#btnGuardar"),o=document.querySelector("#btnCancelar");a.addEventListener("click",()=>{const i=document.querySelector("#nick").value;e.nick=i;const n=document.querySelector("main");n.innerHTML=u.template,u.script()}),o.addEventListener("click",()=>{r.innerHTML=v.template})}else e.borrarPieza(),e.nuevaPieza.y+=1,e.puntos+=10;console.log("Puntos:",e.puntos),e.insertarPieza(),e.pintaPanel()},iniciarMovimiento:()=>{e.movimientoInterval=setInterval(()=>{e.bajar()},2e3)},controlTeclas:()=>{document.addEventListener("keydown",t=>{switch(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.key)&&t.preventDefault(),t.key){case"ArrowLeft":e.moverIzq(),console.log("izquierda");break;case"ArrowRight":e.moverDra(),console.log("derecha");break;case"ArrowDown":e.bajar(),console.log("abajo");break;case"ArrowUp":e.borrarPieza(),e.nuevaPieza.girar(),e.puntos+=20,console.log("Puntos:",e.puntos),e.insertarPieza(),console.log("arriba");break}})}},v={template:`
  <!-- Pantalla del juego -->

  <div id="juego">
  <div class="row">
    <!-- Panel izquierda -->
    <div
      class="col-4 d-flex flex-column justify-content-end align-items-center p-5"
    >
      <h4>Nivel: <span>2</span></h4>
      <h4>Tiempo: <span>5:22</span></h4>
      <h4>Lineas: <span>2</span></h4>
      <h4>Puntos: <span id="puntos"></span></h4>
    </div>
    <!-- Panel central -->
    <div class="col-4 d-flex justify-content-center">
      <div id="panel" class="p-5">
       
      </div>
    </div>
    					<!-- Panel derecha -->
              <div
              class="col-4 d-flex flex-column justify-content-start align-items-center p-5"
            >
              <div id="piezaSiguiente">
                <h4>Pieza siguiente:</h4>
                <div class="piezaSiguiente m-2">
                  <div class="fila d-flex justify-content-center">
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                    <div class="celda bg-dark border-secondary">x</div>
                  </div>
                  <div class="fila d-flex justify-content-center">
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                    <div class="celda bg-dark border-secondary">x</div>
                  </div>
                  <div class="fila d-flex justify-content-center">
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                  </div>
                </div>
                <div class="piezaSiguiente m-2">
                  <div class="fila d-flex justify-content-center">
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                    <div class="celda bg-dark border-secondary">x</div>
                  </div>
                  <div class="fila d-flex justify-content-center">
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                    <div class="celda bg-dark border-secondary">x</div>
                  </div>
                  <div class="fila d-flex justify-content-center">
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                  </div>
                </div>
                <div class="piezaSiguiente m-2">
                  <div class="fila d-flex justify-content-center">
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                    <div class="celda bg-dark border-secondary">x</div>
                  </div>
                  <div class="fila d-flex justify-content-center">
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                    <div class="celda bg-dark border-secondary">x</div>
                  </div>
                  <div class="fila d-flex justify-content-center">
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                    <div class="celda bg-primary bg-gradient border-dark">x</div>
                  </div>
                </div>
              </div>
              <hr />
              <div id="piezaGuardada">
              <button class="" id="insertarPieza">Insertar pieza</button>
                <h4>Pieza guardada:</h4>
                <div class="piezaGuardada">
                  <div class="piezaSiguiente m-2">
                    <div class="fila d-flex justify-content-center">
                      <div class="celda bg-warning bg-gradient border-dark">x</div>
                      <div class="celda bg-warning border-secondary">x</div>
                    </div>
                    <div class="fila d-flex justify-content-center">
                      <div class="celda bg-warning bg-gradient border-dark">x</div>
                      <div class="celda bg-warning border-secondary">x</div>
                      
                    </div>
                   
                    <button class="mt-5" id="borrarPieza">Borrar pieza</button>

                   
                  </div>
                </div>
              </div>
            </div>
    `,script:()=>{e.pintaPanel(),e.crearNuevaPieza(),e.controlTeclas(),e.insertarPieza(),e.iniciarMovimiento(),document.getElementById("insertarPieza").addEventListener("click",()=>{}),document.getElementById("borrarPieza").addEventListener("click",()=>{e.borrarPieza(),e.crearNuevaPieza()})}},m={template:`
    <div id="intro" class="text-center p-5">
    <p>
      Tetris és un videojoc de tipus trencaclosques. Fou inventat per
      l'enginyer informàtic rus Aleksei Pàjitnov l'any 1984,[1] mentre
      treballava a l'Acadèmia de Ciències de Moscou.
    </p>
    <h2>Instruccions:</h2>
    <p>Pots moure les peces fent servir les fletxes d'esquerra i dreta</p>
    <p>Amb la fletxa avall pots girar la peça</p>
    <p>
      '<strong>Ñ</strong>' per canviar la peça actual per la peça que està a
      punt de sortir (que pots veure a la columna de la dreta)
    </p>
    <p>
      Al final de la partida podràs desar la teva puntuació, i verue el
      ranking de jugadors
    </p>
    <button id="btnJugar" class="btn btn-success fs-1 mt-5">JUGAR</button>
    <hr />
  </div>
    `,script:()=>{document.querySelector("#btnJugar").addEventListener("click",t=>{t.preventDefault(),document.querySelector("main").innerHTML=v.template,v.script()})}},k={template:`
    <nav class="navbar navbar-light bg-dark">
      <div class="container-fluid">
        <div class="mx-auto">
          <button id="vistaHome" class="btn btn-success mx-2 fs-4">HOME</button>
          <button id="vistaRanking" class="btn btn-success mx-2 fs-4">RANKING</button>
          <button id="vistaJuego" class="btn btn-success mx-2 fs-4">JUEGO</button>
        </div>
      </div>
    </nav>
    `,script:()=>{document.querySelector("#vistaHome").addEventListener("click",t=>{t.preventDefault(),document.querySelector("main").innerHTML=m.template,m.script()}),document.querySelector("#vistaRanking").addEventListener("click",t=>{t.preventDefault(),document.querySelector("main").innerHTML=u.template,u.script()}),document.querySelector("#vistaJuego").addEventListener("click",t=>{t.preventDefault(),document.querySelector("main").innerHTML=v.template,v.script()})}};document.querySelector("header").innerHTML=k.template;k.script();document.querySelector("main").innerHTML=u.template;u.script();document.querySelector("main").innerHTML=m.template;m.script();v.script();
