import React from "react";
import { ModuleFields, TextField, FormField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<FormField
			name="form"
			label="Form"
			default={{
				form_id: 'dc8846db-388c-4414-9538-580b2853fc7f',
			}}
			required
		/>
	</ModuleFields>
);
