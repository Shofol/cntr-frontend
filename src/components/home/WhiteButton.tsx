const WhiteButton = ({ text }: { text: string }) => {
  return (
    <button
      type="button"
      className="font-inter rounded-md border border-black bg-white px-5 py-2 hover:bg-green-50 focus:bg-green-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      {text}
    </button>
  );
};

export default WhiteButton;
