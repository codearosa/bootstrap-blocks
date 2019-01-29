/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap row
 */

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
const { __ } = wp.i18n;

const ROW = [
  ['core/columns', {className: 'row'},[
    ['core/column', {className: 'col-sm'}],
    ['core/column', {className: 'col-sm'}],
    ['core/column', {className: 'col-sm'}],
  ]
]
];



registerBlockType( 'rowblock/main', {
  title: 'row',
  icon: 'index-card',
  category: 'bootstrap-blocks',
  description: __( 'I am a simple row with 2 columns', 'rowblock' ),
    edit( { attributes, className, setAttributes } ) {
        return (
            <InnerBlocks template={ROW} />

        );
    },
    save( { attributes, className } ) {
        return (
                <InnerBlocks.Content />
        );
    },
} );
