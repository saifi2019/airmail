package stepDefinition;

import RestAssuredCore.BaseAssertion;
import RestAssuredCore.RESTCalls;
import cucumber.api.java.en.*;
import io.restassured.response.Response;
import utils.URL;


public class IndividualPeople {

    String  uri;
    Response response;


    @Given("^User shall have  individual People \"([^\"]*)\" endpoint$")
    public void user_shall_have_individual_People_endpoint(String n)  {
        uri = URL.getEndPoint("people/" + n +"/");
    }

    @When("^Makes get call to individual People endpoint$")
    public void makes_get_call_to_individual_People_endpoint(){
        response = RESTCalls.GETRequest(uri);
    }

    @Then("^Response successful  ok$")
    public void response_successful_ok() throws Throwable {
        BaseAssertion.verifyStatusCode(response, 200);

    }

    @Then("^Individual People \"([^\"]*)\" can be read$")
    public void individual_People_can_be_read(String expected) {
        BaseAssertion.verifyResonseBodyByJsonPath(response,"name",expected );
    }

}
