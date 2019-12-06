@SmokeTest
Feature: Planets feature

  Scenario Outline: Get the list of Planets
    Given User shall have planets endpoint
    When Makes get call
    Then Response successful ok
    And  Planet "<number>" planet "<name>" can be read

    Examples:
      |number|name|
      |0|Alderaan|
      |1|Yavin IV|
      |2|Hoth|
      |3|Dagobah|
      |4|Bespin|
      |5|Endor|
      |6|Naboo|
      |7|Coruscant|
      |8|Kamino|
      |9|Geonosis|



