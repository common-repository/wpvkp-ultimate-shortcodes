(function () {

    tinymce.PluginManager.add('wpvkp_shortcodes', function( editor, url ) {

        var icon_url = wpvkp_editor_plugin_vars.tbicon;

        // Add a button that opens a window
        editor.addButton('wpvkp_shortcodes_button', {

            Title: 'WPVKP Shortcodes',
            image: icon_url,
            onclick: function () {

                /* Show the popup */
                var width = jQuery(window).width(),
                    H = jQuery(window).height(),
                    W = (720 < width) ? 720 : width;
                W = W - 80;
                H = H - 84;
                tb_show('WPVKP Shortcodes', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=wpvkp-shortcodes-form');

            }

        });

    });

    jQuery(function () {

        /* Social Links */

        //Replace hard coded wp-content path
        var plugin_url = wpvkp_editor_plugin_wp_content.tbwpcontent;

        var social_icons = '<a href="#" class="button wpvkp-shortcodes-toggle-icon-list wpvkp-shortcodes-toggle-social-list" style="float:left;display:block;">Choose icon</a><div class="social-icon"></div>\
<i class="current-social-icon ja-social-icon-"></i>\
<div class="wpvkp-shortcodes-icon-list-holder" style="display:none;">\
<p style="margin-bottom:0px">Icons from <a href="http://zocial.smcllns.com/" target="_blank">Zocial</a> (via <a href="http://fontello.com/" target="_blank">Fontello</a>) and <a href="http://icondock.com/free/vector-social-media-icons" target="_blank">Icon Dock</a></p>\
<ul class="wpvkp-shortcodes-icon-list">\
<li><a href="#"><i class="ja-social-icon-twitter"></i> <span>ja-social-icon-twitter</span></a></li>\
<li><a href="#"><i class="ja-social-icon-facebook"></i> <span>ja-social-icon-facebook</span></a></li>\
<li><a href="#"><i class="ja-social-icon-linkedin"></i> <span>ja-social-icon-linkedin</span></a></li>\
<li><a href="#"><i class="ja-social-icon-pinterest"></i> <span>ja-social-icon-pinterest</span></a></li>\
<li><a href="#"><i class="ja-social-icon-delicious"></i> <span>ja-social-icon-delicious</span></a></li>\
<li><a href="#"><i class="ja-social-icon-paypal"></i> <span>ja-social-icon-paypal</span></a></li>\
<li><a href="#"><i class="ja-social-icon-gplus"></i> <span>ja-social-icon-gplus</span></a></li>\
<li><a href="#"><i class="ja-social-icon-stumbleupon"></i> <span>ja-social-icon-stumbleupon</span></a></li>\
<li><a href="#"><i class="ja-social-icon-fivehundredpx"></i> <span>ja-social-icon-fivehundredpx</span></a></li>\
<li><a href="#"><i class="ja-social-icon-foursquare"></i> <span>ja-social-icon-foursquare</span></a></li>\
<li><a href="#"><i class="ja-social-icon-forrst"></i> <span>ja-social-icon-forrst</span></a></li>\
<li><a href="#"><i class="ja-social-icon-digg"></i> <span>ja-social-icon-digg</span></a></li>\
<li><a href="#"><i class="ja-social-icon-spotify"></i> <span>ja-social-icon-spotify</span></a></li>\
<li><a href="#"><i class="ja-social-icon-reddit"></i> <span>ja-social-icon-reddit</span></a></li>\
<li><a href="#"><i class="ja-social-icon-flickr"></i> <span>ja-social-icon-flickr</span></a></li>\
<li><a href="#"><i class="ja-social-icon-rss"></i> <span>ja-social-icon-rss</span></a></li>\
<li><a href="#"><i class="ja-social-icon-skype"></i> <span>ja-social-icon-skype</span></a></li>\
<li><a href="#"><i class="ja-social-icon-youtube"></i> <span>ja-social-icon-youtube</span></a></li>\
<li><a href="#"><i class="ja-social-icon-vimeo"></i> <span>ja-social-icon-vimeo</span></a></li>\
<li><a href="#"><i class="ja-social-icon-myspace"></i> <span>ja-social-icon-myspace</span></a></li>\
<li><a href="#"><i class="ja-social-icon-amazon"></i> <span>ja-social-icon-amazon</span></a></li>\
<li><a href="#"><i class="ja-social-icon-ebay"></i> <span>ja-social-icon-ebay</span></a></li>\
<li><a href="#"><i class="ja-social-icon-github"></i> <span>ja-social-icon-github</span></a></li>\
<li><a href="#"><i class="ja-social-icon-lastfm"></i> <span>ja-social-icon-lastfm</span></a></li>\
<li><a href="#"><i class="ja-social-icon-soundcloud"></i> <span>ja-social-icon-soundcloud</span></a></li>\
<li><a href="#"><i class="ja-social-icon-tumblr"></i> <span>ja-social-icon-tumblr</span></a></li>\
<li><a href="#"><i class="ja-social-icon-instagram"></i> <span>ja-social-icon-instagram</span></a></li>\
<li style="clear:left"><a href="#"><img src="'+plugin_url+'images/social-icons/500px.png" alt="" /><span>500px</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/aboutme.png" alt="" /><span>aboutme</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/amazon.png" alt="" /><span>amazon</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/app-store.png" alt="" /><span>app-store</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/bebo.png" alt="" /><span>bebo</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/behance.png" alt="" /><span>behance</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/blogger.png" alt="" /><span>blogger</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/coroflot.png" alt="" /><span>coroflot</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/delicious.png" alt="" /><span>delicious</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/deviant-art.png" alt="" /><span>deviant-art</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/digg.png" alt="" /><span>digg</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/dribbble.png" alt="" /><span>dribbble</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/ebay.png" alt="" /><span>ebay</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/etsy.png" alt="" /><span>etsy</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/facebook.png" alt="" /><span>facebook</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/flickr.png" alt="" /><span>flickr</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/foodspotting.png" alt="" /><span>foodspotting</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/forrst.png" alt="" /><span>forrst</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/foursquare.png" alt="" /><span>foursquare</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/friendfeed.png" alt="" /><span>friendfeed</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/friendster.png" alt="" /><span>friendster</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/github.png" alt="" /><span>github</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/google-plus.png" alt="" /><span>google-plus</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/gowalla.png" alt="" /><span>gowalla</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/hyves.png" alt="" /><span>hyves</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/instagram.png" alt="" /><span>instagram</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/lastfm.png" alt="" /><span>lastfm</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/linkedin.png" alt="" /><span>linkedin</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/metacafe.png" alt="" /><span>metacafe</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/myspace.png" alt="" /><span>myspace</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/photobucket.png" alt="" /><span>photobucket</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/picasa.png" alt="" /><span>picasa</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/pinterest.png" alt="" /><span>pinterest</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/reddit.png" alt="" /><span>reddit</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/rss.png" alt="" /><span>rss</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/scribd.png" alt="" /><span>scribd</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/skype.png" alt="" /><span>skype</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/slashdot.png" alt="" /><span>slashdot</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/slideshare.png" alt="" /><span>slideshare</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/soundcloud.png" alt="" /><span>soundcloud</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/spotify.png" alt="" /><span>spotify</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/stumbleupon.png" alt="" /><span>stumbleupon</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/technorati.png" alt="" /><span>technorati</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/tumblr.png" alt="" /><span>tumblr</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/twitter.png" alt="" /><span>twitter</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/vimeo.png" alt="" /><span>vimeo</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/virb.png" alt="" /><span>virb</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/wordpress.png" alt="" /><span>wordpress</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/yahoo-buzz.png" alt="" /><span>yahoo-buzz</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/yahoo.png" alt="" /><span>yahoo</span></a></li>\
<li><a href="#"><img src="'+plugin_url+'images/social-icons/youtube.png" alt="" /><span>youtube</span></a></li>\
</ul>\
</div>';

        var fa_icons = '<ul class="wpvkp-shortcodes-icon-list">\
<li><a href="#"><i class="fa fa-fw fa-4x fa-adjust"></i><span>adjust</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-adn"></i><span>adn</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-align-center"></i><span>align-center</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-align-justify"></i><span>align-justify</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-align-left"></i><span>align-left</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-align-right"></i><span>align-right</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-ambulance"></i><span>ambulance</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-anchor"></i><span>anchor</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-android"></i><span>android</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-angellist"></i><span>angellist</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-angle-double-down"></i><span>angle-double-down</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-angle-double-left"></i><span>angle-double-left</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-angle-double-right"></i><span>angle-double-right</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-angle-double-up"></i><span>angle-double-up</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-angle-down"></i><span>angle-down</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-angle-left"></i><span>angle-left</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-angle-right"></i><span>angle-right</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-angle-up"></i><span>angle-up</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-apple"></i><span>apple</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-archive"></i><span>archive</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-area-chart"></i><span>area-chart</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-arrow-circle-down"></i><span>arrow-circle-down</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-arrow-circle-left"></i><span>arrow-circle-left</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-arrow-circle-o-down"></i><span>arrow-circle-o-down</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-arrow-circle-o-left"></i><span>arrow-circle-o-left</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-arrow-circle-o-right"></i><span>arrow-circle-o-right</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-arrow-circle-o-up"></i><span>arrow-circle-o-up</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-arrow-circle-right"></i><span>arrow-circle-right</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-arrow-circle-up"></i><span>arrow-circle-up</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-arrow-down"></i><span>arrow-down</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-arrow-left"></i><span>arrow-left</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-arrow-right"></i><span>arrow-right</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-arrow-up"></i><span>arrow-up</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-arrows"></i><span>arrows</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-arrows-alt"></i><span>arrows-alt</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-arrows-h"></i><span>arrows-h</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-arrows-v"></i><span>arrows-v</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-asterisk"></i><span>asterisk</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-at"></i><span>at</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-automobile"></i><span>automobile</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-backward"></i><span>backward</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-ban"></i><span>ban</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bank"></i><span>bank</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bar-chart"></i><span>bar-chart</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bar-chart-o"></i><span>bar-chart-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-barcode"></i><span>barcode</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bars"></i><span>bars</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bed"></i><span>bed</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-beer"></i><span>beer</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-behance"></i><span>behance</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-behance-square"></i><span>behance-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bell"></i><span>bell</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bell-o"></i><span>bell-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bell-slash"></i><span>bell-slash</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bell-slash-o"></i><span>bell-slash-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bicycle"></i><span>bicycle</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-binoculars"></i><span>binoculars</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-birthday-cake"></i><span>birthday-cake</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bitbucket"></i><span>bitbucket</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bitbucket-square"></i><span>bitbucket-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bitcoin"></i><span>bitcoin</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bold"></i><span>bold</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bolt"></i><span>bolt</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bomb"></i><span>bomb</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-book"></i><span>book</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bookmark"></i><span>bookmark</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bookmark-o"></i><span>bookmark-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-briefcase"></i><span>briefcase</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-btc"></i><span>btc</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bug"></i><span>bug</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-building"></i><span>building</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-building-o"></i><span>building-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bullhorn"></i><span>bullhorn</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bullseye"></i><span>bullseye</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-bus"></i><span>bus</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-buysellads"></i><span>buysellads</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-cab"></i><span>cab</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-calculator"></i><span>calculator</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-calendar"></i><span>calendar</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-calendar-o"></i><span>calendar-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-camera"></i><span>camera</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-camera-retro"></i><span>camera-retro</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-car"></i><span>car</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-caret-down"></i><span>caret-down</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-caret-left"></i><span>caret-left</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-caret-right"></i><span>caret-right</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-caret-square-o-down"></i><span>caret-square-o-down</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-caret-square-o-left"></i><span>caret-square-o-left</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-caret-square-o-right"></i><span>caret-square-o-right</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-caret-square-o-up"></i><span>caret-square-o-up</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-caret-up"></i><span>caret-up</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-cart-arrow-down"></i><span>cart-arrow-down</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-cart-plus"></i><span>cart-plus</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-cc"></i><span>cc</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-cc-amex"></i><span>cc-amex</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-cc-discover"></i><span>cc-discover</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-cc-mastercard"></i><span>cc-mastercard</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-cc-paypal"></i><span>cc-paypal</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-cc-stripe"></i><span>cc-stripe</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-cc-visa"></i><span>cc-visa</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-certificate"></i><span>certificate</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-chain"></i><span>chain</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-chain-broken"></i><span>chain-broken</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-check"></i><span>check</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-check-circle"></i><span>check-circle</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-check-circle-o"></i><span>check-circle-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-check-square"></i><span>check-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-check-square-o"></i><span>check-square-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-chevron-circle-down"></i><span>chevron-circle-down</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-chevron-circle-left"></i><span>chevron-circle-left</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-chevron-circle-right"></i><span>chevron-circle-right</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-chevron-circle-up"></i><span>chevron-circle-up</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-chevron-down"></i><span>chevron-down</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-chevron-left"></i><span>chevron-left</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-chevron-right"></i><span>chevron-right</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-chevron-up"></i><span>chevron-up</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-child"></i><span>child</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-circle"></i><span>circle</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-circle-o"></i><span>circle-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-circle-o-notch"></i><span>circle-o-notch</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-circle-thin"></i><span>circle-thin</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-clipboard"></i><span>clipboard</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-clock-o"></i><span>clock-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-close"></i><span>close</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-cloud"></i><span>cloud</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-cloud-download"></i><span>cloud-download</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-cloud-upload"></i><span>cloud-upload</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-cny"></i><span>cny</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-code"></i><span>code</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-code-fork"></i><span>code-fork</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-codepen"></i><span>codepen</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-coffee"></i><span>coffee</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-cog"></i><span>cog</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-cogs"></i><span>cogs</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-columns"></i><span>columns</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-comment"></i><span>comment</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-comment-o"></i><span>comment-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-comments"></i><span>comments</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-comments-o"></i><span>comments-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-compass"></i><span>compass;</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-compress"></i><span>compress</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-connectdevelop"></i><span>connectdevelop</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-copy"></i><span>copy</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-copyright"></i><span>copyright</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-credit-card"></i><span>credit-card</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-crop"></i><span>crop</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-crosshairs"></i><span>crosshairs</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-css3"></i><span>css3</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-cube"></i><span>cube</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-cubes"></i><span>cubes</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-cut"></i><span>cut</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-cutlery"></i><span>cutlery</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-dashboard"></i><span>dashboard</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-dashcube"></i><span>dashcube</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-database"></i><span>database</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-dedent"></i><span>dedent</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-delicious"></i><span>delicious</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-desktop"></i><span>desktop</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-deviantart"></i><span>deviantart</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-diamond"></i><span>diamond</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-digg"></i><span>digg</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-dollar"></i><span>dollar</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-dot-circle-o"></i><span>dot-circle-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-download"></i><span>download</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-dribbble"></i><span>dribbble</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-dropbox"></i><span>dropbox;</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-drupal"></i><span>drupal</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-edit"></i><span>edit</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-eject"></i><span>eject</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-ellipsis-h"></i><span>ellipsis-h</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-ellipsis-v"></i><span>ellipsis-v</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-empire"></i><span>empire</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-envelope"></i><span>envelope</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-envelope-o"></i><span>envelope-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-envelope-square"></i><span>envelope-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-eraser"></i><span>eraser</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-eur"></i><span>eur</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-euro"></i><span>euro</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-exchange"></i><span>exchange</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-exclamation"></i><span>exclamation</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-exclamation-circle"></i><span>exclamation-circle</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-exclamation-triangle"></i><span>exclamation-triangle</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-expand"></i><span>expand</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-external-link"></i><span>external-link</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-external-link-square"></i><span>external-link-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-eye"></i><span>eye</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-eye-slash"></i><span>eye-slash</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-eyedropper"></i><span>eyedropper</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-facebook"></i><span>facebook</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-facebook-f"></i><span>facebook-f</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-facebook-official"></i><span>facebook-official</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-facebook-square"></i><span>facebook-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-fast-backward"></i><span>fast-backward</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-fast-forward"></i><span>fast-forward</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-fax"></i><span>fax</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-female"></i><span>female</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-fighter-jet"></i><span>fighter-jet</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-file"></i><span>file</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-file-archive-o"></i><span>file-archive-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-file-audio-o"></i><span>file-audio-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-file-code-o"></i><span>file-code-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-file-excel-o"></i><span>file-excel-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-file-image-o"></i><span>file-image-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-file-movie-o"></i><span>file-movie-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-file-o"></i><span>file-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-file-pdf-o"></i><span>file-pdf-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-file-photo-o"></i><span>file-photo-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-file-picture-o"></i><span>file-picture-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-file-powerpoint-o"></i><span>file-powerpoint-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-file-sound-o"></i><span>file-sound-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-file-text"></i><span>file-text</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-file-text-o"></i><span>file-text-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-file-video-o"></i><span>file-video-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-file-word-o"></i><span>file-word-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-file-zip-o"></i><span>file-zip-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-files-o"></i><span>files-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-film"></i><span>film</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-filter"></i><span>filter</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-fire"></i><span>fire</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-fire-extinguisher"></i><span>fire-extinguisher</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-flag"></i><span>flag</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-flag-checkered"></i><span>flag-checkered</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-flag-o"></i><span>flag-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-flash"></i><span>flash</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-flask"></i><span>flask</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-flickr"></i><span>flickr</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-floppy-o"></i><span>floppy-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-folder"></i><span>folder</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-folder-o"></i><span>folder-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-folder-open"></i><span>folder-open</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-folder-open-o"></i><span>folder-open-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-font"></i><span>font</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-forumbee"></i><span>forumbee</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-forward"></i><span>forward</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-foursquare"></i><span>foursquare</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-frown-o"></i><span>frown-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-futbol-o"></i><span>futbol-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-gamepad"></i><span>gamepad</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-gavel"></i><span>gavel</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-gbp"></i><span>gbp</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-ge"></i><span>ge</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-gear"></i><span>gear</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-gears"></i><span>gears</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-genderless"></i><span>genderless</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-gift"></i><span>gift</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-git"></i><span>git</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-git-square"></i><span>git-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-github"></i><span>github</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-github-alt"></i><span>github-alt</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-github-square"></i><span>github-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-gittip"></i><span>gittip</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-glass"></i><span>glass</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-globe"></i><span>globe</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-google"></i><span>google</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-google-plus"></i><span>google-plus</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-google-plus-square"></i><span>google-plus-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-google-wallet"></i><span>google-wallet</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-graduation-cap"></i><span>graduation-cap</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-gratipay"></i><span>gratipay</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-group"></i><span>group</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-h-square"></i><span>h-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-hacker-news"></i><span>hacker-news</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-hand-o-down"></i><span>hand-o-down</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-hand-o-left"></i><span>hand-o-left</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-hand-o-right"></i><span>hand-o-right</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-hand-o-up"></i><span>hand-o-up</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-hdd-o"></i><span>hdd-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-header"></i><span>header</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-headphones"></i><span>headphones</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-heart"></i><span>heart</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-heart-o"></i><span>heart-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-heartbeat"></i><span>heartbeat</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-history"></i><span>history</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-home"></i><span>home</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-hospital-o"></i><span>hospital-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-hotel"></i><span>hotel</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-html5"></i><span>html5</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-ils"></i><span>ils</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-image"></i><span>image</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-inbox"></i><span>inbox</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-indent"></i><span>indent</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-info"></i><span>info</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-info-circle"></i><span>info-circle</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-inr"></i><span>inr</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-instagram"></i><span>instagram</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-institution"></i><span>institution</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-ioxhost"></i><span>ioxhost</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-italic"></i><span>italic</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-joomla"></i><span>joomla</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-jpy"></i><span>jpy</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-jsfiddle"></i><span>jsfiddle</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-key"></i><span>key</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-keyboard-o"></i><span>keyboard-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-krw"></i><span>krw</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-language"></i><span>language</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-laptop"></i><span>laptop</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-lastfm"></i><span>lastfm</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-lastfm-square"></i><span>lastfm-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-leaf"></i><span>leaf</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-leanpub"></i><span>leanpub</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-legal"></i><span>legal</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-lemon-o"></i><span>lemon-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-level-down"></i><span>level-down</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-level-up"></i><span>level-up</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-life-bouy"></i><span>life-bouy</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-life-buoy"></i><span>life-buoy</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-life-ring"></i><span>life-ring</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-life-saver"></i><span>life-saver</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-lightbulb-o"></i><span>lightbulb-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-line-chart"></i><span>line-chart</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-link"></i><span>link</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-linkedin"></i><span>linkedin</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-linkedin-square"></i><span>linkedin-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-linux"></i><span>linux</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-list"></i><span>list</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-list-alt"></i><span>list-alt</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-list-ol"></i><span>list-ol</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-list-ul"></i><span>list-ul</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-location-arrow"></i><span>location-arrow</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-lock"></i><span>lock</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-long-arrow-down"></i><span>long-arrow-down</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-long-arrow-left"></i><span>long-arrow-left</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-long-arrow-right"></i><span>long-arrow-right</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-long-arrow-up"></i><span>long-arrow-up</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-magic"></i><span>magic</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-magnet"></i><span>magnet</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-mail-forward"></i><span>mail-forward</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-mail-reply"></i><span>mail-reply</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-mail-reply-all"></i><span>mail-reply-all</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-male"></i><span>male</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-map-marker"></i><span>map-marker</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-mars"></i><span>mars</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-mars-double"></i><span>mars-double</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-mars-stroke"></i><span>mars-stroke</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-mars-stroke-h"></i><span>mars-stroke-h</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-mars-stroke-v"></i><span>mars-stroke-v</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-maxcdn"></i><span>maxcdn</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-meanpath"></i><span>meanpath</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-medium"></i><span>medium</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-medkit"></i><span>medkit</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-meh-o"></i><span>meh-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-mercury"></i><span>mercury</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-microphone"></i><span>microphone</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-microphone-slash"></i><span>microphone-slash</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-minus"></i><span>minus</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-minus-circle"></i><span>minus-circle</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-minus-square"></i><span>minus-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-minus-square-o"></i><span>minus-square-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-mobile"></i><span>mobile</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-mobile-phone"></i><span>mobile-phone</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-money"></i><span>money</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-moon-o"></i><span>moon-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-mortar-board"></i><span>mortar-board</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-motorcycle"></i><span>motorcycle</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-music"></i><span>music</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-navicon"></i><span>navicon</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-neuter"></i><span>neuter</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-newspaper-o"></i><span>newspaper-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-openid"></i><span>openid</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-outdent"></i><span>outdent</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-pagelines"></i><span>pagelines</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-paint-brush"></i><span>paint-brush</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-paper-plane"></i><span>paper-plane</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-paper-plane-o"></i><span>paper-plane-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-paperclip"></i><span>paperclip</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-paragraph"></i><span>paragraph</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-paste"></i><span>paste</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-pause"></i><span>pause</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-paw"></i><span>paw</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-paypal"></i><span>paypal</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-pencil"></i><span>pencil</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-pencil-square"></i><span>pencil-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-pencil-square-o"></i><span>pencil-square-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-phone"></i><span>phone</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-phone-square"></i><span>phone-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-photo"></i><span>photo</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-picture-o"></i><span>picture-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-pie-chart"></i><span>pie-chart</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-pied-piper"></i><span>pied-piper</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-pied-piper-alt"></i><span>pied-piper-alt</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-pinterest"></i><span>pinterest</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-pinterest-p"></i><span>pinterest-p</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-pinterest-square"></i><span>pinterest-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-plane"></i><span>plane</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-play"></i><span>play</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-play-circle"></i><span>play-circle</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-play-circle-o"></i><span>play-circle-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-plug"></i><span>plug</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-plus"></i><span>plus</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-plus-circle"></i><span>plus-circle</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-plus-square"></i><span>plus-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-plus-square-o"></i><span>plus-square-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-power-off"></i><span>power-off</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-print"></i><span>print</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-puzzle-piece"></i><span>puzzle-piece</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-qq"></i><span>qq</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-qrcode"></i><span>qrcode</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-question"></i><span>question</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-question-circle"></i><span>question-circle</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-quote-left"></i><span>quote-left</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-quote-right"></i><span>quote-right</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-ra"></i><span>ra</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-random"></i><span>random</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-rebel"></i><span>rebel</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-recycle"></i><span>recycle</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-reddit"></i><span>reddit</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-reddit-square"></i><span>reddit-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-refresh"></i><span>refresh</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-remove"></i><span>remove</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-renren"></i><span>renren</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-reorder"></i><span>reorder</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-repeat"></i><span>repeat</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-reply"></i><span>reply</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-reply-all"></i><span>reply-all</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-retweet"></i><span>retweet</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-rmb"></i><span>mb</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-road"></i><span>road</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-rocket"></i><span>rocket</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-rotate-left"></i><span>rotate-left</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-rotate-right"></i><span>rotate-right</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-rouble"></i><span>rouble</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-rss"></i><span>rss</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-rss-square"></i><span>rss-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-rub"></i><span>rub</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-ruble"></i><span>ruble</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-rupee"></i><span>rupee</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-save"></i><span>save</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-scissors"></i><span>scissors</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-search"></i><span>earch</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-search-minus"></i><span>search-minus</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-search-plus"></i><span>search-plus</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-sellsy"></i><span>sellsy</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-send"></i><span>send</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-send-o"></i><span>send-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-server"></i><span>server</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-share"></i><span>share</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-share-alt"></i><span>share-alt</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-share-alt-square"></i><span>share-alt-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-share-square"></i><span>share-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-share-square-o"></i><span>share-square-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-shekel"></i><span>shekel</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-sheqel"></i><span>sheqel</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-shield"></i><span>shield</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-ship"></i><span>ship</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-shirtsinbulk"></i><span>shirtsinbulk</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-shopping-cart"></i><span>shopping-cart</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-sign-in"></i><span>sign-in</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-sign-out"></i><span>sign-out</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-signal"></i><span>signal</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-simplybuilt"></i><span>simplybuilt</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-sitemap"></i><span>sitemap</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-skyatlas"></i><span>skyatlas</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-skype"></i><span>skype</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-slack"></i><span>slack</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-sliders"></i><span>sliders</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-slideshare"></i><span>slideshare</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-smile-o"></i><span>smile-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-soccer-ball-o"></i><span>soccer-ball-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-sort"></i><span>sort</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-sort-alpha-asc"></i><span>sort-alpha-asc</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-sort-alpha-desc"></i><span>sort-alpha-desc</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-sort-amount-asc"></i><span>sort-amount-asc</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-sort-amount-desc"></i><span>sort-amount-desc</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-sort-asc"></i><span>sort-asc</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-sort-desc"></i><span>sort-desc</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-sort-down"></i><span>sort-down</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-sort-numeric-asc"></i><span>sort-numeric-asc</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-sort-numeric-desc"></i><span>ort-numeric-desc</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-sort-up"></i><span>sort-up</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-soundcloud"></i><span>soundcloud</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-space-shuttle"></i><span>space-shuttle</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-spinner"></i><span>spinner</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-spoon"></i><span>spoon</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-spotify"></i><span>spotify</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-square"></i><span>square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-square-o"></i><span>square-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-stack-exchange"></i><span>stack-exchange</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-stack-overflow"></i><span>stack-overflow</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-star"></i><span>star</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-star-half"></i><span>star-half</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-star-half-empty"></i><span>star-half-empty</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-star-half-full"></i><span>star-half-full</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-star-half-o"></i><span>star-half-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-star-o"></i><span>star-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-steam"></i><span>steam</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-steam-square"></i><span>steam-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-step-backward"></i><span>step-backward</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-step-forward"></i><span>step-forward</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-stethoscope"></i><span>stethoscope</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-stop"></i><span>stop</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-street-view"></i><span>treet-view</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-strikethrough"></i><span>strikethrough</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-stumbleupon"></i><span>tumbleupon</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-stumbleupon-circle"></i><span>stumbleupon-circle</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-subscript"></i><span>subscript</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-subway"></i><span>subway</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-suitcase"></i><span>suitcase</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-sun-o"></i><span>sun-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-superscript"></i><span>superscript</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-support"></i><span>support</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-table"></i><span>table</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-tablet"></i><span>tablet</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-tachometer"></i><span>tachometer</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-tag"></i><span>tag</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-tags"></i><span>tags</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-tasks"></i><span>tasks</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-taxi"></i><span>taxi</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-tencent-weibo"></i><span>tencent-weibo</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-terminal"></i><span>terminal</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-text-height"></i><span>text-height</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-text-width"></i><span>text-width</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-th"></i><span>th</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-th-large"></i><span>th-large</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-th-list"></i><span>th-list</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-thumb-tack"></i><span>thumb-tack</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-thumbs-down"></i><span>thumbs-down</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-thumbs-o-down"></i><span>thumbs-o-down</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-thumbs-o-up"></i><span>thumbs-o-up</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-thumbs-up"></i><span>thumbs-up</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-ticket"></i><span>ticket</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-times"></i><span>times</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-times-circle"></i><span>times-circle</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-times-circle-o"></i><span>times-circle-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-tint"></i><span>tint</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-toggle-down"></i><span>toggle-down</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-toggle-left"></i><span>toggle-left</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-toggle-off"></i><span>toggle-off</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-toggle-on"></i><span>toggle-on</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-toggle-right"></i><span>toggle-right</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-toggle-up"></i><span>toggle-up</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-train"></i><span>train</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-transgender"></i><span>transgender</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-transgender-alt"></i><span>transgender-alt</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-trash"></i><span>trash</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-trash-o"></i><span>trash-o</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-tree"></i><span>tree</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-trello"></i><span>trello</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-trophy"></i><span>trophy</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-truck"></i><span>truck</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-try"></i><span>try</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-tty"></i><span>tty</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-tumblr"></i><span>tumblr</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-tumblr-square"></i><span>tumblr-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-turkish-lira"></i><span>turkish-lira</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-twitch"></i><span>twitch</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-twitter"></i><span>twitter</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-twitter-square"></i><span>twitter-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-umbrella"></i><span>umbrella</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-underline"></i><span>underline</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-undo"></i><span>undo</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-university"></i><span>university</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-unlink"></i><span>unlink</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-unlock"></i><span>unlock</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-unlock-alt"></i><span>unlock-alt</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-unsorted"></i><span>unsorted</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-upload"></i><span>upload</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-usd"></i><span>usd</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-user"></i><span>user</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-user-md"></i><span>user-md</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-user-plus"></i><span>user-plus</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-user-secret"></i><span>user-secret</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-user-times"></i><span>user-times</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-users"></i><span>users</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-venus"></i><span>venus</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-venus-double"></i><span>venus-double</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-venus-mars"></i><span>venus-mars</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-viacoin"></i><span>viacoin</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-video-camera"></i><span>video-camera</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-vimeo-square"></i><span>vimeo-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-vine"></i><span>vine</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-vk"></i><span>vk</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-volume-down"></i><span>volume-down</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-volume-off"></i><span>volume-off</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-volume-up"></i><span>volume-up</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-warning"></i><span>warning</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-wechat"></i><span>wechat</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-weibo"></i><span>weibo</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-weixin"></i><span>weixin;</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-whatsapp"></i><span>whatsapp</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-wheelchair"></i><span>wheelchair</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-wifi"></i><span>wifi</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-windows"></i><span>windows</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-won"></i><span>won</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-wordpress"></i><span>wordpress</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-wrench"></i><span>wrench</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-xing"></i><span>xing</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-xing-square"></i><span>xing-square</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-yahoo"></i><span>yahoo</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-yelp"></i><span>yelp</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-yen"></i><span>yen</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-youtube"></i><span>youtube</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-youtube-play"></i><span>youtube-play</span></a></li>\
<li><a href="#"><i class="fa fa-fw fa-youtube-square"></i><span>youtube-square</span></a></li>\
</ul>';

        /* The form */
        var form = jQuery('<style type="text/css">\
#TB_ajaxContent { padding: 0 0 30px 0; width: 100%!important; overflow: hidden; }\
.wpvkp-shortcodes-form { display: block; overflow: hidden; height: 100%; position: relative; font-family: Helvetica, Arial; color: #333; font-size: 12px; text-align: left; background: #FFF; }\
.wpvkp-shortcodes-form a { text-decoration: none; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-top { overflow: auto; height: 100%; position: relative; padding: 0 0 0 120px; margin: 0 0 0 0; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-types { position: absolute; top: 0px; left: 0px; width: 120px; height: 100%; min-height: 100%; background: #f9f9f9; border-right: 1px solid #EEE; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-types .wpvkp-shortcodes-form-title { display: block; padding: 14px 20px 14px 40px; position: relative; font-size: 12px; line-height: 14px; color: #333; border-bottom: 1px solid #EEE; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-types .wpvkp-shortcodes-form-title img { position: absolute; top: 13px; left: 12px; } \
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-types ul { list-style: none; margin: 0px; padding: 0px; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-types ul li { display: block; border-bottom: 1px solid #EEE; margin: 0px; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-types ul li.active { width: 121px; font-weight: bold; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-types ul li a { display: block; padding: 14px 20px; font-size: 12px; color: #333; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-types ul li.active a,  .wpvkp-shortcodes-form .wpvkp-shortcodes-form-types ul li a:hover { background: #FFF; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-tabs { background: #FFF; padding: 20px 20px 70px 20px; overflow: hidden; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-tab { display: none; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-tabs h2 { display: block; padding: 0 10px 10px 10px; line-height: normal; font-size: 18px; margin: 0 0 10px 0; border-bottom: 1px solid #EEE; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-fields { overflow: auto; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-tabs table { width: 100%; border: none; font-size: 12px; text-align: left; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-tabs table th,  .wpvkp-shortcodes-form .wpvkp-shortcodes-form-tabs table td { padding: 14px 10px 14px 0; border-bottom: 1px solid #EEE; vertical-align: top; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-tabs table th { font-weight: normal; text-align: left; width: 120px; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-tabs table th label { padding: 5px 0 0 10px; display: block; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-tabs table td input, .wpvkp-shortcodes-form .wpvkp-shortcodes-form-tabs table td textarea { border: 1px solid #DDD; box-shadow: inset 1px 1px 4px #f9f9f9; padding: 6px 8px; font-family: Helvetica; font-size: 12px; color: #888; width: 80%; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-tabs table td .wp-picker-container input[type="text"] { width: 80px!important; margin: 0 5px 0 0; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-tabs table td .wp-picker-container input.button { width: auto!important; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-tabs table td textarea { height: 100px; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-tabs table td textarea:disabled { background: #EEE; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-tabs table td input:focus, .wpvkp-shortcodes-form .wpvkp-shortcodes-form-tabs table td textarea:focus { color: #333; border-color: #BBB; background: #FFF; outline: none; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-form-tabs table td span.tip { display: block; padding: 5px 0; color: #999; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-submit { clear: both; height: 70px; position: absolute; bottom: 0px; left: 0px; width: 100%; background: #EEE; border-top: 1px solid #DDD; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-submit .button-primary { position: absolute; right: 20px; top: 20px; }\
.wpvkp-shortcodes-form .current-icon, .wpvkp-shortcodes-form .current-social-icon { margin: 0 0 0 10px; font-size: 14px; width: 24px; text-align:center; height: 24px; line-height: 24px; }\
.wpvkp-shortcodes-toggle-social-list { margin: 0 0 20px 0; }\
.wpvkp-shortcodes-form .social-icon, .wpvkp-shortcodes-form .current-social-icon { margin: 0 0 0 10px; display: block; float: left; }\
.wpvkp-shortcodes-form .current-social-icon { display: none; }\
.wpvkp-shortcodes-form .social-icon img { width: 21px; height: 21px; margin: 1px 0 0 0; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-social-link-field { float: left; width: 220px!important; margin: 0 0 0 10px; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-icon-list-holder { clear: both; overflow: hidden; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-icon-list { padding: 10px 0 0 0; display: block; list-style: none; margin: 0px; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-icon-list li { display: block; float: left; width: 40px; height: 40px; margin: 0 10px 10px 0; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-icon-list li a { display: block; float: left; width: 40px; height: 40px; text-align: center; line-height: 40px; background: #f9f9f9; border: 1px solid #EEE; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-icon-list li a:hover { border: 1px solid #CCC; box-shadow: 1px 1px 2px #EEE; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-icon-list li a i { font-size: 14px; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-icon-list li a img { width: 20px; height: 20px; margin-top: 10px; }\
.wpvkp-shortcodes-form .wpvkp-shortcodes-icon-list li a span { display: none; }\
.wpvkp-shortcodes-form .column-structures { display: block; padding: 0 0 0 10px; }\
.wpvkp-shortcodes-form .column-structures a { display: block; width: 100px; height: 40px; float: left; margin: 0 10px 20px 0; }\
.wpvkp-shortcodes-form .column-structures a span { float:left; position: relative; display: block; height: 40px; overflow: hidden; }\
.wpvkp-shortcodes-form .column-structures a i { background: #EEE; position: absolute; left: -2px; top: 0px; display: block; height: 40px; line-height: 40px; font-size: 14px; text-align: center; width: 100%; }\
.wpvkp-shortcodes-form .column-structures a:hover i, .wpvkp-shortcodes-form .column-structures a.active i { background: #999; color: #FFF; }\
.wpvkp-shortcodes-form .column-structures label { margin: 0 0 14px 0; display: block; font-size: 14px; }\
.wpvkp-shortcodes-form .clearfix { clear: both; }\
#wpvkp-shortcodes-form-tab_tabs td label,\
#wpvkp-shortcodes-form-tab_accordion td label { display: block; padding: 5px 0 10px 0; color: #999; }\
#wpvkp-shortcodes-form-tab_tabs input,\
#wpvkp-shortcodes-form-tab_accordion input,\
#wpvkp-shortcodes-form-tab_accordion .wpvkp-shortcodes-toggle-icon-list { margin: 0 0 10px 0; }\
</style>\
		<div id="wpvkp-shortcodes-form"><div class="wpvkp-shortcodes-form">\
		<div class="wpvkp-shortcodes-form-top">\
		<div class="wpvkp-shortcodes-form-types">\
			<span class="wpvkp-shortcodes-form-title"><img src="'+plugin_url+'images/toolbar-icon.png" alt="" />WPVKP Shortcodes</span>\
			<ul>\
				<li class="wpvkp-shortcodes-form-type-button active" type="button"><a href="#">Buttons</a></li>\
				<li class="wpvkp-shortcodes-form-type-columns" type="columns"><a href="#">Columns</a></li>\
				<li class="wpvkp-shortcodes-form-type-social" type="social"><a href="#">Social</a></li>\
                <li class="wpvkp-shortcodes-form-type-media" type="media"><a href="#">Videos</a></li>\
				<li class="wpvkp-shortcodes-form-type-toggle" type="toggle"><a href="#">Toggles</a></li>\
				<li class="wpvkp-shortcodes-form-type-accordion" type="accordion"><a href="#">Accordion</a></li>\
				<li class="wpvkp-shortcodes-form-type-tabs" type="tabs"><a href="#">Tabs</a></li>\
				<li class="wpvkp-shortcodes-form-type-map" type="map"><a href="#">Google Map</a></li>\
				<li class="wpvkp-shortcodes-form-type-alertbox" type="alertbox"><a href="#">Alert Boxes</a></li>\
				<li class="wpvkp-shortcodes-form-type-pullleft" type="pullleft"><a href="#">Quote Left</a></li>\
				<li class="wpvkp-shortcodes-form-type-pullright" type="pullright"><a href="#">Quote Right</a></li>\
			</ul>\
		</div><!-- end types -->\
		<div class="wpvkp-shortcodes-form-tabs">\
<!-- BUTTON -->\
			<div class="wpvkp-shortcodes-form-tab" id="wpvkp-shortcodes-form-tab_button" style="display:block">\
				<h2>Add a button</h2>\
				<div class="wpvkp-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>URL must incl. http://</label></th>\
						<td><input type="text" value="" fieldname="url" /></td>\
					</tr>\
					<tr>\
						<th><label>Icon (optional)</label></th>\
						<td>\
<a href="#" class="button wpvkp-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="wpvkp-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>' + fa_icons + '</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
						</td>\
					</tr>\
                    <tr>\
                        <th><label>Icon Customizations (optional)</label></th>\
                        <td><input type="text" value="" fieldname="font_awesome_att" />\
                        <span class="tip">Enter as many as you want separated by spaces, i.e fa-3x fa-rotate-90 <br />See all examples <a href="https://fortawesome.github.io/Font-Awesome/examples/" target="_blank">you can use here.</a> Please note that not all examples on that page will work or make sense in all cases with our shortcodes, this is not a bug.</span>\
                        </td>\
                    </tr>\
					<tr>\
						<th><label>Text Label</label></th>\
						<td><input type="text" value="" fieldname="label" />\
                        <span class="tip">do not enter double quotes (") above use the <a href="http://www.utexas.edu/learn/html/spchar.html" target="_blank">HTML entity code for quote</a> instead</span>\
                        </td>\
					</tr>\
					<tr>\
						<th><label>Color</label></th>\
						<td>\
							<select fieldname="colour">\
								<option value="red">Red</option>\
								<option value="blue">Blue</option>\
								<option value="green">Green</option>\
								<option value="light-gray">Light Gray</option>\
								<option value="dark-gray">Dark Gray</option>\
								<option value="orange">Orange</option>\
								<option value="purple">Purple</option>\
								<option value="theme">Theme Default (if available)</option>\
							</select>\
							<span class="tip">or add a hex value</span>\
							<input type="text" class="wpvkp-shortcodes-button_colour_custom" fieldname="colour_custom" value="" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Size</label></th>\
						<td>\
							<select fieldname="size">\
								<option value="small">Small</option>\
								<option value="medium" selected="selected">Medium</option>\
								<option value="large">Large</option>\
							</select>\
						</td>\
					</tr>\
					<tr>\
						<th><label>Style</label></th>\
						<td>\
							<select fieldname="edge">\
								<option value="straight">Straight</option>\
								<option value="rounded">Rounded</option>\
							</select>\
						</td>\
					</tr>\
					<tr>\
						<th><label>Link to open in</label></th>\
						<td>\
							<select fieldname="target">\
								<option value="_self">Current Tab/Window</option>\
								<option value="_blank">New Tab/Window</option>\
							</select>\
						</td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- SOCIAL ICONS -->\
			<div class="wpvkp-shortcodes-form-tab" id="wpvkp-shortcodes-form-tab_social">\
				<h2>Add social links and icons</h2>\
				<div class="wpvkp-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Social Link 1</label></th>\
						<td>' + social_icons + '\
							<input type="text" value="" fieldname="service" style="display:none" />\
							<input type="text" value="" class="wpvkp-shortcodes-social-link-field" fieldname="link" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Social Link 2</label></th>\
						<td>' + social_icons + '\
							<input type="text" value="" fieldname="service" style="display:none" />\
							<input type="text" value="" class="wpvkp-shortcodes-social-link-field" fieldname="link" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Social Link 3</label></th>\
						<td>' + social_icons + '\
							<input type="text" value="" fieldname="service" style="display:none" />\
							<input type="text" value="" class="wpvkp-shortcodes-social-link-field" fieldname="link" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Social Link 4</label></th>\
						<td>' + social_icons + '\
							<input type="text" value="" fieldname="service" style="display:none" />\
							<input type="text" value="" class="wpvkp-shortcodes-social-link-field" fieldname="link" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Social Link 5</label></th>\
						<td>' + social_icons + '\
							<input type="text" value="" fieldname="service" style="display:none" />\
							<input type="text" value="" class="wpvkp-shortcodes-social-link-field" fieldname="link" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Social Link 6</label></th>\
						<td>' + social_icons + '\
							<input type="text" value="" fieldname="service" style="display:none" />\
							<input type="text" value="" class="wpvkp-shortcodes-social-link-field" fieldname="link" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Social Link 7</label></th>\
						<td>' + social_icons + '\
							<input type="text" value="" fieldname="service" style="display:none" />\
							<input type="text" value="" class="wpvkp-shortcodes-social-link-field" fieldname="link" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Social Link 8</label></th>\
						<td>' + social_icons + '\
							<input type="text" value="" fieldname="service" style="display:none" />\
							<input type="text" value="" class="wpvkp-shortcodes-social-link-field" fieldname="link" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Social Link 9</label></th>\
						<td>' + social_icons + '\
							<input type="text" value="" fieldname="service" style="display:none" />\
							<input type="text" value="" class="wpvkp-shortcodes-social-link-field" fieldname="link" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Social Link 10</label></th>\
						<td>' + social_icons + '\
							<input type="text" value="" fieldname="service" style="display:none" />\
							<input type="text" value="" class="wpvkp-shortcodes-social-link-field" fieldname="link" />\
						</td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- COLUMNS -->\
			<div class="wpvkp-shortcodes-form-tab" id="wpvkp-shortcodes-form-tab_columns">\
				<h2>Add columns</h2>\
				<div class="wpvkp-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<td colspan="2">\
							<div class="column-structures">\
							<label>Choose a column structure</label>\
<a href="#" class="active" split="50|50"><span style="width:50%"><i>&frac12;</i></span><span style="width:50%"><i>&frac12;</i></span></a>\
<div class="clearfix"></div>\
<a href="#" split="33|33|33"><span style="width:33%"><i>&frac13;</i></span><span style="width:33%"><i>&frac13;</i></span><span style="width:33%"><i>&frac13;</i></span></a>\
<a href="#" split="67|33"><span style="width:67%"><i>&frac23;</i></span><span style="width:33%"><i>&frac13;</i></span></a>\
<a href="#" split="33|67"><span style="width:33%"><i>&frac13;</i></span><span style="width:67%"><i>&frac23;</i></span></a>\
<div class="clearfix"></div>\
<a href="#" split="25|25|25|25"><span style="width:25%"><i>&frac14;</i></span><span style="width:25%"><i>&frac14;</i></span><span style="width:25%"><i>&frac14;</i></span><span style="width:25%"><i>&frac14;</i></span></a>\
<a href="#" split="50|25|25"><span style="width:50%"><i>&frac12;</i></span><span style="width:25%"><i>&frac14;</i></span><span style="width:25%"><i>&frac14;</i></span></a>\
<a href="#" split="25|25|50"><span style="width:25%"><i>&frac14;</i></span><span style="width:25%"><i>&frac14;</i></span><span style="width:50%"><i>&frac12;</i></span></a>\
<a href="#" split="25|50|25"><span style="width:25%"><i>&frac14;</i></span><span style="width:50%"><i>&frac12;</i></span><span style="width:25%"><i>&frac14;</i></span></a>\
							<input style="display:none" type="text" fieldname="structure" value="50|50" />\
							</div>\
						</td>\
					</tr>\
					<tr>\
						<th><label>Column 1</label></th>\
						<td><textarea fieldname="col"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Column 2</label></th>\
						<td><textarea fieldname="col"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Column 3</label></th>\
						<td><textarea fieldname="col" disabled="disabled"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Column 4</label></th>\
						<td><textarea fieldname="col" disabled="disabled"></textarea></td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- MEDIA -->\
			<div class="wpvkp-shortcodes-form-tab" id="wpvkp-shortcodes-form-tab_media">\
				<h2>Add Media</h2>\
				<div class="wpvkp-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Type</label></th>\
						<td>\
							<select fieldname="type">\
								<option value="youtube">YouTube</option>\
								<option value="vimeo">Vimeo</option>\
							</select>\
						</td>\
					</tr>\
					<tr>\
						<th><label>Video URL - copy/paste the URL from the browser window of the video here</label></th>\
						<td><input type="text" value="" fieldname="url" /></td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- TOGGLE -->\
			<div class="wpvkp-shortcodes-form-tab" id="wpvkp-shortcodes-form-tab_toggle">\
				<h2>Add toggles</h2>\
				<div class="wpvkp-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Icon (optional)</label></th>\
						<td>\
<a href="#" class="button wpvkp-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="wpvkp-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>' + fa_icons + '</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
						</td>\
					</tr>\
                    <tr>\
                        <th><label>Icon Customizations (optional)</label></th>\
                        <td><input type="text" value="" fieldname="font_awesome_att" />\
                        <span class="tip">Enter as many as you want separated by spaces, i.e fa-3x fa-rotate-90 <br />See all examples <a href="https://fortawesome.github.io/Font-Awesome/examples/" target="_blank">you can use here.</a> Please note that not all examples on that page will work or make sense in all cases with our shortcodes, this is not a bug.</span>\
                        </td>\
                    </tr>\
					<tr>\
						<th><label>Heading</label></th>\
						<td><input type="text" value="" fieldname="heading" /></td>\
					</tr>\
					<tr>\
						<th><label>Text</label></th>\
						<td><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>On page load...</label></th>\
						<td>\
							<select fieldname="onload">\
								<option value="closed">Show Closed</option>\
								<option value="open">Show Open</option>\
							</select>\
						</td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- ACCORDION -->\
			<div class="wpvkp-shortcodes-form-tab" id="wpvkp-shortcodes-form-tab_accordion">\
				<h2>Add an accordion</h2>\
				<div class="wpvkp-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Accordion 1</label></th>\
						<td><label>Icon (optional)</label>\
<a href="#" class="button wpvkp-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="wpvkp-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>' + fa_icons + '</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
                        <label>Icon Customizations (optional)</label></th>\
                        <input type="text" value="" fieldname="font_awesome_att" />\
                        <span class="tip">Enter as many as you want separated by spaces, i.e fa-3x fa-rotate-90 <br />See all examples <a href="https://fortawesome.github.io/Font-Awesome/examples/" target="_blank">you can use here.</a> Please note that not all examples on that page will work or make sense in all cases with our shortcodes, this is not a bug.</span>\
						<label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea>\
						<label>On page load...</label><select fieldname="onload">\
							<option value="closed">Show Closed</option>\
							<option value="open">Show Open</option>\
						</select></td>\
					</tr>\
					<tr>\
						<th><label>Accordion 2</label></th>\
						<td><label>Icon (optional)</label>\
<a href="#" class="button wpvkp-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="wpvkp-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>' + fa_icons + '</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
                        <label>Icon Customizations (optional)</label></th>\
                        <input type="text" value="" fieldname="font_awesome_att" />\
                        <span class="tip">Enter as many as you want separated by spaces, i.e fa-3x fa-rotate-90 <br />See all examples <a href="https://fortawesome.github.io/Font-Awesome/examples/" target="_blank">you can use here.</a> Please note that not all examples on that page will work or make sense in all cases with our shortcodes, this is not a bug.</span>\
						<label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea>\
						<label>On page load...</label><select fieldname="onload">\
							<option value="closed">Show Closed</option>\
							<option value="open">Show Open</option>\
						</select></td>\
					</tr>\
					<tr>\
						<th><label>Accordion 3</label></th>\
						<td><label>Icon (optional)</label>\
<a href="#" class="button wpvkp-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="wpvkp-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>' + fa_icons + '</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
                        <label>Icon Customizations (optional)</label></th>\
                        <input type="text" value="" fieldname="font_awesome_att" />\
                        <span class="tip">Enter as many as you want separated by spaces, i.e fa-3x fa-rotate-90 <br />See all examples <a href="https://fortawesome.github.io/Font-Awesome/examples/" target="_blank">you can use here.</a> Please note that not all examples on that page will work or make sense in all cases with our shortcodes, this is not a bug.</span>\
						<label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea>\
						<label>On page load...</label><select fieldname="onload">\
							<option value="closed">Show Closed</option>\
							<option value="open">Show Open</option>\
						</select></td>\
					</tr>\
					<tr>\
						<th><label>Accordion 4</label></th>\
						<td><label>Icon (optional)</label>\
<a href="#" class="button wpvkp-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="wpvkp-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>' + fa_icons + '</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
                        <label>Icon Customizations (optional)</label></th>\
                        <input type="text" value="" fieldname="font_awesome_att" />\
                        <span class="tip">Enter as many as you want separated by spaces, i.e fa-3x fa-rotate-90 <br />See all examples <a href="https://fortawesome.github.io/Font-Awesome/examples/" target="_blank">you can use here.</a> Please note that not all examples on that page will work or make sense in all cases with our shortcodes, this is not a bug.</span>\
						<label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea>\
						<label>On page load...</label><select fieldname="onload">\
							<option value="closed">Show Closed</option>\
							<option value="open">Show Open</option>\
						</select></td>\
					</tr>\
					<tr>\
						<th><label>Accordion 5</label></th>\
						<td><label>Icon (optional)</label>\
<a href="#" class="button wpvkp-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="wpvkp-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>' + fa_icons + '</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
                        <label>Icon Customizations (optional)</label></th>\
                        <input type="text" value="" fieldname="font_awesome_att" />\
                        <span class="tip">Enter as many as you want separated by spaces, i.e fa-3x fa-rotate-90 <br />See all examples <a href="https://fortawesome.github.io/Font-Awesome/examples/" target="_blank">you can use here.</a> Please note that not all examples on that page will work or make sense in all cases with our shortcodes, this is not a bug.</span>\
						<label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea>\
						<label>On page load...</label><select fieldname="onload">\
							<option value="closed">Show Closed</option>\
							<option value="open">Show Open</option>\
						</select></td>\
					</tr>\
					<tr>\
						<th><label>Accordion 6</label></th>\
						<td><label>Icon (optional)</label>\
<a href="#" class="button wpvkp-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="wpvkp-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>' + fa_icons + '</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
                        <label>Icon Customizations (optional)</label></th>\
                        <input type="text" value="" fieldname="font_awesome_att" />\
                        <span class="tip">Enter as many as you want separated by spaces, i.e fa-3x fa-rotate-90 <br />See all examples <a href="https://fortawesome.github.io/Font-Awesome/examples/" target="_blank">you can use here.</a> Please note that not all examples on that page will work or make sense in all cases with our shortcodes, this is not a bug.</span>\
						<label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea>\
						<label>On page load...</label><select fieldname="onload">\
							<option value="closed">Show Closed</option>\
							<option value="open">Show Open</option>\
						</select></td>\
					</tr>\
					<tr>\
						<th><label>Accordion 7</label></th>\
						<td><label>Icon (optional)</label>\
<a href="#" class="button wpvkp-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="wpvkp-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>' + fa_icons + '</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
                        <label>Icon Customizations (optional)</label></th>\
                        <input type="text" value="" fieldname="font_awesome_att" />\
                        <span class="tip">Enter as many as you want separated by spaces, i.e fa-3x fa-rotate-90 <br />See all examples <a href="https://fortawesome.github.io/Font-Awesome/examples/" target="_blank">you can use here.</a> Please note that not all examples on that page will work or make sense in all cases with our shortcodes, this is not a bug.</span>\
						<label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea>\
						<label>On page load...</label><select fieldname="onload">\
							<option value="closed">Show Closed</option>\
							<option value="open">Show Open</option>\
						</select></td>\
					</tr>\
					<tr>\
						<th><label>Accordion 8</label></th>\
						<td><label>Icon (optional)</label>\
<a href="#" class="button wpvkp-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="wpvkp-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>' + fa_icons + '</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
                        <label>Icon Customizations (optional)</label></th>\
                        <input type="text" value="" fieldname="font_awesome_att" />\
                        <span class="tip">Enter as many as you want separated by spaces, i.e fa-3x fa-rotate-90 <br />See all examples <a href="https://fortawesome.github.io/Font-Awesome/examples/" target="_blank">you can use here.</a> Please note that not all examples on that page will work or make sense in all cases with our shortcodes, this is not a bug.</span>\
						<label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea>\
						<label>On page load...</label><select fieldname="onload">\
							<option value="closed">Show Closed</option>\
							<option value="open">Show Open</option>\
						</select></td>\
					</tr>\
					<tr>\
						<th><label>Accordion 9</label></th>\
						<td><label>Icon (optional)</label>\
<a href="#" class="button wpvkp-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="wpvkp-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>' + fa_icons + '</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
						<label>Icon Customizations (optional)</label></th>\
                        <input type="text" value="" fieldname="font_awesome_att" />\
                        <span class="tip">Enter as many as you want separated by spaces, i.e fa-3x fa-rotate-90 <br />See all examples <a href="https://fortawesome.github.io/Font-Awesome/examples/" target="_blank">you can use here.</a> Please note that not all examples on that page will work or make sense in all cases with our shortcodes, this is not a bug.</span>\
                        <label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea>\
						<label>On page load...</label><select fieldname="onload">\
							<option value="closed">Show Closed</option>\
							<option value="open">Show Open</option>\
						</select></td>\
					</tr>\
					<tr>\
						<th><label>Accordion 10</label></th>\
						<td><label>Icon (optional)</label>\
<a href="#" class="button wpvkp-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="wpvkp-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>' + fa_icons + '</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
                        <label>Icon Customizations (optional)</label></th>\
                        <input type="text" value="" fieldname="font_awesome_att" />\
                        <span class="tip">Enter as many as you want separated by spaces, i.e fa-3x fa-rotate-90 <br />See all examples <a href="https://fortawesome.github.io/Font-Awesome/examples/" target="_blank">you can use here.</a> Please note that not all examples on that page will work or make sense in all cases with our shortcodes, this is not a bug.</span>\
						<label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea>\
						<label>On page load...</label><select fieldname="onload">\
							<option value="closed">Show Closed</option>\
							<option value="open">Show Open</option>\
						</select></td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- TABS -->\
			<div class="wpvkp-shortcodes-form-tab" id="wpvkp-shortcodes-form-tab_tabs">\
				<h2>Add tabs</h2>\
				<div class="wpvkp-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Tab 1</label></th>\
						<td><label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 2</label></th>\
						<td><label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 3</label></th>\
						<td><label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 4</label></th>\
						<td><label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 5</label></th>\
						<td><label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 6</label></th>\
						<td><label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 7</label></th>\
						<td><label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 8</label></th>\
						<td><label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 9</label></th>\
						<td><label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
					<tr>\
						<th><label>Tab 10</label></th>\
						<td><label>Label</label><input type="text" value="" fieldname="label" />\
						<label>Text</label><textarea fieldname="text"></textarea></td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- ALERTBOX -->\
			<div class="wpvkp-shortcodes-form-tab" id="wpvkp-shortcodes-form-tab_alertbox">\
				<h2>Add an Alert Box</h2>\
				<div class="wpvkp-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Icon (optional)</label></th>\
						<td>\
<a href="#" class="button wpvkp-shortcodes-toggle-icon-list">Choose an icon</a>\
<i class="current-icon fa-icon-"></i>\
<div class="wpvkp-shortcodes-icon-list-holder" style="display:none">\
<p style="margin-bottom:0px">Icons by <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a></p>' + fa_icons + '</div>\
						<input type="text" style="display:none" value="" fieldname="icon" />\
						</td>\
					</tr>\
                    <tr>\
                        <th><label>Icon Customizations (optional)</label></th>\
                        <td><input type="text" value="" fieldname="font_awesome_att" />\
                        <span class="tip">Enter as many as you want separated by spaces, i.e fa-3x fa-rotate-90 <br />See all examples <a href="https://fortawesome.github.io/Font-Awesome/examples/" target="_blank">you can use here.</a> Please note that not all examples on that page will work or make sense in all cases with our shortcodes, this is not a bug.</span>\
                        </td>\
                    </tr>\
					<tr>\
						<th><label>Color</label></th>\
						<td>\
							<select fieldname="colour">\
								<option value="red">Red</option>\
								<option value="blue">Blue</option>\
								<option value="green">Green</option>\
								<option value="light-gray">Light Gray</option>\
								<option value="yellow">Yellow</option>\
								<option value="custom">Custom Colors</option>\
								<option value="theme">Theme Default (if available)</option>\
							</select>\
							<span class="tip">or add a hex value</span>\
							<input type="text" class="wpvkp-shortcodes-button_colour_custom" fieldname="colour_custom" value="" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Alert Text</label></th>\
						<td><textarea fieldname="text"></textarea></td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- PULL QUOTE LEFT -->\
			<div class="wpvkp-shortcodes-form-tab" id="wpvkp-shortcodes-form-tab_pullleft">\
				<h2>Add a Pull Quote Left</h2>\
				<div class="wpvkp-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Color</label></th>\
						<td>\
							<select fieldname="colour">\
								<option value="red">Red</option>\
								<option value="blue">Blue</option>\
								<option value="green">Green</option>\
								<option value="light-gray">Light Gray</option>\
								<option value="yellow">Yellow</option>\
								<option value="custom">Custom Colors</option>\
								<option value="theme">Theme Default (if available)</option>\
							</select>\
							<span class="tip">or add a hex value</span>\
							<input type="text" class="wpvkp-shortcodes-button_colour_custom" fieldname="colour_custom" value="" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Quote Text</label></th>\
						<td><textarea fieldname="text"></textarea></td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- PULL QUOTE RIGHT -->\
			<div class="wpvkp-shortcodes-form-tab" id="wpvkp-shortcodes-form-tab_pullright">\
				<h2>Add a Pull Quote Right</h2>\
				<div class="wpvkp-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<th><label>Color</label></th>\
						<td>\
							<select fieldname="colour">\
								<option value="red">Red</option>\
								<option value="blue">Blue</option>\
								<option value="green">Green</option>\
								<option value="light-gray">Light Gray</option>\
								<option value="yellow">Yellow</option>\
								<option value="custom">Custom Colors</option>\
								<option value="theme">Theme Default (if available)</option>\
							</select>\
							<span class="tip">or add a hex value</span>\
							<input type="text" class="wpvkp-shortcodes-button_colour_custom" fieldname="colour_custom" value="" />\
						</td>\
					</tr>\
					<tr>\
						<th><label>Quote Text</label></th>\
						<td><textarea fieldname="text"></textarea></td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
<!-- MAP -->\
			<div class="wpvkp-shortcodes-form-tab" id="wpvkp-shortcodes-form-tab_map">\
				<h2>Add a Google map</h2>\
				<div class="wpvkp-shortcodes-form-fields">\
				<table cellpadding="0" cellspacing="0">\
					<tr>\
						<td colspan="2">To get the latitude and longitude values for a location, go to <a style="color:blue" href="http://itouchmap.com/latlong.html" target="_blank">http://itouchmap.com/latlong.html</a> and add the address/zip code etc. to the "Address" field, click the "Go" button and you should see the latitude/longitude appear on the map. The latitude is the first number and the longitude is the second number (make sure you include the minus if there is one).</td>\
					</tr>\
					<tr>\
						<th><label>Latitude</label></th>\
						<td><input type="text" value="" fieldname="latitude" /></td>\
					</tr>\
					<tr>\
						<th><label>Longitude</label></th>\
						<td><input type="text" value="" fieldname="longitude" /></td>\
					</tr>\
					<tr>\
						<th><label>Width</label></th>\
						<td><input type="text" value="100%" fieldname="width" /></td>\
					</tr>\
					<tr>\
						<th><label>Height</label></th>\
						<td><input type="text" value="400" fieldname="height" /></td>\
					</tr>\
					<tr>\
						<th><label>Zoom</label></th>\
						<td><input type="text" value="16" fieldname="zoom" /></td>\
					</tr>\
					<tr>\
						<th><label>Info Window Text</label></th>\
						<td><textarea fieldname="infowindow_text"></textarea></td>\
					</tr>\
				</table>\
				</div>\
			</div><!-- end tab -->\
\
		</div></div>\
		<div class="wpvkp-shortcodes-submit">\
			<input style="display:none" id="wpvkp-shortcodes-form-type" value="button" />\
			<textarea style="display:none" id="wpvkp-shortcodes-form-code-to-add"></textarea>\
			<input type="button" id="wpvkp_shortcodes-submit" class="button-primary" value="Insert Shortcode" name="submit" />\
		</div>\
	</div></div>');

        form.appendTo('body').hide();

        /* Change tab */
        var wpvkp_shortcode_type = "button";
        var wpvkp_shortcode_code = "";
        form.find('.wpvkp-shortcodes-form-types ul li a').click(function () {
            wpvkp_shortcode_type = jQuery(this).parent('li').attr('type');
            jQuery('input#wpvkp-shortcodes-form-type').val(wpvkp_shortcode_type);
            jQuery('.wpvkp-shortcodes-form-tab').hide();
            jQuery('#wpvkp-shortcodes-form-tab_' + wpvkp_shortcode_type).show();
            jQuery('.wpvkp-shortcodes-form-types .active').removeClass('active');
            jQuery(this).parent('li').addClass('active');
            jQuery('.wpvkp-shortcodes-form .wpvkp-shortcodes-form-types').css({
                "height": jQuery('.wpvkp-shortcodes-form-tabs').outerHeight()
            });
            return false;
        });

        /* Choose icon */
        jQuery('.wpvkp-shortcodes-toggle-icon-list').click(function () {
            jQuery(this).parent('td').find('.wpvkp-shortcodes-icon-list-holder').fadeToggle();
            return false;
        });
        jQuery('.wpvkp-shortcodes-icon-list li a').click(function () {
            jQuery(this).parentsUntil('td').parent('td').find('input[type="text"]:first').val(jQuery(this).find('span').text());
            jQuery('.wpvkp-shortcodes-icon-list-holder').hide();
            jQuery(this).parentsUntil('td').parent('td').find('.current-icon').attr({
                'class': 'current-icon fa fa-' + jQuery(this).find('span').text()
            });

            var icon_to_add = jQuery(this).find('span').text();
            if (icon_to_add.search('ja-social-icon') > -1) {
                jQuery(this).parentsUntil('td').parent('td').find('.current-social-icon').attr({
                    'class': 'current-social-icon ja-social-icon- ' + jQuery(this).find('span').text()
                });
                jQuery(this).parentsUntil('td').parent('td').find('.social-icon').hide();
                jQuery(this).parentsUntil('td').parent('td').find('.current-social-icon').show();
            } else {
                jQuery(this).parentsUntil('td').parent('td').find('.social-icon').html('<img src="'+plugin_url+'images/social-icons/' + jQuery(this).find('span').text() + '.png" alt="" />');
                jQuery(this).parentsUntil('td').parent('td').find('.social-icon').show();
                jQuery(this).parentsUntil('td').parent('td').find('.current-social-icon').hide();
            }
            return false;
        });

        /* Color Picker */
        if (jQuery('.wpvkp-shortcodes-button_colour_custom').size() > 0) {
            jQuery('.wpvkp-shortcodes-button_colour_custom').wpColorPicker();
        }

        /* Choose Column Structure */
        var num_of_columns = 2;
        jQuery('.column-structures a').click(function () {
            jQuery('.column-structures a').removeClass('active');
            jQuery(this).addClass('active');
            jQuery('.column-structures input').val(jQuery(this).attr('split'));
            num_of_columns = jQuery(this).attr('split');
            num_of_columns = num_of_columns.split('|');
            num_of_columns = num_of_columns.length;

            jQuery('#wpvkp-shortcodes-form-tab_columns textarea').attr({
                'disabled': 'disabled'
            });
            var i = -1;
            while (i < (num_of_columns - 1)) {
                i++;
                jQuery('#wpvkp-shortcodes-form-tab_columns textarea').eq(i).removeAttr('disabled');
            }

            return false;
        });

        /* On submit click */
        form.find('#wpvkp_shortcodes-submit').click(function () {

            /* Create shortcode */
            wpvkp_shortcode_code = '';

            if (wpvkp_shortcode_type == "social") {

                /* Social shortcode */

                wpvkp_shortcode_code = wpvkp_shortcode_code + '[wpvkp_' + wpvkp_shortcode_type + ']';

                jQuery('#wpvkp-shortcodes-form-tab_' + wpvkp_shortcode_type + ' td').each(function () {
                    if (jQuery(this).find('input:first').val() == "" || jQuery(this).find('input:first').val() == undefined) {} else {

                        wpvkp_shortcode_code = wpvkp_shortcode_code + '[wpvkp_social_link service="';
                        wpvkp_shortcode_code = wpvkp_shortcode_code + jQuery(this).find('input').eq(0).val();
                        wpvkp_shortcode_code = wpvkp_shortcode_code + '" link="';
                        wpvkp_shortcode_code = wpvkp_shortcode_code + jQuery(this).find('input').eq(1).val();
                        wpvkp_shortcode_code = wpvkp_shortcode_code + '"] ';

                    }
                });

                wpvkp_shortcode_code = wpvkp_shortcode_code + '[/wpvkp_' + wpvkp_shortcode_type + ']';

            } else if (wpvkp_shortcode_type == "columns") {

                /* Columns shortcode */

                wpvkp_shortcode_code = wpvkp_shortcode_code + '[wpvkp_' + wpvkp_shortcode_type + ' ';

                jQuery('#wpvkp-shortcodes-form-tab_' + wpvkp_shortcode_type + ' input, #wpvkp-shortcodes-form-tab_' + wpvkp_shortcode_type + ' select').each(function () {

                    if (jQuery(this).attr('fieldname') != "" || jQuery(this).attr('fieldname') != undefined) {
                        wpvkp_shortcode_code = wpvkp_shortcode_code + ' ' + jQuery(this).attr('fieldname') + '="' + jQuery(this).val() + '"';
                    }

                });
                wpvkp_shortcode_code = wpvkp_shortcode_code + ']';

                /* the actual cols */
                var col_counter = 0;
                var col_class = 'a';
                jQuery('#wpvkp-shortcodes-form-tab_' + wpvkp_shortcode_type + ' textarea').each(function () {

                    if (jQuery(this).attr('disabled') == "disabled") {} else {

                        col_counter++;
                        if (col_counter == 1) {
                            col_class = "a";
                        }
                        if (col_counter == 2) {
                            col_class = "b";
                        }
                        if (col_counter == 3) {
                            col_class = "c";
                        }
                        if (col_counter == 4) {
                            col_class = "d";
                        }
                        wpvkp_shortcode_code = wpvkp_shortcode_code + '[wpvkp_col position="' + col_class + '"]' + jQuery(this).val() + '[/wpvkp_col]';

                    }

                });


                wpvkp_shortcode_code = wpvkp_shortcode_code + '[/wpvkp_' + wpvkp_shortcode_type + ']';


            } else if (wpvkp_shortcode_type == "tabs") {

                /* Tabs shortcode */

                wpvkp_shortcode_code = wpvkp_shortcode_code + '[wpvkp_' + wpvkp_shortcode_type + ']';

                /* the actual tabs */
                jQuery('#wpvkp-shortcodes-form-tab_' + wpvkp_shortcode_type + ' input').each(function () {

                    if (jQuery(this).val() != "") {

                        wpvkp_shortcode_code = wpvkp_shortcode_code + '[wpvkp_tab label="' + jQuery(this).val() + '"]' + jQuery(this).parent('td').find('textarea').val() + '[/wpvkp_tab]';

                    }

                });


                wpvkp_shortcode_code = wpvkp_shortcode_code + '[/wpvkp_' + wpvkp_shortcode_type + ']';


            } else if (wpvkp_shortcode_type == "accordion") {

                /* Accordion shortcode */

                wpvkp_shortcode_code = wpvkp_shortcode_code + '[wpvkp_' + wpvkp_shortcode_type + ']';

                /* the actual toggle */
                jQuery('#wpvkp-shortcodes-form-tab_' + wpvkp_shortcode_type + ' tr').each(function () {

                    if (jQuery(this).find('textarea').val() != "") {

                        wpvkp_shortcode_code = wpvkp_shortcode_code + '[wpvkp_toggle accordion="1" icon="' + jQuery(this).find('input').eq(0).val() + '" font_awesome_att="' + jQuery(this).find('input').eq(1).val() + '" heading="' + jQuery(this).find('input').eq(2).val() + '" onload="' + jQuery(this).find('select').val() + '"]' + jQuery(this).find('textarea').val() + '[/wpvkp_toggle]';

                    }

                });


                wpvkp_shortcode_code = wpvkp_shortcode_code + '[/wpvkp_' + wpvkp_shortcode_type + ']';


            } else if (wpvkp_shortcode_type == "toggle") {

                jQuery('#wpvkp-shortcodes-form-tab_' + wpvkp_shortcode_type).each(function () {

                    wpvkp_shortcode_code = wpvkp_shortcode_code + '[wpvkp_toggle icon="' + jQuery(this).find('input').eq(0).val() + '" font_awesome_att="' + jQuery(this).find('input').eq(1).val() + '" heading="' + jQuery(this).find('input').eq(2).val() + '" onload="' + jQuery(this).find('select').val() + '"]' + jQuery(this).find('textarea').val() + '[/wpvkp_toggle]';


                });


            } else if (wpvkp_shortcode_type == "alertbox") {

                jQuery('#wpvkp-shortcodes-form-tab_' + wpvkp_shortcode_type).each(function () {

                    wpvkp_shortcode_code = wpvkp_shortcode_code + '[wpvkp_alertbox icon="' + jQuery(this).find('input').eq(0).val() + '" colour="' + jQuery(this).find('select').val() + '" font_awesome_att="' + jQuery(this).find('input').eq(1).val() + '" custom_colour="' + jQuery(this).find('input').eq(2).val() + '"]' + jQuery(this).find('textarea').val() + '[/wpvkp_alertbox]';


                });

            } else {

                /* Basic shortcodes */

                wpvkp_shortcode_code = wpvkp_shortcode_code + '[wpvkp_' + wpvkp_shortcode_type + ' ';

                jQuery('#wpvkp-shortcodes-form-tab_' + wpvkp_shortcode_type + ' input, #wpvkp-shortcodes-form-tab_' + wpvkp_shortcode_type + ' select, #wpvkp-shortcodes-form-tab_' + wpvkp_shortcode_type + ' textarea').each(function () {

                    if (jQuery(this).attr('fieldname') != "" && jQuery(this).attr('fieldname') != undefined) {
                        wpvkp_shortcode_code = wpvkp_shortcode_code + ' ' + jQuery(this).attr('fieldname') + '="' + jQuery(this).val() + '"';
                    }

                });
                wpvkp_shortcode_code = wpvkp_shortcode_code + ']';

            }

            /* Insert shortcode */
            tinyMCE.activeEditor.execCommand('mceInsertContent', 0, wpvkp_shortcode_code);
            tb_remove();

            return false;

        });
    });
})()
