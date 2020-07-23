// // que 1
// function power(c,d){
//     sum=1
// for (i=1;i<=d;i++){ 
//     sum=sum*c
//     }
//     alert(sum)
// }

// var a=prompt("enter a:")
// var b=prompt("enter b:")
// power(a,b)

// // que no 2
// function leap(z) {
//     if((z%4===0 && z%100!==0) || (z%400===0)){
//     alert("leap year")
//     }
//     else(alert("not a leap year"))
// }

// var year=prompt("enter year")
// leap(year)

// // que no 3
// function s(x,y,z) {
//     u=(x+y+z)/2
//     var area=u*(u-x)*(u-y)*(u-z);
//     alert(area)
// }

// var a=+prompt("enter a:")
// var b=+prompt("enter b:")
// var c=+prompt("enter c:")
// s(a,b,c);

// // que no 4
// function avg(m1,m2,m3) {
//     alert((m1+m2+m3)/3)
// }
// function per(m1,m2,m3,total) {
//     alert(((m1+m2+m3)/total)*100)
// }
// function main() {
// total=300
// var m1=+prompt("enter marks sub 1 ")
// var m2=+prompt("enter marks sub 2 ")
// var m3=+prompt("enter marks sub 3 ")
// avg(m1,m2,m3)
// per(m1,m2,m3,total)
// }
// main();

// // que no 5
// function index(str,let) {
// for (var i = 0; i < str.length; i++) {
//     if(let===str.charAt(i))
//     alert(i)
// }
   
// }
// var que="welcome to syalani welfare";
// var ask=prompt("welcome to syalani welfare","enter character you want to know indexof")
// index(que,ask);

// // que no 6
// function index(str) {
//     for (var i = 0; i < str.length; i++) {
//         if(str.charAt(i)==="a"||str.charAt(i)==="e"||str.charAt(i)==="i"||str.charAt(i)==="o"||str.charAt(i)==="u"){
//             var z=str.replace(str.charAt(i),"")
//         }
//     }
//     alert(z)  
//     }
//     var que="welcome to syalani welfare";
//     alert("welcome to syalani welfare")
//     alert("after removing vowels")
//     index(que);

// // que no 7
// function index(str) {
//     var res = str.match(/[aeiou]{2}/g);
//     return res ? res.length : 0;
//   }  
// var que="Pleases read this application and give me gratuity";
// alert("“Pleases read this application and give me gratuity”")
// alert("finding two attach vowels")
// var found = index(que);
// alert(found);


// // que no 8
// function meter(m){
//     var ans=m*1000
//     alert("meter="+ ans)
// }
// function cm(m){
//     var ans1=m*100000
//     alert("cm="+ ans1)
// }
// function ft(m){
//     var ans2=m*1000*3.5
//     alert("ft=" +ans2)
// }
// function inch(m){
//     var ans3=(m*100000)/2.54
//     alert("inch=" +ans3)
// }
// var ask=prompt("enter distance bw two cities(km)");
// meter(ask);
// cm(ask);
// ft(ask);
// inch(ask);

// // que no 9
// var over=prompt("enter amount of our worked to calculate overtime","only applicable over 40hrs")
// if(over>=40){
//     var no=over-40
//     var nno=no*12
//     alert(nno)
// }
// else(alert("you need more hrs to work"))

// // que no 10
// var curr=prompt("enter amount of currency")
// var z100,z10,z50
// z100=Math.floor(curr/100)
// var z500=curr-(z100*100)
// if(z500>=50){
//     z50=Math.floor(z500/50)
// }
// var z101=curr-((z100*100)+(z50*50))
// z10=Math.floor(z101/10)
// alert("you will have " + z100 + " hundred notes " + z50 + " fifty notes " + z10 + " ten notes ")




