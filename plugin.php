<?php
/**
 * Plugin Name: bootstrapblocks
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: bootstrap-blocks — is a Gutenberg plugin for bootstrap markup in the editor and front-end.
 * Author: Melanie Müller
 * Author URI: https://codearosa.de/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';

function codearosa_block_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'bootstrap-blocks',
				'title' => __( 'Bootstrap blocks', 'bootstrapblocks' ),
			),
		)
	);
}
add_filter( 'block_categories', 'codearosa_block_category', 10, 2);
