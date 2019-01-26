/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap container
 */

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
const { __ } = wp.i18n;

registerBlockType( 'container-block/main', {
  title: 'container',
  icon: 'index-card',
  category: 'bootstrap-blocks',
    edit( { attributes, className, setAttributes } ) {
        return (
            <div className={ 'container' }>
                <InnerBlocks />
            </div>
        );
    },
    save( { attributes } ) {
        return (
            <div className={ 'container' }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
