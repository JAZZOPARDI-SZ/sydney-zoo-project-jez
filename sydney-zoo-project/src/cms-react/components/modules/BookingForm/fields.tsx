import React from "react";
import { ModuleFields, RichTextField, TextField, FormField, FieldGroup, LinkField, RepeatedFieldGroup, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<ChoiceField
			name="titleColor"
			label="Title Color"
			default={'text-orange-400'}
			choices={[ [ "text-green-500", "Green" ], [ "text-sky-500", "Sky" ], [ "text-red-500", "Red" ], [ "text-brown-400", "Brown" ], [ "text-brown-700", "Dark Brown" ], [ "text-orange-400", "Yellow" ] ]}
			display="select"
		/>
		<ChoiceField
			name="titleFont"
			label="Title Font"
			default={'font-sans'}
			choices={[ [ "font-sans", "Gilroy" ], [ "font-magenta", "Magenta" ], [ "font-sofa-sans", "Sofa Sans" ] ]}
			display="select"
		/>
		<ChoiceField
			name="ctaPosition"
			label="Title Position"
			default={'text-center'}
			choices={[ [ "text-left", "Left" ], [ "text-center", "Center" ], [ "text-right", "Right" ] ]}
			display="select"
		/>
		<ChoiceField
			name="buttonPosition"
			label="Button Position"
			default={'center'}
			choices={[ [ "left", "Left" ], [ "center", "Center" ], [ "right", "Right" ] ]}
			display="select"
		/>
		<ChoiceField
			name="fontSize"
			label="Title Font Size"
			default={'text-5xl'}
			choices={[ [ "text-5xl", "Large" ], [ "text-[32px]", "Regular" ] ]}
			display="select"
		/>
		<ChoiceField
			name="submitButtonOption"
			label="Submit Button Type"
			default={'orange-primary'}
			choices={[ 
				[ "green-primary", "Green Primary" ], 
				[ "green-secondary", "Green Secondary" ], 
				[ "sky-primary", "Sky Primary" ], 
				[ "sky-secondary", "Sky Secondary" ], 
				[ "orange-primary", "Orange Primary" ], 
				[ "orange-secondary", "Orange Secondary" ],
				[ "red-primary", "Red Primary" ]
			]}
			display="select"
		/>
		<RepeatedFieldGroup
            name="nav"
            label="Navigation"
            occurrence={{
                min: 0,
                max: 6,
                default: 2,
            }}
        >
			<TextField
				name="linkText"
				label="Link Text"
				default="Excursion Program"
			/>
			<TextField
				name="title"
				label="Title"
				default="Education Booking Enquiry Form"
			/>
			<LinkField
				name="link"
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

			<FormField
				name="form"
				label="Form"
				default={{
					form_id: 'dc8846db-388c-4414-9538-580b2853fc7f',
				}}
				required
			/>
        </RepeatedFieldGroup>
		<RichTextField
			name="details"
			label="Details"
			default="<p>Alternatively, you can get in contact with the team directly at reservations@sydneyzoo.com</p>"
		/>
	</ModuleFields>
);
