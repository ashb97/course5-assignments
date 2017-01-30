(function(){
  'use strict';

angular.module('ShoppingListCheckOff',[])
       .controller('ToBuyController',ToBuyController)
       .controller('AlreadyBoughtController',AlreadyBoughtController)
       .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var buyItem = this;
  buyItem.showListItems = ShoppingListCheckOffService.getItems.buylist;

  buyItem.removeItem = function(itemIndex) {
    try {
       ShoppingListCheckOffService.checkOff(buyItem.showListItems[itemIndex].name,
               buyItem.showListItems[itemIndex].quantity,itemIndex);
    } catch (error){
      buyItem.errorMessage = error.message;
    }
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.showListItems = ShoppingListCheckOffService.getItems.boughtlist;
};

function ShoppingListCheckOffService() {
  var service = this;

  var ToBuy = [
    {
      name : "Cookies",
      quantity : "3"
    },
    {
      name : "Cakes",
      quantity : "5"
    },
    {
      name : "Soft drinks",
      quantity : "10"
    },
    {
      name : "Chips",
      quantity : "5"
    },
    {
      name : "Nachos",
      quantity : "2"
    }
  ];

  var AlreadyBought = [];

  service.checkOff = function(itemName,quantity,itemIndex) {
    var item = {
      name: itemName,
      quantity: quantity
    };
      AlreadyBought.push(item);
      ToBuy.splice(itemIndex,1);
      if(ToBuy.length === 0){
        throw new Error("Everything is bought!");
      }
  }

  service.getItems = {
      buylist: ToBuy,
      boughtlist:AlreadyBought
  };

}

})()
