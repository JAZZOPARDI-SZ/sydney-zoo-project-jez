import React from "react";
import { ModuleFields, RepeatedFieldGroup, TextField, BooleanField, RichTextField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<RepeatedFieldGroup
			name="tableHeading"
			label="Table Heading"
			occurrence={{
				min: 1,
				max: 12,
				default: 3,
			}}
		>
			<TextField
				name="title"
				label="Title"
				allowNewLine={true}
				default="Time"
				required
			/>
		</RepeatedFieldGroup>
		<RepeatedFieldGroup
			name="rows"
			label="Rows"
			occurrence={{
				min: 1,
				max: 128,
				default: 12,
			}}
		>
			<RepeatedFieldGroup
				name="cols"
				label="Columns"
				occurrence={{
					min: 1,
					max: 12,
					default: 3,
				}}
			>
				<RichTextField
					name="text"
					label="Text"
					default="<strong>Aboriginal Cultural Talk</strong> <br /> Weekends only"
					required
				/>
			</RepeatedFieldGroup>
		</RepeatedFieldGroup>
	</ModuleFields>
);
