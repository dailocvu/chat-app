import Textbox from "./Textbox";

const TextboxContainer = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="uppercase text-gray-400 text-sm font-bold flex flex-row gap-2">
        <p className="rounded-3xl py-3 px-5 bg-white w-fit cursor-pointer hover:text-gray-600 transition ease-in-out duration-200 hover:bg-message">
          Request visit
        </p>
        <p className="rounded-3xl py-3 px-5 bg-white w-fit cursor-pointer hover:text-gray-600 transition ease-in-out duration-200 hover:bg-message">
          Make offer
        </p>
      </div>

      <Textbox />
    </div>
  );
};

export default TextboxContainer;
