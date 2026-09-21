const outlineEl=document.querySelector('#outline');
const searchEl=document.querySelector('#search');
const countEl=document.querySelector('#visible-count');
const noResults=document.querySelector('#no-results');
let activeFilter='all';
let allExpanded=false;

const esc=(s='')=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
function render(){
  const query=searchEl.value.trim().toLowerCase();
  const filtered=COURSE_DATA.filter(part=>{
    const levelMatch=activeFilter==='all'||part.level===activeFilter||(activeFilter==='Mastery'&&/CHECKPOINT/.test(part.title));
    const text=[part.title,part.subtitle,...part.chapters.flatMap(c=>[c.title,...(c.topics||[])])].join(' ').toLowerCase();
    return levelMatch&&(!query||text.includes(query));
  });
  outlineEl.innerHTML=filtered.map((part,index)=>{
    const matchingChapters=query?part.chapters.filter(c=>[c.title,...(c.topics||[])].join(' ').toLowerCase().includes(query)):part.chapters;
    const chapters=(matchingChapters.length?matchingChapters:part.chapters).map(c=>`<article class="chapter"><div><h3>${esc(c.title)}</h3>${c.topics?.length?`<ul>${c.topics.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>`:''}</div><span class="chapter-no">${c.number?`CH ${String(c.number).padStart(3,'0')}`:'COURSE ELEMENT'}</span></article>`).join('');
    return `<section class="part ${query||allExpanded?'open':''}" data-index="${index}"><button class="part-head" type="button" aria-expanded="${query||allExpanded}"><span class="part-no">${esc(part.label)}</span><span class="part-title"><b>${esc(part.title)}</b><small>${esc(part.subtitle||'')} · ${part.chapters.length} ${part.chapters.length===1?'item':'items'}</small></span><span class="toggle" aria-hidden="true">＋</span></button><div class="part-body">${chapters}</div></section>`;
  }).join('');
  countEl.textContent=filtered.length;
  noResults.hidden=filtered.length!==0;
  outlineEl.querySelectorAll('.part-head').forEach(btn=>btn.addEventListener('click',()=>{
    const part=btn.closest('.part'); part.classList.toggle('open'); btn.setAttribute('aria-expanded',part.classList.contains('open'));
  }));
}

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelector('.filter.active')?.classList.remove('active');btn.classList.add('active');activeFilter=btn.dataset.filter;render();
}));
searchEl.addEventListener('input',render);
document.querySelector('#expand-all').addEventListener('click',e=>{allExpanded=!allExpanded;e.currentTarget.innerHTML=`${allExpanded?'Collapse':'Expand'} all <span>${allExpanded?'−':'＋'}</span>`;render()});
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();searchEl.focus()}});
const lessonSteps=['Learning Goals','English Connection','Key Vocabulary','Grammar Made Clear','Pattern Box','See It in Action','Break It Down','Pronunciation Focus','English vs German','Common Mistake Alert','Memory Trick','Guided Practice','Translation Practice','Real-Life Dialogue','Speak It','Write It','Real-Life Mission','Mini Quiz','Key Takeaways','Confidence Check'];
document.querySelector('#lesson-steps').innerHTML=lessonSteps.map((s,i)=>`<div class="lesson-step"><span>${String(i+1).padStart(2,'0')}</span>${s}</div>`).join('');
document.querySelector('#year').textContent=new Date().getFullYear();
const backTop=document.querySelector('.back-top');
addEventListener('scroll',()=>backTop.classList.toggle('visible',scrollY>800),{passive:true});
backTop.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
render();
