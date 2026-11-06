export const validators = {
  name: value => value.trim().length >= 2 ? '' : 'Please enter your full name (at least 2 characters).',
  email: value => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()) ? '' : 'Enter a valid email address.',
  phone: value => /^\+?[0-9\s()-]{8,15}$/.test(value.trim()) ? '' : 'Enter a valid phone number.',
  required: (value, label) => value.trim() ? '' : `${label} is required.`
}
