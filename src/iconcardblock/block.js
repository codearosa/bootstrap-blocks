/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap container
 */

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
const { __ } = wp.i18n;

const TEMPLATE = [
  ['iblock/main', { placeholder: 'Give me a fontawesome classname to style me.' }],
  ['core/heading', { placeholder: 'card heading.', className: 'card-title' }],
  ['core/paragraph', { placeholder: 'Give me a card text.', className: 'card-text' }],
];

//  Import CSS.
import './style.scss';
import './editor.scss';

registerBlockType( 'iconcardblock/main', {
  title: 'Iconcard',
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
