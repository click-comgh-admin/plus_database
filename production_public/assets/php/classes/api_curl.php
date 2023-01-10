<?php
require_once DIRECTORY . '/main.php';

class ClickComApi
{
    private $base_url;
    private $v2_base_url;
    private $location_base_url;

    private $account_type = "account_type";
    private $account_code = "client-membership";
    private $subscription = "subscription";
    private $membership_size = "membership-size";
    private $designation = "designation";
    private $religion = "religion";
    private $occupation = "occupation";
    private $client_levels = "client_levels";
    private $languages = "languages";
    private $education = "education";
    private $marital_status = "marital_status";
    private $active_status = "active_status";
    private $forgot_password = "forgot-password";
    private $reset_password = "reset-password";
    private $account_login = "login";
    private $account_login_v2_client = "clients/login";
    private $admin_membership = "admin-membership";
    private $client_membership = "client-membership";
    private $membership_filter = "membership-filter";
    private $membership = "membership";
    private $communications = "communications";
    private $file_manager = "file-manager";
    private $attendance = "attendance";
    private $dues = "dues";
    private $school = "school";
    private $custom_form = "custom-form";
    private $district_status = "district-status";

    public function __construct($base_url, $v2_base_url, $location_base_url)
    {
        $this->base_url = $base_url;
        $this->v2_base_url = $v2_base_url;
        $this->location_base_url = $location_base_url;
    }

    public function account_type($all = false, $id = 1, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($all === true) {
            $response = curlCall($this->base_url . $this->account_type . "/all", $curl);
        } else if ($all === "one") {
            $response = curlCall($this->base_url . $this->account_type . "/one?id=$id", $curl);
        } else {
            $response = curlCall($this->base_url . $this->account_type . "/all", $curl);
        }
        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function subscription_duration($all = false, $id = 1, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($all === true) {
            $response = curlCall($this->base_url . $this->subscription . "/all_durations", $curl);
        } else if ($all === "one") {
            $response = curlCall($this->base_url . $this->subscription . "/duration?id=$id", $curl);
        } else {
            $response = curlCall($this->base_url . $this->subscription . "/all_durations", $curl);
        }
        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function subscription_fee($duration_id = 1, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        $response = curlCall($this->base_url . $this->subscription . "/duration_fee?duration_id=$duration_id", $curl);

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function subscription_trial($callback, $debug = false)
    {
        $curl = curl_init();
        $response = curlCall($this->base_url . $this->subscription . "/trial", $curl);

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function subscription($get_string, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();

        $response = curlCall($this->base_url . $this->subscription . "/$get_string", $curl);

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function membership_size($all = false, $id = 1, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($all === true) {
            $response = curlCall($this->base_url . $this->membership_size . "/all_sizes", $curl);
        } else {
            $response = curlCall($this->base_url . $this->membership_size . "/size?id=$id", $curl);
        }
        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function membership_sizes($get_string, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        // echo $this->base_url.$this->membership_size."/$get_string";
        $response = curlCall($this->base_url . $this->membership_size . "/$get_string", $curl);

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function designation($all = false, $id = 1, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($all) {
            $response = locationCurl($this->base_url . $this->designation . "/all", $curl);
        } else {
            $response = locationCurl($this->base_url . $this->designation . "/one?id=$id", $curl);
        }
        $err = curl_error($curl);
        curl_close($curl);
        $locationCurlResponse = locationCurlResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $locationCurlResponse);
        }
    }

    public function staff_status($all = false, $id = 1, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($all) {
            $response = locationCurl($this->base_url . $this->designation . "/all_staff_status", $curl);
        } else {
            $response = locationCurl($this->base_url . $this->designation . "/one_staff_status?id=$id", $curl);
        }
        $err = curl_error($curl);
        curl_close($curl);
        $locationCurlResponse = locationCurlResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $locationCurlResponse);
        }
    }

    public function occupation($all = false, $id = 1, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($all === true) {
            $response = curlCall($this->base_url . $this->occupation . "/all", $curl);
        } else if ($all === "one") {
            $response = curlCall($this->base_url . $this->occupation . "/one?id=$id", $curl);
        } else {
            $response = curlCall($this->base_url . $this->occupation . "/all", $curl);
        }
        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function client_levels($all = false, $id = 1, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($all === true) {
            $response = curlCall($this->base_url . $this->client_levels . "/all", $curl);
        } else if ($all === "one") {
            $response = curlCall($this->base_url . $this->client_levels . "/one?id=$id", $curl);
        } else {
            $response = curlCall($this->base_url . $this->client_levels . "/all", $curl);
        }
        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function education($all = false, $id = 1, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($all === true) {
            $response = curlCall($this->base_url . $this->education . "/all", $curl);
        } else if ($all === "one") {
            $response = curlCall($this->base_url . $this->education . "/one?id=$id", $curl);
        } else {
            $response = curlCall($this->base_url . $this->education . "/all", $curl);
        }
        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function marital_status($all = false, $id = 1, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($all === true) {
            $response = curlCall($this->base_url . $this->marital_status . "/all", $curl);
        } else if ($all === "one") {
            $response = curlCall($this->base_url . $this->marital_status . "/one?id=$id", $curl);
        } else {
            $response = curlCall($this->base_url . $this->marital_status . "/all", $curl);
        }
        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function active_status($all = false, $id = 1, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($all === true) {
            $response = curlCall($this->base_url . $this->active_status . "/all", $curl);
        } else if ($all === "one") {
            $response = curlCall($this->base_url . $this->active_status . "/one?id=$id", $curl);
        } else {
            $response = curlCall($this->base_url . $this->active_status . "/all", $curl);
        }
        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function religion($all = false, $id = 1, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($all === true) {
            $response = curlCall($this->base_url . $this->religion . "/all", $curl);
        } else if ($all === "one") {
            $response = curlCall($this->base_url . $this->religion . "/one?id=$id", $curl);
        } else {
            $response = curlCall($this->base_url . $this->religion . "/all", $curl);
        }
        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function languages($all = false, $id = 1, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($all === true) {
            $response = curlCall($this->base_url . $this->languages . "/all", $curl);
        } else if ($all === "one") {
            $response = curlCall($this->base_url . $this->languages . "/one?id=$id", $curl);
        } else {
            $response = curlCall($this->base_url . $this->languages . "/all", $curl);
        }
        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function account_code($all = false, $id = 1, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($all === true) {
            $response = curlCall($this->base_url . $this->account_code . "/all_client_codes", $curl);
        } else if ($all === "id") {
            $response = curlCall($this->base_url . $this->account_code . "/one_client_code?id=$id", $curl);
        } else if ($all === "code") {
            $response = curlCall($this->base_url . $this->account_code . "/one_client_code?code=$id", $curl);
        } else {
            $response = curlCall($this->base_url . $this->account_code . "/all_client_codes", $curl);
        }
        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function account_code_post($update = false, array $post = [], ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($update === true) {
            $response = curlCall($this->base_url . $this->account_code . "/update_client_code", $curl, $method = "POST",
                $post_data = $post
            );
        } else {
            $response = curlCall($this->base_url . $this->account_code . "/add_client_code", $curl, $method = "POST",
                $post_data = $post
            );
        }

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponseSimple($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function account_sms_id($all = false, $id = 1, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($all === true) {
            $response = curlCall($this->base_url . $this->account_code . "/all_client_sms_ids", $curl);
        } else if ($all === "id") {
            $response = curlCall($this->base_url . $this->account_code . "/one_client_sms_id?id=$id", $curl);
        } else if ($all === "sms_id") {
            $response = curlCall($this->base_url . $this->account_code . "/one_client_sms_id?sms_id=$id", $curl);
        } else {
            $response = curlCall($this->base_url . $this->account_code . "/all_client_sms_ids", $curl);
        }
        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function account_sms_id_post($update = false, array $post = [], ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($update === true) {
            $response = curlCall($this->base_url . $this->account_code . "/update_client_sms_id", $curl, $method = "POST",
                $post_data = $post
            );
        } else {
            $response = curlCall($this->base_url . $this->account_code . "/add_client_sms_id", $curl, $method = "POST",
                $post_data = $post
            );
        }

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponseSimple($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function forgot_password($type = "member", String $email = "", ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($type === "member") {
            $response = curlCall($this->base_url . $this->forgot_password . "/" . $type, $curl, $method = "POST", $post_data =
                [
                    "account_email" => $email,
                ]
            );
        } else if ($type === "client") {
            $response = curlCall($this->base_url . $this->forgot_password . "/" . $type, $curl, $method = "POST", $post_data =
                [
                    "account_email" => $email,
                ]
            );
        } else if ($type === "admin") {
            $response = curlCall($this->base_url . $this->forgot_password . "/" . $type, $curl, $method = "POST", $post_data =
                [
                    "account_email" => $email,
                ]
            );
        } else {
            $response = curlCall($this->base_url . $this->forgot_password . "/member", $curl, $method = "POST", $post_data =
                [
                    "account_email" => $email,
                ]
            );
        }

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponseSimple($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function reset_password($type = "client", array $post = [], ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($type === "member") {
            $response = curlCall($this->base_url . $this->reset_password . "/" . $type, $curl, $method = "POST", $post_data =
                $post
            );
        } else if ($type === "client") {
            $response = curlCall($this->base_url . $this->reset_password . "/" . $type, $curl, $method = "POST", $post_data =
                $post
            );
        } else if ($type === "admin") {
            $response = curlCall($this->base_url . $this->reset_password . "/" . $type, $curl, $method = "POST", $post_data =
                $post
            );
        } else {
            $response = curlCall($this->base_url . $this->reset_password . "/client", $curl, $method = "POST", $post_data =
                $post
            );
        }

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponseSimple($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function account_login($type = "client", array $post = [], ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($type === "member") {
            $response = curlCall($this->base_url . $this->account_login . "/" . $type, $curl, $method = "POST", $post_data =
                $post
            );
        } else if ($type === "clients/login") {
            $response = curlCall($this->v2_base_url . $type, $curl, $method = "POST", $post_data =
                $post
            );
        } else if ($type === "client") {
            $response = curlCall($this->base_url . $this->account_login . "/" . $type, $curl, $method = "POST", $post_data =
                $post
            );
        } else if ($type === "admin") {
            $response = curlCall($this->base_url . $this->account_login . "/" . $type, $curl, $method = "POST", $post_data =
                $post
            );
        } else {
            $response = curlCall($this->base_url . $this->account_login . "/client", $curl, $method = "POST", $post_data =
                $post
            );
        }

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponseSimple($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function user_info($type = "client", ?int $account_id = 0, $all = false, $id = 1, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($type === "member") {
            if ($all === true) {
                $response = curlCall($this->base_url . $this->membership . "/all_members", $curl);
            } else if ($all === "all_client_members") {
                $response = curlCall($this->base_url . $this->membership . "/" . $all . "?account_id=" . $account_id, $curl);
            } else if ($all === "one_client_member") {
                $response = curlCall($this->base_url . $this->membership . "/" . $all . "?account_id=" . $account_id . "&id=" . $id, $curl);
            } else if ($all === "one_member") {
                $response = curlCall($this->base_url . $this->membership . "/" . $all . "?id=" . $id, $curl);
            } else {
                $response = curlCall($this->base_url . $this->membership . "/one_member?id=" . $id, $curl);
            }
        } else if ($type === "client") {
            if ($all === true) {
                $response = curlCall($this->base_url . $this->client_membership . "/all_clients", $curl);
            } else if ($all === "all_client_users") {
                $response = curlCall($this->base_url . $this->client_membership . "/" . $all . "?account_id=" . $account_id, $curl);
            } else if ($all === "one_client_user") {
                $response = curlCall($this->base_url . $this->client_membership . "/" . $all . "?account_id=" . $account_id . "&id=" . $id, $curl);
            } else if ($all === "one_client") {
                $response = curlCall($this->base_url . $this->client_membership . "/" . $all . "?id=" . $account_id, $curl);
            } else if ($all === "one_user") {
                $response = curlCall($this->base_url . $this->client_membership . "/" . $all . "?id=" . $id, $curl);
            } else {
                $response = curlCall($this->base_url . $this->client_membership . "/one_client?id=" . $id, $curl);
            }
        } else if ($type === "admin") {
            if ($all === true) {
                $response = curlCall($this->base_url . $this->admin_membership . "/all_users", $curl);
            } else {
                $response = curlCall($this->base_url . $this->admin_membership . "/$all?id=" . $id, $curl);
            }
        } else {
            $response = curlCall($this->base_url . $this->account_login . "/client", $curl);
        }

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function client_status($all = false, $id = 1, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($all === true) {
            $response = curlCall($this->base_url . $this->client_membership . "/all_client_statuses", $curl);
        } else if ($all === "one") {
            $response = curlCall($this->base_url . $this->client_membership . "/one_client_status?id=$id", $curl);
        } else {
            $response = curlCall($this->base_url . $this->client_membership . "/all_client_statuses", $curl);
        }
        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function get_location($type = "regions", string $get_string = "", ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();

        $response = curlCall($this->location_base_url . "?cc=show_$type&$get_string", $curl);

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function groups($all = false, ?int $account_id = 0, $id = 1, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($all === true) {
            $response = curlCall($this->base_url . $this->client_membership . "/all_client_groups?client_id=" . $account_id, $curl);
        } else if ($all === "one") {
            $response = curlCall($this->base_url . $this->client_membership . "/one_client_group?client_id=$account_id&id=$id", $curl);
        } else {
            $response = curlCall($this->base_url . $this->client_membership . "/all_client_groups=" . $account_id, $curl);
        }
        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function subgroups($all = false, ?int $account_id = 0, $group_id = null, $id = 1, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($all === true) {
            $response = curlCall($this->base_url . $this->client_membership . "/all_client_subgroups?client_id=$account_id&group_id=$group_id", $curl);
        } else if ($all === "one") {
            if (is_null($group_id)) {
                $response = curlCall($this->base_url . $this->client_membership . "/one_client_subgroup?client_id=$account_id&id=$id", $curl);
            } else {
                $response = curlCall($this->base_url . $this->client_membership . "/one_client_subgroup?client_id=$account_id&group_id=$group_id&id=$id", $curl);
            }
        } else {
            $response = curlCall($this->base_url . $this->client_membership . "/all_client_subgroups?client_id=$account_id&group_id=$group_id", $curl);
        }
        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function committees($all = false, ?int $account_id = 0, $id = 1, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($all === true) {
            $response = curlCall($this->base_url . $this->client_membership . "/all_client_committees?client_id=" . $account_id, $curl);
        } else if ($all === "one") {
            $response = curlCall($this->base_url . $this->client_membership . "/one_client_committee?client_id=$account_id&id=$id", $curl);
        } else {
            $response = curlCall($this->base_url . $this->client_membership . "/all_client_committees=" . $account_id, $curl);
        }
        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function subcommittees($all = false, ?int $account_id = 0, $committee_id = null, $id = 1, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        if ($all === true) {
            $response = curlCall($this->base_url . $this->client_membership . "/all_client_subcommittees?client_id=$account_id&committee_id=$committee_id", $curl);
        } else if ($all === "one") {
            if (is_null($committee_id)) {
                $response = curlCall($this->base_url . $this->client_membership . "/one_client_subcommittee?client_id=$account_id&id=$id", $curl);
            } else {
                $response = curlCall($this->base_url . $this->client_membership . "/one_client_subcommittee?client_id=$account_id&committee_id=$committee_id&id=$id", $curl);
            }
        } else {
            $response = curlCall($this->base_url . $this->client_membership . "/all_client_subcommittees?client_id=$account_id&committee_id=$committee_id", $curl);
        }
        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function client_members($type = "members", string $get_string = "", ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();

        $response = curlCall($this->base_url . $this->membership_filter . "/$type?$get_string", $curl);

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponseSimple($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function membership($get_string, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();

        $response = curlCall($this->base_url . $this->membership . "/$get_string", $curl);

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function action_post($url, array $post = [], ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();
        $response = curlCall($url, $curl, $method = "POST",
            $post_data = $post
        );

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponseSimple($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function communications($type = "clients", string $get_string = "", ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();

        $response = curlCall($this->base_url . $this->communications . "/$type/$get_string", $curl);

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function message_types($callback, $debug = false)
    {
        $curl = curl_init();

        $response = curlCall($this->base_url . $this->communications . "/message_types", $curl);

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function message_types_alt($endpoint, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();

        $response = curlCall($this->base_url . $this->communications . "/$endpoint", $curl);

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function file_manager($get_string, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();

        $response = curlCall($this->base_url . $this->file_manager . "/$get_string", $curl);

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function attendance($get_string, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();

        $response = curlCall($this->base_url . $this->attendance . "/$get_string", $curl);

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function dues($get_string, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();

        $response = curlCall($this->base_url . $this->dues . "/$get_string", $curl);

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function school($get_string, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();

        $response = curlCall($this->base_url . $this->school . "/$get_string", $curl);

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function custom_form($get_string, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();

        $response = curlCall($this->base_url . $this->custom_form . "/$get_string", $curl);

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function fetch_from($get_string, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();

        $response = curlCall($this->base_url . "$get_string", $curl);

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }

    public function district_status($get_string, ?callable $callback = null, $debug = false)
    {
        $curl = curl_init();

        $response = curlCall($this->base_url . $this->district_status . "/$get_string", $curl);

        $err = curl_error($curl);
        curl_close($curl);
        $curlCallResponse = curlCallResponse($err, $response, $debug = $debug);
        if (is_callable($callback)) {
            return call_user_func($callback, $curlCallResponse);
        }
    }
}
