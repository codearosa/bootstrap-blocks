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

registerBlockType( 'bootstrapblocks/column', {
  title: 'col',
  icon: 'index-card',
  category: 'bootstrap-blocks',
  description: __( 'I am a simple column. Give me a bootstrap classname to style my container.', 'columnblock' ),
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
