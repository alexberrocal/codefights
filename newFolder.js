/*
New Folder

To create a new folder in the existing folder, you right-click a blank area and select the "New Folder" option.

The name of the folder you're creating is auto-generated like this:

if there is no file or folder with the name "New folder" in the current directory, the new folder's name is "New folder";
if there is a "New folder" file but no "New folder (1)" in the current directory, the new folder's name is "New folder (1)";
if there is also a "New folder (1)" file but no "New folder (2)" in the current directory, the new folder's name is "New folder (2)" and so on.
Given the names of the files in the current directory, find the auto-generated name of a newly created folder.

Example:

New_Folder([]) = "New Folder"
New_Folder(["New Folder"]) = "New Folder (1)"
New_Folder(["New Folder", "New Folder (1)"]) = "New Folder (2)"

[input] array.string files

Files or folders in the current directory.
[output] string

New folder's name.
*/
function New_Folder(f) {
  j=0
  v = "New Folder"

  while(f[j] && f[j].match(RegExp("\("+j+"\)","g")) || f[j]==v)
    j++;
  return j == 0 ? v : v + " (" + j + ")"
}
