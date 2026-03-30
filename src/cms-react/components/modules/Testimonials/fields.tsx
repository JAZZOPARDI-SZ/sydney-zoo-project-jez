import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, RepeatedFieldGroup, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<TextField
			name="title"
			label="Title"
			allowNewLine={true}
			default="Testimonials"
		/>
		<RepeatedFieldGroup
			name="testimonials"
			label="Testimonials"
			occurrence={{
				min: 1,
				max: 24,
				default: 4,
			}}
		>
			<TextField
				name="title"
				label="Title"
				allowNewLine={true}
				default="Go Miura"
				required
			/>
			<TextField
				name="subTitle"
				label="Sub Title"
				allowNewLine={true}
				default="Marketing Department MICE Group, Forever Living Products Japan"
				required
			/>
			<RichTextField
				name="details"
				label="Details"
				default="<p>Thank you very much for your support throughout this tour. You and your team members’ professionalism ensured that everything ran smoothly despite the size of the group. Once again, I sincerely appreciate everything you've done.</p>"
				required
			/>
		</RepeatedFieldGroup>
	</ModuleFields>
);
