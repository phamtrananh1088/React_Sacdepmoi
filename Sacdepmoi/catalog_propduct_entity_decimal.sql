CREATE TABLE catalog_propduct_entity_decimal(
	value_id INT(11) AUTO_INCREMENT PRIMARY KEY,
	entity_type_id SMALLINT(5) NOT NULL,
	attribute_id SMALLINT(5) NOT NULL,
	store_id SMALLINT(5) NOT NULL,
	entity_id INT(10) NOT NULL,
	value DECIMAL(12,4) NOT NULL
)
