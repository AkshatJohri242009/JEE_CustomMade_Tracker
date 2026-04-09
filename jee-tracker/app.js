/* ═══════════════════════════════════════════════════════════
   AIRPORT DATABASE
═══════════════════════════════════════════════════════════ */
const AIRPORTS=[
{c:'BOM',n:'Chhatrapati Shivaji',city:'Mumbai',country:'India',lat:19.089,lng:72.866},
{c:'DEL',n:'Indira Gandhi Intl',city:'New Delhi',country:'India',lat:28.556,lng:77.100},
{c:'MAA',n:'Chennai Intl',city:'Chennai',country:'India',lat:12.994,lng:80.171},
{c:'BLR',n:'Kempegowda Intl',city:'Bangalore',country:'India',lat:13.198,lng:77.706},
{c:'CCU',n:'Netaji Subhas',city:'Kolkata',country:'India',lat:22.652,lng:88.446},
{c:'HYD',n:'Rajiv Gandhi Intl',city:'Hyderabad',country:'India',lat:17.240,lng:78.429},
{c:'AMD',n:'Sardar Vallabhbhai',city:'Ahmedabad',country:'India',lat:23.074,lng:72.634},
{c:'PNQ',n:'Pune Airport',city:'Pune',country:'India',lat:18.582,lng:73.920},
{c:'LHR',n:'Heathrow',city:'London',country:'UK',lat:51.470,lng:-0.454},
{c:'LGW',n:'Gatwick',city:'London',country:'UK',lat:51.148,lng:-0.190},
{c:'CDG',n:'Charles de Gaulle',city:'Paris',country:'France',lat:49.010,lng:2.548},
{c:'AMS',n:'Schiphol',city:'Amsterdam',country:'Netherlands',lat:52.309,lng:4.764},
{c:'FRA',n:'Frankfurt',city:'Frankfurt',country:'Germany',lat:50.038,lng:8.562},
{c:'MUC',n:'Munich Intl',city:'Munich',country:'Germany',lat:48.354,lng:11.775},
{c:'ZRH',n:'Zurich',city:'Zurich',country:'Switzerland',lat:47.465,lng:8.549},
{c:'MAD',n:'Adolfo Suárez',city:'Madrid',country:'Spain',lat:40.494,lng:-3.567},
{c:'BCN',n:'El Prat',city:'Barcelona',country:'Spain',lat:41.297,lng:2.079},
{c:'FCO',n:'Leonardo da Vinci',city:'Rome',country:'Italy',lat:41.800,lng:12.239},
{c:'IST',n:'Istanbul Airport',city:'Istanbul',country:'Turkey',lat:41.275,lng:28.752},
{c:'VIE',n:'Vienna Intl',city:'Vienna',country:'Austria',lat:48.110,lng:16.570},
{c:'DXB',n:'Dubai Intl',city:'Dubai',country:'UAE',lat:25.253,lng:55.366},
{c:'AUH',n:'Abu Dhabi Intl',city:'Abu Dhabi',country:'UAE',lat:24.433,lng:54.651},
{c:'DOH',n:'Hamad Intl',city:'Doha',country:'Qatar',lat:25.273,lng:51.608},
{c:'RUH',n:'King Khalid Intl',city:'Riyadh',country:'Saudi Arabia',lat:24.958,lng:46.699},
{c:'JFK',n:'John F Kennedy',city:'New York',country:'USA',lat:40.641,lng:-73.778},
{c:'LAX',n:'Los Angeles Intl',city:'Los Angeles',country:'USA',lat:33.943,lng:-118.408},
{c:'ORD',n:"O'Hare Intl",city:'Chicago',country:'USA',lat:41.974,lng:-87.907},
{c:'ATL',n:'Hartsfield-Jackson',city:'Atlanta',country:'USA',lat:33.641,lng:-84.428},
{c:'DFW',n:'Dallas/Fort Worth',city:'Dallas',country:'USA',lat:32.900,lng:-97.040},
{c:'MIA',n:'Miami Intl',city:'Miami',country:'USA',lat:25.796,lng:-80.287},
{c:'SFO',n:'San Francisco',city:'San Francisco',country:'USA',lat:37.621,lng:-122.379},
{c:'SEA',n:'Seattle-Tacoma',city:'Seattle',country:'USA',lat:47.450,lng:-122.309},
{c:'BOS',n:'Logan Intl',city:'Boston',country:'USA',lat:42.366,lng:-71.010},
{c:'YYZ',n:'Pearson Intl',city:'Toronto',country:'Canada',lat:43.678,lng:-79.625},
{c:'YVR',n:'Vancouver Intl',city:'Vancouver',country:'Canada',lat:49.197,lng:-123.182},
{c:'GRU',n:'Guarulhos',city:'São Paulo',country:'Brazil',lat:-23.436,lng:-46.473},
{c:'EZE',n:'Ezeiza Intl',city:'Buenos Aires',country:'Argentina',lat:-34.822,lng:-58.536},
{c:'BOG',n:'El Dorado Intl',city:'Bogotá',country:'Colombia',lat:4.702,lng:-74.147},
{c:'LIM',n:'Jorge Chávez',city:'Lima',country:'Peru',lat:-12.022,lng:-77.114},
{c:'SCL',n:'Arturo Merino',city:'Santiago',country:'Chile',lat:-33.393,lng:-70.786},
{c:'MEX',n:'Benito Juárez',city:'Mexico City',country:'Mexico',lat:19.436,lng:-99.072},
{c:'SYD',n:'Kingsford Smith',city:'Sydney',country:'Australia',lat:-33.940,lng:151.175},
{c:'MEL',n:'Melbourne Airport',city:'Melbourne',country:'Australia',lat:-37.673,lng:144.843},
{c:'PER',n:'Perth Airport',city:'Perth',country:'Australia',lat:-31.940,lng:115.967},
{c:'SIN',n:'Changi Airport',city:'Singapore',country:'Singapore',lat:1.364,lng:103.992},
{c:'KUL',n:'KLIA',city:'Kuala Lumpur',country:'Malaysia',lat:2.746,lng:101.710},
{c:'BKK',n:'Suvarnabhumi',city:'Bangkok',country:'Thailand',lat:13.681,lng:100.747},
{c:'HKG',n:'Hong Kong Intl',city:'Hong Kong',country:'China',lat:22.308,lng:113.919},
{c:'PVG',n:'Pudong Intl',city:'Shanghai',country:'China',lat:31.144,lng:121.808},
{c:'PEK',n:'Beijing Capital',city:'Beijing',country:'China',lat:40.080,lng:116.603},
{c:'ICN',n:'Incheon Intl',city:'Seoul',country:'South Korea',lat:37.460,lng:126.441},
{c:'NRT',n:'Narita Intl',city:'Tokyo',country:'Japan',lat:35.765,lng:140.386},
{c:'HND',n:'Haneda Airport',city:'Tokyo',country:'Japan',lat:35.549,lng:139.780},
{c:'TPE',n:'Taiwan Taoyuan',city:'Taipei',country:'Taiwan',lat:25.078,lng:121.233},
{c:'MNL',n:'Ninoy Aquino',city:'Manila',country:'Philippines',lat:14.509,lng:121.020},
{c:'CGK',n:'Soekarno–Hatta',city:'Jakarta',country:'Indonesia',lat:-6.126,lng:106.656},
{c:'NBO',n:'Jomo Kenyatta',city:'Nairobi',country:'Kenya',lat:-1.319,lng:36.928},
{c:'JNB',n:'OR Tambo',city:'Johannesburg',country:'South Africa',lat:-26.137,lng:28.241},
{c:'CPT',n:'Cape Town Intl',city:'Cape Town',country:'South Africa',lat:-33.972,lng:18.602},
{c:'LOS',n:'Murtala Muhammed',city:'Lagos',country:'Nigeria',lat:6.577,lng:3.321},
{c:'ADD',n:'Bole Intl',city:'Addis Ababa',country:'Ethiopia',lat:8.978,lng:38.799},
{c:'CAI',n:'Cairo Intl',city:'Cairo',country:'Egypt',lat:30.122,lng:31.406},
{c:'CPH',n:'Copenhagen',city:'Copenhagen',country:'Denmark',lat:55.618,lng:12.651},
{c:'ARN',n:'Stockholm Arlanda',city:'Stockholm',country:'Sweden',lat:59.652,lng:17.919},
{c:'OSL',n:'Oslo Gardermoen',city:'Oslo',country:'Norway',lat:60.194,lng:11.100},
{c:'HEL',n:'Helsinki Airport',city:'Helsinki',country:'Finland',lat:60.317,lng:24.963},
{c:'WAW',n:'Chopin Airport',city:'Warsaw',country:'Poland',lat:52.166,lng:20.967},
{c:'PRG',n:'Václav Havel',city:'Prague',country:'Czech Republic',lat:50.101,lng:14.260},
{c:'ATH',n:'Athens Intl',city:'Athens',country:'Greece',lat:37.936,lng:23.945},
{c:'LIS',n:'Humberto Delgado',city:'Lisbon',country:'Portugal',lat:38.781,lng:-9.136},
{c:'DUB',n:'Dublin Airport',city:'Dublin',country:'Ireland',lat:53.421,lng:-6.270},
{c:'GVA',n:'Geneva Airport',city:'Geneva',country:'Switzerland',lat:46.238,lng:6.109},
{c:'MXP',n:'Malpensa',city:'Milan',country:'Italy',lat:45.631,lng:8.728},
{c:'TXL',n:'Berlin Brandenburg',city:'Berlin',country:'Germany',lat:52.560,lng:13.288},
{c:'CMN',n:'Mohammed V Intl',city:'Casablanca',country:'Morocco',lat:33.368,lng:-7.590},
];

/* ═══════════════════════════════════════════════════════════
   WEIGHTAGE MAP
═══════════════════════════════════════════════════════════ */
const WEIGHTAGE_MAP={
  m1:'medium',m2:'high',m3:'medium',m4:'high',m5:'medium',m6:'medium',
  m7:'high',m8:'high',m9:'medium',m10:'high',m11:'high',
  p1:'high',p2:'high',p3:'medium',p4:'medium',p5:'low',p6:'high',p7:'medium',
  p8:'medium',p9:'high',p10:'high',p11:'high',p12:'high',p13:'low',p14:'low',
  p15:'medium',p16:'high',p17:'high',
  c1:'high',c2:'medium',c3:'high',c4:'high',c5:'medium',c6:'medium',c7:'high',c8:'high'
};

/* ═══════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════ */
let subjects=[
  {id:'s_math',name:'Mathematics',color:'#638bff',topics:[
    {id:'m1',name:'Quadratic Equation',sub:'Roots, Discriminant, Range',status:0,notes:'',doneDate:null,statusDate:null,weightage:'medium'},
    {id:'m2',name:'Trigo Ratio & Identities',sub:'Compound angles, Multiple angles',status:0,notes:'',doneDate:null,statusDate:null,weightage:'high'},
    {id:'m3',name:'Trigo Equation',sub:'General solutions',status:0,notes:'',doneDate:null,statusDate:null,weightage:'medium'},
    {id:'m4',name:'P & C',sub:'Arrangements, Selections',status:0,notes:'',doneDate:null,statusDate:null,weightage:'high'},
    {id:'m5',name:'Sequence & Series',sub:'AP, GP, HP, AGP',status:0,notes:'',doneDate:null,statusDate:null,weightage:'medium'},
    {id:'m6',name:'Binomial Theorem',sub:'General term, Coefficients',status:0,notes:'',doneDate:null,statusDate:null,weightage:'medium'},
    {id:'m7',name:'Straight Lines',sub:'Slope, Intercepts, Bisectors',status:0,notes:'',doneDate:null,statusDate:null,weightage:'high'},
    {id:'m8',name:'Circles',sub:'Tangents, Normals, Chord',status:0,notes:'',doneDate:null,statusDate:null,weightage:'high'},
    {id:'m9',name:'Parabola',sub:'Standard forms, Focus-Directrix',status:0,notes:'',doneDate:null,statusDate:null,weightage:'medium'},
    {id:'m10',name:'Functions',sub:'Domain, Range, Types',status:0,notes:'',doneDate:null,statusDate:null,weightage:'high'},
    {id:'m11',name:'ITF',sub:'Inverse Trigo Properties',status:0,notes:'',doneDate:null,statusDate:null,weightage:'high'},
  ]},
  {id:'s_phys',name:'Physics',color:'#f87171',topics:[
    {id:'p1',name:'Kinematics',sub:'1D/2D Motion',status:0,notes:'',doneDate:null,statusDate:null,weightage:'high'},
    {id:'p2',name:'Calculus',sub:'Differentiation/Integration',status:0,notes:'',doneDate:null,statusDate:null,weightage:'high'},
    {id:'p3',name:'Vectors',sub:'Dot/Cross Products',status:0,notes:'',doneDate:null,statusDate:null,weightage:'medium'},
    {id:'p4',name:'Projectile',sub:'Trajectory, Time of Flight',status:0,notes:'',doneDate:null,statusDate:null,weightage:'medium'},
    {id:'p5',name:'Relative Motion',sub:'Rain-Man, River-Boat',status:0,notes:'',doneDate:null,statusDate:null,weightage:'low'},
    {id:'p6',name:'NLM',sub:'Laws of Motion, Pulley',status:0,notes:'',doneDate:null,statusDate:null,weightage:'high'},
    {id:'p7',name:'Friction',sub:'Static, Kinetic, Rolling',status:0,notes:'',doneDate:null,statusDate:null,weightage:'medium'},
    {id:'p8',name:'Circular Motion',sub:'Banking, Centripetal Force',status:0,notes:'',doneDate:null,statusDate:null,weightage:'medium'},
    {id:'p9',name:'COM',sub:'Center of Mass, Collisions',status:0,notes:'',doneDate:null,statusDate:null,weightage:'high'},
    {id:'p10',name:'WEP',sub:'Work, Energy, Power',status:0,notes:'',doneDate:null,statusDate:null,weightage:'high'},
    {id:'p11',name:'Rotational',sub:'Torque, MOI, Angular Mom.',status:0,notes:'',doneDate:null,statusDate:null,weightage:'high'},
    {id:'p12',name:'Optics',sub:'Ray & Wave Basics',status:0,notes:'',doneDate:null,statusDate:null,weightage:'high'},
    {id:'p13',name:'Thermal Expansion',sub:'Alpha, Beta, Gamma',status:0,notes:'',doneDate:null,statusDate:null,weightage:'low'},
    {id:'p14',name:'Calorimetry',sub:'Specific Heat, Phase change',status:0,notes:'',doneDate:null,statusDate:null,weightage:'low'},
    {id:'p15',name:'Heat Transfer',sub:'Conduction, Radiation',status:0,notes:'',doneDate:null,statusDate:null,weightage:'medium'},
    {id:'p16',name:'Thermo & KTG',sub:'Laws, Ideal Gas Eq',status:0,notes:'',doneDate:null,statusDate:null,weightage:'high'},
    {id:'p17',name:'Fluids',sub:'Statics & Dynamics',status:0,notes:'',doneDate:null,statusDate:null,weightage:'high'},
  ]},
  {id:'s_chem',name:'Chemistry',color:'#34d399',topics:[
    {id:'c1',name:'Mole Concept',sub:'Stoichiometry, Concentration',status:0,notes:'',doneDate:null,statusDate:null,weightage:'high'},
    {id:'c2',name:'Structure of Atom',sub:'Quantum numbers, Orbitals',status:0,notes:'',doneDate:null,statusDate:null,weightage:'medium'},
    {id:'c3',name:'Periodic Table',sub:'Trends, Properties',status:0,notes:'',doneDate:null,statusDate:null,weightage:'high'},
    {id:'c4',name:'Chemical Bonding',sub:'VSEPR, Hybridization',status:0,notes:'',doneDate:null,statusDate:null,weightage:'high'},
    {id:'c5',name:'IUPAC',sub:'Nomenclature',status:0,notes:'',doneDate:null,statusDate:null,weightage:'medium'},
    {id:'c6',name:'Redox',sub:'Oxidation states, Balancing',status:0,notes:'',doneDate:null,statusDate:null,weightage:'medium'},
    {id:'c7',name:'Thermo',sub:'Enthalpy, Entropy, Gibbs',status:0,notes:'',doneDate:null,statusDate:null,weightage:'high'},
    {id:'c8',name:'Isomerism',sub:'Structural & Stereo',status:0,notes:'',doneDate:null,statusDate:null,weightage:'high'},
  ]},
];

let topicCtr=1000, subjCtr=50, selColor='#638bff';
let friends=[], myUsername='';
let studyLog=[];
let dailyGoals={topicGoal:3,hourGoal:4,lastReset:''};
let examDates=[
  {id:'jee_main',name:'JEE Main',date:'2027-01-22'},
  {id:'jee_adv',name:'JEE Advanced',date:'2027-05-18'}
];
let openNotesSid=null, openNotesTid=null;
const FRIEND_COLORS=['#638bff','#f87171','#34d399','#fbbf24','#a78bfa','#f472b6','#22d3ee','#fb923c'];
const CIRC=2*Math.PI*90;

/* ═══════════════════════════════════════════════════════════
   INDEXEDDB FOR FILE STORAGE
═══════════════════════════════════════════════════════════ */
function openFileDB(){
  return new Promise((resolve,reject)=>{
    const req=indexedDB.open('jee_files',1);
    req.onupgradeneeded=e=>e.target.result.createObjectStore('files',{keyPath:'id'});
    req.onsuccess=e=>resolve(e.target.result);
    req.onerror=e=>reject(e.target.error);
  });
}
async function saveFileToIDB(fileData){
  try{const db=await openFileDB();const tx=db.transaction('files','readwrite');tx.objectStore('files').put(fileData);await new Promise(r=>{tx.oncomplete=r;});}catch(e){}
}
async function getFilesForTopic(topicId){
  try{
    const db=await openFileDB();const tx=db.transaction('files','readonly');const store=tx.objectStore('files');
    return new Promise(resolve=>{
      const result=[];const req=store.openCursor();
      req.onsuccess=e=>{const c=e.target.result;if(c){if(c.value.topicId===topicId)result.push(c.value);c.continue();}else resolve(result);};
      req.onerror=()=>resolve([]);
    });
  }catch(e){return [];}
}
async function deleteFileFromIDB(fileId){
  try{const db=await openFileDB();const tx=db.transaction('files','readwrite');tx.objectStore('files').delete(fileId);}catch(e){}
}
async function getAllFilesFromIDB(){
  try{
    const db=await openFileDB();const tx=db.transaction('files','readonly');const store=tx.objectStore('files');
    return new Promise(resolve=>{
      const result=[];const req=store.openCursor();
      req.onsuccess=e=>{const c=e.target.result;if(c){result.push(c.value);c.continue();}else resolve(result);};
      req.onerror=()=>resolve([]);
    });
  }catch(e){return [];}
}

/* ═══════════════════════════════════════════════════════════
   SAVE / LOAD / MIGRATE
═══════════════════════════════════════════════════════════ */
function save(){
  try{
    localStorage.setItem('jee_subjects',JSON.stringify(subjects));
    localStorage.setItem('jee_friends',JSON.stringify(friends));
    localStorage.setItem('jee_username',myUsername);
    localStorage.setItem('jee_study_log',JSON.stringify(studyLog));
    localStorage.setItem('jee_daily_goals',JSON.stringify(dailyGoals));
    localStorage.setItem('jee_exam_dates',JSON.stringify(examDates));
    flashSaved();
    if(myUsername)syncMyProfile();
  }catch(e){}
}

function load(){
  try{
    const s=localStorage.getItem('jee_subjects');
    const f=localStorage.getItem('jee_friends');
    const u=localStorage.getItem('jee_username');
    const sl=localStorage.getItem('jee_study_log');
    const dg=localStorage.getItem('jee_daily_goals');
    const ed=localStorage.getItem('jee_exam_dates');
    if(s)subjects=JSON.parse(s);
    if(f)friends=JSON.parse(f);
    if(u){myUsername=u;document.getElementById('my-username').value=u;}
    if(sl)studyLog=JSON.parse(sl);
    if(dg)dailyGoals=JSON.parse(dg);
    if(ed)examDates=JSON.parse(ed);
    if(localStorage.getItem('jee_theme')==='light'){
      document.documentElement.setAttribute('data-theme','light');
      document.getElementById('theme-sw').checked=true;
      document.getElementById('th-knob').textContent='☀️';
    }
    migrateData();
  }catch(e){}
}

function migrateData(){
  subjects.forEach(s=>{
    if(s.collapsed===undefined)s.collapsed=false;
    s.topics.forEach(t=>{
      if(t.status===undefined){t.status=t.done?2:0;}
      if(t.notes===undefined)t.notes='';
      if(t.doneDate===undefined)t.doneDate=t.status===2?Date.now():null;
      if(t.statusDate===undefined)t.statusDate=t.status>0?Date.now():null;
      if(t.weightage===undefined)t.weightage=WEIGHTAGE_MAP[t.id]||null;
    });
  });
  // Reset daily goals if new day
  const today=dateStr(new Date());
  if(dailyGoals.lastReset!==today)dailyGoals.lastReset=today;
}

function flashSaved(){
  const el=document.getElementById('save-status');
  const txt=document.getElementById('save-txt');
  el.classList.add('saved');txt.textContent='Saved ✓';
  clearTimeout(el._t);
  el._t=setTimeout(()=>{el.classList.remove('saved');txt.textContent='Auto-saved';},2500);
}

async function syncMyProfile(){
  if(!myUsername||!window.storage)return;
  const data={username:myUsername,updated:Date.now(),
    subjects:subjects.map(s=>({id:s.id,name:s.name,color:s.color,
      confident:s.topics.filter(t=>t.status===2).length,
      studied:s.topics.filter(t=>t.status===1).length,
      total:s.topics.length}))};
  try{await window.storage.set('jee_user_'+myUsername,JSON.stringify(data),true);}catch(e){}
}

/* ═══════════════════════════════════════════════════════════
   UTILS
═══════════════════════════════════════════════════════════ */
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function esc2(s){return String(s).replace(/'/g,"\\'").replace(/"/g,'&quot;');}
function dateStr(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
function fmtTime(s){const h=Math.floor(s/3600),m=Math.floor((s%3600)/60),sc=s%60;return(h>0?String(h).padStart(2,'0')+':':'')+String(m).padStart(2,'0')+':'+String(sc).padStart(2,'0');}
function fmtBytes(b){if(b<1024)return b+'B';if(b<1048576)return(b/1024).toFixed(1)+'KB';return(b/1048576).toFixed(1)+'MB';}
function timeAgo(ts){const d=Date.now()-ts,m=Math.floor(d/60000),h=Math.floor(d/3600000);if(d<60000)return'just now';if(d<3600000)return m+'m ago';if(d<86400000)return h+'h ago';return Math.floor(d/86400000)+'d ago';}
function isRevisionDue(t){return t.status===2&&t.doneDate&&(Date.now()-t.doneDate)>7*24*3600*1000;}

/* ═══════════════════════════════════════════════════════════
   RENDER TRACKER
═══════════════════════════════════════════════════════════ */
function renderTracker(){
  const wrap=document.getElementById('cards-wrap');
  wrap.innerHTML='';
  subjects.forEach((s,si)=>{
    const conf=s.topics.filter(t=>t.status===2).length;
    const stud=s.topics.filter(t=>t.status===1).length;
    const total=s.topics.length;
    const pct=total?Math.round(conf/total*100):0;
    const studPct=total?Math.round(stud/total*100):0;
    const card=document.createElement('section');
    card.className='subj-card'+(s.collapsed?' collapsed':'');card.dataset.sid=s.id;card.dataset.idx=si;
    card.style.setProperty('--sc',s.color);
    card.draggable=true;
    card.ondragstart=e=>handleDragStart(e,'subject',si);
    card.ondragover=e=>handleDragOver(e);
    card.ondrop=e=>handleDrop(e,'subject');
    card.ondragend=e=>e.target.classList.remove('dragging');
    card.innerHTML=`
      <div class="accent-bar"></div>
      <div class="subj-header" onclick="toggleCollapse('${s.id}')" style="cursor:pointer">
        <span class="drag-handle" title="Drag to reorder" onclick="event.stopPropagation()">⋮⋮</span>
        <span class="sdot"></span>
        <span class="sname">${esc(s.name)}</span>
        <div class="spct-wrap">
          <span class="spct-lbl" id="spl-${s.id}">${conf}✅ ${stud}🟡 / ${total} · <b>${pct}%</b></span>
          <div class="mini-bar"><div class="mini-fill-c" id="smfc-${s.id}" style="width:${pct}%"></div><div class="mini-fill-s" id="smfs-${s.id}" style="width:${studPct}%"></div></div>
        </div>
        <button class="collapse-btn" onclick="event.stopPropagation();toggleCollapse('${s.id}')" title="${s.collapsed?'Expand':'Collapse'}">
          <svg class="collapse-chevron" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 5l4.5 4.5L11.5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <button class="del-subj-btn" onclick="event.stopPropagation();delSubject('${s.id}')">Remove</button>
      </div>
      <div class="subj-collapsible" id="sc-${s.id}">
        <div class="topic-grid" id="tg-${s.id}">
          ${s.topics.map((t,ti)=>topicHTML(t,s,ti)).join('')}
        </div>
        <div class="notes-panel" id="np-${s.id}"></div>
        <div class="add-topic-row">
          <button class="add-topic-btn" onclick="toggleAddForm('${s.id}')">
            <svg width="13" height="13" fill="none" viewBox="0 0 13 13"><path d="M6.5 1v11M1 6.5h11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            Add Topic
          </button>
          <div class="add-form" id="af-${s.id}">
            <div class="form-row">
              <input type="text" id="an-${s.id}" placeholder="Topic name" maxlength="40">
              <input type="text" id="as-${s.id}" placeholder="Subtopics (optional)" maxlength="50">
            </div>
            <div class="form-row" style="align-items:center">
              <span class="form-hint">Enter to add · Esc to cancel</span>
              <button class="btn-cxl" onclick="closeAddForm('${s.id}')">Cancel</button>
              <button class="btn-ok" onclick="addTopic('${s.id}')">Add</button>
            </div>
          </div>
        </div>
      </div>`;
    wrap.appendChild(card);
  });
  updateGlobalProgress();
  rebuildTopicPickers();
  applyFilters();
}

function topicHTML(t,s,ti){
  const statusEmoji=['❌','🟡','✅'][t.status];
  const statusClass='s'+t.status;
  const wtBadge=t.weightage==='high'?'<span class="wt-badge high">🔥 High Yield</span>':
                t.weightage==='medium'?'<span class="wt-badge medium">⚡ Medium</span>':'';
  const revBadge=isRevisionDue(t)?'<span class="rev-badge">🔄 Revise</span>':'';
  const hasNotes=t.notes&&t.notes.trim().length>0;
  return `<div class="topic-item ${statusClass}" id="ti-${t.id}" data-tid="${t.id}" data-idx="${ti}" draggable="true"
    ondragstart="handleDragStart(event,'topic','${s.id}',${ti})" ondragover="handleDragOver(event)" ondrop="handleDrop(event,'topic','${s.id}')" ondragend="this.classList.remove('dragging')">
    <span class="drag-handle" title="Drag to reorder">⋮⋮</span>
    <button class="status-pill ${statusClass}" onclick="cycleStatus('${s.id}','${t.id}')" title="${['Not Started','Studied','Confident'][t.status]}">${statusEmoji}</button>
    <div class="topic-info">
      <span class="tname">${esc(t.name)}</span>
      ${t.sub?`<span class="tsub">${esc(t.sub)}</span>`:''}
      <div class="topic-badges">
        ${t.custom?'<span class="custom-pill">Custom</span>':''}
        ${wtBadge}${revBadge}
      </div>
    </div>
    <button class="note-btn${hasNotes?' has-notes':''}" onclick="openNotesPanel('${s.id}','${t.id}')" title="Notes & Files">📝</button>
    <button class="del-topic-btn" onclick="delTopic('${s.id}','${t.id}')" title="Remove">✕</button>
  </div>`;
}

/* ═══════════════════════════════════════════════════════════
   STATUS & CRUD
═══════════════════════════════════════════════════════════ */
function cycleStatus(sid,tid){
  const s=subjects.find(x=>x.id===sid);
  const t=s.topics.find(x=>x.id===tid);
  const prevStatus=t.status;
  t.status=(t.status+1)%3;
  t.statusDate=Date.now();
  if(t.status===2)t.doneDate=Date.now();
  else if(t.status===0)t.doneDate=null;
  const el=document.getElementById('ti-'+tid);
  if(el){
    el.className='topic-item s'+t.status;
    const pill=el.querySelector('.status-pill');
    pill.className='status-pill s'+t.status;
    pill.textContent=['❌','🟡','✅'][t.status];
    pill.title=['Not Started','Studied','Confident'][t.status];
  }
  // Check if subject completed for confetti
  if(t.status===2&&s.topics.every(x=>x.status===2))triggerConfetti();
  updateSubjProgress(sid);updateGlobalProgress();rebuildTopicPickers();updateDailyGoals();save();
}

function delTopic(sid,tid){
  const el=document.getElementById('ti-'+tid);
  if(!el)return;
  el.style.transition='opacity .18s,transform .18s';el.style.opacity='0';el.style.transform='scale(.94)';
  setTimeout(()=>{
    subjects.find(x=>x.id===sid).topics=subjects.find(x=>x.id===sid).topics.filter(t=>t.id!==tid);
    el.remove();updateSubjProgress(sid);updateGlobalProgress();rebuildTopicPickers();save();
  },200);
}

function addTopic(sid){
  const ni=document.getElementById('an-'+sid);const si=document.getElementById('as-'+sid);
  const name=ni.value.trim();
  if(!name){ni.style.borderColor='#ef4444';ni.focus();return;}
  ni.style.borderColor='';
  const s=subjects.find(x=>x.id===sid);
  const tid='ct'+(++topicCtr);
  const t={id:tid,name,sub:si.value.trim(),status:0,notes:'',doneDate:null,statusDate:null,weightage:null,custom:true};
  s.topics.push(t);
  const grid=document.getElementById('tg-'+sid);
  grid.insertAdjacentHTML('beforeend',topicHTML(t,s,s.topics.length-1));
  ni.value='';si.value='';ni.focus();
  updateSubjProgress(sid);updateGlobalProgress();rebuildTopicPickers();save();
}

function toggleAddForm(sid){
  subjects.forEach(s=>{if(s.id!==sid)closeAddForm(s.id);});
  document.getElementById('af-'+sid)?.classList.toggle('open');
  if(document.getElementById('af-'+sid)?.classList.contains('open'))document.getElementById('an-'+sid)?.focus();
}
function closeAddForm(sid){
  const f=document.getElementById('af-'+sid);if(!f)return;f.classList.remove('open');
  ['an-','as-'].forEach(p=>{const el=document.getElementById(p+sid);if(el){el.value='';el.style.borderColor='';}});
}

function delSubject(sid){
  if(subjects.length<=1){alert('Need at least one subject.');return;}
  const card=document.querySelector(`[data-sid="${sid}"]`);if(!card)return;
  card.style.transition='opacity .2s,transform .2s';card.style.opacity='0';card.style.transform='translateY(-10px)';
  setTimeout(()=>{
    subjects=subjects.filter(s=>s.id!==sid);
    card.remove();updateGlobalProgress();rebuildTopicPickers();save();
    document.getElementById('st-subj').textContent=subjects.length;
  },220);
}

function addSubject(){
  const ni=document.getElementById('new-sname');const name=ni.value.trim();
  if(!name){ni.style.borderColor='#ef4444';ni.focus();return;}
  ni.style.borderColor='';
  subjects.push({id:'su'+(++subjCtr),name,color:selColor,topics:[]});
  cancelSubjForm();renderTracker();save();
  setTimeout(()=>{const c=document.querySelectorAll('.subj-card');c[c.length-1]?.scrollIntoView({behavior:'smooth',block:'center'});},100);
}
function toggleSubjForm(){document.getElementById('subj-form').classList.toggle('open');if(document.getElementById('subj-form').classList.contains('open'))document.getElementById('new-sname').focus();}
function cancelSubjForm(){document.getElementById('subj-form').classList.remove('open');document.getElementById('new-sname').value='';}
function pickColor(el){document.querySelectorAll('.cswatch').forEach(s=>s.classList.remove('sel'));el.classList.add('sel');selColor=el.dataset.color;}

function toggleCollapse(sid){
  const s=subjects.find(x=>x.id===sid);if(!s)return;
  s.collapsed=!s.collapsed;
  const card=document.querySelector(`[data-sid="${sid}"]`);
  if(card){
    card.classList.toggle('collapsed',s.collapsed);
    const btn=card.querySelector('.collapse-btn');
    if(btn)btn.title=s.collapsed?'Expand':'Collapse';
  }
  save();
}

/* ═══════════════════════════════════════════════════════════
   PROGRESS UPDATES
═══════════════════════════════════════════════════════════ */
function updateSubjProgress(sid){
  const s=subjects.find(x=>x.id===sid);
  const conf=s.topics.filter(t=>t.status===2).length,stud=s.topics.filter(t=>t.status===1).length,total=s.topics.length;
  const pct=total?Math.round(conf/total*100):0;
  const studPct=total?Math.round(stud/total*100):0;
  const lbl=document.getElementById('spl-'+sid);if(lbl)lbl.innerHTML=`${conf}✅ ${stud}🟡 / ${total} · <b>${pct}%</b>`;
  const bc=document.getElementById('smfc-'+sid);if(bc)bc.style.width=pct+'%';
  const bs=document.getElementById('smfs-'+sid);if(bs)bs.style.width=studPct+'%';
}

function updateGlobalProgress(){
  let conf=0,stud=0,total=0;
  subjects.forEach(s=>{conf+=s.topics.filter(t=>t.status===2).length;stud+=s.topics.filter(t=>t.status===1).length;total+=s.topics.length;});
  const pct=total?Math.round(conf/total*100):0;
  const studPct=total?Math.round(stud/total*100):0;
  const circ=2*Math.PI*34;
  document.getElementById('ring-fill').style.strokeDashoffset=circ-(circ*pct/100);
  document.getElementById('ring-pct').textContent=pct+'%';
  document.getElementById('overall-bar-c').style.width=pct+'%';
  document.getElementById('overall-bar-s').style.width=studPct+'%';
  document.getElementById('st-conf').textContent=conf;
  document.getElementById('st-stud').textContent=stud;
  document.getElementById('st-total').textContent=total;
  document.getElementById('st-subj').textContent=subjects.length;
}

/* ═══════════════════════════════════════════════════════════
   NOTES & FILES
═══════════════════════════════════════════════════════════ */
async function openNotesPanel(sid,tid){
  // Close if same topic
  if(openNotesSid===sid&&openNotesTid===tid){closeNotesPanel();return;}
  closeNotesPanel();
  openNotesSid=sid;openNotesTid=tid;
  const s=subjects.find(x=>x.id===sid);
  const t=s.topics.find(x=>x.id===tid);
  const panel=document.getElementById('np-'+sid);
  const files=await getFilesForTopic(tid);
  panel.innerHTML=`
    <div class="np-header">
      <span class="np-title">📝 Notes: ${esc(t.name)}</span>
      <button class="np-close" onclick="closeNotesPanel()">✕</button>
    </div>
    <textarea class="np-textarea" id="notes-ta-${tid}" placeholder="Quick notes, formulas, key concepts…" onblur="saveNotes('${sid}','${tid}')">${esc(t.notes||'')}</textarea>
    <div class="np-file-section">
      <button class="np-file-btn" onclick="uploadFile('${tid}')">📎 Attach File (max 2MB)</button>
      <div class="np-file-list" id="file-list-${tid}">
        ${files.map(f=>`<div class="np-file-item" id="fi-${f.id}">
          <span class="np-file-name" onclick="openFile('${f.id}')">${esc(f.name)}</span>
          <span class="np-file-size">${fmtBytes(f.size)}</span>
          <button class="np-file-del" onclick="removeFile('${f.id}','${tid}')">✕</button>
        </div>`).join('')}
      </div>
    </div>`;
  panel.classList.add('open');
  panel.scrollIntoView({behavior:'smooth',block:'nearest'});
}

function closeNotesPanel(){
  if(openNotesSid){
    const panel=document.getElementById('np-'+openNotesSid);
    if(panel){panel.classList.remove('open');panel.innerHTML='';}
  }
  openNotesSid=null;openNotesTid=null;
}

function saveNotes(sid,tid){
  const ta=document.getElementById('notes-ta-'+tid);if(!ta)return;
  const t=subjects.find(x=>x.id===sid)?.topics.find(x=>x.id===tid);
  if(t){t.notes=ta.value;save();}
  // Update note icon
  const btn=document.querySelector(`#ti-${tid} .note-btn`);
  if(btn)btn.classList.toggle('has-notes',ta.value.trim().length>0);
}

function uploadFile(topicId){
  const input=document.createElement('input');
  input.type='file';input.accept='.pdf,.jpg,.jpeg,.png,.doc,.docx,.txt,.xlsx,.pptx';
  input.onchange=async e=>{
    const file=e.target.files[0];if(!file)return;
    if(file.size>2*1024*1024){alert('File too large. Maximum 2MB per file.');return;}
    const reader=new FileReader();
    reader.onload=async()=>{
      const fileData={id:topicId+'_'+Date.now()+'_'+file.name,topicId,name:file.name,data:reader.result,type:file.type,size:file.size};
      await saveFileToIDB(fileData);
      // Refresh file list
      const files=await getFilesForTopic(topicId);
      const list=document.getElementById('file-list-'+topicId);
      if(list)list.innerHTML=files.map(f=>`<div class="np-file-item" id="fi-${f.id}">
        <span class="np-file-name" onclick="openFile('${f.id}')">${esc(f.name)}</span>
        <span class="np-file-size">${fmtBytes(f.size)}</span>
        <button class="np-file-del" onclick="removeFile('${f.id}','${topicId}')">✕</button>
      </div>`).join('');
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

async function openFile(fileId){
  try{
    const db=await openFileDB();const tx=db.transaction('files','readonly');
    const req=tx.objectStore('files').get(fileId);
    req.onsuccess=e=>{
      const f=e.target.result;if(!f)return;
      const a=document.createElement('a');a.href=f.data;a.download=f.name;a.target='_blank';
      document.body.appendChild(a);a.click();document.body.removeChild(a);
    };
  }catch(e){}
}

async function removeFile(fileId,topicId){
  await deleteFileFromIDB(fileId);
  document.getElementById('fi-'+fileId)?.remove();
}

/* ═══════════════════════════════════════════════════════════
   SEARCH & FILTER
═══════════════════════════════════════════════════════════ */
function applyFilters(){
  const q=(document.getElementById('search-input')?.value||'').toLowerCase();
  const f=document.getElementById('filter-select')?.value||'all';
  subjects.forEach(s=>{
    s.topics.forEach(t=>{
      const el=document.getElementById('ti-'+t.id);if(!el)return;
      let show=true;
      if(q&&!t.name.toLowerCase().includes(q)&&!(t.sub||'').toLowerCase().includes(q))show=false;
      if(f==='not-started'&&t.status!==0)show=false;
      if(f==='studied'&&t.status!==1)show=false;
      if(f==='confident'&&t.status!==2)show=false;
      if(f==='revision'&&!isRevisionDue(t))show=false;
      if(f==='high'&&t.weightage!=='high')show=false;
      el.style.display=show?'':'none';
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   DAILY GOALS
═══════════════════════════════════════════════════════════ */
function updateDailyGoals(){
  const today=dateStr(new Date());
  const topicsToday=subjects.reduce((a,s)=>a+s.topics.filter(t=>t.statusDate&&dateStr(new Date(t.statusDate))===today&&t.status>=1).length,0);
  const hoursToday=studyLog.filter(e=>e.date===today).reduce((a,e)=>a+e.minutes,0)/60;
  const tg=dailyGoals.topicGoal||3,hg=dailyGoals.hourGoal||4;
  const tPct=Math.min(100,Math.round(topicsToday/tg*100));
  const hPct=Math.min(100,Math.round(hoursToday/hg*100));
  document.getElementById('goal-topics-bar').style.width=tPct+'%';
  document.getElementById('goal-hours-bar').style.width=hPct+'%';
  document.getElementById('goal-topics-val').textContent=`${topicsToday}/${tg}`;
  document.getElementById('goal-hours-val').textContent=`${hoursToday.toFixed(1)}/${hg}h`;
}

function toggleGoalsEdit(){document.getElementById('goals-edit-form').classList.toggle('open');}
function saveDailyGoals(){
  dailyGoals.topicGoal=parseInt(document.getElementById('ge-topics').value)||3;
  dailyGoals.hourGoal=parseInt(document.getElementById('ge-hours').value)||4;
  document.getElementById('goals-edit-form').classList.remove('open');
  updateDailyGoals();save();
}

/* ═══════════════════════════════════════════════════════════
   EXAM COUNTDOWNS
═══════════════════════════════════════════════════════════ */
function renderCountdowns(){
  const bar=document.getElementById('countdown-bar');
  const now=new Date();
  bar.innerHTML=examDates.map(ex=>{
    const d=new Date(ex.date);const diff=Math.ceil((d-now)/(1000*3600*24));
    const urgent=diff<=30&&diff>0;
    const label=diff>0?`${diff} days`:(diff===0?'TODAY!':'Passed');
    return `<div class="cd-item">
      <span class="cd-name">${esc(ex.name)}</span>
      <span class="cd-days${urgent?' urgent':''}">${label}</span>
      <span class="cd-date">${ex.date}</span>
      ${ex.id.startsWith('custom_')?`<button class="cd-del" onclick="removeExam('${ex.id}')">✕</button>`:''}
    </div>`;
  }).join('')+`
    <button class="cd-add-btn" onclick="toggleExamForm()">+ Add Exam</button>
    <div class="cd-add-form" id="cd-add-form">
      <input type="text" id="cd-new-name" placeholder="Exam name" maxlength="20" style="width:120px">
      <input type="date" id="cd-new-date">
      <button class="btn-ok" style="padding:5px 12px;font-size:.75rem" onclick="addExam()">Add</button>
    </div>`;
}

function toggleExamForm(){document.getElementById('cd-add-form').classList.toggle('open');}
function addExam(){
  const name=document.getElementById('cd-new-name').value.trim();
  const date=document.getElementById('cd-new-date').value;
  if(!name||!date)return;
  examDates.push({id:'custom_'+Date.now(),name,date});
  renderCountdowns();save();
}
function removeExam(id){
  examDates=examDates.filter(e=>e.id!==id);
  renderCountdowns();save();
}

/* ═══════════════════════════════════════════════════════════
   FRIENDS
═══════════════════════════════════════════════════════════ */
function saveMyProfile(){
  const val=document.getElementById('my-username').value.trim().toLowerCase().replace(/[^a-z0-9_]/g,'');
  if(!val)return;myUsername=val;document.getElementById('my-username').value=val;
  save();generateMyCode();renderFriends();
}
function generateMyCode(){
  if(!myUsername)return;
  const data={v:2,u:myUsername,subjects:subjects.map(s=>({name:s.name,color:s.color,
    confident:s.topics.filter(t=>t.status===2).length,studied:s.topics.filter(t=>t.status===1).length,total:s.topics.length})),ts:Date.now()};
  document.getElementById('my-code-box').textContent=btoa(JSON.stringify(data));
}
function copyMyCode(){
  const code=document.getElementById('my-code-box').textContent;
  if(code==='Set a username to generate your code')return;
  navigator.clipboard?.writeText(code).then(()=>{
    const note=document.getElementById('copy-note');note.textContent='✓ Copied to clipboard!';note.classList.add('copied-flash');
    setTimeout(()=>{note.textContent='Click to copy · Share with friends to let them track you';note.classList.remove('copied-flash');},2500);
  });
}
function addFriendFromCode(){
  const raw=document.getElementById('friend-code-input').value.trim();if(!raw)return;
  try{
    const data=JSON.parse(atob(raw));if(!data.u||!data.subjects)throw new Error();
    if(friends.find(f=>f.username===data.u)){alert('Already added!');return;}
    const color=FRIEND_COLORS[friends.length%FRIEND_COLORS.length];
    friends.push({username:data.u,color,subjects:data.subjects,updated:data.ts});
    document.getElementById('friend-code-input').value='';renderFriends();save();
  }catch(e){alert('Invalid code.');}
}
function removeFriend(username){friends=friends.filter(f=>f.username!==username);renderFriends();save();}
function renderFriends(){
  const list=document.getElementById('friends-list');
  if(friends.length===0){list.innerHTML='<div class="empty-state">No friends added yet.<br>Share your code and add theirs!</div>';return;}
  list.innerHTML=friends.map(f=>{
    const total=f.subjects.reduce((a,s)=>a+s.total,0);
    const done=f.subjects.reduce((a,s)=>a+(s.confident||s.done||0),0);
    const pct=total?Math.round(done/total*100):0;
    const initials=f.username.slice(0,2).toUpperCase();
    const chips=f.subjects.map(s=>`<span class="fc-subject-chip" style="color:${s.color};border-color:${s.color}30;background:${s.color}12">${esc(s.name)}: ${s.confident||s.done||0}/${s.total}</span>`).join('');
    const ago=f.updated?timeAgo(f.updated):'';
    return `<div class="friend-card"><div class="fc-header"><div class="fc-avatar" style="background:${f.color}">${initials}</div><span class="fc-name">${esc(f.username)}</span><span class="fc-time">${ago}</span></div>
    <div class="fc-overall"><span>${done}/${total} · <b>${pct}%</b></span><div class="fc-bar-track"><div class="fc-bar-fill" style="width:${pct}%"></div></div></div>
    <div class="fc-subjects">${chips}</div><button class="fc-del" onclick="removeFriend('${f.username}')">✕</button></div>`;
  }).join('');
}

/* ═══════════════════════════════════════════════════════════
   TOPIC PICKERS
═══════════════════════════════════════════════════════════ */
let selectedTopics={flight:null,focus:null};
function rebuildTopicPickers(){
  ['flight','focus'].forEach(id=>{
    const scroll=document.getElementById('tps-'+id);if(!scroll)return;
    scroll.innerHTML=subjects.map(s=>`<div class="tp-group">
      <span class="tp-group-name" style="color:${s.color};background:${s.color}15">${esc(s.name)}</span>
      ${s.topics.map(t=>`<div class="tp-topic-item${selectedTopics[id]?.tid===t.id?' tp-selected':''}" onclick="selectTopic('${id}','${s.id}','${t.id}','${esc2(t.name)}','${esc2(s.name)}')">
        ${esc(t.name)} ${t.status===2?'<span class="tp-done-badge">✅</span>':t.status===1?'<span class="tp-done-badge" style="color:#fbbf24">🟡</span>':''}
      </div>`).join('')}</div>`).join('');
  });
}
function toggleTopicPicker(id){
  const hdr=document.getElementById('tph-'+id);hdr.classList.toggle('tp-open');
  document.getElementById('tpp-'+id).style.maxHeight=hdr.classList.contains('tp-open')?'280px':'0';
}
function selectTopic(timerId,sid,tid,tname,sname){
  selectedTopics[timerId]={sid,tid,name:tname,sname};
  document.getElementById('tpl-'+timerId).innerHTML=`<span class="tph-selected">${tname}</span>`;
  document.getElementById('tph-'+timerId).classList.remove('tp-open');
  document.getElementById('tpp-'+timerId).style.maxHeight='0';
  rebuildTopicPickers();updateJourneyCtx();
}

/* ═══════════════════════════════════════════════════════════
   AIRPORT SEARCH & FLIGHT CALC
═══════════════════════════════════════════════════════════ */
let flightFrom=null,flightTo=null;
function airportSearch(input,ddId){
  const q=input.value.toLowerCase();const dd=document.getElementById(ddId);
  if(q.length<1){dd.classList.remove('open');return;}
  const matches=AIRPORTS.filter(a=>a.city.toLowerCase().includes(q)||a.c.toLowerCase().includes(q)||a.n.toLowerCase().includes(q)||a.country.toLowerCase().includes(q)).slice(0,8);
  if(!matches.length){dd.classList.remove('open');return;}
  dd.innerHTML=matches.map(a=>`<div class="ap-option" onmousedown="pickAirport('${ddId}','${a.c}')"><span class="ap-code">${a.c}</span><span>${esc(a.city)}</span><span class="ap-country">${esc(a.country)}</span></div>`).join('');
  dd.classList.add('open');
}
function pickAirport(ddId,code){
  const a=AIRPORTS.find(x=>x.c===code);if(!a)return;
  document.getElementById(ddId).classList.remove('open');
  if(ddId==='from-dd'){flightFrom=a;document.getElementById('from-input').value=`${a.city} (${a.c})`;}
  else{flightTo=a;document.getElementById('to-input').value=`${a.city} (${a.c})`;}
  if(flightFrom&&flightTo)calcFlightTime();
  updateJourneyCtx();
}
function hideDD(ddId,delay){setTimeout(()=>document.getElementById(ddId)?.classList.remove('open'),delay);}
function haversine(lat1,lng1,lat2,lng2){
  const R=6371,dLat=(lat2-lat1)*Math.PI/180,dLng=(lng2-lng1)*Math.PI/180;
  const a=Math.sin(dLat/2)**2+Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;
  return R*2*Math.asin(Math.sqrt(a));
}
let flightTotalSec=0;
function calcFlightTime(){
  const dist=haversine(flightFrom.lat,flightFrom.lng,flightTo.lat,flightTo.lng);
  const hours=dist/900+1.5;flightTotalSec=Math.round(hours*3600);
  const h=Math.floor(hours),m=Math.round((hours-h)*60);
  document.getElementById('flight-info').innerHTML=`<span class="fi-route">${flightFrom.city}</span><span class="fi-arrow">✈ ${Math.round(dist).toLocaleString()} km</span><span class="fi-route">${flightTo.city}</span><span>·</span><span class="fi-time">~${h}h ${m>0?m+'m':''}</span>`;
  flightRemaining=flightTotalSec;updateFlightDisplay();document.getElementById('cs-flight').textContent='ready';
}
function updateJourneyCtx(){
  const ctx=document.getElementById('journey-ctx');
  const tp=selectedTopics.flight;
  if(tp&&flightFrom&&flightTo){
    ctx.innerHTML=`Studying <strong>${tp.name}</strong> on a flight from <strong>${flightFrom.city}</strong> to <strong>${flightTo.city}</strong> ✈️`;
    ctx.style.display='block';
  }else{ctx.style.display='none';}
}

/* ═══════════════════════════════════════════════════════════
   JOURNEY / FLIGHT TIMER
═══════════════════════════════════════════════════════════ */
let flightRemaining=0,flightInterval=null,flightRunning=false;
function updateFlightDisplay(){
  document.getElementById('ct-flight').textContent=fmtTime(flightRemaining);
  const pct=flightTotalSec>0?flightRemaining/flightTotalSec:0;
  document.getElementById('cf-flight').style.strokeDashoffset=CIRC*(1-pct);
}
function flightStart(){
  if(!flightTotalSec){document.getElementById('flight-info').innerHTML='<span style="color:#f87171">Please select departure and destination first</span>';return;}
  if(flightRunning)return;flightRunning=true;
  document.getElementById('tb-start-flight').style.display='none';
  document.getElementById('tb-pause-flight').style.display='flex';
  document.getElementById('cs-flight').textContent='flying ✈';
  flightInterval=setInterval(()=>{
    flightRemaining--;updateFlightDisplay();
    // Journey milestones
    if(flightTotalSec>0){
      const prog=1-flightRemaining/flightTotalSec;
      const cs=document.getElementById('cs-flight');
      if(prog>=0.25&&prog<0.26)cs.textContent='25% — Keep going! 🌊';
      else if(prog>=0.5&&prog<0.51)cs.textContent='Halfway there! 🌍';
      else if(prog>=0.75&&prog<0.76)cs.textContent='Almost there! 🏁';
    }
    if(flightRemaining<=0){
      clearInterval(flightInterval);flightRunning=false;
      document.getElementById('cs-flight').textContent='landed! 🛬';
      document.getElementById('tb-pause-flight').style.display='none';
      document.getElementById('tb-start-flight').style.display='flex';
      logTimerSession(Math.round(flightTotalSec/60),selectedTopics.flight);
      playTimerSound();
      if(selectedTopics.flight)showCompletionModal('flight');
    }
  },1000);
}
function flightPause(){
  clearInterval(flightInterval);flightRunning=false;
  document.getElementById('tb-start-flight').style.display='flex';
  document.getElementById('tb-pause-flight').style.display='none';
  document.getElementById('cs-flight').textContent='paused';
}
function flightReset(){
  if(flightRunning||flightRemaining!==flightTotalSec){
    const elapsed=flightTotalSec-flightRemaining;
    if(elapsed>=60)logTimerSession(Math.round(elapsed/60),selectedTopics.flight);
  }
  clearInterval(flightInterval);flightRunning=false;
  flightRemaining=flightTotalSec;updateFlightDisplay();
  document.getElementById('tb-start-flight').style.display='flex';
  document.getElementById('tb-pause-flight').style.display='none';
  document.getElementById('cs-flight').textContent=flightTotalSec?'ready':'waiting';
}

/* ═══════════════════════════════════════════════════════════
   FOCUS / POMODORO TIMER
═══════════════════════════════════════════════════════════ */
let focusTotalSec=3600,focusRemaining=3600,focusInterval=null,focusRunning=false;
let pomoMode=false,pomoFocusMin=25,pomoBreakMin=5,pomoCycles=4,pomoCurrent=0,pomoPhase='focus';

function updateFocusDisplay(){
  document.getElementById('ct-focus').textContent=fmtTime(focusRemaining);
  const pct=focusTotalSec>0?focusRemaining/focusTotalSec:0;
  const fill=document.getElementById('cf-focus');
  fill.style.strokeDashoffset=CIRC*(1-pct);
  fill.classList.toggle('break-mode',pomoMode&&pomoPhase==='break');
}
function setPreset(btn,sec){
  document.querySelectorAll('.preset-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');document.getElementById('custom-min').value='';
  focusTotalSec=sec;focusRemaining=sec;updateFocusDisplay();document.getElementById('cs-focus').textContent='ready';
}
function setCustomDuration(){
  const min=parseInt(document.getElementById('custom-min').value);if(!min||min<1)return;
  document.querySelectorAll('.preset-btn').forEach(b=>b.classList.remove('active'));
  focusTotalSec=min*60;focusRemaining=min*60;updateFocusDisplay();document.getElementById('cs-focus').textContent='ready';
}
function setPomodoroMode(on){
  pomoMode=on;
  document.getElementById('pomo-simple-btn').classList.toggle('active',!on);
  document.getElementById('pomo-pomo-btn').classList.toggle('active',on);
  document.getElementById('simple-presets').style.display=on?'none':'block';
  document.getElementById('pomo-config').classList.toggle('open',on);
  document.getElementById('pomo-indicator').classList.toggle('open',on);
  if(on){updatePomoSettings();}
  else{focusTotalSec=3600;focusRemaining=3600;updateFocusDisplay();document.getElementById('cs-focus').textContent='ready';}
}
function updatePomoSettings(){
  pomoFocusMin=parseInt(document.getElementById('pomo-focus-min').value)||25;
  pomoBreakMin=parseInt(document.getElementById('pomo-break-min').value)||5;
  pomoCycles=parseInt(document.getElementById('pomo-cycles').value)||4;
  pomoCurrent=0;pomoPhase='focus';
  focusTotalSec=pomoFocusMin*60;focusRemaining=focusTotalSec;
  updateFocusDisplay();renderPomoIndicator();
  document.getElementById('cs-focus').textContent='ready';
}
function renderPomoIndicator(){
  const ind=document.getElementById('pomo-indicator');
  ind.innerHTML=Array.from({length:pomoCycles},(_,i)=>{
    let cls='pomo-dot';
    if(i<pomoCurrent)cls+=' done';
    else if(i===pomoCurrent)cls+=(pomoPhase==='focus'?' active':' is-break');
    return `<div class="${cls}"></div>`;
  }).join('');
}
function focusStart(){
  if(focusRunning||focusRemaining<=0)return;focusRunning=true;
  document.getElementById('tb-start-focus').style.display='none';
  document.getElementById('tb-pause-focus').style.display='flex';
  document.getElementById('cs-focus').textContent=pomoMode?(pomoPhase==='focus'?'focusing…':'break ☕'):'focusing…';
  focusInterval=setInterval(()=>{
    focusRemaining--;updateFocusDisplay();
    if(focusRemaining<=0){
      clearInterval(focusInterval);focusRunning=false;playTimerSound();
      if(pomoMode){
        if(pomoPhase==='focus'){
          logTimerSession(pomoFocusMin,selectedTopics.focus);
          pomoCurrent++;renderPomoIndicator();
          if(pomoCurrent>=pomoCycles){
            document.getElementById('cs-focus').textContent='all cycles done! 🎉';
            document.getElementById('tb-pause-focus').style.display='none';
            document.getElementById('tb-start-focus').style.display='flex';
            if(selectedTopics.focus)showCompletionModal('focus');
            return;
          }
          pomoPhase='break';
          const breakMin=pomoCurrent%4===0&&pomoCurrent>0?pomoBreakMin*3:pomoBreakMin;
          focusTotalSec=breakMin*60;focusRemaining=focusTotalSec;
          updateFocusDisplay();renderPomoIndicator();
          document.getElementById('cs-focus').textContent='break ☕';
          focusStart();
        }else{
          pomoPhase='focus';focusTotalSec=pomoFocusMin*60;focusRemaining=focusTotalSec;
          updateFocusDisplay();renderPomoIndicator();
          document.getElementById('cs-focus').textContent='focusing…';
          focusStart();
        }
      }else{
        document.getElementById('cs-focus').textContent='done! 🎉';
        document.getElementById('tb-pause-focus').style.display='none';
        document.getElementById('tb-start-focus').style.display='flex';
        logTimerSession(Math.round(focusTotalSec/60),selectedTopics.focus);
        if(selectedTopics.focus)showCompletionModal('focus');
      }
    }
  },1000);
}
function focusPause(){
  clearInterval(focusInterval);focusRunning=false;
  document.getElementById('tb-start-focus').style.display='flex';
  document.getElementById('tb-pause-focus').style.display='none';
  document.getElementById('cs-focus').textContent='paused';
}
function focusReset(){
  if(focusRunning||focusRemaining!==focusTotalSec){
    const elapsed=focusTotalSec-focusRemaining;
    if(elapsed>=60)logTimerSession(Math.round(elapsed/60),selectedTopics.focus);
  }
  clearInterval(focusInterval);focusRunning=false;
  if(pomoMode){pomoCurrent=0;pomoPhase='focus';focusTotalSec=pomoFocusMin*60;renderPomoIndicator();}
  focusRemaining=focusTotalSec;updateFocusDisplay();
  document.getElementById('tb-start-focus').style.display='flex';
  document.getElementById('tb-pause-focus').style.display='none';
  document.getElementById('cs-focus').textContent='ready';
}

function logTimerSession(minutes,tp){
  if(minutes<1)return;
  const today=dateStr(new Date());
  studyLog.push({date:today,minutes,subject:tp?.sname||'General',topic:tp?.name||'Untitled'});
  save();updateDailyGoals();updateStreak();
}

/* ═══════════════════════════════════════════════════════════
   COMPLETION MODAL
═══════════════════════════════════════════════════════════ */
let pendingCompletionTimer=null;
function showCompletionModal(timerId){
  const tp=selectedTopics[timerId];if(!tp)return;
  pendingCompletionTimer=timerId;
  document.getElementById('modal-tname').textContent=tp.name;
  document.getElementById('modal-sname').textContent=tp.sname;
  document.getElementById('completion-modal').classList.add('open');
}
function handleCompletion(yes){
  document.getElementById('completion-modal').classList.remove('open');
  if(yes&&pendingCompletionTimer){
    const tp=selectedTopics[pendingCompletionTimer];
    if(tp){
      const s=subjects.find(x=>x.id===tp.sid);
      const t=s?.topics.find(x=>x.id===tp.tid);
      if(t&&t.status<2){
        t.status=2;t.doneDate=Date.now();t.statusDate=Date.now();
        const el=document.getElementById('ti-'+tp.tid);
        if(el){el.className='topic-item s2';const pill=el.querySelector('.status-pill');pill.className='status-pill s2';pill.textContent='✅';}
        if(s.topics.every(x=>x.status===2))triggerConfetti();
        updateSubjProgress(tp.sid);updateGlobalProgress();rebuildTopicPickers();updateDailyGoals();save();
      }
    }
  }
  pendingCompletionTimer=null;
}

/* ═══════════════════════════════════════════════════════════
   ANALYTICS
═══════════════════════════════════════════════════════════ */
function renderAnalytics(){
  renderStatsCards();renderHeatmap();renderWeeklyChart();renderSubjectDonuts();renderBadges();
}

function renderStatsCards(){
  const totalMins=studyLog.reduce((a,e)=>a+e.minutes,0);
  const totalHours=(totalMins/60).toFixed(1);
  const streak=calcStreak();
  const confTopics=subjects.reduce((a,s)=>a+s.topics.filter(t=>t.status===2).length,0);
  const daysStudied=new Set(studyLog.map(e=>e.date)).size;
  const avgDaily=daysStudied>0?(totalMins/60/daysStudied).toFixed(1):'0';
  document.getElementById('an-stats-row').innerHTML=`
    <div class="an-stat-card"><div class="an-stat-val">${totalHours}h</div><div class="an-stat-lbl">Total Study</div></div>
    <div class="an-stat-card"><div class="an-stat-val">${avgDaily}h</div><div class="an-stat-lbl">Avg Daily</div></div>
    <div class="an-stat-card"><div class="an-stat-val">🔥 ${streak}</div><div class="an-stat-lbl">Day Streak</div></div>
    <div class="an-stat-card"><div class="an-stat-val">${confTopics}</div><div class="an-stat-lbl">Confident</div></div>`;
}

function renderHeatmap(){
  const container=document.getElementById('an-heatmap');
  const today=new Date();const weeks=12;const cs=14;const gap=3;
  const dayLabels=['Mon','','Wed','','Fri','','Sun'];
  let svg=`<svg width="${(cs+gap)*weeks+40}" height="${(cs+gap)*7+20}">`;
  dayLabels.forEach((d,i)=>{if(d)svg+=`<text x="0" y="${i*(cs+gap)+cs}" font-size="10" fill="var(--text3)" font-family="DM Sans">${d}</text>`;});
  for(let w=0;w<weeks;w++){
    for(let d=0;d<7;d++){
      const date=new Date(today);date.setDate(date.getDate()-((weeks-1-w)*7+(6-d)));
      const ds=dateStr(date);
      const mins=studyLog.filter(e=>e.date===ds).reduce((a,e)=>a+e.minutes,0);
      const color=mins===0?'var(--border)':mins<30?'#0e4429':mins<60?'#006d32':mins<120?'#26a641':'#39d353';
      svg+=`<rect x="${30+w*(cs+gap)}" y="${d*(cs+gap)}" width="${cs}" height="${cs}" rx="3" fill="${color}"><title>${ds}: ${mins}m</title></rect>`;
    }
  }
  svg+='</svg>';container.innerHTML=svg;
}

function renderWeeklyChart(){
  const container=document.getElementById('an-weekly-chart');
  const today=new Date();const days=[];
  for(let i=6;i>=0;i--){
    const d=new Date(today);d.setDate(d.getDate()-i);
    const ds=dateStr(d);
    const mins=studyLog.filter(e=>e.date===ds).reduce((a,e)=>a+e.minutes,0);
    days.push({label:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d.getDay()],hours:(mins/60).toFixed(1),mins});
  }
  const maxMins=Math.max(...days.map(d=>d.mins),60);
  const bw=40,gap=10,ch=130,w=days.length*(bw+gap);
  let svg=`<svg width="${w}" height="${ch+30}" viewBox="0 0 ${w} ${ch+30}">`;
  days.forEach((d,i)=>{
    const x=i*(bw+gap),h=Math.max(2,(d.mins/maxMins)*ch),y=ch-h;
    svg+=`<rect x="${x}" y="${y}" width="${bw}" height="${h}" rx="5" fill="url(#rg)" opacity=".8"><title>${d.label}: ${d.hours}h</title></rect>`;
    svg+=`<text x="${x+bw/2}" y="${ch+16}" text-anchor="middle" font-size="11" fill="var(--text3)" font-family="DM Sans">${d.label}</text>`;
    if(d.mins>0)svg+=`<text x="${x+bw/2}" y="${y-5}" text-anchor="middle" font-size="10" fill="var(--text2)" font-family="DM Sans">${d.hours}h</text>`;
  });
  svg+='</svg>';container.innerHTML=svg;
}

function renderSubjectDonuts(){
  const container=document.getElementById('an-subject-donuts');container.innerHTML='';
  subjects.forEach(s=>{
    const ns=s.topics.filter(t=>t.status===0).length;
    const st=s.topics.filter(t=>t.status===1).length;
    const co=s.topics.filter(t=>t.status===2).length;
    const total=s.topics.length||1;
    const r=36,circ=2*Math.PI*r;
    const coLen=circ*(co/total),stLen=circ*(st/total);
    const div=document.createElement('div');div.className='an-donut-item';
    div.innerHTML=`<svg width="88" height="88" viewBox="0 0 88 88" style="transform:rotate(-90deg)">
      <circle cx="44" cy="44" r="${r}" fill="none" stroke="var(--border)" stroke-width="8"/>
      <circle cx="44" cy="44" r="${r}" fill="none" stroke="${s.color}" stroke-width="8" stroke-dasharray="${coLen} ${circ-coLen}" stroke-dashoffset="0" stroke-linecap="round"/>
      <circle cx="44" cy="44" r="${r}" fill="none" stroke="#fbbf24" stroke-width="8" stroke-dasharray="${stLen} ${circ-stLen}" stroke-dashoffset="${-coLen}" stroke-linecap="round"/>
    </svg>
    <div class="an-donut-label">${esc(s.name)}</div>
    <div class="an-donut-stats">${co}✅ ${st}🟡 ${ns}❌</div>`;
    container.appendChild(div);
  });
}

/* ═══════════════════════════════════════════════════════════
   BADGES & GAMIFICATION
═══════════════════════════════════════════════════════════ */
const BADGE_DEFS=[
  {id:'first_step',name:'First Step',emoji:'🌱',desc:'Mark your first topic',check:()=>subjects.some(s=>s.topics.some(t=>t.status>=1))},
  {id:'ten_topics',name:'Dedicated',emoji:'📖',desc:'10 topics confident',check:()=>subjects.reduce((a,s)=>a+s.topics.filter(t=>t.status===2).length,0)>=10},
  {id:'half_subject',name:'Half Way',emoji:'🏃',desc:'50% of any subject',check:()=>subjects.some(s=>{const c=s.topics.filter(t=>t.status===2).length;return s.topics.length>0&&c/s.topics.length>=0.5;})},
  {id:'full_subject',name:'Subject Master',emoji:'🎓',desc:'Complete any subject',check:()=>subjects.some(s=>s.topics.length>0&&s.topics.every(t=>t.status===2))},
  {id:'streak_3',name:'On Fire',emoji:'🔥',desc:'3-day streak',check:()=>calcStreak()>=3},
  {id:'streak_7',name:'Week Warrior',emoji:'⚔️',desc:'7-day streak',check:()=>calcStreak()>=7},
  {id:'streak_30',name:'Monthly Legend',emoji:'👑',desc:'30-day streak',check:()=>calcStreak()>=30},
  {id:'five_hours',name:'Marathon',emoji:'🏅',desc:'5 hours in one day',check:()=>{const today=dateStr(new Date());return studyLog.filter(e=>e.date===today).reduce((a,e)=>a+e.minutes,0)>=300;}},
  {id:'all_high',name:'Priority Master',emoji:'🎯',desc:'All high-yield topics confident',check:()=>subjects.every(s=>s.topics.filter(t=>t.weightage==='high').every(t=>t.status===2))},
];

function renderBadges(){
  const container=document.getElementById('an-badges');
  container.innerHTML=BADGE_DEFS.map(b=>{
    const earned=b.check();
    return `<div class="an-badge ${earned?'earned':'locked'}">
      <span class="an-badge-emoji">${b.emoji}</span>
      <span class="an-badge-name">${b.name}</span>
      <span class="an-badge-desc">${b.desc}</span>
    </div>`;
  }).join('');
}

function calcStreak(){
  const days=new Set(studyLog.map(e=>e.date));
  // Also count days where topics were changed
  subjects.forEach(s=>s.topics.forEach(t=>{if(t.statusDate)days.add(dateStr(new Date(t.statusDate)));}));
  let streak=0;const d=new Date();d.setHours(0,0,0,0);
  const todayStr=dateStr(d);
  if(!days.has(todayStr)){d.setDate(d.getDate()-1);if(!days.has(dateStr(d)))return 0;}
  while(days.has(dateStr(d))){streak++;d.setDate(d.getDate()-1);}
  return streak;
}

function updateStreak(){
  const streak=calcStreak();
  document.getElementById('streak-count').textContent=streak;
}

/* ═══════════════════════════════════════════════════════════
   CONFETTI & SOUND
═══════════════════════════════════════════════════════════ */
function triggerConfetti(){
  const wrap=document.createElement('div');wrap.className='confetti-wrap';
  const colors=['#638bff','#34d399','#fbbf24','#f87171','#a78bfa','#f472b6'];
  for(let i=0;i<60;i++){
    const p=document.createElement('div');p.className='confetti-piece';
    p.style.left=Math.random()*100+'%';
    p.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];
    p.style.animationDelay=Math.random()*2+'s';
    p.style.animationDuration=(Math.random()*2+2)+'s';
    p.style.width=(Math.random()*8+6)+'px';
    p.style.height=(Math.random()*8+6)+'px';
    wrap.appendChild(p);
  }
  document.body.appendChild(wrap);
  setTimeout(()=>wrap.remove(),5000);
}

function playTimerSound(){
  try{
    const ctx=new(window.AudioContext||window.webkitAudioContext)();
    [880,1100,1320].forEach((freq,i)=>{
      const osc=ctx.createOscillator(),gain=ctx.createGain();
      osc.connect(gain);gain.connect(ctx.destination);
      osc.frequency.value=freq;osc.type='sine';
      gain.gain.setValueAtTime(0.15,ctx.currentTime+i*0.25);
      gain.gain.exponentialRampToValueAtTime(0.01,ctx.currentTime+i*0.25+0.6);
      osc.start(ctx.currentTime+i*0.25);osc.stop(ctx.currentTime+i*0.25+0.6);
    });
  }catch(e){}
}

/* ═══════════════════════════════════════════════════════════
   DRAG & DROP
═══════════════════════════════════════════════════════════ */
let dragData=null;
function handleDragStart(e,type,sidOrIdx,tidx){
  e.stopPropagation();
  if(type==='subject'){dragData={type,idx:sidOrIdx};}
  else{dragData={type,sid:sidOrIdx,idx:tidx};}
  e.target.classList.add('dragging');
  e.dataTransfer.effectAllowed='move';
}
function handleDragOver(e){e.preventDefault();e.dataTransfer.dropEffect='move';}
function handleDrop(e,type,sid){
  e.preventDefault();e.stopPropagation();
  if(!dragData)return;
  if(type==='subject'&&dragData.type==='subject'){
    const dropCard=e.target.closest('.subj-card');if(!dropCard)return;
    const dropIdx=parseInt(dropCard.dataset.idx);
    const fromIdx=dragData.idx;
    if(fromIdx!==dropIdx){
      const item=subjects.splice(fromIdx,1)[0];
      subjects.splice(dropIdx,0,item);renderTracker();save();
    }
  }else if(type==='topic'&&dragData.type==='topic'&&dragData.sid===sid){
    const dropItem=e.target.closest('.topic-item');if(!dropItem)return;
    const dropIdx=parseInt(dropItem.dataset.idx);
    const fromIdx=dragData.idx;
    const s=subjects.find(x=>x.id===sid);
    if(fromIdx!==dropIdx&&s){
      const item=s.topics.splice(fromIdx,1)[0];
      s.topics.splice(dropIdx,0,item);renderTracker();save();
    }
  }
  dragData=null;
}

/* ═══════════════════════════════════════════════════════════
   EXPORT / IMPORT
═══════════════════════════════════════════════════════════ */
async function exportData(){
  const files=await getAllFilesFromIDB();
  const data={
    version:4,exportDate:new Date().toISOString(),
    subjects,friends,myUsername,studyLog,dailyGoals,examDates,
    files:files,theme:document.documentElement.getAttribute('data-theme')
  };
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);
  a.download='jee_tracker_backup_'+dateStr(new Date())+'.json';
  document.body.appendChild(a);a.click();document.body.removeChild(a);
  URL.revokeObjectURL(a.href);
}

async function importData(event){
  const file=event.target.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=async e=>{
    try{
      const data=JSON.parse(e.target.result);
      if(!data.subjects){alert('Invalid backup file.');return;}
      if(!confirm('This will replace all your current data. Continue?'))return;
      subjects=data.subjects||subjects;
      friends=data.friends||[];
      myUsername=data.myUsername||'';
      studyLog=data.studyLog||[];
      dailyGoals=data.dailyGoals||{topicGoal:3,hourGoal:4,lastReset:''};
      examDates=data.examDates||examDates;
      if(data.files&&data.files.length){
        for(const f of data.files)await saveFileToIDB(f);
      }
      if(data.theme){
        document.documentElement.setAttribute('data-theme',data.theme);
        localStorage.setItem('jee_theme',data.theme);
        document.getElementById('theme-sw').checked=data.theme==='light';
        document.getElementById('th-knob').textContent=data.theme==='dark'?'🌙':'☀️';
      }
      migrateData();save();
      document.getElementById('my-username').value=myUsername;
      renderTracker();renderFriends();renderCountdowns();updateDailyGoals();updateStreak();updateFocusDisplay();
      if(myUsername)generateMyCode();
      alert('Data restored successfully!');
    }catch(err){alert('Error reading backup file: '+err.message);}
  };
  reader.readAsText(file);
  event.target.value='';
}

/* ═══════════════════════════════════════════════════════════
   TABS & THEME
═══════════════════════════════════════════════════════════ */
function switchTab(id,btn){
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');btn.classList.add('active');
  if(id==='friends')renderFriends();
  if(id==='timers')rebuildTopicPickers();
  if(id==='analytics')renderAnalytics();
}
function toggleTheme(cb){
  const dark=!cb.checked;
  document.documentElement.setAttribute('data-theme',dark?'dark':'light');
  document.getElementById('th-knob').textContent=dark?'🌙':'☀️';
  try{localStorage.setItem('jee_theme',dark?'dark':'light');}catch(e){}
}

/* ═══════════════════════════════════════════════════════════
   KEYBOARD
═══════════════════════════════════════════════════════════ */
document.addEventListener('keydown',e=>{
  subjects.forEach(s=>{
    const f=document.getElementById('af-'+s.id);if(!f||!f.classList.contains('open'))return;
    if(e.key==='Enter'){e.preventDefault();addTopic(s.id);}
    if(e.key==='Escape')closeAddForm(s.id);
  });
  const sf=document.getElementById('subj-form');
  if(sf.classList.contains('open')&&e.key==='Escape')cancelSubjForm();
  if(e.key==='Enter'&&document.activeElement===document.getElementById('new-sname')){e.preventDefault();addSubject();}
  if(e.key==='Enter'&&document.activeElement===document.getElementById('my-username')){e.preventDefault();saveMyProfile();}
  if(e.key==='Escape'&&document.getElementById('completion-modal').classList.contains('open'))handleCompletion(false);
});

/* ═══════════════════════════════════════════════════════════
   PWA
═══════════════════════════════════════════════════════════ */
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js').catch(()=>{});
}

/* ═══════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════ */
load();
renderTracker();
renderFriends();
renderCountdowns();
updateFocusDisplay();
updateDailyGoals();
updateStreak();
if(myUsername)generateMyCode();
document.getElementById('ge-topics').value=dailyGoals.topicGoal;
document.getElementById('ge-hours').value=dailyGoals.hourGoal;
