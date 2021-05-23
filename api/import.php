<?php
$points = json_decode(file_get_contents('data/points.json'), true);

foreach($points['included'] as $point) {
if($point['type'] == 'point-images') {
    $image = file_get_contents($point['links']['image-url']);
    $mime = $point['attributes']['mime'] == 'image/jpeg' ? '.jpg' : '.png';
    $id = $point['attributes']['point-id'];
    file_put_contents('img/'.$id.$mime, $image);
}
}

?>
