annaPortfolio.controller('MainController', ['$scope','$routeParams','$rootScope', 'Model',
	function($scope, $routeParams, $rootScope, Model) {
	//Initial Variables

	$scope.getSubject = function() { 
		return Model.getAllSubjects();
		console.log(Model.getAllSubjects());
	} 

	

}]); 

$(function() {
	$('.pop').on('click', function() {
		$('.imagepreview').attr('src', $(this).find('img').attr('src'));
		$('#imagemodal').modal('show');   
	});		
});