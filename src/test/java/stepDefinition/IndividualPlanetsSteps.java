package stepDefinition;

import RestAssuredCore.BaseAssertion;
import RestAssuredCore.RESTCalls;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import utils.URL;

public class IndividualPlanetsSteps {

    String  uri;
    Response response;

    @Given("^User shall have \"([^\"]*)\" endpoint$")
    public void user_shall_have_endpoint(String arg1)  {
        uri = URL.getEndPoint("planets/" + arg1 + "/");
    }

    @When("^Makes get call for planet$")
    public void makes_get_call_for_planet() {
        response = RESTCalls.GETRequest(uri);
    }
    @Then("^Response should see successful ok$")
    public void response_should_see_successful_ok()  {
        BaseAssertion.verifyStatusCode(response, 200);
    }

    @Then("^Planet \"([^\"]*)\" can be seen$")
    public void planet_can_be_seen(String arg1) {
      BaseAssertion.verifyResonseBodyByJsonPath(response,"name",arg1 );
    }

}

