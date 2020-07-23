function showimg(img){
    var modalimg=document.getElementById("modal-img");
    modalimg.src=img.src
}
//font size
function increaseFontSizeBy100px() {
    document.getElementById('a').style.fontSize = "100px";
}
function increaseFontSizeBy1px() {
var font = parseInt($("#b").css('font-size'));

font++;
 document.getElementById('b').style.fontSize =font+ "px";
}