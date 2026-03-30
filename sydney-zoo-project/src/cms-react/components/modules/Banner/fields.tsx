import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, BooleanField, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<RichTextField
			name="details"
			label="Details"
			default="<div><h2>Get up close to a saltwater crocodile in Western Sydney</h2><p><strong>IMPORTANT INFORMATION:</strong></p><ul><li>Encounter booking does not include zoo entry. A member return booking or online day ticket is required.&nbsp;</li><li>Minimum age of 12. All children must be comfortable in the presence of animals.</li><li>Hyena encounters are held once per day at 12:30pm for a maximum group size of 5.</li><li>All participants up to 16 years must be accompanied by a paid participating adult. All participants up to 18 years must have an adult or guardian present at check-in to sign and acknowledge the waiver form.</li></ul></div>"
			required
		/>
		<ImageField
			name="background"
			label="Background Image"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/2023/11/ReptileEncounter-1-scaled.jpg", alt: "" }}
		/>
		<BooleanField
			name="enableDarkOverlay"
			label="Enable Dark Overlay"
			default={true}
		/>
		<BooleanField
			name="enableDivider"
			label="Enable Divider"
			default={false}
		/>
		<ImageField
			name="dividerImage"
			label="Divider Image"
			visibility={{
				controlling_field: "enableDivider",
				operator: "EQUAL",
				controlling_value_regex: "true",
			}}
			required
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/elementor/thumbs/Elephant-thumbnail-pxpvfka3rn9kwrnasonv5sr3s26yx31ibmweep1vq2.jpg", alt: "" }}
		/>
		<BooleanField
			name="enableCta"
			label="Enable CTA"
			default={false}
		/>
		<FieldGroup
			name="cta"
			label="Call to Action"
			expanded={false}
			visibility={{
				controlling_field: "enableCta",
				operator: "EQUAL",
				controlling_value_regex: "true",
			}}
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
			<ChoiceField
				name="ctaPosition"
				label="Position"
				default={'text-left'}
				choices={[ [ "text-left", "Left" ], [ "text-center", "Center" ], [ "text-right", "Right" ] ]}
				display="select"
			/>
		</FieldGroup>
	</ModuleFields>
);
