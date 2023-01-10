<?php
	require_once 'assets/php/include.php';
	require_once 'defs.php';

    use ServiceWorker\View as ServiceWorkerView;
    use ServiceWorker\Response as ServiceWorkerResponse;
    
    // echo "<pre>";
    
    $sWv = new ServiceWorkerView(IN_PRODUCTION_MODE);
    $getResponse = $sWv->get();
    @header("Content-Type: {$getResponse->content_type}");
    // print_r(['$sWv'=>$sWv]);
    // print_r(['$getResponse->content_type'=>$getResponse->content_type]);
    // print_r(['$getResponse'=>$getResponse->service_worker]);
    // print_r(['$getResponse'=>$getResponse]);
    echo $getResponse->service_worker;
    // echo "</pre>";

?>