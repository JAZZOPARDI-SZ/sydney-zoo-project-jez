import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, RepeatedFieldGroup, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<RepeatedFieldGroup
			name="blocks"
			label="Blocks"
			occurrence={{
				min: 1,
				max: 6,
				default: 3,
			}}
		>
			<TextField
				name="title"
				label="Title"
				allowNewLine={true}
				default="Plan your day"
				required
			/>
			<ImageField
				name="icon"
				label="Icon"
				default={{ src: "../../img/map.svg", alt: "" }}
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
