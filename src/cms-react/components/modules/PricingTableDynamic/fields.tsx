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

		<RepeatedFieldGroup
			name="products"
			label="Products"
			occurrence={{
				min: 1,
				max: 4,
				default: 3,
			}}
		>
			<TextField
				name="productName"
				label="Product Name"
				allowNewLine={true}
				default="Day Ticket"
				required
			/>
			<TextField
				name="productCode"
				label="Product Code"
				allowNewLine={false}
				default="DAY"
				helpText="Must match API product_category_code (e.g. DAY, COVID-DAY) for pricing to display"
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
			/>
</RepeatedFieldGroup>



		</RepeatedFieldGroup>
		<RepeatedFieldGroup
  name="specialDates"
  label="Special Dates"
  occurrence={{
     min: 1,
     default: 1
  }}
>
  <DateField
    name="specialDate"
    label="Special Date"
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
  </RepeatedFieldGroup>
</RepeatedFieldGroup>
	</ModuleFields>
)
