const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

interface SubmitResult {
  success: boolean;
  message?: string;
}

export async function submitContactForm(formData: FormData): Promise<SubmitResult> {
  const services = formData.getAll('services');
  formData.delete('services');
  if (services.length > 0) {
    formData.append('services', services.join(', '));
  }

  formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
  formData.append('subject', `New project enquiry from ${formData.get('name')}`);
  formData.append('from_name', '2xdev website');

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: formData,
  });

  const result = await response.json();
  return { success: Boolean(result.success), message: result.message };
}
