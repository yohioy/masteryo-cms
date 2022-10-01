const { prodStatusOptions } = require('./constants');

export const objectFields = {
    'id': { default: '' },
    'prodName': { default: '' },
    'longDescription': { default: '' },
    'shortDescription': { default: '' },
    'images': { default: [] },
    'categories': { default: [] },
    'prodStatus': { default: prodStatusOptions[0].key },
    'relatedPages': { default: [] },
};
