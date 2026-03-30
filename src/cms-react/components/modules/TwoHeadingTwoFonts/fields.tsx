import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, BooleanField, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<TextField
			name="heading"
			label="Heading"
			default="Incursion Programs"
		/>
		<TextField
			name="subHeading"
			label="Sub Heading"
			default="EARLY childhood"
		/>
	</ModuleFields>
);
