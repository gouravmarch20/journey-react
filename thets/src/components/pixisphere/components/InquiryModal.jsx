const InquiryModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <h2 className="text-lg font-bold mb-4">Send Inquiry</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Inquiry sent!");
            onClose();
          }}
          className="flex flex-col gap-3"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="border px-3 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="border px-3 py-2 rounded"
          />
          <textarea
            placeholder="Your Message"
            required
            className="border px-3 py-2 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-lg"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default InquiryModal;
