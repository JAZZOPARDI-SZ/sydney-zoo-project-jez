import React from "react";
import { ModuleFields, BlogField, NumberField, ImageField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<ImageField
			name="image"
			label="Image"
			default={{ src: "", alt: "" }}
		/>
	</ModuleFields>
);
