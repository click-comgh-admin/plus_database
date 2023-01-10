<?php
	
	/**
	 * 
	 	Custom Functions
	 */
	class TimeAgo
	{
		public $get;

		private $time_ago;
		private $dateAgo;
		private $suffix;
		private $now;

		private $interval;
		private $months;
		private $years;
		private $hours;
		private $days;
		private $mins;
		
		function __construct(string $date, string $suffix = 'ago')
		{
			$this->dateAgo = new DateTime($date);
			$this->now = new DateTime();
			$this->suffix = $suffix;

			$this->time_ago['years'] = null;
			$this->time_ago['months'] = null;
			$this->time_ago['days'] = null;
			$this->time_ago['hours'] = null;
			$this->time_ago['mins'] = null;
		}

		public function get()
		{
			$this->interval = $this->now->diff($this->dateAgo);
			$this->years_string();

			$this->get = (($this->time_ago['years'] == "") ? "" : $this->time_ago['years'] . ", ")
				. (($this->time_ago['months'] == "") ? "" : $this->time_ago['months'] . ", ")
				. (($this->time_ago['days'] == "") ? "" : $this->time_ago['days'] . ", ")
				. (($this->time_ago['hours'] == "") ? "" : $this->time_ago['hours'] . ", ")
				. (($this->time_ago['mins'] == "") ? "" : $this->time_ago['mins'] . " ") . $this->suffix;

			return $this->get;
		}

		public function getDays()
		{
			$this->interval = $this->now->diff($this->dateAgo);
			return (int)$this->interval->format('%d');
		}

		public function getMonths()
		{
			$this->interval = $this->now->diff($this->dateAgo);
			return (int)$this->interval->format('%m');
		}

		public function getYears()
		{
			$this->interval = $this->now->diff($this->dateAgo);
			return (int)$this->interval->format('%Y');
		}

		public function getHours()
		{
			$this->interval = $this->now->diff($this->dateAgo);
			return (int)$this->interval->format('%h');
		}

		public function getMinutes()
		{
			$this->interval = $this->now->diff($this->dateAgo);
			return (int)$this->interval->format('%i');
		}

		private function years_string()
		{
			// print_r($this->interval);
			// $this->interval->format('%h');
			$this->years = (int)$this->interval->format('%Y');
			$this->months = (int)$this->interval->format('%m');
			$this->days = (int)$this->interval->format('%d');
			$this->hours = (int)$this->interval->format('%h');
			$this->mins = (int)$this->interval->format('%i');

			if ($this->years > 0) {
				$this->time_ago["years"] = $this->years. " years";
			} elseif ($this->years == 1) {
				$this->time_ago["years"] = $this->years. " year";
			} else {
				$this->time_ago["years"] = "";
			}

			$this->months_string($this->months);
			$this->days_string($this->days);
			$this->hours_string($this->hours);
			$this->mins_string($this->mins);
		}

		private function months_string()
		{
			if ($this->months > 0) {
				$this->time_ago["months"] = $this->months. " months";
			} elseif ($this->months == 1) {
				$this->time_ago["months"] = $this->months. " month";
			} else {
				$this->time_ago["months"] = "";
			}
		}
		private function days_string()
		{
			if ($this->days > 0) {
				$this->time_ago["days"] = $this->days. " days";
			} elseif ($this->days == 1) {
				$this->time_ago["days"] = $this->days. " day";
			} else {
				$this->time_ago["days"] = "";
			}
		}
		private function hours_string()
		{
			if ($this->hours == 1) {
				$this->time_ago["hours"] = "";
			} else if ($this->hours > 0) {
				$this->time_ago["hours"] = $this->hours. " hours";
			} else {
				$this->time_ago["hours"] = "";
			}
		}
		private function mins_string()
		{
			// echo $this->months."---".$this->days."---".$this->hours."---".$this->mins;

			if ($this->mins > 0) {
				$this->time_ago["mins"] = $this->mins. " mins";
			} elseif ($this->mins == 1) {
				$this->time_ago["mins"] = $this->mins. " min";
			} else {
				$this->time_ago["mins"] = "0 mins";
			}
		}
	}