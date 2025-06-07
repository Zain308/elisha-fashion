"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const ContactUs = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'How can I reach customer support?',
      answer: 'You can reach us via email at support@example.com or call us at +1 (234) 567-890.',
      open: false,
    },
    {
      question: 'What are your support hours?',
      answer: 'Our support team is available from 9 AM to 6 PM, Monday to Friday.',
      open: false,
    },
    {
      question: 'Can I visit your office?',
      answer: 'Yes, you can visit our office at 123 Luxury Lane, Gold City.',
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) =>
        i === index ? { ...faq, open: !faq.open } : faq
      )
    );
  };

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Contact Details</h2>
        <p><Mail size={18} style={styles.icon} /> Email: support@example.com</p>
        <p><Phone size={18} style={styles.icon} /> Phone: +1 (234) 567-890</p>
        <p><MapPin size={18} style={styles.icon} /> Address: 123 Luxury Lane, Gold City</p>
      </aside>

      <main style={styles.mainContent}>
        <h1 style={styles.pageTitle}>Get in Touch</h1>

        <form style={styles.form}>
          <input type="text" placeholder="Your Name" required style={styles.input} />
          <input type="email" placeholder="Your Email" required style={styles.input} />
          <select style={styles.input}>
            <option>General Inquiry</option>
            <option>Support</option>
            <option>Feedback</option>
          </select>
          <textarea placeholder="Your Message" rows="5" required style={styles.textarea}></textarea>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>

        <section>
          <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} style={styles.faqItem}>
              <div
                onClick={() => toggleFAQ(index)}
                style={{ ...styles.faqHeader, cursor: 'pointer' }}
              >
                <span>{faq.question}</span>
                {faq.open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
              {faq.open && <p style={styles.faqAnswer}>{faq.answer}</p>}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: '40px',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    color: '#333',
    flexWrap: 'wrap',
  },
  sidebar: {
    minWidth: '250px',
    backgroundColor: '#111',
    color: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  sidebarTitle: {
    fontSize: '20px',
    marginBottom: '10px',
    borderBottom: '1px solid #333',
    paddingBottom: '5px',
  },
  icon: {
    verticalAlign: 'middle',
    marginRight: '8px',
    color: 'gold',
  },
  mainContent: {
    flex: 1,
    maxWidth: '700px',
  },
  pageTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#111',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '50px',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
  },
  textarea: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    resize: 'vertical',
    outline: 'none',
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    padding: '14px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  faqTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  faqItem: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '10px',
    backgroundColor: '#fff',
  },
  faqHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  faqAnswer: {
    marginTop: '10px',
    fontSize: '15px',
    color: '#555',
  },
};

export default ContactUs;
