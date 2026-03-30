import React from "react";
import { ModuleFields, BlogField, NumberField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<BlogField
			name={"blog"}
			label={"Blog"}
			default={47599857}
		/>
		<NumberField
			name={"itemsPerPage"}
			label={"Items Per Page"}
			default={6}
			display="slider"
			min={1}
			max={32}
		/>
	</ModuleFields>
);
