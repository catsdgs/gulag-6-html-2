var wait = Math.floor(Math.random() * 8000) + 0;
$(document).ready(function(){
  $('.tooltipped').tooltip();
  $('.modal').modal();
  $('.dropdown-trigger').dropdown();
  $('select').formSelect();
  setTimeout(() => {
    document.getElementById("url").focus();
  }, 200);
  // setTimeout(() => {
  //   M.toast({html: '<p><b>Welcome to the all new Goolag!</b> Everything should be pretty similar to the old website, but if you are confused, you can hover over certain elements to see how to use them.</p>', displayLength: 3000})
  //   setTimeout(() => {
  //     M.toast({html: "<p><b>Important Notice: Goolag domain changing soon.</b> Gulag.ga will be going down on <b>1/24/21</b> and will be replaced by a new domain that will be announced here on <b>11/24/20</b>.</p>"})
  //   }, 5000);
  // }, 2000);
});

$(document).ready(function() {
  const href = window.location.href
  const urlID = href.split('/').reverse()[0]
  if(urlID === '#formSubmitted') {
    M.toast({html: "<p>Form submitted successfuly</p>"});

  } else if (urlID === '#noCaptcha') {
    M.toast({html: "<p>You did not complete the Captcha</p>"});

  } else {

  };
  history.pushState("", document.title, window.location.pathname);
});

function option1() {
  var url = document.getElementById('url').value
  if (url === '') {
  M.toast({html: "<p><b>Error: </b>You did not enter anything into the input</p>"})
  } else {
    showFrame();
    setTimeout(() => {
      $('#mainForm').attr('action', 'no-js');
      $('#mainForm').attr('method', 'get');
      if(url.substr(0,4) != "http"){
        url = "http://" + url;
      }
      window.location.href= 'https://mail.gulag.ga/wirkus/' + url;
      return false;
    }, wait);
}
}

function option2() {
  var url = document.getElementById('url').value
  if (url === '') {
  M.toast({html: "<p><b>Error: </b>You did not enter anything into the input</p>"})
  } else {
    showFrame();
    setTimeout(() => {
      $('#mainForm').attr('action', 'https://drive.gulag.ga/createSession');
      $('#mainForm').attr('method', 'POST');
      document.getElementById('mainForm').submit();
    }, wait);
}
}

function option3() {
  var url = document.getElementById('url').value
  if (url === '') {
    M.toast({html: "<p><b>Error: </b>You did not enter anything into the input</p>"})
  } else {
    showFrame();
    setTimeout(() => {
      $('#mainForm').attr('action', 'https://classroom.gulag.ga/prox');
      $('#mainForm').attr('method', 'POST');
      document.getElementById('mainForm').submit();
    }, wait);
}
}

function option4() {
  var url = document.getElementById('url').value
  if (url === '') {
    M.toast({html: "<p><b>Error: </b>You did not enter anything into the input</p>"})
  } else {
    showFrame();
    setTimeout(() => {
      $('#mainForm').attr('action', 'no-js');
      $('#mainForm').attr('method', 'get');
      if(url.substr(0,4) != "http"){
        url = "http://" + url;
      }
      window.location.href= 'https://docs.gulag.ga/wirkus/' + url;
      return false;
    }, wait);
}
}

function searchIt() {
  var url = document.getElementById('url').value
  if (url === '') {
    M.toast({html: "<p><b>Error: </b>You did not enter anything into the input</p>"})
  } else {
    showFrame();
    setTimeout(() => {
      $('#mainForm').attr('action', 'no-js');
      $('#mainForm').attr('method', 'get');
      window.location.href= 'https://www.startpage.com/do/dsearch?query=' + url;
    }, wait);
}
}

function translate() {
  var url = document.getElementById('url').value
  if (url === '') {
    M.toast({html: "<p><b>Error: </b>You did not enter anything into the input</p>"})
  } else {
    showFrame();
    setTimeout(() => {
      if (url.substr(0, 4) != "http") {
        url = "http://" + url;
      }
      window.location.href = 'https://translate.google.ca/translate?sl=auto&tl=en&u=' + url;
      return false;
    }, wait);
}
}

function otherSearchIt() {
  var url = document.getElementById('url').value
  if (url === '') {
    M.toast({html: "<p><b>Error: </b>You did not enter anything into the input</p>"})
  } else {
    showFrame();
    setTimeout(() => {
      $('#mainForm').attr('action', 'no-js');
      $('#mainForm').attr('method', 'get');
      window.location.href= 'https://duckduckgo.com/?q=' + url;
    }, wait);
}
}

function showFrame() {
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "submit.html");
    ifrm.style.width = "100%";
    ifrm.style.height = "100%";
    ifrm.style.position = "fixed";
    ifrm.style.top = "0px";
    ifrm.style.left = "0px";
    ifrm.style.bottom = "0px";
    ifrm.style.right = "0px";
    ifrm.style.margin = "0";
    ifrm.style.padding = "0";
    ifrm.style.overflow = "hidden";
    ifrm.style.zIndex = "9999";
    document.body.appendChild(ifrm);
}

//
// function other() {
//   document.getElementById('mainForm').submit();
// }

//Pop-under window- By JavaScript Kit
//Credit notice must stay intact for use
//Visit http://javascriptkit.com for this script

//specify page to pop-under
var popunder="https://www.purevpn.com/order-now.php?aff=44637&amp;a_bid=920607c7"

//specify popunder window features
//set 1 to enable a particular feature, 0 to disable
var winfeatures="width=800,height=510,scrollbars=1,resizable=1,toolbar=1,location=1,menubar=1,status=1,directories=0"

//Pop-under only once per browser session? (0=no, 1=yes)
//Specifying 0 will cause popunder to load every time page is loaded
var once_per_session=0

///No editing beyond here required/////

function get_cookie(Name) {
  var search = Name + "="
  var returnvalue = "";
  if (document.cookie.length > 0) {
    offset = document.cookie.indexOf(search)
    if (offset != -1) { // if cookie exists
      offset += search.length
      // set index of beginning of value
      end = document.cookie.indexOf(";", offset);
      // set index of end of cookie value
      if (end == -1)
         end = document.cookie.length;
      returnvalue=unescape(document.cookie.substring(offset, end))
      }
   }
  return returnvalue;
}

function loadornot(){
if (get_cookie('popunder')==''){
loadpopunder()
document.cookie="popunder=yes"
}
}

function loadpopunder(){
win2=window.open(popunder,"",winfeatures)
win2.blur()
window.focus()
}

if (once_per_session==0)
loadpopunder()
else
loadornot()
