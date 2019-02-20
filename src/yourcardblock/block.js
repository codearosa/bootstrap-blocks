/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap card
 */

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
const { RichText } = wp.editor;
const { __ } = wp.i18n;

const TEMPLATE = [
  ['core/image', { className: 'card-image-top' }],
  ['core/heading', { className: 'card-title' }],
  ['core/paragraph', { className: 'card-text' }],
];

//  Import CSS.
import './style.scss';
import './editor.scss';

registerBlockType( 'yourcardblock/main', {
  title: 'Cards',
  icon: 'index-card',
  category: 'bootstrap-blocks',
  description: __( 'I am a simple div. Give me a bootstrap classnames to style me.', 'yourcard-block' ),

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
