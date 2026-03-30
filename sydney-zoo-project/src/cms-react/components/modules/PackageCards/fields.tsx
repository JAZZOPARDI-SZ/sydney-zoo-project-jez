import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, RepeatedFieldGroup, ChoiceField, ColorField, BooleanField } from "@hubspot/cms-components/fields";
 
export const fields = (
    <ModuleFields>
        <RepeatedFieldGroup
            name="tiles"
            label="Tiles"
            occurrence={{
                min: 1,
                max: 12,
                default: 3,
            }}
        >
            <TextField
                name="title"
                label="Title"
                allowNewLine={true}
                default="ENTRY PACKAGE"
                required
            />
            <ChoiceField
                name="cardSize"
                label="Card Size"
                default={'col-span-12 lg:col-span-4'}
                choices={[ [ "col-span-12 lg:col-span-3", "Four Column" ], [ "col-span-12 lg:col-span-4", "Three Column" ], [ "col-span-12 lg:col-span-6", "Two Column" ] ]}
                display="select"
            />
            <ChoiceField
                name="color"
                label="Background Color"
                default={'bg-white'}
                choices={[ [ "bg-white", "White" ], [ "bg-green-500", "Green" ], [ "bg-sky-500", "Sky" ], [ "bg-red-500", "Red" ], [ "bg-brown-400", "Brown" ], [ "bg-orange-400", "Yellow" ] ]}
                display="select"
            />
            <BooleanField
				name="enableCustomColor"
				label="Enable Custom Colors"
				default={false}
			/>
            <ColorField
                label="Custom Background Color"
                name="customBackgroundColor"
                showOpacity={false}
                visibility={{
					controlling_field: "tiles.enableCustomColor",
					operator: "EQUAL",
					controlling_value_regex: "true",
				}}
            />
            <ColorField
                label="Heading Color"
                name="customHeadingColor"
                showOpacity={false}
                visibility={{
					controlling_field: "tiles.enableCustomColor",
					operator: "EQUAL",
					controlling_value_regex: "true",
				}}
            />
            <ImageField
                name="image"
                label="Image"
                default={{ src: "https://sydneyzoo.com/wp-content/uploads/2024/03/SZ_Rhino_240307_SYDZ3663-scaled.jpg", alt: "" }}
            />
            <RichTextField
                name="details"
                label="Details"
                default="<ul>
                    <li>Day entry to Sydney Zoo to explore all attractions</li>
                    <li>Free parking</li>
                    <li>25% discount off standard concession day rate*</li>
                    </ul>"
                required
            />
            <TextField
                name="badge"
                label="Badge"
                allowNewLine={true}
                default="$29.99 pp"
            />
        </RepeatedFieldGroup>
    </ModuleFields>
);