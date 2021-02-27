const Joi = require('joi');

const pageStatusTypes = [
    'publish',
    'draft',
    'future',
    'trash',
    'pending',
    'private'
];

const templateTypes = [
    'general',
    'services',
    'servicesGroup',
    'contact',
    'blog',
    'blogGroup'
];

export const validation = async (data) => {

    const schema = Joi.object({
        pageName: Joi.string().required(),
        longDescription: Joi.string(),
        shortDescription: Joi.string(),
        parentPage: Joi.string(),
        strapLine: Joi.string(),
        seoFriendlyLinkId: Joi.string(),
        customLink: Joi.string(),
        metaTitle: Joi.string(),
        metaDescription: Joi.string(),
        metaKeywords: Joi.string(),
        images: Joi.array(),
        template: Joi.string().valid(...templateTypes).required(),
        menuLocation: Joi.string(),
        relatedPages: Joi.object(),
        plugins: Joi.array(),
        pageStatus: Joi.string().valid(...pageStatusTypes).required(),
    }).required();

    try {
        return await schema.validateAsync(data);
    } catch (e) {
        throw e;
    }
}