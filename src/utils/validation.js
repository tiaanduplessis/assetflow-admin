export const required = (message = 'Required') =>
    value => value ? undefined : message;
export const maxLength = (max, message = 'Too short') =>
    value => value && value.length > max ? message : undefined;
export const number = (message = 'Must be a number') =>
    value => value && isNaN(Number(value)) ? message : undefined;
export const minValue = (min, message = 'Too small') =>
    value => value && value < min ? message : undefined;