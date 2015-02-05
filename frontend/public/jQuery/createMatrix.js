var insertNewRow = function(){
	var x=document.getElementById('myTable').insertRow();
	var y = x.insertCell(0);
	var z = x.insertCell(0);
	y.innerHTML="";
	z.innerHTML="";
}