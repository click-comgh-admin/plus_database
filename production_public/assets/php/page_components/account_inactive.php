                    <?php if (AccountInfoCategory == 10) { ?>
                        <div class="row justify-content-center">
                            <div class="col-md-10 col-lg-6">
                                <div class="mb-3 card">
                                    <div class="card-header-tab card-header-tab-animation card-header">
                                        <div class="card-header-title">
                                            <i class="header-icon pe-7s-shield icon-gradient bg-love-kiss"> </i> Account Inactive
                                        </div>
                                        <div class="btn-actions-pane-right">
                                            <div class="btn-group-md nav btn-group" role="group">
                                                <?php
                                                    if (empty($account_status['subscription'])) { ?>
                                                        <a class="btn-shadow btn btn-danger show 
                                                            <?php
                                                                $isActiveTabBtn = isset($_POST['add-form']) ? "": "active";
                                                                $isActiveTabBtn = (isset($_POST['add-form']) && ($_POST['add-form'] == "update_subscription_initial")) ? "active": $isActiveTabBtn;
                                                                $isActiveTabBtn = (isset($_POST['add-form']) && ($_POST['add-form'] == "update_subscription")) ? "": $isActiveTabBtn;
                                                            ?> <?= $isActiveTabBtn; ?>" href="#trial_subscription" data-toggle="tab">
                                                            Account Activation
                                                        </a>
                                                    <?php }
                                                ?>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="tab-content">
                                            <?php 
                                                define('currentPageUrl', CLIENT_BASE_URL);
                                            ?>
                                            <?php
                                                if (empty($account_status['subscription'])) { ?>
                                                    <div class="tab-pane show
                                                        <?php
                                                            $isActiveTab = isset($_POST['add-form']) ? "": "active";
                                                            $isActiveTab = (isset($_POST['add-form']) && ($_POST['add-form'] == "update_subscription_initial")) ? "active": $isActiveTab;
                                                            $isActiveTab = (isset($_POST['add-form']) && ($_POST['add-form'] == "update_subscription")) ? "": $isActiveTab;
                                                        ?> <?= $isActiveTab; ?>" id="trial_subscription" role="tabpanel">
                                                        <div class="card-title">Account Activation</div>
                                                        <?php 
                                                            require_once(BASE_DIRECTORY."/account/forms/subscription/district_edit_add_initial.php");
                                                        ?>
                                                    </div>
                                                <?php }
                                            ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php } else if (AccountInfoCategory == 12) { ?>
                        <div class="row justify-content-center">
                            <div class="col-md-10 col-lg-6">
                                <div class="mb-3 card">
                                    <div class="card-header-tab card-header-tab-animation card-header">
                                        <div class="card-header-title">
                                            <i class="header-icon pe-7s-shield icon-gradient bg-love-kiss"> </i> Account Inactive
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="tab-content">
                                            <?php 
                                                define('currentPageUrl', CLIENT_BASE_URL);
                                            ?>
                                            <?php
                                                if (empty($account_status['subscription'])) { ?>
                                                    <div class="tab-pane show active" role="tabpanel">
                                                        <div class="card-title">Activation Fee 
                                                            <span class="shadow shadow-md border border-warning p-1 text-warning">
                                                                <i class="font-weight-bold">For 1 Year</i>
                                                            </span>
                                                        </div>
                                                        <?php 
                                                            require_once(BASE_DIRECTORY."/account/forms/subscription/contact_bank_edit_add.php");
                                                        ?>
                                                    </div>
                                                <?php }
                                            ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php } else { ?>
                        <div class="row justify-content-center">
                            <div class="col-md-10 col-lg-6">
                                <div class="mb-3 card">
                                    <div class="card-header-tab card-header-tab-animation card-header">
                                        <div class="card-header-title">
                                            <i class="header-icon pe-7s-shield icon-gradient bg-love-kiss"> </i> Account Inactive
                                        </div>
                                        <div class="btn-actions-pane-right">
                                            <div class="btn-group-md nav btn-group" role="group">
                                                <?php
                                                    if (empty($account_status['subscription'])) { ?>
                                                        <a class="btn-shadow btn btn-danger show 
                                                            <?php
                                                                $isActiveTabBtn = isset($_POST['add-form']) ? "": "active";
                                                                $isActiveTabBtn = (isset($_POST['add-form']) && ($_POST['add-form'] == "update_subscription_initial")) ? "active": $isActiveTabBtn;
                                                                $isActiveTabBtn = (isset($_POST['add-form']) && ($_POST['add-form'] == "update_subscription")) ? "": $isActiveTabBtn;
                                                            ?> <?= $isActiveTabBtn; ?>" href="#trial_subscription" data-toggle="tab">
                                                            Account Activation
                                                        </a>
                                                    <?php } else { ?>
                                                        <a class="btn-shadow btn btn-danger show
                                                            <?php
                                                                $isActiveTabBtn = isset($_POST['add-form']) ? "": "";
                                                                $isActiveTabBtn = (isset($_POST['add-form']) && ($_POST['add-form'] == "update_subscription_initial")) ? "": $isActiveTabBtn;
                                                                $isActiveTabBtn = (isset($_POST['add-form']) && ($_POST['add-form'] == "update_subscription")) ? "active": $isActiveTabBtn;
                                                            ?> <?= $isActiveTabBtn; ?>" href="#pay_subscription" data-toggle="tab">
                                                            Subscription Plan
                                                        </a>
                                                    <?php } ?>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="tab-content">
                                            <?php 
                                                define('currentPageUrl', CLIENT_BASE_URL);
                                            ?>
                                            <?php
                                                if (empty($account_status['subscription'])) { ?>
                                                    <div class="tab-pane show
                                                        <?php
                                                            $isActiveTab = isset($_POST['add-form']) ? "": "active";
                                                            $isActiveTab = (isset($_POST['add-form']) && ($_POST['add-form'] == "update_subscription_initial")) ? "active": $isActiveTab;
                                                            $isActiveTab = (isset($_POST['add-form']) && ($_POST['add-form'] == "update_subscription")) ? "": $isActiveTab;
                                                        ?> <?= $isActiveTab; ?>" id="trial_subscription" role="tabpanel">
                                                        <div class="card-title">Account Activation</div>
                                                        <div class="card shadow shadow-lg">
                                                            <div class="card-body">
                                                                Thanks for choosing AKWAABA Services, a one-stop-shop for all your membership data management solutions. Pay the activation fee now to enjoy free access to all the exciting features on your account for 30 days. You can choose a flexible subscription plan after your account is activated. Welcome on board; expect excellent experience!
                                                            </div>
                                                        </div>
                                                        <?php 
                                                            //require_once(BASE_DIRECTORY."/subpages/forms/subscription-renewal_form.php");
                                                            require_once(BASE_DIRECTORY."/account/forms/subscription/edit_add_initial.php");
                                                        ?>
                                                    </div>
                                                <?php } else { ?>
                                                    <div class="tab-pane show <?= (empty($account_status['subscription'])) ? "": "active"; ?>
                                                        <?php
                                                            $isActiveTab = isset($_POST['add-form']) ? "": "";
                                                            $isActiveTab = (isset($_POST['add-form']) && ($_POST['add-form'] == "update_subscription_initial")) ? "": $isActiveTab;
                                                            $isActiveTab = (isset($_POST['add-form']) && ($_POST['add-form'] == "update_subscription")) ? "active": $isActiveTab;
                                                        ?> <?= $isActiveTab; ?>" id="pay_subscription" role="tabpanel">
                                                        <div class="card-title">Subscription Plan</div>
                                                        <?php
                                                            require_once(BASE_DIRECTORY."/account/forms/subscription/edit_add.php");
                                                        ?>
                                                    </div>
                                                <?php }
                                            ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php }