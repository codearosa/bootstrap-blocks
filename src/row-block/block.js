/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap container
 */

 import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
const { __ } = wp.i18n;

registerBlockType( 'row-block/main', {
  title: 'row',
  icon: 'index-card',
  category: 'bootstrap-blocks',
    edit({ attributes, className, setAttributes }) {
        return (
            <div class="row">
              <InnerBlocks />
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
