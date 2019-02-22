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

const COLUMNS = [
  ['core/column', { placeholder: 'I am a column. Give me a bootstrap classname.' },[
    ['bootstrapblocks/div', { placeholder: 'I am a column. Give me a bootstrap classname.', className: 'col-md border border-primary'}, ],
  ]
  ]
  ];

registerBlockType( 'bootstrapblocks/column', {
  title: 'col',
  icon: 'index-card',
  category: 'bootstrap-blocks',
  description: __( 'I am a simple column. Give me a bootstrap classname to style my container.', 'columnblock' ),
  edit( { attributes, className, setAttributes } ) {
      return (
          <div className={ className }>
              <InnerBlocks template={ COLUMNS } />
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
