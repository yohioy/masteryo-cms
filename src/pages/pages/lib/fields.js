const { pageStatusOptions } = require('./constants');

export const objectFields = {
    'id': { default: '' },
    'pageName': { default: '' },
    'pageDescription': { default: '' },
    'pageStrapline': { default: '' },
    'images': { default: {} },
    'parentPage': { default: '' },
    'pageMenuLocation': { default: '' },
    'pageStatus': { default: pageStatusOptions[0].key },
    'metaDescription': { default: '' },
    'metaKeywords': { default: '' },
    'relatedPages': { default: [] },
};