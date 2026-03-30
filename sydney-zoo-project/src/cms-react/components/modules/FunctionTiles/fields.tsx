import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, RepeatedFieldGroup, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<ChoiceField
			name="totalColumns"
			label="Total Columns"
			default={'md:grid-cols-3'}
			choices={[ [ "md:grid-cols-3", "Three Columns" ], [ "md:grid-cols-4", "Four Columns" ] ]}
			display="select"
		/>
		<RepeatedFieldGroup
			name="tiles"
			label="Tiles"
			occurrence={{
				min: 1,
				max: 24,
				default: 3,
			}}
		>
			<TextField
				name="title"
				label="Title"
				allowNewLine={true}
				default="Lion Deck"
				
			/>
			<ImageField
				name="image"
				label="Image"
				default={{ src: "https://sydneyzoo.com/cms/wp-content/uploads/2021/09/SunsetSessions-4N3A8918-1024x683.jpg", alt: "" }}
			/>
			<RichTextField
				name="details"
				label="Details"
				default="Boasting amazing sunset views overlooking the African savannah, this space is truly a private oasis."
				
			/>
			<RichTextField
				name="eventTypeAndCapacity"
				label="Event type and capacity"
				default="<b>Event type & capacity:</b> Cocktail 400, Seated 750"
			/>
		</RepeatedFieldGroup>
	</ModuleFields>
);
