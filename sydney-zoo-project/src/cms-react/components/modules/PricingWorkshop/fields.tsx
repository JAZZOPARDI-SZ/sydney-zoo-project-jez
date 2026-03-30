import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, BooleanField, ChoiceField, RepeatedFieldGroup } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<ChoiceField
			name="totalColumns"
			label="Total Columns"
			default={'col-6'}
			choices={[ [ "col-12", "One Column" ], [ "col-6", "Two Columns" ], [ "col-4", "Three Columns" ] ]}
			display="select"
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
            <FieldGroup
                name="headerOptions"
                label="Header Options"
            >
                <TextField
                    name="title"
                    label="Title"
                    allowNewLine={true}
                    default="NEW Education workshops"
                    required
                />
                <ChoiceField
                    name="headerBackgroundColor"
                    label="Header Background Color"
                    default={'bg-sky-500'}
                    choices={[ [ "bg-green-500", "Green" ], [ "bg-sky-500", "Sky" ], [ "bg-red-500", "Red" ], [ "bg-brown-400", "Brown" ], [ "bg-orange-400", "Yellow" ] ]}
                    display="select"
                />

            </FieldGroup>
            <FieldGroup
                name="bodyOptions"
                label="Body Options"
            >
                <TextField
                    name="badge"
                    label="Badge"
                    allowNewLine={true}
                    default="$25"
                    required
                />
                <RichTextField
					name="bodyDetails"
					label="Body Details"
					default="<div><p>Includes entry</p><p>Includes an extended program with hands on activities throughout the zoo!</p></div>"
					required
				/>
                <ChoiceField
                    name="bodyBackgroundColor"
                    label="Body Background Color"
                    default={'bg-sky-400'}
                    choices={[ [ "bg-green-500", "Dark Green" ], [ "bg-green-300", "Light Green" ], [ "bg-sky-500", "Sky" ], [ "bg-sky-400", "Light Sky" ], [ "bg-red-500", "Red" ], [ "bg-brown-400", "Brown" ], [ "bg-orange-400", "Yellow" ] ]}
                    display="select"
                />
				<TextField
                    name="extraInfo"
                    label="Extra Info"
                    allowNewLine={true}
                    default="Per student"
                    required
                />
            </FieldGroup>
        </RepeatedFieldGroup>
	</ModuleFields>
);
