<?php
    require_once ('../main.php');
    require_once DIRECTORY.'/settings/classes.php';

    $base_url = API_BASE_URL;
    $token = API_TOKEN;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRON_ER</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.21/css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/autofill/2.3.5/css/autoFill.bootstrap4.min.css">
    <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css">

</head>
<body class="px-3 py-5 container">
    <?php
        $url = isset($_GET['type']) ? "?type=".$_GET['type']: "";
        $curl = curl_init();
        $response = curlCall($base_url."--workers--/cron_er{$url}", $curl);

        $err = curl_error($curl);
        curl_close($curl);
        $response = curlCallResponse($err, $response);
		if (@$response['error'] == 1) {
			$response = [];
		}
    ?>
    <table id="something_table" class="table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
                <th>#</th>
                <th>ID</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            <?php
                foreach ($response as $r_key => $r) { ?>
                    <tr>
                        <td><?= (int)$r_key + 1; ?></td>
                        <td><?= $r['something_id']; ?></td>
                        <td><?= date("W L Y-m-d, H:i:A", strtotime($r['something'])); ?></td>
                    </tr>
                <?php }
            ?>
        </tbody>
        <tfoot>
            <tr>
                <th>#</th>
                <th>ID</th>
                <th>Date</th>
            </tr>
        </tfoot>
    </table>

</body>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.datatables.net/1.10.21/js/dataTables.bootstrap4.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.datatables.net/autofill/2.3.5/js/dataTables.autoFill.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.datatables.net/autofill/2.3.5/js/autoFill.bootstrap4.min.js" crossorigin="anonymous"></script>
    <script>
        $(document).ready(function() {
            $('#something_table').DataTable();
        });
    </script>
</html>