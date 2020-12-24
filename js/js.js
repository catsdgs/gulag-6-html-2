var wait = Math.floor(Math.random() * 12000) + 0;
$(document).ready(function(){
  $('.tooltipped').tooltip();
  $('.modal').modal();
  $('.dropdown-trigger').dropdown();
  $('select').formSelect();
  setTimeout(() => {
    document.getElementById("url").focus();
  }, 200);
  setTimeout(() => {
     M.toast({html: "<h6>Welcome to the new website! All subdomains have also changed, so if you had any bookmarks for specific websites those will no longer work and will have to be changed. Click <a class='modal-trigger' href='#newContentModal'><b>here</b></a> to view all new changes.</h6>"})
  }, 1000);
});

$(document).ready(function() {
  const href = window.location.href
  const urlID = href.split('/').reverse()[0]
  if(urlID === '#formSubmitted') {
    M.toast({html: "<p>Form submitted successfuly</p>"});

  } else if (urlID === '#noCaptcha') {
    M.toast({html: "<p><b>Error: </b>You did not complete the Captcha</p>"});

  } else if (urlID.indexOf("url=") >= 0){
    M.toast({html: '<p><b>Error: </b>You need to select an option and not use enter. In the future, you can to Tab + Enter to unblock quicker.</p>'});
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
      window.location.href= 'https://option1.goolag.app/wirkus/' + url;
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
      $('#mainForm').attr('action', 'https://option2.goolag.app/createSession');
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
      $('#mainForm').attr('action', 'https://option3.goolag.app/prox');
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
      window.location.href= 'https://option4.goolag.app/wirkus/' + url;
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
      window.location.href = 'https://translate.google.ca/translate?hl=&sl=en&tl=en&u=' + url + '&anno=2';
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
