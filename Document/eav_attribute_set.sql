CREATE TABLE eav_attribute_set(
	attribute_set_id SMALLINT(5) AUTO_INCREMENT PRIMARY KEY,
	entity_type_id SMALLINT(5) NOT NULL,
	attribute_set_name VARCHAR(255) NOT NULL,
	sort_order SMALLINT(6) NOT NULL
)
