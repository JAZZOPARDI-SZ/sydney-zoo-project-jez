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
			default={{ src: "https://21486425.fs1.hubspotusercontent-na1.net/hub/21486425/hubfs/TigerLeftHeader.webp?width=625&height=384&name=TigerLeftHeader.webp", alt: "" }}
		/>
		<BooleanField
			name="enableMobileImage"
			label="Enable Image on mobile"
			default={true}
		/>
	</ModuleFields>
);
