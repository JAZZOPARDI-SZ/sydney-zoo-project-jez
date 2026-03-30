import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, RepeatedFieldGroup, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<TextField
			name="title"
			label="Title"
			allowNewLine={true}
			default="Executive Team"
			required
		/>
		<RepeatedFieldGroup
			name="tiles"
			label="Tiles"
			occurrence={{
				min: 1,
				max: 12,
				default: 4,
			}}
		>
			<TextField
				name="userName"
				label="Name"
				allowNewLine={true}
				default="John Doe"
				required
			/>
			<ImageField
				name="image"
				label="Image"
				default={{ src: "https://sydneyzoo.com/wp-content/uploads/elementor/thumbs/7c3a41f9-0470-494d-a44e-1397a2dc8d5c-pxpvfwhz7njpckp7pg0msb1h13s682otd0broijp1u.jpeg", alt: "" }}
			/>
			<TextField
				name="position"
				label="Position"
				allowNewLine={true}
				default="Managing Director"
				required
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
		</RepeatedFieldGroup>
	</ModuleFields>
);
