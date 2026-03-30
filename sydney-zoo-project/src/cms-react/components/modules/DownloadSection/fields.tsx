import React from "react";
import { ModuleFields, TextField, LinkField } from "@hubspot/cms-components/fields";

export const fields = (
    <ModuleFields>
		<TextField
			name="title"
			label="Title"
			allowNewLine={true}
			default="Schools Pack"
		/>

		<TextField
			name="downloadText"
			label="Download Text"
			default="Download"
		/>
		<LinkField
			name="downloadLink"
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