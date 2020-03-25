CREATE TABLE catalog_product_entity_gallery(
	value_id INT(11) AUTO_INCREMENT PRIMARY KEY,
	entity_type_id SMALLINT(5) NOT NULL,
	attribute_id SMALLINT(6) NOT NULL,
	store_id SMALLINT(6) NOT NULL,
	entity_id INT(10) NOT NULL,
	position INT(11) NULL,
	value VARCHAR(255) NULL
)
