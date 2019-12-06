$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("individual-people.feature");
formatter.feature({
  "line": 2,
  "name": "People feature",
  "description": "",
  "id": "people-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Get individual of People",
  "description": "",
  "id": "people-feature;get-individual-of-people",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User shall have  individual People \"\u003cnumber\u003e\" endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to individual People endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful  ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Individual People \"\u003cname\u003e\" can be read",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "people-feature;get-individual-of-people;",
  "rows": [
    {
      "cells": [
        "number",
        "name"
      ],
      "line": 11,
      "id": "people-feature;get-individual-of-people;;1"
    },
    {
      "cells": [
        "1",
        "Luke Skywalker"
      ],
      "line": 12,
      "id": "people-feature;get-individual-of-people;;2"
    },
    {
      "cells": [
        "2",
        "C-3PO"
      ],
      "line": 13,
      "id": "people-feature;get-individual-of-people;;3"
    },
    {
      "cells": [
        "3",
        "R2-D2"
      ],
      "line": 14,
      "id": "people-feature;get-individual-of-people;;4"
    },
    {
      "cells": [
        "4",
        "Darth Vader"
      ],
      "line": 15,
      "id": "people-feature;get-individual-of-people;;5"
    },
    {
      "cells": [
        "5",
        "Leia Organa"
      ],
      "line": 16,
      "id": "people-feature;get-individual-of-people;;6"
    },
    {
      "cells": [
        "6",
        "Owen Lars"
      ],
      "line": 17,
      "id": "people-feature;get-individual-of-people;;7"
    },
    {
      "cells": [
        "7",
        "Beru Whitesun lars"
      ],
      "line": 18,
      "id": "people-feature;get-individual-of-people;;8"
    },
    {
      "cells": [
        "8",
        "R5-D4"
      ],
      "line": 19,
      "id": "people-feature;get-individual-of-people;;9"
    },
    {
      "cells": [
        "9",
        "Biggs Darklighter"
      ],
      "line": 20,
      "id": "people-feature;get-individual-of-people;;10"
    },
    {
      "cells": [
        "10",
        "Obi-Wan Kenobi"
      ],
      "line": 21,
      "id": "people-feature;get-individual-of-people;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Get individual of People",
  "description": "",
  "id": "people-feature;get-individual-of-people;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have  individual People \"1\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to individual People endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful  ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Individual People \"Luke Skywalker\" can be read",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 36
    }
  ],
  "location": "IndividualPeople.user_shall_have_individual_People_endpoint(String)"
});
formatter.result({
  "duration": 83818041,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPeople.makes_get_call_to_individual_People_endpoint()"
});
formatter.result({
  "duration": 1592419204,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPeople.response_successful_ok()"
});
formatter.result({
  "duration": 1705157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luke Skywalker",
      "offset": 19
    }
  ],
  "location": "IndividualPeople.individual_People_can_be_read(String)"
});
formatter.result({
  "duration": 361764002,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Get individual of People",
  "description": "",
  "id": "people-feature;get-individual-of-people;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have  individual People \"2\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to individual People endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful  ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Individual People \"C-3PO\" can be read",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 36
    }
  ],
  "location": "IndividualPeople.user_shall_have_individual_People_endpoint(String)"
});
formatter.result({
  "duration": 63983,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPeople.makes_get_call_to_individual_People_endpoint()"
});
formatter.result({
  "duration": 502607574,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPeople.response_successful_ok()"
});
formatter.result({
  "duration": 51080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C-3PO",
      "offset": 19
    }
  ],
  "location": "IndividualPeople.individual_People_can_be_read(String)"
});
formatter.result({
  "duration": 9964528,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Get individual of People",
  "description": "",
  "id": "people-feature;get-individual-of-people;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have  individual People \"3\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to individual People endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful  ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Individual People \"R2-D2\" can be read",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 36
    }
  ],
  "location": "IndividualPeople.user_shall_have_individual_People_endpoint(String)"
});
formatter.result({
  "duration": 66456,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPeople.makes_get_call_to_individual_People_endpoint()"
});
formatter.result({
  "duration": 470035704,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPeople.response_successful_ok()"
});
formatter.result({
  "duration": 29781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "R2-D2",
      "offset": 19
    }
  ],
  "location": "IndividualPeople.individual_People_can_be_read(String)"
});
formatter.result({
  "duration": 7403148,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Get individual of People",
  "description": "",
  "id": "people-feature;get-individual-of-people;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have  individual People \"4\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to individual People endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful  ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Individual People \"Darth Vader\" can be read",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 36
    }
  ],
  "location": "IndividualPeople.user_shall_have_individual_People_endpoint(String)"
});
formatter.result({
  "duration": 46408,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPeople.makes_get_call_to_individual_People_endpoint()"
});
formatter.result({
  "duration": 523310691,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPeople.response_successful_ok()"
});
formatter.result({
  "duration": 31086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Darth Vader",
      "offset": 19
    }
  ],
  "location": "IndividualPeople.individual_People_can_be_read(String)"
});
formatter.result({
  "duration": 10237936,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Get individual of People",
  "description": "",
  "id": "people-feature;get-individual-of-people;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have  individual People \"5\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to individual People endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful  ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Individual People \"Leia Organa\" can be read",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 36
    }
  ],
  "location": "IndividualPeople.user_shall_have_individual_People_endpoint(String)"
});
formatter.result({
  "duration": 69731,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPeople.makes_get_call_to_individual_People_endpoint()"
});
formatter.result({
  "duration": 499745569,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPeople.response_successful_ok()"
});
formatter.result({
  "duration": 23909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leia Organa",
      "offset": 19
    }
  ],
  "location": "IndividualPeople.individual_People_can_be_read(String)"
});
formatter.result({
  "duration": 6567570,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Get individual of People",
  "description": "",
  "id": "people-feature;get-individual-of-people;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have  individual People \"6\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to individual People endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful  ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Individual People \"Owen Lars\" can be read",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 36
    }
  ],
  "location": "IndividualPeople.user_shall_have_individual_People_endpoint(String)"
});
formatter.result({
  "duration": 45365,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPeople.makes_get_call_to_individual_People_endpoint()"
});
formatter.result({
  "duration": 531975475,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPeople.response_successful_ok()"
});
formatter.result({
  "duration": 43157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Owen Lars",
      "offset": 19
    }
  ],
  "location": "IndividualPeople.individual_People_can_be_read(String)"
});
formatter.result({
  "duration": 9079843,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Get individual of People",
  "description": "",
  "id": "people-feature;get-individual-of-people;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have  individual People \"7\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to individual People endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful  ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Individual People \"Beru Whitesun lars\" can be read",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 36
    }
  ],
  "location": "IndividualPeople.user_shall_have_individual_People_endpoint(String)"
});
formatter.result({
  "duration": 54605,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPeople.makes_get_call_to_individual_People_endpoint()"
});
formatter.result({
  "duration": 476103161,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPeople.response_successful_ok()"
});
formatter.result({
  "duration": 25280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beru Whitesun lars",
      "offset": 19
    }
  ],
  "location": "IndividualPeople.individual_People_can_be_read(String)"
});
formatter.result({
  "duration": 5721054,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Get individual of People",
  "description": "",
  "id": "people-feature;get-individual-of-people;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have  individual People \"8\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to individual People endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful  ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Individual People \"R5-D4\" can be read",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 36
    }
  ],
  "location": "IndividualPeople.user_shall_have_individual_People_endpoint(String)"
});
formatter.result({
  "duration": 62537,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPeople.makes_get_call_to_individual_People_endpoint()"
});
formatter.result({
  "duration": 470069795,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPeople.response_successful_ok()"
});
formatter.result({
  "duration": 29348,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "R5-D4",
      "offset": 19
    }
  ],
  "location": "IndividualPeople.individual_People_can_be_read(String)"
});
formatter.result({
  "duration": 6383198,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Get individual of People",
  "description": "",
  "id": "people-feature;get-individual-of-people;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have  individual People \"9\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to individual People endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful  ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Individual People \"Biggs Darklighter\" can be read",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 36
    }
  ],
  "location": "IndividualPeople.user_shall_have_individual_People_endpoint(String)"
});
formatter.result({
  "duration": 83504,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPeople.makes_get_call_to_individual_People_endpoint()"
});
formatter.result({
  "duration": 486178875,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPeople.response_successful_ok()"
});
formatter.result({
  "duration": 29458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Biggs Darklighter",
      "offset": 19
    }
  ],
  "location": "IndividualPeople.individual_People_can_be_read(String)"
});
formatter.result({
  "duration": 6414902,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Get individual of People",
  "description": "",
  "id": "people-feature;get-individual-of-people;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have  individual People \"10\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to individual People endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful  ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Individual People \"Obi-Wan Kenobi\" can be read",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 36
    }
  ],
  "location": "IndividualPeople.user_shall_have_individual_People_endpoint(String)"
});
formatter.result({
  "duration": 46847,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPeople.makes_get_call_to_individual_People_endpoint()"
});
formatter.result({
  "duration": 483741327,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPeople.response_successful_ok()"
});
formatter.result({
  "duration": 32242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Obi-Wan Kenobi",
      "offset": 19
    }
  ],
  "location": "IndividualPeople.individual_People_can_be_read(String)"
});
formatter.result({
  "duration": 7124449,
  "status": "passed"
});
formatter.uri("individual-plante.feature");
formatter.feature({
  "line": 2,
  "name": "Planets feature",
  "description": "",
  "id": "planets-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Get the first planet in the array",
  "description": "",
  "id": "planets-feature;get-the-first-planet-in-the-array",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User shall have \"\u003cplanetNumber\u003e\" endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call for planet",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response should see successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"\u003cExpectedPlanetName\u003e\" can be seen",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "planets-feature;get-the-first-planet-in-the-array;",
  "rows": [
    {
      "cells": [
        "planetNumber",
        "ExpectedPlanetName"
      ],
      "line": 11,
      "id": "planets-feature;get-the-first-planet-in-the-array;;1"
    },
    {
      "cells": [
        "1",
        "Tatooine"
      ],
      "line": 12,
      "id": "planets-feature;get-the-first-planet-in-the-array;;2"
    },
    {
      "cells": [
        "2",
        "Alderaan"
      ],
      "line": 13,
      "id": "planets-feature;get-the-first-planet-in-the-array;;3"
    },
    {
      "cells": [
        "3",
        "Yavin IV"
      ],
      "line": 14,
      "id": "planets-feature;get-the-first-planet-in-the-array;;4"
    },
    {
      "cells": [
        "4",
        "Hoth"
      ],
      "line": 15,
      "id": "planets-feature;get-the-first-planet-in-the-array;;5"
    },
    {
      "cells": [
        "5",
        "Dagobah"
      ],
      "line": 16,
      "id": "planets-feature;get-the-first-planet-in-the-array;;6"
    },
    {
      "cells": [
        "6",
        "Bespin"
      ],
      "line": 17,
      "id": "planets-feature;get-the-first-planet-in-the-array;;7"
    },
    {
      "cells": [
        "7",
        "Endor"
      ],
      "line": 18,
      "id": "planets-feature;get-the-first-planet-in-the-array;;8"
    },
    {
      "cells": [
        "8",
        "Naboo"
      ],
      "line": 19,
      "id": "planets-feature;get-the-first-planet-in-the-array;;9"
    },
    {
      "cells": [
        "9",
        "Coruscant"
      ],
      "line": 20,
      "id": "planets-feature;get-the-first-planet-in-the-array;;10"
    },
    {
      "cells": [
        "10",
        "Kamino"
      ],
      "line": 21,
      "id": "planets-feature;get-the-first-planet-in-the-array;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Get the first planet in the array",
  "description": "",
  "id": "planets-feature;get-the-first-planet-in-the-array;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have \"1\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call for planet",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response should see successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"Tatooine\" can be seen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 17
    }
  ],
  "location": "IndividualPlanetsSteps.user_shall_have_endpoint(String)"
});
formatter.result({
  "duration": 108798,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPlanetsSteps.makes_get_call_for_planet()"
});
formatter.result({
  "duration": 451759370,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPlanetsSteps.response_should_see_successful_ok()"
});
formatter.result({
  "duration": 35014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tatooine",
      "offset": 8
    }
  ],
  "location": "IndividualPlanetsSteps.planet_can_be_seen(String)"
});
formatter.result({
  "duration": 5774475,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Get the first planet in the array",
  "description": "",
  "id": "planets-feature;get-the-first-planet-in-the-array;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have \"2\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call for planet",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response should see successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"Alderaan\" can be seen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 17
    }
  ],
  "location": "IndividualPlanetsSteps.user_shall_have_endpoint(String)"
});
formatter.result({
  "duration": 43728,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPlanetsSteps.makes_get_call_for_planet()"
});
formatter.result({
  "duration": 469327011,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPlanetsSteps.response_should_see_successful_ok()"
});
formatter.result({
  "duration": 33063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alderaan",
      "offset": 8
    }
  ],
  "location": "IndividualPlanetsSteps.planet_can_be_seen(String)"
});
formatter.result({
  "duration": 6091333,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Get the first planet in the array",
  "description": "",
  "id": "planets-feature;get-the-first-planet-in-the-array;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have \"3\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call for planet",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response should see successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"Yavin IV\" can be seen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "IndividualPlanetsSteps.user_shall_have_endpoint(String)"
});
formatter.result({
  "duration": 58626,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPlanetsSteps.makes_get_call_for_planet()"
});
formatter.result({
  "duration": 434737814,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPlanetsSteps.response_should_see_successful_ok()"
});
formatter.result({
  "duration": 23321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yavin IV",
      "offset": 8
    }
  ],
  "location": "IndividualPlanetsSteps.planet_can_be_seen(String)"
});
formatter.result({
  "duration": 5225734,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Get the first planet in the array",
  "description": "",
  "id": "planets-feature;get-the-first-planet-in-the-array;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have \"4\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call for planet",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response should see successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"Hoth\" can be seen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 17
    }
  ],
  "location": "IndividualPlanetsSteps.user_shall_have_endpoint(String)"
});
formatter.result({
  "duration": 45033,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPlanetsSteps.makes_get_call_for_planet()"
});
formatter.result({
  "duration": 255106924,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPlanetsSteps.response_should_see_successful_ok()"
});
formatter.result({
  "duration": 28155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hoth",
      "offset": 8
    }
  ],
  "location": "IndividualPlanetsSteps.planet_can_be_seen(String)"
});
formatter.result({
  "duration": 5427331,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Get the first planet in the array",
  "description": "",
  "id": "planets-feature;get-the-first-planet-in-the-array;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have \"5\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call for planet",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response should see successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"Dagobah\" can be seen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 17
    }
  ],
  "location": "IndividualPlanetsSteps.user_shall_have_endpoint(String)"
});
formatter.result({
  "duration": 53201,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPlanetsSteps.makes_get_call_for_planet()"
});
formatter.result({
  "duration": 471680733,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPlanetsSteps.response_should_see_successful_ok()"
});
formatter.result({
  "duration": 25503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dagobah",
      "offset": 8
    }
  ],
  "location": "IndividualPlanetsSteps.planet_can_be_seen(String)"
});
formatter.result({
  "duration": 5028895,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Get the first planet in the array",
  "description": "",
  "id": "planets-feature;get-the-first-planet-in-the-array;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have \"6\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call for planet",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response should see successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"Bespin\" can be seen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 17
    }
  ],
  "location": "IndividualPlanetsSteps.user_shall_have_endpoint(String)"
});
formatter.result({
  "duration": 45687,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPlanetsSteps.makes_get_call_for_planet()"
});
formatter.result({
  "duration": 713910470,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPlanetsSteps.response_should_see_successful_ok()"
});
formatter.result({
  "duration": 32248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bespin",
      "offset": 8
    }
  ],
  "location": "IndividualPlanetsSteps.planet_can_be_seen(String)"
});
formatter.result({
  "duration": 9361729,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Get the first planet in the array",
  "description": "",
  "id": "planets-feature;get-the-first-planet-in-the-array;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have \"7\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call for planet",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response should see successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"Endor\" can be seen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 17
    }
  ],
  "location": "IndividualPlanetsSteps.user_shall_have_endpoint(String)"
});
formatter.result({
  "duration": 48185,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPlanetsSteps.makes_get_call_for_planet()"
});
formatter.result({
  "duration": 344443608,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPlanetsSteps.response_should_see_successful_ok()"
});
formatter.result({
  "duration": 24650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Endor",
      "offset": 8
    }
  ],
  "location": "IndividualPlanetsSteps.planet_can_be_seen(String)"
});
formatter.result({
  "duration": 5470441,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Get the first planet in the array",
  "description": "",
  "id": "planets-feature;get-the-first-planet-in-the-array;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have \"8\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call for planet",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response should see successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"Naboo\" can be seen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 17
    }
  ],
  "location": "IndividualPlanetsSteps.user_shall_have_endpoint(String)"
});
formatter.result({
  "duration": 53415,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPlanetsSteps.makes_get_call_for_planet()"
});
formatter.result({
  "duration": 576667914,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPlanetsSteps.response_should_see_successful_ok()"
});
formatter.result({
  "duration": 29544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Naboo",
      "offset": 8
    }
  ],
  "location": "IndividualPlanetsSteps.planet_can_be_seen(String)"
});
formatter.result({
  "duration": 5683281,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Get the first planet in the array",
  "description": "",
  "id": "planets-feature;get-the-first-planet-in-the-array;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have \"9\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call for planet",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response should see successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"Coruscant\" can be seen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 17
    }
  ],
  "location": "IndividualPlanetsSteps.user_shall_have_endpoint(String)"
});
formatter.result({
  "duration": 51668,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPlanetsSteps.makes_get_call_for_planet()"
});
formatter.result({
  "duration": 655553741,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPlanetsSteps.response_should_see_successful_ok()"
});
formatter.result({
  "duration": 32038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Coruscant",
      "offset": 8
    }
  ],
  "location": "IndividualPlanetsSteps.planet_can_be_seen(String)"
});
formatter.result({
  "duration": 5332922,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Get the first planet in the array",
  "description": "",
  "id": "planets-feature;get-the-first-planet-in-the-array;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have \"10\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call for planet",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response should see successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"Kamino\" can be seen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 17
    }
  ],
  "location": "IndividualPlanetsSteps.user_shall_have_endpoint(String)"
});
formatter.result({
  "duration": 45450,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPlanetsSteps.makes_get_call_for_planet()"
});
formatter.result({
  "duration": 469033841,
  "status": "passed"
});
formatter.match({
  "location": "IndividualPlanetsSteps.response_should_see_successful_ok()"
});
formatter.result({
  "duration": 25036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kamino",
      "offset": 8
    }
  ],
  "location": "IndividualPlanetsSteps.planet_can_be_seen(String)"
});
formatter.result({
  "duration": 4995551,
  "status": "passed"
});
formatter.uri("people.feature");
formatter.feature({
  "line": 2,
  "name": "People feature",
  "description": "",
  "id": "people-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Get the list of People",
  "description": "",
  "id": "people-feature;get-the-list-of-people",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User shall have People endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to People",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful and ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "People \"\u003cnumber\u003e\" People \"\u003cname\u003e\" can be read",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "people-feature;get-the-list-of-people;",
  "rows": [
    {
      "cells": [
        "number",
        "name"
      ],
      "line": 11,
      "id": "people-feature;get-the-list-of-people;;1"
    },
    {
      "cells": [
        "0",
        "Luke Skywalker"
      ],
      "line": 12,
      "id": "people-feature;get-the-list-of-people;;2"
    },
    {
      "cells": [
        "1",
        "C-3PO"
      ],
      "line": 13,
      "id": "people-feature;get-the-list-of-people;;3"
    },
    {
      "cells": [
        "2",
        "R2-D2"
      ],
      "line": 14,
      "id": "people-feature;get-the-list-of-people;;4"
    },
    {
      "cells": [
        "3",
        "Darth Vader"
      ],
      "line": 15,
      "id": "people-feature;get-the-list-of-people;;5"
    },
    {
      "cells": [
        "4",
        "Leia Organa"
      ],
      "line": 16,
      "id": "people-feature;get-the-list-of-people;;6"
    },
    {
      "cells": [
        "5",
        "Owen Lars"
      ],
      "line": 17,
      "id": "people-feature;get-the-list-of-people;;7"
    },
    {
      "cells": [
        "6",
        "Beru Whitesun lars"
      ],
      "line": 18,
      "id": "people-feature;get-the-list-of-people;;8"
    },
    {
      "cells": [
        "7",
        "R5-D4"
      ],
      "line": 19,
      "id": "people-feature;get-the-list-of-people;;9"
    },
    {
      "cells": [
        "8",
        "Biggs Darklighter"
      ],
      "line": 20,
      "id": "people-feature;get-the-list-of-people;;10"
    },
    {
      "cells": [
        "9",
        "Obi-Wan Kenobi"
      ],
      "line": 21,
      "id": "people-feature;get-the-list-of-people;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Get the list of People",
  "description": "",
  "id": "people-feature;get-the-list-of-people;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have People endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to People",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful and ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "People \"0\" People \"Luke Skywalker\" can be read",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PeopleSteps.user_shall_have_People_endpoint()"
});
formatter.result({
  "duration": 50398,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSteps.makes_get_call_to_People()"
});
formatter.result({
  "duration": 808913119,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSteps.response_successful_and_ok()"
});
formatter.result({
  "duration": 38115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 8
    },
    {
      "val": "Luke Skywalker",
      "offset": 19
    }
  ],
  "location": "PeopleSteps.people_People_can_be_read(int,String)"
});
formatter.result({
  "duration": 12485044,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Get the list of People",
  "description": "",
  "id": "people-feature;get-the-list-of-people;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have People endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to People",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful and ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "People \"1\" People \"C-3PO\" can be read",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PeopleSteps.user_shall_have_People_endpoint()"
});
formatter.result({
  "duration": 22684,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSteps.makes_get_call_to_People()"
});
formatter.result({
  "duration": 707519700,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSteps.response_successful_and_ok()"
});
formatter.result({
  "duration": 31908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "C-3PO",
      "offset": 19
    }
  ],
  "location": "PeopleSteps.people_People_can_be_read(int,String)"
});
formatter.result({
  "duration": 8174474,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Get the list of People",
  "description": "",
  "id": "people-feature;get-the-list-of-people;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have People endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to People",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful and ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "People \"2\" People \"R2-D2\" can be read",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PeopleSteps.user_shall_have_People_endpoint()"
});
formatter.result({
  "duration": 25729,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSteps.makes_get_call_to_People()"
});
formatter.result({
  "duration": 655136514,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSteps.response_successful_and_ok()"
});
formatter.result({
  "duration": 26959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 8
    },
    {
      "val": "R2-D2",
      "offset": 19
    }
  ],
  "location": "PeopleSteps.people_People_can_be_read(int,String)"
});
formatter.result({
  "duration": 9482610,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Get the list of People",
  "description": "",
  "id": "people-feature;get-the-list-of-people;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have People endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to People",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful and ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "People \"3\" People \"Darth Vader\" can be read",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PeopleSteps.user_shall_have_People_endpoint()"
});
formatter.result({
  "duration": 25701,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSteps.makes_get_call_to_People()"
});
formatter.result({
  "duration": 596542708,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSteps.response_successful_and_ok()"
});
formatter.result({
  "duration": 22531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 8
    },
    {
      "val": "Darth Vader",
      "offset": 19
    }
  ],
  "location": "PeopleSteps.people_People_can_be_read(int,String)"
});
formatter.result({
  "duration": 7522219,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Get the list of People",
  "description": "",
  "id": "people-feature;get-the-list-of-people;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have People endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to People",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful and ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "People \"4\" People \"Leia Organa\" can be read",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PeopleSteps.user_shall_have_People_endpoint()"
});
formatter.result({
  "duration": 24448,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSteps.makes_get_call_to_People()"
});
formatter.result({
  "duration": 608298689,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSteps.response_successful_and_ok()"
});
formatter.result({
  "duration": 26703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 8
    },
    {
      "val": "Leia Organa",
      "offset": 19
    }
  ],
  "location": "PeopleSteps.people_People_can_be_read(int,String)"
});
formatter.result({
  "duration": 7360249,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Get the list of People",
  "description": "",
  "id": "people-feature;get-the-list-of-people;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have People endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to People",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful and ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "People \"5\" People \"Owen Lars\" can be read",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PeopleSteps.user_shall_have_People_endpoint()"
});
formatter.result({
  "duration": 22890,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSteps.makes_get_call_to_People()"
});
formatter.result({
  "duration": 621278933,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSteps.response_successful_and_ok()"
});
formatter.result({
  "duration": 25073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    },
    {
      "val": "Owen Lars",
      "offset": 19
    }
  ],
  "location": "PeopleSteps.people_People_can_be_read(int,String)"
});
formatter.result({
  "duration": 7149540,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Get the list of People",
  "description": "",
  "id": "people-feature;get-the-list-of-people;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have People endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to People",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful and ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "People \"6\" People \"Beru Whitesun lars\" can be read",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PeopleSteps.user_shall_have_People_endpoint()"
});
formatter.result({
  "duration": 24606,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSteps.makes_get_call_to_People()"
});
formatter.result({
  "duration": 621227250,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSteps.response_successful_and_ok()"
});
formatter.result({
  "duration": 24686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 8
    },
    {
      "val": "Beru Whitesun lars",
      "offset": 19
    }
  ],
  "location": "PeopleSteps.people_People_can_be_read(int,String)"
});
formatter.result({
  "duration": 6422707,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Get the list of People",
  "description": "",
  "id": "people-feature;get-the-list-of-people;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have People endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to People",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful and ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "People \"7\" People \"R5-D4\" can be read",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PeopleSteps.user_shall_have_People_endpoint()"
});
formatter.result({
  "duration": 23529,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSteps.makes_get_call_to_People()"
});
formatter.result({
  "duration": 576592688,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSteps.response_successful_and_ok()"
});
formatter.result({
  "duration": 28525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 8
    },
    {
      "val": "R5-D4",
      "offset": 19
    }
  ],
  "location": "PeopleSteps.people_People_can_be_read(int,String)"
});
formatter.result({
  "duration": 7352638,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Get the list of People",
  "description": "",
  "id": "people-feature;get-the-list-of-people;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have People endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to People",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful and ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "People \"8\" People \"Biggs Darklighter\" can be read",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PeopleSteps.user_shall_have_People_endpoint()"
});
formatter.result({
  "duration": 26158,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSteps.makes_get_call_to_People()"
});
formatter.result({
  "duration": 559147725,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSteps.response_successful_and_ok()"
});
formatter.result({
  "duration": 24492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 8
    },
    {
      "val": "Biggs Darklighter",
      "offset": 19
    }
  ],
  "location": "PeopleSteps.people_People_can_be_read(int,String)"
});
formatter.result({
  "duration": 6213444,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Get the list of People",
  "description": "",
  "id": "people-feature;get-the-list-of-people;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have People endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call to People",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful and ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "People \"9\" People \"Obi-Wan Kenobi\" can be read",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PeopleSteps.user_shall_have_People_endpoint()"
});
formatter.result({
  "duration": 21889,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSteps.makes_get_call_to_People()"
});
formatter.result({
  "duration": 661574710,
  "status": "passed"
});
formatter.match({
  "location": "PeopleSteps.response_successful_and_ok()"
});
formatter.result({
  "duration": 26091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 8
    },
    {
      "val": "Obi-Wan Kenobi",
      "offset": 19
    }
  ],
  "location": "PeopleSteps.people_People_can_be_read(int,String)"
});
formatter.result({
  "duration": 6450556,
  "status": "passed"
});
formatter.uri("plantes.feature");
formatter.feature({
  "line": 2,
  "name": "Planets feature",
  "description": "",
  "id": "planets-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Get the list of Planets",
  "description": "",
  "id": "planets-feature;get-the-list-of-planets",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User shall have planets endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"\u003cnumber\u003e\" planet \"\u003cname\u003e\" can be read",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "planets-feature;get-the-list-of-planets;",
  "rows": [
    {
      "cells": [
        "number",
        "name"
      ],
      "line": 11,
      "id": "planets-feature;get-the-list-of-planets;;1"
    },
    {
      "cells": [
        "0",
        "Alderaan"
      ],
      "line": 12,
      "id": "planets-feature;get-the-list-of-planets;;2"
    },
    {
      "cells": [
        "1",
        "Yavin IV"
      ],
      "line": 13,
      "id": "planets-feature;get-the-list-of-planets;;3"
    },
    {
      "cells": [
        "2",
        "Hoth"
      ],
      "line": 14,
      "id": "planets-feature;get-the-list-of-planets;;4"
    },
    {
      "cells": [
        "3",
        "Dagobah"
      ],
      "line": 15,
      "id": "planets-feature;get-the-list-of-planets;;5"
    },
    {
      "cells": [
        "4",
        "Bespin"
      ],
      "line": 16,
      "id": "planets-feature;get-the-list-of-planets;;6"
    },
    {
      "cells": [
        "5",
        "Endor"
      ],
      "line": 17,
      "id": "planets-feature;get-the-list-of-planets;;7"
    },
    {
      "cells": [
        "6",
        "Naboo"
      ],
      "line": 18,
      "id": "planets-feature;get-the-list-of-planets;;8"
    },
    {
      "cells": [
        "7",
        "Coruscant"
      ],
      "line": 19,
      "id": "planets-feature;get-the-list-of-planets;;9"
    },
    {
      "cells": [
        "8",
        "Kamino"
      ],
      "line": 20,
      "id": "planets-feature;get-the-list-of-planets;;10"
    },
    {
      "cells": [
        "9",
        "Geonosis"
      ],
      "line": 21,
      "id": "planets-feature;get-the-list-of-planets;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Get the list of Planets",
  "description": "",
  "id": "planets-feature;get-the-list-of-planets;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have planets endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"0\" planet \"Alderaan\" can be read",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PlanetsSteps.user_shall_have_planets_endpoint()"
});
formatter.result({
  "duration": 47520,
  "status": "passed"
});
formatter.match({
  "location": "PlanetsSteps.makes_get_call()"
});
formatter.result({
  "duration": 484184542,
  "status": "passed"
});
formatter.match({
  "location": "PlanetsSteps.response_successful_ok()"
});
formatter.result({
  "duration": 35020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 8
    },
    {
      "val": "Alderaan",
      "offset": 19
    }
  ],
  "location": "PlanetsSteps.planet_planet_can_be_read(String,String)"
});
formatter.result({
  "duration": 7016590,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Get the list of Planets",
  "description": "",
  "id": "planets-feature;get-the-list-of-planets;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have planets endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"1\" planet \"Yavin IV\" can be read",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PlanetsSteps.user_shall_have_planets_endpoint()"
});
formatter.result({
  "duration": 25912,
  "status": "passed"
});
formatter.match({
  "location": "PlanetsSteps.makes_get_call()"
});
formatter.result({
  "duration": 513347307,
  "status": "passed"
});
formatter.match({
  "location": "PlanetsSteps.response_successful_ok()"
});
formatter.result({
  "duration": 29222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "Yavin IV",
      "offset": 19
    }
  ],
  "location": "PlanetsSteps.planet_planet_can_be_read(String,String)"
});
formatter.result({
  "duration": 6705798,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Get the list of Planets",
  "description": "",
  "id": "planets-feature;get-the-list-of-planets;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have planets endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"2\" planet \"Hoth\" can be read",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PlanetsSteps.user_shall_have_planets_endpoint()"
});
formatter.result({
  "duration": 33464,
  "status": "passed"
});
formatter.match({
  "location": "PlanetsSteps.makes_get_call()"
});
formatter.result({
  "duration": 480475992,
  "status": "passed"
});
formatter.match({
  "location": "PlanetsSteps.response_successful_ok()"
});
formatter.result({
  "duration": 25428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 8
    },
    {
      "val": "Hoth",
      "offset": 19
    }
  ],
  "location": "PlanetsSteps.planet_planet_can_be_read(String,String)"
});
formatter.result({
  "duration": 5976332,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Get the list of Planets",
  "description": "",
  "id": "planets-feature;get-the-list-of-planets;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have planets endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"3\" planet \"Dagobah\" can be read",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PlanetsSteps.user_shall_have_planets_endpoint()"
});
formatter.result({
  "duration": 21680,
  "status": "passed"
});
formatter.match({
  "location": "PlanetsSteps.makes_get_call()"
});
formatter.result({
  "duration": 495572649,
  "status": "passed"
});
formatter.match({
  "location": "PlanetsSteps.response_successful_ok()"
});
formatter.result({
  "duration": 24078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 8
    },
    {
      "val": "Dagobah",
      "offset": 19
    }
  ],
  "location": "PlanetsSteps.planet_planet_can_be_read(String,String)"
});
formatter.result({
  "duration": 6175689,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Get the list of Planets",
  "description": "",
  "id": "planets-feature;get-the-list-of-planets;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have planets endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"4\" planet \"Bespin\" can be read",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PlanetsSteps.user_shall_have_planets_endpoint()"
});
formatter.result({
  "duration": 26698,
  "status": "passed"
});
formatter.match({
  "location": "PlanetsSteps.makes_get_call()"
});
formatter.result({
  "duration": 484306967,
  "status": "passed"
});
formatter.match({
  "location": "PlanetsSteps.response_successful_ok()"
});
formatter.result({
  "duration": 25337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 8
    },
    {
      "val": "Bespin",
      "offset": 19
    }
  ],
  "location": "PlanetsSteps.planet_planet_can_be_read(String,String)"
});
formatter.result({
  "duration": 5961457,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Get the list of Planets",
  "description": "",
  "id": "planets-feature;get-the-list-of-planets;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have planets endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"5\" planet \"Endor\" can be read",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PlanetsSteps.user_shall_have_planets_endpoint()"
});
formatter.result({
  "duration": 24594,
  "status": "passed"
});
formatter.match({
  "location": "PlanetsSteps.makes_get_call()"
});
formatter.result({
  "duration": 500500477,
  "status": "passed"
});
formatter.match({
  "location": "PlanetsSteps.response_successful_ok()"
});
formatter.result({
  "duration": 25676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    },
    {
      "val": "Endor",
      "offset": 19
    }
  ],
  "location": "PlanetsSteps.planet_planet_can_be_read(String,String)"
});
formatter.result({
  "duration": 5627587,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Get the list of Planets",
  "description": "",
  "id": "planets-feature;get-the-list-of-planets;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have planets endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"6\" planet \"Naboo\" can be read",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PlanetsSteps.user_shall_have_planets_endpoint()"
});
formatter.result({
  "duration": 25032,
  "status": "passed"
});
formatter.match({
  "location": "PlanetsSteps.makes_get_call()"
});
formatter.result({
  "duration": 751444204,
  "status": "passed"
});
formatter.match({
  "location": "PlanetsSteps.response_successful_ok()"
});
formatter.result({
  "duration": 23399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 8
    },
    {
      "val": "Naboo",
      "offset": 19
    }
  ],
  "location": "PlanetsSteps.planet_planet_can_be_read(String,String)"
});
formatter.result({
  "duration": 5483631,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Get the list of Planets",
  "description": "",
  "id": "planets-feature;get-the-list-of-planets;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have planets endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"7\" planet \"Coruscant\" can be read",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PlanetsSteps.user_shall_have_planets_endpoint()"
});
formatter.result({
  "duration": 20793,
  "status": "passed"
});
formatter.match({
  "location": "PlanetsSteps.makes_get_call()"
});
formatter.result({
  "duration": 478576293,
  "status": "passed"
});
formatter.match({
  "location": "PlanetsSteps.response_successful_ok()"
});
formatter.result({
  "duration": 24921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 8
    },
    {
      "val": "Coruscant",
      "offset": 19
    }
  ],
  "location": "PlanetsSteps.planet_planet_can_be_read(String,String)"
});
formatter.result({
  "duration": 6224000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Get the list of Planets",
  "description": "",
  "id": "planets-feature;get-the-list-of-planets;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have planets endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"8\" planet \"Kamino\" can be read",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PlanetsSteps.user_shall_have_planets_endpoint()"
});
formatter.result({
  "duration": 23224,
  "status": "passed"
});
formatter.match({
  "location": "PlanetsSteps.makes_get_call()"
});
formatter.result({
  "duration": 668744265,
  "status": "passed"
});
formatter.match({
  "location": "PlanetsSteps.response_successful_ok()"
});
formatter.result({
  "duration": 28434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 8
    },
    {
      "val": "Kamino",
      "offset": 19
    }
  ],
  "location": "PlanetsSteps.planet_planet_can_be_read(String,String)"
});
formatter.result({
  "duration": 5947130,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Get the list of Planets",
  "description": "",
  "id": "planets-feature;get-the-list-of-planets;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User shall have planets endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Makes get call",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Response successful ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Planet \"9\" planet \"Geonosis\" can be read",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PlanetsSteps.user_shall_have_planets_endpoint()"
});
formatter.result({
  "duration": 28291,
  "status": "passed"
});
formatter.match({
  "location": "PlanetsSteps.makes_get_call()"
});
formatter.result({
  "duration": 500532082,
  "status": "passed"
});
formatter.match({
  "location": "PlanetsSteps.response_successful_ok()"
});
formatter.result({
  "duration": 24097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 8
    },
    {
      "val": "Geonosis",
      "offset": 19
    }
  ],
  "location": "PlanetsSteps.planet_planet_can_be_read(String,String)"
});
formatter.result({
  "duration": 6117711,
  "status": "passed"
});
});