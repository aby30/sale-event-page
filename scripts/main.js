
var fomoSpr = angular.module('fomo', []);
fomoSpr.run(['$http', function ($http) {
    $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}]);
fomoSpr.filter('trustHtml', [
        '$sce',
        function($sce) {
            return function(value) {
                return $sce.trustAs('html', value);
            }
        }
    ]);
fomoSpr.controller('mainController', ['$rootScope', '$scope', '$http', '$window', 'mainService', '$timeout', '$interval', '$sce', function ($rootScope, $scope, $http, $window, mainService, $timeout, $interval, $sce) {

  var getUserBookings = function() {

    mainService.getBottomStripMsgs().then(function(response) {
      // if (response.status == 200 && response.data.status == 1) {
      if (response.status == 200) {
        $scope.allMsgs = response.data.data;

      } else if (response.status == 204) {

      }
    }, function(error) {
      if (error.status == 422) {

      } else if (error.status == 401) {

      }
    });
  };

  // getUserBookings();



  var getBannerInfo = function() {

    mainService.bannerDetails().then(function(response) {

      if (response.status == 200) {
        $scope.bannerInfo = response.data;
        $scope.noFadeBanner = true;
        if ($scope.bannerInfo.data.isPrimary == 1) {
          $scope.noFadeBanner = true;
        } else if($scope.bannerInfo.data.isPrimary == 0) {

          $timeout(function() { $scope.noFadeBanner = false },9000);
        }
      } else if (response.status == 204) {

      }
    }, function(error) {
      if (error.status == 422) {

      } else if (error.status == 401) {

      }
    });
  };

  // getBannerInfo();


  var shopInfo = function() {

    mainService.getShopStatuses().then(function(response) {

      if (response.status == 200) {
        $scope.shopStatus = response.data.data;

      } else if (response.status == 204) {

      }
    }, function(error) {
      if (error.status == 422) {

      } else if (error.status == 401) {

      }
    });
  };

  // shopInfo();



  var getOfferFacts = function() {

    mainService.getOfferFacts().then(function(response) {

      if (response.status == 200) {
        $scope.allOfferFact = response.data.data;

      } else if (response.status == 204) {

      }
    }, function(error) {
      if (error.status == 422) {

      } else if (error.status == 401) {

      }
    });
  };

  // getOfferFacts();


  // $interval(shopInfo, 5000);
  // $interval(getBannerInfo, 60000);
  // $interval(getOfferFacts, 11000);
  // $interval(getUserBookings, 13000);

}]);

fomoSpr.service('mainService', ['$http', function($http) {

  this.getBottomStripMsgs = function() {
    return $http({
      url: "https://marketofindia.unplannedweb.com/site/carousal",
      method: 'GET',

      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      // transformRequest: function(obj) {
      //   var str = [];
      //   for (var p in obj)
      //     str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      //   return str.join("&");
      // }
    });
  };


  this.bannerDetails = function() {
    return $http({
      url: "https://marketofindia.unplannedweb.com/site/banner",
      method: 'GET',

      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      // transformRequest: function(obj) {
      //   var str = [];
      //   for (var p in obj)
      //     str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      //   return str.join("&");
      // }
    });
  };

  this.getShopStatuses = function() {
    return $http({
      url: "https://marketofindia.unplannedweb.com/site/shop-status",
      method: 'GET',

      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      // transformRequest: function(obj) {
      //   var str = [];
      //   for (var p in obj)
      //     str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      //   return str.join("&");
      // }
    });
  };


  this.getOfferFacts = function() {
    return $http({
      url: "https://marketofindia.unplannedweb.com/site/offers-facts",
      method: 'GET',

      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      // transformRequest: function(obj) {
      //   var str = [];
      //   for (var p in obj)
      //     str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      //   return str.join("&");
      // }
    });
  };

}]);
