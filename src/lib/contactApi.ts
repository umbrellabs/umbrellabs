export interface ContactPayload {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export interface ContactResult {
  success: boolean;
  message?: string;
  errors?: string[];
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validatePayload(payload: ContactPayload): string[] {
  const errors: string[] = [];

  if (!payload.name?.trim() || payload.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters.');
  }
  if (!emailRegex.test(payload.email?.trim() ?? '')) {
    errors.push('Please provide a valid email address.');
  }
  if (!payload.projectType?.trim()) {
    errors.push('Project type is required.');
  }
  if (!payload.message?.trim() || payload.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters.');
  }

  return errors;
}

export async function sendContact(payload: ContactPayload): Promise<ContactResult> {
  const errors = validatePayload(payload);
  if (errors.length > 0) {
    return { success: false, errors };
  }

  // Submit to Netlify Forms via AJAX. Ensure a hidden form with the same
  // name="contact" exists in the built HTML so Netlify registers the form.
  const form = new URLSearchParams();
  form.append('form-name', 'contact');
  form.append('name', payload.name);
  form.append('email', payload.email);
  form.append('projectType', payload.projectType);
  form.append('message', payload.message);

  try {
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: form.toString(),
    });

    if (!res.ok) {
      return { success: false, errors: ['Unable to submit the form.'] };
    }

    return { success: true, message: 'Inquiry received. Umbrella Labs will respond soon.' };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return { success: false, errors: ['Network error. Please try again shortly.'] };
  }
}
