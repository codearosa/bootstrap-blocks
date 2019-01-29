/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap container
 */

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
const { __ } = wp.i18n;

registerBlockType( 'rowblock/main', {
  title: 'row',
  icon: 'index-card',
  category: 'bootstrap-blocks',
  description: __( 'I am a simple row. Give me a bootstrap classname to style my container.', 'div-block' ),
    edit( { attributes, className, setAttributes } ) {
        return (
            <div className={ 'row' + ' ' + className }>
                <InnerBlocks />
            </div>
        );
    },
    save( { attributes, className } ) {
        return (
            <div className={ 'row' + ' ' + className }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
