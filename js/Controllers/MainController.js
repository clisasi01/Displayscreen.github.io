

app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This Month\'s Bestsellers'; 
  $scope.promo = 'The most popular books this month.';
  $scope.products = [
  	{ 
    	name: 'DEVOPS', 
    	price: 19, 
    	pubdate: new Date('2014', '03', '08'), 
    	cover: 'img/UC.jpg' 
  	}, 
  	{ 
    	name: 'Number2', 
    	price: 8, 
    	pubdate: new Date('2013', '08', '01'), 
    	cover: 'img/hp_enterprise.jpg' 
  	}
	
	{ 
    	name: 'Number2', 
    	price: 8, 
    	pubdate: new Date('2013', '08', '01'), 
    	cover: 'img/hp_enterprise.jpg' 
  	}
	
	{ 
    	name: 'Number2', 
    	price: 8, 
    	pubdate: new Date('2013', '08', '01'), 
    	cover: 'img/hp_enterprise.jpg' 
  	}
	
	{ 
    	name: 'Number2', 
    	price: 8, 
    	pubdate: new Date('2013', '08', '01'), 
    	cover: 'img/hp_enterprise.jpg' 
  	}
  ]
}]);
