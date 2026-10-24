const games=[
{n:"Counter-Strike 2",g:"Shooter",d:"Tactical 5v5 shooter with a huge competitive scene.",c:["#ff9a3d","#8a3b00"]},
{n:"Valorant",g:"Shooter",d:"Team shooter with agent abilities and precise gunplay.",c:["#ff4f6a","#5a0f22"]},
{n:"Baldur's Gate 3",g:"RPG",d:"Deep party-based fantasy RPG with tons of choices.",c:["#b48cff","#2e1a66"]},
{n:"Cyberpunk 2077",g:"RPG",d:"Open-world story in a neon city. Great for showing off graphics.",c:["#f7e733","#4a4300"]},
{n:"Elden Ring",g:"Action",d:"Huge open world with tough, rewarding combat.",c:["#e0b25c","#4a3210"]},
{n:"Hades II",g:"Action",d:"Fast roguelike action with a strong story.",c:["#ff6b3d","#4a0f1f"]},
{n:"Civilization VII",g:"Strategy",d:"Build an empire across thousands of years.",c:["#4fd1a1","#0b3b33"]},
{n:"Stardew Valley",g:"Chill",d:"Farm, fish and make friends at your own pace.",c:["#7fe36b","#1f4a1a"]},
{n:"Factorio",g:"Strategy",d:"Automate factories until the whole map hums.",c:["#ffb347","#4a2a00"]},
{n:"Microsoft Flight Simulator",g:"Sim",d:"Fly real-world airports and weather. Demands a strong PC.",c:["#4fc3ff","#0b2f55"]}
];
const tiers=[
{t:"Entry",c:"#3de0ff",goal:"1080p, esports and indie games",cpu:"6-core",gpu:"Entry card, 8 GB",ram:"16 GB",ssd:"500 GB"},
{t:"Mid",c:"#ff4f9a",goal:"1440p, most new games on high settings",cpu:"8-core",gpu:"Mid card, 12 GB",ram:"32 GB",ssd:"1 TB"},
{t:"High",c:"#f7e733",goal:"4K, ray tracing and streaming",cpu:"12+ core",gpu:"Top card, 16 GB+",ram:"32 GB+",ssd:"2 TB"}
];
const grid=document.getElementById("grid"),q=document.getElementById("q"),chips=document.getElementById("chips"),empty=document.getElementById("empty");
let genre="All";
const genres=["All",...new Set(games.map(x=>x.g))];
genres.forEach(g=>{const b=document.createElement("button");b.className="chip";b.textContent=g;b.setAttribute("aria-pressed",g==="All");b.onclick=()=>{genre=g;[...chips.children].forEach(c=>c.setAttribute("aria-pressed",c===b));render()};chips.appendChild(b)});
function render(){
  const s=q.value.trim().toLowerCase();
  const list=games.filter(x=>(genre==="All"||x.g===genre)&&(x.n+x.d).toLowerCase().includes(s));
  grid.innerHTML=list.map(x=>`<article class="game"><div class="art" style="background:linear-gradient(135deg,${x.c[0]},${x.c[1]})">${x.n.split(" ")[0]}</div><div class="info"><h3>${x.n}</h3><div class="genre">${x.g}</div><p>${x.d}</p></div></article>`).join("");
  empty.hidden=list.length>0;
}
q.addEventListener("input",render);render();
document.getElementById("tiers").innerHTML=tiers.map(t=>`<article class="tier" style="--c:${t.c}"><h3>${t.t}</h3><p class="goal">${t.goal}</p><dl><dt>CPU</dt><dd>${t.cpu}</dd><dt>Graphics</dt><dd>${t.gpu}</dd><dt>Memory</dt><dd>${t.ram}</dd><dt>Storage</dt><dd>${t.ssd}</dd></dl></article>`).join("");
document.getElementById("form").addEventListener("submit",e=>{e.preventDefault();document.getElementById("msg").textContent="Thanks! This demo form doesn't send email yet. Connect it to a form service to collect sign-ups.";e.target.reset()});
const f=document.getElementById("fps");
if(!matchMedia("(prefers-reduced-motion: reduce)").matches){const v=[144,165,240,120,144];let i=0;setInterval(()=>{i=(i+1)%v.length;f.textContent=v[i]},2500)}
