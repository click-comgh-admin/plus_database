<?php
	namespace Subscriber;
    require_once "time_ago.php";

	use Exception;
	use Throwable;
    use Error;
    use TimeAgo;

	class Subscriber
	{
        private $previousSubscription;
        private $account_info;
        public $expireDate;
        public $YearDiff;
        public $MonthDiff;
        public $DayDiff;
        public $TimeAgo;
        private $totalMonth = null;
        public $newYear;
        public $newMonth;
        public $newDay;
        private $cApi;

		function __construct($previousSubscription, $account_info, $cApi)
		{
            $this->cApi = $cApi;
            $this->account_info = $account_info;
            $this->previousSubscription = $previousSubscription;
		}
        
        public function YearDiff($year)
		{
			$curYear = date("Y");
			return (int)$year - (int)$curYear;
		}

		public function MonthDiff($month)
		{
			$curMonth = date("m");
			return (int)$month - (int)$curMonth;
		}

		public function DayDiff($day)
		{
			$curDay = date("d");
			return (int)$day - (int)$curDay;
        }

        // private function expireYear(int $year, int $duration) {
        //     $expireYear = ((int)$duration/12) + $year;
        //     return round($expireYear);
        // }

        private function expireYear(int $year, int $duration) {
            $totalMonths = (int)is_null($this->totalMonth)? 1: $this->totalMonth;
            
            $expireYear = ((int)$duration/12) + $year;
            if ((int)$totalMonths > 12) {
                $expireYear = $expireYear + ((round((int)$duration/12) > 0)? 0: 1);
            } 
            return round($expireYear);
        }

        private function expireMonth_inRange(int $month) {
            $diff = ($month - 12);
            return ($month > 12) ? $this->expireMonth_inRange($diff) : $month;
        }

        private function expireMonth(int $month, int $duration = 0) {
            $expireMonth = $this->expireMonth_inRange($month + $duration);
            return round($expireMonth);
        }
        
        private function get_difference() {
            $ai_date = $this->account_info['pdc_subscription_date'];

            if (empty($this->account_info['pdc_subscription_duration'])) {
                $ai_expireYear = date("Y");
                $ai_expireMonth = (int)date("m");
                $ai_expireDay = (int)date("d");
            } else {
                $subscription_duration = (int)@$this->cApi->subscription_duration($all="one", $id=$this->account_info['pdc_subscription_duration'],
                    function($duration) {
                    return @$duration[0]['pdd_number'];
                }, $debug = false);
                $subscription_duration = is_null($subscription_duration) ? 0: $subscription_duration;
                $ai_expireYear = $this->expireYear((int)date("Y", strtotime($ai_date)), $subscription_duration);
                $ai_expireMonth = (int)date("m", strtotime($ai_date));
                $ai_expireMonth = $this->expireMonth($ai_expireMonth, $subscription_duration);
                $ai_expireDay = (int)date("d", strtotime($ai_date));
            }

            if(($this->YearDiff($ai_expireYear) <= 0) && ($this->MonthDiff($ai_expireMonth) <= 0) && ($this->DayDiff($ai_expireDay) <= 0)) {
                if (empty($this->previousSubscription)) {
                    $i_expireYear = date("Y");
                    $i_expireMonth = (int)date("m");
                    $i_expireDay = (int)date("d");
                } else {
                    $subscription_duration = @$this->cApi->subscription_duration($all="one", $id=$this->previousSubscription['pdcp_duration'],
                        function($duration) {
                        return @$duration[0]['pdd_number'];
                    }, $debug = false);
                    // $i_date = empty($this->previousSubscription['pdcp_pay_date']) ? date("Y/m/d") : $this->previousSubscription['pdcp_pay_date'];
                    // $subscription_duration = is_null($subscription_duration) ? 0: $subscription_duration;
                    // $i_expireYear = $this->expireYear((int)date("Y", strtotime($i_date)), $subscription_duration);
                    // $i_expireMonth = (int)date("m", strtotime($i_date));
                    // $i_expireMonth = $this->expireMonth($i_expireMonth, $subscription_duration);
                    // $i_expireDay = (int)date("d", strtotime($i_date));
                    $i_expireDate = (isset($this->previousSubscription['pdcp_expire_date']) && !empty($this->previousSubscription['pdcp_expire_date'])) 
                        ? $this->previousSubscription['pdcp_expire_date']: date("Y/m/d");
                    $i_expireYear = date("Y", strtotime($i_expireDate));
                    $i_expireMonth = date("m", strtotime($i_expireDate));
                    $i_expireDay = date("d", strtotime($i_expireDate));
                }

                $this->expireDate = date("Y-m-d", strtotime("$i_expireYear-$i_expireMonth-$i_expireDay"));

                $this->TimeAgo = new TimeAgo($this->expireDate, '');
                
                $this->YearDiff = abs($this->YearDiff($i_expireYear));
                $this->MonthDiff = abs($this->MonthDiff($i_expireMonth));
                $this->DayDiff = abs($this->DayDiff($i_expireDay));
            } else {
                if (!empty($this->previousSubscription)) {
                    $subscription_duration = @$this->cApi->subscription_duration($all="one", $id=$this->previousSubscription['pdcp_duration'],
                        function($duration) {
                        return @$duration[0]['pdd_number'];
                    }, $debug = false);
                    
                    $ai_expireDate = (isset($this->previousSubscription['pdcp_expire_date']) && !empty($this->previousSubscription['pdcp_expire_date'])) 
                        ? $this->previousSubscription['pdcp_expire_date']: date("Y/m/d");
                    $ai_expireYear = date("Y", strtotime($ai_expireDate));
                    $ai_expireMonth = date("m", strtotime($ai_expireDate));
                    $ai_expireDay = date("d", strtotime($ai_expireDate));
                }
                $this->expireDate = date("Y-m-d", strtotime("$ai_expireYear-$ai_expireMonth-$ai_expireDay"));

                $this->TimeAgo = new TimeAgo($this->expireDate, '');
                
                $this->YearDiff = abs($this->YearDiff($ai_expireYear));
                $this->MonthDiff = abs($this->MonthDiff($ai_expireMonth));
                $this->DayDiff = abs($this->DayDiff($ai_expireDay));
            }
        }

        public function get() {
            $this->get_difference();
        }
	}