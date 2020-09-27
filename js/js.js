$(document).ready(function(){
  $('.tooltipped').tooltip();
  $('.modal').modal();
  $('.dropdown-trigger').dropdown();
  setTimeout(() => {
    document.getElementById("search").focus();
  }, 200);
  setTimeout(() => {
    M.toast({html: '<p><b>Welcome to the all new Goolag!</b> Everything should be pretty similar to the old website, but if you are confused, you can hover over certain elements to see how to use them.</p>', displayLength: 3000})
    setTimeout(() => {
      M.toast({html: "<p><b>Important Notice: Goolag domain changing soon.</b> Gulag.ga will be going down on <b>1/24/21</b> and will be replaced by a new domain that will be announced here on <b>11/24/20</b>.</p>"})
    }, 5000);
  }, 2000);
});

function option1() {
  $('#mainForm').attr('action', 'no-js');
  $('#mainForm').attr('method', 'get');
  var url = document.getElementById('url').value;
  if(url.substr(0,4) != "http"){
  url = "http://" + url;
  }
  window.location.href= 'https://mail.gulag.ga/wirkus/' + url;
  return false;
}

function option2() {
  document.getElementById("place").value = "2";
  document.getElementById('mainForm').submit();
}

function option3() {
  $('#mainForm').attr('action', 'https://mail.gulag.ga/prox');
  $('#mainForm').attr('method', 'POST');
  document.getElementById('mainForm').submit();
}

function option4() {
  document.getElementById("place").value = "4";
  document.getElementById('mainForm').submit();
}

function search() {
  document.getElementById("place").value = "s";
  document.getElementById('mainForm').submit();
}
//
// function other() {
//   document.getElementById("place").value = "other";
//   document.getElementById('mainForm').submit();
// }
