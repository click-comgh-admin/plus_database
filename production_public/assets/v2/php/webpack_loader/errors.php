<?php

$newError = new Error(
    $message = "Error while parsing WEBPACK_LOADER configuration", 
    $code = 001, $previous = throw new Exception("Is WEBPACK_LOADER config valid?", 1)
);
define('BAD_CONFIG_ERROR', $newError);
