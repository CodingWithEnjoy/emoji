function replaceEmojisWithImages(element = "*", size = 1.4, marginTop = 0.3) {
    const emojiRegex = /([\uD800-\uDBFF][\uDC00-\uDFFF])/;

    function replaceEmojiInTextNode(node) {
        let matches;
        while ((matches = node.nodeValue.match(emojiRegex))) {
            const emoji = matches[0];
            const emojiIndex = node.nodeValue.indexOf(emoji);

            const preMatchText = node.nodeValue.slice(0, emojiIndex);
            const postMatchText = node.nodeValue.slice(emojiIndex + 2);

            const preTextNode = document.createTextNode(preMatchText);
            const emojiElement = document.createElement("img");

            emojiElement.alt = emoji;
            emojiElement.draggable = false;
            emojiElement.src = `src/emoji/${emoji}.png`;
            emojiElement.style = `width: ${size}em; display: inline-block; margin-left: 0.1em; margin-right: 0.1em; margin-top: ${marginTop}em; margin-bottom: -${marginTop}em;`;

            node.nodeValue = postMatchText;
            node.parentNode.insertBefore(preTextNode, node);
            node.parentNode.insertBefore(emojiElement, node);
        }
    }

    function traverseAndReplace(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            replaceEmojiInTextNode(node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            for (const childNode of node.childNodes) {
                traverseAndReplace(childNode);
            }
        }
    }

    if (element[0] === "#") {
        const targetElement = document.querySelector(element);
        traverseAndReplace(targetElement);
    } else {
        const targetElements = document.querySelectorAll(element);
        for (const targetElement of targetElements) {
            traverseAndReplace(targetElement);
        }
    }
}
