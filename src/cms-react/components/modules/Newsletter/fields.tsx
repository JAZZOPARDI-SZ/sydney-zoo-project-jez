import React from "react";
import { ModuleFields, TextField, FormField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<TextField
			name="title"
			label="Title"
			default="Sign up to our newsletterz"
			required
		/>
		<FormField
			name="form"
			label="Form"
		/>
	</ModuleFields>
);
