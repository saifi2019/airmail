@SmokeTest
Feature: Planets feature

  Scenario Outline: Get the first planet in the array
    Given User shall have "<planetNumber>" endpoint
    When Makes get call for planet
    Then Response should see successful ok
    And  Planet "<ExpectedPlanetName>" can be seen

  Examples:
  |planetNumber|ExpectedPlanetName|
  |1|Tatooine|
  |2|Alderaan|
  |3|Yavin IV|
  |4|Hoth    |
  |5|Dagobah |
  |6|Bespin  |
  |7|Endor   |
  |8|Naboo   |
  |9|Coruscant|
  |10|Kamino  |


