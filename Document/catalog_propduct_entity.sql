CREATE TABLE catalog_propduct_entity(
	entity_id INT(10) AUTO_INCREMENT PRIMARY KEY,
	entity_type_id SMALLINT(5) NOT NULL,
	attribute_set_id SMALLINT(5) NOT NULL,
	type_id VARCHAR(32) NOT NULL,
	sku VARCHAR(64) NULL,
	category_ids TEXT NULL,
	created_at DATETIME NOT NULL,
	updated_at DATETIME NOT NULL,
	has_options TINYINT(1) NOT NULL,
	required_options TINYINT(1) NOT NULL,
)
