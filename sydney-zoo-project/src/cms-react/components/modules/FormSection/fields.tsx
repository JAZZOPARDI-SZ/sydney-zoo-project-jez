import React from "react";
import { ModuleFields, RichTextField, TextField, FormField, FieldGroup, LinkField, RepeatedFieldGroup } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<RepeatedFieldGroup
            name="nav"
            label="Navigation"
            occurrence={{
                min: 1,
                max: 3,
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
				default="Excursion Program"
			/>
        </RepeatedFieldGroup>
		<TextField
			name="title"
			label="Title"
			default="Education Booking Enquiry Form"
			required
		/>
		<FormField
			name="form"
			label="Form"
			default={{
				form_id: 'dc8846db-388c-4414-9538-580b2853fc7f',
			}}
			required
		/>
		<RichTextField
			name="details"
			label="Details"
			default="<p>Alternatively, you can get in contact with the team directly at reservations@sydneyzoo.com</p>"
			required
		/>
	</ModuleFields>
);
