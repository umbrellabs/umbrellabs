import { useState } from 'react';
import type { FormEvent } from 'react';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { sendContact, validatePayload } from '@/lib/contactApi';

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

const initialState: FormState = { name: '', email: '', projectType: '', message: '' };

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');

  function updateField<Key extends keyof FormState>(field: Key, value: FormState[Key]) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors.length > 0) {
      setErrors([]);
    }
    if (success) {
      setSuccess('');
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccess('');

    const clientErrors = validatePayload(form);
    if (clientErrors.length > 0) {
      setErrors(clientErrors);
      return;
    }

    setErrors([]);
    setSubmitting(true);

    try {
      const response = await sendContact(form);
      if (!response.success) {
        setErrors(response.errors ?? ['Unable to send inquiry right now.']);
        return;
      }

      setForm(initialState);
      setSuccess(response.message ?? 'Inquiry sent successfully.');
    } catch {
      setErrors(['Network error. Please try again shortly.']);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section bg-bg-2 relative">
      {/* Floating background particles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {Array.from({ length: 6 }).map((_, r) => (
          <div
            key={r}
            className="particle"
            style={{
              left: `${15 + (12 * r) % 70}%`,
              top: `${10 + (18 * r) % 75}%`,
              animationDelay: `${0.4 * r}s`,
              animationDuration: `${9 + (r % 3) * 2.5}s`,
            }}
          />
        ))}
      </div>

      <div className="section-inner grid gap-10 lg:grid-cols-2 relative z-10">
        {/* Left Column: Heading, description, and status blocks */}
        <SectionReveal className="flex flex-col">
          <div className="section-label">CONTACT</div>
          <h2 className="section-title mb-4">
            Have an idea?
            <br />
            <span className="text-primary font-bold">Let's talk.</span>
          </h2>
          <p className="text-text-secondary text-sm leading-[1.7] mb-6 max-w-[420px]">
            Tell us what you want to build. If we see potential, we'll figure out how to make it happen together.
          </p>

          <div className="mt-4 flex flex-col gap-3">
            <a
              href="https://t.me/Umberlla_Lab_Bot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary pulse-glow justify-center text-center max-w-[320px]"
            >
              WRITE TO US →
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 max-w-[360px]">
            <div>
              <div className="font-mono text-[0.55rem] tracking-[0.12em] text-text-muted mb-1.5 uppercase">
                LOCATION
              </div>
              <span className="text-xs text-text-primary">Global / Remote</span>
            </div>
            <div>
              <div className="font-mono text-[0.55rem] tracking-[0.12em] text-text-muted mb-1.5 uppercase">
                STATUS
              </div>
              <span className="text-xs text-primary flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-[blink_1.4s_step-end_infinite]" />
                Open for projects
              </span>
            </div>
          </div>
        </SectionReveal>

        {/* Right Column: Cyber form */}
        <SectionReveal delay={0.15} className="w-full">
          <form
            name="contact"
            method="POST"
            action="/"
            data-netlify="true"
            onSubmit={onSubmit}
            className="card rounded-lg overflow-hidden border border-border"
            noValidate
          >
            {/* Netlify identifier */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Header bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0f0f0f] border-b border-border">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-mono text-[0.6rem] tracking-[0.1em] text-text-dim uppercase">
                UMBRELLA TRANSMITTER v1.0 — SEND MESSAGE
              </span>
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block font-mono text-[0.55rem] tracking-[0.08em] text-text-muted mb-1.5 uppercase">
                  Name
                </label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  className="w-full font-mono text-xs text-text-primary bg-[#050505] border border-border px-3.5 py-2.5 outline-none transition focus:border-primary-bright"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-[0.55rem] tracking-[0.08em] text-text-muted mb-1.5 uppercase">
                  Email
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  className="w-full font-mono text-xs text-text-primary bg-[#050505] border border-border px-3.5 py-2.5 outline-none transition focus:border-primary-bright"
                  required
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block font-mono text-[0.55rem] tracking-[0.08em] text-text-muted mb-1.5 uppercase">
                  Project Type
                </label>
                <input
                  name="projectType"
                  id="projectType"
                  type="text"
                  value={form.projectType}
                  onChange={(event) => updateField('projectType', event.target.value)}
                  className="w-full font-mono text-xs text-text-primary bg-[#050505] border border-border px-3.5 py-2.5 outline-none transition focus:border-primary-bright"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-[0.55rem] tracking-[0.08em] text-text-muted mb-1.5 uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(event) => updateField('message', event.target.value)}
                  className="w-full resize-none font-mono text-xs text-text-primary bg-[#050505] border border-border px-3.5 py-2.5 outline-none transition focus:border-primary-bright"
                  required
                />
              </div>

              {/* Status messages */}
              <div aria-live="polite">
                {submitting && (
                  <div className="font-mono text-[0.6rem] border border-primary-dark bg-primary/5 text-primary px-3 py-2">
                    TRANSMITTING DATA... PLEASE HOLD
                  </div>
                )}

                {errors.length > 0 && (
                  <div className="font-mono text-[0.6rem] border border-red-500/30 bg-red-500/5 text-red-400 p-3">
                    <p className="font-bold mb-1">TRANSMISSION FAILED. ERRORS FOUND:</p>
                    <ul className="list-disc pl-4 space-y-0.5">
                      {errors.map((error) => (
                        <li key={error}>{error}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {success && (
                  <div className="font-mono text-[0.6rem] border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 px-3 py-2">
                    TRANSMISSION SUCCESSFUL: {success.toUpperCase()}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full justify-center text-center cursor-pointer disabled:opacity-50"
              >
                {submitting ? 'TRANSMITTING...' : 'SEND INQUIRY →'}
              </button>
            </div>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
