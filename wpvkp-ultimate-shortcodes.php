<?php
/*
Plugin Name: WPVKP Ultimate Shortcodes
Plugin URI: http://wpvkp.com
Description: WPVKP ultimate shortcodes plugin helps you to add modern and responsive download buttons, Google maps, content columns, social media share buttons, etc.
Version: 1.1
Author: designvkp
Author URI: http://wpvkp.com
*/
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

/* Variables */
$ja_wpvkp_shortcodes_path = dirname(__FILE__);
$ja_wpvkp_shortcodes_main_file = dirname(__FILE__).'/wpvkp-shortcodes.php';
$ja_wpvkp_shortcodes_directory = plugin_dir_url($ja_wpvkp_shortcodes_main_file);
$ja_wpvkp_shortcodes_name = "wpvkp Shortcodes";

/* Add shortcodes scripts file */
function wpvkp_shortcodes_add_scripts() {

	global $ja_wpvkp_shortcodes_directory, $ja_wpvkp_shortcodes_path;

	if(!is_admin()) {

		/* Includes */
		include($ja_wpvkp_shortcodes_path.'/includes/shortcodes.php');

		wp_enqueue_style('wpvkp_shortcodes', $ja_wpvkp_shortcodes_directory.'includes/shortcodes.css');

		wp_enqueue_script('jquery');
		wp_register_script('wpvkp_shortcodes_js', $ja_wpvkp_shortcodes_directory.'includes/shortcodes.js', 'jquery');
		wp_enqueue_script('wpvkp_shortcodes_js');

	}

	/* Font Awesome */
	//wp_enqueue_style('fontawesomes', $ja_wpvkp_shortcodes_directory.'fonts/fontawesome/css/font-awesome.min.css', '4.2.0');
	wp_enqueue_style('fontawesomes', '//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css', '4.3.0');
	wp_enqueue_style('fontello', $ja_wpvkp_shortcodes_directory.'fonts/fontello/css/fontello.css');

}
add_filter('init', 'wpvkp_shortcodes_add_scripts');

function toolbox_admin_specific_enqueue($hook_suffix) {

	$ja_wpvkp_shortcodes_directory = isset($ja_wpvkp_shortcodes_directory);

   if( 'post.php' == $hook_suffix || 'post-new.php' == $hook_suffix ) {

		wp_enqueue_style( 'wp-color-picker' );
		wp_enqueue_script( 'wp-color-picker' );
		wp_enqueue_script('wpvkp-editor-plugin', plugin_dir_url( __FILE__ ) . 'includes/tinymce_button.js');

		/* Fix wp-content directory renamed issue */
		wp_localize_script('wpvkp-editor-plugin', 'wpvkp_editor_plugin_vars', array(
				'tbicon' => __(plugin_dir_url( __FILE__ ) . 'images/icon.png'), 'wpvkp'));

		wp_localize_script('wpvkp-editor-plugin', 'wpvkp_editor_plugin_wp_content', array(
				'tbwpcontent' => __(plugin_dir_url( __FILE__ )), 'wpvkp'));
  }
}
add_action( 'admin_enqueue_scripts', 'toolbox_admin_specific_enqueue' );

/* Add button to TinyMCE */
function wpvkp_shortcodes_addbuttons($hook_suffix) {

   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;

   if ( get_user_option('rich_editing') == 'true' AND ('post.php' == $hook_suffix || 'post-new.php' == $hook_suffix)) {
     add_filter("mce_external_plugins", "add_wpvkp_shortcodes_tinymce_plugin");
     add_filter('mce_buttons', 'register_wpvkp_shortcodes_button');
   }
}

function register_wpvkp_shortcodes_button($buttons) {
   array_push($buttons, "|", "wpvkp_shortcodes_button");
   return $buttons;
}

function add_wpvkp_shortcodes_tinymce_plugin($plugin_array) {
	global $ja_wpvkp_shortcodes_directory;
	$plugin_array['wpvkp_shortcodes'] = $ja_wpvkp_shortcodes_directory.'includes/tinymce_button.js';
	return $plugin_array;
}

/* Include Options Manager Plugin if not Active */
function register_options_manager() {
include_once( ABSPATH . 'wp-admin/includes/plugin.php' );
	if (!is_plugin_active('options-manager/options-manager.php')) {
		include(dirname( __FILE__ ) . '/demo-options/options-manager.php');
	}
}
add_action('admin_menu','register_options_manager',9);

/* Include Custom CSS Feature */
function register_customcss_manager() {
include_once( ABSPATH . 'wp-admin/includes/plugin.php' );
	if (!is_plugin_active('jetpack/jetpack.php')) {
			if (!is_plugin_active('slimjetpack/slimjetpack.php')){
			$options = get_option( 'wpvkp_settings' );
				if(isset($options['wpvkp_checkbox_field_1'])) {
					include(dirname( __FILE__ ) . '/custom-css/custom-css.php');
					if ( ! wp_script_is( 'spin', 'registered' ) ) {
						wp_register_script( 'spin', plugins_url( '_inc/spin.js', __FILE__ ), false, '1.3' );
					}

					if ( ! wp_script_is( 'jquery.spin', 'registered' ) ) {
						wp_register_script( 'jquery.spin', plugins_url( '_inc/jquery.spin.js', __FILE__ ) , array( 'jquery', 'spin' ), '1.3' );
					}
				}
			}
		}
}
add_action('init','register_customcss_manager',9);

/* Include old WPVKP Visual Designer Shortcodes for Backwards Compatibility (if old plugin not active) */
function register_wpvkp_visual_designer() {
include_once( ABSPATH . 'wp-admin/includes/plugin.php' );
	if (!is_plugin_active('wpvkp-visual-designer/wpvkp-visual-designer.php')) {
		$options = get_option( 'wpvkp_settings' );
		if(isset($options['wpvkp_checkbox_field_0'])) {
			include(dirname( __FILE__ ) . '/compatibility/wpvkp-visual-designer/wpvkp-visual-designer.php');
		}
	}
}
add_action('init','register_wpvkp_visual_designer');

add_action('admin_enqueue_scripts', 'wpvkp_shortcodes_addbuttons');
include(dirname( __FILE__ ) . '/options.php');
