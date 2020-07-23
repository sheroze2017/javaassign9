// // que 1
var main=document.getElementById("main-content")

var p = document.getElementsByTagName("p");
for(i=0;i<=4;i++){
    var contents = p[i].innerHTML;
    console.log(contents + "<br>")
}
    
var clas =document.getElementsByClassName("render")
for(i=0;i<=4;i++){
    var content = clas[i].innerHTML;
    document.write(content + "<br>")
}

var name=document.getElementById("fname").value = "SHEROZE";
var email=document.getElementById("email").value = "sylani2020@gmail.com";
var lname=document.getElementById("last-name").value = "REHMAN";

// // que 2
var fnode = document.getElementById("form-content").nodeType;
document.write("node type=" + fnode + "<br>")
var lnode= document.getElementById("last-name").nodeType;
var d = document.getElementById("last-name");
var z= document.getElementsByTagName('p')
 var z = d.childNodes[0];
 var contents = z.innerHTML;
document.write("last namnode=" + lnode + "<br>")
console.log(contents)

var maincont=document.getElementById("main-content").firstChild.nodeName;
var maincont1=document.getElementById("main-content").lastChild.nodeName;
console.log(maincont)
console.log(maincont1)


var sib=document.getElementById("lastName").nextSibling;
var sib1=document.getElementById("lastName").previousSibling;
console.log(sib)
console.log(sib1)

var ema=document.getElementById("email")
var ema1=ema.parentNode;
console.log(ema1)
var ema2=ema1.nodeType;
console.log(ema2)






