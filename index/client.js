function newDoc() {
  //shine tsonh uugene
  var doc = document.open("text/html", "replace");
  //tuhain uussen tsonh ruu shine html uugene
  var txt = "<html><body>hello</body></html>";
  //tuuniigee tsonh ruugaa bicheed
  doc.write(txt);
  //tsonhoo haaj baina
  doc.close();
}
