<?php
function prettyPrint(&$itemToPrint) {
  echo "<pre>";
  $json = json_decode($itemToPrint);
  echo json_encode($json, JSON_PRETTY_PRINT);
  echo "</pre>";
}

function calculateTotalNBAGames(&$item) {
  $result = 0;

  $item = json_decode($item);
  foreach ($item as $key=>$value) {
    if (gettype($value) == "integer") {
      $result = $result + intval($value);
    }
  }

  return $result;
}
?>
