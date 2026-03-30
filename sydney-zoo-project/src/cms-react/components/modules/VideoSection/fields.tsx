import React from "react";
import { ModuleFields, FileField, LinkField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<FileField
			picker={"video"}
			name={"bannerVideo"}
			label={"Banner Video"}
		/>
		<FileField
			picker={"video"}
			name={"mobileVideo"}
			label={"Mobile Video"}
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
