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

			// for (j = 0; j < input[i].length; j += 1) {
			// 	input[i][j] = (input[i][j] === '-' || input[i][j] === null) ? null : Number(input[i][j]);


			 // this.matrix = new Array(81);
			 // for (var i = 0; i < 9; i++)
                // for (var j = 0; j < 9; j++)
                    // matrix[i * 9 + j] = (i * 3 + Math.floor(i / 3) + j) % 9 + 1;