<?php
        file_put_contents('cruises.json', json_encode(json_decode(file_get_contents('cruises.json'))));

        ?>
