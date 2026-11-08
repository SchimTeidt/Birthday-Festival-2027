'use strict';
const locations = [
 {id:'buron',name:'Buronhütte',place:'Wertach',type:'Hütte',source:'https://buronhuette.com/',verified:true,photo:'https://buronhuette.com/wp-content/uploads/elementor/thumbs/IMG_1376-1-qhuv2vyayury9lj9x16kya48ic05dzs31qwll651zs.jpeg',alt:'Gedeckte Stube der Buronhütte',credit:'Buronhütte',description:'Laut Anbieter: Alleinlage am Berg, exklusive Miete möglich, etwa 100 Sitzplätze und 30 Übernachtungsplätze. Eine spannende erste Anfrage für unser Wochenende.',open:'Camping · eigene Getränke · Nachtmusik · Technikzufahrt'},
 {id:'gaukler',name:'Gauklerhof',place:'Waltenhofen',type:'Eventlocation',source:'https://gauklerhof-allgaeu.de/',verified:true,photo:'https://cdn.eventinc.de/provider_pictures/pictures/000/180/883/cropped/eventlocation-gauklerhof-allgaeu-kempten.jpg',photoSource:'https://www.eventinc.de/eventlocation/kempten/gauklerhof-allgaeu',alt:'Beleuchteter Innenhof des Gauklerhofs',credit:'Gauklerhof / Event Inc',description:'Laut Anbieter: exklusive Nutzung, Festscheune, Garten und Innenhof für rund 100 Personen. Küche und Service werden vor Ort angeboten.',open:'Camping · Getränkebindung · Selbstversorgung · Nachtbetrieb'},
 {id:'eschach',name:'Eventlocation Eschach',place:'Buchenberg / Eschach',type:'Eventlocation',source:'https://eventlocation-eschach.com/',verified:true,photo:'https://eventlocation-eschach.com/seitenbilder/bild_960_300_1100_4_0.jpg',alt:'Ansicht der Eventlocation Eschach von ihrer Anbieterseite',credit:'Eventlocation Eschach',description:'Laut Anbieter: bis zu 125 Personen, verschiedene Eventbereiche und DJ- oder Live-Musik im Barbereich. Auch reine Raummiete wird beschrieben.',open:'Zeltfläche · Musikzeiten · eigene Anlage · Zugang Mi–Mo'},
 {id:'legau',name:'Umweltstation Unterallgäu',place:'Legau',type:'Gelände',source:'https://www.bzu.de/umweltstation-unterallgaeu/gruppen-selbstversorger/',verified:false,description:'Kandidat aus der bisherigen Ideensammlung. Gruppen- und Zeltbetrieb sowie die Eignung für unser privates Musikwochenende sind noch zu prüfen.',open:'Nachtmusik · Exklusivität · Camping · Nutzungsregeln'},
 {id:'pfanzelt',name:'Landhaus Pfanzelt',place:'Weitnau',type:'Gruppenhaus',source:'https://www.gruppenhaus.de/landhaus-pfanzelt-im-allgaeu-weitnau-hs3751.html',verified:true,sourceLabel:'Portalangaben geprüft',photo:'https://www.gruppenhaus.de/mx_3751_a_87480_Weitnau_Landhaus%2BPfanzelt%2Bim%2BAllg%C3%A4u_Herdebuchweg%2B19.webp?q=00000000000000',alt:'Südseite des Landhauses Pfanzelt mit Garten',credit:'Landhaus Pfanzelt / gruppenhaus.de',description:'Laut Gruppenhaus-Portal: 44 Betten, Selbstverpflegung, Alleinbelegung und Garten. Gruppenräume sind für bis zu 45 Personen angegeben, nicht für 100 gemeinsam.',open:'Gesamtkapazität für 100 · zusätzliche Zelte · Nachtmusik'},
 {id:'beach',name:'Beach34',place:'Wiggensbach',type:'Eventlocation',source:'https://beach34.de/eventlocation/',verified:true,photo:'https://beach34.de/wp-content/uploads/2024/06/event_schorer_110524-2-scaled.jpg',alt:'Veranstaltungsbereich des Beach34',credit:'Beach34',description:'Laut Anbieter: 300 m² innen, 400 m² außen und bis zu 120 Sitzplätze innen. Lage im Gewerbegebiet, also keine abgeschiedene Berghütte.',open:'Camping · exklusives Wochenende · eigene Getränke · Musikzeiten'},
 {id:'eventcenter',name:'Allgäu Event Center',place:'Kaufbeuren',type:'Eventlocation',source:'https://www.all-kart.de/allgaeueventcenter',verified:true,photo:'https://www.all-kart.de/assets/media/p240/_pd_img_162edb732ff77b4b549c8bb74ca9915f278144153.jpg',alt:'Allgäu Event Center, Ansicht von der Anbieterseite',credit:'All-Kart / Allgäu Event Center',description:'Laut Anbieter: Mehrzweckhalle für Partys und Konzerte, zusätzliche Veranstaltungsräume und Parkflächen. Eine Indoor-Option, nicht automatisch ein Festivalcamp.',open:'Passender Raum · Camping · Mehrtagesmiete · eigene Technik'},
 {id:'outdoor',name:'Outdoor Zentrum Allgäu',place:'Blaichach',type:'Gruppenhaus',source:'https://www.raftingzentrum.de/hostel/hostel-exklusiv.html',verified:true,description:'Laut Anbieter ist das ganze Hostel für Gruppen und private Feiern mietbar. Im Sommer wird die Exklusivmiete mit einer Aktivität verknüpft.',open:'100 Gäste · eigene Verpflegung · Zelte · DJ-Nachtbetrieb'},
 {id:'rusch',name:'Berghaus Rusch',place:'Gunzesrieder Tal',type:'Gruppenhaus',source:'https://www.berghaus-rusch.de/',verified:true,photo:'https://static.wixstatic.com/media/adb63c_7e5e7357017e45c4a243dbb8f5e9a06a~mv2.jpg/v1/fill/w_654%2Ch_368%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/adb63c_7e5e7357017e45c4a243dbb8f5e9a06a~mv2.jpg',alt:'Berghaus Rusch, Aufnahme der Anbieterseite',credit:'Berghaus Rusch',description:'Laut Anbieter ein Gruppenhaus für Selbstversorger, unter anderem für Geburtstage und Familienfeiern. Die Eignung für 100 Gäste und große DJ-Nächte bleibt offen.',open:'Kapazität · Camping · Zufahrt · zulässige Musikzeiten'},
 {id:'kaminwerk',name:'Kaminwerk',place:'Memmingen',type:'Eventlocation',source:'https://www.kaminwerk.de/informationen/mieten/',verified:true,description:'Laut Anbieter ist die große Halle mietbar. Neben- und Vortragsraum werden ausdrücklich nicht privat vermietet. Für uns daher nur eine größere Indoor-Alternative.',open:'Große Halle für 100 sinnvoll? · Camping · Wochenendkonditionen'},
 {id:'wieshof',name:'Wieshof Unterhub',place:'Bad Wurzach',type:'Gruppenhaus',source:'https://www.gruppenfreizeiten.de/wieshof-unterhub-bad-wurzach',verified:false,description:'Reserve aus der bisherigen Ideensammlung. Anbieterangaben, Fahrtzeit und das passende Gesamtpaket für unsere Gäste sind noch nicht überprüft.',open:'Aktueller Anbieter · 100 Gäste · Nachtmusik · Selbstversorgung'},
 {id:'funken',name:'Funkenbauers Alm',place:'Unterthingau',type:'Hütte',source:'',verified:false,description:'Bisher nur eine Rechercheidee. Anbieter, genaue Lage und Kapazität sind noch nicht belastbar zugeordnet. Deshalb kein fremdes Ersatzfoto.',open:'Anbieter & Lage · Kapazität · Camping · Musikbetrieb'},
 {id:'jawoll',name:'Jawoll Eventlocation',place:'Pfronten',type:'Eventlocation',source:'https://www.unserehochzeitslocation.de/hochzeitslocation/jawoll-eventlocation/',verified:false,description:'Option aus der ersten Ideensammlung. Betrieb, Konditionen und Eignung für unser gesamtes Wochenende müssen aktuell bestätigt werden.',open:'Betrieb & Verfügbarkeit · Nachtmusik · Camping · Getränke'},
 {id:'rettenberg',name:'Gästehäuser Rettenberg',place:'Rettenberg',type:'Gruppenhaus',source:'https://www.ferienwerk-koeln.de/unterkunft/gruppenhaus-rettenberg/',verified:false,description:'Gruppenhaus-Idee für Übernachtungen. Das konkrete Haus und die Eignung als gemeinsamer Feierort für etwa 100 Personen sind noch zu bestimmen.',open:'Konkretes Haus · Exklusivität · 100 Gäste · Nachtmusik'}
];
const tasks = ['November 2026: Save-the-Date verschicken','Bis Dezember 2026: Top-Locations anfragen und besichtigen','Vor Buchung: Nachtbeschallung schriftlich klären','Vor Buchung: Getränke-Regelung und Selbstversorgung klären','Vor Buchung: Zugang 11.–16. August bestätigen','Januar 2027: Location verbindlich buchen','Februar/März 2027: Einladungs-Website mit Anmeldung veröffentlichen','Frühjahr 2027: Function-One-Verleiher und Technikangebote vergleichen','Mai 2027: Gästezahl, Camping und Essen verbindlich erfassen','Juni/Juli 2027: Strom, Sanitär, Sicherheit, Wetterplan und Versicherung klären','August 2027: Küche, Getränke, Kühlung und Helferschichten finalisieren','11./12. August: Aufbau','13.–15. August: Festival','16. August: Abbau und Reinigung'];
const fields = [['guests','Zahlende Gäste',100],['fee','Beitrag je Gast (€)',50],['hosts','Gastgeberbeiträge gesamt (€)',3000],['venue','Location inkl. Auf- / Abbautage (€)',2500],['tech','Technik inkl. Transport (€)',2500],['food','Essen (€)',1600],['drinks','Getränke (€)',1300],['other','Sanitär, Strom, Sonstiges (€)',1100]];
const $ = id => document.getElementById(id);
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const euros = value => new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(value);
const storageKey = 'birthday-festival-2027:planner:v1';
let favorites = new Set();
let favoritesOnly = false;
let storageOK = true;
$('budgetFields').innerHTML = fields.map(([id,label,value])=>`<label>${label}<input id="${id}" type="number" inputmode="decimal" min="0" max="${id==='guests'?500:1000000}" value="${value}"></label>`).join('');
$('checks').innerHTML = tasks.map((text,index)=>`<label class="check"><input type="checkbox" data-task="${index}"><span>${escapeHTML(text.replace('Function-One','Funktion-One'))}</span></label>`).join('');
const taskInputs = [...document.querySelectorAll('#checks input')];
try {
 const saved = JSON.parse(localStorage.getItem(storageKey)||'null');
 if (saved?.version===1) {
  fields.forEach(([id])=>{const value=saved.budget?.[id];if(typeof value==='number'&&Number.isFinite(value)&&value>=0)$(id).value=Math.min(id==='guests'?500:1000000,value);});
  taskInputs.forEach((input,i)=>input.checked=saved.checks?.[i]===true);
 }
 const savedFavorites=JSON.parse(localStorage.getItem('birthday-festival-2027:favorites:v3')||'[]');
 if(Array.isArray(savedFavorites))favorites=new Set(savedFavorites.filter(id=>locations.some(x=>x.id===id)));
 localStorage.setItem(storageKey+':test','1');localStorage.removeItem(storageKey+':test');
} catch(e) {storageOK=false;}
function storageMessage(){
 $('storageStatus').textContent=storageOK?'Budget, Aufgaben und Merkliste werden nur in diesem Browser gespeichert. Keine Synchronisierung.':'Lokaler Speicher nicht verfügbar: Änderungen gelten nur für diese Sitzung.';
}
function save(){
 try {
  const state={version:1,budget:{},checks:taskInputs.map(el=>el.checked)};
  fields.forEach(([id])=>state.budget[id]=value(id));
  localStorage.setItem(storageKey,JSON.stringify(state));
  localStorage.setItem('birthday-festival-2027:favorites:v3',JSON.stringify([...favorites]));
  storageOK=true;
 } catch(e){storageOK=false;}
 storageMessage();
}
function value(id){return Math.max(0,Math.min(id==='guests'?500:1000000,Number($(id).value)||0));}
function budget(){
 const income=value('guests')*value('fee')+value('hosts');
 const expenses=['venue','tech','food','drinks','other'].reduce((sum,id)=>sum+value(id),0);
 const reserve=expenses*.15;
 const balance=income-expenses-reserve;
 $('income').textContent=euros(income);$('expenses').textContent=euros(expenses);$('reserve').textContent=euros(reserve);
 $('balance').textContent=euros(balance);$('balance').classList.toggle('negative',balance<0);
 const remaining=Math.max(0,expenses*1.15-value('hosts'));
 $('breakEven').textContent=value('fee')>0?`Für diese Kosten inklusive Reserve braucht ihr mindestens ${Math.ceil(remaining/value('fee'))} zahlende Gäste bei ${euros(value('fee'))} Beitrag.`:remaining>0?'Ohne Gästebeitrag muss die Finanzierungslücke anders gedeckt werden.':'Die Gastgeberbeiträge decken diese Kosten inklusive Reserve.';
 $('scenarios').innerHTML=[60,80,100].map(n=>{const b=n*value('fee')+value('hosts')-expenses*1.15;return `<div class="scenario">${n} zahlende Gäste<strong class="${b<0?'negative':''}">${euros(b)}</strong><small>Saldo inklusive 15 % Reserve</small></div>`;}).join('');
}
function progress(){const done=taskInputs.filter(el=>el.checked).length;$('progress').value=done;$('progressText').textContent=`${done} von ${tasks.length} Aufgaben erledigt`;}
fields.forEach(([id])=>$(id).addEventListener('input',()=>{budget();save();}));
taskInputs.forEach(input=>input.addEventListener('change',()=>{progress();save();}));
function render(){
 const q=$('search').value.trim().toLocaleLowerCase('de');const type=$('type').value;
 let items=locations.map((x,i)=>({...x,rank:i+1})).filter(x=>(!type||x.type===type)&&(!favoritesOnly||favorites.has(x.id))&&[x.name,x.place,x.type,x.description,x.open].join(' ').toLocaleLowerCase('de').includes(q));
 if($('sort').value==='name')items.sort((a,b)=>a.name.localeCompare(b.name,'de'));
 $('count').textContent=locations.length;$('resultCount').textContent=`${items.length} von ${locations.length} Kandidaten${favoritesOnly?' · Deine lokale Merkliste':''}`;
 $('favorites').textContent=`${favoritesOnly?'★':'☆'} Merkliste (${favorites.size})`;$('favorites').setAttribute('aria-pressed',String(favoritesOnly));
 $('cards').innerHTML=items.length?items.map(x=>`<article class="card"><div class="photo">${x.photo?`<button class="photo-open" data-photo="${x.id}" aria-label="Foto von ${escapeHTML(x.name)} vergrößern"><img src="${escapeHTML(x.photo)}" alt="${escapeHTML(x.alt)}" loading="lazy" decoding="async" referrerpolicy="no-referrer" width="750" height="485"></button><a class="credit" href="${escapeHTML(x.photoSource||x.source)}" target="_blank" rel="noopener noreferrer">Bildquelle: ${escapeHTML(x.credit)} ↗</a>`:`<div class="no-photo"><span>↗</span>Foto noch offen<br>Kein fremdes Ersatzbild</div>`}<span class="sequence">${String(x.rank).padStart(2,'0')} / ${escapeHTML(x.type)}</span><button class="star" data-favorite="${x.id}" aria-pressed="${favorites.has(x.id)}" aria-label="${escapeHTML(x.name)} ${favorites.has(x.id)?'aus Merkliste entfernen':'merken'}">${favorites.has(x.id)?'★':'☆'}</button></div><div class="body"><div class="place">${escapeHTML(x.place)}</div><h3>${escapeHTML(x.name)}</h3><span class="verified ${x.verified?'':'unverified'}">${x.verified?(x.sourceLabel||'Website geprüft · 09.11.2026'):'Rechercheidee · noch ungeprüft'}</span><p class="desc">${escapeHTML(x.description)}</p><div class="open-items"><strong>FÜR UNS NOCH ZU KLÄREN</strong>${escapeHTML(x.open)}</div><div class="card-status"><span>Termin: unbestätigt</span><span>Angebot: offen</span></div><div class="card-actions">${x.source?`<a href="${escapeHTML(x.source)}" target="_blank" rel="noopener noreferrer">${x.verified?'Quelle / Website':'Bisheriger Link'} ↗</a>`:''}<button data-inquiry="${x.id}">Anfrage vorbereiten</button></div></div></article>`).join(''):'<div class="surface"><b>Hier ist noch nichts dabei.</b><p class="small">Filter zurücksetzen oder mit dem Stern Locations merken.</p></div>';
 document.querySelectorAll('.photo img').forEach(img=>img.addEventListener('error',()=>{const btn=img.closest('button');btn.disabled=true;btn.innerHTML='<div class="no-photo"><span>↗</span>Foto derzeit nicht ladbar<br>Original über die Bildquelle öffnen</div>';},{once:true}));
}
['search','type','sort'].forEach(id=>$(id).addEventListener('input',render));
$('favorites').addEventListener('click',()=>{favoritesOnly=!favoritesOnly;render();});
$('cards').addEventListener('click',e=>{
 const favorite=e.target.closest('[data-favorite]');const inquiry=e.target.closest('[data-inquiry]');const photo=e.target.closest('[data-photo]');
 if(favorite){const id=favorite.dataset.favorite;if(favorites.has(id))favorites.delete(id);else favorites.add(id);save();render();}
 if(inquiry){const x=locations.find(x=>x.id===inquiry.dataset.inquiry);setBrief(x.name);go('brief',true);}
 if(photo&&!photo.disabled){const x=locations.find(x=>x.id===photo.dataset.photo);$('largePhoto').src=x.photo;$('largePhoto').alt=x.alt;$('photoCaption').innerHTML=`<b>${escapeHTML(x.name)}</b><br><a href="${escapeHTML(x.photoSource||x.source)}" target="_blank" rel="noopener noreferrer">Bildquelle: ${escapeHTML(x.credit)} ↗</a>`;$('photoDialog').showModal();}
});
$('closePhoto').addEventListener('click',()=>$('photoDialog').close());
$('photoDialog').addEventListener('click',e=>{if(e.target===$('photoDialog'))$('photoDialog').close();});
$('largePhoto').addEventListener('error',()=>{$('photoCaption').insertAdjacentHTML('beforeend','<p>Das Originalfoto ist gerade nicht erreichbar. Bitte den Quellenlink verwenden.</p>');});
const validViews=['locations','budget','program','plan','brief'];
function go(id,scroll=false,updateHash=true){
 if(!validViews.includes(id))id='locations';
 document.querySelectorAll('.view').forEach(el=>el.hidden=el.id!==id);
 document.querySelectorAll('.tabs a').forEach(a=>{const active=a.hash==='#'+id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 if(updateHash&&location.hash!=='#'+id)history.replaceState(null,'','#'+id);
 if(scroll){const top=document.querySelector('.nav-shell').getBoundingClientRect().top+window.scrollY;window.scrollTo({top:Math.max(0,top),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}
}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.hash.slice(1);if(validViews.includes(id)){e.preventDefault();go(id,true);}}));
window.addEventListener('hashchange',()=>go(location.hash.slice(1),true));
function setBrief(name=''){
 $('briefTarget').textContent=name?`Anfrage an ${name}`:'Allgemeine Location-Anfrage';
 $('copyStatus').textContent='';
 $('briefText').value=`Betreff: Private Geburtstagsfeier, voraussichtlich 13.–15.08.2027, ca. 100 Gäste\n\nGuten Tag${name?' an das Team von '+name:''},\n\nwir planen eine gemeinsame Geburtstagsfeier mit ungefähr 100 persönlich eingeladenen Gästen. Es gibt keinen öffentlichen Ticketverkauf. Unser Wunschtermin ist der 13. bis 15. August 2027. Für Aufbau und Abbau suchen wir möglichst Zugang vom 11. bis 16. August.\n\nTagsüber möchten wir ein entspanntes Programm mit Familie, Kindern, Live-Musik und Workshops anbieten. Abends sind fünf bis sechs DJs und eine angemietete Funktion-One-Anlage geplant, möglichst bis in die frühen Morgenstunden. Eine wetterfeste Innenfläche und Campingmöglichkeiten wären ideal.\n\nIst Ihre Location für dieses Vorhaben grundsätzlich geeignet und im genannten Zeitraum verfügbar? Bitte teilen Sie uns insbesondere mit:\n\n• Exklusive Nutzung sowie zulässige Gesamtgästezahl\n• Erlaubte Musikzeiten, Lautstärke und Bedingungen für eigene Technik\n• Zeltflächen, Betten, Sanitäranlagen und Parkmöglichkeiten\n• Wetterfeste Innenfläche, Stromversorgung und Technikzufahrt\n• Eigene Getränke oder verpflichtender Getränkebezug\n• Selbstversorgung, Küche, Kühlung und Fremdcatering\n• Zugang für Aufbau ab Mittwoch/Donnerstag und Abbau bis Montag\n• Gesamtmiete inklusive Nebenkosten, Reinigung, Kaution und Stornobedingungen\n\nWir freuen uns über eine Rückmeldung und gegebenenfalls einen Besichtigungstermin.\n\nVielen Dank und freundliche Grüße`;
}
$('copyBrief').addEventListener('click',async()=>{
 try{if(!navigator.clipboard)throw new Error('Clipboard unavailable');await navigator.clipboard.writeText($('briefText').value);$('copyStatus').textContent='Kopiert. Du kannst den Text jetzt in deine Mail einfügen.';}
 catch(e){$('briefText').focus();$('briefText').select();$('briefText').setSelectionRange(0,$('briefText').value.length);$('copyStatus').textContent='Automatisches Kopieren ist hier nicht verfügbar. Der Text ist markiert; nutze „Kopieren“ im Gerätemenü.';}
});
render();budget();progress();storageMessage();setBrief();go(location.hash.slice(1),false,false);
const heroImage=document.querySelector('.postcard img');
function heroFallback(){if(!heroImage.isConnected)return;const fallback=document.createElement('div');fallback.className='no-photo';fallback.innerHTML='<span>✳</span>Gauklerhof<br>Foto derzeit nicht erreichbar';heroImage.replaceWith(fallback);}
heroImage.addEventListener('error',heroFallback,{once:true});
if(heroImage.complete&&heroImage.naturalWidth===0)heroFallback();
