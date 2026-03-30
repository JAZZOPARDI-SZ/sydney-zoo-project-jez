import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, BooleanField, ChoiceField, RepeatedFieldGroup } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<ChoiceField
			name="borderColor"
			label="Border Color"
			default={'border-b border-black'}
			choices={[ [ "border-b border-black", "Black" ], [ "border-b border-white", "White" ] ]}
			display="select"
		/>
		<ChoiceField
			name="labelChevronColor"
			label="Label and Chevron Color"
			default={'text-brown-700'}
			choices={[ [ "text-brown-700", "Dark Brown" ], [ "text-white", "White" ] ]}
			display="select"
		/>
		<RichTextField
			name="details"
			label="Details"
			default="<div><p>All tickets (including membership visits) must be pre-purchased online. Read more here.</p></div>"
		/>
		
		<BooleanField
			name="hoverColor"
			label="Change color when expanded"
			default={false}
		/>
		<RepeatedFieldGroup
            name="tiles"
            label="Tiles"
            occurrence={{
                min: 1,
                max: 30,
                default: 2,
            }}
        >
			<TextField
				name="title"
				label="Title"
				allowNewLine={true}
				default="FREQUENTLY ASKED QUESTIONS"
			/>
			<RepeatedFieldGroup
				name="questions"
				label="Tiles"
				occurrence={{
					min: 1,
					max: 3,
					default: 2,
				}}
			>
				<RichTextField
					name="questionAndAnswer"
					label="Question and Answer"
					default="<div><p style='font-weight: bold'>How do my suppliers deliver to your venue?</p><p>Your event executive will assist in scheduling and managing any deliveries, all supplier contacts must be provided to your event coordinator two weeks prior to your event date.</p></div>"
					required
				/>
			</RepeatedFieldGroup>
			<BooleanField
				name="expandedOnLoad"
				label="Expanded on Load"
				default={false}
			/>
        </RepeatedFieldGroup>
	</ModuleFields>
);
