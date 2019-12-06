package stepDefinition;

import RestAssuredCore.BaseAssertion;
import RestAssuredCore.RESTCalls;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.testng.Assert;
import utils.URL;

public class PeopleSteps {

    String  uri;
    Response response;

    @Given("^User shall have People endpoint$")
    public void user_shall_have_People_endpoint() {
        uri = URL.getEndPoint("people/");
    }

    @When("^Makes get call to People$")
    public void makes_get_call_to_People()  {
        response = RESTCalls.GETRequest(uri);
    }

    @Then("^Response successful and ok$")
    public void response_successful_and_ok() {
        BaseAssertion.verifyStatusCode(response, 200);
    }

    @Then("^People \"([^\"]*)\" People \"([^\"]*)\" can be read$")
    public void people_People_can_be_read(int n, String expected) {

        JsonPath jsonPathEvaluator = response.jsonPath();
        String actualKeyValue = jsonPathEvaluator.get("results[" + n + "].name");
        //  listOfValues.add(actualKeyValue);
        System.out.println(actualKeyValue);
        Assert.assertEquals(actualKeyValue, expected);

    }
}
