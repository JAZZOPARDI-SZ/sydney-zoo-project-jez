import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, RepeatedFieldGroup, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<ImageField
			name="titleImage"
			label="Title Image"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/2023/03/new-zoo-title-1024x441.png", alt: "" }}
		/>
	</ModuleFields>
);
