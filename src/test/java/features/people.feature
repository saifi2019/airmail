@SmokeTest
Feature: People feature

  Scenario Outline: Get the list of People
    Given User shall have People endpoint
    When Makes get call to People
    Then Response successful and ok
    And  People "<number>" People "<name>" can be read

    Examples:
    |number|name|
    |0|Luke Skywalker|
    |1|C-3PO|
    |2|R2-D2|
    |3|Darth Vader|
    |4|Leia Organa|
    |5|Owen Lars|
    |6|Beru Whitesun lars|
    |7|R5-D4|
    |8|Biggs Darklighter|
    |9|Obi-Wan Kenobi   |






