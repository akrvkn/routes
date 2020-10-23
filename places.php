<?php

$points = json_decode(file_get_contents('assets/js/points.json'), true);
$cities = json_decode(file_get_contents('assets/js/cities.json'), true);
$list = [];
$places = [];
$place = [];
$category = ['favorite', 'visited', 'wantToGo'];

foreach($points['data'] as $data){
    foreach($cities as $city){
        if(strpos($city['name'], $data['attributes']['name']) !== false){
            //$rand_keys = array_rand($category, 3);
            $place['id'] = (int)$data['id'];
            $place['latLng'] = [$city['latitude'] , $city['longitude']];
            $place['name'] = $city['name'];
            $place['description'] = strip_tags($data['attributes']['description']);
            $place['category'] = $category[rand(0,2)];
            $place['starRating'] = rand(3,5);
            $places[]['Place'] = $place;
        }
    }
}

file_put_contents('assets/js/places.json', json_encode($places));

?>