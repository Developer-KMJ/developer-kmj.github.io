import{a as C,b as D}from"./chunk-WMOBFBMC.js";import{f as S}from"./chunk-ZZO3UGZ2.js";import{a as b,b as x}from"./chunk-6OOVZQFZ.js";import{D as m,E as l,H as i,I as n,J as a,L as c,M as u,R as o,Y as g,fa as y,ha as f,m as p,qa as v,ra as w,y as h,z as d}from"./chunk-P6PJ7GLZ.js";function _(r,s){if(r&1&&a(0,"app-translation-text-box",9),r&2){let e=s.$implicit;l("word",e.shaw)("answer",e.english)}}function k(r,s){if(r&1&&a(0,"app-translation-text-box",10),r&2){let e=s.$implicit,t=u();l("word",e.english)("answer",e.shaw)("IsReadOnly",t.suppressStandardKeyboard)}}var T=class r{constructor(s,e){this.dictionaryService=s;this.shavianKeyboardService=e;this.randomShavian=[{english:"",shaw:""},{english:"",shaw:""},{english:"",shaw:""},{english:"",shaw:""},{english:"",shaw:""}],this.randomEnglish=[{english:"",shaw:""},{english:"",shaw:""},{english:"",shaw:""},{english:"",shaw:""},{english:"",shaw:""}],this.dictionaryService.getDictionary("lesson3").subscribe(t=>{this.dictionary=t,this.questionGenerator=new D(t),this.randomShavian=this.questionGenerator.getRandomWords(5),this.randomEnglish=this.questionGenerator.getRandomWords(5)}),this.suppressStandardKeyboard=this.shavianKeyboardService.isVisible(),this.shavianKeyboardService.visibilityChange.subscribe(t=>{this.suppressStandardKeyboard=t})}suppressStandardKeyboard=!1;questionGenerator=null;dictionary=[];randomShavian=[];randomEnglish=[];ngAfterViewInit(){this.shavianKeyboardService.setVisibility(!0)}onTryAgainShavian(){this.questionGenerator!=null&&(this.randomShavian=this.questionGenerator.getRandomWords(5))}onTryAgainEnglish(){this.questionGenerator!=null&&(this.randomEnglish=this.questionGenerator.getRandomWords(5))}static \u0275fac=function(e){return new(e||r)(d(S),d(w))};static \u0275cmp=p({type:r,selectors:[["app-lesson-three-exercises"]],standalone:!0,features:[g],decls:34,vars:2,consts:[["title","Practice","backText","Lesson 3","backUrl","/lesson-three","nextText","Lesson 4","nextUrl","/lesson-four"],[1,"tutorial-character-title-container"],[1,"tutorial-practice-title"],[1,"tutorial-paragraph-indent"],[3,"word","answer",4,"ngFor","ngForOf"],[1,"try-again-container"],[1,"try-again-button",3,"click"],[3,"word","answer","IsReadOnly",4,"ngFor","ngForOf"],["title","Lesson 4","url","/lesson-four"],[3,"word","answer"],[3,"word","answer","IsReadOnly"]],template:function(e,t){e&1&&(i(0,"div"),a(1,"app-small-header",0),n(),i(2,"div")(3,"div",1)(4,"div",2),o(5,"Reading Shavian"),n()(),i(6,"div",3)(7,"p"),o(8,' Like in previous practice sessions, you\u2019ll read five words written in Shavian and translate them into English. Type your answers and watch for the green checkmark to confirm correctness. Stuck on a word? Click "\u{10456}\u{10474} \u{10465}\u{10470}" ("Show Me" in Shavian) to see the solution. '),n(),i(9,"p"),o(10,' If you\u2019re eager to practice more, just hit "Try Again" for a fresh set of words! '),n(),a(11,"br"),m(12,_,1,2,"app-translation-text-box",4),i(13,"div",5)(14,"button",6),c("click",function(){return t.onTryAgainShavian()}),o(15,"Try Again"),n()()()(),i(16,"div")(17,"div",1)(18,"div",2),o(19,"Writing Shavian"),n()(),i(20,"div",3)(21,"p"),o(22,' Let\u2019s change things up! This time, instead of a multiple-choice question, you\u2019ll have the chance to enter your own Shavian translations for words. To type in Shavian, simply toggle on the "Show Keyboard" option at the bottom of your screen to display a functional Shavian keyboard. Just like before, type your answers and keep an eye out for the green checkmark. If you get stuck, click "\u{10456}\u{10474} \u{10465}\u{10470}" ("Show Me"), or if you want a fresh set of words, hit "Try Again." '),n(),i(23,"p")(24,"strong"),o(25,'Note: If you are using an integrated Shavian keyboard, keep the "Show Keyboard" option toggled off'),n()(),i(26,"p"),o(27," Let\u2019s dive in and enjoy learning! "),n(),a(28,"br"),m(29,k,1,3,"app-translation-text-box",7),i(30,"div",5)(31,"button",6),c("click",function(){return t.onTryAgainEnglish()}),o(32,"Try Again"),n()()()(),a(33,"app-next-page-arrow",8)),e&2&&(h(12),l("ngForOf",t.randomShavian),h(17),l("ngForOf",t.randomEnglish))},dependencies:[C,b,x,v,f,y]})};export{T as LessonThreeExercisesComponent};
