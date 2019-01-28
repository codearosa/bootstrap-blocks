/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap container
 */

 import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
const { __ } = wp.i18n;

registerBlockType( 'threecolumns-block/main', {
  title: '3 columns',
  icon: 'index-card',
  category: 'bootstrap-blocks',
    edit({ attributes, className, setAttributes }) {

      const TEMPLATE = [
    ['core/column'],
    ['core/column'],
    ['core/column'],
  ];

        return (
            <div class="row">
              <InnerBlocks template={TEMPLATE} />
            </div>
        );
    },
    save({ attributes, className, setAttributes }) {
        return (
            <div class="row">
                <InnerBlocks.Content />
            </div>
        );
    },
} );
