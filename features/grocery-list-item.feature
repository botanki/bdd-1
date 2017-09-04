Feature: Creating an grocery list item
  As a user
  I should be able to create and set the name, category and quantity of an item

  Scenario: Failing to create an item with no category
    Given that I have entered a name for a new item
    And I have not entered a category for that item
    When I try to create an item with that info
    Then no item should be created
    And I should be notified that a category is needed to be supplied as well

  Scenario: Failing to create an item with no name
    Given that I have not entered a name for a new item
    When I try to create an item with that info
    Then no item should be created
    And I should be notified that a name is needed to be supplied

  Scenario: Failing to create an item with no quantity
    Given that I have entered less than 1 as quantity
    When I try to create an item with that info
    Then no item should be created
    And I should be notified that a quantity of 1 or more must be supplied

  Scenario: Failing to set the name of an item
    Given that I have not entered a name for an item
    When I try to set the name of an item to that
    Then nothing should happen to the item
    And I should be notified that a valid name is needed to be supplied

  Scenario: Failing to set the quantity of an item
    Given that I have entered a quantity of an item to be less than 1
    When I try to set the quantity of an item to that
    Then nothing should happen to the item
    And I should be notified that quantity can not be less than 1