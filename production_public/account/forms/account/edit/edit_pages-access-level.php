<?php
    foreach ($appPages as $key => $page) { ?>
        <tr>
            <th><?= $page['pdpc_page']; ?></th>
            <td class="text-center p-0">
                <?php
                    $isChecked = (in_array($page['pdpc_id'], $user_access_levels)) ? 'checked="true"' : "";
                ?>
                <div class="custom-checkbox custom-control">
                    <input class="custom-control-input" type="checkbox" name="page_check_<?= $page['pdpc_id']; ?>" id="page_check_<?= $page['pdpc_id']; ?>" <?= $isChecked; ?> />
                    <label class="custom-control-label" for="page_check_<?= $page['pdpc_id']; ?>">Select</label>
                </div>	
                <input type="hidden" name="page_id[]" value="<?= $page['pdpc_id']; ?>" />
            </td>
        </tr>
    <?php }
?>