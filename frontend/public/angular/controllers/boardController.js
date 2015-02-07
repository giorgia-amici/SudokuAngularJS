angular.module('sudoku').controller('createBoard', function($scope){
	
	$scope.grid = new Array(81)
$scope.createMatrix = function(){
	for (var i = 0; i < 9; i++)
    	for (var j = 0; j < 9; j++)
      $scope.grid[i * 9 + j] = (i * 3 + Math.floor(i / 3) + j) % 9 + 1;
	}
$scope.createMatrix()
// console.log($scope.grid, 'matrix')

})