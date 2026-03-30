import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, BooleanField, ChoiceField, RepeatedFieldGroup, SpacingField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<SpacingField
			label="Spacing"
			name="spacing"
			visibility={{
				hidden_subfields: {
				padding: 'true',
				},
			}}
			default={{
				margin: {
					top: {
						value: 10,
						units: 'px',
					},
					bottom: {
						value: 10,
						units: 'px',
					},
				},
			}}
		/>
		<TextField
			name="minWidth"
			label="Width (px)"
			default="200"
		/>
		<LinkField
			name="ctaLink"
			label="Link"
			default={{
				url: {
					content_id: 1,
					href: "https://www.sydneyzoo.com",
					type: "EXTERNAL",
				},
				no_follow: false,
				open_in_new_tab: true,
				sponsored: false,
			}}
			supportedTypes={[ "EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG", "CALL_TO_ACTION", "PHONE_NUMBER"]}
		/>
		<TextField
			name="ctaText"
			label="Link Text"
			default="Book now"
		/>
		<ChoiceField
			name="buttonColor"
			label="Button Color"
			default={'bg-orange-500 hover:bg-white hover:text-orange-500 border-2 border-transparent hover:border-orange-500 transition duration-300 text-sm text-white font-bold inline-flex items-center justify-center px-6 py-3 rounded-full'}
			choices={[ [ "bg-sky-600 border-2 border-transparent text-white hover:border-sky-600 hover:text-sky-600 hover:bg-white transition", "Sky Primary" ], [ "bg-white border-2 border-sky-600 text-sky-600 hover:border-sky-600 hover:text-white hover:bg-sky-600 transition", "Sky Secondary" ], [ "bg-green-500 border-2 border-transparent text-white hover:border-green-500 hover:text-green-500 hover:bg-white", "Green Primary" ], [ "border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white", "Green Secondary" ], ["bg-orange-500 hover:bg-white hover:text-orange-500 border-2 border-transparent hover:border-orange-500 transition duration-300 text-sm text-white font-bold inline-flex items-center justify-center px-6 py-3 rounded-full", "Orange Primary"], ["true", "Brown Button"] ]}
			display="select"
		/>
		<ChoiceField
			name="ctaPosition"
			label="Position"
			default={'text-left'}
			choices={[ [ "text-left", "Left" ], [ "text-center", "Center" ], [ "text-right", "Right" ] ]}
			display="select"
		/>
	</ModuleFields>
);