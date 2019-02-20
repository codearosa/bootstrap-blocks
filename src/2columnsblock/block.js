/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap container
 */

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
const { __ } = wp.i18n;

const TWOCOLUMNS = [
  ['bootstrapblocks/column', { placeholder: 'I am a column. Give me a bootstrap classname.', className: 'col-md' }],
  ['bootstrapblocks/column', { placeholder: 'I am a column. Give me a bootstrap classname.', className: 'col-md' }],
];

//  Import CSS.
import './style.scss';
import './editor.scss';

registerBlockType( 'bootstrapblocks/twocolumns', {
  title: 'two columns',
  icon: 'index-card',
  category: 'bootstrap-blocks',
  description: __( 'I am a simple row with two columns. Give my container bootstrap classnames to style.', '3columnblock' ),
  edit( { attributes, className, setAttributes } ) {
      return (
          <div className={ 'row' + ' ' + className }>
              <InnerBlocks template={TWOCOLUMNS} />
          </div>
      );
  },
  save( { attributes, className } ) {
      return (
          <div className={  'row' + ' ' + className  }>
              <InnerBlocks.Content />
          </div>
      );
  },
} );
