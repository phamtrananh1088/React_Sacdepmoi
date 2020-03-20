<?php
	require 'restful_api.php';
	require 'objects/product.php';
	require 'config/database.php';

	class product_api extends restful_api {
		function __construct(){
			parent::__construct();
		}

		function get_all_products(){
			if ($this->method == 'GET'){	
				$products_arr = array();			
				try {
						$database = new Database();	
						$conn = $database->getConnection();
						$sql = "SELECT
												*
										FROM product p";
						$stmt = $conn->prepare($sql);
						$stmt->execute();
						while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
							$product_item = new product();
							$product_item->product_id = $row["product_id"];
							$product_item->name = $row["name"];
							$product_item->description = html_entity_decode($row["description"]);
							$product_item->price = $row["price"];
							$product_item->image = $row["image"];
							$product_item->thumbnail = $row["thumbnail"];
							$products_arr[] = $row;
						}					
					}
					catch(PDOException $e) {
						error_log("Error: " . $e->getMessage());
					}	
					$this->response(200, $products_arr);
					$conn = null;	
			}
		}
		function get_eav_attribute(){
			if ($this->method == 'GET'){	
				$products_arr = array();			
				try {
						$database = new Database();	
						$conn = $database->getConnection();
						$sql = "SELECT * FROM eav_attribute where entity_type_id = 1";
						$stmt = $conn->prepare($sql);
						$stmt->execute();
						while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
							$products_arr[] = $row;
						}					
					}
					catch(PDOException $e) {
						error_log("Error: " . $e->getMessage());
					}	
					$this->response(200, $products_arr);
					$conn = null;	
			}
		}
	}
	$product_api = new product_api();
?>