/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap container
 */

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
const { __ } = wp.i18n;

//  Import CSS.
import './style.scss';
import './editor.scss';

registerBlockType( 'bootstrapblocks/a', {
  title: 'a',
  icon: 'index-card',
  category: 'bootstrap-blocks',
  description: __( 'I am a simple a. Give me a bootstrap classname to style my container.', 'a-block' ),
  edit( { attributes, className, setAttributes } ) {
      return (
          <a className={ className }>
              <InnerBlocks />
          </a>
      );
  },
  save( { attributes, className } ) {
      return (
          <a className={ className }>
              <InnerBlocks.Content />
          </a>
      );
  },
} );
