<?php
use JasonRoman\NbaApi\Client\Client;
use JasonRoman\NbaApi\Request\Data\Prod\General\TodayRequest;
use JasonRoman\NbaApi\Request\Data\Prod\Schedule\CalendarRequest;

// The Client is what polls data from one of the NBA endpoints,
$client = new Client();

// The Request object is the type of data you want to retrieve.
$request  = TodayRequest::fromArray();
$request  = CalendarRequest::fromArray();
$response = $client->request($request);

$arrayResponse            = $response->getArrayFromJson();
$objectResponse           = $response->getObjectFromJson();
$objectPropertiesResponse = $response->getObjectPropertiesFromJson();
$xmlResponse              = $response->getXml();
$guzzleResponse           = $response->getResponse();
$responseBody             = $response->getResponseBody();
?>