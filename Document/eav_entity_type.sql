CREATE TABLE eav_entity_type(
	entity_type_id SMALLINT(5) AUTO_INCREMENT PRIMARY KEY,
	entity_type_code VARCHAR(50) NOT NULL,
	entity_model VARCHAR(255) NOT NULL,
	attribute_model VARCHAR(255) NOT NULL,
	entity_table VARCHAR(255) NOT NULL,
	value_table_prefix VARCHAR(255) NOT NULL,
	entity_id_field VARCHAR(255) NOT NULL,
	is_data_sharing TINYINT(4) NOT NULL,
	data_sharing_key VARCHAR(100) NULL,
	default_attribute_set_id SMALLINT(5) NOT NULL,
	increment_model VARCHAR(255) NOT NULL,
	increment_per_store TINYINT(1) NOT NULL,
	increment_pad_length TINYINT(8) NOT NULL,
	increment_pad_char CHAR(1) NOT NULL
)
