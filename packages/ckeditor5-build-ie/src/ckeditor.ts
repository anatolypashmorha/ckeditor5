/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';

import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { UploadAdapter } from '@ckeditor/ckeditor5-adapter-ckfinder';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CKBox } from '@ckeditor/ckeditor5-ckbox';
import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Heading } from '@ckeditor/ckeditor5-heading';
import {
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	PictureEditing
} from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link, LinkImage } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { HtmlEmbed } from '@ckeditor/ckeditor5-html-embed';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { Style } from '@ckeditor/ckeditor5-style';
import Collapsible from './collapsible/Collapsible';
import ConvertDivAttributes from './collapsible/ConvertDivAttributes';

export default class IEEditor extends ClassicEditorBase {
	public static override builtinPlugins = [
		Essentials,
		UploadAdapter,
		Autoformat,
		Bold,
		Italic,
		BlockQuote,
		CKBox,
		CKFinder,
		CloudServices,
		EasyImage,
		Heading,
		Image,
		ImageCaption,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		Indent,
		Link,
		List,
		MediaEmbed,
		Paragraph,
		PasteFromOffice,
		PictureEditing,
		Table,
		TableToolbar,
		TextTransformation,

		GeneralHtmlSupport,
		HorizontalLine,
		HtmlEmbed,
		ImageResize,
		LinkImage,
		SourceEditing,
		Style,
		Collapsible,
		ConvertDivAttributes
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'heading',
				'|',
				'bold',
				'italic',
				'link',
				'bulletedList',
				'numberedList',
				'|',
				'indent',
				'outdent',
				'insertTable',
				'|',
				'mediaEmbed',
				'horizontalLine',
				'collapsible',
				'style',
				'htmlEmbed',
				'sourceEditing'
			]
		},
		style: {
			definitions: [
				{
					name: 'Article category',
					element: 'h3',
					classes: [ 'ck-category' ]
				},
				{
					name: 'Info box',
					element: 'p',
					classes: [ 'ck-info-box' ]
				}
			]
		},
		htmlSupport: {
			allow: [
				{
					name: /.*/,
					attributes: [ /.*/ ],
					classes: [ /.*/ ],
					styles: [ /.*/ ]
				}
			]
		},
		image: {
			toolbar: [
				'imageStyle:block',
				'imageStyle:side',
				'imageStyle:wrapText',
				'|',
				'imageTextAlternative',
				'toggleImageCaption',
				'linkImage'
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells'
			]
		},
		link: {
			decorators: {
				openInNewTab: {
					mode: 'manual' as const,
					label: 'Open in a new tab',
					defaultValue: true,			// This option will be selected by default.
					attributes: {
						target: '_blank',
						rel: 'noopener noreferrer'
					}
				}
			}
		},
		// This value must be kept in sync with the language defined in webpack.config.js.
		language: 'en'
	};
}
