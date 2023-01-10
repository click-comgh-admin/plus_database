
        <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/complement.js"></script>
        <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/jquery.min.js"></script>
        <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/popupwindow.min.js"></script>
        <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/magnific-popup.js"></script>
        <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/bvselect.js"></script>
        <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/select2.min.js"></script>
        <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/sweetalert2.min.js"></script>
        <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/click_com_wizard.js"></script>
	<!-- <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/datepicker.min.js"></script>
	<script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/datepicker.en.js"></script> -->
	<!-- <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/date_time_picker.min.js"></script> -->
	<script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/dtp.js"></script>
	<script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/croppr.min.js"></script>
	<script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/moment.min.js"></script>
        <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/locale.js"></script>
        <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/--workers--.js"></script>
        <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/downCount.min.js"></script>
        <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/datatables.min.js"></script>
        <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/pagin_tables.js"></script>
        <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/none-table-pagination.min.js"></script>
        <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/main.js"></script>
        <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/main-forms.js"></script>
        <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/main-files.js"></script>
        <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/main-district.js"></script><!-- ////NEW///Move This Here -->
        <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/comms-search.js"></script>
	<script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/textarea.js"></script>
	<script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/textarea_raw.js"></script>
	<script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/fullscreen.js"></script>

<?php if (defined("WEB_PACK_JS_FILES_BRANCH_BTN")) { echo WEB_PACK_JS_FILES_BRANCH_BTN; } ?>
<?php if (defined("WEB_PACK_JS_FILES")) { echo WEB_PACK_JS_FILES; } ?>
<?php if ($ALLOW_AUDIO_RECORDING) {?>
        <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/pdbRecorder.js"></script>
        <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/pdbrecord.js"></script>
        <!-- <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/recorderjs/recorder.min.js"></script> -->
        <!-- <script type="text/javascript" src="<?=CLIENT_BASE_URL;?>assets/js/recorderjs.min.js"></script> -->
<?php }
if (defined("LIT_FILE_FOOTER")) {
        echo LIT_FILE_FOOTER;
}
?>