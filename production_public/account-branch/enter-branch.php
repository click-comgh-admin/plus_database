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
    
    if (isset($_GET['current_page_url'])) {
        $url = $_GET['current_page_url'];

        if (isset($_GET['names'])) {
            $names = json_decode(base64_decode($_GET['names']), 1);
            print_r($names);
            $client_name = $names['client_name'];
            $branch_name = $names['branch_name'];
    
            if (isset($_GET['branch_id'])) {
                $branch_id = $_GET['branch_id'];
                $pdb_branch_page = [
                    "client_id" => 4,
                    "client_name" => $client_name,
                    "branch_id" => $branch_id,
                    "branch_name" => $branch_name,
                    "return_url" => $url,
                ];
                $pdb_branch_page = json_encode($pdb_branch_page, 1);
        
                $user = $encryptor->encrypt($branch_id);
                // @setcookie("pdb-client-user", $user, time() + 60 + 60 * 2400 * 1400, '/', NULL, NULL, TRUE);
                @setcookie("pdb-branch-page", $pdb_branch_page, time() + 60 + 60 * 2400 * 1400, '/', NULL, NULL, TRUE);
                
                ob_end_flush();
                header("Location: ". CLIENT_BASE_URL);
            } else {
                header("Location: ". CLIENT_BASE_URL.$url);
            }
        } else {
            header("Location: ". CLIENT_BASE_URL.$url);
        }
    } else {
        header("Location: ". CLIENT_BASE_URL);
    }

?>