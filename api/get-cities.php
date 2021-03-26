<?php

/*$dart = "import 'package:google_maps_flutter/google_maps_flutter.gart';".PHP_EOL;
$dart .= "import 'place.dart';".PHP_EOL;
$dart .= "class PlacesData {
       static const List<Place> places = [".PHP_EOL;*/

$remote = json_decode(file_get_contents('https://api.mosturflot.ru/v3/rivercruises/points?include=title-image&per-page=1000'), true);
$excurs = json_decode(file_get_contents('data/excursions.json'), true);
$geocities = json_decode(file_get_contents('data/cities.json'), true);
$data = [];
foreach( $remote['data'] as $city){
    foreach( $geocities as $geo ){
        if( strstr( $city['attributes']['name'], $geo['name']) && $excurs[$city['attributes']['id']]){
            $desc = trim(preg_replace('/\s+/', ' ', html_entity_decode(strip_tags($city['attributes']['description']))));
            $city['attributes']['description'] = str_replace("\xc2\xa0",' ',$desc);
            $city['attributes']['LatLng'] = [$geo['latitude'], $geo['longitude']];
            $city['attributes']['category'] = 'PlaceCategory.'.$geo['category'];
            $ex = str_replace(['Мостурфлот','на выбор'], '', $excurs[$city['attributes']['id']]);
            $city['attributes']['excursions'] = preg_replace('/20\d{2}/', '', str_replace("\xc2\xa0",' ',$ex));
            $data[]['Place'] = $city['attributes'];
        }
    }
}

foreach( $remote['included'] as $image ){
    if($image['type'] == 'point-images'){
        //$data[$image['attributes']['point-id']]['image'] = $image['links']['image-url'];
        $src = file_get_contents($image['links']['image-url']);
        $mime = $image['attributes']['mime'] == 'image/jpeg' ? '.jpg' : '.png';
        file_put_contents('img/'.$image['attributes']['point-id'].$mime, $src);
    }
}

var_dump($data);
file_put_contents('data/allcities.json', json_encode($data, JSON_UNESCAPED_UNICODE));
?>
