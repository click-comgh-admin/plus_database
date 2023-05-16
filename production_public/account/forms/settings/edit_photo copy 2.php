<script>
      document.addEventListener("DOMContentLoaded", function() {
        // var form = document.querySelector("form");
        const form = document.querySelector('#myForm');

        form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        Swal.fire({
            title: 'Are you sure you want to submit the form?',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            cancelButtonText: 'Cancel',
            showLoaderOnConfirm: true,
            preConfirm: () => {
            return fetch(form.action, {
                method: 'PATCH',
                body: new FormData(form),
                headers: {
                'Authorization': 'Token 6c7d5fa5758ab702c6b70e081af5d4c8ea4d72ed284d10997901ce03c070797d',
                'Cookie': 'csrftoken=E450QJaKJflqTe2lSqG69TMhb4478GhkeD1jnFEbZyUfjXpoidb3dATT9YyXgfkx'
                }
            })
                .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
                })
                .then(result => {
                Swal.fire({
                    title: 'Form submitted successfully!',
                    type: 'success',
                    timer: 10000,
                    showConfirmButton: false
                }).then(() => {
                setTimeout(() => {
                    window.location.reload();
                }, 1000);

                });
                })
                .catch(error => {
                Swal.fire({
                    title: 'Error submitting form',
                    text: error.message,
                    type: 'error'
                });
                });
            }
        });
        });

      });
    </script>
    <form method="post" enctype="multipart/form-data" action="http://127.0.0.1:9001/api/clients/account/4" id="myForm">
      <input type="file" name="logo"><br><br>
      <input type="hidden" name="csrfmiddlewaretoken" value="E450QJaKJflqTe2lSqG69TMhb4478GhkeD1jnFEbZyUfjXpoidb3dATT9YyXgfkx">
      <input type="hidden" name="_method" value="PATCH">
      <input type="submit" value="Upload">
    </form>

<?php
    define("POST_URL", API_BASE_URL."client-membership/update_client_photo");
?>
<form class="container" role="form" action="<?= POST_URL; ?>" method="POST" enctype="multipart/form-data"
    make-general-posts="Update Client Logo?">
    <div class="row justify-content-center">
        <div class="col-lg-12">
            <?php 
				$tittle_placeholder = "Upload Logo";
				$id_name = "profile_img";
			?>
            <h6><?= $tittle_placeholder; ?></h6>
            <?php
                $input_value = 'value=""';
                $input_attributes = ''.$input_value.' name="'.$id_name.'" accept=".jpg,.jpeg,.png,.gif" id="'.$id_name.'" placeholder="'.$tittle_placeholder.'" upload-preview-crop--input="profile-picture"';
	    		echo $tf->use(DIRECTORY."/templates/form/input-icon--left.tmpl", [
                    [ "name"=>"icon", "value"=>"pe-7s-photo icon-gradient bg-warm-flame text-success" ],
                    [ "name"=>"type", "value"=>"file" ],
                    [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                    [ "name"=>"input_attributes", "value"=>$input_attributes ],
                ]);
            ?>
        </div>
        <div>
            <input type="hidden" name="client_id" value="<?= $account_id; ?>" />
            <input type="hidden" name="admin_user_id" value="<?= $user_id; ?>" />
            <input type="hidden" name="filename" value="<?= @$user_info['pdcu_profile_picture']; ?>" />
            <input type="hidden" name="photo-x" />
            <input type="hidden" name="photo-y" />
            <input type="hidden" name="photo-width" />
            <input type="hidden" name="photo-height" />
        </div>
        <div class="col-lg-12">
            <button type="submit"
                class="btn btn-sm bg-night-sky text-light btn-block font-weight-bold rounded-pill">Upload Image</button>
        </div>
    </div>
</form>