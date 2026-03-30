import React from "react";
import { ModuleFields, BlogField, NumberField, LinkField, TextField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<BlogField
			name={"blog"}
			label={"Blog"}
			default={47599857}
		/>
		<NumberField
			name={"itemsPerPage"}
			label={"Items Per Page"}
			default={6}
			display="slider"
			min={1}
			max={32}
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
			default="Download Media Kit"
		/>
	</ModuleFields>
);
