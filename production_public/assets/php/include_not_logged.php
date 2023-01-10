<?php
	session_start();

	require_once 'main.php';
	require_once 'page_components/signature.php';
	
	// if (isset($_COOKIE[LoginCookie])) {
	//     header('Location: '.BASE_URL);
	// }

	require_once DIRECTORY.'/settings/classes.php';