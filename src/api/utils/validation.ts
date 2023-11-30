import * as yup from 'yup';

export const validateSchema = async <T extends object>(schema: yup.Schema, payload: T): Promise<{ values: T, errors?: string[] }> => {
  try {
    const values =  await schema.validate(payload);
    return { values };
  } catch (err) {
    const data = err as yup.ValidationError;
    return { values: payload, errors: data.errors };
  }
};