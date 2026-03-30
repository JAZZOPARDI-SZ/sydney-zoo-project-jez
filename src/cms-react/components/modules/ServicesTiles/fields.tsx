import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, RepeatedFieldGroup, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<RepeatedFieldGroup
			name="tiles"
			label="Tiles"
			occurrence={{
				min: 1,
				max: 3,
				default: 3,
			}}
		>
			<TextField
				name="title"
				label="Title"
				allowNewLine={true}
				default="Koala Trail"
				required
			/>
			<ChoiceField
				name="ctaPosition"
				label="Position"
				default={'text-center'}
				choices={[ [ "text-left", "Left" ], [ "text-center", "Center" ], [ "text-right", "Right" ] ]}
				display="select"
			/>
			<ImageField
				name="image"
				label="Image"
				default={{ src: "https://sydneyzoo.com/wp-content/uploads/2022/10/SydneyZoo-KoalaWalkthrough-4N3A8470-1024x683.jpg", alt: "" }}
			/>
			<RichTextField
				name="details"
				label="Details"
				default="Meet one of our Australia's adorable animal icons.<br><br><li>FREE entry to Koala trail</li><li>Get up close to a Koala and our skilled photographers will capture the moment</li><li>Bring home a piece of Australia with a stunning 6x4 photo of your Koala encounter beautiful printed or in a digital card. <br><b>$10.00 per person</b><br><br><i><font>Sydney Zoo adheres to ZAA encounter guidelines</font></i></li>"
				required
			/>
		</RepeatedFieldGroup>
	</ModuleFields>
);
