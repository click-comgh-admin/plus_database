<?php
namespace Branch;

use function LoginInfo\print_info;

class BranchInfo_I
{
    private $cookieName = "pdb-active-branch";
    /**
     * @var int $id
     */
    public $id;
    /**
     * @var string $name
     */
    public $name;
    /**
     * @var int $accountId
     */
    public $accountId;

    public function __construct()
    {
        $this->cookie_data();
        $this->decode_cookie_data();

        if ($this->__cookie_data !== "") {
            $this->id();
            $this->name();
            $this->accountId();
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

    private function id()
    {
        $id = $this->__decode_cookie_data->id;
        // print_info('id', $id);
        $this->id = (string) $id;
        // print_info('this->id', $this->id);
    }

    private function name()
    {
        $name = $this->__decode_cookie_data->name;
        // print_info('name', $name);
        $this->name = (string) $name;
        // print_info('this->name', $this->name);
    }

    private function accountId()
    {
        $accountId = $this->__decode_cookie_data->accountId;
        // print_info('accountId', $accountId);
        $this->accountId = (int) $accountId;
        // print_info('this->accountId', $this->accountId);
    }
}
