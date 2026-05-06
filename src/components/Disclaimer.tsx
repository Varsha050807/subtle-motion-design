import { useEffect, useState } from "react";

const Disclaimer = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem("disclaimerAccepted");
        if (!accepted) {
            setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("disclaimerAccepted", "true");
        setVisible(false);
    };

    const handleDecline = () => {
        window.location.href = "https://www.google.com";
    };

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex items-center justify-center px-6">
            <div className="max-w-2xl bg-[#F7F5EF] text-[#0D2342] p-8 rounded-xl shadow-2xl font-serif">

                <h2 className="text-xl mb-4 font-semibold">
                    Disclaimer
                </h2>

                <p className="text-sm leading-relaxed mb-4">
                    Welcome to Avimukta IP Services. As per Bar Council of India rules, we do not advertise or solicit work. By clicking “I AGREE”, you confirm that you are accessing this website on your own initiative to obtain general information about the Firm.
                </p>

                <p className="text-sm leading-relaxed mb-4">
                    The content provided is for informational purposes only and does not constitute legal advice or create a lawyer-client relationship. While we strive for accuracy, we do not guarantee completeness and disclaim all liability arising from reliance on this information.
                </p>

                <p className="text-sm leading-relaxed mb-4">
                    Please do not share any confidential or sensitive information through this website. Any such exchange is at your own risk.
                </p>

                <p className="text-sm leading-relaxed mb-6">
                    By proceeding, you acknowledge and accept this Disclaimer, along with our Terms of Use and Privacy Policy.
                </p>

                <div className="flex justify-end gap-4">
                    <button
                        onClick={handleDecline}
                        className="text-sm uppercase tracking-wider px-4 py-2 border border-[#0D2342]/40 hover:bg-[#0D2342] hover:text-white transition"
                    >
                        Decline
                    </button>

                    <button
                        onClick={handleAccept}
                        className="text-sm uppercase tracking-wider px-4 py-2 bg-[#0D2342] text-white hover:opacity-90 transition"
                    >
                        I Agree
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Disclaimer;