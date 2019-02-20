/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap container
 */

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks , RichText } from '@wordpress/editor';
const { __ } = wp.i18n;

//  Import CSS.
import './style.scss';
import './editor.scss';

registerBlockType( 'bootstrapblocks/button', {
  title: 'Button',
  icon: 'index-card',
  category: 'bootstrap-blocks',
  description: __( 'I am a simple <button>. Give me a classname to give me a icon.', 'buttonblock' ),
  attributes: {
		content: {
			source: 'html',
			selector: 'button',
		},
	},

	edit( { className, attributes, setAttributes } ) {
		return (
			<RichText
				tagName="button"
        placeholder="Link me"
				className={ className }
				value={ attributes.content }
				onChange={ ( content ) => setAttributes( { content } ) }
			/>
		);
	},

	save( { attributes } ) {
		return <RichText.Content tagName="button" value={ attributes.content } />;
	}
} );
