const BANK=[];
function add(grade,subject,difficulty,q,o,a,e){BANK.push({grade,subject,difficulty,q,o,a,e});}
const Q={
1:[
["Mathematics","Foundation","How many sides does a triangle have?",["2","3","4","5"],1,"A triangle has three sides."],
["English","Foundation","Which word names a colour?",["Apple","Blue","Run","Seven"],1,"Blue is a colour."],
["Science","Foundation","Which part of a plant is usually under the soil?",["Flower","Root","Leaf","Fruit"],1,"Roots commonly grow in soil and absorb water and minerals."],
["General Knowledge","Foundation","How many days are there in a week?",["5","6","7","8"],2,"A week has seven days."],
["Reasoning","Stretch","What comes next: 2, 4, 6, __?",["7","8","9","10"],1,"The numbers increase by 2 each time."]
],
2:[
["Mathematics","Foundation","What is 7 + 5?",["10","11","12","13"],2,"7 plus 5 equals 12."],
["English","Foundation","Which is a naming word?",["Jump","Beautiful","School","Quickly"],2,"School is a noun, a naming word."],
["Science","Foundation","Which sense organ helps us hear?",["Eye","Ear","Nose","Skin"],1,"The ear helps us hear sounds."],
["General Knowledge","Foundation","Which planet do we live on?",["Mars","Earth","Venus","Jupiter"],1,"We live on Earth."],
["Reasoning","Stretch","If you have 3 apples and get 2 more, how many?",["4","5","6","7"],1,"3 + 2 = 5."]
],
3:[
["Mathematics","Foundation","What is 6 × 4?",["20","24","28","30"],1,"6 groups of 4 make 24."],
["English","Foundation","What is the opposite of 'hot'?",["Warm","Cold","Dry","Bright"],1,"Cold is the opposite of hot."],
["Science","Foundation","Water changes into ice when it is:",["Heated","Frozen","Boiled","Mixed"],1,"Freezing changes liquid water into solid ice."],
["Social Studies","Foundation","A map is mainly used to show:",["Places and directions","Only stories","Only numbers","Only songs"],0,"Maps represent places and help us understand location and direction."],
["Reasoning","Stretch","Which number is odd?",["12","18","21","24"],2,"21 is not divisible by 2, so it is odd."]
],
4:[
["Mathematics","Foundation","What is 3/4 of 20?",["5","10","15","18"],2,"20 ÷ 4 = 5, then 5 × 3 = 15."],
["English","Foundation","Choose the correct plural of 'child'.",["Childs","Children","Childes","Childrens"],1,"The standard plural is children."],
["Science","Foundation","Which force pulls objects toward Earth?",["Friction","Gravity","Magnetism","Light"],1,"Gravity attracts objects toward Earth."],
["Social Studies","Foundation","The capital of India is:",["Mumbai","Kolkata","New Delhi","Chennai"],2,"New Delhi is India's capital."],
["Reasoning","Stretch","If A=1, B=2, what is C+A?",["3","4","5","6"],0,"C is 3 and A is 1, so the total is 4." ]
],
5:[
["Mathematics","Foundation","What is 25% of 80?",["10","20","25","40"],1,"25% is one quarter; 80 ÷ 4 = 20."],
["English","Foundation","Which word is an adjective?",["Run","Beautiful","Quickly","Swim"],1,"Beautiful describes a noun, so it is an adjective."],
["Science","Foundation","Plants make food mainly by:",["Respiration","Photosynthesis","Digestion","Evaporation"],1,"Photosynthesis uses light to help plants make food."],
["Social Studies","Foundation","Which line divides Earth into Northern and Southern Hemispheres?",["Prime Meridian","Equator","Tropic of Cancer","Arctic Circle"],1,"The Equator divides Earth into Northern and Southern Hemispheres."],
["Reasoning","Stretch","What is the next number: 5, 10, 20, 40, __?",["45","50","60","80"],3,"Each number is doubled."]
],
6:[
["Mathematics","Foundation","What is the HCF of 18 and 24?",["3","6","9","12"],1,"6 is the greatest number dividing both 18 and 24."],
["English","Foundation","In 'She sings beautifully', the word 'beautifully' is a:",["Noun","Adjective","Adverb","Pronoun"],2,"Beautifully tells how she sings, so it is an adverb."],
["Science","Foundation","Which organ pumps blood around the body?",["Lungs","Heart","Kidney","Stomach"],1,"The heart pumps blood through the circulatory system."],
["Social Studies","Foundation","The Constitution of India came into effect on:",["15 Aug 1947","26 Jan 1950","26 Nov 1949","2 Oct 1950"],1,"The Constitution came into effect on 26 January 1950."],
["Reasoning","Stretch","If 4 pens cost ₹20, what is the cost of 7 pens at the same rate?",["₹25","₹30","₹35","₹40"],2,"One pen costs ₹5, so seven cost ₹35."]
],
7:[
["Mathematics","Foundation","Solve: 3x + 2 = 11.",["2","3","4","5"],1,"Subtract 2 and divide by 3: x = 3."],
["English","Foundation","Which sentence is in the passive voice?",["Riya wrote the letter.","The letter was written by Riya.","Riya writes daily.","Riya will write."],1,"The subject receives the action in the passive sentence."],
["Science","Foundation","Acids turn blue litmus paper:",["Blue","Red","Green","Yellow"],1,"Acids turn blue litmus red."],
["Social Studies","Foundation","The 73rd Constitutional Amendment relates mainly to:",["Panchayats","Parliament","Supreme Court","GST"],0,"It gave constitutional status to Panchayati Raj institutions."],
["Reasoning","Stretch","A train travels 60 km in 1.5 hours. Its average speed is:",["30 km/h","40 km/h","45 km/h","90 km/h"],1,"Speed = distance/time = 60/1.5 = 40 km/h."]
],
8:[
["Mathematics","Foundation","The square root of 144 is:",["10","11","12","14"],2,"12 × 12 = 144."],
["English","Foundation","Choose the best synonym for 'rapid'.",["Slow","Swift","Weak","Late"],1,"Swift means fast or rapid."],
["Science","Foundation","Which particle has a negative electric charge?",["Proton","Electron","Neutron","Nucleus"],1,"Electrons carry negative charge."],
["Social Studies","Foundation","The Indian Parliament consists of:",["Lok Sabha only","Rajya Sabha only","President and two Houses","Supreme Court and Houses"],2,"Parliament consists of the President, Lok Sabha and Rajya Sabha."],
["Reasoning","Stretch","If all roses are flowers and some flowers fade quickly, which is certain?",["All roses fade quickly","Some roses fade quickly","Roses are flowers","No rose is a flower"],2,"Only the statement that all roses are flowers follows from the premises."]
],
9:[
["Mathematics","Foundation","If x² = 81 and x is positive, x equals:",["7","8","9","10"],2,"The positive square root of 81 is 9."],
["English","Foundation","A comparison using 'like' or 'as' is called:",["Metaphor","Simile","Hyperbole","Irony"],1,"A simile explicitly compares using like or as."],
["Science","Foundation","The SI unit of force is:",["Joule","Newton","Watt","Pascal"],1,"Force is measured in newtons."],
["Social Studies","Foundation","The Tropic of Cancer passes through how many Indian states?",["6","8","10","12"],1,"It passes through eight Indian states."],
["Reasoning","Stretch","A number is divisible by 3 when:",["Its last digit is even","Its digit sum is divisible by 3","It ends in 5","It is prime"],1,"The divisibility test for 3 uses the sum of digits."]
],
10:[
["Mathematics","Foundation","The roots of x² - 5x + 6 = 0 are:",["1,6","2,3","-2,-3","3,4"],1,"The expression factors as (x-2)(x-3)."],
["English","Foundation","Which is an example of a complex sentence?",["I ran and I won.","Because it rained, we stayed inside.","Run fast.","Ravi smiled."],1,"It contains a dependent clause and an independent clause."],
["Science","Foundation","Ohm's law is commonly written as:",["V=IR","P=VI²","F=ma²","E=mc"],0,"Ohm's law relates voltage, current and resistance as V = IR."],
["Social Studies","Foundation","Fundamental Rights are mainly contained in which Part of the Constitution?",["Part II","Part III","Part IV","Part V"],1,"Part III contains Fundamental Rights."],
["Reasoning","Stretch","If the probability of an event is 0.25, its percentage is:",["2.5%","25%","40%","75%"],1,"0.25 × 100 = 25%."]
],
11:[
["Mathematics","Foundation","The derivative of x² is:",["x","2x","x²","2"],1,"Using the power rule, d(x²)/dx = 2x."],
["English","Foundation","The central idea of a passage is its:",["Main point","Longest word","First comma","Title only"],0,"The central idea is the main point or message."],
["Science","Foundation","In a cell, DNA is mainly found in the:",["Nucleus","Cell wall","Ribosome only","Vacuole only"],0,"In eukaryotic cells, most DNA is in the nucleus."],
["Social Studies","Foundation","Fiscal policy mainly concerns:",["Government revenue and spending","Planetary motion","Language change","Ocean tides"],0,"Fiscal policy uses taxation, spending and borrowing."],
["Reasoning","Stretch","If a fair die is rolled once, probability of an even number is:",["1/6","1/3","1/2","2/3"],2,"Three of six outcomes are even, giving 3/6 = 1/2."]
],
12:[
["Mathematics","Foundation","If f(x)=x²+2x, then f'(x) is:",["x+2","2x+2","x²+2","2x"],1,"Differentiate term by term: 2x + 2."],
["English","Foundation","An argument's conclusion is the statement that:",["Is supported by the premises","Must always be a question","Contains no evidence","Is always the first sentence"],0,"The conclusion is the claim the supporting reasons are intended to establish."],
["Science","Foundation","Which law relates pressure and volume inversely at constant temperature?",["Boyle's law","Ohm's law","Hooke's law","Faraday's law"],0,"Boyle's law states that pressure and volume are inversely related at constant temperature for a fixed amount of gas."],
["Social Studies","Foundation","The 'basic structure' doctrine limits:",["Parliament's amending power","The voting age","Rainfall","School attendance"],0,"The doctrine holds that Parliament cannot alter the Constitution's basic structure."],
["Reasoning","Stretch","If a data set has mean 10 and every value is increased by 5, the new mean is:",["10","12","15","50"],2,"Adding 5 to every observation adds 5 to the mean."]
]};
Object.entries(Q).forEach(([g,qs])=>qs.forEach(x=>add(+g,...x)));
let pool=[],current=0,answers=[],seconds=600,timerId=null;
const $=id=>document.getElementById(id),box=$("quizBox"),bar=$("progressBar");
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function startQuiz(){
 clearInterval(timerId);const g=+$("grade").value,s=$("subject").value,d=$("difficulty").value,n=+$("count").value;
 let choices=BANK.filter(x=>x.grade===g&&(s==="All"||x.subject===s));
 if(d==="Foundation") choices=choices.filter(x=>x.difficulty==="Foundation");
 if(d==="Stretch") choices=choices.filter(x=>x.difficulty==="Stretch");
 pool=shuffle(choices).slice(0,n);
 if(!pool.length){alert("There are no questions for that combination yet. Try Subject: All and Challenge: Balanced.");return}
 current=0;answers=Array(pool.length).fill(null);seconds=Math.max(300,pool.length*45);$("result").classList.add("hidden");$("quiz").classList.remove("hidden");render();timerId=setInterval(tick,1000);
}
function render(){
 const x=pool[current];if(!x)return;
 box.innerHTML='<div class="question-number">CLASS '+x.grade+' · '+x.subject.toUpperCase()+' · '+x.difficulty.toUpperCase()+' · QUESTION '+(current+1)+' OF '+pool.length+'</div><div class="question">'+x.q+'</div>'+x.o.map((v,i)=>'<button class="option '+(answers[current]===i?"selected":"")+'" onclick="choose('+i+')">'+String.fromCharCode(65+i)+'. '+v+'</button>').join("");
 bar.style.width=((current+1)/pool.length*100)+"%";$("meta").textContent="Class "+x.grade+" · "+x.subject;$("scoreLive").textContent=answers.filter((a,i)=>a!==null&&a===pool[i].a).length+" correct so far";$("prev").style.visibility=current?"visible":"hidden";$("next").textContent=current===pool.length-1?"Finish":"Next →";$("timer").textContent=String(Math.floor(seconds/60)).padStart(2,"0")+":"+String(seconds%60).padStart(2,"0");
}
function choose(i){answers[current]=i;render()}
$("prev").onclick=()=>{if(current){current--;render()}}
$("next").onclick=()=>{if(current<pool.length-1){current++;render()}else finish()}
function tick(){seconds--;if(seconds<=0)finish();else render()}
function finish(){
 if(!pool.length)return;clearInterval(timerId);
 const score=answers.reduce((n,a,i)=>n+(a===pool[i].a?1:0),0),pct=Math.round(score/pool.length*100);
 let level=pct>=90?"Advanced Challenge":pct>=75?"Strong Progress":pct>=50?"On Track":"Build & Practise";
 $("scoreText").textContent=score+" / "+pool.length+" correct · "+pct+"%";
 $("resultMessage").textContent="For Class "+pool[0].grade+", your result is "+level+". This describes your performance on this question set—not your overall intelligence.";
 $("profileCards").innerHTML='<div class="profile-grid"><div><b>'+level+'</b><span>Current performance band</span></div><div><b>'+score+'/'+pool.length+'</b><span>Questions answered correctly</span></div><div><b>Class '+pool[0].grade+'</b><span>Question level used</span></div></div>';
 $("review").innerHTML=pool.map((x,i)=>'<div class="review-item"><h3 class="'+(answers[i]===x.a?"correct":"wrong")+'">'+(answers[i]===x.a?"✓ Correct":"↺ Review")+' — Q'+(i+1)+': '+x.q+'</h3><p><b>Your answer:</b> '+(answers[i]===null?"Not answered":x.o[answers[i]])+'</p><p><b>Correct answer:</b> '+x.o[x.a]+'</p><p><b>Why:</b> '+x.e+'</p></div>').join("");
 $("quiz").classList.add("hidden");$("result").classList.remove("hidden");$("result").scrollIntoView({behavior:"smooth"});
}
$("start").onclick=startQuiz;$("again").onclick=startQuiz;startQuiz();