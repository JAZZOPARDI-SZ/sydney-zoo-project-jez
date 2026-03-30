
import React from "react";
import { ModuleFields, RichTextField, RepeatedFieldGroup, TextField, ChoiceField, ImageField, NumberField, LinkField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<TextField
			name="details"
			label="Details"
			allowNewLine={true}
			default="Select the number of guests to view pricing:"
		/>
		<TextField
			name="productHelpText"
			label="Product Help Text"
			allowNewLine={true}
			default="Select the number of guests above to compare pricing"
			required
		/>
		<RepeatedFieldGroup
			name="products"
			label="Products"
			occurrence={{
				min: 1,
				max: 4,
				default: 3,
			}}
		>
			<TextField
				name="categoryCode"
				label="Category Code"
				default="UNLIMITED-PASS"
			/>
			<ChoiceField
				name="productTheme"
				label="Product Theme"
				default={'green'}
				choices={[ [ "orange", "Orange" ], [ "sky", "Sky" ], [ "green", "Green" ] ]}
				display="select"
			/>
			<TextField
				name="tagLine"
				label="Tag Line"
				allowNewLine={true}
				default="All day family fun"
				required
			/>
			<TextField
				name="productName"
				label="Product Name"
				allowNewLine={true}
				default="Day Ticket"
				required
			/>
			<LinkField
				name="link"
				label="Link"
				default={{
					url: {
						content_id: 1,
						href: "https://tickets.sydneyzoo.com/tickets/products",
						type: "EXTERNAL",
					},
					no_follow: false,
					open_in_new_tab: true,
					sponsored: false,
				}}
				supportedTypes={[ "EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG", "CALL_TO_ACTION", "PHONE_NUMBER"]}
			/>
		</RepeatedFieldGroup>
		<RichTextField
			name="note"
			label="Note"
			default="<div>Price calculator displays online price.</div>"
			required
		/>
	</ModuleFields>
)
