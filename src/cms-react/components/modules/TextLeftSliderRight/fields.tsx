import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, RepeatedFieldGroup, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<ChoiceField
			name="type"
			label="Title Type"
			default={'text'}
			choices={[ [ "text", "Text" ], [ "image", "Image" ] ]}
			display="select"
		/>
		<TextField
			name="title"
			label="Title"
			allowNewLine={true}
			visibility={{
				controlling_field: "type",
				operator: "EQUAL",
				controlling_value_regex: "text",
			}}
			default="Buy Tickets"
		/>
		<ChoiceField
			name="titleColor"
			label="Title Color"
			default={'text-green-500'}
			visibility={{
				controlling_field: "type",
				operator: "EQUAL",
				controlling_value_regex: "text",
			}}
			choices={[ [ "text-green-500", "Green" ], [ "text-sky-500", "Sky" ], [ "text-red-500", "Red" ], [ "text-brown-400", "Brown" ], [ "text-orange-400", "Yellow" ], [ "text-black", "Black" ] ]}
			display="select"
		/>
		<ImageField
			name="titleImage"
			label="Title Image"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/2023/03/new-zoo-title-1024x441.png", alt: "" }}
			visibility={{
				controlling_field: "type",
				operator: "EQUAL",
				controlling_value_regex: "image",
			}}
		/>
		<RichTextField
			name="richText"
			label="Rich Text"
			default="<p>Sydney Zoo is home to <b>over 4,000 animals</b>, including awe-inspiring and endangered species from all around the world. Take a stroll down the African Boardwalk where you’ll see scenes from the savannah in our remarkable mixed-species habitats, wander down the leafy Primate Boulevard, and be mesmerised by the animals of south-east Asia. Get closer to all your favourite Australian natives in our beautiful open-range Australia habitat, where kangaroos and wallabies hop freely around the meandering pathways.</p><p>Sydney Zoo is also the <b>only combined zoo and aquarium in NSW</b>, and boasts the largest Reptile &amp; Nocturnal House in the world!</p>"
			required
		/>
		<ImageField
			name="background"
			label="Background Pattern"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/2023/03/home-bg-scaled.jpg", alt: "" }}
		/>
		<FieldGroup
			name="cta"
			label="Call to Action"
		>
			<ChoiceField
				name="color"
				label="Button Color"
				default={'bg-green-500'}
				choices={[ [ "bg-green-500", "Green" ], [ "bg-sky-500", "Sky" ], [ "bg-red-500", "Red" ], [ "bg-brown-400", "Brown" ], [ "bg-orange-400", "Yellow" ] ]}
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
		<RepeatedFieldGroup
			name="tiles"
			label="Tiles"
			occurrence={{
				min: 1,
				max: 12,
				default: 6,
			}}
		>
			<TextField
				name="title"
				label="Title"
				allowNewLine={true}
				default="Asia"
				required
			/>
			<TextField
				name="subTitle"
				label="Sub Title"
				allowNewLine={true}
				default="Our Animals"
				required
			/>
			<LinkField
				name="ctaAnimal"
				label="Tile Link"
				default={{
					url: {
						content_id: 1,
						href: "https://www.sydneyzoo.com",
						type: "EXTERNAL",
					},
					no_follow: false,
					open_in_new_tab: false,
					sponsored: false,
				}}
				supportedTypes={[ "EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG", "CALL_TO_ACTION", "PHONE_NUMBER"]}
			/>
			<ChoiceField
				name="color"
				label="Background Color"
				default={'bg-red-500'}
				choices={[ [ "bg-green-500", "Green" ], [ "bg-sky-500", "Sky" ], [ "bg-red-500", "Red" ], [ "bg-brown-400", "Brown" ], [ "bg-orange-400", "Yellow" ] ]}
				display="select"
			/>
			<ImageField
				name="image"
				label="Image"
				default={{ src: "https://sydneyzoo.com/wp-content/uploads/2023/03/africa-animals-v3.png", alt: "" }}
			/>
			<RichTextField
				name="details"
				label="Details"
				default="<p>Sydney Zoo is the premier wildlife experience in Western Sydney, offering trade partners and their clients the ideal immersive koala encounter and up-close Australian native experience.</p>"
				required
			/>
		</RepeatedFieldGroup>
	</ModuleFields>
);
