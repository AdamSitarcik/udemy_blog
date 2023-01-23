exports.getDate = function() {
    let today = new Date();
    let options = {
        // weekday: "long",
        day: "numeric",
        month: "short",
        hour: "numeric",
        minute: "numeric"
    };
    return today.toLocaleDateString("en-US", options);
}