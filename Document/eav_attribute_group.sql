CREATE TABLE eav_attribute_group(
	attribute_group_id SMALLINT(5) AUTO_INCREMENT PRIMARY KEY,
	attribute_set_id SMALLINT(5) NOT NULL,
	attribute_group_name VARCHAR(255) NOT NULL,
	sort_order SMALLINT(6) NOT NULL,
	default_id SMALLINT(5) NULL
)
