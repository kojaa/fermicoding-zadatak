<?php

require "config.php";

$units = $_GET['units'];
$cityId = $_GET['cityId'];
$api = new WeatherApi();

$api->generateUrl($units, $cityId);

echo $api->getCurrentWeather();

