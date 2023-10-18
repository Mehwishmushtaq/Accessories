import React from 'react';
import './Policy.css';

const privacyPolicyItems = [
  {
    title: '1. Information We Collect',
    content: 'We collect information that you provide directly to us, such as your name, email address, phone number, and billing information. We may also collect information about your device, including its model, operating system, and unique device identifiers.',
  },
  {
    title: '2. How We Use Your Information',
    content: 'We use the information we collect to process your orders, communicate with you about your orders and updates, and provide customer support. We may also use your information to improve our products and services.',
  },
  {
    title: '3. Sharing Your Information',
    content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in delivering our products and services.',
  },
  {
    title: '4. Security',
    content: 'We take reasonable measures to protect your information from unauthorized access and disclosure. However, no data transmission over the internet can be guaranteed to be completely secure, so we cannot ensure or warrant the security of any information you transmit to us.',
  },
  {
    title: '5. Cookies and Tracking Technologies',
    content: 'We use cookies and similar tracking technologies to improve your browsing experience on our website. You can manage your cookie preferences through your browser settings.',
  },
  {
    title: '6. Changes to this Privacy Policy',
    content: 'We may update this privacy policy to reflect changes to our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically for any updates.',
  },
  {
    title: '7. Contact Us',
    content: 'If you have any questions or concerns about our privacy policy, please contact us at [email address].',
  },
];

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Policy</h1>
      <div className="privacy-policy-items">
        {privacyPolicyItems.map((item, index) => (
          <div key={index} className="privacy-policy-item">
            <h2 className="policy-item-title">{item.title}</h2>
            <p className="policy-item-content">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrivacyPolicy;
