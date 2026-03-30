import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, RepeatedFieldGroup, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<ImageField
			name="image"
			label="Image"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/2024/05/SSTA-Logo.png", alt: "" }}
		/>
	</ModuleFields>
);
