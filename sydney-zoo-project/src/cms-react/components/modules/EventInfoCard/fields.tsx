import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<TextField
			name="title"
			label="Title"
			allowNewLine={true}
			default="BUNGARRIBEE WILDLIFE WORKSHOP"
			required
		/>
		<ImageField
			name="image"
			label="Image"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/2023/11/Reptile-1024x683.jpg", alt: "" }}
		/>
		<RichTextField
			name="bodyDetailsLeft"
			label="Body Details Left"
			default="<div><p>Explore Australia’s wildlife through Indigenous perspectives and be introduced to a range of native animals through this interactive hands-on experience. </p></div>"
			required
		/>
		<RichTextField
			name="bodyDetailsRight"
			label="Body Details Right"
			default="<div><p>1 hour session
				Cost is for up to 20 people
				$35.00 per additional person </p></div>"
			required
		/>
		<TextField
			name="extraInfo"
			label="Extra Info"
			allowNewLine={true}
			default="PRICE:"
			required
		/>
		<TextField
			name="badge"
			label="Badge"
			allowNewLine={true}
			default="$700"
			required
		/>
		<ChoiceField
			name="backgroundColor"
			label="Background"
			default={'bg-grey-200'}
			choices={[ [ "bg-grey-200", "Grey" ], [ "bg-white", "White" ] ]}
			display="select"
		/>
	</ModuleFields>
);
