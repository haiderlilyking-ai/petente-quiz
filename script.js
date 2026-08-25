const topics = [
  {
    title:{it:"Presenza di veicoli industriali e/o autobus",en:"Industrial Vehicles and/or Buses",ur:"صنعتی گاڑیوں اور/یا بسوں کی موجودگی"},
    desc:{it:"Pericoli legati a veicoli di grandi dimensioni e massa.",en:"Risks related to large vehicles and heavy masses.",ur:"بڑی جسامت اور زیادہ وزن والی گاڑیوں سے متعلق خطرات۔"},
    questions:[
      {code:"27028 V01",it:"Alla guida di un'autovettura è opportuno valutare costantemente la potenziale pericolosità dei veicoli industriali e degli autobus, a causa della loro massa notevolmente maggiore.",en:"When driving a car, it is advisable to constantly assess the potential danger of industrial vehicles and buses because of their considerably greater mass.",ur:"کار چلاتے وقت صنعتی گاڑیوں اور بسوں کے ممکنہ خطرے کا مسلسل اندازہ لگانا مناسب ہے، کیونکہ ان کا وزن بہت زیادہ ہوتا ہے۔",a:true},
      {code:"27028 V02",it:"Il conducente di motociclo o di autovettura deve saper valutare nella guida gli altri rischi derivanti da autocarri, autotreni o autoarticolati che non rispettano i limiti di velocità.",en:"A motorcycle or car driver must be able to assess the additional risks caused by trucks, road trains or articulated vehicles that do not respect speed limits.",ur:"موٹر سائیکل یا کار کے ڈرائیور کو ان ٹرکوں، ٹریلرز یا آرٹیکیولیٹڈ گاڑیوں سے پیدا ہونے والے اضافی خطرات کا اندازہ لگانا چاہیے جو رفتار کی حدود کی پابندی نہیں کرتیں۔",a:true},
      {code:"27026 V01",it:"Risulta maggiormente pericolosa la collisione tra veicoli dotati di masse molto diverse tra loro.",en:"A collision between vehicles with very different masses is more dangerous.",ur:"بہت مختلف وزن رکھنے والی گاڑیوں کے درمیان تصادم زیادہ خطرناک ہوتا ہے۔",a:true},
      {code:"27026 V02",it:"Guidando una piccola autovettura è necessario valutare i maggiori rischi derivanti da possibili tamponamenti o collisioni con autovettura di massa superiore.",en:"When driving a small car, it is necessary to assess the greater risks arising from possible rear-end collisions or collisions with a heavier car.",ur:"چھوٹی کار چلاتے وقت زیادہ وزن والی کار سے ممکنہ ٹکر یا تصادم کے زیادہ خطرات کا اندازہ لگانا ضروری ہے۔",a:true}
    ]
  },
  {
    title:{it:"Circolazione dietro a veicolo con carico instabile",en:"Driving Behind a Vehicle with an Unstable Load",ur:"غیر مستحکم سامان والی گاڑی کے پیچھے چلنا"},
    desc:{it:"Distanza di sicurezza e sorpasso dietro veicoli con carichi instabili o sporgenti.",en:"Safety distance and overtaking behind vehicles carrying unstable or projecting loads.",ur:"غیر مستحکم یا باہر نکلے ہوئے سامان والی گاڑیوں کے پیچھے حفاظتی فاصلہ اور اوورٹیکنگ۔"},
    questions:[
      {code:"27032 V01",it:"Circolando dietro ad un veicolo che trasporta un carico in pericolo di cadere, è opportuno aumentare la distanza di sicurezza, specie se si è in salita.",en:"When driving behind a vehicle carrying a load in danger of falling, it is advisable to increase the safety distance, especially when travelling uphill.",ur:"ایسی گاڑی کے پیچھے چلتے وقت جس کا سامان گرنے کے خطرے میں ہو، حفاظتی فاصلہ بڑھانا مناسب ہے، خاص طور پر چڑھائی پر۔",a:true},
      {code:"27032 V02",it:"Circolando dietro ad un veicolo che ha un carico instabile, è opportuno aumentare la distanza di sicurezza e sorpassarlo appena possibile.",en:"When driving behind a vehicle with an unstable load, it is advisable to increase the safety distance and overtake it as soon as possible.",ur:"غیر مستحکم سامان والی گاڑی کے پیچھے چلتے وقت حفاظتی فاصلہ بڑھانا اور ممکن ہو تو جلد اوورٹیک کرنا مناسب ہے۔",a:true},
      {code:"27032 V03",it:"Circolando dietro ad un veicolo che trasporta un carico che sta per cadere, è opportuno avvertire il conducente del potenziale pericolo.",en:"When driving behind a vehicle carrying a load that is about to fall, it is advisable to warn the driver of the potential danger.",ur:"ایسی گاڑی کے پیچھے چلتے وقت جس کا سامان گرنے والا ہو، ڈرائیور کو ممکنہ خطرے سے آگاہ کرنا مناسب ہے۔",a:true},
      {code:"27032 V04",it:"Circolando dietro ad un veicolo che ha un carico poco sicuro, conviene non stargli troppo vicino, così da riuscire a fermarsi in tempo, in caso di caduta della merce trasportata.",en:"When driving behind a vehicle with an insecure load, it is advisable not to stay too close so that you can stop in time if the transported goods fall.",ur:"غیر محفوظ سامان والی گاڑی کے پیچھے بہت قریب نہیں چلنا چاہیے تاکہ سامان گرنے کی صورت میں بروقت رک سکیں۔",a:true},
      {code:"27032 V05",it:"Circolando dietro ad un veicolo che ha un carico instabile, bisogna stare attenti, soprattutto quando frena o svolta, per la possibile caduta della merce trasportata.",en:"When driving behind a vehicle with an unstable load, you must be especially careful when it brakes or turns because the transported goods may fall.",ur:"غیر مستحکم سامان والی گاڑی کے پیچھے خاص طور پر اس وقت محتاط رہنا چاہیے جب وہ بریک لگائے یا موڑے، کیونکہ سامان گر سکتا ہے۔",a:true},
      {code:"27032 V06",it:"Circolando dietro ad un veicolo che ha un carico sporgente, può risultare difficile accorgersi che intende svoltare, se gli indicatori di direzione sono nascosti dalla merce sporgente.",en:"When driving behind a vehicle with a projecting load, it may be difficult to notice that it intends to turn if its direction indicators are hidden by the projecting goods.",ur:"باہر نکلے ہوئے سامان والی گاڑی کے پیچھے چلتے وقت اس کے مڑنے کا اندازہ لگانا مشکل ہو سکتا ہے اگر سامان نے اشارہ دینے والی لائٹس چھپا دی ہوں۔",a:true}
    ]
  },
  {
    title:{it:"22.3 - Primo soccorso",en:"22.3 - First Aid",ur:"22.3 - ابتدائی طبی امداد"},
    desc:{it:"Soccorso agli infortunati della strada e comportamento del soccorritore.",en:"First aid for road accident victims and correct behaviour of the rescuer.",ur:"سڑک کے حادثے میں زخمی افراد کی ابتدائی امداد اور مدد کرنے والے کا درست طرزِ عمل۔"},
    questions:[
      {code:"32007 V01",it:"Soccorrere un ferito della strada è obbligatorio per legge.",en:"Helping an injured person on the road is required by law.",ur:"سڑک پر زخمی شخص کی مدد کرنا قانون کے مطابق لازمی ہے۔",a:true},
      {code:"32007 V02",it:"Soccorrere un ferito della strada può significare salvargli la vita.",en:"Helping an injured person on the road can mean saving their life.",ur:"سڑک پر زخمی شخص کی مدد کرنا اس کی جان بچانے کا سبب بن سکتا ہے۔",a:true},
      {code:"32007 V03",it:"Soccorrere subito un ferito della strada può evitare che subisca ulteriori danni fisici.",en:"Helping an injured person immediately can prevent further physical harm.",ur:"زخمی شخص کی فوری مدد اسے مزید جسمانی نقصان سے بچا سکتی ہے۔",a:true},
      {code:"32008 V01",it:"Il fine del primo soccorso è quello di cercare di mantenere in vita il ferito con semplici e immediati interventi.",en:"The purpose of first aid is to try to keep the injured person alive with simple and immediate actions.",ur:"ابتدائی طبی امداد کا مقصد آسان اور فوری اقدامات کے ذریعے زخمی شخص کو زندہ رکھنے کی کوشش کرنا ہے۔",a:true},
      {code:"32008 V02",it:"Il fine del primo soccorso è quello di assistere il ferito, come meglio possibile, in attesa che arrivi il soccorso medico.",en:"The purpose of first aid is to assist the injured person as well as possible while waiting for medical help to arrive.",ur:"ابتدائی طبی امداد کا مقصد طبی مدد پہنچنے تک زخمی شخص کی ممکنہ حد تک بہترین مدد کرنا ہے۔",a:true},
      {code:"32008 V03",it:"Nell'intervento di primo soccorso bisogna evitare, per quanto possibile, che il ferito subisca ulteriori danni.",en:"During first aid, further harm to the injured person should be avoided as far as possible.",ur:"ابتدائی طبی امداد کے دوران ممکنہ حد تک زخمی شخص کو مزید نقصان سے بچانا چاہیے۔",a:true},
      {code:"32008 V04",it:"Nelle operazioni di primo soccorso bisogna evitare che al ferito vengano praticati interventi sbagliati o dannosi.",en:"During first aid, incorrect or harmful interventions must be avoided.",ur:"ابتدائی طبی امداد کے دوران زخمی شخص پر غلط یا نقصان دہ اقدامات کرنے سے بچنا چاہیے۔",a:true},
      {code:"32018 V01",it:"Dopo un incidente stradale, il soccorritore che interviene deve valutare bene la situazione, per proteggere gli infortunati da altri pericoli.",en:"After a road accident, the rescuer should carefully assess the situation to protect injured people from further dangers.",ur:"سڑک کے حادثے کے بعد مدد کرنے والے کو صورتحال کا اچھی طرح جائزہ لینا چاہیے تاکہ زخمی افراد کو مزید خطرات سے بچایا جا سکے۔",a:true},
      {code:"32018 V02",it:"Dopo un incidente stradale, il soccorritore che interviene deve assistere gli infortunati al meglio delle sue possibilità, senza però prendersi iniziative di specifica competenza medica.",en:"After a road accident, the rescuer should assist injured people as well as possible without taking actions requiring specific medical expertise.",ur:"سڑک کے حادثے کے بعد مدد کرنے والے کو اپنی استطاعت کے مطابق زخمی افراد کی مدد کرنی چاہیے، لیکن مخصوص طبی مہارت والے اقدامات خود نہیں کرنے چاہئیں۔",a:true},
      {code:"32018 V03",it:"Dopo un incidente stradale, il soccorritore che interviene deve prestare assistenza agli infortunati, secondo le proprie possibilità e conoscenze.",en:"After a road accident, the rescuer should assist injured people according to their own abilities and knowledge.",ur:"سڑک کے حادثے کے بعد مدد کرنے والے کو اپنی صلاحیت اور معلومات کے مطابق زخمی افراد کی مدد کرنی چاہیے۔",a:true}
    ]
  },
  {
    title:{it:"Stato di shock",en:"Shock",ur:"شاک کی حالت"},
    desc:{it:"Cause, manifestazioni e interventi nello stato di shock.",en:"Causes, signs and correct first-aid measures for shock.",ur:"شاک کی وجوہات، علامات اور ابتدائی امداد کے درست اقدامات۔"},
    questions:[
      {code:"32019 V01",it:"Lo stato di shock può essere causato da un forte dolore.",en:"Shock can be caused by severe pain.",ur:"شاک شدید درد کی وجہ سے ہو سکتا ہے۔",a:true},
      {code:"32019 V02",it:"Lo stato di shock può essere causato da una forte emozione.",en:"Shock can be caused by a strong emotion.",ur:"شاک شدید جذبات کی وجہ سے ہو سکتا ہے۔",a:true},
      {code:"32019 V03",it:"Lo stato di shock può essere causato da una forte perdita di sangue.",en:"Shock can be caused by severe blood loss.",ur:"شاک شدید خون کے ضیاع کی وجہ سے ہو سکتا ہے۔",a:true},
      {code:"32019 V04",it:"Lo stato di shock può essere causato da un forte trauma.",en:"Shock can be caused by severe trauma.",ur:"شاک شدید صدمے کی وجہ سے ہو سکتا ہے۔",a:true},
      {code:"32012 V01",it:"Lo stato di shock si manifesta con pelle molto pallida e fredda.",en:"Shock is manifested by very pale and cold skin.",ur:"شاک کی علامت بہت پیلی اور ٹھنڈی جلد ہو سکتی ہے۔",a:true},
      {code:"32012 V02",it:"Lo stato di shock si manifesta con presenza di sudore freddo alla fronte.",en:"Shock can be manifested by cold sweat on the forehead.",ur:"شاک کی علامت ماتھے پر ٹھنڈا پسینہ آنا ہو سکتی ہے۔",a:true},
      {code:"32012 V03",it:"Lo stato di shock si manifesta con presenza di brividi, pelle molto pallida e sudorazione fredda alla fronte.",en:"Shock is manifested by chills, very pale skin and cold sweating on the forehead.",ur:"شاک کی علامت کپکپی، بہت پیلی جلد اور ماتھے پر ٹھنڈا پسینہ آنا ہے۔",a:false},
      {code:"32012 V04",it:"Lo stato di shock si manifesta con pelle molto pallida, sudorazione fredda, frequenti battiti del cuore.",en:"Shock can be manifested by very pale skin, cold sweating and frequent heartbeats.",ur:"شاک کی علامت بہت پیلی جلد، ٹھنڈا پسینہ اور دل کی تیز دھڑکنیں ہو سکتی ہیں۔",a:true},
      {code:"32012 V05",it:"Lo stato di shock può manifestarsi con improvvisa pronuncia di frasi e parole senza senso.",en:"Shock may be manifested by suddenly uttering senseless phrases and words.",ur:"شاک کی حالت میں اچانک بے معنی جملے اور الفاظ بولے جا سکتے ہیں۔",a:true},
      {code:"32013 V01",it:"Un ferito in stato di shock va messo a terra e, se possibile, con le gambe sollevate.",en:"A person in shock should be laid on the ground, if possible with the legs raised.",ur:"شاک کی حالت میں زخمی شخص کو زمین پر لٹانا چاہیے اور ممکن ہو تو ٹانگیں اونچی رکھنی چاہئیں۔",a:true},
      {code:"32013 V02",it:"Un ferito in stato di shock va coperto come meglio possibile, per evitare che si raffreddi.",en:"A person in shock should be covered as well as possible to prevent them from getting cold.",ur:"شاک کی حالت میں زخمی شخص کو ممکن حد تک ڈھانپنا چاہیے تاکہ وہ ٹھنڈا نہ ہو۔",a:true},
      {code:"32013 V03",it:"Un ferito in stato di shock va disteso, tenendo possibilmente le gambe sollevate.",en:"A person in shock should be laid down, keeping the legs raised if possible.",ur:"شاک کی حالت میں زخمی شخص کو لٹانا چاہیے اور ممکن ہو تو ٹانگیں اونچی رکھنی چاہئیں۔",a:true}
    ]
  }
];

let state = {
  topic:0,
  lang:"it",
  dark:false,
  answers: JSON.parse(localStorage.getItem("patenteAnswers") || "{}")
};

const $ = id => document.getElementById(id);

function save(){localStorage.setItem("patenteAnswers",JSON.stringify(state.answers));}

function key(t,q){return `${t}-${q}`}

function renderTopics(){
  $("topicList").innerHTML = topics.map((t,i)=>`
    <button class="topic-btn ${i===state.topic?'active':''}" data-topic="${i}">
      <span class="topic-num">${i+1}</span>
      <span class="topic-name">${t.title[state.lang]}</span>
      <span class="topic-q">${t.questions.length}</span>
    </button>`).join("");
  document.querySelectorAll(".topic-btn").forEach(b=>b.onclick=()=>{state.topic=+b.dataset.topic;render()});
  $("topicCount").textContent = `${topics.length} ${state.lang==="it"?"Argomenti":state.lang==="ur"?"موضوعات":"Topics"}`;
  $("totalCount").textContent = topics.reduce((n,t)=>n+t.questions.length,0);
}

function renderQuestions(){
  const t=topics[state.topic];
  $("questionContainer").innerHTML=t.questions.map((q,i)=>{
    const selected=state.answers[key(state.topic,i)];
    const shown = state.lang==="it" ? q.it : q[state.lang];
    const translation = state.lang==="it" ? "" : `<div class="translation"><b>${state.lang==="ur"?"Italiano / اصل متن":"Italian original"}</b>${q.it}</div>`;
    return `<article class="question-card">
      <div class="question-top"><span class="q-number">${i+1}</span><div class="q-text">${q.code ? `<small class="book-code">${q.code}</small>` : ""}${shown}</div></div>
      <div class="answer-row">
        <div class="answer auto-answer true ${q.a===true?'selected':''}">✓ ${state.lang==="it"?"VERO":state.lang==="ur"?"درست":"TRUE"}</div>
        <div class="answer auto-answer false ${q.a===false?'selected':''}">✕ ${state.lang==="it"?"FALSO":state.lang==="ur"?"غلط":"FALSE"}</div>
      </div>${translation}
    </article>`;
  }).join("");
}

function updateStats(){
  let total=0,answered=0,correct=0;
  topics.forEach((t,ti)=>t.questions.forEach((q,qi)=>{
    total++;
    const a=state.answers[key(ti,qi)];
    if(a!==undefined){answered++;if(a===q.a)correct++;}
  }));
  $("answeredCount").textContent=answered;
  $("scoreCount").textContent=answered?Math.round(correct/answered*100)+"%":"0%";
  const current=topics[state.topic];
  const done=current.questions.length;
  $("progressText").textContent=`${done} / ${current.questions.length}`;
  $("progressBar").style.width="100%";
}

function render(){
  const t=topics[state.topic];
  renderTopics();
  $("topicTitle").textContent=t.title[state.lang];
  $("topicDescription").textContent=t.desc[state.lang];
  $("questionHeading").textContent=state.lang==="it"?"Domande del tema":state.lang==="ur"?"موضوع کے سوالات":"Topic Questions";
  $("questionTag").textContent=state.lang==="it"?"DOMANDE":state.lang==="ur"?"سوالات":"QUESTIONS";
  $("progressLabel").textContent=state.lang==="it"?"Progresso":state.lang==="ur"?"پیش رفت":"Progress";
  $("resetText").textContent=state.lang==="it"?"Azzera tema":state.lang==="ur"?"موضوع ری سیٹ کریں":"Reset Topic";
  $("prevText").textContent=state.lang==="it"?"Tema precedente":state.lang==="ur"?"پچھلا موضوع":"Previous Topic";
  $("nextText").textContent=state.lang==="it"?"Tema successivo":state.lang==="ur"?"اگلا موضوع":"Next Topic";
  $("pageText").textContent=`${state.topic+1} / ${topics.length}`;
  $("prevBtn").disabled=state.topic===0;$("nextBtn").disabled=state.topic===topics.length-1;
  renderQuestions();updateStats();
}

$("languageSelect").onchange=e=>{state.lang=e.target.value;render()};
$("themeBtn").onclick=()=>{state.dark=!state.dark;document.body.classList.toggle("dark",state.dark);$("themeBtn").textContent=state.dark?"🌙":"☀️";localStorage.setItem("patenteDark",state.dark)};
$("prevBtn").onclick=()=>{if(state.topic>0){state.topic--;render();window.scrollTo({top:0,behavior:"smooth"})}};
$("nextBtn").onclick=()=>{if(state.topic<topics.length-1){state.topic++;render();window.scrollTo({top:0,behavior:"smooth"})}};
$("resetBtn").onclick=()=>{
  topics[state.topic].questions.forEach((_,i)=>delete state.answers[key(state.topic,i)]);
  save();render();
};

state.dark=localStorage.getItem("patenteDark")==="true";
document.body.classList.toggle("dark",state.dark);
$("themeBtn").textContent=state.dark?"🌙":"☀️";
$("languageSelect").value=state.lang;
render();
