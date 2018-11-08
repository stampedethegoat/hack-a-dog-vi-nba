<?php
error_reporting(E_ERROR | E_PARSE);
require_once '../vendor/autoload.php';
include 'helpers.php';
include 'client.php';

$nbaGames = calculateTotalNBAGames($response);
prettyPrint($nbaGames);
?>
