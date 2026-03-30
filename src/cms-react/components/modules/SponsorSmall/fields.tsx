import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, RepeatedFieldGroup, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<TextField
			name="sponsorText"
			label="Sponsor Text"
			default="PROUDLY SPONSORED BY"
			required 
		/>
		<ImageField
			name="sponsorImage"
			label="Sponsor Image"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/2022/10/S_Grace-Village-1024x417.png", alt: "" }}
			/>
	</ModuleFields>
);
