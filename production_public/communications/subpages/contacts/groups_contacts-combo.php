<div class="col-md-8 col-lg-8">
    <div class="main-card mb-3 card shadow">
        <div class="card-header"><i class="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
            <div class="btn-actions-pane-right px-1">
                <div class="btn-group-sm nav btn-group" role="group">
                    <a class="btn-shadow btn btn-info show active" href="?contacts">Contacts</a>
                    <a class="btn-shadow btn btn-info show" href="?groups">Groups</a>
                </div>
            </div>
            <div class="p-1">
                <div class="btn-group-sm nav btn-group" role="group">
                    <a class="btn-shadow btn btn-primary show active" href="#load_contacts" data-toggle="tab">Contacts</a>
                    <a class="btn-shadow btn btn-primary show" href="#load_groups" data-toggle="tab">Groups</a>
                </div>
            </div>
        </div>
        <div class="card-body p-0 mb-4">
            <div class="tab-content">
                <div class="tab-pane show active p-0" id="load_contacts" role="tabpanel">
                    <div class="row justify-content-center">
                        <?php require_once 'contacts.php'; ?>
                    </div>
                </div>
                <div class="tab-pane show p-0" id="load_groups" role="tabpanel">
                    <div class="row justify-content-center">
                        <?php require_once 'groups.php'; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>