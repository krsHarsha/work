function () {
    var value = this.$value;

    value = value.replaceAll("(\\s)+\\,", ",");
    //clean before ,
    value = value.replaceAll("(\\s)+\\,", ",");
    //clean before .
    value = value.replaceAll("(\\,|\\s)+\\.", ".");
    //clean before :
    value = value.replaceAll("(\\s)+\\:", ":");

    // remove multiple occurrences of , and .
    value = value.replaceAll("(\\,){2,}", ",");
    value = value.replaceAll("(\\.){2,}", ".");

    //clean around !
    value = value.replaceAll("(\\,|\\s)+\\!", "!");
    value = value.replaceAll("\\![,\\.\\!]*", "!");

    // clean around ?
    value = value.replaceAll("(\\,|\\s)+\\?", "?");
    value = value.replaceAll("\\?[,\\.\\?]*", "?");
	}
    return clean;
