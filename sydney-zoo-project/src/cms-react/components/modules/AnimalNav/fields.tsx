import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, BooleanField, ChoiceField, RepeatedFieldGroup } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<TextField
			name="text"
			label="Text"
			default="ALSO FOUND IN AQUARIUM"
		/>
		<RepeatedFieldGroup
            name="nav"
            label="Navigation"
            occurrence={{
                min: 1,
                max: 8,
                default: 2,
            }}
        >
			<TextField
				name="linkText"
				label="Link Text"
				default="Murray Cod"
			/>
			<ChoiceField
				name="accentColor"
				label="Accent Color"
				default={'bg-sky-500'}
				choices={[ [ "bg-green-500", "Green" ], [ "bg-sky-500", "Sky" ], [ "bg-red-500", "Red" ], [ "bg-brown-400", "Brown" ], [ "bg-orange-400", "Yellow" ] ]}
				display="select"
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
					open_in_new_tab: false,
					sponsored: false,
				}}
				supportedTypes={[ "EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG", "CALL_TO_ACTION", "PHONE_NUMBER"]}
			/>
        </RepeatedFieldGroup>
	</ModuleFields>
);
