import React from "react";
import { ModuleFields, ImageField, TextField, RepeatedFieldGroup } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<RepeatedFieldGroup
			name="tiles"
			label="Tiles"
			occurrence={{
				min: 1,
				max: 12,
				default: 5,
			}}
		>
			<TextField
				name="title"
				label="Title"
				allowNewLine={true}
				default="Free Parking"
				required
			/>
			<ImageField
				name="image"
				label="Image"
				default={{ src: "https://sydneyzoo.com/wp-content/uploads/2023/03/fav-zoo-icon.svg", alt: "" }}
			/>
		</RepeatedFieldGroup>
	</ModuleFields>
);