import React from "react";
import { ModuleFields, FileField, LinkField, ImageField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<ImageField
			name="image"
			label="Banner Image"
			default={{ src: "https://sydneyzoo.com/cms/wp-content/uploads/2023/11/PartiesBottomRight-528x1024.png", alt: "" }}
		/>
		<ImageField
			name="imageTwo"
			label="Banner Image Two"
			default={{ src: "https://sydneyzoo.com/cms/wp-content/uploads/2023/11/PartiesBottomRight-528x1024.png", alt: "" }}
		/>
		<ImageField
			name="mobileImage"
			label="Mobile Image"
			inlineHelpText={"Optional image to display on mobile devices."}
			default={{ src: "", alt: "" }}
		/>
		<ImageField
			name="mobileImageTwo"
			label="Mobile Image Two"
			inlineHelpText={"Optional image to display on mobile devices."}
			default={{ src: "", alt: "" }}
		/>
	</ModuleFields>
);
