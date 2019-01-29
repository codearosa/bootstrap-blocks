/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap container
 */

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
const { __ } = wp.i18n;

registerBlockType( 'containerblock/main', {
  title: 'container',
  icon: 'index-card',
  category: 'bootstrap-blocks',
  html: false,
    edit( { attributes, className, setAttributes } ) {
        return (
            <div className={ 'container' + ' ' + className }>
                <InnerBlocks />
            </div>
        );
    },
    save( { attributes } ) {
        return (
            <div className={ 'container' + ' ' + className }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
