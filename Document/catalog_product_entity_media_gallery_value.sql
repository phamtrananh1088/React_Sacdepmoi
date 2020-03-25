CREATE TABLE catalog_product_entity_media_gallery_value(
	value_id INT(11) NOT NULL,
	store_id SMALLINT(6) NOT NULL,
	label VARCHAR(255) NULL,
	position INT(11) NULL,
	disabled TINYINT(1) NOT NULL,
	PRIMARY KEY (value_id, store_id) 
)
