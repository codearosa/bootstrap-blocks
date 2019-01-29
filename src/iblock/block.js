/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap container
 */

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
const { __ } = wp.i18n;

registerBlockType( 'iblock/main', {
  title: 'Icon',
  icon: 'index-card',
  category: 'bootstrap-blocks',
  description: __( 'I am a simple <i>. Give me a fontawesome classname to give me a icon.', 'iblock' ),
    edit( { attributes, className, setAttributes } ) {
        return (
            <i className={ className }></i>
        );
    },
    save( { attributes, className } ) {
        return (
            <i className={ className }></i>
        );
    },
} );
