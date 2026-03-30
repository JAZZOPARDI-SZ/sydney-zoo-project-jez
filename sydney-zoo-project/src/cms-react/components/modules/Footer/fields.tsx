import React from "react";
import { ModuleFields, ImageField, RichTextField, TextField, FieldGroup, LinkField, BooleanField, ChoiceField, RepeatedFieldGroup } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<ImageField
			name="logo"
			label="Logo"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/2021/05/SydneyZoo-Horizontal-Reverse-RGB.svg", alt: "" }}
		/>
		<RepeatedFieldGroup
			name="footerColumns"
			label="Footer Column"
			occurrence={{
				min: 1,
				max: 8,
				default: 8,
			}}
		>
			<TextField
				name="title"
				label="Title"
				default="Location"
			/>
			<LinkField
				name="link"
				label="Title Link"
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
			<BooleanField
				name="persistOnMobile"
				label="Persist On Mobile"
				default={false}
			/>
			<RepeatedFieldGroup
				name="items"
				label="Items"
				occurrence={{
					min: 1,
					max: 32,
					default: 4,
				}}
			>
				<TextField
					name="text"
					label="Text"
					allowNewLine={true}
					visibility={{
						controlling_field: "footerColumns.items.type",
						operator: "NOT_EQUAL",
						controlling_value_regex: "image",
					}}
					default="Buy Tickets"
				/>
				<ChoiceField
					name="type"
					label="Item Type"
					default={'link'}
					choices={[ [ "link", "Link" ], [ "boldLink", "Bold Link" ], [ "heading", "Heading" ], [ "text", "Text" ], [ "image", "Image" ], [ "socialLinks", "Social Links" ] ]}
					display="select"
				/>
				<LinkField
					name="link"
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
					visibility={{
						controlling_field: "footerColumns.items.type",
						operator: "EQUAL",
						controlling_value_regex: "link",
					}}
					supportedTypes={[ "EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG", "CALL_TO_ACTION", "PHONE_NUMBER"]}
				/>
				<LinkField
					name="boldLink"
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
					visibility={{
						controlling_field: "footerColumns.items.type",
						operator: "EQUAL",
						controlling_value_regex: "boldLink",
					}}
					supportedTypes={[ "EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG", "CALL_TO_ACTION", "PHONE_NUMBER"]}
				/>
				<ImageField
					name="image"
					label="Image"
					default={{ src: "https://sydneyzoo.com/wp-content/uploads/2021/05/inspiring.svg", alt: "" }}
					visibility={{
						controlling_field: "footerColumns.items.type",
						operator: "EQUAL",
						controlling_value_regex: "image",
					}}
				/>
				<RepeatedFieldGroup
					name="socialLinks"
					label="Social Links"
					occurrence={{
						min: 1,
						max: 8,
						default: 3,
					}}
					visibility={{
						controlling_field: "footerColumns.items.type",
						operator: "EQUAL",
						controlling_value_regex: "socialLinks",
					}}
				>
					<LinkField
						name="link"
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
					<ImageField
						name="image"
						label="Image"
						default={{ src: "https://sydneyzoo.com/wp-content/uploads/2021/05/inspiring.svg", alt: "" }}
					/>
				</RepeatedFieldGroup>
			</RepeatedFieldGroup>
		</RepeatedFieldGroup>
		<RepeatedFieldGroup
			name="privacyAndTerms"
			label="Privacy and Terms"
			occurrence={{
				min: 1,
				max: 8,
				default: 2,
			}}
		>
			<LinkField
				name="link"
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
				name="termsText"
				label="Text"
				allowNewLine={true}
				default="Privacy Policy"
			/>
		</RepeatedFieldGroup>
	</ModuleFields>
);
