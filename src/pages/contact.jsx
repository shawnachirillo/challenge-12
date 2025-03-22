import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required.';
    if (!form.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = 'Email is invalid.';
    if (!form.message) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleBlur = () => {
    setErrors(validate());
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <h2>Contact</h2>
      <form>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} onBlur={handleBlur} />
        {errors.name && <p>{errors.name}</p>}

        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} onBlur={handleBlur} />
        {errors.email && <p>{errors.email}</p>}

        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} onBlur={handleBlur}></textarea>
        {errors.message && <p>{errors.message}</p>}

        <button type="submit">Send</button>
      </form>
      <p>Or email me directly at shawna@example.com</p>
    </section>
  );
};

export default Contact;
