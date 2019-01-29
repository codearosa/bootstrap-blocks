/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap container
 */

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
const { __ } = wp.i18n;

const TEMPLATE = [
  ['core/html', { className: 'card-title' }],
  ['core/heading', { className: 'card-title' }],
  ['core/paragraph', { className: 'card-text' }],
];

registerBlockType( 'iconcardblock/main', {
  title: 'Icons',
  icon: 'index-card',
  category: 'bootstrap-blocks',
  description: __( 'I am a simple card with an icon on top. Give my parts a bootstrap classname to style.', 'icon-block' ),
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
