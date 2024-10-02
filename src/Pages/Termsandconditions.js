import React from 'react'



const taccontant = [
    {
        id: 1,
        heading: "",
        content: 'Welcome to AAPortfolio.in, the premier destination for all your portfolio website needs.We offer a range of products and services to help you showcase your work and impress potential clients.By accessing our website and using our services, you agree to the following terms and conditions: ',
    },
    {
        id: 2,
        heading: "Acceptance of Terms",
        content: 'By accessing or using our website or services, you agree to be bound by these Terms and Conditions. If you do not agree to these Terms and Conditions, you may not access or use our website or services.',
    },
    {
        id: 3,
        heading: "Modifications to Terms",
        content: 'We reserve the right to modify these Terms and Conditions at any time and without prior notice. Any modifications to these Terms and Conditions will be effective immediately upon posting. Your continued use of our website or services after the posting of any modifications constitutes your acceptance of the modified Terms and Conditions.',
    },
    {
        id: 4,
        heading: "Use of Services",
        content: 'Our website and services are intended for personal and non-commercial use only. You may not use our website or services for any illegal or unauthorized purpose, and you agree to comply with all applicable laws and regulations.',
    },
    {
        id: 5,
        heading: "Intellectual Property",
        content: 'All content on our website, including text, graphics, logos, images, and software, is the property of aaportfolio.in or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use any content on our website without our express written permission.',
    },
    {
        id: 6,
        heading: "User Content",
        content: 'You are solely responsible for any content that you post or upload to our website. By posting or uploading content to our website, you grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, copy, modify, create derivative works based on, distribute, publicly display, publicly perform, and otherwise exploit in any manner such content in all formats and distribution channels now known or hereafter devised (including in connection with the aaportfolio.in website and services and our business and on third-party sites and services), without further notice to or consent from you, and without the requirement of payment to you or any other person or entity.',
    },
    {
        id: 7,
        heading: "Prohibited Conduct",
        content: 'You may not use our website or services to:',
        li1: "1. Post or transmit any content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.",
        li2: "2. Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity.",
        li3: "3. Use automated scripts to collect information from or otherwise interact with our website or services.",
        li4: "4. Attempt to gain unauthorized access to our website or services or to other users' accounts.",
        li5: "5. Use our website or services in any way that could damage, disable, overburden, or impair our servers or networks, or interfere with any other user's use and enjoyment of our website or services. ",
        li6:"6. Use our website or services to engage in any commercial activity without our express written consent."
    },
    {
        id: 8,
        heading: "Termination",
        content: 'We reserve the right to terminate your access to our website or services at any time and for any reason without notice. We may also terminate or suspend your account if we believe, in our sole discretion, that you have violated these Terms and Conditions or any applicable law or regulation',
    },
    {
        id: 9,
        heading: "Disclaimer of Warranties",
        content: 'Our website and services are provided on an "as is" and "as available" basis without warranty of any kind, either express or implied, including without limitation, warranties of merchantability, fitness for a particular purpose, or non-infringement. We make no warranty that our website or services will meet your requirements or be available on an uninterrupted, secure, or error-free basis.',
    },
    {
        id: 10,
        heading: "Limitation of Liability",
        content: 'To the maximum extent permitted by law, aaportfolio.in shall not be liable for any indirect, incidental,consequential, special, punitive, or exemplary damages, including without limitation, damages for loss of profits, goodwill, use, data, or other intangible losses, arising out of or in connection with your use of our website or services.',
    },
    {
        id: 11,
        heading: "Indemnification",
        content: "You agree to indemnify and hold aaportfolio.in and its affiliates, officers, agents, employees, and partners harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of our website or services, your violation of these Terms and Conditions, or your violation of any rights of another.",
    },
    {
        id: 12,
        heading: "Governing Law",
        content: 'These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without giving effect to any principles of conflicts of law.',
    },
    {
        id: 13,
        heading: "Dispute Resolution",
        content: 'Any dispute arising out of or in connection with these Terms and Conditions shall be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in English in the city of Mumbai, India.',
    },
    {
        id: 14,
        heading: "Severability",
        content: 'If any provision of these Terms and Conditions is found to be unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from these Terms and Conditions and shall not affect the validity and enforceability of any remaining provisions.',
    },
    {
        id: 15,
        heading: "Entire Agreement",
        content: 'These Terms and Conditions constitute the entire agreement between you and aaportfolio.in with respect to the use of our website and services and supersede all prior or contemporaneous communications and proposals, whether oral or written, between you and aaportfolio.in.',
    },
    {
        id: 16,
        heading: "Contact Us",
        content: 'If you have any questions about these Terms and Conditions, please contact us at contact@aaportfolio.in.',
    },
    {
        id: 17,
        heading: "",
        content: 'Thank you for choosing aaportfolio.in for your web designer and developer portfolio needs. We hope you enjoy using our website and services.',
    },
];
const Termsandconditions = () => {
    return (
      <>
        <div className="bg-50 flex justify-center py-20 bg-gradient-to-r from-purple-400 to-indigo-500">
          <div className="max-w-4xl m-5 w-full bg-white border rounded-lg py-20 px-10">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl ">
              Terms and Conditions
            </h1>
            {taccontant.map((tcc) => (
              <div className="mt-14" key={tcc.id}>
                <h2 className="text-3xl mb-5 tracking-tight text-slate-900 sm:text-4xl">
                  {tcc.heading}
                </h2>
                <p>{tcc.content}</p>
                <ul>
                  <li className="my-2">{tcc.li1}</li>
                  <li className="my-2">{tcc.li2}</li>
                  <li className="my-2">{tcc.li3}</li>
                  <li className="my-2">{tcc.li4}</li>
                  <li className="my-2">{tcc.li5}</li>
                  <li className="my-2">{tcc.li6}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}

export default Termsandconditions
