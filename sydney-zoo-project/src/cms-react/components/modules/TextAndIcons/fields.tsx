import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, RepeatedFieldGroup, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
    <ModuleFields>
        <ImageField
            name="image"
            label="Icon"
            default={{ src: "https://sydneyzoo.com/wp-content/uploads/2022/04/Asset-2.png", alt: "" }}
        />
        <TextField
            name="title"
            label="Title"
            allowNewLine={true}
            default="Plant native species"
            required
        />
    </ModuleFields>
);