function processErrorMessage(rawMessage) {
    // Trim edges, convert to lowercase, and collapse multiple spaces into one
    const normalizedMsg = rawMessage.trim().toLowerCase().replace(/\s+/g, ' ');

    // Determine the category
    let category = 'GENERAL';
    if (normalizedMsg.includes('timeout')) {
        category = 'TIMEOUT';
    } else if (normalizedMsg.includes('locator')) {
        category = 'LOCATOR';
    }

    // Construct and print the final output string
    const output = `Normalized: ${normalizedMsg} Category: ${category}`;
    console.log(output);

    return output;
}

const rawMessage = "   Locator   not found after TIMEOUT  ";
processErrorMessage(rawMessage);