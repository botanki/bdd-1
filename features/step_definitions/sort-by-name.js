let assert = require('assert');
let {
  defineSupportCode
} = require('cucumber');
let GroceryList = require('../../grocery-list.js');
let GroceryListItem = require('../../grocery-list-item.js');

defineSupportCode(function({
  Given,
  When,
  Then
}) {

  // given = förberedelser
  // when = utför koden. nånting händer.
  // then = blev resultatet av When det vi förväntar oss ska hända

  // Scenario: Sort grocery-list by ascending name

  Given('it\'s not already sorted by ascending name', function() {
    let items = this.list.items;

    if (isSorted(items) && items.length > 1) {
      let tmp = items[0];
      items[0] = items[1];
      items[1] = tmp;
    }

    function isSorted(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
          return true
        } else {
          return false
        }
      }
    }
  });

  When('I click the sorting button for name', function() {
    this.list.sortByCategory();
  });


  Then('the list should be sorted by ascending name', function() {
    assert.deepEqual(this.list.items, this.list.items.sort((a, b) => {
      return a.category < b.category
    }), 'Items not sorted ascending!');
  });


  Given('it\'s sorted by ascending name', function() {
    this.list.items.sort((a, b) => {
      return a.category > b.category
    });
  });


  Then('the list should be sorted by decending name', function() {
    assert.deepEqual(
      this.list.items, this.list.items.slice().reverse(),
      'Items not sorted descending!'
    );
  });

  Then('nothing should happen', function() {
    assert.doesNotThrow(
      () => {
        this.list.sortByCategory()
      },
      'nothing to see'
    );
  });

});
