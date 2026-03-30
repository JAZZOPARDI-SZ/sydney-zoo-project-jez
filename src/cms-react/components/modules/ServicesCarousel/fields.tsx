import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, RepeatedFieldGroup, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<RepeatedFieldGroup
			name="tiles"
			label="Tiles"
			occurrence={{
				min: 1,
				max: 12,
				default: 6,
			}}
		>
			<TextField
				name="title"
				label="Title"
				allowNewLine={true}
				default="Plan your day"
				required
			/>
			<ChoiceField
				name="color"
				label="Background Color"
				default={'bg-red-500'}
				choices={[ [ "bg-green-500", "Green" ], [ "bg-sky-500", "Sky" ], [ "bg-red-500", "Red" ], [ "bg-brown-400", "Brown" ], [ "bg-orange-500", "Yellow" ], [ "bg-purple-500", "Purple" ] ]}
				display="select"
			/>
			<ImageField
				name="image"
				label="Image"
				default={{ src: "https://sydneyzoo.com/wp-content/uploads/2024/09/Mammoth_Ice-Age_230622_4N3A9618-768x646.jpg", alt: "" }}
			/>
			<RichTextField
				name="details"
				label="Details"
				default="<p>Sydney Zoo is the premier wildlife experience in Western Sydney, offering trade partners and their clients the ideal immersive koala encounter and up-close Australian native experience.</p>"
				required
			/>
			<FieldGroup
				name="cta"
				label="Call to Action"
			>
				<ChoiceField
					name="color"
					label="Button Color"
					default={'bg-green-500'}
					choices={[ [ "bg-green-500", "Green" ], [ "bg-sky-500", "Sky" ], [ "bg-red-500", "Red" ], [ "bg-brown-400", "Brown" ], [ "bg-orange-500", "Yellow" ] ]}
					display="select"
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
				<TextField
					name="ctaText"
					label="Link Text"
					default="Book now"
				/>
			</FieldGroup>
		</RepeatedFieldGroup>
	</ModuleFields>
);
