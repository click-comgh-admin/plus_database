<?php
namespace LoginInfo;

use DateTime;
use stdClass;
use CLIENT_BASE_URL;

function print_info(string $description, mixed $info)
{
    echo "<pre>\n------------------------------------------------------\n";
    print_r([$description => $info]);
    echo "\n------------------------------------------------------\n<pre>";
}
class UserLoginInfo_I
{
    /**
     * @var string $cookieName
     */
    private $cookieName = "pdb-client-user";
    /**
     * @var DateTime $expiry
     */
    public $expiry;
    /**
     * @var string $token
     */
    public $token;
    /**
     * @var ClientUserShort_I $user
     */
    public $user;
    /**
     * @var string $__cookie_data
     */
    private $__cookie_data;
    /**
     * @var mixed $__decode_cookie_data
     */
    private $__decode_cookie_data;

    public function __construct()
    {
        $this->cookie_data();
        $this->decode_cookie_data();

        if ($this->__cookie_data !== "") {
            $this->expiry_date();
            $this->token();
            $this->user();
        }

    }

    private function cookie_data()
    {
        $this->__cookie_data = isset($_COOKIE[$this->cookieName]) ? (string) $_COOKIE[$this->cookieName] : "";
    }

    private function decode_cookie_data()
    {
        $base64 = base64_decode($this->__cookie_data);
        // print_info('base64', $base64);
        $this->__decode_cookie_data = json_decode($base64);
        // print_info('this->__decode_cookie_data', $this->__decode_cookie_data);
    }

    private function expiry_date()
    {
        $expiry = $this->__decode_cookie_data?->expiry;
        // print_info('expiry', $expiry);
        $this->expiry = new DateTime($expiry);
        // print_info('this->expiry', $this->expiry);
    }

    private function token()
    {
        $token = $this->__decode_cookie_data?->token;
        // print_info('token', $token);
        $this->token = (string)$token;
        // print_info('this->token', $this->token);
    }

    private function user()
    {
        if ($user = $this->__decode_cookie_data !== null) {
            $user = $this->__decode_cookie_data->user;
            // print_info('user', $user);
            $this->user = new ClientUserShort_I($user);
            // print_info('this->user', $this->user);
        } else { 
            if (isset($_COOKIE['pdb-client-user']) && !empty($_COOKIE['pdb-client-user'])) {
                setcookie("pdb-client-user", null, null + 0 + 0 * 0 * 0, '/', NULL, NULL, FALSE);
                if (isset($_COOKIE['client_tokenLogin']) && !empty($_COOKIE['client_tokenLogin'])) {
                    @setcookie("client_tokenLogin", null, null + 0 + 0 * 0 * 0, '/', NULL, NULL, FALSE);
                }
                if (isset($_COOKIE['pdb-active-branch']) && !empty($_COOKIE['pdb-active-branch'])) {
                    @setcookie("pdb-active-branch", null, null + 0 + 0 * 0 * 0, '/', NULL, NULL, FALSE);
                }
                header("Location: " . CLIENT_BASE_URL);
            }
        }
    }
}

class ClientUserShort_I
{
    /**
     * @var int $id
     */
    public $id;
    /**
     * @var int $accountId
     */
    public $accountId;
    /**
     * @var int $branchId
     */
    public $branchId;
    /**
     * @var string $firstname
     */
    public $firstname;
    /**
     * @var string $surname
     */
    public $surname;
    /**
     * @var string $phone
     */
    public $phone;
    /**
     * @var string $email
     */
    public $email;
    /**
     * @var string $profilePicture
     */
    public $profilePicture;

    public function __construct(stdClass $userData)
    {
        $this->id = (int)$userData->id;
        $this->accountId = (int)$userData->accountId;
        $this->branchId = (int)$userData->branchId;
        $this->firstname = (string)$userData->firstname;
        $this->surname = (string)$userData->surname;
        $this->phone = (string)$userData->phone;
        $this->email = (string)$userData->email;
        $this->profilePicture = (string)$userData->profilePicture;
    }
}
