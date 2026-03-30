import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, BooleanField, ChoiceField, RepeatedFieldGroup, ColorField, DateField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		{/* <ChoiceField
			name="totalColumns"
			label="Total Columns"
			default={'md:col-6'}
			choices={[ [ "md:col-12", "One Column" ], [ "md:col-6", "Two Columns" ] ]}
			display="select"
		/> */}

		<TextField
			name="title"
			label="Title"
			default="Upcoming Events"
		/>
		<RepeatedFieldGroup
            name="tiles"
            label="Tiles"
            occurrence={{
                min: 1,
                max: 100,
                default: 2,
            }}
		>
			<RichTextField
				name="bodyDetails"
				label="Body Details"
				default="<div><h2>Dorothy & Friends Show</h2>
				<p>Romp-Bomp-A-Stomp along with Dorothy &amp; all her friends live on stage in the zoo’s Amphitheatre.</p>
				<p><strong>Selected weekends 9-10, 16-17 &amp; 23 November.&nbsp;</strong></p>
				</div>"
				required
			/>
			<BooleanField
				name="freeEvent"
				label="Free Event"
				default={false}
			/>
			<BooleanField
				name="majorEvent"
				label="Major Event"
				default={false}
			/>
			<BooleanField
				name="memberEvent"
				label="Member Event"
				default={false}
			/>
			<BooleanField
				name="learnMore"
				label="Learn More"
				default={false}
			/>
			<ImageField
				name="image"
				label="Image"
				default={{ src: "https://sydneyzoo.com/cms/wp-content/uploads/2024/10/WhatsOn.png", alt: "" }}
			/>
			<DateField
				name="dateStart"
				label="Date Start"
			/>
			<DateField
				name="dateEnd"
				label="Date End"
			/>
			<ColorField
				label="Background color"
				name="backgroundColor"
				default={{
					color: '#98288D',
					css: 'rgb(152, 40, 141)',
					hex: '#98288D',
					rgb: 'rgb(152, 40, 141)',
					rgba: 'rgba(152, 40, 141, 1)'
				}}
				showOpacity={false}
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
		</RepeatedFieldGroup>
	</ModuleFields>
);
