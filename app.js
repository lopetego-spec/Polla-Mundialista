// FIREBASE CONFIG — inicializado en el bloque de scripts del head

// CONSTANTES
const ADMIN_EMAIL = "fabio@admin.com"; // cambia por tu correo
const API_KEY_FOOTBALL = "104200f20feebd5784db790f449e3a00";

const PARTIDOS = [
  {id:"A1",grupo:"Grupo A",local:"México",visitante:"Sudáfrica",fecha:"11 Jun",sede:"Ciudad de México"},
  {id:"A2",grupo:"Grupo A",local:"Corea del Sur",visitante:"Rep. Checa",fecha:"11 Jun",sede:"Guadalajara"},
  {id:"A3",grupo:"Grupo A",local:"Rep. Checa",visitante:"Sudáfrica",fecha:"18 Jun",sede:"Atlanta"},
  {id:"A4",grupo:"Grupo A",local:"México",visitante:"Corea del Sur",fecha:"18 Jun",sede:"Guadalajara"},
  {id:"A5",grupo:"Grupo A",local:"Rep. Checa",visitante:"México",fecha:"24 Jun",sede:"Ciudad de México"},
  {id:"A6",grupo:"Grupo A",local:"Sudáfrica",visitante:"Corea del Sur",fecha:"24 Jun",sede:"Monterrey"},
  {id:"B1",grupo:"Grupo B",local:"Canadá",visitante:"Bosnia y Herz.",fecha:"12 Jun",sede:"Toronto"},
  {id:"B2",grupo:"Grupo B",local:"Qatar",visitante:"Suiza",fecha:"13 Jun",sede:"San Francisco"},
  {id:"B3",grupo:"Grupo B",local:"Suiza",visitante:"Bosnia y Herz.",fecha:"18 Jun",sede:"Los Ángeles"},
  {id:"B4",grupo:"Grupo B",local:"Canadá",visitante:"Qatar",fecha:"18 Jun",sede:"Vancouver"},
  {id:"B5",grupo:"Grupo B",local:"Suiza",visitante:"Canadá",fecha:"24 Jun",sede:"Vancouver"},
  {id:"B6",grupo:"Grupo B",local:"Bosnia y Herz.",visitante:"Qatar",fecha:"24 Jun",sede:"Seattle"},
  {id:"C1",grupo:"Grupo C",local:"Brasil",visitante:"Marruecos",fecha:"13 Jun",sede:"Nueva York"},
  {id:"C2",grupo:"Grupo C",local:"Haití",visitante:"Escocia",fecha:"13 Jun",sede:"Boston"},
  {id:"C3",grupo:"Grupo C",local:"Brasil",visitante:"Haití",fecha:"19 Jun",sede:"Filadelfia"},
  {id:"C4",grupo:"Grupo C",local:"Escocia",visitante:"Marruecos",fecha:"19 Jun",sede:"Boston"},
  {id:"C5",grupo:"Grupo C",local:"Escocia",visitante:"Brasil",fecha:"24 Jun",sede:"Miami"},
  {id:"C6",grupo:"Grupo C",local:"Marruecos",visitante:"Haití",fecha:"24 Jun",sede:"Atlanta"},
  {id:"D1",grupo:"Grupo D",local:"Estados Unidos",visitante:"Paraguay",fecha:"12 Jun",sede:"Los Ángeles"},
  {id:"D2",grupo:"Grupo D",local:"Australia",visitante:"Turquía",fecha:"13 Jun",sede:"Vancouver"},
  {id:"D3",grupo:"Grupo D",local:"Turquía",visitante:"Paraguay",fecha:"19 Jun",sede:"San Francisco"},
  {id:"D4",grupo:"Grupo D",local:"Estados Unidos",visitante:"Australia",fecha:"19 Jun",sede:"Seattle"},
  {id:"D5",grupo:"Grupo D",local:"Turquía",visitante:"Estados Unidos",fecha:"25 Jun",sede:"Los Ángeles"},
  {id:"D6",grupo:"Grupo D",local:"Paraguay",visitante:"Australia",fecha:"25 Jun",sede:"San Francisco"},
  {id:"E1",grupo:"Grupo E",local:"Alemania",visitante:"Curazao",fecha:"14 Jun",sede:"Houston"},
  {id:"E2",grupo:"Grupo E",local:"Costa de Marfil",visitante:"Ecuador",fecha:"14 Jun",sede:"Filadelfia"},
  {id:"E3",grupo:"Grupo E",local:"Alemania",visitante:"Costa de Marfil",fecha:"20 Jun",sede:"Toronto"},
  {id:"E4",grupo:"Grupo E",local:"Ecuador",visitante:"Curazao",fecha:"20 Jun",sede:"Kansas City"},
  {id:"E5",grupo:"Grupo E",local:"Ecuador",visitante:"Alemania",fecha:"25 Jun",sede:"Nueva York"},
  {id:"E6",grupo:"Grupo E",local:"Curazao",visitante:"Costa de Marfil",fecha:"25 Jun",sede:"Filadelfia"},
  {id:"F1",grupo:"Grupo F",local:"Países Bajos",visitante:"Japón",fecha:"14 Jun",sede:"Dallas"},
  {id:"F2",grupo:"Grupo F",local:"Suecia",visitante:"Túnez",fecha:"14 Jun",sede:"Monterrey"},
  {id:"F3",grupo:"Grupo F",local:"Países Bajos",visitante:"Suecia",fecha:"20 Jun",sede:"Houston"},
  {id:"F4",grupo:"Grupo F",local:"Japón",visitante:"Túnez",fecha:"20 Jun",sede:"Monterrey"},
  {id:"F5",grupo:"Grupo F",local:"Túnez",visitante:"Países Bajos",fecha:"25 Jun",sede:"Kansas City"},
  {id:"F6",grupo:"Grupo F",local:"Japón",visitante:"Suecia",fecha:"25 Jun",sede:"Dallas"},
  {id:"G1",grupo:"Grupo G",local:"Bélgica",visitante:"Egipto",fecha:"15 Jun",sede:"Seattle"},
  {id:"G2",grupo:"Grupo G",local:"Irán",visitante:"Nueva Zelanda",fecha:"15 Jun",sede:"Los Ángeles"},
  {id:"G3",grupo:"Grupo G",local:"Bélgica",visitante:"Irán",fecha:"21 Jun",sede:"Los Ángeles"},
  {id:"G4",grupo:"Grupo G",local:"Egipto",visitante:"Nueva Zelanda",fecha:"21 Jun",sede:"Vancouver"},
  {id:"G5",grupo:"Grupo G",local:"Nueva Zelanda",visitante:"Bélgica",fecha:"26 Jun",sede:"Vancouver"},
  {id:"G6",grupo:"Grupo G",local:"Egipto",visitante:"Irán",fecha:"26 Jun",sede:"Seattle"},
  {id:"H1",grupo:"Grupo H",local:"España",visitante:"Cabo Verde",fecha:"15 Jun",sede:"Miami"},
  {id:"H2",grupo:"Grupo H",local:"Uruguay",visitante:"Arabia Saudita",fecha:"15 Jun",sede:"Kansas City"},
  {id:"H3",grupo:"Grupo H",local:"España",visitante:"Uruguay",fecha:"21 Jun",sede:"Dallas"},
  {id:"H4",grupo:"Grupo H",local:"Cabo Verde",visitante:"Arabia Saudita",fecha:"21 Jun",sede:"Houston"},
  {id:"H5",grupo:"Grupo H",local:"Arabia Saudita",visitante:"España",fecha:"26 Jun",sede:"Miami"},
  {id:"H6",grupo:"Grupo H",local:"Cabo Verde",visitante:"Uruguay",fecha:"26 Jun",sede:"Houston"},
  {id:"I1",grupo:"Grupo I",local:"Francia",visitante:"Senegal",fecha:"16 Jun",sede:"Atlanta"},
  {id:"I2",grupo:"Grupo I",local:"Noruega",visitante:"Irak",fecha:"16 Jun",sede:"Filadelfia"},
  {id:"I3",grupo:"Grupo I",local:"Francia",visitante:"Noruega",fecha:"22 Jun",sede:"San Francisco"},
  {id:"I4",grupo:"Grupo I",local:"Senegal",visitante:"Irak",fecha:"22 Jun",sede:"Atlanta"},
  {id:"I5",grupo:"Grupo I",local:"Noruega",visitante:"Senegal",fecha:"26 Jun",sede:"Boston"},
  {id:"I6",grupo:"Grupo I",local:"Irak",visitante:"Francia",fecha:"26 Jun",sede:"Miami"},
  {id:"J1",grupo:"Grupo J",local:"Argentina",visitante:"Argelia",fecha:"16 Jun",sede:"Dallas"},
  {id:"J2",grupo:"Grupo J",local:"Austria",visitante:"Jordania",fecha:"16 Jun",sede:"Boston"},
  {id:"J3",grupo:"Grupo J",local:"Argentina",visitante:"Austria",fecha:"22 Jun",sede:"Los Ángeles"},
  {id:"J4",grupo:"Grupo J",local:"Argelia",visitante:"Jordania",fecha:"22 Jun",sede:"Dallas"},
  {id:"J5",grupo:"Grupo J",local:"Argentina",visitante:"Jordania",fecha:"27 Jun",sede:"Miami"},
  {id:"J6",grupo:"Grupo J",local:"Argelia",visitante:"Austria",fecha:"27 Jun",sede:"Boston"},
  {id:"K1",grupo:"Grupo K",local:"Portugal",visitante:"Rep. Dem. Congo",fecha:"17 Jun",sede:"Filadelfia"},
  {id:"K2",grupo:"Grupo K",local:"Colombia",visitante:"Uzbekistán",fecha:"17 Jun",sede:"Seattle"},
  {id:"K3",grupo:"Grupo K",local:"Portugal",visitante:"Uzbekistán",fecha:"23 Jun",sede:"Houston"},
  {id:"K4",grupo:"Grupo K",local:"Colombia",visitante:"Rep. Dem. Congo",fecha:"23 Jun",sede:"Dallas"},
  {id:"K5",grupo:"Grupo K",local:"Uzbekistán",visitante:"Colombia",fecha:"27 Jun",sede:"Kansas City"},
  {id:"K6",grupo:"Grupo K",local:"Rep. Dem. Congo",visitante:"Portugal",fecha:"27 Jun",sede:"Atlanta"},
  {id:"L1",grupo:"Grupo L",local:"Inglaterra",visitante:"Croacia",fecha:"17 Jun",sede:"Nueva York"},
  {id:"L2",grupo:"Grupo L",local:"Ghana",visitante:"Panamá",fecha:"17 Jun",sede:"Kansas City"},
  {id:"L3",grupo:"Grupo L",local:"Inglaterra",visitante:"Ghana",fecha:"23 Jun",sede:"San Francisco"},
  {id:"L4",grupo:"Grupo L",local:"Croacia",visitante:"Panamá",fecha:"23 Jun",sede:"Filadelfia"},
  {id:"L5",grupo:"Grupo L",local:"Croacia",visitante:"Ghana",fecha:"27 Jun",sede:"Filadelfia"},
  {id:"L6",grupo:"Grupo L",local:"Panamá",visitante:"Inglaterra",fecha:"27 Jun",sede:"Nueva York"},
];

const EQUIPOS = [...new Set(PARTIDOS.flatMap(p=>[p.local,p.visitante]))].sort();
const GRUPOS  = [...new Set(PARTIDOS.map(p=>p.grupo))];
const FECHAS  = [...new Set(PARTIDOS.map(p=>p.fecha))];

// ESTADO
let currentUser = null;
let apuestas    = [];
let resultados  = {};
let nextId      = 1;
let unsubApuestas = null;

const CRITERIOS_DEFAULT = [
  {id:"resultado_exacto",nombre:"Resultado exacto",  desc:"Marcador final correcto",icon:"🎯",pts:3,fijo:true},
  {id:"ganador_correcto",nombre:"Ganador correcto",  desc:"Acertó quién gana",      icon:"✅",pts:1,fijo:true},
  {id:"empate_correcto", nombre:"Empate acertado",   desc:"Predijo el empate",      icon:"🤝",pts:1,fijo:true},
  {id:"campeon",         nombre:"Campeón acertado",  desc:"Acertó el campeón",      icon:"🏆",pts:5,fijo:true},
];
let criterios = JSON.parse(localStorage.getItem("polla_criterios")||"null") || CRITERIOS_DEFAULT.map(c=>({...c}));

// CONFIG DE PARTIDOS (guardado en Firestore)
let configPartidos = {}; // { partidoId: { cierreISO, tarjetas, esquinas } }
let configGlobal   = {}; // { cierreGrupos, cierreElim, ocultarApuestas }

function estaAbierto(partidoId, tipo) {
  const cfg = configPartidos[partidoId];
  const ahora = new Date();
  // Cierre individual del partido
  if (cfg && cfg.cierreISO) return new Date(cfg.cierreISO) > ahora;
  // Cierre global por tipo
  const cierreGlobal = tipo === 'grupo' ? configGlobal.cierreGrupos : configGlobal.cierreElim;
  if (cierreGlobal) return new Date(cierreGlobal) > ahora;
  return true; // sin cierre configurado = abierto
}

function tiempoRestante(partidoId, tipo) {
  const cfg = configPartidos[partidoId];
  const ahora = new Date();
  let cierre = null;
  if (cfg && cfg.cierreISO) cierre = new Date(cfg.cierreISO);
  else {
    const cg = tipo === 'grupo' ? configGlobal.cierreGrupos : configGlobal.cierreElim;
    if (cg) cierre = new Date(cg);
  }
  if (!cierre) return null;
  const diff = cierre - ahora;
  if (diff <= 0) return 'cerrado';
  const h = Math.floor(diff/3600000);
  const m = Math.floor((diff%3600000)/60000);
  if (h > 48) return Math.floor(h/24) + ' días';
  if (h > 0) return h + 'h ' + m + 'm';
  return m + ' min';
}

async function cargarConfigPartidos() {
  try {
    const snap = await db.collection("config").doc("partidos").get();
    if (snap.exists) configPartidos = snap.data() || {};
    const snap2 = await db.collection("config").doc("global").get();
    if (snap2.exists) {
      configGlobal = snap2.data() || {};
      // Sync UI
      const cg = document.getElementById('cierre-global-grupos');
      const ce = document.getElementById('cierre-global-elim');
      const oa = document.getElementById('ocultar-apuestas');
      if (cg && configGlobal.cierreGrupos) cg.value = configGlobal.cierreGrupos;
      if (ce && configGlobal.cierreElim)   ce.value = configGlobal.cierreElim;
      if (oa) oa.checked = !!configGlobal.ocultarApuestas;
    }
  } catch(e) { console.error('Error cargando config:', e); }
}

async function saveCierreGlobal() {
  const cg = document.getElementById('cierre-global-grupos')?.value || '';
  const ce = document.getElementById('cierre-global-elim')?.value   || '';
  configGlobal.cierreGrupos = cg;
  configGlobal.cierreElim   = ce;
  await db.collection("config").doc("global").set(configGlobal, {merge:true});
  toast('✓ Cierre global guardado');
  renderPartidos();
}

async function saveConfigGeneral() {
  const oa = document.getElementById('ocultar-apuestas')?.checked || false;
  configGlobal.ocultarApuestas = oa;
  await db.collection("config").doc("global").set(configGlobal, {merge:true});
  toast('✓ Configuración guardada');
}

async function saveCierrePartido(pid, value) {
  if (!configPartidos[pid]) configPartidos[pid] = {};
  configPartidos[pid].cierreISO = value;
  await db.collection("config").doc("partidos").set(configPartidos, {merge:false});
  toast('✓ Cierre guardado para ' + pid);
  renderPartidos();
}

async function saveDesempate(pid, campo, value) {
  if (!configPartidos[pid]) configPartidos[pid] = {};
  configPartidos[pid][campo] = value;
  await db.collection("config").doc("partidos").set(configPartidos, {merge:false});
  toast('✓ Desempate actualizado');
}
function saveCriterios(){localStorage.setItem("polla_criterios",JSON.stringify(criterios));renderPtsInfo();renderApuestas();renderTabla();}
function getPts(id){return (criterios.find(c=>c.id===id)||{pts:0}).pts;}

// AUTH OBSERVER
auth.onAuthStateChanged(async user => {
  console.log("onAuthStateChanged fired, user:", user ? user.email : "null");
  const overlay = document.getElementById("loading-overlay");
  if (overlay) overlay.style.display = "none";
  if (user) {
    // Cargar perfil de Firestore
    const snap = await db.collection("usuarios").doc(user.uid).get();
    const perfil = snap.exists ? snap.data() : {};
    currentUser = {
      uid:    user.uid,
      email:  user.email,
      nombre: perfil.nombre || user.email,
      celular:perfil.celular || "",
      rol:    perfil.rol || "user"
    };
    showApp();
  } else {
    currentUser = null;
    showAuth();
  }
});

function showApp() {
  document.getElementById("auth-overlay").style.display  = "none";
  document.getElementById("main-header").style.display   = "";
  document.getElementById("main-nav").style.display      = "";
  document.getElementById("main-content").style.display  = "";
  const ini = currentUser.nombre.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
  document.getElementById("hdr-avatar").textContent  = ini;
  document.getElementById("hdr-nombre").textContent  = currentUser.nombre;
  document.getElementById("hdr-rol").textContent     = currentUser.rol==="admin" ? "👑 Administrador" : "👤 Participante";
  if (currentUser.rol === "admin") document.getElementById("nav-admin").style.display = "";
  renderPtsInfo();
  suscribirApuestas();
}

function showAuth() {
  document.getElementById("auth-overlay").style.display  = "flex";
  document.getElementById("main-header").style.display   = "none";
  document.getElementById("main-nav").style.display      = "none";
  document.getElementById("main-content").style.display  = "none";
  document.getElementById("nav-admin").style.display     = "none";
  if (unsubApuestas) { unsubApuestas(); unsubApuestas = null; }
}

// SUSCRIPCIÓN TIEMPO REAL A APUESTAS
function suscribirApuestas() {
  if (unsubApuestas) unsubApuestas();
  let query = db.collection("apuestas");
  // Si ocultarApuestas está activo, usuario normal solo ve las suyas
  const ocultarParaUser = configGlobal.ocultarApuestas && currentUser.rol !== "admin";
  if (currentUser.rol !== "admin" || ocultarParaUser) {
    query = query.where("uid", "==", currentUser.uid);
  }
  unsubApuestas = query.onSnapshot(snap => {
    apuestas = snap.docs.map(d => ({id: d.id, ...d.data()}));
    if (apuestas.length > 0) {
      const nums = apuestas.map(a => Number(a.numId)||0);
      nextId = Math.max(...nums) + 1;
    }
    renderApuestas();
    renderTabla();
    renderResultados();
  });
}

// AUTH FUNCIONES
function authTab(t) {
  document.getElementById("form-login").style.display   = t==="login"    ? "block" : "none";
  document.getElementById("form-registro").style.display= t==="registro" ? "block" : "none";
  document.getElementById("form-reset").style.display   = t==="reset"    ? "block" : "none";
  document.getElementById("tab-login-btn").classList.toggle("active", t==="login");
  document.getElementById("tab-reg-btn").classList.toggle("active",   t==="registro");
  clearAuthMsg();
}
function showResetPass() { authTab("reset"); }
function showAuthErr(msg){const e=document.getElementById("auth-err");e.textContent=msg;e.classList.add("show");document.getElementById("auth-ok").classList.remove("show");}
function showAuthOk(msg){const e=document.getElementById("auth-ok");e.textContent=msg;e.classList.add("show");document.getElementById("auth-err").classList.remove("show");}
function clearAuthMsg(){document.getElementById("auth-err").classList.remove("show");document.getElementById("auth-ok").classList.remove("show");}
function setBtnLoad(id,loading,txt){const b=document.getElementById(id);b.disabled=loading;b.textContent=loading?"⏳ Espera...":txt;}

async function doLogin() {
  const email = document.getElementById("l-email").value.trim();
  const pass  = document.getElementById("l-pass").value;
  if (!email||!pass) { showAuthErr("Completa todos los campos"); return; }
  setBtnLoad("btn-login", true, "Ingresar →");
  try {
    await auth.signInWithEmailAndPassword(email, pass);
  } catch(e) {
    const msgs = {
      "auth/user-not-found":  "Correo no registrado",
      "auth/wrong-password":  "Contraseña incorrecta",
      "auth/invalid-email":   "Correo inválido",
      "auth/too-many-requests":"Demasiados intentos. Espera un momento.",
      "auth/invalid-credential": "Correo o contraseña incorrectos"
    };
    showAuthErr(msgs[e.code] || e.message);
  }
  setBtnLoad("btn-login", false, "Ingresar →");
}

async function doRegistro() {
  const nom   = document.getElementById("r-nom").value.trim();
  const cel   = document.getElementById("r-cel").value.trim();
  const email = document.getElementById("r-email").value.trim();
  const pass  = document.getElementById("r-pass").value;
  const pass2 = document.getElementById("r-pass2").value;
  if (!nom||!cel||!email||!pass) { showAuthErr("Completa todos los campos"); return; }
  if (pass.length < 6) { showAuthErr("Contraseña mínimo 6 caracteres"); return; }
  if (pass !== pass2)  { showAuthErr("Las contraseñas no coinciden"); return; }
  setBtnLoad("btn-reg", true, "Crear cuenta →");
  try {
    const cred = await auth.createUserWithEmailAndPassword(email, pass);
    const rol  = email === ADMIN_EMAIL ? "admin" : "user";
    await db.collection("usuarios").doc(cred.user.uid).set({
      nombre: nom, celular: cel, email: email,
      rol: rol, creado: firebase.firestore.FieldValue.serverTimestamp()
    });
    showAuthOk("✓ Cuenta creada. Bienvenido!");
  } catch(e) {
    const msgs = {
      "auth/email-already-in-use": "Este correo ya está registrado",
      "auth/invalid-email":        "Correo inválido",
      "auth/weak-password":        "Contraseña muy débil"
    };
    showAuthErr(msgs[e.code] || e.message);
  }
  setBtnLoad("btn-reg", false, "Crear cuenta →");
}

async function doReset() {
  const email = document.getElementById("reset-email").value.trim();
  if (!email) { showAuthErr("Ingresa tu correo"); return; }
  setBtnLoad("btn-reset", true, "Enviar enlace →");
  try {
    await auth.sendPasswordResetEmail(email);
    showAuthOk("✓ Enlace enviado. Revisa tu correo.");
  } catch(e) {
    showAuthErr("No se pudo enviar el enlace. Verifica el correo.");
  }
  setBtnLoad("btn-reset", false, "Enviar enlace →");
}

async function doLogout() {
  if (!confirm("¿Cerrar sesión?")) return;
  await auth.signOut();
}

// INIT
function init() {
  const sel = document.getElementById("inp-partido");
  FECHAS.forEach(f => {
    const opt = document.createElement("option"); opt.disabled=true; opt.text="── "+f+" ──"; sel.add(opt);
    PARTIDOS.filter(p=>p.fecha===f).forEach(p => {
      const o = document.createElement("option"); o.value=p.id; o.text=p.local+" vs "+p.visitante+" — "+p.grupo; sel.add(o);
    });
  });
  EQUIPOS.forEach(e => { const o=document.createElement("option"); o.value=e; document.getElementById("lista-equipos").appendChild(o); });
  const ff = document.getElementById("fil-fecha");
  FECHAS.forEach(f => { const o=document.createElement("option"); o.value=f; o.text=f; ff.appendChild(o); });
  const fg = document.getElementById("fil-grupo-p");
  GRUPOS.forEach(g => { const o=document.createElement("option"); o.value=g; o.text=g; fg.appendChild(o); });
  renderPartidos();
}

// TABS
function showTab(id, btn) {
  document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));
  document.querySelectorAll("nav button").forEach(b=>b.classList.remove("active"));
  document.getElementById("tab-"+id).classList.add("active");
  btn.classList.add("active");
  if(id==="apuestas")  renderApuestas();
  if(id==="tabla")     renderTabla();
  if(id==="resultados")renderResultados();
  if(id==="partidos")  renderPartidos();
  if(id==="admin")     { adminSubTab('usuarios'); }
}

function updateTipo() {
  const t = document.getElementById("inp-tipo").value;
  document.getElementById("sec-partido").style.display = t==="campeon"?"none":"block";
  document.getElementById("sec-campeon").style.display = t==="campeon"?"block":"none";
  document.getElementById("sec-goles").style.display   = t==="grupo"  ?"block":"none";
  document.getElementById("wrap-grupo").style.display  = t==="campeon"?"none" :"block";
}

function autoFill() {
  const pid = document.getElementById("inp-partido").value;
  if(!pid) return;
  const p = PARTIDOS.find(x=>x.id===pid); if(!p) return;
  document.getElementById("inp-local").value     = p.local;
  document.getElementById("inp-visitante").value = p.visitante;
  document.getElementById("inp-grupo").value     = p.grupo;
  document.getElementById("lbl-local").textContent = p.local;
  document.getElementById("lbl-visit").textContent = p.visitante;
}

// REGISTRAR APUESTA
async function registrar() {
  const tipo = document.getElementById("inp-tipo").value;
  // Verificar si el partido está abierto
  if (tipo !== 'campeon') {
    const pid = document.getElementById("inp-partido").value;
    if (pid && !estaAbierto(pid, tipo)) {
      toast("⛔ Las apuestas para este partido están cerradas");
      return;
    }
  }
  const a = {
    numId: nextId++,
    uid:   currentUser.uid,
    nombre:currentUser.nombre,
    tipo,
    ts: new Date().toLocaleString("es-CO"),
    creado: firebase.firestore.FieldValue.serverTimestamp()
  };
  if (tipo === "campeon") {
    const c = document.getElementById("inp-campeon").value.trim();
    if (!c) { toast("⚠ Ingresa el equipo campeón"); return; }
    a.campeon = c;
  } else {
    const local     = document.getElementById("inp-local").value.trim();
    const visitante = document.getElementById("inp-visitante").value.trim();
    const pid       = document.getElementById("inp-partido").value;
    if (!local||!visitante) { toast("⚠ Ingresa los equipos"); return; }
    a.local      = local;
    a.visitante  = visitante;
    a.partidoId  = pid || null;
    a.grupo      = document.getElementById("inp-grupo").value || "";
    if (tipo === "grupo") {
      a.golLocal     = parseInt(document.getElementById("inp-gl").value)||0;
      a.golVisitante = parseInt(document.getElementById("inp-gv").value)||0;
    }
  }
  try {
    await db.collection("apuestas").add(a);
    toast("✓ Apuesta registrada");
    document.getElementById("inp-partido").value  = "";
    document.getElementById("inp-local").value    = "";
    document.getElementById("inp-visitante").value= "";
    document.getElementById("inp-grupo").value    = "";
    document.getElementById("inp-campeon").value  = "";
    document.getElementById("inp-gl").value = 1;
    document.getElementById("inp-gv").value = 0;
  } catch(e) { toast("❌ Error al guardar: "+e.message); }
}

// PUNTOS
function calcPuntos(a) {
  if (a.tipo==="campeon") return 0;
  if (!a.partidoId || !resultados[a.partidoId]) return 0;
  const r  = resultados[a.partidoId];
  const gl = Number(a.golLocal)||0, gv = Number(a.golVisitante)||0;
  if (gl===r.local && gv===r.visitante) return getPts("resultado_exacto");
  if (r.local===r.visitante && gl===gv)  return getPts("empate_correcto");
  if (Math.sign(gl-gv)===Math.sign(r.local-r.visitante)) return getPts("ganador_correcto");
  return 0;
}

// RENDER PARTIDOS
function renderPartidos() {
  const fF = document.getElementById("fil-fecha").value;
  const fG = document.getElementById("fil-grupo-p").value;
  const lista = PARTIDOS.filter(p=>(!fF||p.fecha===fF)&&(!fG||p.grupo===fG));
  const fechas = [...new Set(lista.map(p=>p.fecha))];
  document.getElementById("partidos-container").innerHTML = fechas.map(f => {
    const ps = lista.filter(p=>p.fecha===f);
    return `<div class="fecha-bloque">
      <div class="fecha-header"><div class="fecha-badge">📅 ${f}</div><div class="fecha-line"></div><div style="font-size:12px;color:var(--muted);white-space:nowrap;">${ps.length} partido${ps.length!==1?"s":""}</div></div>
      <div class="partidos-grid">${ps.map(p => {
        const res = resultados[p.id];
        const abierto = estaAbierto(p.id, 'grupo');
        const tr = tiempoRestante(p.id, 'grupo');
        let cierreBadge = '';
        if (tr === 'cerrado') cierreBadge = '<span class="cierre-badge cierre-cerrado">⛔ Cerrado</span>';
        else if (tr && parseInt(tr) <= 24) cierreBadge = `<span class="cierre-badge cierre-pronto">⏳ Cierra en ${tr}</span>`;
        else if (tr) cierreBadge = `<span class="cierre-badge cierre-abierto">✅ Abierto</span>`;
        return `<div class="partido-card${res?" con-resultado":""}${!abierto?" cerrado":""}" onclick="${abierto?"preselectPartido('"+p.id+"')":"void(0)"}">
          <div class="p-grupo">${p.grupo} ${cierreBadge}</div>
          <div class="p-match">⚽ ${p.local} vs ${p.visitante}</div>
          <div class="p-sede">📍 ${p.sede}</div>
          ${res?`<div class="p-res">${res.local} – ${res.visitante}</div>`:""}
        </div>`;
      }).join("")}</div></div>`;
  }).join("");
}

function preselectPartido(pid) {
  document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));
  document.querySelectorAll("nav button").forEach(b=>b.classList.remove("active"));
  document.getElementById("tab-nueva").classList.add("active");
  document.querySelector("nav button").classList.add("active");
  document.getElementById("inp-tipo").value = "grupo"; updateTipo();
  document.getElementById("inp-partido").value = pid; autoFill();
}

// RENDER APUESTAS
function renderApuestas() {
  const personas = [...new Set(apuestas.map(a=>a.nombre))];
  const grupos   = [...new Set(apuestas.filter(a=>a.grupo).map(a=>a.grupo))];
  const filP = document.getElementById("fil-persona");
  const filG = document.getElementById("fil-grupo-a");
  const curP = filP.value, curG = filG.value;
  filP.innerHTML = '<option value="">Todos los participantes</option>'+personas.map(p=>`<option${p===curP?" selected":""}>${p}</option>`).join("");
  filG.innerHTML = '<option value="">Todos los grupos</option>'+grupos.map(g=>`<option${g===curG?" selected":""}>${g}</option>`).join("");
  const fT=document.getElementById("fil-tipo").value, fP=filP.value, fG2=filG.value;
  let lista = apuestas.filter(a=>(!fT||a.tipo===fT)&&(!fP||a.nombre===fP)&&(!fG2||a.grupo===fG2));
  const container = document.getElementById("lista-apuestas");
  if (!lista.length) { container.innerHTML='<div class="empty"><div class="empty-ico">📭</div>No hay apuestas que mostrar</div>'; return; }
  container.innerHTML = lista.map(a => {
    const pts = calcPuntos(a);
    const ini = a.nombre.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
    const badge = `<span class="badge badge-${a.tipo==="campeon"?"campeon":a.tipo}">${a.tipo==="campeon"?"🏆 Campeón":a.tipo==="grupo"?"Grupos":"Eliminatoria"}</span>`;
    const ptsStr = pts>0 ? `<span class="pts-badge">+${pts} pts</span>` : "";
    let detalle="", score="";
    if(a.tipo==="campeon") detalle="🏆 "+a.campeon;
    else { detalle=a.local+" vs "+a.visitante+(a.grupo?" ("+a.grupo+")":""); if(a.tipo==="grupo") score=a.golLocal+"–"+a.golVisitante; }
    return `<div class="apuesta-card">
      <div class="a-avatar">${ini}</div>
      <div class="a-info">
        <div class="a-nombre">${a.nombre} ${badge} ${ptsStr}</div>
        <div class="a-detalle">${detalle}</div>
        <div style="font-size:11px;color:var(--muted);margin-top:2px;">${a.ts}</div>
      </div>
      ${score?`<div class="a-score">${score}</div>`:""}
      <button class="btn btn-danger btn-sm" onclick="borrarApuesta('${a.id}')">🗑</button>
    </div>`;
  }).join("");
}

async function borrarApuesta(id) {
  if (!confirm("¿Eliminar esta apuesta?")) return;
  try {
    await db.collection("apuestas").doc(id).delete();
    toast("Apuesta eliminada");
  } catch(e) { toast("Error al eliminar"); }
}

// RENDER RESULTADOS
function renderResultados() {
  const pIds  = [...new Set(apuestas.filter(a=>a.partidoId).map(a=>a.partidoId))];
  const lista = PARTIDOS.filter(p=>pIds.includes(p.id)||resultados[p.id]);
  const container = document.getElementById("lista-resultados");
  if (!lista.length) { container.innerHTML='<div class="empty"><div class="empty-ico">⏳</div>Registra apuestas para ver partidos aquí</div>'; return; }
  const fechas = [...new Set(lista.map(p=>p.fecha))];
  container.innerHTML = fechas.map(f => {
    const ps = lista.filter(p=>p.fecha===f);
    return `<div class="fecha-bloque">
      <div class="fecha-header"><div class="fecha-badge">📅 ${f}</div><div class="fecha-line"></div></div>
      ${ps.map(p => {
        const r = resultados[p.id];
        const n = apuestas.filter(a=>a.partidoId===p.id).length;
        if(r) return `<div class="res-card">
          <div class="res-match">${p.grupo} · ${p.local} vs ${p.visitante}</div>
          <div class="res-form"><span style="font-weight:600;">${p.local}</span><div class="res-done">${r.local} – ${r.visitante}</div><span style="font-weight:600;">${p.visitante}</span>
          <button class="btn btn-outline btn-sm" onclick="borrarResultado('${p.id}')" style="margin-left:auto;">✕</button></div>
          <div style="font-size:12px;color:var(--muted);margin-top:6px;">${n} apuesta(s)</div></div>`;
        return `<div class="res-card">
          <div class="res-match">${p.grupo} · ${p.local} vs ${p.visitante}</div>
          <div class="res-form">
            <span style="font-weight:600;font-size:13px;">${p.local}</span>
            <input type="number" id="r-l-${p.id}" min="0" max="20" value="0"/>
            <span style="color:var(--muted);">vs</span>
            <input type="number" id="r-v-${p.id}" min="0" max="20" value="0"/>
            <span style="font-weight:600;font-size:13px;">${p.visitante}</span>
            <button class="btn btn-primary btn-sm" onclick="guardarResultado('${p.id}')" style="margin-left:auto;">Guardar</button>
          </div>
          <div style="font-size:12px;color:var(--muted);margin-top:6px;">${n} apuesta(s)</div></div>`;
      }).join("")}</div>`;
  }).join("");
}

async function guardarResultado(pid) {
  const l = parseInt(document.getElementById("r-l-"+pid).value)||0;
  const v = parseInt(document.getElementById("r-v-"+pid).value)||0;
  resultados[pid] = {local:l, visitante:v};
  // Guardar en Firestore
  await db.collection("resultados").doc(pid).set({local:l, visitante:v, ts: firebase.firestore.FieldValue.serverTimestamp()});
  // Actualizar puntos
  const afectadas = apuestas.filter(a=>a.partidoId===pid);
  const batch = db.batch();
  afectadas.forEach(a => {
    batch.update(db.collection("apuestas").doc(a.id), {puntos: calcPuntos(a)});
  });
  await batch.commit();
  toast(`✓ Resultado: ${l}–${v}`);
  renderResultados(); renderApuestas(); renderTabla(); renderPartidos();
}

async function borrarResultado(pid) {
  delete resultados[pid];
  await db.collection("resultados").doc(pid).delete();
  renderResultados(); renderApuestas(); renderTabla(); renderPartidos();
}

// Cargar resultados de Firestore al iniciar
async function cargarResultados() {
  const snap = await db.collection("resultados").get();
  snap.forEach(doc => { resultados[doc.id] = doc.data(); });
  await cargarConfigPartidos();
  renderPartidos(); renderResultados();
}

// RENDER TABLA
function renderTabla() {
  document.getElementById("st-total").textContent    = apuestas.length;
  const personas = [...new Set(apuestas.map(a=>a.nombre))];
  document.getElementById("st-partic").textContent   = personas.length;
  document.getElementById("st-partidos").textContent = new Set(apuestas.filter(a=>a.partidoId).map(a=>a.partidoId)).size;
  const container = document.getElementById("tabla-ranking");
  if (!personas.length) { container.innerHTML='<div class="empty" style="padding:24px">Sin participantes aún</div>'; return; }
  const ranking = personas.map(p => {
    const bets = apuestas.filter(a=>a.nombre===p);
    return {nombre:p, pts:bets.reduce((s,a)=>s+calcPuntos(a),0), count:bets.length, ini:p.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase()};
  }).sort((a,b)=>b.pts-a.pts||b.count-a.count);
  const colors = ["var(--oro)","#adb5bd","#cd7f32"];
  container.innerHTML = ranking.map((r,i) => `
    <div class="rank-row">
      <div class="rank-pos${i<3?" top":""}">${i+1}</div>
      <div style="width:38px;height:38px;border-radius:50%;background:${colors[i]||"var(--verde)"};color:white;font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${r.ini}</div>
      <div class="rank-name">${i===0?"🥇 ":i===1?"🥈 ":i===2?"🥉 ":""}${r.nombre}<div class="rank-sub">${r.count} apuesta${r.count!==1?"s":""}</div></div>
      <div><div class="rank-pts">${r.pts}</div><div class="pts-lbl">puntos</div></div>
    </div>`).join("");
}

// PUNTUACIÓN CONFIGURABLE
function renderPtsInfo() {
  const el = document.getElementById("pts-info-text");
  if(el) el.innerHTML = criterios.map(c=>`${c.icon} ${c.nombre} = <strong>${c.pts} pts</strong>`).join(" · ");
}
function renderCriterios() {
  const c = document.getElementById("lista-criterios");
  const p = document.getElementById("pts-preview");
  if(!c) return;
  c.innerHTML = criterios.map((cr,i)=>`
    <div class="pts-config-row">
      <div class="pts-config-icon">${cr.icon}</div>
      <div class="pts-config-info"><div class="pts-config-name">${cr.nombre}</div>${cr.desc?`<div class="pts-config-desc">${cr.desc}</div>`:""}</div>
      <input type="number" value="${cr.pts}" min="0" max="99"
        oninput="criterios[${i}].pts=parseInt(this.value)||0;saveCriterios();renderCriterios();"
        style="width:64px;text-align:center;font-size:18px;font-weight:700;padding:8px 4px;border:1px solid var(--border);border-radius:8px;font-family:Inter,sans-serif;background:var(--bg);"/>
      <span style="font-size:12px;color:var(--muted);">pts</span>
      ${!cr.fijo?`<button onclick="eliminarCriterio(${i})" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:16px;padding:4px;" title="Eliminar">🗑</button>`:'<div style="width:28px;"></div>'}
    </div>`).join("");
  if(p) p.innerHTML = `<div style="display:flex;flex-wrap:wrap;gap:8px;">${criterios.map(cr=>`
    <div style="background:var(--oro-light);border:1px solid #f0d89a;border-radius:8px;padding:10px 16px;text-align:center;min-width:100px;">
      <div style="font-size:24px;">${cr.icon}</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:28px;color:var(--verde);">${cr.pts}</div>
      <div style="font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;">${cr.nombre}</div>
    </div>`).join("")}</div>`;
}
function agregarCriterio() {
  const nombre = document.getElementById("new-crit-nombre").value.trim();
  const pts    = parseInt(document.getElementById("new-crit-pts").value)||1;
  if(!nombre){toast("⚠ Escribe el nombre");return;}
  criterios.push({id:"custom_"+Date.now(),nombre,desc:"Criterio personalizado",icon:"⭐",pts,fijo:false});
  saveCriterios();renderCriterios();
  document.getElementById("new-crit-nombre").value="";
  document.getElementById("new-crit-pts").value="2";
  toast("✓ Criterio agregado");
}
function eliminarCriterio(i){if(!confirm("¿Eliminar?"))return;criterios.splice(i,1);saveCriterios();renderCriterios();toast("Criterio eliminado");}

// ADMIN USUARIOS
function adminSubTab(tab) {
  ["usuarios","puntos","config"].forEach(t => {
    document.getElementById("admin-panel-"+t).style.display = tab===t?"block":"none";
    const base = "flex:1;padding:11px;font-size:12px;font-weight:600;border:none;background:none;cursor:pointer;white-space:nowrap;border-bottom:2px solid ";
    document.getElementById("asubt-"+t).style.cssText = base+(tab===t?"var(--verde);color:var(--verde);":"transparent;color:var(--muted);");
  });
  if(tab==="puntos")  renderCriterios();
  if(tab==="config")  { renderConfigPartidos(); initConfigFiltros(); loadCierreGlobalUI(); }
  if(tab==="usuarios")renderUsuarios();
}

function initConfigFiltros() {
  const ff = document.getElementById('cfg-fil-fecha');
  const fg = document.getElementById('cfg-fil-grupo');
  if (ff && ff.options.length <= 1) {
    FECHAS.forEach(f=>{const o=document.createElement('option');o.value=f;o.text=f;ff.appendChild(o);});
    GRUPOS.forEach(g=>{const o=document.createElement('option');o.value=g;o.text=g;fg.appendChild(o);});
  }
}

function loadCierreGlobalUI() {
  const cg = document.getElementById('cierre-global-grupos');
  const ce = document.getElementById('cierre-global-elim');
  const oa = document.getElementById('ocultar-apuestas');
  if (cg && configGlobal.cierreGrupos) cg.value = configGlobal.cierreGrupos;
  if (ce && configGlobal.cierreElim)   ce.value = configGlobal.cierreElim;
  if (oa) oa.checked = !!configGlobal.ocultarApuestas;
}

function renderConfigPartidos() {
  const fF = document.getElementById('cfg-fil-fecha')?.value || '';
  const fG = document.getElementById('cfg-fil-grupo')?.value || '';
  const lista = PARTIDOS.filter(p=>(!fF||p.fecha===fF)&&(!fG||p.grupo===fG));
  const container = document.getElementById('config-partidos-lista');
  if (!container) return;
  const fechas = [...new Set(lista.map(p=>p.fecha))];
  container.innerHTML = fechas.map(f => {
    const ps = lista.filter(p=>p.fecha===f);
    return `<div style="margin-bottom:16px;">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:16px;color:var(--verde);margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid var(--border);">📅 ${f}</div>
      ${ps.map(p => {
        const cfg = configPartidos[p.id] || {};
        return `<div class="config-partido-row">
          <div class="config-partido-info">
            <div class="config-partido-name">⚽ ${p.local} vs ${p.visitante}</div>
            <div style="font-size:11px;color:var(--muted);">${p.grupo} · ${p.sede}</div>
          </div>
          <div class="config-partido-controls">
            <div>
              <label style="font-size:10px;margin-bottom:3px;">Cierre apuestas</label>
              <input type="datetime-local" value="${cfg.cierreISO||''}"
                onchange="saveCierrePartido('${p.id}', this.value)"
                style="font-size:12px;padding:6px 10px;width:auto;"/>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;">
              <label style="display:flex;align-items:center;gap:5px;cursor:pointer;font-size:12px;">
                <input type="checkbox" ${cfg.tarjetas?'checked':''} onchange="saveDesempate('${p.id}','tarjetas',this.checked)" style="width:14px;height:14px;"/>
                🟨 Tarjetas amarillas
              </label>
              <label style="display:flex;align-items:center;gap:5px;cursor:pointer;font-size:12px;">
                <input type="checkbox" ${cfg.esquinas?'checked':''} onchange="saveDesempate('${p.id}','esquinas',this.checked)" style="width:14px;height:14px;"/>
                🔄 Tiros de esquina
              </label>
            </div>
          </div>
        </div>`;
      }).join('')}
    </div>`;
  }).join('');
}

async function renderUsuarios() {
  const container = document.getElementById("lista-usuarios");
  container.innerHTML = '<div class="empty">Cargando...</div>';
  try {
    const snap = await db.collection("usuarios").get();
    if (snap.empty) { container.innerHTML='<div class="empty"><div class="empty-ico">👥</div>No hay usuarios</div>'; return; }
    const users = snap.docs.map(d=>({uid:d.id,...d.data()}));

    // Calcular quiénes no han apostado
    const conApuestas = new Set(apuestas.map(a=>a.uid));

    // Botón de recordatorio masivo
    const sinApostar = users.filter(u=>!conApuestas.has(u.uid));
    const btnRecordatorio = sinApostar.length > 0
      ? `<div style="padding:12px 16px;border-bottom:1px solid var(--border);background:var(--oro-light);">
          <div style="font-size:13px;font-weight:600;color:var(--oro);margin-bottom:8px;">⚠️ ${sinApostar.length} usuario(s) sin apuestas</div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button class="btn btn-gold btn-sm" onclick="enviarRecordatorioMasivo()">📲 WhatsApp masivo</button>
            <button class="btn btn-outline btn-sm" onclick="copiarListaSinApostar()">📋 Copiar lista</button>
          </div>
        </div>` : '';

    container.innerHTML = `<div class="card" style="padding:0;overflow:hidden;">
      ${btnRecordatorio}
      ${users.map(u=>{
        const ini = u.nombre.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
        const isMe = u.uid===currentUser.uid;
        const tieneApuesta = conApuestas.has(u.uid);
        const isAdmin = u.rol==="admin";
        return `<div class="user-row">
          <div style="width:38px;height:38px;border-radius:50%;background:${isAdmin?"var(--oro)":"var(--verde)"};color:white;font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${ini}</div>
          <div style="flex:1;">
            <div style="font-weight:600;font-size:14px;">${u.nombre}${isAdmin?'<span class="admin-badge">Admin</span>':''}
              ${!tieneApuesta?'<span style="background:#fee2e2;color:var(--rojo);font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px;margin-left:4px;">Sin apuestas</span>':''}
            </div>
            <div style="font-size:12px;color:var(--muted);">📱 ${u.celular||"—"} · ${u.email}</div>
          </div>
          <div style="display:flex;gap:6px;align-items:center;flex-shrink:0;">
            ${u.celular&&!tieneApuesta?`<button class="btn btn-gold btn-sm" onclick="enviarWhatsApp('${u.celular}','${u.nombre}')" title="Enviar recordatorio WhatsApp">📲</button>`:''}
            ${!isMe?`
              <button class="btn btn-sm ${isAdmin?"btn-outline":"btn-gold"}" onclick="toggleAdmin('${u.uid}','${u.nombre}','${u.rol}')" title="${isAdmin?"Quitar admin":"Hacer admin"}">
                ${isAdmin?"👤 Quitar admin":"👑 Hacer admin"}
              </button>
              <button class="btn btn-danger btn-sm" onclick="eliminarUsuario('${u.uid}','${u.nombre}')" title="Eliminar">🗑</button>
            `:'<span style="font-size:11px;color:var(--muted);">Tú</span>'}
          </div>
        </div>`;
      }).join("")}
    </div>`;
  } catch(e) { container.innerHTML='<div class="empty">Error al cargar usuarios: '+e.message+'</div>'; }
}

async function toggleAdmin(uid, nombre, rolActual) {
  const nuevoRol = rolActual === "admin" ? "user" : "admin";
  const accion   = nuevoRol === "admin" ? "hacer admin" : "quitar rol de admin";
  if (!confirm(`¿Quieres ${accion} a ${nombre}?`)) return;
  try {
    await db.collection("usuarios").doc(uid).update({ rol: nuevoRol });
    toast(`✓ ${nombre} ahora es ${nuevoRol === "admin" ? "administrador" : "participante"}`);
    renderUsuarios();
  } catch(e) { toast("Error: " + e.message); }
}

async function eliminarUsuario(uid, nombre) {
  if(!confirm(`¿Eliminar a ${nombre}? Sus apuestas se mantendrán.`)) return;
  await db.collection("usuarios").doc(uid).delete();
  toast("Usuario eliminado"); renderUsuarios();
}

function enviarWhatsApp(celular, nombre) {
  const msg = encodeURIComponent(
    `Hola ${nombre} 👋

¡Te recordamos que aún no has registrado tus apuestas en la Polla Mundialista 2026! ⚽🏆

Ingresa aquí: https://lopetego-spec.github.io/Polla-Mundialista/

¡No te quedes por fuera!`
  );
  // Limpiar número: quitar espacios, guiones, +57, etc.
  const num = celular.replace(/[^0-9]/g,'');
  const numIntl = num.startsWith('57') ? num : '57' + num;
  window.open(`https://wa.me/${numIntl}?text=${msg}`, '_blank');
}

async function enviarRecordatorioMasivo() {
  const snap = await db.collection("usuarios").get();
  const conApuestas = new Set(apuestas.map(a=>a.uid));
  const sinApostar = snap.docs.map(d=>({uid:d.id,...d.data()})).filter(u=>!conApuestas.has(u.uid)&&u.celular);
  if (!sinApostar.length) { toast("Todos ya tienen apuestas 🎉"); return; }
  if (!confirm(`¿Enviar recordatorio por WhatsApp a ${sinApostar.length} usuario(s) sin apuestas?`)) return;
  sinApostar.forEach((u, i) => {
    setTimeout(() => enviarWhatsApp(u.celular, u.nombre), i * 1500);
  });
  toast(`📲 Abriendo WhatsApp para ${sinApostar.length} usuario(s)...`);
}

async function copiarListaSinApostar() {
  const snap = await db.collection("usuarios").get();
  const conApuestas = new Set(apuestas.map(a=>a.uid));
  const sinApostar = snap.docs.map(d=>({uid:d.id,...d.data()})).filter(u=>!conApuestas.has(u.uid));
  const lista = sinApostar.map(u=>`• ${u.nombre} (${u.celular||u.email})`).join('
');
  navigator.clipboard.writeText(`Usuarios sin apuestas:
${lista}`);
  toast(`📋 Lista copiada (${sinApostar.length} usuarios)`);
}

// SYNC API-FOOTBALL
const TEAM_MAP = {"México":"Mexico","Sudáfrica":"South Africa","Corea del Sur":"South Korea","Rep. Checa":"Czech Republic","Canadá":"Canada","Bosnia y Herz.":"Bosnia","Qatar":"Qatar","Suiza":"Switzerland","Brasil":"Brazil","Marruecos":"Morocco","Haití":"Haiti","Escocia":"Scotland","Estados Unidos":"USA","Australia":"Australia","Turquía":"Turkey","Paraguay":"Paraguay","Alemania":"Germany","Curazao":"Curacao","Costa de Marfil":"Ivory Coast","Ecuador":"Ecuador","Países Bajos":"Netherlands","Japón":"Japan","Suecia":"Sweden","Túnez":"Tunisia","Bélgica":"Belgium","Egipto":"Egypt","Irán":"Iran","Nueva Zelanda":"New Zealand","España":"Spain","Cabo Verde":"Cape Verde","Uruguay":"Uruguay","Arabia Saudita":"Saudi Arabia","Francia":"France","Senegal":"Senegal","Noruega":"Norway","Irak":"Iraq","Argentina":"Argentina","Argelia":"Algeria","Austria":"Austria","Jordania":"Jordan","Portugal":"Portugal","Rep. Dem. Congo":"DR Congo","Colombia":"Colombia","Uzbekistán":"Uzbekistan","Inglaterra":"England","Croacia":"Croatia","Ghana":"Ghana","Panamá":"Panama"};

function showSyncMsg(msg,tipo){
  const el=document.getElementById("sync-msg");el.style.display="block";
  el.style.background=tipo==="ok"?"var(--verde-light)":tipo==="err"?"#fee2e2":"var(--oro-light)";
  el.style.color=tipo==="ok"?"var(--verde)":tipo==="err"?"var(--rojo)":"#854F0B";
  el.style.border="1px solid "+(tipo==="ok"?"#a3d9b8":tipo==="err"?"#fecaca":"#f0d89a");
  el.textContent=msg;
}

async function syncResultados() {
  const btn=document.getElementById("btn-sync");
  btn.disabled=true;btn.textContent="⏳ Sincronizando...";
  showSyncMsg("Consultando API-Football...","info");
  try {
    const res = await fetch(`https://v3.football.api-sports.io/fixtures?league=1&season=2026&status=FT`,{
      headers:{"x-apisports-key":API_KEY_FOOTBALL}
    });
    const data = await res.json();
    if(!data.response||!data.response.length){showSyncMsg("⚠ No hay partidos finalizados aún","info");btn.disabled=false;btn.textContent="🔄 Sincronizar API";return;}
    let actualizados=0;
    const batch = db.batch();
    data.response.forEach(f=>{
      const partido=PARTIDOS.find(p=>{const lm=TEAM_MAP[p.local]||p.local,vm=TEAM_MAP[p.visitante]||p.visitante;return(lm===f.teams.home.name&&vm===f.teams.away.name)||(lm===f.teams.away.name&&vm===f.teams.home.name);});
      if(partido&&f.goals.home!==null){
        const lm=TEAM_MAP[partido.local]||partido.local;
        const r=lm===f.teams.home.name?{local:f.goals.home,visitante:f.goals.away}:{local:f.goals.away,visitante:f.goals.home};
        resultados[partido.id]=r;
        batch.set(db.collection("resultados").doc(partido.id),{...r,ts:firebase.firestore.FieldValue.serverTimestamp()});
        actualizados++;
      }
    });
    await batch.commit();
    // Recalcular puntos
    const batchPts=db.batch();
    apuestas.forEach(a=>{if(a.partidoId&&resultados[a.partidoId])batchPts.update(db.collection("apuestas").doc(a.id),{puntos:calcPuntos(a)});});
    await batchPts.commit();
    showSyncMsg(`✓ ${actualizados} partido(s) actualizado(s)`,"ok");
    toast(`✓ ${actualizados} resultado(s) sincronizados`);
    renderResultados();renderApuestas();renderTabla();renderPartidos();
  } catch(e){showSyncMsg("❌ Error: "+e.message,"err");}
  btn.disabled=false;btn.textContent="🔄 Sincronizar API";
}

// EXPORTAR
function exportCSV(){
  if(!apuestas.length){toast("No hay apuestas");return;}
  const h=["ID","Participante","Tipo","Local","Visitante","Goles Local","Goles Visitante","Campeón","Grupo","Fecha","Puntos"];
  const rows=apuestas.map(a=>[a.numId||a.id,a.nombre,a.tipo,a.local||"",a.visitante||"",a.golLocal??"",a.golVisitante??"",a.campeon||"",a.grupo||"",a.ts,calcPuntos(a)]);
  const csv=[h,...rows].map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(",")).join("\n");
  const blob=new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8;"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="polla_mundialista_2026.csv";a.click();
  toast("✓ CSV exportado");
}
function exportXLSX(){
  if(!apuestas.length){toast("No hay apuestas");return;}
  const data=[["ID","Participante","Tipo","Local","Visitante","Goles Local","Goles Visitante","Campeón","Grupo","Fecha","Puntos"],...apuestas.map(a=>[a.numId||a.id,a.nombre,a.tipo,a.local||"",a.visitante||"",a.golLocal??"",a.golVisitante??"",a.campeon||"",a.grupo||"",a.ts,calcPuntos(a)])];
  const wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(data),"Apuestas");
  const personas=[...new Set(apuestas.map(a=>a.nombre))];
  const rank=[["Pos","Participante","Apuestas","Puntos"],...personas.map(p=>({n:p,pts:apuestas.filter(a=>a.nombre===p).reduce((s,a)=>s+calcPuntos(a),0),c:apuestas.filter(a=>a.nombre===p).length})).sort((a,b)=>b.pts-a.pts).map((r,i)=>[i+1,r.n,r.c,r.pts])];
  XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(rank),"Tabla");
  XLSX.writeFile(wb,"polla_mundialista_2026.xlsx");
  toast("✓ Excel exportado");
}

// TOAST
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2800);}

// ARRANCAR
document.addEventListener('DOMContentLoaded', () => {
  init();
  cargarResultados();
  // Fallback: si onAuthStateChanged no responde en 6s, mostrar login
  setTimeout(() => {
    const overlay = document.getElementById('loading-overlay');
    if (overlay && overlay.style.display !== 'none') {
      console.warn('Firebase timeout — mostrando login');
      overlay.style.display = 'none';
      document.getElementById('auth-overlay').style.display = 'flex';
    }
  }, 6000);
});