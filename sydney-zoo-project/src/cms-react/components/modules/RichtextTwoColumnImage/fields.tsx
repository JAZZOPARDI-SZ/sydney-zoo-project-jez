import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, BooleanField, ChoiceField, RepeatedFieldGroup } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<ChoiceField
			name="totalColumns"
			label="Total Columns"
			default={'md:col-6'}
			choices={[ [ "md:col-12", "One Column" ], [ "md:col-6", "Two Columns" ] ]}
			display="select"
		/>
		<RepeatedFieldGroup
            name="tiles"
            label="Tiles"
            occurrence={{
                min: 1,
                max: 12,
                default: 2,
            }}
		>
		<RichTextField
			name="bodyDetails"
			label="Body Details"
			default="<div><p>KOALA TRAIL

Get up close to one of Australia’s most iconic animals! Wander amongst koalas in the Koala Trail and enjoy a unique photo opportunity (must be booked for all guests).</p></div>"
			required
		/>
		<ImageField
			name="image"
			label="Image"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/2024/09/Mammoth_Ice-Age_230622_4N3A9618-768x646.jpg", alt: "" }}
		/>

		<ChoiceField
			name="bodyBackgroundColor"
			label="Body Background Color"
			default={'bg-green-500'}
			choices={[ [ "bg-orange-500", "Yellow" ], [ "bg-green-500", "Green" ], [ "bg-white", "White" ], ["bg-orange-400", "Yellow Light"] ]}
			display="select"
		/>
		<BooleanField
			name="enableBadge"
			label="Enable Badge"
			default={true}
		/>
		<FieldGroup
			name="cta"
			label="Badge"
			expanded={false}
			visibility={{
				controlling_field: "tiles.enableBadge",
				operator: "EQUAL",
				controlling_value_regex: "true",
			}}
		>
			<TextField
				name="badgeText"
				label="Link Text"
				default="$10"
			/>
			<RichTextField
				name="extraInfo"
				label="Extra Info"
				default="<div><p>PRICE (per head)</p></div>"
				required
			/>
			<ChoiceField
				name="buttonColor"
				label="Button Color"
				default={'bg-orange-500 text-white hover:bg-white hover:text-green-500 border-2 border-transparent hover:border-green-500'}
				choices={[ [ "bg-orange-500 text-white hover:bg-white hover:text-green-500 border-2 border-transparent hover:border-green-500", "Yellow" ], [ "bg-green-500 border-2 border-transparent text-white hover:border-green-500 hover:text-green-500 hover:bg-white", "Green" ]]}
				display="select"
			/>
			<ChoiceField
				name="ctaPosition"
				label="Position"
				default={'text-center'}
				choices={[ [ "text-left", "Left" ], [ "text-center", "Center" ], [ "text-right", "Right" ] ]}
				display="select"
			/>
		</FieldGroup>
		</RepeatedFieldGroup>
	</ModuleFields>
);
