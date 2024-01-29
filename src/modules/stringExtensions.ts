declare global {
    interface String {
        reverse(): string;
        titleCase(): string;
        toTitleCase(): string;
    }
}

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
};

String.prototype.titleCase = function () {
    return this.toLowerCase().split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
};

String.prototype.toTitleCase = function () {
    const doNotCapitalize = [
        "a", "an", "the", "for", "and", "nor", "but", "or", "yet", "so",
        "at", "around", "by", "after", "along", "for", "from", "of", "on",
        "to", "with", "without",
    ];
    return this.replace(/\w\S*/g, function (txt) {
        if (doNotCapitalize.includes(txt.toLowerCase())) {
            return txt;
        } else {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    });
};

export {}; // Required for TypeScript to recognize the modification to the global scope  