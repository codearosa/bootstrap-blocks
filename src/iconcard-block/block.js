/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap container
 */

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
const { __ } = wp.i18n;

const TEMPLATE = [
  ['core/image', { className: 'card-image-top' }],
  ['core/heading', { className: 'card-title' }],
  ['core/paragraph', { className: 'card-text' }],
];

registerBlockType( 'yourcard-block/main', {
  title: 'Cards',
  icon: 'index-card',
  category: 'bootstrap-blocks',
  description: __( 'I am a simple div. Give me a bootstrap classname to style my container.', 'div-block' ),
    edit( { attributes, className, setAttributes } ) {
        return (
            <div className={ 'card' + ' ' + className }>
                <InnerBlocks template={TEMPLATE} />
            </div>
        );
    },
    save( { attributes, className } ) {
        return (
            <div className={ 'card' + ' ' + className }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
