# Fields (Form Building)
The fields are the building blocks of every form. All the fields are placed in a JSON file to make a form.

## All Fields
Fields have a spcific data type with properties to customize it.

| Data Type |                                         Description                                         |
|:---------:|:-------------------------------------------------------------------------------------------:|
|  boolean  |              Two checkboxes with true and false labels. Only one is selectable.             |
|  checkbox |                         A list of checkboxes with customizable text.                        |
|  counter  | A number with two buttons next to it with the jobs of increasing and decreasing the number. |
|    date   |                            A simple field for selecting the date.                           |
|  dropdown |                          A list of items, selectable by a dropdown.                         |
|   header  |                     Large-ish text for defining sections of form fields.                    |
|   number  |                     A simple text box that only accepts a number input.                     |
|   radio   |                       A list of radio buttons with customizable text.                       |
| text-area |           A large text box made for notes and text longer than a normal text box.           |
|    text   |                              A text box for short text inputs.                              |

**Field Pages**
- [Boolean](fields/boolean.md)
- [Checkbox](fields/checkbox.md)
- [Counter](fields/counter.md)
- [Date](fields/date.md)
- [Dropdown](fields/dropdown.md)
- [Header](fields/header.md)
- [Number](fields/number.md)
- [Radio](fields/radio.md)
- [Text Area](fields/text-area.md)
- [Text](fields/text.md)
- [Time](fields/time.md)

> [!NOTE]
> In the field pages, optional properties are represented by the property name, followed by a question mark. All optional properties have a default value and are displayed in the description column.

You can learn more about how fields are programmed on the [Fields](extending/fields.md) code page.
