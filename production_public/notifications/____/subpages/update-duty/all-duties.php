<h5 class="card-title">Created Duties</h5>
<div class="table-responsive">
    <table class="mb-0 table table-striped" pagin_table="view-created-duties"
        pt_c_acc_id="<?= AccountInfoId; ?>" pt_c_page="<?= $page_url; ?>"
        pt_c_user_id="<?= $user_id; ?>" pt_c_api="<?= API_BASE_URL; ?>"
        pt_c_file="<?= FILE_BUCKET_BASE_URL; ?>">
        <thead>
            <tr>
                <th style="white-space: nowrap;">Duty</th>
                <th style="white-space: nowrap;">Action</th>
                <!-- <th style="white-space: nowrap;">Info</th> -->
            </tr>
        </thead>
        <tbody></tbody>
    </table>
</div>