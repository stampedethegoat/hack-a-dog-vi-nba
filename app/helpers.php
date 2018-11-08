<?php
function prettyPrint(&$itemToPrint) {
  echo "<pre>";
  $json = json_decode($itemToPrint);
  echo json_encode($json, JSON_PRETTY_PRINT);
  echo "</pre>";
}
?>
