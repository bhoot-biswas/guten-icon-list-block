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

export const schema = {
	icon: {
		type: 'string',
		default: 'check',
	},
	iconShape: {
		type: 'string',
	},
	iconColor: {
		type: 'string',
	},
	iconSize: {
		type: 'number',
		default: 20,
	},
	columns: {
		type: 'number',
		default: 1,
	},
	text: {
		source: 'html',
		selector: 'ul',
		multiline: 'li',
		default: '',
	},
	gap: {
		type: 'number',
		default: 16,
	},

	// Custom CSS attributes.
	customCSSUniqueID: {
		type: 'string',
		default: '',
	},
	customCSS: {
		type: 'string',
		default: '',
	},
	customCSSCompiled: {
		type: 'string',
		default: '',
	},
}

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
	title: __( 'icon-list-block - Gutenberg Block' ), // Block title.
    description: __( 'The Icon List Block allows you to create bulleted lists using different icons. Use the icon list to make your layout less cluttered and showcase list items more effectively. Create checklists, feature lists and the like.' ),
	icon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category, // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'icon-list-block — Gutenberg Icon List' ),
		__( 'create-guten-block' ),
	],
    attributes: schema,
    edit,
    save,
} );
