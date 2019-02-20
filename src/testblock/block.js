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

registerBlockType( 'bootstrapblocks/test', {
  title: 'testme',
  icon: 'index-card',
  category: 'bootstrap-blocks',
  html: true,
  alignWide: false,
  edit( { attributes, className, setAttributes } ) {
      return (
          <div className={ 'row' }>
            <div className={ 'col-sm' + ' ' + className }><InnerBlocks /></div>
            <div className={ 'col-sm' + ' ' + className }><InnerBlocks /></div>
            <div className={ 'col-sm' + ' ' + className }><InnerBlocks /></div>
          </div>
      );
  },
  save( { attributes, className } ) {
      return (
          <div className={ 'row' }>
            <div className={ 'col-sm' + ' ' + className }><InnerBlocks.Content /></div>
            <div className={ 'col-sm' + ' ' + className }><InnerBlocks.Content /></div>
            <div className={ 'col-sm' + ' ' + className }><InnerBlocks.Content /></div>
          </div>
      );
  },
} );
