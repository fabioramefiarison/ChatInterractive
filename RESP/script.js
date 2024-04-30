let d= new Date()
let yr= d.getFullYear();
let month= d.getMonth()+1;

if(month<10){
	month='0'+ month
}
let date = d.getDate();
if (date < 10) {
	date = '0' + date
}
let c_date= yr+ "-" +month+ "-" +date;
document.getElementById('dt').value= c_date;