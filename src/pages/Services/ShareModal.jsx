import { FaCopy, FaFacebook, FaInfoCircle, FaLink, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";


const ShareModal = ({ onClose, serviceName }) => {
  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out ${serviceName} at Verdora Resort!`;

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
      email: `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(`${text}\n\n${url}`)}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "noopener,noreferrer");
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="bg-white rounded-2xl max-w-sm w-full p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">
          <RiShareForwardLine className="inline mr-2" />
          Share this Service
        </h3>

        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close share modal"
        >
          <IoClose className="text-2xl" />
        </button>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-4 gap-4">
          <button
            onClick={() => handleShare("facebook")}
            className="p-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors flex flex-col items-center justify-center"
          >
            <FaFacebook className="text-2xl mb-2" />
            <span className="text-xs">Facebook</span>
          </button>

          <button
            onClick={() => handleShare("twitter")}
            className="p-4 rounded-xl bg-blue-400 text-white hover:bg-blue-500 transition-colors flex flex-col items-center justify-center"
          >
            <FaTwitter className="text-2xl mb-2" />
            <span className="text-xs">Twitter</span>
          </button>

          <button
            onClick={() => handleShare("whatsapp")}
            className="p-4 rounded-xl bg-green-500 text-white hover:bg-green-600 transition-colors flex flex-col items-center justify-center"
          >
            <FaWhatsapp className="text-2xl mb-2" />
            <span className="text-xs">WhatsApp</span>
          </button>

          <button
            onClick={copyLink}
            className="p-4 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors flex flex-col items-center justify-center"
          >
            <FaLink className="text-2xl mb-2" />
            <span className="text-xs">Copy Link</span>
          </button>
        </div>

        <div className="pt-4 border-t">
          <p className="text-sm text-gray-600 mb-2">
            <FaInfoCircle className="inline mr-2" />
            Or copy link directly:
          </p>

          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={window.location.href}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
            />
            <button
              onClick={copyLink}
              className="px-4 py-2 bg-[#ab8c55] text-white rounded-lg hover:bg-[#8a6a3f] transition-colors flex items-center gap-2"
            >
              <FaCopy />
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
