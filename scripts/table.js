var app = angular.module("myapp", []);

// "use strict"
// self execution
// $broadcast, $emit

app.controller("MyCtrl", function($scope, DataSource) {
		$scope.apps = DataSource.getApps();
		$scope.query = "";
		$scope.filterPropVal = 'All';
		$scope.orderPropVal = 'All';

		$scope.showDetailedInfo = function(p){
			console.log(p);
			$scope.detailedPersonInfo = p;
		}
		
    $scope.filters = {
			'all': 'all',
			'sa': 'appCategory1',
			'uc1': 'appCategory2',
			'uc2': 'appCategory3'
		};
		
		$scope.setFilterProp = function(){
			if( this.filterVal === 'all' ){
				$scope.filterProp = '';
				$scope.filterPropVal = "All";
				return ;
			}else {
				$scope.filterProp = this.filterVal;
				$scope.filterPropVal = $scope.filterProp
			}
		};
		
		$scope.orderProps = {
			'all': 'all',
			'name': 'itemName',
			'category': 'appCategory',
			'p1': 'p1'
		};
		
		$scope.setOrderProp = function(){
			if( this.orderVal === 'all' ){
				$scope.orderProp = '';
				$scope.orderPropVal = "All";
				return;
			}else {
				$scope.orderProp = this.orderVal;
				$scope.orderPropVal = $scope.orderProp
			}
		};
})

