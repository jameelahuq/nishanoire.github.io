import angular from "angular";
import _ from "lodash";
import http from "http";

var app = angular.module("planets", []);


app.controller("planet-drop-down", ($scope, $http) => { // serviceProvider, argument
  //$scope.planets = [];
  //planetService.getPlanets((error) => {
  //  if(!error) {
  //    $scope.planets = planetService.planets;
  //    console.log($scope.planets);
  //  }
  //});
  $scope.planetArray = [];
  $scope.getPlanetsOnPage = (url) => {
    $http.get(url).success((data) => {
      console.log(data.results);
      $scope.planetArray.push.apply($scope.planetArray, data.results);
      if(data.next !== null) {
        //console.log(data.next);
        $scope.getPlanetsOnPage(data.next);
      }
    });
    //console.log($scope.planetArray[0].name);
  };
  $scope.getPlanetsOnPage("http://swapi.co/api/planets/");
  console.log($scope.planetArray);

//});

//we make this a dependency of the controller
//app.service("planetService", ($http) => {
//  this.planets = [];
//  this.getPlanets = (cb) => {
//    $http.get("http://swapi.co/api/planets/")
//    .success(data => {
//      this.planets = data.results;
//          cb();
//    })
//    .error(error => {
//          console.error(error);
//        });
//  }
//});



});