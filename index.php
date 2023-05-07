<?php

$path = __DIR__ . '/dashboard/pages';

$pages = [];


foreach(glob($path . '/*.html') as $page) {
    $name = basename($page);
    echo "<a href='/dashboard/pages/{$name}'>{$name}</a><br>";
}