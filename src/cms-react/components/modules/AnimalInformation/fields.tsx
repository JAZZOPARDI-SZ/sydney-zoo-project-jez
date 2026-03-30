import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, RepeatedFieldGroup, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<ChoiceField
			name="borderColor"
			label="Border Color"
			default={'bg-sky-500'}
			choices={[ [ "bg-green-500", "Green" ], [ "bg-sky-500", "Sky" ], [ "bg-red-500", "Red" ], [ "bg-brown-400", "Brown" ], [ "bg-orange-400", "Yellow" ] ]}
			display="select"
		/>
		<RepeatedFieldGroup
			name="tiles"
			label="Tiles"
			occurrence={{
				min: 1,
				max: 12,
				default: 4,
			}}
		>
			<TextField
				name="imageText"
				label="Image Text"
				allowNewLine={true}
				default="Weight"
				required
			/>
			<ChoiceField
				name="accentColor"
				label="Accent Color"
				default={'bg-sky-500'}
				choices={[ [ "bg-green-500", "Green" ], [ "bg-sky-500", "Sky" ], [ "bg-red-500", "Red" ], [ "bg-brown-400", "Brown" ], [ "bg-orange-400", "Yellow" ] ]}
				display="select"
			/>
			<ImageField
				name="image"
				label="Image"
				default={{ src: "https://sydneyzoo.com/wp-content/uploads/2021/05/barramundi-300x300.jpg", alt: "" }}
			/>
			<TextField
				name="statistic"
				label="Statistic"
				allowNewLine={true}
				default="Up to 45kg"
				required
			/>
		</RepeatedFieldGroup>
	</ModuleFields>
);
