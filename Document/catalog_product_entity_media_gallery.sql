CREATE TABLE catalog_product_entity_media_gallery(
	value_id INT(11) AUTO_INCREMENT PRIMARY KEY,
	attribute_id SMALLINT(6) NOT NULL,
	entity_id INT(10) NOT NULL,
	value VARCHAR(255) NULL
)
