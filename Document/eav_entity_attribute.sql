CREATE TABLE eav_entity_attribute(
	entity_attribute_id INT(10) AUTO_INCREMENT PRIMARY KEY,
	entity_type_id SMALLINT(5) NOT NULL,
	attribute_set_id SMALLINT(5) NOT NULL,
	attribute_group_id SMALLINT(5) NOT NULL,
	attribute_id SMALLINT(5) NOT NULL,
	sort_order SMALLINT(6) NOT NULL
)
