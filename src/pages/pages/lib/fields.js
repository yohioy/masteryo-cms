const { pageStatusOptions, pageMenuLocation, templateTypes } = require('./constants');

export const objectFields = {
    'id': { default: '' },
    'pageName': { default: '' },
    'longDescription': { default: '' },
    'shortDescription': { default: '' },
    'strapLine': { default: '' },
    'seoFriendlyLinkId': { default: '' },
    'customLink': { default: '' },
    'images': { default: {} },
    'parentPage': { default: '' },
    'pageMenuLocation': { default: pageMenuLocation[0].key },
    'pageStatus': { default: pageStatusOptions[0].key },
    'pagePosition': { default: '' },
    'template': { default: templateTypes[0].key },
    'metaTitle': { default: '' },
    'metaDescription': { default: '' },
    'metaKeywords': { default: '' },
    'relatedPages': { default: [] },
};