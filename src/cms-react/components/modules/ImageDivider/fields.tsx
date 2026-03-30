import React from "react";
import { ModuleFields, FileField, LinkField, ImageField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<ImageField
			name="image"
			label="Banner Image"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/2023/03/DinoDiv-1.png", alt: "" }}
		/>
		<ImageField
			name="mobileImage"
			label="Mobile Image"
			inlineHelpText={"Optional image to display on mobile devices."}
			default={{ src: "", alt: "" }}
		/>
	</ModuleFields>
);
