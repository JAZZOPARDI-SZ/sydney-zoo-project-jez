import React from "react";
import { ModuleFields, RichTextField, RepeatedFieldGroup, TextField, ChoiceField, ImageField, NumberField, LinkField, ColorField, DateField, BooleanField, FieldGroup } from "@hubspot/cms-components/fields";

export const fields = (
	<ModuleFields>
		<TextField
			name="details"
			label="Details"
			allowNewLine={true}
			default="Select the number of guests to view pricing:"
		/>
		<RepeatedFieldGroup
			name="tickets"
			label="Tickets"
			occurrence={{
				min: 1,
				max: 12,
				default: 4,
			}}
			default={[
				{
					key: "adult",
					ticket: "Adult",
					note: "(16+ years)",
					popup: "Must show student, pensioner, senior, DVA or disability card on entry.",
				},
				{
					key: "child",
					ticket: "Child",
					note: "(3-15 years)",
				},
				{
					key: "infant",
					ticket: "Infant",
					note: "(0-2 years)",
				},
				{
					key: "concession",
					ticket: "Concession",
					popup: "Must show student, pensioner, senior, DVA or disability card on entry.",
				},
			]}
		>
			<TextField
				name="key"
				label="Key"
				allowNewLine={true}
				default="adult"
				required
			/>
			<TextField
				name="ticket"
				label="Ticket"
				allowNewLine={true}
				default="Adult"
				required
			/>
			<TextField
				name="note"
				label="Note"
				allowNewLine={true}
				default="(16+ years)"
				required
			/>
			<TextField
				name="popup"
				label="Popup"
				allowNewLine={true}
				default="Must show student, pensioner, senior, DVA or disability card on entry."
				required
			/>
		</RepeatedFieldGroup>
		<TextField
			name="productHelpText"
			label="Product Help Text"
			allowNewLine={true}
			default="Select the number of guests above to compare pricing"
			required
		/>

	<BooleanField
      name="is_enable_extended_hours"
      label="Enable Extended Hours"
      required={false}
      locked={false}
      display="checkbox"
      helpText="Show only on special dates; otherwise show on all dates."
      default={false}
    />
				<RepeatedFieldGroup
					name="specialDatesToshowExtendedHoursData"
					label="Special Dates for Extended Hours"
					occurrence={{
						min: 0
					}}
					visibility={{
						controlling_field: "is_enable_extended_hours",
						operator: "EQUAL",
						controlling_value_regex: "true",
					}}
					>
			<DateField
				name="specialDateToshowExtendedHours"
				label="Special Dates"
				required
			/>
</RepeatedFieldGroup>

		<RepeatedFieldGroup
			name="products"
			label="Products"
			occurrence={{
				min: 1,
				max: 4,
				default: 3,
			}}
		>
			<ChoiceField
				name="productTheme"
				label="Product Theme"
				default={'grey'}
				choices={[ [ "orange", "Orange" ], [ "sky", "Sky" ], [ "grey", "Grey" ], ["custom", "Custom"] ]}
				display="select"
			/>
			<ColorField
			name="productThemeBg"
			label="Product Theme Background"
			visibility={{
				controlling_field: "products.productTheme",
				operator: "EQUAL",
				controlling_value_regex: "custom",
			}}
			default="#24695a"
			/>
			<ColorField
			name="productThemeText"
			label="Product Theme Text Colour"
			visibility={{
				controlling_field: "products.productTheme",
				operator: "EQUAL",
				controlling_value_regex: "custom",
			}}
			default="#ffffff"
			/>
				<BooleanField
      name="is_enable_dates_to_cards"
      label="Enable Special Dates"
      required={false}
      locked={false}
      display="checkbox"
      helpText="Show only on special dates"
      default={false}
	  visibility={{
		controlling_field: "products.productTheme",
		operator: "EQUAL",
		controlling_value_regex: "custom",
	}}
    />
			<RepeatedFieldGroup
					name="specialDatesToshowCusColumnData"
					label="Choose the dates to display this product"
					occurrence={{
						min: 0
					}}
					visibility={{
						controlling_field: "products.is_enable_dates_to_cards",
						operator: "EQUAL",
						controlling_value_regex: "true",
					}}
					>
			<DateField
				name="specialDateToshowCustomeColumnData"
				label="Special Dates"
				required
			/>
</RepeatedFieldGroup>
			<TextField
				name="tagLine"
				label="Tag Line"
				allowNewLine={true}
				default="All day family fun"
				required
			/>
			<ImageField
				name="image"
				label="Image"
				default={{ src: "https://sydneyzoo.com/wp-content/uploads/2024/05/SSTA-Logo.png", alt: "" }}
			/>
			<TextField
				name="productName"
				label="Product Name"
				allowNewLine={true}
				default="Day Ticket"
				required
			/>
			<RepeatedFieldGroup
				name="pricing"
				label="Pricing"
				occurrence={{
					min: 1,
					max: 12,
					default: 1,
				}}
				default={[
					{
						key: "adult",
						
					},
					{
						key: "child",
						
					},
					{
						key: "infant",
						
					},
					{
						key: "concession",
						
					}
				]}
			>
				<TextField
					name="key"
					label="Key"
					allowNewLine={true}
					default="adult"
					required
				/>
				{/* <NumberField
					name="price"
					label="Price"
					default={45}
					required
				/> */}

			<RepeatedFieldGroup
				name="day"
				label="day"
				occurrence={{
					min: 7,
					max: 7,
					default: 7,
				}}
				default={[
					{   day: "monday",
						price: "0",
						
					},
					{   day: "tuesday",
						price: "0",
						
					},
					{   day: "wednesday",
						price: "0",
						
					},
					{   day: "thursday",
						price: "0",
						
					},
					{   day: "friday",
						price: "0",
						
					},
					{   day: "saturday",
						price: "0",
						
					},
					{   day: "sunday",
						price: "0",
						
					},
				]}
			>
				<TextField
					name="day"
					label="day"
					allowNewLine={true}
					default="monday"
					required
				/>
				<NumberField
					name="price"
					label="Price"
					default={45}
					required
				/>
			</RepeatedFieldGroup>

			</RepeatedFieldGroup>
			<RichTextField
				name="description"
				label="Description"
				default="<strong>Save $$$ with member discounts + 12 months zoo entry</strong>"
				required
			/>
			<LinkField
				name="link"
				label="Link"
				default={{
					url: {
						content_id: 1,
						href: "https://tickets.sydneyzoo.com/tickets/products",
						type: "EXTERNAL",
					},
					no_follow: false,
					open_in_new_tab: true,
					sponsored: false,
				}}
				supportedTypes={[ "EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG", "CALL_TO_ACTION", "PHONE_NUMBER"]}
			/>
  <FieldGroup
    name="product_style"
    label="Style"
>
    <TextField
      name="header_height_desktop"
      label="Header Height(lg)"
      default="50"
      required={true}
    />

      <TextField
        name="header_height_mobile"
        label="Header Height(md)"
        default="30"
		required={true}
      />
  </FieldGroup>


		</RepeatedFieldGroup>
		<RichTextField
			name="note"
			label="Note"
			default="<div>Price calculator displays online price.</div>"
			required
		/>
		<RepeatedFieldGroup
			name="tableHeading"
			label="Table Heading"
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
				default="Day Ticket"
				required
			/>
			
						<NumberField
			name="heading_column_width"
			label="Column Width"
			required={false}
			locked={false}
			display="slider"
			min={1}
			max={100}
			step={1}
			prefix=""
			suffix="%"
			default={10}
			placeholder="25"
			/>
			<ImageField
				name="image"
				label="Image"
				default={{ src: "https://sydneyzoo.com/wp-content/uploads/2021/05/barramundi-300x300.jpg", alt: "" }}
			/>
			<ChoiceField
				name="productTheme"
				label="Product Theme"
				default={'grey'}
				choices={[ [ "orange", "Orange" ], [ "sky", "Sky" ], [ "grey", "Grey" ], ["custom", "Custom"] ]}
				display="select"
			/>
			<ColorField
			name="productThemeBg"
			label="Product Theme Background"
			visibility={{
				controlling_field: "tableHeading.productTheme",
				operator: "EQUAL",
				controlling_value_regex: "custom",
			}}
			default="#24695a"
			/>
			<ColorField
			name="productThemeText"
			label="Product Theme Text Colour"
			visibility={{
				controlling_field: "tableHeading.productTheme",
				operator: "EQUAL",
				controlling_value_regex: "custom",
			}}
			default="#ffffff"
			/>
<BooleanField
      name="is_enable_dates_to_cards"
      label="Enable Special Dates"
      required={false}
      locked={false}
      display="checkbox"
      helpText="Show only on special dates"
      default={false}
	  visibility={{
		controlling_field: "tableHeading.productTheme",
		operator: "EQUAL",
		controlling_value_regex: "custom",
	}}
    />
			<RepeatedFieldGroup
					name="specialDatesToshowCusColumnData"
					label="Choose the dates to display this product"
					occurrence={{
						min: 0
					}}
					visibility={{
						controlling_field: "tableHeading.is_enable_dates_to_cards",
						operator: "EQUAL",
						controlling_value_regex: "true",
					}}
					>
			<DateField
				name="specialDateToshowCustomeColumnData"
				label="Special Dates"
				required
			/>
</RepeatedFieldGroup>



		</RepeatedFieldGroup>
		<RepeatedFieldGroup
			name="rows"
			label="Rows"
			occurrence={{
				min: 1,
				max: 128,
				default: 12,
			}}
		>
			<RepeatedFieldGroup
				name="cols"
				label="Columns"
				occurrence={{
					min: 1,
					max: 12,
					default: 3,
				}}
			>
				<RichTextField
					name="text"
					label="Text"
					default="<strong>$44.99</strong> <br /> $54.99 at gate"
				/>
				<NumberField
					name="heading_column_width"
					label="Column Width"
					required={false}
					locked={false}
					display="slider"
					min={1}
					max={100}
					step={1}
					prefix=""
					suffix="%"
					default={10}
					placeholder="25"
				/>
				<ChoiceField
					name="productTheme"
					label="Product Theme"
					default={'grey'}
					choices={[ [ "orange", "Orange" ], [ "sky", "Sky" ], [ "grey", "Grey" ], [ "white", "White" ], ["custom", "Custom"] ]}
					display="select"
				/>
				<ColorField
				name="productThemeBg"
				label="Product Theme Background"
				visibility={{
					controlling_field: "rows.cols.productTheme",
					operator: "EQUAL",
					controlling_value_regex: "custom",
				}}
				default="#24695a"
				/>
				<ColorField
				name="productThemeText"
				label="Product Theme Text Colour"
				visibility={{
					controlling_field: "rows.cols.productTheme",
					operator: "EQUAL",
					controlling_value_regex: "custom",
				}}
				default="#ffffff"
				/>

				<BooleanField
      name="is_enable_dates_to_cards"
      label="Enable Special Dates"
      required={false}
      locked={false}
      display="checkbox"
      helpText="Show only on special dates"
      default={false}
	  visibility={{
		controlling_field: "rows.cols.productTheme",
		operator: "EQUAL",
		controlling_value_regex: "custom",
	}}
    />
			<RepeatedFieldGroup
					name="specialDatesToshowCusColumnData"
					label="Choose the dates to display this product"
					occurrence={{
						min: 0
					}}
					visibility={{
						controlling_field: "rows.cols.is_enable_dates_to_cards",
						operator: "EQUAL",
						controlling_value_regex: "true",
					}}
					>
			<DateField
				name="specialDateToshowCustomeColumnData"
				label="Special Dates"
				required
			/>
</RepeatedFieldGroup>
			</RepeatedFieldGroup>
		</RepeatedFieldGroup>
		<RepeatedFieldGroup
			name="buttons"
			label="Buttons"
			occurrence={{
				min: 1,
				max: 128,
				default: 3,
			}}
		>
			<TextField
				name="ctaText"
				label="Link Text"
				default="Buy Day Ticket"
			/>
			<TextField
				name="ctaTextMobile"
				label="Link Text Mobile"
				default="Day Ticket"
			/>
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
			<ChoiceField
				name="buttonColor"
				label="Button Color"
				default={'bg-white hover:bg-orange-500 hover:!text-white border-2 border-orange-500 hover:border-transparent transition duration-300 text-sm !text-orange-500 font-bold inline-flex items-center justify-center px-6 py-3 rounded-full'}
				choices={[ [ "bg-[#636363] border-2 border-#636363 text-white hover:text-white hover:bg-grey-900 transition duration-300", "Grey" ], [ "bg-sky-600 border-2 border-transparent text-white hover:border-sky-600 hover:text-sky-600 hover:bg-white transition", "Sky Primary" ], [ "bg-white border-2 border-sky-600 text-sky-600 hover:border-sky-600 hover:text-white hover:bg-sky-600 transition", "Sky Secondary" ], [ "bg-green-500 border-2 border-transparent text-white hover:border-green-500 hover:text-green-500 hover:bg-white", "Green Primary" ], [ "border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white", "Green Secondary" ], ["bg-white hover:bg-orange-500 hover:!text-white border-2 border-orange-500 hover:border-transparent transition duration-300 text-sm !text-orange-500 font-bold inline-flex items-center justify-center px-6 py-3 rounded-full", "Orange Primary"],  ["custom", "Custom"] ]}
				display="select"
			/>
			<ColorField
			name="productThemeBg"
			label="Product Theme Background"
			visibility={{
				controlling_field: "buttons.buttonColor",
				operator: "EQUAL",
				controlling_value_regex: "custom",
			}}
			default="#24695a"
			/>
			<ColorField
			name="productThemeText"
			label="Product Theme Text Colour"
			visibility={{
				controlling_field: "buttons.buttonColor",
				operator: "EQUAL",
				controlling_value_regex: "custom",
			}}
			default="#ffffff"
			/>

			<BooleanField
      name="is_enable_dates_to_cards"
      label="Enable Special Dates"
      required={false}
      locked={false}
      display="checkbox"
      helpText="Show only on special dates"
      default={false}
	  visibility={{
		controlling_field: "buttons.buttonColor",
		operator: "EQUAL",
		controlling_value_regex: "custom",
	}}
    />
			<RepeatedFieldGroup
					name="specialDatesToshowCusColumnData"
					label="Choose the dates to display this product"
					occurrence={{
						min: 0
					}}
					visibility={{
						controlling_field: "buttons.is_enable_dates_to_cards",
						operator: "EQUAL",
						controlling_value_regex: "true",
					}}
					>
			<DateField
				name="specialDateToshowCustomeColumnData"
				label="Special Dates"
				required
			/>
</RepeatedFieldGroup>
		</RepeatedFieldGroup>
		<RepeatedFieldGroup
  name="specialDates"
  label="Special Dates"
  occurrence={{
     min: 1
  }}
>
  <DateField
    name="specialDate"
    label="Special Date"
    required
  />

  <RepeatedFieldGroup
    name="specialProducts"
    label="Products"
    occurrence={{
      min: 1,
      max: 4,
      default: 3,
    }}
  >
    <ChoiceField
      name="productTheme"
      label="Product Theme"
      default="grey"
      choices={[
        ["orange", "Orange"],
        ["sky", "Sky"],
        ["grey", "Grey"],
		["custom", "Custom"] ,
      ]}
      display="select"
    />
    <RepeatedFieldGroup
      name="pricing"
      label="Pricing"
      occurrence={{
        min: 1,
        max: 12,
        default: 4,
      }}
      default={[
        { key: "adult", price: 45.99 },
        { key: "child", price: 25.99 },
        { key: "infant", price: 0 },
        { key: "concession", price: 0 },
      ]}
    >
      <TextField
        name="key"
        label="Key"
        allowNewLine={false}
        required
      />
      <NumberField
        name="price"
        label="Price"
        default={45}
        required
      />
    </RepeatedFieldGroup>
  </RepeatedFieldGroup>
</RepeatedFieldGroup>
	</ModuleFields>
)
