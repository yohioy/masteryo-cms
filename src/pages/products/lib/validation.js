const Joi = require('joi');

const pageStatusTypes = [
  'publish',
  'draft',
  'future',
  'trash',
  'pending',
  'private'
];

export const validation = async data => {
  const schema = Joi.object({
    prodName: Joi.string().required(),
    longDescription: Joi.string(),
    shortDescription: Joi.string(),
    categories: Joi.string(),
    images: Joi.array(),
    relatedPages: Joi.object(),
    prodStatus: Joi.string()
      .valid(...pageStatusTypes)
      .required()
  }).required();

  try {
    return await schema.validateAsync(data);
  } catch (e) {
    throw e;
  }
};
