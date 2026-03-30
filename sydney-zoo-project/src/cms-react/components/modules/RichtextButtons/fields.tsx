import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, BooleanField, ChoiceField, RepeatedFieldGroup } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<RichTextField
			name="bodyDetails"
			label="Body Details"
			default="<div><p>We believe that education is a key part of a modern zoo. It promotes awareness and an affinity with animals, ensuring communities value and protect wildlife and habitats around the globe.</p></div>"
			required
		/>
		<RepeatedFieldGroup
            name="tiles"
            label="Tiles"
            occurrence={{
                min: 1,
                max: 3,
                default: 2,
            }}
        >
			<TextField
				name="ctaText"
				label="Link Text"
				default="Submit a booking form"
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
			<ChoiceField
				name="buttonColor"
				label="Button Color"
				default={'bg-green-500 border-2 border-transparent text-white hover:border-green-500 hover:text-green-500 hover:bg-white'}
				choices={[ [ "bg-sky-600 border-2 border-transparent text-white hover:border-sky-600 hover:text-sky-600 hover:bg-white transition", "Sky Primary" ], [ "bg-white border-2 border-sky-600 text-sky-600 hover:border-sky-600 hover:text-white hover:bg-sky-600 transition", "Sky Secondary" ], [ "bg-green-500 border-2 border-transparent text-white hover:border-green-500 hover:text-green-500 hover:bg-white", "Green Primary" ], [ "border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white", "Green Secondary" ] ]}
				display="select"
			/>
			<ChoiceField
				name="ctaPosition"
				label="Position"
				default={'text-left'}
				choices={[ [ "text-left", "Left" ], [ "text-center", "Center" ], [ "text-right", "Right" ] ]}
				display="select"
			/>
        </RepeatedFieldGroup>
		<BooleanField
			name="enableCta"
			label="Enable CTA"
			default={true}
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
				visibility={{
					controlling_field: "enableCta",
					operator: "EQUAL",
					controlling_value_regex: "true",
				}}
				supportedTypes={[ "EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG", "CALL_TO_ACTION", "PHONE_NUMBER"]}
			/>
			<TextField
				name="ctaText"
				label="Link Text"
				default="Back to Education Programs"
			/>
			<ChoiceField
				name="buttonColor"
				label="Button Color"
				default={'bg-green-500 border-2 border-transparent text-white hover:border-green-500 hover:text-green-500 hover:bg-white'}
				choices={[ [ "bg-green-500 border-2 border-transparent text-white hover:border-green-500 hover:text-green-500 hover:bg-white", "Green Primary" ], [ "border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white", "Green Secondary" ] ]}
				display="select"
			/>
			<ChoiceField
				name="ctaPosition"
				label="Position"
				default={'text-center'}
				choices={[ [ "text-left", "Left" ], [ "text-center", "Center" ], [ "text-right", "Right" ] ]}
				display="select"
			/>
			<ChoiceField
				name="backgroundColor"
				label="Background Color"
				default={'bg-grey-200'}
				choices={[ [ "bg-grey-200", "Grey" ], [ "bg-white", "White" ] ]}
				display="select"
			/>
	</ModuleFields>
);
