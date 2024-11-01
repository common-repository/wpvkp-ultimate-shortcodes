<?php

add_action( 'admin_menu', 'wpvkp_add_admin_menu' );
add_action( 'admin_init', 'wpvkp_settings_init' );


function wpvkp_add_admin_menu(  ) {

	add_submenu_page( 'tools.php', 'wpvkp-toolbox', 'WPVKP Ultimate SC', 'manage_options', 'wpvkp-toolbox', 'wpvkp_toolbox_options_page' );

}


function wpvkp_settings_exist(  ) {

	if( false == get_option( 'wpvkp-toolbox_settings' ) ) {

		add_option( 'wpvkp-toolbox_settings' );

	}

}


function wpvkp_settings_init(  ) {

	register_setting( 'pluginPage', 'wpvkp_settings' );

	add_settings_section(
		'wpvkp_pluginPage_section_custom_css',
		__( 'Custom CSS', 'wpvkp' ),
		'wpvkp_settings_section_callback_custom_css',
		'pluginPage'
	);





	add_settings_field(
		'wpvkp_checkbox_field_1',
		__( 'Enable Custom CSS  Module', 'wpvkp' ),
		'wpvkp_checkbox_field_1_render',
		'pluginPage',
		'wpvkp_pluginPage_section_custom_css'
	);
}



function wpvkp_checkbox_field_1_render(  ) {
	$options = get_option( 'wpvkp_settings' );

	?>
	<input type='checkbox' name='wpvkp_settings[wpvkp_checkbox_field_1]' <?php if(isset($options['wpvkp_checkbox_field_1'])) {checked( $options['wpvkp_checkbox_field_1'], 1 );} ?> value='1'>

	<?php

}


function wpvkp_settings_section_callback_custom_css(  ) {

	echo __( 'If you have the JetPack or Slim JetPack plugins active our Custom CSS module will not activate. <br />Instead activate the Custom CSS modules included with those plugins.', 'wpvkp' );

}

function wpvkp_toolbox_options_page(  ) {

	?>
	<form action='options.php' method='post'>

		<h2>WPVKP Ultimate Shortcodes Option</h2>

		<?php
		settings_fields( 'pluginPage' );
		do_settings_sections( 'pluginPage' );
		submit_button();
		?>

	</form>
	<?php

}
