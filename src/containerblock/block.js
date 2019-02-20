/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap container
 */

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
const { __ } = wp.i18n;

const DIVCONTAINER = [
  ['divblock/main', { className: 'container' }],
];

//  Import CSS.
import './style.scss';
import './editor.scss';

registerBlockType( 'bootstrapblocks/container', {
  title: 'container',
  icon: 'index-card',
  category: 'bootstrap-blocks',
  html: true,
  alignWide: false,
  edit( { attributes, className, setAttributes } ) {
      return (
          <div className={ className }>
              <InnerBlocks template={DIVCONTAINER} />
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
