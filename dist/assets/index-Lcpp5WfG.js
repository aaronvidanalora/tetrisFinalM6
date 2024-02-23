(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();const P=[{nombre:"palo",matriz:[[[2],[2],[2],[2]],[[2,2,2,2]],[[2],[2],[2],[2]],[[2,2,2,2]]]},{nombre:"cuadrado",matriz:[[[3,3],[3,3]],[[3,3],[3,3]],[[3,3],[3,3]],[[3,3],[3,3]]]},{nombre:"L",matriz:[[[4,0],[4,0],[4,4]],[[4,4,4],[4,0,0]],[[4,4],[0,4],[0,4]],[[4,4,4],[0,0,4]]]},{nombre:"L invertida",matriz:[[[0,5],[0,5],[5,5]],[[5,0,0],[5,5,5]],[[5,5],[5,0],[5,0]],[[5,5,5],[0,0,5]]]},{nombre:"T",matriz:[[[6,6,6],[0,6,0]],[[6,0],[6,6],[6,0]],[[0,6,0],[6,6,6]],[[6,0],[6,6],[6,0]]]},{nombre:"Z",matriz:[[[7,7,0],[0,7,7]],[[0,7],[7,7],[7,0]],[[0,7,7],[7,7,0]],[[7,0],[7,7],[0,7]]]},{nombre:"Z invertida",matriz:[[[0,8,8],[8,8,0]],[[8,0],[8,8],[0,8]],[[8,8,0],[0,8,8]],[[0,8],[8,8],[8,0]]]}];class L{constructor(t,i=0,o=0,n=0){this.modelo=t,this.angulo=n,this.matriz=P[this.modelo].matriz[this.angulo],this.x=i,this.y=o,this.longitud=this.matriz[0].length,this.altura=this.matriz.length}girar(){const t=this.angulo,i=this.matriz;this.angulo=this.angulo+1,this.angulo>3&&(this.angulo=0),this.matriz=P[this.modelo].matriz[this.angulo],this.longitud=this.matriz[0].length,this.altura=this.matriz.length;const o=12-this.longitud;this.x>o&&(this.angulo=t,this.matriz=i,this.longitud=this.matriz[0].length,this.altura=this.matriz.length)}}const u=[{avatar:"img/account-avatar-profile-user-13-svgrepo-com.svg",nick:"Aaronvl31",puntos:"455",fecha:"31/12/2004"},{avatar:"img/account-avatar-profile-user-13-svgrepo-com.svg",nick:"OscarPajarraco",puntos:"2",fecha:"30/05/2004"},{avatar:"img/account-avatar-profile-user-13-svgrepo-com.svg",nick:"RaulicoBarcelona",puntos:"345",fecha:"04/12/2004"}],h=(a,t)=>{let i="";const o=document.querySelector("#partidas tbody");switch(a){case"nick":return console.log("Ordenar por nick"),u.sort((n,r)=>n.nick.localeCompare(r.nick,"es",{sensitivity:"base"})),i=b(u),o.innerHTML=i,u;case"points":return console.log("Ordenar por puntos"),u.sort((n,r)=>r.puntos-n.puntos),i=b(u),o.innerHTML=i,u;default:return console.log("Ordenar por fecha"),u.sort((n,r)=>new Date(n.fecha)-new Date(r.fecha)),i=b(u),o.innerHTML=i,u}},b=a=>{let t="";return a.forEach(i=>{t+=`
            <tr>
                <td><img src="${i.avatar}" style= "width: 30px" alt=""></td>
                <td>${i.nick}</td>
                <td>${i.puntos}</td>
                <td>${i.fecha}</td>
            </tr>`}),t};let p=[];const v={template:`
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
    `,script:()=>{function a(){const l=document.querySelector("#ranking");l.innerHTML=`<h2 class="text-center text-light">Ranking</h2>
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
                </table>`}function t(){const l=document.querySelector("#partidas");l.innerHTML=`<h2 class="text-center text-light">Partidas</h2>
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
                                <td>${i(s.fecha)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                    <tfoot></tfoot>
                </table>`}function i(l){const s=l.getDate().toString().padStart(2,"0"),d=(l.getMonth()+1).toString().padStart(2,"0"),f=l.getFullYear();return`${s}/${d}/${f}`}function o(l){console.log("Guardando partida"),p.push(l),console.log(p),t(),a()}const n=new Date,r={avatar:"https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg",nick:e.nick,puntos:e.puntos,fecha:n};o(r),document.getElementById("botonBuscar").addEventListener("click",z);function z(){const l=document.getElementById("buscadorNick").value;console.log("nombre buscado: ",l);const s=p.filter(d=>d.nick.toLowerCase().includes(l.toLowerCase()));k(s)}function k(l){const s=document.querySelector("#partidas tbody");s.innerHTML="",l.forEach(d=>{const f=`
                    <tr>
                        <td><img src="${d.avatar}" style="width: 30px" alt=""></td>
                        <td>${d.nick}</td>
                        <td>${d.puntos}</td>
                        <td>${i(d.fecha)}</td>
                    </tr>
                `;s.insertAdjacentHTML("beforeend",f)})}document.querySelector("#flechaNick").addEventListener("click",function(){console.log("Click en flechaNick"),h("nick")}),document.querySelector("#flechaPuntuacion").addEventListener("click",function(){console.log("Click en flechaPuntuacion"),h("points")}),document.querySelector("#flechaFecha").addEventListener("click",function(){console.log("Click en flechaFecha"),h("date")})}},M={template:`
  <!-- Pantalla del juego -->

  <div id="guardar" class="mt-5  d-flex justify-content-center align-items-center">
  <div  class="bg-dark position-center p-2" style="">
    <h1>¡¡¡¡¡GAME OVER!!!!!!</h1>
      <h3>Quieres guardar la partida?</h3>
          <label for="nick">Nick:</label><br>
          <input type="text" id="nick" name="nick" required><br><br>
          <button id="btnGuardar">Guardar</button>
        <button id="btnCancelar">Cancelar</button>
   
  </div>
</div>
  
    `,script:()=>{}},e={matriz:[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1]],nuevaPieza:null,cambiarPieza:null,piezaGuardada:null,nivel:1,limpiar:1,tiempo:0,pintaPanel:()=>{const a=document.querySelector("#panel");a.innerHTML="";const t=["black","black","rgb(64, 230, 64)","rgb(255, 255, 0)","purple","red","aqua","rgb(255, 182, 47)","rgb(255, 190, 201)"];for(let o=1;o<e.matriz.length-1;o++){let n='<div class="fila d-flex justify-content-center">';for(let r=0;r<e.matriz[o].length;r++){let c="";if(e.matriz[o][r]==0)c+='<div class="celda bg-dark border border-secondary"></div>';else{const z=e.matriz[o][r];c=`<div class="celda border border-secondary" style="background-color: ${t[z]};"></div>`}n+=c}n+="<div>",a.innerHTML+=n}const i=document.querySelector("#puntos");i.innerHTML=e.puntos},borrarPieza:()=>{if(e.nuevaPieza){for(let a=0;a<e.nuevaPieza.altura;a++)for(let t=0;t<e.nuevaPieza.longitud;t++)e.nuevaPieza.matriz[a][t]&&(e.matriz[a+e.nuevaPieza.y][t+e.nuevaPieza.x]=0);e.pintaPanel()}},limpiarFila(){let a=0;for(let t=0;t<e.matriz.length-1;t++)if(e.matriz[t].every(i=>i!==0)){e.matriz.splice(t,1),e.matriz.unshift(Array(10).fill(0)),a++;break}if(a>0){e.puntos+=100;const t=document.querySelector("#limpiar");t.innerHTML=e.limpiar,e.limpiar+=1,e.pintaPanel()}},jugar:()=>{e.matriz=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1]],e.puntos=0,e.limpiar=1,e.nivel=1,e.tiempo=0,e.controlTeclas(),e.pintaPanel(),e.nuevaPieza=e.crearNuevaPieza(),e.insertarPieza(),e.iniciarMovimiento(),e.cambiarPieza()},crearNuevaPieza:()=>{const a=Math.floor(Math.random()*7),i=10-P[a].matriz[0].length,o=Math.floor(Math.random()*(i+1)),n=new L(a,o,1,0);return e.nuevaPieza=n,n},finalizarPartida:()=>{console.log("Partida Finalizada");const a=document.querySelector("#juego");a.innerHTML=M.template,clearInterval(e.movimientoInterval);const t=document.querySelector("#btnGuardar"),i=document.querySelector("#btnCancelar");t.addEventListener("click",()=>{const o=document.querySelector("#nick").value;e.nick=o;const n=document.querySelector("main");n.innerHTML=v.template,v.script()}),i.addEventListener("click",()=>{a.innerHTML=m.template,e.reiniciarMatriz(),e.pintaPanel(),e.iniciarMovimiento()})},insertarPieza:()=>{let a=!0;for(let t=0;t<e.nuevaPieza.altura;t++){for(let i=0;i<e.nuevaPieza.longitud;i++)if(e.nuevaPieza.matriz[t][i]===e.nuevaPieza.modelo+2&&e.matriz[e.nuevaPieza.y+t][e.nuevaPieza.x+i]>0){a=!1;break}if(!a)break}if(a)for(let t=0;t<e.nuevaPieza.altura;t++)for(let i=0;i<e.nuevaPieza.longitud;i++)e.nuevaPieza.matriz[t][i]===e.nuevaPieza.modelo+2&&(e.matriz[e.nuevaPieza.y+t][e.nuevaPieza.x+i]=e.nuevaPieza.matriz[t][i]);else e.finalizarPartida()},puntos:0,moverIzq(){for(let a=0;a<e.nuevaPieza.altura;a++)if(e.matriz[e.nuevaPieza.y+a][e.nuevaPieza.x-1]!==0)return;e.borrarPieza(),e.nuevaPieza.x-=1,e.puntos+=10,e.insertarPieza(),e.pintaPanel()},moverDra(){for(let a=0;a<e.nuevaPieza.altura;a++)if(e.matriz[e.nuevaPieza.y+a][e.nuevaPieza.x+e.nuevaPieza.longitud]!==0)return;e.borrarPieza(),e.nuevaPieza.x+=1,e.puntos+=10,e.insertarPieza(),e.pintaPanel()},bajar:()=>{if(e.nuevaPieza.y==1){let a=!1;for(let t=0;t<e.nuevaPieza.longitud;t++)if(e.matriz[e.nuevaPieza.y+e.nuevaPieza.altura][e.nuevaPieza.x+t]>0){a=!0;break}if(a){e.finalizarPartida();return}}if(e.nuevaPieza.y+e.nuevaPieza.altura<21){e.borrarPieza(),e.nuevaPieza.y++,e.puntos+=10;for(let a=0;a<e.nuevaPieza.altura;a++)for(let t=0;t<e.nuevaPieza.longitud;t++)if(e.nuevaPieza.matriz[a][t]&&e.matriz[a+e.nuevaPieza.y][t+e.nuevaPieza.x]){e.nuevaPieza.y--,e.insertarPieza(),e.pintaPanel(),e.limpiarFila(),e.nuevaPieza=e.crearNuevaPieza();return}e.insertarPieza(),e.pintaPanel()}else e.limpiarFila(),e.nuevaPieza=e.crearNuevaPieza()},siguienteNivel:()=>{if(e.puntos>=5e3){e.reiniciarMatriz(),e.borrarPieza(),e.pintaPanel();const a=document.querySelector("#nivel");a.innerHTML=e.nivel,e.nivel+=1}},reiniciarMatriz:()=>{e.borrarPieza(),e.matriz=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1]],e.puntos=0,e.limpiar=0,e.nuevaPieza=null,e.nuevaPieza=e.crearNuevaPieza(),e.insertarPieza()},minutos:0,segundos:0,iniciarMovimiento:()=>{e.movimientoInterval=setInterval(()=>{e.bajar(),e.siguienteNivel(),e.tiempo++,e.minutos=Math.floor(e.tiempo/60),e.segundos=e.tiempo%60,e.minutos=e.minutos<10?"0"+e.minutos:e.minutos,e.segundos=e.segundos<10?"0"+e.segundos:e.segundos,document.querySelector("#minutos").innerHTML=e.minutos,document.querySelector("#segundos").innerHTML=e.segundos},2e3)},cambiarPieza(){e.borrarPieza();const a=e.nuevaPieza;e.piezaGuardada===null?(e.piezaGuardada=a,e.nuevaPieza=e.crearNuevaPieza()):(e.nuevaPieza=e.piezaGuardada,e.piezaGuardada=a),e.insertarPieza(),e.pintaPiezaGuardada(),e.pintaPanel()},pintaPiezaGuardada:()=>{const a=document.querySelector(".piezaSiguiente2");a.innerHTML="";const t=["","","rgb(64, 230, 64)","rgb(255, 255, 0)","rgb(211, 39, 211)","red","aqua","rgb(255, 182, 47)","rgb(255, 190, 201)"];for(let i=0;i<e.piezaGuardada.matriz.length;i++){let o='<div class="fila d-flex justify-content-center">';for(let n=0;n<e.piezaGuardada.matriz[i].length;n++){let r="";if(e.piezaGuardada.matriz[i][n]==0&&(r+='<div class="celda bg-dark border-secondary"></div>'),e.piezaGuardada.matriz[i][n]>=2){let c=e.piezaGuardada.matriz[i][n];r=`<div class="celda tipo${c}" style="background-color: ${t[c]};"></div>`}o+=r}o+="</div>",a.innerHTML+=o}},controlTeclas:()=>{document.addEventListener("keydown",a=>{switch(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","c","C"].includes(a.key)&&a.preventDefault(),a.key){case"ArrowLeft":e.moverIzq();break;case"ArrowRight":e.moverDra(),console.log("derecha");break;case"ArrowDown":e.bajar();break;case"ArrowUp":e.borrarPieza(),e.nuevaPieza.girar(),e.insertarPieza(),e.puntos+=20,e.pintaPanel();break;case"c":case"C":e.cambiarPieza(),console.log("Pieza cambiada");break}})}},m={template:`
  <!-- Pantalla del juego -->

  <div id="juego">
  <div class="row">
    <!-- Panel izquierda -->
    <div
      class="col-4 d-flex flex-column justify-content-end align-items-center p-5"
    >
      <h4>Nivel: <span id="nivel"></span></h4>
      <h4>Tiempo: <span id="minutos">0</span>:<span id="segundos">00</span></h4>
      <h4>Lineas: <span id="limpiar"></span></h4>
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
              
              <hr />
              
                <div id="piezaGuardada">
                        <h4>Pieza guardada:</h4>
                        <div class="piezaGuardada">
                            <div class="piezaSiguiente2 m-2">
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-warning bg-gradient border-dark"></div>
                                    <div class="celda bg-warning border-secondary"></div>
                                </div>
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-warning bg-gradient border-dark"></div>
                                    <div class="celda bg-warning border-secondary"></div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    `,script:()=>{e.jugar()}},g={template:`
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
    `,script:()=>{document.querySelector("#btnJugar").addEventListener("click",a=>{a.preventDefault(),document.querySelector("main").innerHTML=m.template,m.script()})}},y={template:`
    <nav class="navbar navbar-light bg-dark">
      <div class="container-fluid">
        <div class="mx-auto">
          <button id="vistaHome" class="btn btn-success mx-2 fs-4">HOME</button>
          <button id="vistaRanking" class="btn btn-success mx-2 fs-4">RANKING</button>
          <button id="vistaJuego" class="btn btn-success mx-2 fs-4">JUEGO</button>
        </div>
      </div>
    </nav>
    `,script:()=>{document.querySelector("#vistaHome").addEventListener("click",a=>{a.preventDefault(),document.querySelector("main").innerHTML=g.template,g.script()}),document.querySelector("#vistaRanking").addEventListener("click",a=>{a.preventDefault(),document.querySelector("main").innerHTML=v.template,v.script()}),document.querySelector("#vistaJuego").addEventListener("click",a=>{a.preventDefault(),document.querySelector("main").innerHTML=m.template,m.script()})}};document.querySelector("header").innerHTML=y.template;y.script();document.querySelector("main").innerHTML=g.template;g.script();v.script();m.script();
