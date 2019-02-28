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

registerBlockType( 'bootstrapblocks/nav', {
  title: 'nav',
  icon: 'index-card',
  category: 'bootstrap-blocks',
  description: __( 'I am a simple nav. Give me a bootstrap classname to style my container.', 'nav-block' ),
  edit( { attributes, className, setAttributes } ) {
      return (
          <nav className={ className }>
              <InnerBlocks />
          </nav>
      );
  },
  save( { attributes, className } ) {
      return (
          <nav className={ className }>
              <InnerBlocks.Content />
          </nav>
      );
  },
} );
