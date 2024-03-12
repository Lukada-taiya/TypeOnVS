import * as vscode from "vscode";
const arrowKeysFunction = (key: string) => {
  let editor = vscode.window.activeTextEditor;
  if (!editor) {
    return; // No active text editor
  }

  let document = editor.document;
  let selection = editor.selection;

  // Get the text of the current line
  let line = document.lineAt(selection.active.line);
  let text = line.text;

  // Remove the last two characters
  let newText = text.slice(0, -2);

  // Replace the current line with the modified text
  editor
    .edit((editBuilder) => {
      editBuilder.replace(line.range, newText);
    })
    .then(() => {
      // Move the cursor to the end of the modified text
      let newPosition = selection.active.with(
        selection.active.line,
        newText.length
      );
      let newSelection = new vscode.Selection(newPosition, newPosition);
      if (editor) editor.selection = newSelection;
      switch (key) {
        case "up":
          vscode.commands.executeCommand("cursorUp");
          break;
        case "down":
          vscode.commands.executeCommand("cursorDown");
          break;
        case "left":
          vscode.commands.executeCommand("cursorLeft");
          break;
        case "right":
          vscode.commands.executeCommand("cursorRight");
          break;
        default:
          break;
      }

      // Trigger the up arrow key press event
    });
};
export default arrowKeysFunction;