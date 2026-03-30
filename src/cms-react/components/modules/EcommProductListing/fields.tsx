import React from "react";
import { ModuleFields, TextField, LinkField } from "@hubspot/cms-components/fields";

export const fields = (
    <ModuleFields>
		<TextField
			name="categoryCode"
			label="Category Code"
			default="UNLIMITED-PASS"
		/>
    </ModuleFields>
);