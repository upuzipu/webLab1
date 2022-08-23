<?php
session_start();
$x = $_GET["x"];
$y = $_GET["y"];
$r = $_GET["r"];

$checker = flase;

// circle
if($y<=$r && $y>=0 && $x>=0 && $x<=$r && ($x^2+$y^2<=$r^2)){
    $checker = true;
}

//square
if($y<=0 && $y>=-$r && $x>=0 && $x<=$r) {
    $checker = true;
}

//triangle
if($y<=$r/2 && $y>=0 && $x<=0 && x>=-$r/2 && ($x+$y<=$r)){
    $checker = true;
}

$datetime = date('d.m.Y H:i:s');

$results = $datetime . "|" . $x . "|" . $y . "|" . $r . "|" . $checker. "|"

if (!isset($_SESSION['results'])) {
    $_SESSION['results'] = array();
}

array_push($_SESSION['results', $results]);
