<?php
    ob_start();
    session_start();
	require_once '../assets/php/include.php';
    require_once '../defs.php';
    
    use Encryptor\Encryptor;
    $encryptor = new Encryptor("clients", md5("clients"));

	if (!isset($_COOKIE['pdb-client-user']) || empty($_COOKIE['pdb-client-user'])) {
		header("Location: " . ClientBaseUrl . "login");
    }
    
    $pdb_branch_page = json_decode($_COOKIE['pdb-branch-page'], 1);
    
    @setcookie("pdb-branch-page", null, -10, '/', NULL, NULL, TRUE);
            
    ob_end_flush();
    header("Location: ". CLIENT_BASE_URL.$pdb_branch_page['return_url']);

?>