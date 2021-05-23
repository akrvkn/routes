<?php
$href = '/href="([^"]+)"/';

//preg_match_all('/href="([^"]+)"/', $contents, $links);

$cities = json_decode(file_get_contents('data/cities.json'), true);

function getLinks($string) {
    $pattern = "/(<a[^>]+>.*<\/a>)/siU";
    preg_match_all($pattern, $string, $matches);
    return $matches;
}

$ex_pattern = '/Список экскурсий(.*)К списку/siU';

$html = file_get_contents('http://tour.mosturflot.ru/tours/');
$links = getLinks($html);
foreach( $links[1] as $link ) {
    preg_match('/href="([^"]+)"/', $link, $match);
    $text = trim(strip_tags($link));
    foreach($cities as $city){
        if($text != ''){
            if( strstr($city['name'], $text)) {
                //echo $text.'-'.$match[1]."\n";
                $ex = file_get_contents($match[1]);
                preg_match($ex_pattern, $ex, $res);
                if($res){
                    //$ex_links = getLinks($res[1]);
                    //preg_match_all("/<a[^>]+><strong>(.*)<\/strong><\/a>/siU", $res[1], $found);
                    preg_match_all("/<p>(.*)<\/p>/siU", $res[1], $found);
                    $excursions[$city['name']] = [];
                    foreach($found[1] as $exscurs){
                        //preg_match('/href="([^"]+)"/', $exscurs, $mat);
                        $text = str_replace("\xc2\xa0",' ', $exscurs);
                        $txt = preg_replace('/[A-Z]{2}[A-Z]?\d{2}[a-z]?/siU', '', html_entity_decode(trim(strip_tags($text))));
                        $txt2 = preg_replace('/[A-Z]{2}?[A-Z]?|[a-z]?/', '', $txt);
                        $excursions[$city['name']][] = trim($txt2);
                        //echo trim($txt).PHP_EOL;
                    }
                }
            }
        }
    }
}
        file_put_contents('data/excursions.json', json_encode($excursions, JSON_UNESCAPED_UNICODE));
?>
