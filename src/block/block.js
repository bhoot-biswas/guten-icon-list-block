/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import icon from './icon';
import edit from './edit';
import save from './save';

//  Import CSS.
import './editor.scss';
import './style.scss';


const {
    name,
    category,
    attributes
} = metadata;

/**
 * Register: a Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( name, {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'card-block - Gutenberg Block' ), // Block title.
    description: __( 'Cards provide a flexible and extensible content container with multiple variants and options.' ),
	icon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category, // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'card-block — Gutenberg Card' ),
		__( 'create-guten-block' ),
	],
    attributes,
    edit,
    save,
} );
