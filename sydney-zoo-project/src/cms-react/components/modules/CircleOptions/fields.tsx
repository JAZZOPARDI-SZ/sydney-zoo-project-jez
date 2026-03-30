import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, BooleanField, ChoiceField, RepeatedFieldGroup } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<TextField
			name="title"
			label="Title"
			default="Elephant Encounters"
		/>
		<ImageField
			name="image"
			label="Image"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/elementor/thumbs/Elephant-thumbnail-pxpvfka3rn9kwrnasonv5sr3s26yx31ibmweep1vq2.jpg", alt: "" }}
		/>
		<LinkField
			name="link"
			label="Link"
			default={{
				url: {
					content_id: 1,
					href: "https://www.sydneyzoo.com",
					type: "EXTERNAL",
				},
				no_follow: false,
				open_in_new_tab: true,
				sponsored: false,
			}}
			supportedTypes={[ "EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG", "CALL_TO_ACTION", "PHONE_NUMBER"]}
		/>
	</ModuleFields>
);
