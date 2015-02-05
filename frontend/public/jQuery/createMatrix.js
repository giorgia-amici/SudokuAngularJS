var insertRows = function(){
	myTable.style.color = "blue"
	for(var i=0; i < 9; i++ ){
	 var rowNum = "row" + i
	 rowNum = document.getElementById('myTable').insertRow();
	 console.log(rowNum);
	}
	// var y = x.insertCell(0);
	// var z = x.insertCell(0);
	// var f = x.insertCell(0);
	// var g = x.insertCell(0);
}
var insertCells = function(){
	insertRows()
	
}
insertCells()