import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, BooleanField, ChoiceField, RepeatedFieldGroup } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<ChoiceField
			name="totalColumns"
			label="Total Columns"
			default={'md:col-6'}
			choices={[ [ "md:col-12", "One Column" ], [ "md:col-6", "Two Columns" ], [ "md:col-4", "Three Columns" ] ]}
			display="select"
		/>
		<RepeatedFieldGroup
            name="tiles"
            label="Tiles"
            occurrence={{
                min: 1,
                max: 24,
                default: 4,
            }}
        >
            <FieldGroup
                name="bodyOptions"
                label="Body Options"
            >
				<RichTextField
					name="bodyDetails"
					label="Body Details"
					default="<div><p>Vacation care
						Come on a self-guided visit to Sydney Zoo with your vacation care group or have us come to you. 

						Choose from the Living World or Bungarribee Dreaming Incursion Programs that would suit your vacation care. 

						PROGRAM RESOURCES

						Teacher quizbook
						Sydney Zoo map</p></div>"
					required
				/>
                <ChoiceField
                    name="bodyBackgroundColor"
                    label="Body Background Color"
                    default={'bg-orange-500'}
                    choices={[ [ "bg-orange-500", "Yellow" ], [ "bg-green-500", "Green" ], [ "bg-white", "White" ], ["bg-orange-400", "Yellow Light"] ]}
                    display="select"
                />
				<BooleanField
					name="enableCta"
					label="Enable CTA"
					default={false}
				/>
				<FieldGroup
					name="cta"
					label="Call to Action"
					expanded={false}
					visibility={{
						controlling_field: "tiles.bodyOptions.enableCta",
						operator: "EQUAL",
						controlling_value_regex: "true",
					}}
				>
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
						default="Submit a booking form"
					/>
					<ChoiceField
						name="buttonColor"
						label="Button Color"
						default={'bg-green-500 border-2 border-transparent text-white hover:border-green-500 hover:text-green-500 hover:bg-white'}
						choices={[ [ "bg-orange-500 text-white hover:bg-white hover:text-green-500 border-2 border-transparent hover:border-green-500", "Yellow" ], [ "bg-white text-orange-500 border-2 border-orange-500 opacity-[.9] hover:opacity-1", "Yellow Secondary" ], [ "bg-green-500 border-2 border-transparent text-white hover:border-green-500 hover:text-green-500 hover:bg-white", "Green" ]]}
						display="select"
					/>
					<ChoiceField
						name="ctaPosition"
						label="Position"
						default={'text-left'}
						choices={[ [ "text-left", "Left" ], [ "text-center", "Center" ], [ "text-right", "Right" ] ]}
						display="select"
					/>
				</FieldGroup>
            </FieldGroup>
        </RepeatedFieldGroup>
	</ModuleFields>
);
