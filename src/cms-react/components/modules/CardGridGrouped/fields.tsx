import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, RepeatedFieldGroup, ChoiceField } from "@hubspot/cms-components/fields";

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
				default="Creatures of the Ice Age"
				required
			/>
			<ChoiceField
				name="cardSize"
				label="Card Size"
				default={'col-span-6 md:col-span-2'}
				choices={[ [ "col-span-6 md:col-span-2", "Small" ], [ "col-span-6 md:col-span-3", "Large" ] ]}
				display="select"
			/>
			<ChoiceField
				name="color"
				label="Background Color"
				default={'bg-red-500'}
				choices={[ [ "bg-green-500", "Green" ], [ "bg-sky-500", "Sky" ], [ "bg-red-500", "Red" ], [ "bg-brown-400", "Brown" ], [ "bg-orange-400", "Yellow" ], [ "bg-purple-500", "Purple" ], [ "bg-orange-500", "Orange" ] ]}
				display="select"
			/>
			<ImageField
				name="image"
				label="Image"
				default={{ src: "https://sydneyzoo.com/wp-content/uploads/2024/03/SZ_Rhino_240307_SYDZ3663-scaled.jpg", alt: "" }}
			/>
			<RichTextField
				name="details"
				label="Details"
				default="<p>Sydney Zoo is the premier wildlife experience in Western Sydney, offering trade partners and their clients the ideal immersive koala encounter and up-close Australian native experience.</p>"
				required
			/>
			<FieldGroup
				name="cta"
				label="Call to Action"
			>
				<ChoiceField
					name="color"
					label="Button Color"
					default={'bg-green-500'}
					choices={[ [ "bg-green-500", "Green" ], [ "bg-sky-500", "Sky" ], [ "bg-red-500", "Red" ], [ "bg-brown-400", "Brown" ], [ "bg-orange-400", "Yellow" ], [ "bg-orange-500", "Orange" ] ]}
					display="select"
				/>
				<LinkField
					name="ctaLink"
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
					name="ctaText"
					label="Link Text"
					default="Book now"
				/>
			</FieldGroup>
		</RepeatedFieldGroup>
	</ModuleFields>
);
