<?php
	namespace Encryptor;

	use Exception;
	use Throwable;
	use Error;

	/**
	 * Encrytion
	 * simple method to encrypt or decrypt a plain text string
	 * initialization vector(IV) has to be the same when encrypting and decrypting
	 * 
	 * @param string $action: can be 'encrypt' or 'decrypt'
	 * @param string $string: string to encrypt or decrypt
	 * 
	 * @return string
	 */
	class Encryptor
	{
		private $iv;
		private $output;
		private $hash_key;
		private $secret_iv;
		private $secret_key;
		private $encrypt_method;

		function __construct($secret_key, $secret_iv)
		{
			$this->output = false;
			$this->secret_iv = $secret_iv;
			$this->secret_key = $secret_key;
			$this->encrypt_method = "AES-256-CBC";
			// hash
			$this->hash_key = hash('sha256', $secret_key);
			// iv - encrypt method AES-256-CBC expects 16 bytes - else you will get a warning
			$this->iv = substr(hash('sha256', $secret_iv), 0, 16);
		}
		
		public function encrypt(string $string)
		{
			$this->output = openssl_encrypt($string, $this->encrypt_method, $this->hash_key, 0, $this->iv);
			$this->output = base64_encode($this->output);
			$this->output = str_replace('=', '', $this->output);
			return $this->output;
		}
		
		public function decrypt(string $string)
		{
			$this->output = openssl_decrypt(base64_decode($string), $this->encrypt_method, $this->hash_key, 0, $this->iv);
			return $this->output;
		}
	}