import React from "react";
import { ModuleFields, ImageField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<ImageField
			name="image"
			label="Image"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/elementor/thumbs/Elephant-thumbnail-pxpvfka3rn9kwrnasonv5sr3s26yx31ibmweep1vq2.jpg", alt: "" }}
		/>
	</ModuleFields>
);
