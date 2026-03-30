import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, RepeatedFieldGroup, ColorFieldType, ColorField, BooleanField } from "@hubspot/cms-components/fields";

export const fields = (
    <ModuleFields>
		<ImageField
			name="image"
			label="Image"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/2022/10/4N3A1139-300x200.jpg", alt: "" }}
		/>
        <BooleanField
            name="enableText"
            label="Enable Fields"
            default={false}
        />
        <FieldGroup
            name="imageGridFields"
            label="Image Grid Fields"
            expanded={false}
            visibility={{
                controlling_field: "enableText",
                operator: "EQUAL",
                controlling_value_regex: "true",
            }}
        >

            <TextField
                name="title"
                label="Title"
                allowNewLine={true}
                default="ANKYLOSAURUS"
                required
            />
            <ColorField
                label="Background color"
                name="backgroundColor"
                default={{
                    color: '#5F7D5E',
                    css: 'rgb(95, 125, 94)',
                    hex: '#5F7D5E',
                    rgb: 'rgb(95, 125, 94)',
                    rgba: 'rgba(95, 125, 94, 1)'
                }}
                showOpacity={false}
            />
        </FieldGroup>
    </ModuleFields>
);
