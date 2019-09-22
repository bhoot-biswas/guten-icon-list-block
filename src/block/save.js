/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	RichText,
	InnerBlocks,
	getColorClassName,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import {
	IMAGE_BACKGROUND_TYPE,
	VIDEO_BACKGROUND_TYPE,
	backgroundImageStyles,
	dimRatioToClass,
} from './shared';

export default function save( { attributes } ) {
	const {
		backgroundType,
		customOverlayColor,
		dimRatio,
		focalPoint,
		hasParallax,
		overlayColor,
		url,
		minHeight,
		cardTitle
	} = attributes;
	const overlayColorClass = getColorClassName( 'background-color', overlayColor );
	const style = backgroundType === IMAGE_BACKGROUND_TYPE ?
		backgroundImageStyles( url ) :
		{};
	if ( ! overlayColorClass ) {
		style.backgroundColor = customOverlayColor;
	}
	if ( focalPoint && ! hasParallax ) {
		style.backgroundPosition = `${ focalPoint.x * 100 }% ${ focalPoint.y * 100 }%`;
	}
	style.minHeight = minHeight || undefined;

	const classes = classnames(
		'wp-block-bengal-studio-card__img-top',
		dimRatioToClass( dimRatio ),
		overlayColorClass,
		{
			'has-background-dim': dimRatio !== 0,
			'has-parallax': hasParallax,
		},
	);

	return (
		<div>
			{ IMAGE_BACKGROUND_TYPE === backgroundType && (
				<div
					className={ classes }
					data-url={ url }
					style={ style }
				>
					<RichText.Content
						tagName="h2"
						value={ cardTitle }
						className="wp-block-bengal-studio-card__title"
					/>
				</div>
			) }
			{ VIDEO_BACKGROUND_TYPE === backgroundType && url && ( <video
				className="wp-block-bengal-studio-card__video-background"
				autoPlay
				muted
				loop
				src={ url }
			/> ) }
			<div className="wp-block-bengal-studio-card__inner-container">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
