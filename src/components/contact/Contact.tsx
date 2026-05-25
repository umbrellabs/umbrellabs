import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Github, Globe, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeUp, staggerChildren } from '@/lib/animations';
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

  const links = useMemo(
    () => [
      { label: 'ibo.umbrella@gmail.com', href: 'mailto:ibo.umbrella@gmail.com', icon: Mail },
      { label: 'github.com/IBO-Umbrel', href: 'https://github.com/IBO-Umbrel', icon: Github },
      { label: 'ibo-umbrel.netlify.app', href: 'https://ibo-umbrel.netlify.app/', icon: Globe },
    ],
    [],
  );

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
    <section id="contact" className="px-5 py-24 md:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-2">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerChildren()}>
          <motion.div variants={fadeUp}>
            <SectionHeader
              eyebrow="Contact"
              title="Let's Build Something Great"
              description="Share your idea, product direction, or technical challenge. Umbrella Labs is open to focused project discussions."
            />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 space-y-3">
            {links.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="glass-panel flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-text-secondary transition hover:text-white"
                >
                  <Icon size={16} className="text-primary" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.form name="contact" data-netlify="true" onSubmit={onSubmit} className="glass-panel space-y-4 rounded-2xl p-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerChildren(0.05)} noValidate>
          {/* Hidden input required for Netlify form identification */}
          <input type="hidden" name="form-name" value="contact" />
          <motion.div variants={fadeUp}>
            <label htmlFor="name" className="mb-1 block text-sm text-text-secondary">Name</label>
            <input id="name" type="text" value={form.name} onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))} className="w-full rounded-xl border border-white/15 bg-bg/70 px-4 py-3 text-sm outline-none transition focus:border-primary" required />
          </motion.div>

          <motion.div variants={fadeUp}>
            <label htmlFor="email" className="mb-1 block text-sm text-text-secondary">Email</label>
            <input id="email" type="email" value={form.email} onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))} className="w-full rounded-xl border border-white/15 bg-bg/70 px-4 py-3 text-sm outline-none transition focus:border-primary" required />
          </motion.div>

          <motion.div variants={fadeUp}>
            <label htmlFor="projectType" className="mb-1 block text-sm text-text-secondary">Project Type</label>
            <input id="projectType" type="text" value={form.projectType} onChange={(event) => setForm((prev) => ({ ...prev, projectType: event.target.value }))} className="w-full rounded-xl border border-white/15 bg-bg/70 px-4 py-3 text-sm outline-none transition focus:border-primary" required />
          </motion.div>

          <motion.div variants={fadeUp}>
            <label htmlFor="message" className="mb-1 block text-sm text-text-secondary">Message</label>
            <textarea id="message" rows={5} value={form.message} onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))} className="w-full resize-none rounded-xl border border-white/15 bg-bg/70 px-4 py-3 text-sm outline-none transition focus:border-primary" required />
          </motion.div>

          {errors.length > 0 ? (
            <motion.ul variants={fadeUp} className="space-y-1 text-sm text-red-300" aria-live="polite">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </motion.ul>
          ) : null}

          {success ? (
            <motion.p variants={fadeUp} className="rounded-lg border border-highlight/30 bg-highlight/10 px-3 py-2 text-sm text-highlight" aria-live="polite">
              {success}
            </motion.p>
          ) : null}

          <motion.div variants={fadeUp}>
            <Button type="submit" className="w-full">{submitting ? 'Sending...' : 'Send Inquiry'}</Button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
