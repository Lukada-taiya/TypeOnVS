import * as vscode from 'vscode';
import start from './commands/start';
import stop from './commands/stop';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) { 

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let startCommand = vscode.commands.registerCommand('typeon.start', start);

	let stopCommand = vscode.commands.registerCommand('typeon.stop', stop);

	context.subscriptions.push(startCommand);
	context.subscriptions.push(stopCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
