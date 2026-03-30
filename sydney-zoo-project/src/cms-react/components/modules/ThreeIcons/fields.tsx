import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, RepeatedFieldGroup, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
    <ModuleFields>
        <ImageField
            name="image"
            label="Icon"
            default={{ src: "https://sydneyzoo.com/wp-content/uploads/2022/09/Vector-Smart-Object-1-1.png", alt: "" }}
        />
        <TextField
            name="title"
            label="Title"
            allowNewLine={true}
            default="Bring your old mobile phone, charger or accessory to Sydney Zoo and place them in the specially marked collection bin at the zoo's entry"
            required
        />
    </ModuleFields>
);