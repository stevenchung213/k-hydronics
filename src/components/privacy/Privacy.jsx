import React from 'react';
import './styles.css';

const FILL_ME_IN = 'K-hydronics';

const PrivacyPolicy = () => {
  return (
    <div className='document_container'>
      <h1 className='document_header'>Privacy Policy</h1>
      <p className='document_paragraph'>
        We value your privacy and are committed to protecting your personal information.
        <br />
        This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website or otherwise engage with us.
      </p>
      <br />
      <h3 className='document_subheader'>
        Data Collection
      </h3>
      <p className='document_paragraph'>
        When you visit our website and/or use our services, we may collect the following types of information:
        <br />
        <i className='document_italics'>Personal Information:</i>
        <br />
        We may collect your full name, email address, phone number, and home address if
        you decide to utilize our services.
        <br />
        <i className='document_italics'>Customer Support:</i>
        <br />
        When you contact us for customer support, we may collect additional information to resolve
        your inquiry.
        <br />
        <i className='document_italics'>Purpose of Collection:</i>
        <br />
        The collected information is used to process orders, communicate with you about your purchases, and provide you
        with better services. <b className='document_bold'>We do not sell or rent your personal information to third parties.</b>
      </p>
      <br />
      <br />
      <h3 className='document_subheader'>
        Cookies and Tracking
      </h3>
      <p className='document_paragraph'>
        We may use cookies to improve the user experience on our website. A cookie is a small file of data that is placed on
        your device by our website. If you continue browsing after having been directed to this Privacy Policy, you agree
        to the use of cookies on our site.
        <br />
        <i className='document_italics'>Third-party cookies:</i>
        <br />
        We may also use third-party analytics tools (e.g., Google Analytics) to track website
        usage and improve our services. These tools may collect data about your online behavior on our site.
        <br />
        <i className='document_italics'>Your Choices:</i>
        <br />
        You can disable cookies in your browser settings, but this may affect the functionality of our website.
      </p>
      <br />
      <br />
      <h3 className='document_subheader'>
        Third-Party Services
      </h3>
      <p className='document_paragraph'>
        We currently use third-party services to analyze website traffic. These third-party providers
        are bound by their own privacy policies, which may include the collection of additional data.
      </p>
      <br />
      <br />
      <h3 className='document_subheader'>
        Data Security
      </h3>
      <p className='document_paragraph'>
        We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. This
        includes but is not limited to:
      </p>
      <p className='document_paragraph'>
        <i className='document_italics'>- Encrypting your data when it is transmitted over the internet.</i>
      </p>
      <p className='document_paragraph'>
        <i className='document_italics'>- Implementing security measures to prevent unauthorized access.</i>
      </p>
      <p className='document_paragraph'>
        <i className='document_italics'>- Regularly updating and maintaining our systems to protect against vulnerabilities.</i>
      </p>
      <p className='document_paragraph'>
        <br />
        We comply with any and all applicable privacy laws (e.g., GDPR in the EU) if you are a resident of those regions. We will
        ensure your rights under these laws are respected, including providing you with access to, correction, or deletion
        of your data as requested.
      </p>
      <br />
      <br />
      <h3 className='document_subheader'>
        User Rights
      </h3>
      <p className='document_paragraph'>You have the right to:</p>
      <p className='document_paragraph'>

        <i className='document_italics'>- Request access to your personal information.</i>
        <br />
        <i className='document_italics'>- Correct or update your personal information.</i>
        <br />
        <i className='document_italics'>- Delete and remove your personal information from our records, subject to legal and contractual
          obligations.</i>
        <br />
        <i className='document_italics'>- Opt out of marketing communications.</i>
      </p>
      <p className='document_paragraph'>
        Please contact us to exercise these rights.
      </p>
      <br />
      <br />
      <h3 className='document_subheader'>
        Data Retention
      </h3>
      <p className='document_paragraph'>
        We will retain your personal information for as long as necessary to process transactions, provide customer
        support, or comply with legal and regulatory obligations. Once no longer needed, we will securely delete the data
        in accordance with our data retention policy.
      </p>
      <br />
      <br />
      <h3 className='document_subheader'>
        Breach Notification
      </h3>
      <p className='document_paragraph'>
        In the unlikely event of a data breach that compromises your personal information, we will notify affected
        individuals via email or another reasonable method as required by law. We will work to restore confidence in our
        systems and take steps to prevent future breaches.
      </p>
      <br />
      <br />
      <h3 className='document_subheader'>
        Children's Privacy
      </h3>
      <p className='document_paragraph'>
        We do not knowingly collect personal information from children under the age of 18 without parental consent. If
        you are a minor, please have your parent or guardian contact us to review any data collection practices specific
        to children.
      </p>
      <br />
      <br />
      <h3 className='document_subheader'>
        Changes to This Policy
      </h3>
      <p className='document_paragraph'>
        We may update this Privacy Policy from time to time. We will post any changes on this page and notify you via
        email if the changes significantly impact your rights or obligations under the policy.
      </p>
      <p className='document_paragraph'>
        <br />
        <br />
        <i className='document_italics'>Thank you for trusting {FILL_ME_IN} with your personal information. We are committed to
          protecting it and ensuring transparency in how we use it.</i>
      </p>
      <br />
      <br />
    </div >
  );
};

export default PrivacyPolicy;
