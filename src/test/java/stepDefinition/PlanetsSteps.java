package stepDefinition;

import RestAssuredCore.BaseAssertion;
import RestAssuredCore.RESTCalls;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.testng.Assert;
import utils.TestUtils;
import utils.URL;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import static utils.TestUtils.loadProperties;

public class PlanetsSteps {

    String  uri;
    Response  response;

    @Given("^User shall have planets endpoint$")
    public void user_shall_have_planets_endpoint() {
        uri = URL.getEndPoint("planets/");
    }

    @When("^Makes get call$")
    public void makes_get_call() {

        response = RESTCalls.GETRequest(uri);

    }

    @Then("^Response successful ok$")
    public void response_successful_ok()  {
       BaseAssertion.verifyStatusCode(response, 200);

    }

    @Then("^Planet \"([^\"]*)\" planet \"([^\"]*)\" can be read$")
    public void planet_planet_can_be_read(String n, String expected) throws IOException {

          /**
           * Get all 10 planets name
           * Store in a list
           * Validate with expected value x, y, z
           * */

        JsonPath jsonPathEvaluator = response.jsonPath();
        String actualKeyValue = jsonPathEvaluator.get("results[" + n + "].name");
        //  listOfValues.add(actualKeyValue);
        System.out.println(actualKeyValue);
        Assert.assertEquals(actualKeyValue, expected);



       /* // Load properties file
        Properties properties = TestUtils.loadProperties();
        JsonPath jsonPathEvaluator = response.jsonPath();
        for(int n =0; n<=9; n++) {
            String actualKeyValue = jsonPathEvaluator.get("results["+ n + "].name");
                 //  listOfValues.add(actualKeyValue);
            System.out.println(actualKeyValue);
            Assert.assertEquals(actualKeyValue, properties.getProperty("key"+n ));
        }*/
    }
}

