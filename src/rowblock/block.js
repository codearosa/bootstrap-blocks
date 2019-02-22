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
  ['core/columns', { placeholder: 'I am a column. Give me a bootstrap classname.', className: 'row border border-primary' },[
    ['core/column', { placeholder: 'I am a column. Give me a bootstrap classname.', className: 'col-md border border-primary'}, ],
    ['core/column', { placeholder: 'I am a column. Give me a bootstrap classname.', className: 'col-md border border-primary'},]
  ]
  ]
  ];

registerBlockType( 'bootstrapblocks/row', {
  title: 'row',
  icon: 'index-card',
  category: 'bootstrap-blocks',
  html: true,
  alignWide: false,
  edit( { attributes, className, setAttributes } ) {

      return (
        <InnerBlocks template={TWOCOLUMNS} />

      );
  },
  save( { attributes, className } ) {
      return (
              <InnerBlocks.Content />
      );
  },
} );
