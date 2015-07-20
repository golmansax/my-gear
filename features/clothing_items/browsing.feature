@javascript
Feature: Clothing items browsing

  Scenario: Go to essentials
    Given I have an essential clothing item
    When I go to a list of essentials
    Then the essential item is displayed
