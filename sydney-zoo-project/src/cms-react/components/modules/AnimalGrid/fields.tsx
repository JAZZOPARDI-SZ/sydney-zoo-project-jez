import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, RepeatedFieldGroup, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<ChoiceField
			name="accentColor"
			label="Accent Color"
			default={'rgba(124, 147, 183, 0.4)'}
			choices={[ [ "rgba(36, 105, 90, 0.4)", "Green" ], [ "rgba(124, 147, 183, 0.4)", "Sky" ], [ "rgba(211, 76, 41, 0.4)", "Red" ], [ "rgba(103, 55, 49, 0.4)", "Brown" ], [ "rgba(218, 157, 39, 0.4)", "Yellow" ] ]}
			display="select"
		/>
		<ImageField
			name="image"
			label="Image"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/2021/05/barramundi-300x300.jpg", alt: "" }}
		/>
		<TextField
			name="animalHeading"
			label="Animal Name"
			allowNewLine={true}
			default="Barramundi"
			required
		/>
		<TextField
			name="animalScientificName"
			label="Scientific Name"
			allowNewLine={true}
			default="Lates calcarifer"
			required
		/>
		<LinkField
			name="link"
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
	</ModuleFields>
);
