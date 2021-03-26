<?php
//https://api.mosturflot.ru/v3/rivercruises/tour-points?filter[tour-id]=6238&include=excursions&per-page=100
//https://api.mosturflot.ru/v3/rivercruises/tours?fields[tours]=id&filter[start][gte]=2021-04-29T00:00:00Z&per-page=500

$cruisesAll = json_decode(file_get_contents( 'https://api.mosturflot.ru/v3/rivercruises/tours?fields[tours]=id&filter[start][gte]=2021-04-29T00:00:00Z&per-page=500'), true);

$ports = [];

foreach( $cruisesAll['data'] as $cruise){
    $tourId = $cruise['attributes']['id'];
    getExcursions($tourId);
}



function getExcursions($tourId){
    global $ports;
    $excursions = [];
    $data = json_decode(file_get_contents('https://api.mosturflot.ru/v3/rivercruises/tour-points?filter[tour-id]='.$tourId.'&include=excursions&per-page=100'), true);
    foreach( $data['included'] as $included ) {
        $excursions[$included['attributes']['id']] = $included['attributes']['name'].' '.preg_replace('/\s+/', ' ', strip_tags(html_entity_decode($included['attributes']['description'])));
    }

    foreach( $data['data'] as $cruise){
        if(isset($cruise['relationships']['excursions']['data']) && !isset($ports[$cruise['attributes']['point-id']]) ) {
        $ports[$cruise['attributes']['point-id']] = [];
            foreach($cruise['relationships']['excursions']['data'] as $ex) {
                //echo $cruise['attributes']['point-id'].PHP_EOL;
                $ports[$cruise['attributes']['point-id']][] = $excursions[$ex['id']];
            }
        }
    }

}


//var_dump($ports);
file_put_contents('data/excursions.json', json_encode($ports, JSON_UNESCAPED_UNICODE));
?>
