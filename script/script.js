// let req = new XMLHttpRequest();

// req.onreadystatechange = () => {
//   if (req.readyState == XMLHttpRequest.DONE) {
//     console.log(req.responseText);
//   }
// };

// req.open("GET", "https://api.jsonbin.io/v3/a", true);
// req.setRequestHeader("0q6wuo5bqIRavN1ucOLGaQUnKILG", "");
// req.send();

const postUrl = "https://api.jsonbin.io/b/626e750638be296761fa96c4";
function getNews(url, callMeBack) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      callMeBack(data);
    });
}

function News(_title, _post) {
  this.title = _title;
  this.body = _post;
  return this;
}
getNews(postUrl, (newList) => {
  let returnHTML = "";
  console.log(newList, "test");
  newList.medee.forEach((element) => {
    returnHTML += News(element.mainheader, element.subheader).CreateHTML();
    // console.log(element);
  });
  document.getElementById("posts").innerHTML = returnHTML;
});
// json link https://api.jsonbin.io/b/626e750638be296761fa96c4
