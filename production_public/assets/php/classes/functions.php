<?php
class Functions
{
    public function __construct()
    {
        function locationCurl($url, $curl, $token = "oeiodsiosd9403b2bf0b349443j9rjsb4ywfddf8fd9089b")
        {
            curl_setopt_array($curl, array(
                CURLOPT_URL => str_replace(" ", "%20", $url),
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 30,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "GET",
                CURLOPT_HTTPHEADER => array(
                    "Accept: */*",
                    "Accept-Encoding: gzip, deflate",
                    "Authorization: Bearer $token",
                    "Cache-Control: no-cache",
                    "Connection: keep-alive",
                    "cache-control: no-cache",
                ),
            ));
            return curl_exec($curl);
        }
        function locationCurlResponse($err, $response, $debug = false)
        {
            if ($err) {
                return "cURL Error #:" . $err;
            } else {
                if ($debug == true) {
                    print_r($response);
                }
                $response = json_decode($response, 1) ?? ["error" => true];
                if ($response['error']) {
                    return $response;
                } else {
                    return $response['data'];
                }
            }
        }
        function locationCurlResponseSimple($err, $response, $debug = false)
        {
            if ($err) {
                return "cURL Error #:" . $err;
            } else {
                if ($debug == true) {
                    print_r($response);
                }
                $response = json_decode($response, 1) ?? ["error" => true];
                return $response;
            }
        }
        function curlCall($url, $curl, $method = "GET", $post_data = [], $token = API_TOKEN)
        {
            // print_r([
            //     "url" => $url,
            //     "curl" => $curl,
            //     "method" => $method,
            //     "post_data" => $post_data,
            //     "token" => $token
            // ]);
            curl_setopt_array($curl, array(
                CURLOPT_URL => str_replace(" ", "%20", $url),
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 30,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => $method,
                CURLOPT_POSTFIELDS => http_build_query($post_data),
                CURLOPT_HTTPHEADER => array(
                    "Accept: */*",
                    "Accept-Encoding: gzip, deflate",
                    "Authorization: Bearer $token",
                    "Cache-Control: no-cache",
                    "Connection: keep-alive",
                    "cache-control: no-cache",
                ),
            ));
            return curl_exec($curl);
        }

        function curlCallResponse($err, $response, $debug = false)
        {
            if ($err) {
                return "cURL Error #:" . $err;
            } else {
                if ($debug == true) {
                    print_r($response);
                }
                $response = json_decode($response, 1) ?? ["error" => true];
                if ($response['error']) {
                    return $response;
                } else {
                    return $response['data'];
                }
            }
        }

        function curlCallResponseSimple($err, $response, $debug = false)
        {
            if ($err) {
                return "cURL Error #:" . $err;
            } else {
                if ($debug == true) {
                    print_r($response);
                }
                $response = json_decode($response, 1) ?? ["error" => true];
                return $response;
            }
        }

        function activePage($url)
        {
            $currentUrl = $_SERVER['REQUEST_SCHEME'] . "://" . SERVER_HOST . $_SERVER['REQUEST_URI'];
            $currentUrl = explode("?", $currentUrl)[0];
            $currentUrl = explode("#", $currentUrl)[0];
            // echo "$url\n";
            // echo $currentUrl.".php\n";
            if (($url == $currentUrl) || ($url == $currentUrl . ".php")) {
                return true;
            }
            return false;
        }

        function has_access_to_page($pages, $AD_Api)
        {
            $currentPage = explode("/", $_SERVER['REQUEST_URI']);
            $currentPage = end($currentPage);
            $currentPage = explode("?", $currentPage)[0];
            $currentPage = explode("#", $currentPage)[0];
            define('currentPage', $currentPage);

            $hasAccess = false;

            foreach ($pages as $page) {
                $page_details = $AD_Api->pages($all = 'pages', $id = $page['moa_account_page_pageid'], function ($result) {
                    /*GET PAGE DETAILS*/
                    return @$result[0];
                });
                if (($page_details['moa_page_url'] == $currentPage) || ($page_details['moa_page_url'] . ".pmhp" == $currentPage)) {
                    $hasAccess = true;
                }
            }
            return $hasAccess;
        }

        function html_str_decode(string $string = "", bool $strip_tags = false)
        {
            $string = html_entity_decode($string, ENT_QUOTES, "UTF-8");
            $string = htmlspecialchars_decode($string, ENT_QUOTES);
            return ($strip_tags) ? preg_replace('#<[^>]+>#', ' ', $string) : $string;
        }

        function multiline_text($string = "")
        {
            $string = html_str_decode($string);
            return preg_replace('/\r+/', ' ', trim(preg_replace('/\n+/', '<br />', $string)));
        }

        function multilineText($string = "")
        {
            $string = nl2br(html_str_decode(is_null($string) ? "" : $string));

            // $string = nl2br(htmlentities($string, ENT_QUOTES, "UTF-8"));
            return $string;
        }

        function creditUnitToAmount($units, $per_unit_cost)
        {
            return floatval($units) * floatval($per_unit_cost);
        }

        function getHoursFromMins($minutes)
        {
            $minutes = (int) $minutes / 60;
            $minutes = round($minutes, 2);

            $minutes = explode(".", $minutes);
            $hours = (int) @$minutes[0];
            $_hours = ($hours === 0) ? "" : "$hours hours";
            $_hours = ($hours === 1) ? "$hours hour" : $_hours;

            $minutes = @"0." . $minutes[1];
            $minutes = round($minutes * 60);
            $_minutes = ($minutes === 0) ? "" : "$minutes minutes";
            $_minutes = ($minutes === 1) ? "$minutes minute" : $_minutes;

            return "$_hours $_minutes";
        }
        function alphaNumericOnly(String $string)
        {
            $string = strtolower(str_replace(" ", "_", $string));
            $string = trim($string, "_");
            $string = str_replace(".", "", $string);
            $string = str_replace("?", "", $string);
            $string = str_replace(",", "", $string);
            $string = str_replace("'", "", $string);
            $string = str_replace("-", "", $string);
            $string = str_replace("!", "", $string);
            $string = preg_replace('/[^A-Za-z0-9]/i', '', $string);
            return preg_replace('/[^a-z0-9]/i', '', $string);
        }
    }
}

function imageFileEndpoint(string $url, string $type)
{
    // print_r(['$url' => $url]);
    $IN = strpos($url, "files/");
    // print_r(['$IN' => $IN]);
    if ($IN === false) {
        $parts = explode("/", $url);
        // print_r(['$parts' => $parts]);
        return end($parts);
    } else {
        return $url;
    }
}

function setUpMemberImage($url, $debug = false)
{
    if ($debug) {
        echo '<pre>';
        print_r(['$url-1' => $url]);
        print_r(['strpos($url, "member/profile/") !== false' => strpos($url, "member/profile/") !== false]);
        print_r(['strpos($url, "member/logo/") !== false' => strpos($url, "member/logo/") !== false]);
    }
    if ((strpos($url, "member/logo/") !== false) || (strpos($url, "member/profile/") !== false)) {
        if ($debug) {
            print_r(['new-path' => "true"]);
        }
        if ((strpos($url, "member/logo/") !== false)) {
            $parts = explode('member/logo/', $url);
            if ($debug) {
                print_r(['$parts/logo' => $parts]);
            }

            if (isset($parts[1])) {
                $url = FILE_BUCKET_BASE_URL . "/files/member/logo/" . $parts[1];
            }
        } elseif ((strpos($url, "member/profile/") !== false)) {
            $parts = explode('member/profile/', $url);
            if ($debug) {
                print_r(['$parts/profile' => $parts]);
            }

            if (isset($parts[1])) {
                $url = FILE_BUCKET_BASE_URL . "/files/member/profile/" . $parts[1];
            }
        }
    } else {
        if ($debug) {
            print_r(['new-path' => "false"]);
        }
        $parts = explode('/', $url);
        $fileName = end($parts);
        $url = FILE_BUCKET_BASE_URL . "/files/members/profile-picture/" . $fileName;
    }
    if ($debug) {
        print_r(['$url-2' => $url]);
        echo '</pre>';
    }
    return $url;
}

function setUpClientImage($url, $debug = false)
{
    if ($debug) {
        echo '<pre>';
        print_r(['$url-1' => $url]);
        print_r(['strpos($url, "clients/profile-picture/") !== false' => strpos($url, "clients/profile-picture/") !== false]);
        print_r(['strpos($url, "clients/logo/") !== false' => strpos($url, "clients/logo/") !== false]);
    }
    if ((strpos($url, "clients/logo/") !== false) || (strpos($url, "clients/profile-picture/") !== false)) {
        if ($debug) {
            print_r(['new-path' => "true"]);
        }
        if ((strpos($url, "clients/logo/") !== false)) {
            $parts = explode('clients/logo/', $url);
            if ($debug) {
                print_r(['$parts/logo' => $parts]);
            }

            if (isset($parts[1])) {
                $url = FILE_BUCKET_BASE_URL . "/files/clients/logo/" . $parts[1];
            }
        } elseif ((strpos($url, "clients/profile-picture/") !== false)) {
            $parts = explode('clients/profile-picture/', $url);
            if ($debug) {
                print_r(['$parts/profile' => $parts]);
            }

            if (isset($parts[1])) {
                $url = FILE_BUCKET_BASE_URL . "/files/clients/profile-picture/" . $parts[1];
            }
        }
    } else {
        if ($debug) {
            print_r(['new-path' => "false"]);
        }
        $parts = explode('/', $url);
        $fileName = end($parts);
        $url = FILE_BUCKET_BASE_URL . "/files/clients/profile-picture/" . $fileName;
    }
    if ($debug) {
        print_r(['$url-2' => $url]);
        echo '</pre>';
    }
    return $url;
}

function changeAppByLink(string $base_url, string $page)
{
    global $UserLoginInfo_I;
    $token = $UserLoginInfo_I->token;
    $permissionKey = base64_encode($token ?? "");
    $accountsAccessPageKey = base64_encode($page ?? "");

    $URL = $base_url . 'app-reroute?permission-key='. $permissionKey . '&access-page-key=' . $accountsAccessPageKey;
    // print_r(['$URL' => $URL]);

    return $URL;
}
