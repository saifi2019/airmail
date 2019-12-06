@SmokeTest
Feature: People feature

  Scenario Outline: Get individual of People
    Given User shall have  individual People "<number>" endpoint
    When Makes get call to individual People endpoint
    Then Response successful  ok
    And  Individual People "<name>" can be read

    Examples:
    |number|name|
    |1|Luke Skywalker|
    |2|C-3PO|
    |3|R2-D2|
    |4|Darth Vader|
    |5|Leia Organa|
    |6|Owen Lars|
    |7|Beru Whitesun lars|
    |8|R5-D4|
    |9|Biggs Darklighter|
    |10|Obi-Wan Kenobi   |






