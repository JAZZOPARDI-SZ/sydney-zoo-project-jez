import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, BooleanField, ChoiceField, RepeatedFieldGroup } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<RepeatedFieldGroup
            name="nav"
            label="Navigation"
            occurrence={{
                min: 1,
                max: 12,
                default: 2,
            }}
        >
			<LinkField
				name="link"
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
				name="linkText"
				label="Link Text"
				default="Bespoke Enhancements"
			/>
        </RepeatedFieldGroup>
	</ModuleFields>
);
