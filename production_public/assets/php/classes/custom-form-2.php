<?php
namespace CustomForms;

use ClickComApi;
use MailAttachment;

/**
 * Custom Form Input Generation
 *
 * @param object $template_file
 *
 * @param string $directory
 *
 * @param array $question_types
 *
 * @version 2.0
 *
 * @return string Form Input Html
 *
 */
class CustomForms2
{
    public $memberId;
    public $memberResponseId;
    public $isRegistration = false;
    public $formId = 0;
    public $questionId;
    public $processedResponse;

    private $method;
    private $directory;
    private $template_file;
    private $question_types;
    private $placeholder;
    private $question_type;
    public $default = "";
    private $uploadToUrl;
    public $options = [];
    public $input_type = "text";
    public $input_id_name = "";
    public $icon = "pe-7s-leaf fa-1x icon-gradient bg-grow-early text-success";

    public function __construct(
        $template_file, string $uploadToUrl = "", string $method = "get") {

        $this->method = $method;
        $this->uploadToUrl = $uploadToUrl;
        $this->directory = DIRECTORY;
        $this->template_file = $template_file;

        $ccApi = new ClickComApi(API_BASE_URL, API_V2_BASE_URL, LocBaseUrl);

        $get_string = "system-questions/types";
        $this->question_types = $ccApi->fetch_from($get_string, function ($question_types) {
            return isset($question_types[0]) ? $question_types : [];
        }, $debug = false);
    }

    public function makeInput(
        $placeholder, $question_type, $inputValue = null, $optional = false) {
        $this->inputValue = $inputValue;
        $this->placeholder = $placeholder;
        $this->question_type = (int) $question_type;
        $this->input_id_name = alphaNumericOnly($this->placeholder);

        $optional = $optional
        ? "<span class=\"text-warning\">
            [Leave Empty if Not Applicable]
        </span>" : "";
        // $header_title = "<h6>{$this->placeholder} $optional</h6>";
        $header_title = "<h6>{$this->placeholder}</h6>";

        foreach ($this->question_types as $key => $qt) {
            // print_r($qt);
            $qti = (int) $qt['id'];
            $input_type = strtolower(str_replace(" ", "_", $qt['type']));

            // echo "[{'this->question_type'=>{$this->question_type}}{'qti'=>{$qti}}]";

            if ($this->question_type == $qti) {
                return $header_title . $this->$input_type();
            } else {
                // echo new Exception("Type Does Not Exist!", 1);
            }
        }
    }

    private function __getValue()
    {
        $input_value = $this->default;
        if ($this->method == "post") {
            $input_value = (isset($_POST[$this->input_id_name]))
            ? $_POST[$this->input_id_name] : $input_value;
        } else {
            $input_value = (isset($_GET[$this->input_id_name]))
            ? $_GET[$this->input_id_name] : $input_value;
        }
        return $input_value;
    }

    private function string()
    {
        $input_value = $this->__getValue();

        $input_value = 'value="' . $input_value . '"';
        $input_attributes = '' . $input_value . '
            name="' . $this->input_id_name . '"
            id="' . $this->input_id_name . '"
            placeholder="' . $this->placeholder . '"';
        return $this->template_file->use($this->directory
            . "/templates/form/input-icon--left.tmpl", [
                ["name" => "icon", "value" => $this->icon],
                ["name" => "type", "value" => "text"],
                ["name" => "input_class", "value" => "-height-inherit-"],
                ["name" => "input_attributes", "value" => $input_attributes],
            ]);
    }

    private function datetime()
    {
        $input_value = $this->__getValue();

        $input_value = (empty($input_value))
        ? "" : date("Y-m-d H:i:s", strtotime($input_value['date']));

        $input_value = 'value="' . $input_value . '"';
        $input_attributes = '' . $input_value . '
            name="' . $this->input_id_name . '"
            id="' . $this->input_id_name . '"
            placeholder="' . $this->placeholder . '"';
        return $this->template_file->use($this->directory
            . "/templates/form/input-icon--left.tmpl", [
                ["name" => "icon", "value" => $this->icon],
                ["name" => "type", "value" => "datetime-local"],
                ["name" => "input_class", "value" => "-height-inherit-"],
                ["name" => "input_attributes", "value" => $input_attributes],
            ]);
    }

    private function date()
    {
        $input_value = $this->__getValue();

        $input_value = (empty($input_value))
        ? "" : date("Y-m-d", strtotime($input_value['date']));

        $input_value = (empty($input_value))
        ? "" : date("m/d/Y", strtotime($input_value));
        $input_value = 'value="' . $input_value . '"';

        $input_attributes = '' . $input_value . '
            name="' . $this->input_id_name . '"
            id="' . $this->input_id_name . '"
            placeholder="' . $this->placeholder . '"';
        return $this->template_file->use($this->directory
            . "/templates/form/input-icon--left.tmpl", [
                ["name" => "icon", "value" => $this->icon],
                ["name" => "type", "value" => "text"],
                ["name" => "input_class", "value" => "datepicker-here "],
                ["name" => "input_attributes", "value" => $input_attributes],
            ]);
    }
    private function time()
    {
        $input_value = $this->__getValue();

        $input_value = (empty($input_value))
        ? "" : date("H:i:s", strtotime($input_value['date']));

        $input_value = 'value="' . $input_value . '"';
        $input_attributes = '' . $input_value . '
            name="' . $this->input_id_name . '"
            id="' . $this->input_id_name . '"
            placeholder="' . $this->placeholder . '"';
        return $this->template_file->use($this->directory
            . "/templates/form/input-icon--left.tmpl", [
                ["name" => "icon", "value" => $this->icon],
                ["name" => "type", "value" => "time"],
                ["name" => "input_class", "value" => "-height-inherit-"],
                ["name" => "input_attributes", "value" => $input_attributes],
            ]);
    }

    private function integer()
    {
        $input_value = (int) $this->__getValue();

        $input_value = 'value="' . $input_value . '"';
        $input_attributes = '' . $input_value . '
            name="' . $this->input_id_name . '"
            id="' . $this->input_id_name . '"
            placeholder="' . $this->placeholder . '"';
        return $this->template_file->use($this->directory
            . "/templates/form/input-icon--left.tmpl", [
                ["name" => "icon", "value" => $this->icon],
                ["name" => "type", "value" => "number"],
                ["name" => "input_class", "value" => "-height-inherit-"],
                ["name" => "input_attributes", "value" => $input_attributes],
            ]);
    }

    private function decimal()
    {
        $input_value = (float) $this->__getValue();

        $input_value = 'value="' . $input_value . '"';
        $input_attributes = '' . $input_value . '
            name="' . $this->input_id_name . '"
            id="' . $this->input_id_name . '" step="0.01"
            placeholder="' . $this->placeholder . '"';
        return $this->template_file->use($this->directory
            . "/templates/form/input-icon--left.tmpl", [
                ["name" => "icon", "value" => $this->icon],
                ["name" => "type", "value" => "number"],
                ["name" => "input_class", "value" => "-height-inherit-"],
                ["name" => "input_attributes", "value" => $input_attributes],
            ]);
    }

    private function boolean()
    {
        $input_value = $this->__getValue();

        $this_options = [
            ["id" => "1", "name" => "Yes"],
            ["id" => "0", "name" => "No"],
        ];

        $options = '';
        foreach ($this_options as $key => $option) {
            $isSelected = ((int) $option['id'] == (int) $input_value)
            ? "selected" : "";
            $options .= '<option value="' . $option['id'] . '"
            ' . $isSelected . '>' . $option['name'] . '</option>';
        }
        $input_value = '
                <option value="null"> --Select: ' . $this->placeholder . '-- </option>
                ' . @$options . '
            ';
        $input_attributes = 'name="' . @$this->input_id_name . '"
        id="' . @$this->input_id_name . '"';
        return $this->template_file->use(DIRECTORY . "/templates/form/input-select-icon--left.tmpl", [
            ["name" => "icon", "value" => "pe-7s-leaf fa-1x icon-gradient bg-grow-early text-success"],
            ["name" => "input_class", "value" => "-height-inherit-"],
            ["name" => "input_attributes", "value" => $input_attributes],
            ["name" => "options", "value" => $input_value],
        ]);
    }

    private function select_single()
    {
        $input_value = $this->__getValue();

        $options = '';
        foreach ($this->options as $key => $option) {
            $isSelected = ((int) $option['id'] == (int) $input_value)
            ? "selected" : "";
            $options .= '<option value="' . $option['id'] . '"
            ' . $isSelected . '>' . $option['response'] . '</option>';
        }
        $input_value = '
                <option value=""> --Select: ' . $this->placeholder . '-- </option>
                ' . @$options . '
            ';
        $input_attributes = 'name="' . @$this->input_id_name . '"
        id="' . @$this->input_id_name . '"';
        return $this->template_file->use(DIRECTORY . "/templates/form/input-select-icon--left.tmpl", [
            ["name" => "icon", "value" => "pe-7s-leaf fa-1x icon-gradient bg-grow-early text-success"],
            ["name" => "input_class", "value" => "-height-inherit-"],
            ["name" => "input_attributes", "value" => $input_attributes],
            ["name" => "options", "value" => $input_value],
        ]) . $this->__otherPreferredChoice();
    }

    private function __otherPreferredChoice()
    {
        $header_title = "<h6 class=\"text-info\">
            Enter Other Preferred Choice of
            {$this->placeholder} if not available
        </h6>";

        $input_value = 'value=""';
        $input_attributes = '' . $input_value . '
            name="other_' . $this->input_id_name . '"
            id="other_' . $this->input_id_name . '"
            placeholder="Enter Other Preferred Choice if not available"';

        return $header_title . $this->template_file->use($this->directory
            . "/templates/form/input-icon--left.tmpl", [
                ["name" => "icon", "value" => $this->icon],
                ["name" => "type", "value" => "text"],
                ["name" => "input_class", "value" => "-height-inherit-"],
                ["name" => "input_attributes", "value" => $input_attributes],
            ]);
    }

    private function select_multiple()
    {
        $input_value = $this->__getValue();

        if (!is_array($input_value)) {
            $input_value = [];
        }

        $options = '';
        foreach ($this->options as $key => $option) {
            $isSelected = (in_array((int) $option['id'], $input_value))
            ? "selected" : "";
            $options .= '<option value="' . $option['id'] . '"
            ' . $isSelected . '>' . $option['response'] . '</option>';
        }
        $mainSelect = is_null($this->default)
        ? "selected" : "";
        $input_value = '
                <option value="" ' . $mainSelect . '>
                --Select: ' . $this->placeholder . '-- </option>
                ' . @$options . '
            ';
        $input_attributes = 'name="' . @$this->input_id_name . '[]" id="' . @$this->input_id_name . '" multiple="true"';
        return $this->template_file->use(DIRECTORY . "/templates/form/input-select-icon--left.tmpl", [
            ["name" => "icon", "value" => "pe-7s-leaf fa-1x icon-gradient bg-grow-early text-success"],
            ["name" => "input_class", "value" => "-height-inherit-"],
            ["name" => "input_attributes", "value" => $input_attributes],
            ["name" => "options", "value" => $input_value],
        ]) . $this->__otherPreferredChoice();
    }

    public function setFileUploaderPageUrlParams(?int $memberId,
        ?int $memberResponseId, ?int $formId, ?int $questionId) {
        $this->memberId = $memberId;
        $this->memberResponseId = $memberResponseId;
        $this->formId = $formId;
        $this->questionId = $questionId;
    }

    private function setFileUploaderPageUrlParamsOld(?int $memberId,
        ?int $memberResponseId, ?bool $isRegistration, ?int $formId, ?int $questionId) {
        $this->memberId = $memberId;
        $this->memberResponseId = $memberResponseId;
        $this->isRegistration = $isRegistration;
        $this->formId = $formId;
        $this->questionId = $questionId;
    }

    private function _fileUploaderPageUrlParams()
    {
        return CLIENT_BASE_URL . "/update-member-profile/file-uploader" .
            "?member-id={$this->memberId}" .
            "&member-response-id={$this->memberResponseId}" .
            "&form-id={$this->formId}" .
            "&question-id={$this->questionId}";
    }

    private function _fileUploaderPageUrlParamsOld()
    {
        return CLIENT_BASE_URL . "/update-member-profile/file-uploader" .
            "?member-id={$this->memberId}" .
            "&member-response-id={$this->memberResponseId}" .
            "&is-registration={$this->isRegistration}" .
            "&form-id={$this->formId}" .
            "&question-id={$this->questionId}";
    }

    private function file()
    {

        $input_value = $this->__getValue();

        // $input_value = 'value="' . $input_value . '"';
        // $input_attributes = '' . $input_value . '
        // name="' . $this->input_id_name . '" accept="*"
        // id="' . $this->input_id_name . '"
        // placeholder="' . $this->placeholder . '"';

        // $form = $this->template_file->use($this->directory
        //     . "/templates/form/input-icon--left.tmpl", [
        //         ["name" => "icon", "value" => $this->icon],
        //         // ["name" => "icon_other", "value" => "pe-7s-text--view icon-gradient bg-warm-flame text-success"],
        //         // ["name" => "icon_attributes__other", "value" => 'file-view="' . $this->input_id_name . '"'],
        //         ["name" => "type", "value" => "file"],
        //         ["name" => "input_class", "value" => "-height-inherit-"],
        //         ["name" => "input_attributes", "value" => $input_attributes],
        //     ]);

        $uploadFile = $this->displayUploadedFile($this->processedResponse);
        $fileUploaderPageUrl = $this->_fileUploaderPageUrlParams();
        $stringInput = $input_value;

        return "
                <a href=\"$fileUploaderPageUrl&multiple=false\"
                    type=\"button\" target=\"_blank\"
                    class=\"btn btn-sm btn-outline-success btn-block\">
                    Upload/ Update {$this->placeholder} File
                </a>
                <button popupWindow-btn=\"{$this->input_id_name}\"
                    popupWindow-title=\"Uploaded File Viewer\"
                    type=\"button\"
                    class=\"btn btn-sm btn-outline-info btn-block\">
                    View {$this->placeholder} File
                </button>
                <div popupWindow-content=\"{$this->input_id_name}\">
                    {$uploadFile}
                </div>
                <input type=\"text\" class=\"no-select2 d-none\" 
                    name=\"{$this->input_id_name}\" value=\"{$stringInput}\">
            ";
    }

    private function multiple_files()
    {
        $input_value = $this->__getValue();

        // $input_value = 'value="' . $input_value . '"';
        // $input_attributes = '' . $input_value . '
        //     name="' . $this->input_id_name . '"
        //     accept="*" id="' . $this->input_id_name . '"
        //     placeholder="' . $this->placeholder . '" multiple="true"';
        // return $this->template_file->use($this->directory
        //     . "/templates/form/input-icon--both.tmpl", [
        //         ["name" => "icon", "value" => $this->icon],
        //         ["name" => "icon_other", "value" => "pe-7s-text--view icon-gradient bg-warm-flame text-success"],
        //         ["name" => "icon_attributes__other", "value" => 'file-view="' . $this->input_id_name . '"'],
        //         ["name" => "type", "value" => "file"],
        //         ["name" => "input_class", "value" => "-height-inherit-"],
        //         ["name" => "input_attributes", "value" => $input_attributes],
        //     ]);

        $uploadFile = $this->displayUploadedFile($this->processedResponse);
        $fileUploaderPageUrl = $this->_fileUploaderPageUrlParams();
        $stringInput = is_array($input_value)? implode(",", $input_value): $input_value;
        
        return "
                <a href=\"$fileUploaderPageUrl&multiple=true\"
                    type=\"button\" target=\"_blank\"
                    class=\"btn btn-sm btn-outline-success btn-block\">
                    Upload/ Update {$this->placeholder} File(s)
                </a>
                <button popupWindow-btn=\"{$this->input_id_name}\"
                    popupWindow-title=\"Uploaded File(s) Viewer\"
                    type=\"button\"
                    class=\"btn btn-sm btn-outline-info btn-block\">
                    View {$this->placeholder} File(s)
                </button>
                <div popupWindow-content=\"{$this->input_id_name}\">
                    {$uploadFile}
                </div>
                <input type=\"text\" class=\"no-select2 d-none\" 
                    name=\"{$this->input_id_name}\" value=\"{$stringInput}\">
            ";
    }

    private function long_text()
    {
        $input_value = $this->__getValue();
        $input_value = empty($input_value)? "": $input_value;

        $input_attributes = 'name="' . $this->input_id_name . '"
        id="' . $this->input_id_name . '" placeholder="' . $this->placeholder . '" rows="4"';
        return $this->template_file->use(DIRECTORY . "/templates/form/input-textarea.tmpl", [
            ["name" => "default_value", "value" => $input_value],
            ["name" => "input_class", "value" => "-height-inherit-"],
            ["name" => "input_attributes", "value" => $input_attributes],
        ]);
    }

    public function displayUploadedFile($files)
    {
        // print_r($files);
        $attachments = [];

        if (is_array($files)) {
            foreach ($files as $key => $mR) {
                $attachment = [];
                $attachment['pdccmc_id'] = $mR['id'];
                $attachment['pdccmc_attachment'] = $mR['attachment'];
    
                if (!in_array($attachment, $attachments)) {
                    array_push($attachments, $attachment);
                }
            }
        }

        if (!empty($attachments)) {
            $baseUrl = FILE_BUCKET_BASE_URL . "files/";
            $MailAttachment = new MailAttachment($baseUrl);
            
            $filesDisplay = $MailAttachment->files_alt($attachments, 10000,
                ["col" => "col-md-3", "width" => "50%"], true, false
            );
            return "
                <div class=\"container\">
                    <div class=\"row justify-content-center\">
                        <div class=\"col-lg-12 col-md-12\">
                            <div class=\"container\">
                                <div class=\"row justify-content-center\">
                                    $filesDisplay
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ";
        } else {
            return "
                <div class=\"container\">
                    <div class=\"card p-2\">
                        <h1 class=\"fa fa-2x\">No Files</h1>
                    </div>
                </div>
            ";
        }
    }
}
