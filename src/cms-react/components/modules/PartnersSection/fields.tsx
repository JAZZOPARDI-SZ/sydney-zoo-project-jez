import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, RepeatedFieldGroup, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<TextField
			name="title"
			label="Title"
			allowNewLine={true}
			default="With thanks to"
			required
		/>
		<RepeatedFieldGroup
			name="blocks"
			label="Blocks"
			occurrence={{
				min: 1,
				max: 6,
				default: 2,
			}}
		>
			<TextField
				name="title"
				label="Title"
				allowNewLine={true}
				default="Principal Partners"
				required
			/>
			<RepeatedFieldGroup
				name="brands"
				label="Brands"
				occurrence={{
					min: 1,
					max: 6,
					default: 4,
				}}
			>
				<ImageField
					name="logo"
					label="Logo"
					default={{ src: "https://sydneyzoo.com/wp-content/uploads/2023/01/CCA_1200x1200_2-1024x1024.png", alt: "" }}
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
		</RepeatedFieldGroup>
	</ModuleFields>
);
