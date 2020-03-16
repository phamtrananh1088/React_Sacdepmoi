<?php
class Database{
 
    // specify your own database credentials
    private $servername = "localhost";
    private $dbname = "api_db";
	//private $username = "root";
	private $username = "admin";
    private $password = "Qwaszx@123";
    public $conn;
 
    // get the database connection
    public function getConnection(){
 
        $this->conn = new PDO("mysql:host=" . $this->servername .";dbname=" . $this->dbname, $this->username, $this->password);
		$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 
        return $this->conn;
    }
}
?>