<?php

require_once("cors.php");
require_once("api.php");
require_once("conexion.php");

ini_set('display_errors', 1);
error_reporting(E_ALL);
header("Content-Type:application/json");

$url = $_SERVER['REQUEST_URI'];
$methodHTTP = $_SERVER['REQUEST_METHOD'];

if($url == '/apipersonas/' && $methodHTTP == 'GET'){
     $teams = array();
     $api = new Api();
     $teams = $api->getPersonas();
     echo json_encode($teams);
}
