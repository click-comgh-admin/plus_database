<?php
	namespace CustomForm;

	use Exception;
	use Throwable;
	use Error;

	/**
	 * Custom Form Input Generation
	 * 
	 * @param object $template_file
     * 
     * @param string $directory
     * 
     * @param array $question_types
     * 
     * @return string Form Input Html
	 * 
	 */
	class CustomForm
	{
		private $method;
		private $directory;
		private $template_file;
		private $question_types;
		private $placeholder;
        private $question_type;
        public $default = null;
        public $options = [];
        public $input_type = "text";
        public $input_id_name = "";
        public $icon = "pe-7s-leaf fa-1x icon-gradient bg-grow-early text-success";

		function __construct($template_file, $directory, array $question_types, string $method = "get")
		{
            // $tf->use(DIRECTORY
            $this->method = $method;
            $this->directory = $directory;
            $this->template_file = $template_file;
            $this->question_types = $question_types;
		}
		
		public function makeInput($placeholder, $question_type)
		{
            $this->placeholder = $placeholder;
            $this->question_type = (int)$question_type;
            $this->input_id_name = strtolower(str_replace(" ", "_", $this->placeholder));
            $this->input_id_name = trim($this->input_id_name, "_");
            $this->input_id_name = str_replace(".", "", $this->input_id_name);
            $this->input_id_name = str_replace("?", "", $this->input_id_name);
            $this->input_id_name = str_replace(",", "", $this->input_id_name);
            $this->input_id_name = str_replace("'", "", $this->input_id_name);
            $this->input_id_name = str_replace("-", "", $this->input_id_name);

            $header_title = "<h6>".$this->placeholder."</h6>";
            
            foreach ($this->question_types as $key => $qt) {
                $qti = (int)$qt['pdcqq_id'];
                $input_type = strtolower(str_replace(" ", "_", $qt['pdcqq_type']));
                if ($this->question_type == $qti) {
                    return $header_title.$this->$input_type();
                } else if ($this->question_type == $qti) {
                    return $header_title.$this->$input_type();
                } else if ($this->question_type == $qti) {
                    return $header_title.$this->$input_type;
                } else if ($this->question_type == $qti) {
                    return $header_title.$this->$input_type();
                } else if ($this->question_type == $qti) {
                    return $header_title.$this->$input_type();
                }
            }
		}
		
		private function file()
		{
            $input_value = $this->default;
            if ($this->method == "post") {
                $input_value = (isset($_POST[$this->input_id_name])) ? $_POST[$this->input_id_name] : $input_value;
            } else {
                $input_value = (isset($_GET[$this->input_id_name])) ? $_GET[$this->input_id_name] : $input_value;
            }

            $input_value = 'value="'.$input_value.'"';
            $input_attributes = ''.$input_value.' name="'.$this->input_id_name.'" accept="*" id="'.$this->input_id_name.'" placeholder="'.$this->placeholder.'"';
            return $this->template_file->use($this->directory."/templates/form/input-icon--both.tmpl", [
                [ "name"=>"icon", "value"=>$this->icon ],
                [ "name"=>"icon_other", "value"=>"pe-7s-text--view icon-gradient bg-warm-flame text-success" ],
                [ "name"=>"icon_attributes__other", "value"=>'file-view="'.$this->input_id_name.'"' ],
                [ "name"=>"type", "value"=>"file" ],
                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                [ "name"=>"input_attributes", "value"=>$input_attributes ],
            ]);
		}
		
		private function input()
		{
            $input_value = $this->default;
            if ($this->method == "post") {
                $input_value = (isset($_POST[$this->input_id_name])) ? $_POST[$this->input_id_name] : $input_value;
            } else {
                $input_value = (isset($_GET[$this->input_id_name])) ? $_GET[$this->input_id_name] : $input_value;
            }

            $input_value = 'value="'.$input_value.'"';
            $input_attributes = ''.$input_value.' name="'.$this->input_id_name.'" id="'.$this->input_id_name.'" placeholder="'.$this->placeholder.'"';
            return $this->template_file->use($this->directory."/templates/form/input-icon--left.tmpl", [
                [ "name"=>"icon", "value"=>$this->icon ],
                [ "name"=>"type", "value"=>"$this->input_type" ],
                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                [ "name"=>"input_attributes", "value"=>$input_attributes ],
            ]);
		}
		
		private function single_select()
		{
            $input_value = (int)$this->default;
            if ($this->method == "post") {
                $input_value = (isset($_POST[$this->input_id_name])) ? $_POST[$this->input_id_name] : $input_value;
            } else {
                $input_value = (isset($_GET[$this->input_id_name])) ? $_GET[$this->input_id_name] : $input_value;
            }

            $options = '';
            foreach ($this->options as $key => $option) {             
                $isSelected = ((int)$option['id'] == (int)$input_value) ? "selected" : "";
                $options .= '<option value="'.$option['id'].'" '.$isSelected.'>'.$option['name'].'</option>';
            }
			$input_value = '
                <option value=""> --Select: '.$this->placeholder.'-- </option>
                '.@$options.'
            ';
            $input_attributes = 'name="'.@$this->input_id_name.'" id="'.@$this->input_id_name.'"';
            return $this->template_file->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                [ "name"=>"icon", "value"=>"pe-7s-leaf fa-1x icon-gradient bg-grow-early text-success" ],
                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                [ "name"=>"options", "value"=>$input_value ],
            ]);
		}
		
		private function multiple_select()
		{            
            $input_value = $this->default;
            if ($this->method == "post") {
                $input_value = (isset($_POST[$this->input_id_name])) ? $_POST[$this->input_id_name] : $input_value;
            } else {
                $input_value = (isset($_GET[$this->input_id_name])) ? $_GET[$this->input_id_name] : $input_value;
            }

            if (!is_array($input_value)) {
                $input_value = [];
            }

            $options = '';
            foreach ($this->options as $key => $option) {             
                $isSelected = (in_array((int)$option['id'], $input_value)) ? "selected" : "";
                $options .= '<option value="'.$option['id'].'" '.$isSelected.'>'.$option['name'].'</option>';
            }
            $mainSelect = is_null($this->default) ? "selected" : "";
			$input_value = '
                <option value="" '.$mainSelect.'> --Select: '.$this->placeholder.'-- </option>
                '.@$options.'
            ';
            $input_attributes = 'name="'.@$this->input_id_name.'[]" id="'.@$this->input_id_name.'" multiple="true"';
            return $this->template_file->use(DIRECTORY."/templates/form/input-select-icon--left.tmpl", [
                [ "name"=>"icon", "value"=>"pe-7s-leaf fa-1x icon-gradient bg-grow-early text-success" ],
                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                [ "name"=>"input_attributes", "value"=>$input_attributes ],
                [ "name"=>"options", "value"=>$input_value ],
            ]);
		}
		
		private function long_text()
		{
            $input_value = is_null($this->default) ? "" : $this->default;
            if ($this->method == "post") {
                $input_value = (isset($_POST[$this->input_id_name])) ? $_POST[$this->input_id_name] : $input_value;
            } else {
                $input_value = (isset($_GET[$this->input_id_name])) ? $_GET[$this->input_id_name] : $input_value;
            }

            $input_attributes = 'name="'.$this->input_id_name.'" id="'.$this->input_id_name.'" placeholder="'.$this->placeholder.'" rows="4"';
            return $this->template_file->use(DIRECTORY."/templates/form/input-textarea.tmpl", [
                [ "name"=>"default_value", "value"=>$input_value ],
                [ "name"=>"input_class", "value"=>"-height-inherit-" ],
                [ "name"=>"input_attributes", "value"=>$input_attributes ],
            ]);
		}
	}