<?php
	namespace TemplateFile;

	use Exception;
	use Throwable;
	use Error;

	/**
	 * 
	 	Template Files
	 */
	class TemplateFile
	{
		private $file;
		private $templates;
		private $extention;
		private $ol = '{{';
		private $cr = '}}';
		private $file_contents;
		private $new_file_contents;
		private $template_types = ["text"];

		function __construct(string $extention = "tmpl")
		{
			$this->extention = strtolower($extention);
		}

		private function check_file(string $file)
		{
			if (!file_exists($file)) {
				throw new Error("File Does Not Exist", 1);
			}
			if (!is_file($file)) {
				throw new Error("Not A File", 1);
			}
			$filename_parts = explode(".", $file);
			$file_extention = strtolower(end($filename_parts));

			if ($file_extention != $this->extention) {
				throw new Error("Not A Valid Template File", 1);
			}
			$this->file = strtolower($file);
			return;
		}
		private function check_templates(array $templates = [])
		{
			/*[
				[
					"name" => "name of template",
					"value" => "value..."
				], ...
			]*/

			if (!is_array($templates)) {
				throw new Error("Templates Must Be An Array", 1);
			}

			$template_names = [];

			foreach ($templates as $template_key => $template) {
				$template_number = (int)$template_key + 1;
				if (isset($template['name'])) {
					$template_name = $template['name'];
					if (!in_array($template_name, $template_names)) {
						array_push($template_names, $template_name);
					} else {
						throw new Error("Template name \"$template_name\" has multiple instances :: 
							At template $template_number", 1);
					}
				} else {
					throw new Error("Unset name for template $template_number", 1);
				}
				if (!isset($template['value'])) {
					throw new Error("Unset value for template $template_number", 1);
				}
			}

			$this->templates = $templates;
			return;
		}
		private function open_file()
		{
			$this->file_contents = file_get_contents($this->file);
		}
		private function replace_contents()
		{
			$templates = $this->templates;
			$this->new_file_contents = $this->file_contents;
			foreach ($templates as $template_key => $template) {
				$template_name = $template['name'];
				$template_value = $template['value'];

				$search = $this->ol."$template_name".$this->cr;
				$replace = $template_value;
				
				$this->new_file_contents = str_replace($search, $replace, $this->new_file_contents);
			}
			$this->new_file_contents = str_replace($this->ol, '', $this->new_file_contents);
			$this->new_file_contents = str_replace($this->cr, '', $this->new_file_contents);
		}

		public function open_left(string $ol='{{') { $this->ol = $ol; }
		public function close_right(string $cr='}}') { $this->cr = $cr; }

		public function use(string $file, array $templates = [])
		{
			$this->check_file($file);
			$this->check_templates($templates);

			$this->open_file();
			$this->replace_contents();

			return $this->new_file_contents;
		}
	}