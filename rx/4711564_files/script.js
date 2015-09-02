function quote(text) {
  if (document.selection) {
    document.post.com.focus();
    sel = document.selection.createRange();
    sel.text = ">>" + text + "\n";
  } else if (document.post.com.selectionStart || document.post.com.selectionStart == "0") {
    var startPos = document.post.com.selectionStart;
    var endPos = document.post.com.selectionEnd;
    document.post.com.value = document.post.com.value.substring(0, startPos) + ">>" + text + "\n" + document.post.com.value.substring(endPos, document.post.com.value.length);
  } else {
    document.post.com.value += ">>" + text + "\n";
  }
}

function replyhl(id) {
  var tdtags=document.getElementsByTagName("td");
  for (i=0; i<tdtags.length; i++){
    if (tdtags[i].className=="replyhl")
      tdtags[i].className = "reply";
    if (tdtags[i].id == id)
      tdtags[i].className = "replyhl";
  }
}

function repquote(rep) {
  if (rep.match(/q([0-9]+)/)) {
    rep=rep.replace(/q/,"");
    if(document.post.com.value=="") {
      quote(rep);
    }
  }
}

function init() {
  arr=location.href.split(/#/);
  if (arr[1]) {
  if (arr[1].match(/(q)?([0-9]+)/)) {
    rep=arr[1];
    re=arr[1].replace(/q/,"");
    replyhl(re);
    repquote(rep);
  }
  }
}

function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

window.onload = function(e) {
  var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);
}

window.onunload = function(e) {
  var title = getActiveStyleSheet();
  createCookie("style", title, 365);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);

onload=init;
