<?php

    use TemplateFile\TemplateFile;
    define('LocBaseUrl', CLIENT_BASE_URL."assets/php/custom/locale.php");   

    function loadClassed(string $path)
    {
        foreach (glob($path) as $file) {
            if (is_file($file)) {
                if (@file_exists($file)) {
                    require_once $file;
                } else {
                    throw new Error("file '$file' undable to load");
                }
            }
        }
    }

    loadClassed(DIRECTORY.'/classes'.'/*');
    loadClassed(DIRECTORY.'/classes'.'/cookies/*');

    $fx = new Functions();
    $tf = new TemplateFile();
    $ccApi = new ClickComApi(API_BASE_URL, API_V2_BASE_URL, LocBaseUrl);
    // print_r($tf);
