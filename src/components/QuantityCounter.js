const QuantityCounter = ({ quantity, increase, decrease }) => {
  return (
    <div className="flex items-center gap-3">
      <p className="text-purple-700 font-semibold">Quantity: </p>
      <div className="flex items-center justify-center gap-3 border border-purple-300 rounded-md bg-white">
        <div
          className="text-xl h-6 w-6 flex items-center justify-center cursor-pointer select-none border-r border-purple-300 text-purple-700 hover:bg-purple-100 transition-colors duration-300"
          onClick={() => {
            if (quantity !== 1) decrease();
          }}
        >
          -
        </div>
        <div className=" font-semibold text-pink-600">{quantity}</div>
        <div
          className="text-xl h-6 w-6 flex items-center justify-center cursor-pointer select-none border-l border-purple-300 text-purple-700 hover:bg-purple-100 transition-colors duration-300"
          onClick={increase}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default QuantityCounter;
