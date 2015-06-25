export class NameHelper
{
    static makeTextualName(name) {
        return name.replace(/([A-Z])/g, ' $1')
            .trim()
            .toLowerCase()
            .replace(/\b\w/g, function(match) { return match.toUpperCase() });
    }

    static makeSpinalCase(name) {
        return name.replace(/([A-Z])/g, ' $1')
            .trim()
            .replace(" ", "-")
            .toLowerCase();
    }

    static generateId = function(property, idPrefix, idSuffix) {
        var generatedId = "";

        if(idPrefix) { generatedId += (idPrefix + "-"); }
        generatedId += NameHelper.makeSpinalCase(property);
        if(idSuffix) { generatedId += ("-" + idSuffix); }

        return generatedId;
    };
}