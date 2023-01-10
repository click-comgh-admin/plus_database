<div class="col-md-12 px-0 table-responsive">
    <table class="align-middle mb-0 table table-borderless table-striped table-hover">
        <thead>
            <tr>
                <th style="white-space: nowrap;"><span class="pe-7s-check"></span></th>
                <th style="white-space: nowrap;">Overtime Visibility</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>#</th>
                <td>
                    <?= (isset($visibility['pdt_is_visible']) && (int)$visibility['pdt_is_visible'] == 1) 
                        ? "Visible": "Not Visible"; ?>
                </td>
            </tr>
        </tbody>
    </table>
</div>