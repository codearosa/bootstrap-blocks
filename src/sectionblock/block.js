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

registerBlockType( 'bootstrapblocks/section', {
  title: 'section',
  icon: 'index-card',
  category: 'bootstrap-blocks',
  description: __( 'I am a simple section. Give me a bootstrap classname to style my container.', 'sectionblock' ),
  edit( { attributes, className, setAttributes } ) {
      return (
          <section className={ className }>
              <InnerBlocks />
          </section>
      );
  },
  save( { attributes, className } ) {
      return (
          <section className={ className }>
              <InnerBlocks.Content />
          </section>
      );
  },
} );
