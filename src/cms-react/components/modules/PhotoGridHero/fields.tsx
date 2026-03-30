import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, RepeatedFieldGroup, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		{/* <TextField
			name="title"
			label="Title"
			allowNewLine={true}
			default="Our Animals"
		/>
		<TextField
			name="areaTitle"
			label="Area Title"
			allowNewLine={true}
			default="Aquarium"
		/>
		<ChoiceField
			name="titleColor"
			label="Title Color"
			default={'text-sky-500'}
			choices={[ [ "text-green-500", "Green" ], [ "text-sky-500", "Sky" ], [ "text-red-500", "Red" ], [ "text-brown-400", "Brown" ], [ "text-orange-400", "Yellow" ] ]}
			display="select"
		/> */}
		<TextField
			name="animalHeading"
			label="Animal Name"
			allowNewLine={true}
			default="Barramundi"
			required
		/>
		<TextField
			name="animalScientificName"
			label="Scientific Name"
			allowNewLine={true}
			default="LATES CALCARIFER"
			required
		/>
		<ChoiceField
			name="accentColor"
			label="Accent Color"
			default={'bg-sky-500'}
			choices={[ [ "bg-green-500", "Green" ], [ "bg-sky-500", "Sky" ], [ "bg-red-500", "Red" ], [ "bg-brown-400", "Brown" ], [ "bg-orange-400", "Yellow" ] ]}
			display="select"
		/>
		<ImageField
			name="imageTopLeft"
			label="Image Top Left"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/2021/05/barramundi-300x300.jpg", alt: "" }}
		/>
		<ImageField
			name="imageBottomLeft"
			label="Image Bottom Left"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/2021/05/barramundi-300x300.jpg", alt: "" }}
		/>
		<ImageField
			name="imageWorld"
			label="Image World"
			default={{ src: "https://47599857.fs1.hubspotusercontent-na1.net/hubfs/47599857/worldb.svg", alt: "" }}
		/>
		<ImageField
			name="imageRight"
			label="Image Right"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/2021/05/barramundi-300x300.jpg", alt: "" }}
		/>

	</ModuleFields>
);
