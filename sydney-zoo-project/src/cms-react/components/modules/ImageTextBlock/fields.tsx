import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, RepeatedFieldGroup, ChoiceField, BooleanField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<ChoiceField
			name="imageRight"
			label="Image Position"
			default={'left'}
			choices={[ [ "left", "Image Left - Text Right" ], [ "right", "Text Left - Image Right" ] ]}
			display="select"
		/>
		<ChoiceField
			name="color"
			label="Dropdown Color"
			default={'bg-green-500'}
			choices={[ [ "bg-green-500", "Green" ], [ "bg-sky-500", "Sky" ], [ "bg-red-500", "Red" ], [ "bg-brown-400", "Brown" ], [ "bg-orange-400", "Yellow" ] ]}
			display="select"
		/>
		<ImageField
			name="bannerImage"
			label="Banner Image"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/2022/11/KangarooFeed-scaled.jpg", alt: "" }}
		/>
		<TextField
			name="title"
			label="Title"
			allowNewLine={true}
			default="Crocodile Encounters"
			required
		/>
		<RichTextField
			name="details"
			label="Details"
			default="<p>Sydney Zoo is the premier wildlife experience in Western Sydney, offering trade partners and their clients the ideal immersive koala encounter and up-close Australian native experience.</p>"
		/>
		<FieldGroup
			name="cta"
			label="Call to Action"
		>
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
			<TextField
				name="minWidth"
				label="Width (px)"
				default="110"
			/>
			<BooleanField
				name="enableSecondaryCta"
				label="Enable Secondary CTA"
				default={false}
			/>
			<LinkField
				name="ctaLinkSecondary"
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
				visibility={{
					controlling_field: "cta.enableSecondaryCta",
					operator: "EQUAL",
					controlling_value_regex: "true",
				}}
				supportedTypes={[ "EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG", "CALL_TO_ACTION", "PHONE_NUMBER"]}
			/>
			<TextField
				name="ctaTextSecondary"
				label="Link Text"
				default="Book now"
				visibility={{
					controlling_field: "cta.enableSecondaryCta",
					operator: "EQUAL",
					controlling_value_regex: "true",
				}}
			/>
		</FieldGroup>
	</ModuleFields>
);
