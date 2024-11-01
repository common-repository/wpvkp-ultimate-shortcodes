<?php

class Options_Manager {

    /**
     * Class construct.
     */
    public function __construct() {

        // Translations.
        add_action( 'plugins_loaded', array( &$this, 'languages' ), 0 );

        // Settings page.
        add_action( 'admin_menu', array( &$this, 'add_menu_page' ) );

        // Load scripts.
        add_action( 'admin_enqueue_scripts', array( &$this, 'scripts' ) );
    }

    /**
     * Load languages.
     */
    public function languages() {
        load_plugin_textdomain( 'wpvkp', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
    }

    /**
     * Create plugin menu.
     */
    public function add_menu_page() {
        add_theme_page( __( 'WPVKP Replicate', 'wpvkp' ), __( 'WPVKP Replicate', 'wpvkp' ), 'manage_options', 'wpvkp-replicate', array( &$this, 'settings_page' ) );
    }

    /**
     * Load scripts in back-end.
     */
    public function scripts() {
        wp_register_style( 'opmanager', plugins_url( 'css/styles.css' , __FILE__ ), array(), null, 'all' );
        wp_enqueue_style( 'opmanager' );
    }

    /**
     * Create plugin page.
     */
    public function settings_page() {
        // Create tabs current class.
        $current_tab = 'import';

        ?>
        <div class="wrap">
            <div class="icon32" id="icon-options-general"><br /></div>
            <h2 class="nav-tab-wrapper">
             <a href="?page=opmanager&amp;tab=import" class="nav-tab <?php echo $current_tab == 'import' ? 'nav-tab-active' : ''; ?>"><?php _e( 'Import Options', 'wpvkp' ); ?></a>
            </h2>
            <?php settings_errors(); ?>
            <?php $this->import_page(); ?>
        </div>
        <?php
    }

    /**
     * Import page view and renders the json.
     */
    protected function import_page() {
        if ( isset( $_FILES['import'] ) && check_admin_referer( 'opmanager-import' ) ) {
            if ( $_FILES['import']['error'] > 0 ) {
                wp_die( __( 'An error has occurred with the file. Please try redownloading the options file.', 'wpvkp' ) );
            } else {
                // Checks the json file.
                $file_name = $_FILES['import']['name'];
                $file_ext = strtolower( end( explode( '.', $file_name ) ) );
                $file_size = $_FILES['import']['size'];

                if ( 'json' == $file_ext && $file_size < 500000 ) {
                    $encode_options = file_get_contents( $_FILES['import']['tmp_name'] );
                    // Decodes the information.
                    $options = json_decode( $encode_options, true );

                    // Saves the options in wp_options.
                    foreach ( $options as $key => $value ) {
                        update_option( $key, $value );
                    }
                    echo '<div class="updated"><p>' . __( 'All demo options are restored successfully.', 'wpvkp' ) . '</p></div>';
                } else {
                    echo '<div class="error"><p>' . __( 'Invalid file or file size too big.', 'wpvkp' ) . '</p></div>';
                }
            }
        }
        ?>
        <form method="post" enctype="multipart/form-data" action="#">
            <p><?php _e( 'This form will restore / overwrite your WordPress settings to match our demo site as much as possible. <br /><br />Your current Appearance -> Widgets and Genesis / Thesis settings will all be overwritten (among other things). <br /><br />Before you begin make sure that you have done the following:<br /><br />1. Imported the demo post / page content file using the Tools -> Import page.<br />2. Activated any recommended plugins for the theme. <br />3. Your posts and page content <strong>should not</strong> be lost (but backup first - Tools -> Export).<br /><br /> If you don\'t do these steps first you won\'t get the full demo replication. <br /><br />You can obtain the restore file, to use below, <a href="http://help.wpvkp.com/General/Copy_WPVKP_Demo_Site">from this link</a>. <br /><br />If you understand you can now select a json backup file to restore:', 'wpvkp' ); ?></p>
            <p class="submit">
                <?php wp_nonce_field( 'opmanager-import' ); ?>
                <input type="file" name="import" />
                <?php submit_button( __( 'Restore', 'wpvkp' ), 'secondary', 'submit', false ); ?>
            </p>
        </form>
        <?php
    }

} // close Options_Manager class.

$opmanager = new Options_Manager;
