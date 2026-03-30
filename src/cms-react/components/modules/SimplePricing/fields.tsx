import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, BooleanField, ChoiceField, RepeatedFieldGroup } from "@hubspot/cms-components/fields";
 
export const fields = (
    <ModuleFields>
		<TextField
			name="title"
			label="Title"
			allowNewLine={true}
			default="virtual workshop prices"
			required
		/>
		<TextField
			name="badge"
			label="Badge"
			allowNewLine={true}
			default="$25"
			required
		/>
		<RichTextField
			name="details"
			label="Details"
			default="<div><p>per workshop</p></div>"
			required
		/>
    </ModuleFields>
);