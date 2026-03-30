import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, BooleanField, ChoiceField, RepeatedFieldGroup, ColorField, VideoField, EmbedField } from "@hubspot/cms-components/fields";



export const fields = (
	<ModuleFields>
		<ChoiceField
			name="imageRight"
			label="Image Position"
			default={'left'}
			choices={[ [ "left", "Image Left - Text Right" ], [ "right", "Text Left - Image Right" ] ]}
			display="select"
		/>
		<ImageField
			name="bannerImage"
			label="Banner Image"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/2021/12/croc-feed-2021-08-04.00_04_18_44.Still001.jpg", alt: "" }}
		/>
		<BooleanField
			name="enableVideo"
			label="Enable Video"
			default={false}
		/>
		<EmbedField 
			name="video"
			label="Video"
			visibility={{
				controlling_field: "enableVideo",
				operator: "EQUAL",
				controlling_value_regex: "true",
			}}
			supportedSourceTypes={["html", "oembed", "media_bridge"]}
			supportedOembedTypes={["video"]}
			supportedMediaBridgeProviders={[0, 1, 2]}
		/>
		<LinkField
			name="videoCtaLink"
			label="Video Link"
			visibility={{
				controlling_field: "enableVideo",
				operator: "EQUAL",
				controlling_value_regex: "true",
			}}
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
			name="videoCtaText"
			label="Video Link Text"
			default="Book now"
			visibility={{
				controlling_field: "enableVideo",
				operator: "EQUAL",
				controlling_value_regex: "true",
			}}
		/>
		<LinkField
			name="imageLink"
			label="Image Top Right Link"
			visibility={{
				controlling_field: "enableVideo",
				operator: "EQUAL",
				controlling_value_regex: "true",
			}}
			default={{
				url: {
					content_id: 1,
					href: "https://www.tripadvisor.com.au/Attraction_Review-g580468-d19436984-Reviews-Sydney_Zoo-Blacktown_Greater_Sydney_New_South_Wales.html",
					type: "EXTERNAL",
				},
				no_follow: false,
				open_in_new_tab: true,
				sponsored: false,
			}}
			supportedTypes={[ "EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG", "CALL_TO_ACTION", "PHONE_NUMBER"]}
		/>
		<ImageField
			name="imageAbosulteRight"
			label="Image"
			default={{ src: "https://sydneyzoo.com/cms/wp-content/uploads/2023/08/TC_2023_LL_KNOCKOUT-871x1024.png", alt: "" }}
			visibility={{
				controlling_field: "enableVideo",
				operator: "EQUAL",
				controlling_value_regex: "true",
			}}
		/>
		<ChoiceField
			name="backgroundPosition"
			label="Background Position"
			default={'bg-center'}
			choices={[ [ "bg-top", "Focus Top" ], [ "bg-center", "Focus Center" ], [ "bg-bottom", "Focus Bottom" ] ]}
			display="select"
		/>
		<ChoiceField
			name="titleColor"
			label="Title Color"
			default={'text-sky-500'}
			choices={[ [ "text-green-500", "Green" ], [ "text-sky-500", "Sky" ], [ "text-red-500", "Red" ], [ "text-brown-400", "Brown" ], [ "text-brown-700", "Dark Brown" ], [ "text-orange-400", "Yellow" ] ]}
			display="select"
		/>
		<ChoiceField
			name="titleFont"
			label="Title Font"
			default={'font-sans'}
			choices={[ [ "font-sans", "Gilroy" ], [ "font-magenta", "Magenta" ] ]}
			display="select"
		/>
		<ChoiceField
			name="titleFontSize"
			label="Title Font Size"
			default={'lg:text-5xl'}
			choices={[ [ "small", "Small" ], [ "lg:text-3xl", "Regular" ], [ "lg:text-5xl", "Large" ] ]}
			display="select"
		/>
		<ChoiceField
			name="subTitleColor"
			label="Sub Title Color"
			default={'text-orange-400'}
			choices={[ [ "text-green-500", "Green" ], [ "text-sky-500", "Sky" ], [ "text-red-500", "Red" ], [ "text-brown-400", "Brown" ], [ "text-brown-700", "Dark Brown" ], [ "text-orange-400", "Yellow" ] ]}
			display="select"
		/>
		<ColorField
			label="Custom Title Color"
			name="customTitleColor"
			showOpacity={false}
		/>
		<ColorField
			label="Custom Sub Title Color"
			name="customSubTitleColor"
			showOpacity={false}
		/>
		<TextField
			name="date"
			label="Date"
			default=""
			locked={true}
		/>
		<TextField
			name="title"
			label="Title"
			allowNewLine={true}
			default="Crocodile Encounters"
			required
		/>
		<TextField
			name="subTitle"
			label="Sub Title"
			allowNewLine={true}
			default=""
		/>
		<ChoiceField
			name="subTitleLetterSpacing"
			label="Sub Title Letter Spacing"
			default={'tracking-normal'}
			choices={[ [ "tracking-normal", "Normal" ], [ "tracking-[2.8px] tracking-normal", "Wide" ] ]}
			display="select"
		/>
		<ChoiceField
			name="contentPosition"
			label="title Position"
			default={'text-left'}
			choices={[ [ "text-left", "Left" ], [ "text-center", "Center" ], [ "text-right", "Right" ] ]}
			display="select"
		/>
		<RichTextField
			name="details"
			label="Details"
			default=""
		/>
		<ImageField
			name="image"
			label="Image"
			default={{ src: "", alt: "" }}
		/>
		<BooleanField
			name="enableCta"
			label="Enable CTA"
			default={true}
		/>
		<RepeatedFieldGroup
			name="cta"
			label="Call to Action"
			visibility={{
				controlling_field: "enableCta",
				operator: "EQUAL",
				controlling_value_regex: "true",
			}}
			occurrence={{
                min: 1,
                max: 3,
                default: 1,
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
				default="Book now"
			/>
			<ChoiceField
				name="buttonColor"
				label="Button Color"
				default={'bg-orange-500 border-2 border-orange-500 hover:bg-white hover:text-orange-500 text-sm text-white font-bold inline-flex items-center justify-center px-6 py-3 rounded-full transition duration-300'}
				choices={[ [ "bg-sky-600 border-2 border-transparent text-white hover:border-sky-600 hover:text-sky-600 hover:bg-white transition duration-300", "Sky Primary" ], [ "bg-white border-2 border-sky-600 text-sky-600 hover:border-sky-600 hover:text-white hover:bg-sky-600 transition duration-300", "Sky Secondary" ], [ "bg-green-500 border-2 border-transparent text-white hover:border-green-500 hover:text-green-500 hover:bg-white duration-300", "Green Primary" ], [ "border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white duration-300", "Green Secondary" ], ["bg-orange-500 border-2 border-orange-500 hover:bg-white hover:text-orange-500 text-sm text-white font-bold inline-flex items-center justify-center px-6 py-3 rounded-full transition duration-300", "Orange Primary"], ["bg-red-500 text-white border-2 border-red-500 hover:bg-white hover:text-red-500 cursor-pointer transition duration-300", "Red Primary"] ]}
				display="select"
			/>
			<ChoiceField
				name="ctaPosition"
				label="Position"
				default={'text-left'}
				choices={[ [ "text-left", "Left" ], [ "text-center", "Center" ], [ "text-right", "Right" ] ]}
				display="select"
			/>
		</RepeatedFieldGroup>
		<ChoiceField
			name="style"
			label="Style"
			default={'default'}
			choices={[ [ "default", "Default" ], [ "birthday", "Birthday" ] ]}
			display="select"
		/>
	</ModuleFields>
);
