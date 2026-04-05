export const isValidEmail = (value) => value !== null && value.includes("@");

export const isValidText = (value) => value !== null && value.trim() !== "";
