<?php

class WeatherApi {

    private $apiKey = "780e31bb55c07c593ef5ee10f83839a6";
    private $url;
    private $urlPlaceholder = "https://api.openweathermap.org/data/2.5/weather?id=";
    private $units  = "metric";
    private $cityId = 3194360;
    //Ovde sam stavio defaultne vrednosti jer kad bi racunao da ne bi dobijao staticke podatke nego iz nekog inputa, onda bi radio sa geterima i seterima. Ovako sam samo dodao getere is setere, ali nisu u upotrebi.
    public function __construct(){
        
        $this->url = $this->urlPlaceholder . $this->cityId . "&units=" . $this->units . "&appid=" . $this->apiKey;
    }

    public function getUrl() {
        return $this->url;
    }

    public function getUnits(): string {
        return $this->units;
    }

    public function setUnits(string $units): string {
        return $this->units = $units;
    }

    public function getCityId(): int {
        return $this->cityId;
    }

    public function setCityId(int $cityId): int {
        return $this->cityId = $cityId;
    }

    public function generateUrl(string $units, int $cityId){
        //Ovde bi trebalo pre svega da ide validacija stringa i integera, naravno sa preg_match, ali nisam hteo da previse komplikujem jer u zadatku pise samo da treba temepratura da se dobije. Ako mislite da bi i to trebalo da odradim slobodno me kontaktirajte pa bih i to odradio.
        $this->url = $this->urlPlaceholder . $cityId . "&units=" . $units . "&appid=" . $this->apiKey;
      
    }

    public function getCurrentWeather(){

        $url = $this->url;
        $json = file_get_contents($url);
        $decoded = json_decode($json);

        return "City: " . $decoded->name . "<br>" .
        "Current weather: " . $decoded->weather[0]->main . "<br>" .
        "Current temperature: " . $decoded->main->temp . " &#8451;<br>" .
        "Current pressure: " . $decoded->main->pressure . " &#13190;<br>";
    }
}
