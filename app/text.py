# Holder for paragraph information for use on topic pages

# Toolbox
toolbox_h1 = "Custom"
toolbox_h2 = "Clear"
toolbox_h3 = "Save"
toolbox_h4 = "Load"
toolbox_h5 = "Restore"
toolbox_h6 = "Print"

toolbox_custom = """
This button is currently under development.
The custom button is intended to precisely select a certain amount of cells
in rows or columns to apply functions to and print the results at selected locations.
"""
toolbox_clear = """
The clear button will empty the entire page of all colors and text. 
This button is useful when you need to clear a save (see article on Saving and Loading). 
It is recommended that you save before clearing the page so that it can be reversed.
As a safety feature, you will need to double click the clear button to clear the page.
"""
toolbox_save = """
The save button will capture the current state of the spreadsheet and all of its colors and content.
Should a page be deleted, its data will still be available for recovery (see article on Saving and Loading).
You will recieve a notification confirming if the spreadsheet was properly saved.
The save button is accessed by double clicking the button.
"""
toolbox_load = """
The load button will override any empty cells with data from the most current save. 
Should any preexisting data be in any cells during a load operation, only empty cells will be populated by existing data.
It is recommended that you clear before loading in order to properly revert back to a save.
The load button is accessed by double clicking the load button.
"""
toolbox_restore = """
The restore button is used to access data from another spreadsheet. 
More information can be accessed by going to the article on Saving and Loading.
"""
toolbox_print = """
The print button will bring up the printing screen and convert the spreadsheet into a more printable format.
It is advised to print front and back as spreadsheets can take up two pages.
The print button is accessed by double clicking the print button.
"""

toolbox_headers = [
    toolbox_h1,
    toolbox_h2,
    toolbox_h3,
    toolbox_h4,
    toolbox_h5,
    toolbox_h6,
]

toolbox_paragraphs = [
    toolbox_custom,
    toolbox_clear,
    toolbox_save,
    toolbox_load,
    toolbox_restore,
    toolbox_print,
]

# Hotkeys
hotkeys_h1 = "Changing cell color"
hotkeys_h2 = "Cycle functions"
hotkeys_h3 = "Coloring the entire row/column"

hotkeys_cc = "To change the color of an individual cell first click on the selected cell and press the `RIGHT SHIFT` key."
hotkeys_cf = """
To cycle different function types, 
first click on the designated function button (represented by the `ƒ` character). 
Once the function button has been selected you can cycle down the list of functions using the `F` key. 
Alternatively, you can press `R` to reset to the top of the list.
"""
hotkeys_crc = """
To color an entire row, simply double click an index. 
The alphabetically arranged cells on the first row, 
the cells labled 'Function' and the numerically arranged cells count as indexes. 
Cells A - Z will color the columns and numbered cells 1 - 40 will color rows.
"""
hotkeys_headers = [
    hotkeys_h1,
    hotkeys_h2,
    hotkeys_h3,
]
hotkeys_paragraphs = [
    hotkeys_cc,
    hotkeys_cf,
    hotkeys_crc,
]

# Saving and Loading
saveload_h1 = "Your Save Number"
saveload_h2 = "Save Recent"
saveload_h3 = "Load Recent"
saveload_h4 = "Restore"

saveload_p1 = """
When a spreadsheet document is created, it will be automatically assigned a number representing what entry it will save and load from.
This number cannot be changed and can be used to revert back to older versions.
If the spreadsheet is deleted from your workbook, the contents of the spreadsheet can still be found under its number.
If another spreadsheet is created and it uses the number of a deleted spreadsheet, it will inherit the contents of the original spreadsheet number.
It is recommended to clear and save the spreadsheet before deleting to avoid previously mentioned conflict.
"""
saveload_p2 = """
When the save button is double clicked, 
the current state of your spreadsheet is saved under a dictionary entry named 'Save (number)' in your local storage.
This save entry only holds the most recent save so it is important to have copies of the spreadsheet to fall back to.
"""
saveload_p3 = """
The load button calls for any existing save entries under the same save number as your spreadsheet. 
If there are no save entries, nothing will happen.
A load operation is automatically called to remember the last moment the spreadsheet was saved on bootup.
You will not recieve a message confirming if the load operation was successful.
"""
saveload_p4 = """
When the restore button is double clicked, you will be prompted to answer with a number for the entry you want to restore from.
With this feature, you can make multiple copies of a spreadsheet to serve as backup copies, or to rename your spreadsheet.
Restoring information from another spreadsheet will not overwrite content inside the current spreadsheet.
You will be notified if the restore opperation was successful or not.
To the see save number of your spreadsheet, 
simply look at the number before your spreadsheet name inside the search bar. Alternatively, 
highlighting the top-left most cell will reveal the hidden save number (may not appear on select devices).
"""
saveload_headers = [saveload_h1, saveload_h2, saveload_h3, saveload_h4]
saveload_paragraphs = [saveload_p1, saveload_p2, saveload_p3, saveload_p4]

function_h1 = "Selecting Functions"
function_h2 = "Executing Functions"
function_h3 = "Function of Functions"
function_h4 = "Addition"
function_h5 = "Subtraction"
function_h6 = "Average"
function_h7 = "Alphabetical Ascending"
function_h8 = "Alphabetical Descending"

function_p1 = """
Function buttons (represented with the `ƒ` character) are found at the end of each column and each row, 
with the bottom-right button being the button for all other functions (`ƒoƒ`).
Select the desired function button you will be using by clicking on it, 
then press the `F` key to cycle down the list of available functions. 
Alternatively, you can use the `R` key to default back to the start of the list.
"""
function_p2 = """
When you have selected the type of opperation you want to use, double click the function button. 
The font on the button will turn red to let you know that the function has been executed.
If the button is on its default setting (`ƒ`), it will do nothing.
Remember to save before executing functions as the result may alter any data in the spreadsheet.
Math-related opperations will ignore any non-numerical data in its selection and print the result at its respective function column or row.
"""
function_p3 = """
The function of functions (represented by `ƒoƒ`) can be found at the farthest bottom-right cell of the spreadsheet.
This unique function button cannot perform word-related functions, 
instead it can only do math opperations using all other function cells as the values. 
The function of functions can be used to get the summation or average of every other result at once.
"""
function_p4 = """
Addition, represented by the `Add` face, 
will take the total of the selected row or column and print the result at the result cell. 
Any negative values will subtract from the summation.
"""
function_p5 = """
Subtraction, represented by the `Sub` face, 
will take the total of the selected row or column but it will consider all positive values as negative 
and the opposite as positive. The result will be printed inside the respective result cell.
"""
function_p6 = """
Average of, represented by the `Avg` face, 
will take the sum total of all values and divide by the number of values. 
Note that only cells with numbers will be averaged together. 
The result will be printed inside of its respective result cell.
"""
function_p7 = """
Alphabetical ascending, represented by the `A ▼` face, 
will sort all cells in the row or column and rearrange the contents starting with numbers 
from 0 - 9 and then letters from A - Z. Cells with no content will be skipped and entries with a 
space before any text will be prioritized at the start of the row or column.
No result will be printed however the respective column or row will be altered.
"""
function_p8 = """
Alphabetical ascending, represented by the `A ▲` face, 
will sort all cells in the row or column and rearrange the contents starting with letters 
from Z - A and then numbers from 9 - 0. Cells with no content will be skipped and entries with a 
space before any text will be prioritized at the end of the row or column.
No result will be printed however the respective column or row will be altered.
"""
function_headers = [
    function_h1,
    function_h2,
    function_h3,
    function_h4,
    function_h5,
    function_h6,
    function_h7,
    function_h8,
]
function_paragraphs = [
    function_p1,
    function_p2,
    function_p3,
    function_p4,
    function_p5,
    function_p6,
    function_p7,
    function_p8,
]
