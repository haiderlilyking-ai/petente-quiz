const topics = [
  {
    title:{it:"Segnali stradali",en:"Traffic Signs",ur:"ٹریفک سائنز"},
    desc:{it:"Segnali di pericolo, obbligo e divieto.",en:"Danger, mandatory and prohibition signs.",ur:"خطرے، لازمی اور ممانعت کے ٹریفک اشارے۔"},
    questions:[
      {it:"Il segnale di STOP obbliga il conducente a fermarsi.",en:"The STOP sign requires the driver to stop.",ur:"STOP کا نشان ڈرائیور کو گاڑی روکنے کا پابند کرتا ہے۔",a:true},
      {it:"Il segnale di divieto di accesso permette l'ingresso a tutti i veicoli.",en:"A no-entry sign allows all vehicles to enter.",ur:"داخلہ ممنوع کا نشان تمام گاڑیوں کو داخل ہونے کی اجازت دیتا ہے۔",a:false},
      {it:"I segnali di pericolo hanno generalmente forma triangolare.",en:"Warning signs are generally triangular.",ur:"خطرے کے اشارے عام طور پر تکونی شکل کے ہوتے ہیں۔",a:true},
      {it:"Il segnale di limite di velocità indica una velocità minima.",en:"A speed-limit sign indicates a minimum speed.",ur:"رفتار کی حد کا نشان کم از کم رفتار ظاہر کرتا ہے۔",a:false}
    ]
  },
  {
    title:{it:"Precedenza",en:"Right of Way",ur:"حقِ ترجیح"},
    desc:{it:"Regole sulla precedenza agli incroci.",en:"Rules concerning right of way at intersections.",ur:"چوراہوں پر حقِ ترجیح کے اصول۔"},
    questions:[
      {it:"Il segnale STOP richiede di dare precedenza e fermarsi.",en:"The STOP sign requires giving way and stopping.",ur:"STOP کا نشان راستہ دینے اور رکنے کا تقاضا کرتا ہے۔",a:true},
      {it:"La precedenza a destra vale in ogni situazione senza eccezioni.",en:"Priority to the right applies in every situation without exceptions.",ur:"دائیں طرف سے آنے والی گاڑی کی ترجیح ہر صورت میں بغیر کسی استثنا کے لاگو ہوتی ہے۔",a:false},
      {it:"Chi ha la precedenza deve comunque prestare attenzione al traffico.",en:"A driver with right of way must still pay attention to traffic.",ur:"جس ڈرائیور کو ترجیح حاصل ہو اسے پھر بھی ٹریفک پر توجہ دینی چاہیے۔",a:true}
    ]
  },
  {
    title:{it:"Velocità",en:"Speed",ur:"رفتار"},
    desc:{it:"Velocità, limiti e sicurezza della guida.",en:"Speed limits and safe driving.",ur:"رفتار کی حدود اور محفوظ ڈرائیونگ۔"},
    questions:[
      {it:"La velocità deve essere adeguata alle condizioni della strada.",en:"Speed should be appropriate to road conditions.",ur:"رفتار سڑک کے حالات کے مطابق ہونی چاہیے۔",a:true},
      {it:"Aumentare la velocità riduce sempre lo spazio di frenata.",en:"Increasing speed always reduces braking distance.",ur:"رفتار بڑھانے سے بریک لگانے کا فاصلہ ہمیشہ کم ہو جاتا ہے۔",a:false},
      {it:"La pioggia può rendere necessario ridurre la velocità.",en:"Rain may make it necessary to reduce speed.",ur:"بارش کی صورت میں رفتار کم کرنا ضروری ہو سکتا ہے۔",a:true}
    ]
  },
  {
    title:{it:"Comportamento del conducente",en:"Driver Behaviour",ur:"ڈرائیور کا رویہ"},
    desc:{it:"Comportamenti corretti e responsabilità del conducente.",en:"Correct behaviour and driver responsibilities.",ur:"درست رویہ اور ڈرائیور کی ذمہ داریاں۔"},
    questions:[
      {it:"Il conducente deve mantenere la concentrazione durante la guida.",en:"The driver must remain focused while driving.",ur:"ڈرائیونگ کے دوران ڈرائیور کو مکمل توجہ برقرار رکھنی چاہیے۔",a:true},
      {it:"Usare il telefono mentre si guida migliora la sicurezza.",en:"Using a phone while driving improves safety.",ur:"ڈرائیونگ کے دوران فون استعمال کرنے سے حفاظت بہتر ہوتی ہے۔",a:false},
      {it:"La cintura di sicurezza è un importante dispositivo di sicurezza.",en:"The seat belt is an important safety device.",ur:"سیٹ بیلٹ ایک اہم حفاظتی آلہ ہے۔",a:true}
    ]
  },
  {
    title:{it:"Sosta e fermata",en:"Stopping and Parking",ur:"رکنا اور پارکنگ"},
    desc:{it:"Regole per fermata, sosta e parcheggio.",en:"Rules for stopping and parking.",ur:"گاڑی روکنے اور پارک کرنے کے اصول۔"},
    questions:[
      {it:"La sosta è consentita solo dove non è vietata.",en:"Parking is allowed only where it is not prohibited.",ur:"پارکنگ صرف وہاں کی جا سکتی ہے جہاں اس کی ممانعت نہ ہو۔",a:true},
      {it:"È sempre consentito parcheggiare davanti a un'uscita di emergenza.",en:"It is always allowed to park in front of an emergency exit.",ur:"ایمرجنسی راستے کے سامنے پارک کرنا ہمیشہ جائز ہے۔",a:false},
      {it:"La fermata deve essere effettuata senza creare pericolo o intralcio.",en:"Stopping should not create danger or obstruction.",ur:"گاڑی روکنے سے خطرہ یا رکاوٹ پیدا نہیں ہونی چاہیے۔",a:true}
    ]
  },
  {
    title:{it:"22.3 - Primo soccorso",en:"22.3 - First Aid",ur:"22.3 - ابتدائی طبی امداد"},
    desc:{
      it:"Soccorso agli infortunati della strada e comportamento del soccorritore.",
      en:"First aid for road accident victims and correct behaviour of the rescuer.",
      ur:"سڑک کے حادثے میں زخمی افراد کی ابتدائی امداد اور مدد کرنے والے کا درست طرزِ عمل۔"
    },
    questions:[
      {
        it:"Soccorre un ferito della strada è obbligatorio per legge.",
        en:"Helping an injured person on the road is required by law.",
        ur:"سڑک پر زخمی شخص کی مدد کرنا قانون کے مطابق لازمی ہے۔",
        a:true
      },
      {
        it:"Soccorrere un ferito della strada può significare salvargli la vita.",
        en:"Helping an injured person on the road can mean saving their life.",
        ur:"سڑک پر زخمی شخص کی مدد کرنا اس کی جان بچانے کا سبب بن سکتا ہے۔",
        a:true
      },
      {
        it:"Soccorrere subito un ferito della strada può evitare che subisca ulteriori danni fisici.",
        en:"Helping an injured person immediately can prevent further physical harm.",
        ur:"زخمی شخص کی فوری مدد اسے مزید جسمانی نقصان سے بچا سکتی ہے۔",
        a:true
      },
      {
        it:"Il fine del primo soccorso è quello di cercare di mantenere in vita il ferito con semplici e immediati interventi.",
        en:"The purpose of first aid is to try to keep the injured person alive with simple and immediate actions.",
        ur:"ابتدائی طبی امداد کا مقصد آسان اور فوری اقدامات کے ذریعے زخمی شخص کو زندہ رکھنے کی کوشش کرنا ہے۔",
        a:true
      },
      {
        it:"Il fine del primo soccorso è quello di assistere il ferito, come meglio possibile, in attesa che arrivi il soccorso medico.",
        en:"The purpose of first aid is to assist the injured person as well as possible while waiting for medical help to arrive.",
        ur:"ابتدائی طبی امداد کا مقصد طبی مدد پہنچنے تک زخمی شخص کی ممکنہ حد تک بہترین مدد کرنا ہے۔",
        a:true
      },
      {
        it:"Nell'intervento di primo soccorso bisogna evitare, per quanto possibile, che il ferito subisca ulteriori danni.",
        en:"During first aid, further harm to the injured person should be avoided as far as possible.",
        ur:"ابتدائی طبی امداد کے دوران ممکنہ حد تک زخمی شخص کو مزید نقصان سے بچانا چاہیے۔",
        a:true
      },
      {
        it:"Nelle operazioni di primo soccorso bisogna evitare che al ferito vengano praticati interventi sbagliati o dannosi.",
        en:"During first aid, incorrect or harmful interventions must be avoided.",
        ur:"ابتدائی طبی امداد کے دوران زخمی شخص پر غلط یا نقصان دہ اقدامات کرنے سے بچنا چاہیے۔",
        a:true
      },
      {
        it:"Dopo un incidente stradale, il soccorritore che interviene deve valutare bene la situazione, per proteggere gli infortunati da altri pericoli.",
        en:"After a road accident, the rescuer should carefully assess the situation to protect injured people from further dangers.",
        ur:"سڑک کے حادثے کے بعد مدد کرنے والے کو صورتحال کا اچھی طرح جائزہ لینا چاہیے تاکہ زخمی افراد کو مزید خطرات سے بچایا جا سکے۔",
        a:true
      },
      {
        it:"Dopo un incidente stradale, il soccorritore che interviene deve assistere gli infortunati al meglio delle sue possibilità, senza però prendersi iniziative di specifica competenza medica.",
        en:"After a road accident, the rescuer should assist injured people as well as possible without taking actions requiring specific medical expertise.",
        ur:"سڑک کے حادثے کے بعد مدد کرنے والے کو اپنی استطاعت کے مطابق زخمی افراد کی مدد کرنی چاہیے، لیکن مخصوص طبی مہارت والے اقدامات خود نہیں کرنے چاہئیں۔",
        a:true
      },
      {
        it:"Dopo un incidente stradale, il soccorritore che interviene deve prestare assistenza agli infortunati, secondo le proprie possibilità e conoscenze.",
        en:"After a road accident, the rescuer should assist injured people according to their own abilities and knowledge.",
        ur:"سڑک کے حادثے کے بعد مدد کرنے والے کو اپنی صلاحیت اور معلومات کے مطابق زخمی افراد کی مدد کرنی چاہیے۔",
        a:true
      }
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
      <div class="question-top"><span class="q-number">${i+1}</span><div class="q-text">${shown}</div></div>
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
