import React from "react";
import { ModuleFields, ImageField, RepeatedFieldGroup, TextField, LinkField, ChoiceField} from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<ImageField
			name="logo"
			label="Logo"
			default={{ src: "https://sydneyzoo.com/wp-content/uploads/2021/05/sydney-logo.svg", alt: "" }}
		/>
		<RepeatedFieldGroup
			name="links"
			label="Links"
			occurrence={{
				min: 1,
				max: 8,
				default: 5,
			}}
		>
			<TextField
				name="text"
				label="Link Text"
				default="Experiences"
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
					open_in_new_tab: false,
					sponsored: false,
				}}
				supportedTypes={[ "EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG", "CALL_TO_ACTION", "PHONE_NUMBER"]}
			/>
			<ChoiceField
				name="color"
				label="Dropdown Color"
				default={'bg-green-500'}
				choices={[ [ "bg-green-500", "Green" ], [ "bg-sky-500", "Sky" ], [ "bg-red-500", "Red" ], [ "bg-brown-400", "Brown" ], [ "bg-orange-400", "Yellow" ] ]}
				display="select"
			/>
			<RepeatedFieldGroup
				name="subLinks"
				label="Sun Links"
				occurrence={{
					min: 1,
					max: 32,
					default: 4,
				}}
			>
				<TextField
					name="text"
					label="Link Text"
					default="Rhino Encounter"
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
						open_in_new_tab: false,
						sponsored: false,
					}}
					supportedTypes={[ "EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG", "CALL_TO_ACTION", "PHONE_NUMBER"]}
				/>
			</RepeatedFieldGroup>
		</RepeatedFieldGroup>
		<RepeatedFieldGroup
			name="bookingLinks"
			label="Booking Links"
			occurrence={{
				min: 1,
				max: 8,
				default: 1,
			}}
		>
			<TextField
				name="text"
				label="Link Text"
				default="Book Now"
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
					open_in_new_tab: false,
					sponsored: false,
				}}
				supportedTypes={[ "EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG", "CALL_TO_ACTION", "PHONE_NUMBER"]}
			/>
			<ChoiceField
				name="color"
				label="Dropdown Color"
				default={'bg-brown-600'}
				choices={[ [ "bg-green-500", "Green" ], [ "bg-sky-500", "Sky" ], [ "bg-red-500", "Red" ], [ "bg-brown-600", "Brown" ], [ "bg-orange-400", "Yellow" ] ]}
				display="select"
			/>
			<RepeatedFieldGroup
				name="subLinks"
				label="Sun Links"
				occurrence={{
					min: 1,
					max: 32,
					default: 4,
				}}
			>
				<TextField
					name="text"
					label="Link Text"
					default="Buy Tickets"
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
						open_in_new_tab: false,
						sponsored: false,
					}}
					supportedTypes={[ "EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG", "CALL_TO_ACTION", "PHONE_NUMBER"]}
				/>
			</RepeatedFieldGroup>
		</RepeatedFieldGroup>
		<TextField
			name="account"
			label="My Account"
			default="My Account"
		/>
		<LinkField
			name="accountLink"
			label="Link"
			default={{
				url: {
					content_id: 1,
					href: "https://tickets.sydneyzoo.com/profile/login",
					type: "EXTERNAL",
				},
				no_follow: false,
				open_in_new_tab: false,
				sponsored: false,
			}}
			supportedTypes={[ "EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG", "CALL_TO_ACTION", "PHONE_NUMBER"]}
		/>
	</ModuleFields>
);
