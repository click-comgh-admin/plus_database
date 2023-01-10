<div class="main-card mb-3 card shadow">
    <div class="card-header">
        <i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>Buy Credit
    </div>
    <div class="card-body py-0">
        <div class="collapse py-2 <?= (isset($_POST['add-form']) && $_POST['add-form']=="buy_credit") ? "show": ""; ?>" id="buy_credit">
            <?php require_once BASE_DIRECTORY.'/communications/forms/buy_credit.php'; ?>
        </div>
    </div>
    <div class="card-footer">
        <button class="btn-actions-pane-right btn btn-primary  <?= (isset($_POST['add-form']) && $_POST['add-form']=="buy_credit") ? "": "collapsed"; ?>" aria-expanded="false"
            type="button" data-toggle="collapse" href="#buy_credit">Open/ Collapse</button>
    </div>
</div>