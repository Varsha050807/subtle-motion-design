import SiteLayout from "@/components/SiteLayout";

export default function PrivacyPolicy() {
    return (
        <SiteLayout>
            <section className="bg-[#F7F5EF] min-h-screen py-28 px-6 md:px-10">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif text-[#0D2342] mb-16">
                        Privacy & Cookies Policy
                    </h1>

                    <div className="space-y-10 text-[#0B1523]/80 leading-relaxed text-lg">

                        <section>
                            <h2 className="text-2xl font-serif text-[#0D2342] mb-4">1. Introduction</h2>
                            <p>
                                Your privacy is a priority for us, and we are committed to handling your information
                                with the utmost respect on this website. This policy outlines the data we collect,
                                how it's used, our use of Cookies, and your rights.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-[#0D2342] mb-4">2. What Information is Collected?</h2>
                            <p>
                                We strive to collect minimal personal data, only gathering it when necessary to
                                respond to your requests via forms.
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">2.1. Analytics Information</h3>
                            <p>
                                We use Google Analytics to understand how our site is used. All data collected here
                                is anonymous, focusing on improving site performance, user experience, and security.
                                We collect non-personal data like browser type, access times, referring pages, OS
                                type, country, and return visitor status.
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">2.2. YouTube Video Embeds</h3>
                            <p>
                                Our site embeds YouTube videos in "Privacy Enhanced Mode" to prevent tracking of
                                your viewing activity, ensuring no personal data is collected through these videos.
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">2.3. Contact & Enquiry Forms</h3>
                            <p>
                                When you submit personal details through our forms, we collect information such as
                                your name, email, phone number, and message content to address your request.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-[#0D2342] mb-4">3. How is this Information Used?</h2>
                            <p><strong>Analytics Information:</strong> Used to enhance website functionality, navigation, and security. We might share anonymous stats with partners for content localization but never personal data.</p>
                            <p className="mt-3"><strong>YouTube Video Embeds:</strong> No personal data is collected, but visiting external links might lead to data collection by those sites.</p>
                            <p className="mt-3"><strong>Contact & Enquiry Forms:</strong> Information is used solely to fulfill your request, not shared unless legally required.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-[#0D2342] mb-4">4. Lawful Basis for Processing Personal Data</h2>
                            <p><strong>Legitimate Interests:</strong> Processing information to respond to your submissions.</p>
                            <p className="mt-3"><strong>Contractual:</strong> If your request involves a service or product, processing your data might be necessary to fulfill a contract.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-[#0D2342] mb-4">5. Legal Purposes</h2>
                            <p>We also may use or share your personal or non-personal information with third parties when we believe, in our sole discretion, that doing so is necessary:</p>
                            <ul className="list-disc pl-8 mt-4 space-y-2">
                                <li>to comply with applicable law or a court order, subpoena, or other legal process;</li>
                                <li>to investigate, prevent, or take action regarding illegal activities, suspected fraud, violations of our terms and conditions, or situations involving threats to property or safety;</li>
                                <li>to establish, protect, or exercise our legal rights or to defend against legal claims; or</li>
                                <li>to facilitate financing, securitization, insuring, sale, assignment, bankruptcy, or disposal of all or part of our business or assets.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-[#0D2342] mb-4">6. Security and Data Protection</h2>
                            <p>
                                We employ encryption, administrative, and physical security measures to safeguard
                                your personal information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-[#0D2342] mb-4">7. Data Retention</h2>
                            <p>
                                We retain personal data only as long as necessary to respond to your request.
                                Google Analytics data is kept for 26 months.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-[#0D2342] mb-4">8. Third Party Links</h2>
                            <p>
                                Our site links to external sites. We are not responsible for their practices, so
                                always review their privacy policies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-[#0D2342] mb-4">9. Cookies</h2>

                            <h3 className="text-xl font-semibold mt-6 mb-2">9.1. What are Cookies?</h3>
                            <p>
                                Cookies are small files that store data on your device, aiding in site
                                functionality, personalization, and analytics.
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">9.2. Cookies Used on This Website</h3>
                            <p><strong>CloudFlare Cookie (__cfduid):</strong> Enhances security without storing personal info.</p>
                            <p className="mt-3"><strong>Google Analytics Cookies (_ga, gid, gac_{"<property-id>"}):</strong> Collect anonymous usage stats.</p>

                            <h3 className="text-xl font-semibold mt-6 mb-2">9.3. Managing Cookies</h3>
                            <p>
                                You can manage Cookies through your browser settings. Disabling them might impact
                                site functionality.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-[#0D2342] mb-4">10. Changes to this Policy</h2>
                            <p>
                                Our team will review its data security measures and this privacy policy from time to
                                time and may make changes to the Site or to its privacy practices. In that case, we
                                may need to revise this Policy to reflect those changes. We will post all such
                                changes on the Site, so we encourage you to review this Policy periodically.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-[#0D2342] mb-4">11. Who Are We?</h2>
                            <p>
                                This website is owned by Vishwaraj and operated by Girish J. Our registered office
                                is at RNSIT.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-[#0D2342] mb-4">12. Contact Details</h2>
                            <p>For inquiries, contact us at Girish.jks@gmail.com</p>
                        </section>

                        <section className="pt-8 border-t border-[#0D2342]/10">
                            <h2 className="text-3xl font-serif text-[#0D2342] mb-4">Refund Policy</h2>
                            <p>
                                We do not accept returns and refunds for any of our products or services, which
                                include but are not limited to market research reports, patent analysis reports,
                                online courses, eBooks, printed books, workshops, trainings, consultant documents
                                and any other items sold under our name/website.
                            </p>
                            <p className="mt-4">
                                Once a product or service has been delivered or access has been granted, the sale is
                                considered final.
                            </p>
                            <p className="mt-4">
                                However, we offer a 100% replacement for any printed books/documents that arrive
                                damaged. You must notify us within 7 days of receiving the damaged item and return
                                it within that timeframe. Upon receiving the damaged item, we will promptly send a
                                replacement via courier or speed post. No refunds will be issued.
                            </p>
                        </section>

                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}