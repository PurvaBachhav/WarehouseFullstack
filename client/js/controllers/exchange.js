// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-example-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app')
  .controller('ExchangeController', ['$scope','$interval', '$state', 'Transaction', function($scope,$interval,
      $state, Transaction) {
        $scope.amount = 0;

    $scope.usd_jpy_bid = function(){ 
        if($scope.amount>0){
            console.log($scope.name);
            addRecord({"Order":"Bid","Currencies":"USD/JPY","Amount":$scope.amount,"Price":$scope.name,"DateTime":new Date()});
        }
        else{alert("Please Enter Amount");}
    }

    $scope.usd_jpy_ask = function(){ 
        if($scope.amount>0){
            console.log($scope.name2);
            addRecord({"Order":"Ask","Currencies":"USD/JPY","Amount":$scope.amount,"Price":$scope.name2,"DateTime":new Date()});
        }
         else{alert("Please Enter Amount");}
    }
    
    $scope.aud_jpy_bid = function(){ 
        if($scope.amount>0){
            console.log($scope.name3);
            addRecord({"Order":"Bid","Currencies":"AUD/JPY","Amount":$scope.amount,"Price":$scope.name3,"DateTime":new Date()});
        }
         else{alert("Please Enter Amount");}
    }

    $scope.aud_jpy_ask = function(){ 
        if($scope.amount>0){
            console.log($scope.name4);
            addRecord({"Order":"Ask","Currencies":"AUD/JPY","Amount":$scope.amount,"Price":$scope.name4,"DateTime":new Date()});
        }
        else{alert("Please Enter Amount");}
    }

	$scope.eur_cad_bid = function(){ 
        if($scope.amount>0){
            console.log($scope.name5);
            addRecord({"Order":"Bid","Currencies":"EUR/CAD","Amount":$scope.amount,"Price":$scope.name5,"DateTime":new Date()});

        }
        else{alert("Please Enter Amount");}
    }

    $scope.eur_cad_ask = function(){ 
        if($scope.amount>0){
            console.log($scope.name6);
            addRecord({"Order":"Ask","Currencies":"EUR/CAD","Amount":$scope.amount,"Price":$scope.name6,"DateTime":new Date()});

        }
        else{alert("Please Enter Amount");}
    }

	$scope.usd_cny_bid = function(){ 
        if($scope.amount>0){
            console.log($scope.name7);
            addRecord({"Order":"Bid","Currencies":"USD/CNY","Amount":$scope.amount,"Price":$scope.name7,"DateTime":new Date()});
        }
        else{alert("Please Enter Amount");}
    }

    $scope.usd_cny_ask = function(){ 
        if($scope.amount>0){
            console.log($scope.name8);
            addRecord({"Order":"Ask","Currencies":"USD/CNY","Amount":$scope.amount,"Price":$scope.name8,"DateTime":new Date()});

        }
        else{alert("Please Enter Amount");}
    }

	$scope.cad_cny_bid = function(){ 
        if($scope.amount>0){
            console.log($scope.name9);
            addRecord({"Order":"Bid","Currencies":"CAD/CNY","Amount":$scope.amount,"Price":$scope.name9,"DateTime":new Date()});

        }
        else{alert("Please Enter Amount");}
    }

    $scope.cad_cny_ask = function(){ 
        if($scope.amount>0){
            console.log($scope.name10);
            addRecord({"Order":"Ask","Currencies":"CAD/CNY","Amount":$scope.amount,"Price":$scope.name10,"DateTime":new Date()});

        }
        else{alert("Please Enter Amount");}
    }
    
    $scope.gbp_usd_bid = function(){ 
        if($scope.amount>0){
            console.log($scope.name11);
            addRecord({"Order":"Bid","Currencies":"GBP/USD","Amount":$scope.amount,"Price":$scope.name11,"DateTime":new Date()});

        }
    }

    $scope.gbp_usd_ask = function(){ 
        if($scope.amount>0){
            console.log($scope.name12);
            addRecord({"Order":"Ask","Currencies":"GBP/USD","Amount":$scope.amount,"Price":$scope.name12,"DateTime":new Date()});

        }
        else{alert("Please Enter Amount");}
        
    }



    $scope.records = [];
    function getRecords() {
      Transaction
        .find()
        .$promise
        .then(function(results) {
          $scope.records = results;
        });
    }
    getRecords();

    var addRecord = function(record) {
    	console.log(record);
      Transaction
        .create(record)
        .$promise
        .then(function(record) {
          getRecords();
        });
    };

    $scope.removeRecord = function(item) {
      Transaction
        .deleteById(item)
        .$promise
        .then(function() {
          getRecords();
        });
    };



    $scope.myFunction = function(){ 
        $scope.name=(Math.random() * (10 - 5 + 1)).toFixed(4);
        $scope.name2=(Math.random() * (10 - 5 + 1)).toFixed(4);
        while($scope.name2 < $scope.name){
            $scope.name2 = (Math.random() * (10 - 5 + 1)).toFixed(4);
        }
        
        $scope.name3=(Math.random() * (10 - 5 + 1)).toFixed(4);
        $scope.name4=(Math.random() * (10 - 5 + 1)).toFixed(4);
        while($scope.name4 < $scope.name3){
            $scope.name4 = (Math.random() * (10 - 5 + 1)).toFixed(4);
        }
        
        $scope.name5=(Math.random() * (10 - 5 + 1)).toFixed(4);
        $scope.name6=(Math.random() * (10 - 5 + 1)).toFixed(4);
        while($scope.name6 < $scope.name5){
            $scope.name6 = (Math.random() * (10 - 5 + 1)).toFixed(4);
        }
        
        $scope.name7=(Math.random() * (10 - 5 + 1)).toFixed(4);
        $scope.name8=(Math.random() * (10 - 5 + 1)).toFixed(4);
        while($scope.name8 < $scope.name7){
            $scope.name8 = (Math.random() * (10 - 5 + 1)).toFixed(4);
        }
        
        $scope.name9=(Math.random() * (10 - 5 + 1)).toFixed(4);
        $scope.name10=(Math.random() * (10 - 5 + 1)).toFixed(4);
        while($scope.name10 < $scope.name9){
            $scope.name10 = (Math.random() * (10 - 5 + 1)).toFixed(4);
        }
        
        $scope.name11=(Math.random() * (10 - 5 + 1)).toFixed(4);
        $scope.name12=(Math.random() * (10 - 5 + 1)).toFixed(4);
        while($scope.name12 < $scope.name11){
            $scope.name12 = (Math.random() * (10 - 5 + 1)).toFixed(4);
        }
        
    }
    $interval( function(){ $scope.myFunction(); }, 500);
    

  }]);
