(()=>{var e={624:()=>{H5P=H5P||{},H5P.OERQuiz=function(e,t,n){if(!(this instanceof H5P.OERQuiz))return new H5P.OERQuiz(e,t,n);H5P.EventDispatcher.call(this);var i=H5P.jQuery,o=this;this.contentId=t;var s={initialQuestion:0,progressType:"dots",passPercentage:50,questions:[],introPage:{showIntroPage:!1,title:"",introduction:"",startButtonText:"Start"},texts:{prevButton:"Previous question",nextButton:"Next question",finishButton:"Finish",textualProgress:"Question: @current of @total questions",jumpToQuestion:"Question %d of %total",questionLabel:"Question",readSpeakerProgress:"Question @current of @total",unansweredText:"Unanswered",answeredText:"Answered",currentQuestionText:"Current question"},endGame:{showResultPage:!0,noResultMessage:"Finished",message:"Your result:",oldFeedback:{successGreeting:"",successComment:"",failGreeting:"",failComment:""},overallFeedback:[],finishButtonText:"Finish",solutionButtonText:"Show solution",retryButtonText:"Retry",showAnimations:!1,skipButtonText:"Skip video",showSolutionButton:!0,showRetryButton:!0,successUrl:null,failUrl:null},override:{},disableBackwardsNavigation:!1},r=i.extend(!0,{},s,e);this.params=r;var a,u,d,c,l,g='<div class="questionset-results">  <div class="greeting"><%= message %></div>  <div class="feedback-section">    <div class="feedback-scorebar"></div>    <div class="feedback-text"></div>  </div>  <% if (comment) { %>  <div class="result-header"><%= comment %></div>  <% } %>  <% if (resulttext) { %>  <div class="result-text"><%= resulttext %></div>  <% } %> <% if (successUrl) { %><a href="<%= successUrl.url %>" target="_blank" class="h5p-joubelui-button gdl-questionset__endlink--success"><%= successUrl.linkLabel %></a> <% } %> <% if (failUrl) { %><a href="<%= failUrl.url %>" target="_blank" class="h5p-joubelui-button gdl-questionset__endlink--fail"><%= failUrl.linkLabel %></a> <% } %>  <div class="buttons">'+(r.endGame.showSolutionButton?'    <button type="button" class="h5p-joubelui-button h5p-button qs-solutionbutton"><%= solutionButtonText %></button>':"")+(r.endGame.showRetryButton?'    <button type="button" class="h5p-joubelui-button h5p-button qs-retrybutton"><%= retryButtonText %></button>':"")+"  </div></div>",h=new EJS({text:'<% if (introPage.showIntroPage) { %><div class="intro-page">  <% if (introPage.title) { %>    <div class="title"><span><%= introPage.title %></span></div>  <% } %>  <% if (introPage.introduction) { %>    <div class="introduction"><%= introPage.introduction %></div>  <% } %>  <div class="buttons"><a href="#" class="qs-startbutton h5p-joubelui-button h5p-button"><%= introPage.startButtonText %></a></div></div><% } %><div tabindex="-1" class="qs-progress-announcer"></div><div class="questionset<% if (introPage.showIntroPage) { %> hidden<% } %>">  <% for (var i=0; i<questions.length; i++) { %>    <div class="question-container"></div>  <% } %>  <div class="qs-footer">    <div class="qs-progress">      <% if (progressType == "dots") { %>        <ul class="dots-container" role="navigation">          <% for (var i=0; i<questions.length; i++) { %>           <li class="progress-item">             <a href="#"                class="progress-dot unanswered<%               if (disableBackwardsNavigation) { %> disabled <% } %>"               aria-label="<%=               texts.jumpToQuestion.replace("%d", i + 1).replace("%total", questions.length)               + ", " + texts.unansweredText %>" tabindex="-1"                <% if (disableBackwardsNavigation) { %> aria-disabled="true" <% } %>             ></a>           </li>          <% } %>        </div>      <% } else if (progressType == "textual") { %>        <span class="progress-text"></span>      <% } %>    </div>  </div></div>'}),p=new EJS({text:g}),v=i.extend(!0,{},s,e),f=0,b=[],m=!1,w=!1;(n=n||{}).previousState&&(n.previousState.progress&&(f=n.previousState.progress),u=n.previousState.order);var x=function(e){var t=e.map((function(e,t){return[e,t]}));t=H5P.shuffleArray(t),e=[];for(var i=0;i<t.length;i++)e[i]=t[i][0];for(var o=[],s=0;s<t.length;s++)n.previousState&&n.previousState.questionOrder?o[s]=u[t[s][1]]:o[s]=t[s][1];return{questions:e,questionOrder:o}};if(r.poolSize>0)if(n.previousState&&n.previousState.poolOrder){a=n.previousState.poolOrder;for(var k=[],P=0;P<a.length;P++)k[P]=r.questions[a[P]];r.questions=k}else{var q=x(r.questions),y=q.questions;a=q.questionOrder,y=y.slice(0,r.poolSize),a=a.slice(0,r.poolSize),r.questions=y}var B,S=i(h.render(r));(r.override.showSolutionButton||r.override.retryButton||!1===r.override.checkButton)&&(B={},r.override.showSolutionButton&&(B.enableSolutionsButton="on"===r.override.showSolutionButton),r.override.retryButton&&(B.enableRetry="on"===r.override.retryButton),!1===r.override.checkButton&&(B.enableCheckButton=r.override.checkButton));var T=function(e){for(var s=[],r=0;r<e.length;r++){var a;a=void 0!==u?e[u[r]]:e[r],B&&i.extend(a.params.behaviour,B),a.params=a.params||{};var d=n.previousState&&n.previousState.answers,c=H5P.newRunnable(a,t,void 0,void 0,{previousState:d?n.previousState.answers[r]:void 0,parent:o});c.on("resize",(function(){l=!0,o.trigger("resize")})),c.on("autoprogress",(()=>{M(1)})),s.push(c)}return s};if(b=T(r.questions),r.randomQuestions&&void 0===n.previousState){var G=x(b);b=G.questions,u=G.questionOrder}o.on("resize",(function(){if(l)l=!1;else for(var e=0;e<b.length;e++)b[e].trigger("resize")}));var H=function(){r.disableBackwardsNavigation&&(b[f].getAnswerGiven()&&b.length-1!==f?b[f].showButton("next"):b[f].hideButton("next"));for(var e=!0,t=b.length-1;t>=0;t--)e=e&&b[t].getAnswerGiven();f===r.questions.length-1&&b[f]&&(e?b[f].showButton("finish"):b[f].hideButton("finish"))},C=function(e,t){if(e<0&&(e=0),e>=r.questions.length&&(e=r.questions.length-1),f=e,o.trigger("questionChanged",r.questions[e]),z(f),i(".question-container",d).hide().eq(e).show(),b[e]){var n=b[e];n.setActivityStarted(),void 0!==n.$&&n.trigger("resize")}if("textual"===r.progressType)i(".progress-text",d).text(r.texts.textualProgress.replace("@current",e+1).replace("@total",r.questions.length));else{var s=i(".progress-dot.current",d).parent().index();s>=0&&(F(s,!1),A(s,b[s].getAnswerGiven())),F(e,!0)}return t||setTimeout((function(){var e=r.texts.readSpeakerProgress.replace("@current",(f+1).toString()).replace("@total",b.length.toString());i(".qs-progress-announcer",d).html(e).show().focus(),n&&n.readFeedback&&n.readFeedback()}),0),H(),o.trigger("resize"),f},z=function(e){for(var t=0;t<b.length;t++)b[t].pause();var n=r.questions[e];n&&n.params.media&&n.params.media.params&&n.params.media.params.playback&&n.params.media.params.playback.autoplay&&"function"==typeof b[e].play&&b[e].play()},Q=function(){w=!0;for(var e=0;e<b.length;e++){I(!0),e<b.length-1&&b[e].showButton("next"),e>0&&b[e].showButton("prev");try{b[e].toggleReadSpeaker(!0),b[e].showSolutions(),b[e].toggleReadSpeaker(!1)}catch(e){H5P.error("subcontent does not contain a valid showSolutions function"),H5P.error(e)}}},I=function(e){i(".progress-dot",d).each((function(){i(this).toggleClass("disabled",!e),i(this).attr("aria-disabled",e?"false":"true"),e||i(this).attr("tabindex","-1")}))},R=!1;this.reRender=function(){R=!1};var O=function(e){i(".question-container",d).each((function(){i(this).children().detach()}));for(var t=0;t<e.length;t++){var n=e[t];i(".question-container:eq("+t+")",d).attr("class","question-container"),n.attach(i(".question-container:eq("+t+")",d)),e[e.length-1]===n&&n.hasButton("finish")&&n.showButton("finish"),e[e.length-1]!==n&&n.hasButton("next")&&n.showButton("next"),e[0]!==n&&n.hasButton("prev")&&!r.disableBackwardsNavigation&&n.showButton("prev"),e[0]===n&&n.hideButton("prev"),e[e.length-1]===n&&n.hideButton("next"),e[e.length-1]!==n&&n.hideButton("finish")}},M=function(e){if(r.disableBackwardsNavigation&&!b[f].getAnswerGiven())return b[f].hideButton("next"),void b[f].hideButton("finish");var t;b[t=f]&&j(b[t]),f+e>=b.length?U():C(f+e)},A=function(e,t){var n=i(".progress-dot:eq("+e+")",d);if(!n.hasClass("current")){t=!!t;var o=r.texts.jumpToQuestion.replace("%d",(e+1).toString()).replace("%total",i(".progress-dot",d).length)+", "+(t?r.texts.answeredText:r.texts.unansweredText);n.toggleClass("unanswered",!t).toggleClass("answered",t).attr("aria-label",o)}},F=function(e,t){var n=i(".progress-dot:eq("+e+")",d),o=r.texts,s=o.jumpToQuestion.replace("%d",(e+1).toString()).replace("%total",i(".progress-dot",d).length);s+=t?", "+o.currentQuestionText:", "+(n.hasClass("answered")?o.answeredText:o.unansweredText);var a=r.disableBackwardsNavigation&&!w;n.toggleClass("current",t).attr("aria-label",s).attr("tabindex",t&&!a?0:-1)},U=function(){if(i(".progress-dot.current",d).removeClass("current"),R)return d.children().hide().filter(".questionset-results").show(),void o.trigger("resize");d.children().hide().filter(".questionset-results").remove(),R=!0;var e=o.getScore(),s=o.getMaxScore(),l=H5P.Question.determineOverallFeedback(r.endGame.overallFeedback,e/s).replace("@score",e).replace("@total",s),g=100*e/s>=r.passPercentage,h=function(e,t){i(e,d).click(t).keypress((function(e){32===e.which&&(t(),e.preventDefault())}))},f=function(){o.triggerXAPICompleted(o.getScore(),o.getMaxScore(),g);var t=r.endGame.successFeedback||null,f=r.endGame.failFeedback||null,m={message:r.endGame.showResultPage?r.endGame.message:r.endGame.noResultMessage,comment:r.endGame.showResultPage?g?r.endGame.oldFeedback.successGreeting:r.endGame.oldFeedback.failGreeting:void 0,resulttext:r.endGame.showResultPage?g?r.endGame.oldFeedback.successComment:r.endGame.oldFeedback.failComment:void 0,successUrl:"successUrl"===t.successType&&g?t.successUrl:null,failUrl:"failUrl"!==f.failType||g?null:f.failUrl,finishButtonText:r.endGame.finishButtonText,solutionButtonText:r.endGame.solutionButtonText,retryButtonText:r.endGame.retryButtonText};d.children().hide(),d.append(p.render(m)),r.endGame.showResultPage?(h(".qs-solutionbutton",(function(){Q(),d.children().hide().filter(".questionset").show(),C(r.initialQuestion)})),h(".qs-retrybutton",(function(){!function(){n.previousState=[],w=!1;for(var e=0;e<b.length;e++)try{b[e].resetTask(),r.disableBackwardsNavigation&&(I(!1),0===e&&b[e].getAnswerGiven()?b[e].showButton("next"):b[e].hideButton("next"),b[e].hideButton("prev"))}catch(e){H5P.error("subcontent does not contain a valid resetTask function"),H5P.error(e)}if(b[b.length-1].hideButton("finish"),i(".progress-dot").each((function(e){A(e,!1)})),R=!1,r.poolSize>0){var t=x(v.questions),o=t.questions;a=t.questionOrder,o=o.slice(0,r.poolSize),a=a.slice(0,r.poolSize),r.questions=o,b=T(r.questions),V()}else r.randomQuestions&&function(){var e=x(b);b=e.questions,u=e.questionOrder,O(b)}()}(),d.children().hide(),i(".intro-page",d).length?(i(".intro-page",d).show(),i(".qs-startbutton",d).focus()):(i(".questionset",d).show(),C(r.initialQuestion))})),void 0===c&&(c=H5P.JoubelUI.createScoreBar(s)),c.appendTo(i(".feedback-scorebar",d)),i(".feedback-text",d).html(l),setTimeout((function(){i(".qs-progress-announcer",d).html(m.message+"."+l+"."+m.comment+"."+m.resulttext).show().focus(),c.setMaxScore(s),c.setScore(e)}),0)):i(".qs-solutionbutton, .qs-retrybutton, .feedback-section",d).remove(),o.trigger("resize")},m=r.endGame.successFeedback,k=r.endGame.failFeedback,P="successVideo"===m.successType&&g?m.successVideo:null;if(P=g||"failVideo"!==k.failType?P:k.failVideo){d.children().hide();var q=i('<div class="video-container"></div>').appendTo(d),y=new H5P.Video({sources:P,fitToWrapper:!0,controls:!1,autoplay:!1},t);return y.on("stateChange",(function(e){e.data===H5P.Video.ENDED&&(f(),q.hide())})),y.attach(q),y.on("loaded",(function(){o.trigger("resize")})),y.play(),void i('<a class="h5p-joubelui-button h5p-button skip">Stop video</a>').click((function(){y.pause(),q.hide(),f()})).appendTo(q)}f(),o.trigger("resize")},N=function(e){H5P.on(e,"imageLoaded",(function(){o.trigger("resize")}))};function V(){for(var e=0;e<b.length;e++){var t=b[e];i(".question-container:eq("+e+")",d).attr("class","question-container"),t.attach(i(".question-container:eq("+e+")",d)),N(t),t.addButton("finish",r.texts.finishButton,M.bind(this,1),!1),t.addButton("next","",M.bind(this,1),!r.disableBackwardsNavigation||!!t.getAnswerGiven(),{href:"#","aria-label":r.texts.nextButton}),t.addButton("prev","",M.bind(this,-1),!(b[0]===t||r.disableBackwardsNavigation),{href:"#","aria-label":r.texts.prevButton}),b[b.length-1]===t&&t.hideButton("next"),t.on("xAPI",(function(e){var t=e.getVerb();"interacted"!==t&&"answered"!==t&&"attempted"!==t||(A(f,b[f].getAnswerGiven()),H()),"completed"===t&&e.setVerb("answered"),void 0===e.data.statement.context.extensions&&(e.data.statement.context.extensions={}),e.data.statement.context.extensions["http://id.tincanapi.com/extension/ending-point"]=f+1})),A(e,t.getAnswerGiven())}}this.attach=function(e){if(this.isRoot()&&this.setActivityStarted(),(d=i("string"==typeof e?"#"+e:e)).children().remove(),d.append(S),void 0!==r.backgroundImage&&d.css({overflow:"hidden",background:'#fff url("'+H5P.getPath(r.backgroundImage.path,t)+'") no-repeat 50% 50%',backgroundSize:"100% auto"}),void 0!==r.introPage.backgroundImage){var n=d.find(".intro-page");if(n.length){var s=r.introPage.backgroundImage,a=s.height/s.width;n.css({background:'#fff url("'+H5P.getPath(s.path,t)+'") no-repeat 50% 50%',backgroundSize:"auto 100%",minHeight:a*+window.getComputedStyle(n[0]).width.replace("px","")})}}V(),i(".questionset",d).addClass("started"),i(".qs-startbutton",d).click((function(){i(this).parents(".intro-page").hide(),i(".questionset",d).show(),o.trigger("quizStarted"),C(r.initialQuestion),event.preventDefault()})).keydown((function(e){switch(e.which){case 13:case 32:i(this).parents(".intro-page").hide(),i(".questionset",d).show(),C(r.initialQuestion),e.preventDefault()}})),r.autoProgression&&r.autoProgression.enabled&&d.find(".h5p-question-check-answer").hide();var u=function(e){e.preventDefault(),r.disableBackwardsNavigation};return i(".progress-dot",d).click(u).keydown((function(e){var t=i(this);switch(e.which){case 13:case 32:u.call(this,e);break;case 37:case 38:var n=t.parent().prev();n.length&&(n.children("a").attr("tabindex","0").focus(),t.attr("tabindex","-1"));break;case 39:case 40:var o=t.parent().next();o.length&&(o.children("a").attr("tabindex","0").focus(),t.attr("tabindex","-1"))}})),C(f,!0),m&&Q(),H(),this.trigger("resize"),this},this.getQuizConfig=function(){return this.params},this.getScore=function(){for(var e=0,t=b.length-1;t>=0;t--)e+=b[t].getScore();return e},this.getMaxScore=function(){for(var e=0,t=b.length-1;t>=0;t--)e+=b[t].getMaxScore();return e},this.totalScore=function(){return this.getMaxScore()},this.getCopyrights=function(){var e,n,i=new H5P.ContentCopyrights;if(void 0!==r.introPage&&void 0!==r.introPage.backgroundImage&&void 0!==r.introPage.backgroundImage.copyright){var o=new H5P.MediaCopyright(r.introPage.backgroundImage.copyright);o.setThumbnail(new H5P.Thumbnail(H5P.getPath(r.introPage.backgroundImage.path,t),r.introPage.backgroundImage.width,r.introPage.backgroundImage.height)),i.addMedia(o)}if(void 0!==r.backgroundImage&&void 0!==r.backgroundImage.copyright){var s=new H5P.MediaCopyright(r.backgroundImage.copyright);s.setThumbnail(new H5P.Thumbnail(H5P.getPath(r.backgroundImage.path,t),r.backgroundImage.width,r.backgroundImage.height)),i.addMedia(s)}for(var a=0;a<b.length;a++){var u=b[a],d=r.questions[a].params;e=void 0,void 0!==u.getCopyrights&&(e=u.getCopyrights()),void 0===e&&(e=new H5P.ContentCopyrights,H5P.findCopyrights(e,d.params,t,{metadata:d.metadata,machineName:d.library.split(" ")[0]}));var c=r.texts.questionLabel+" "+(a+1);void 0!==d.params.contentName?c+=": "+d.params.contentName:void 0!==u.getTitle&&(c+=": "+u.getTitle()),e.setLabel(c),i.addContent(e)}return void 0!==r.endGame.successVideo&&r.endGame.successVideo.length>0&&void 0!==(n=r.endGame.successVideo[0]).copyright&&i.addMedia(new H5P.MediaCopyright(n.copyright)),void 0!==r.endGame.failVideo&&r.endGame.failVideo.length>0&&void 0!==(n=r.endGame.failVideo[0]).copyright&&i.addMedia(new H5P.MediaCopyright(n.copyright)),i},this.getQuestions=function(){return b},this.showSolutions=function(){m=!0};var j=function(e){try{void 0!==e.pause&&(e.pause instanceof Function||"function"==typeof e.pause)&&e.pause()}catch(e){H5P.error(e)}};this.getCurrentState=function(){return{progress:w?b.length-1:f,answers:b.map((function(e){return e.getCurrentState()})),order:u,poolOrder:a}},this.getXAPIData=function(){var e=this.createXAPIEventTemplate("answered");return function(e){var t=e.getVerifiedStatementValue(["object","definition"]);i.extend(t,{interactionType:"compound",type:"http://adlnet.gov/expapi/activities/cmi.interaction",description:{"en-US":""}})}(e),e.setScoredResult(this.getScore(),this.getMaxScore(),this,!0,this.getScore()===this.getMaxScore()),{statement:e.data.statement,children:(this,this.getQuestions().map((function(e){return e.getXAPIData()})))}}},H5P.OERQuiz.prototype=Object.create(H5P.EventDispatcher.prototype),H5P.OERQuiz.prototype.constructor=H5P.OERQuiz}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(624)})()})();