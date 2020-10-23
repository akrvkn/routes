<?php
$points = json_decode(file_get_contents('assets/js/points.json'), true);

$list = [];

foreach($points['data'] as $data){
    $list[$data['relationships']['title-image']['data']['id']] = $data['id'];
}

foreach($points['included'] as $point) {
if($point['type'] == 'point-images') {
    $image = file_get_contents($point['links']['image-url']);
    $mime = $point['attributes']['mime'] == 'image/jpeg' ? '.jpg' : '.png';
    file_put_contents('assets/img/mtf/st/'.$list[$point['id']].$mime, $image);
}
}

?>