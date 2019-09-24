
import {
	BaseControl, PanelBody, RangeControl, Toolbar,
} from '@wordpress/components'
import {
	InspectorControls, RichText,
} from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'
import { applyFilters } from '@wordpress/hooks'
import classnames from 'classnames'
import { Fragment } from '@wordpress/element'

import {
	getIconShapeToolbarList,
	getIconSVG,
	getIconSVGBase64,
	getIconToolbarList,
} from './util'

const edit = props => {
	const {
		className,
		setAttributes,
	} = props

	const {
		icon,
		iconShape,
		iconColor,
		iconSize,
		text,
		columns,
		gap,
		design = '',
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-icon-list-wrapper',
	], applyFilters( 'stackable.icon-list.mainclasses', {}, design, props ) )

	const ulClasses = classnames( [
		'ugb-icon-list',
		`ugb-icon--icon-${ icon }`,
		`ugb-icon--columns-${ columns }`,
	], applyFilters( 'stackable.icon-list.ulclasses', {}, design, props ) )

	const iconSVGString = getIconSVGBase64( icon, iconShape, iconColor )
	const style = {
		'--icon': 'url(\'data:image/svg+xml;base64,' + iconSVGString + '\')',
		'--icon-size': iconSize ? `${ iconSize }px` : undefined,
		'--gap': gap ? `${ gap }px` : undefined,
	}

	function applyIcon( icon ) {
		return () => setAttributes( { icon } )
	}
	function applyIconShape( iconShape ) {
		return () => setAttributes( { iconShape } )
	}

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={ __( 'Sorting and Filtering' ) }>
					<BaseControl label={ __( 'Icon' ) }>
						<Toolbar
							icon={ getIconSVG( icon ) }
							controls={ getIconToolbarList( {
								onChange: value => applyIcon( value ),
								isActive: value => icon === value,
							} ) }
						/>
					</BaseControl>
					<BaseControl label={ __( 'Icon Shape' ) }>
						<Toolbar
							icon={ getIconSVG( icon, iconShape ) }
							controls={ getIconShapeToolbarList( icon, {
								onChange: value => applyIconShape( value ),
								isActive: value => iconShape === value,
							} ) }
						/>
					</BaseControl>
					<RangeControl
						label={ __( 'Icon Size' ) }
						value={ iconSize }
						onChange={ iconSize => setAttributes( { iconSize } ) }
						min={ 8 }
						max={ 30 }
					/>
					<RangeControl
						label={ __( 'Columns' ) }
						value={ columns }
						onChange={ columns => setAttributes( { columns } ) }
						min={ 1 }
						max={ 3 }
					/>
					<RangeControl
						label={ __( 'List Gap' ) }
						value={ gap }
						onChange={ gap => setAttributes( { gap } ) }
						min={ 0 }
						max={ 30 }
					/>
				</PanelBody>
			</InspectorControls>
			<div className={ mainClasses } style={ style }>
				<RichText
					tagName="ul"
					multiline="li"
					value={ text }
					className={ ulClasses }
					onChange={ text => setAttributes( { text } ) }
					placeholder={ __( 'Text for this block' ) }
					keepPlaceholderOnFocus
				/>
			</div>
		</Fragment>
	)
}

export default edit
