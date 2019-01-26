/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap container
 */

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
const { __ } = wp.i18n;

registerBlockType( 'div-block/main', {
  title: 'div',
  icon: 'index-card',
  category: 'bootstrap-blocks',
    edit( { attributes, className, setAttributes } ) {
        return (
            <div className={ className }>
                <InnerBlocks />
            </div>
        );
    },
    save( { attributes, className } ) {
        return (
            <div className={ className }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
