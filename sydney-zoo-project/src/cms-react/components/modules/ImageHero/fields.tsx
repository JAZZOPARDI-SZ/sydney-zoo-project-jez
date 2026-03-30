import React from "react";
import { ModuleFields, LinkField, ImageField, NumberField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<ImageField
			name="image"
			label="Banner Image"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/2024/08/Desktop_Header_v2.png", alt: "" }}
		/>
		<NumberField
			name="height"
			label="Height"
			suffix="px"
			default={400}
			placeholder="unset"
		/>
		<ImageField
			name="mobileImage"
			label="Mobile Image"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/2024/08/Mobile_Header_v2-1024x1024.png", alt: "" }}
		/>
		<NumberField
			name="mobileHeight"
			label="Mobile Height"
			suffix="px"
			default={250}
			placeholder="unset"
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
	</ModuleFields>
);
