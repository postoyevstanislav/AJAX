const serveResponse = document.querySelector("#response");

const main = document.forms.ourForm.onsubmit = e => {
  e.preventDefault();

  const userInput = document.forms.ourForm.ourForm__inp.value;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://127.0.0.1:5500/2ndWay/");
  xhr.send("ourForm__inp=" + userInput);
  xhr.onreadystatechange = handleFunc;
  function handleFunc() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('current status:', xhr.status);
    } else if (xhr.status === 405){
        console.log('loh')
    }
  }
};
