$(document).ready(function(){
var query = getQueryParams(document.location.search);
var input = query.query
var place = query.place
var wait = Math.floor(Math.random() * 8000) + 0
setTimeout(() => {
// error
if ((input === '') || (place === '')) {
  M.toast({html: '<p>You did not enter anything into the input or an error occured Returning to main page...</p>', displayLength: 3000})
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 3000);
// option 1
} else if ((input !== '') && (place === '1')) {
  if (input.substr(0, 4) != "http") {
    input = "http://" + input;
  }
  window.location.href = 'https://mail.gulag.ga/wirkus/' + input;
  return false;
//option 2
} else if ((input !== '') && (place === '2')) {
  if (input.substr(0, 4) != "http") {
    input = "http://" + input;
  }
  window.location.href = 'https://drive.gulag.ga/wirkus/' + input;
  return false;
//option 3
} else if ((input !== '') && (place === '3')) {
  if (input.substr(0, 4) != "http") {
    input = "http://" + input;
  }
  window.location.href = 'https://classroom.gulag.ga/wirkus/' + input;
  return false;
//option 4
} else if ((input !== '') && (place === '4')) {
  if (input.substr(0, 4) != "http") {
    input = "http://" + input;
  }
  window.location.href = 'https://docs.gulag.ga/wirkus/' + input;
  return false;
//search
}
}, wait);
});

function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}
