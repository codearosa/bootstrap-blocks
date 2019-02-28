/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap row
 */

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
const { __ } = wp.i18n;


//  Import CSS.
import './style.scss';
import './editor.scss';

const TWOCOLUMNS = [
    ['bootstrapblocks/column', { className: 'col-md' }],
    ['bootstrapblocks/column', { className: 'col-md' }],
  ];


registerBlockType( 'bootstrapblocks/row', {
  title: 'row',
  icon: 'index-card',
  category: 'bootstrap-blocks',
  html: true,
  alignWide: false,
  edit( { attributes, className, setAttributes } ) {

      return (
        <div className={ className }>
              <InnerBlocks template={TWOCOLUMNS} />
        </div>
      );
  },
  save( { attributes, className } ) {
      return (
        <div className={ 'row' }>
              <InnerBlocks.Content />
        </div>
      );
  },
} );
