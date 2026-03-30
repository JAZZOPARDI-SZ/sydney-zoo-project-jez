import React from "react";
import { ModuleFields, TextField, ChoiceField } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<TextField
			name="text"
			label="Link Text"
			default="$700"
		/>
		<ChoiceField
			name="buttonColor"
			label="Button Color"
			default={'bg-orange-500 text-sm text-white font-bold inline-flex items-center justify-center px-4 py-1 rounded-full'}
			choices={[ [ "bg-sky-600 border-2 border-transparent px-4 py-1 text-white hover:border-sky-600 hover:text-sky-600 hover:bg-white transition", "Sky Primary" ], [ "bg-white border-2 border-sky-600 text-sky-600 hover:border-sky-600 px-4 py-1 hover:text-white hover:bg-sky-600 transition", "Sky Secondary" ], [ "bg-green-500 border-2 border-transparent px-4 py-1 text-white hover:border-green-500 hover:text-green-500 hover:bg-white", "Green Primary" ], [ "border-2 border-green-500 text-green-500 hover:bg-green-500 px-4 py-1 hover:text-white", "Green Secondary" ], ["bg-orange-500 text-sm text-white font-bold inline-flex items-center justify-center px-4 py-1 rounded-full", "Orange Primary"] ]}
			display="select"
		/>
		<ChoiceField
			name="ctaPosition"
			label="Position"
			default={'text-left'}
			choices={[ [ "text-left", "Left" ], [ "text-center", "Center" ], [ "text-right", "Right" ] ]}
			display="select"
		/>
	</ModuleFields>
);