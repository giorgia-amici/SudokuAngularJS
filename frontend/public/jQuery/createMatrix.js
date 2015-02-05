var insertRows = function(){
	myTable.style.color = "black"
	for(var i=0; i < 9; i++ ){
	 var rowNum = "row" + i
	 var cellNum = "cell" + i
	 rowNum = document.getElementById('myTable').insertRow();
	 cellNum = rowNum.insertCell(0);
	 cellNum.innerHTML = 'cio'
	}
}
insertRows()

// var createCells = function(){
// 	for(var i=0; i < 9; i++ ){
// 		var cellNum = "cell" + i
// 		cellNum = rowNum.insertCell(0);
// 	}	
// }

