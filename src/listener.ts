import * as vscode from 'vscode';
const listener = () => {
    let keyedText = ''; 
    vscode.workspace.onDidChangeTextDocument((event) => {
        // Check if the change was a single character insert
        if (event.contentChanges.length === 1 && event.contentChanges[0].text.length === 1) {
            // Get the inserted text
            let insertedText = event.contentChanges[0].text; 
            keyedText += insertedText;
            if(keyedText.length >= 2) { 

                if (checkKeySequence(keyedText, 'ei')) { 
                }else if(checkKeySequence(keyedText, 'df')) {

                }else if(checkKeySequence(keyedText, 'jk')) {

                }else if(checkKeySequence(keyedText, 'dk')) {

                } 
                keyedText = '';
            }
        } 
    });
    
    const checkKeySequence = (sequence: string, target: string): boolean => {        
        const sortedSequence = sequence.split('').sort().join('');
        const sortedTarget = target.split('').sort().join('');
            
        return sortedSequence === sortedTarget;
    }
}
export default listener;