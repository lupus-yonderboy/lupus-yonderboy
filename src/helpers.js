export const abbreviate = (content) => {
    const reversedContentArr = [];
    for (let i = content.length; i > 0; i--) {
        reversedContentArr.push(content[i]);
    }
    const reversedContent = reversedContentArr.join('');
    const reverseStopIndex = reversedContent.indexOf('.')
        || reversedContent.indexOf(':')
        || reversedContent.indexOf(';')
        || reversedContent.indexOf('—')
        || reversedContent.indexOf(' ');
    const stopIndex = 229 - reverseStopIndex;
    return `${content.slice(0, stopIndex)} ...`;
};
