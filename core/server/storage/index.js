var errors = require('../errors'),
    storage;

function get_storage() {
    // TODO: this is where the check for storage apps should go
    // Local file system is the default
    var storageChoice = 's3';

    if (storage) {
        return storage;
    }

    try {
        // TODO: determine if storage has all the necessary methods
        storage = require('./' + storageChoice);
    } catch (e) {
        errors.logError(e);
    }
    return storage;
}

module.exports.get_storage = get_storage;
