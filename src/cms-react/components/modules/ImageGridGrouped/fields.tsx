import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, RepeatedFieldGroup, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<RepeatedFieldGroup
			name="tiles"
			label="Tiles"
			occurrence={{
				min: 4,
				max: 12,
				default: 8,
			}}
		>
			<ImageField
				name="image"
				label="Image"
				default={{ src: "https://sydneyzoo.com/wp-content/uploads/2022/10/4N3A1139-300x200.jpg", alt: "" }}
			/>
            <LinkField
				name="ctaLink"
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
		</RepeatedFieldGroup>
	</ModuleFields>
);
