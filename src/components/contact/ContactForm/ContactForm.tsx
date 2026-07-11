import { useState, type FormEvent } from 'react';
import { serviceChips } from '../../../data/contactContent';
import { submitContactForm } from '../../../utils/web3forms';
import styles from './ContactForm.module.css';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const GENERIC_ERROR = "Something went wrong. Please try again or email us directly at support@2xdev.com.";

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className={styles.success}>
      <div className={styles.successIcon}>✓</div>
      <h2 className={styles.successTitle}>Thanks — message received</h2>
      <p className={styles.successText}>
        We&apos;ve got your details and one of our engineers will be in touch within one business
        day.
      </p>
      <button type="button" onClick={onReset} className={styles.resetButton}>
        Send another message
      </button>
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('submitting');
    setErrorMessage('');

    try {
      const result = await submitContactForm(new FormData(form));
      if (result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(result.message || GENERIC_ERROR);
      }
    } catch {
      setStatus('error');
      setErrorMessage(GENERIC_ERROR);
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.card}>
        <SuccessMessage onReset={() => setStatus('idle')} />
      </div>
    );
  }

  const isSubmitting = status === 'submitting';

  return (
    <div className={styles.card}>
      <div>
        <h2 className={styles.title}>Tell us about your project</h2>
        <p className={styles.hint}>Fields marked * are required.</p>

        <form onSubmit={handleSubmit}>
          <input type="checkbox" name="botcheck" className={styles.honeypot} tabIndex={-1} autoComplete="off" />

          <div className={styles.row2}>
            <label className={styles.field}>
              <span className={styles.label}>Full name *</span>
              <input name="name" required placeholder="Jane Doe" className={styles.input} />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Email *</span>
              <input
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
                className={styles.input}
              />
            </label>
          </div>

          <div className={styles.row2}>
            <label className={styles.field}>
              <span className={styles.label}>Company</span>
              <input name="company" placeholder="Company Ltd" className={styles.input} />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Estimated budget</span>
              <select name="budget" className={styles.input}>
                <option>Not sure yet</option>
                <option>£5k – £15k</option>
                <option>£15k – £40k</option>
                <option>£40k – £100k</option>
                <option>£100k+</option>
              </select>
            </label>
          </div>

          <label className={styles.field}>
            <span className={styles.label}>What do you need? *</span>
            <div className={styles.chips}>
              {serviceChips.map((chip) => (
                <label key={chip} className={styles.chip}>
                  <input type="checkbox" name="services" value={chip} className={styles.checkbox} />
                  {chip}
                </label>
              ))}
            </div>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Project details *</span>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="A few sentences about what you're building, your goals and any deadlines…"
              className={styles.textarea}
            />
          </label>

          {status === 'error' && (
            <p className={styles.errorMessage} role="alert">
              {errorMessage}
            </p>
          )}

          <button type="submit" className={styles.submit} disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Send message & get a free quote →'}
          </button>
          <p className={styles.disclaimer}>We&apos;ll only use your details to reply. No spam, ever.</p>
        </form>
      </div>
    </div>
  );
}
