<?php
    namespace FileManager;
    
	class FileManager
	{
        function __construct()
		{
        }

        public function storage_space($s) {
            if ($s>=1048576 && $s<=1073741823) {
                $conv=$s/1048576;
                $conv=round($conv)." MB";
            } else if ($s>=1073741824) {
                $conv=$s/1073741824;
                $conv=round($conv)." GB";
            } else {
                $conv=$s/1024;
                $conv=round($conv)." KB";
            }
            return $conv;
        }
        public function _storage_space($s) {
            if ($s>=1048576 && $s<=1073741823) {
                $conv=$s/1048576;
                $conv=$conv." MB";
            } else if ($s>=1073741824) {
                $conv=$s/1073741824;
                $conv=$conv." GB";
            } else {
                $conv=$s/1024;
                $conv=$conv." KB";
            }
            return $conv;
        }
        public function storage_space_reverse($s) {
            $s = strtolower($s);
            $KB = explode("kb", $s);
            $MB = explode("mb", $s);
            $GB = explode("gb", $s);
            if (isset($MB[1])) {
                $conv = floatval($MB[0]) * 1048576;
            } else if (isset($GB[1])) {
                $conv = floatval($GB[0]) * 1073741824;
            } else {
                $conv = floatval($KB[0]) * 1024;
            }
            return $conv;
        }
        public function _storage_space_reverse($s) {
            $obj=substr($s, 0, strlen($s)-3);
            $conv = '';
            print_r($obj);
            if ($obj==="100" || $obj==="200" || $obj==="500") {
                $conv=$obj*1048576;
            } else if ($obj==="1" || $obj==="2" || $obj==="3") {
                $conv=$obj*1073741824;
            } else {
                $conv=$s/1024;
            }
            return $conv;
        }
        public function used_space($s_, $_s) {
            $s = $s_-$_s;
            if ($s>=1048576 && $s<=1073741823) {
                $conv=$s/1048576;
                $conv=$conv." MB";
            } else if ($s>=1073741824) {
                $conv=$s/1073741824;
                $conv=$conv." GB";
            } else {
                $conv=$s/1024;
                $conv=$conv." KB";
            }
            return $conv;
        }
    }