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
This button is useful when you need to clear a save (see article on restoring). 
It is recommended that you save before clearing the page so that it can be reversed.
As a safety feature, you will need to double click the clear button to clear the page.
"""

toolbox_save = """
The save button will capture the current state of the spreadsheet and all of its colors and content.
Should a page be deleted, its data will still be available for recovery (see article on restoring).
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
More information can be accessed by going to the article on Restore.
"""

toolbox_print = """
The print button will bring up the printing screen and convert the spreadsheet into a more printable format.
It is advised to print front and back as spreadsheets can take up two pages.
The print button is accessed by double clicking the print button.
"""

# Hotkeys

hotkeys_h1 = "Changing cell color"
hotkeys_h2 = "Cycle functions"
hotkeys_h3 = "Coloring the entire row/column"

hotkeys_cc = "To change the color of an individual cell first click on the selected cell and press the 'RIGHT SHIFT' key."
hotkeys_cf = """
To cycle different function types, 
first click on the designated function button (represented by the 'ƒ' character). 
Once the function button has been selected you can cycle down the list of functions using the 'F' key. 
Alternatively, you can press 'R' to reset to the top of the list.
"""
hotkeys_crc = """
To color an entire row, simply double click an index. 
The alphabetically arranged cells on the first row, 
the cells labled 'Function' and the numerically arranged cells count as indexes. 
Cells A - Z will color the columns and numbered cells 1 - 40 will color rows.
"""
