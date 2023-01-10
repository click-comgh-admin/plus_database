<div class="fixed-plugin">
    <div class="dropdown show-dropdown">
        <a href="#" data-toggle="dropdown">
            <i class="fa fa-cog fa-2x"> </i>
        </a>
        <ul class="dropdown-menu">
            <li class="header-title"> Sidebar Background</li>
            <li class="adjustments-line">
                <a href="javascript:void(0)" class="switch-trigger">
                    <div class="badge-colors text-center">
                        <?php foreach ($sidebar_themes as $key => $theme) { ?>
                            <span sidebar-theme--picker="<?= $theme['moa_account_theme_sidebar_color']; ?>"
                                class="badge filter sidebar-<?= $theme['moa_account_theme_sidebar_color']; ?><?= ($accountTheme['moa_account_theme_sidebar']===$theme['moa_account_theme_sidebar_id']) ? " active": " "; ?>"
                                data-color="<?= $theme['moa_account_theme_sidebar_color']; ?>"
                                btn-url="<?= API_BASE_URL; ?>ad_theme/"
                                btn-data=<?= json_encode(["user_id"=>USER_ID, "theme_sidebar"=>$theme['moa_account_theme_sidebar_id']]); ?> ></span>
                        <?php } ?>
                    </div>
                    <div class="clearfix"></div>
                </a>
            </li>
            <li class="header-title"> Select Theme </li>
            <li class="adjustments-line text-center color-change">
                <span theme-picker="light" btn-url="<?= API_BASE_URL; ?>ad_theme/" btn-data=<?= json_encode([
                    "user_id"=>USER_ID, "theme_bg"=>1]); ?> >
                    <span class="color-label">LIGHT MODE</span>
                    <span class="badge light-badge mr-2"></span>
                </span>
                <span theme-picker="dark" btn-url="<?= API_BASE_URL; ?>ad_theme/" btn-data=<?= json_encode([
                    "user_id"=>USER_ID, "theme_bg"=>2]); ?> >
                    <span class="badge dark-badge ml-2"></span>
                    <span class="color-label">DARK MODE</span>
                </span>
            </li>
            <div class="clearfix p-2 m-2"></div>
        </ul>
    </div>
</div>