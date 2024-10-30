import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButtons({ setCount, locked }) {
  return (
    <div className="button-container">
      <button
        disabled={locked}
        onClick={(event) => {
          setCount((prev) => {
            const newCount = prev - 1;
            if (newCount < 0) return 0;
            return newCount;
          });

          event.currentTarget.blur();
        }}
        className="count-btn"
      >
        <MinusIcon className="count-btn-icon" />
      </button>
      <button
        disabled={locked}
        onClick={(event) => {
          setCount((prev) => prev + 1);

          event.currentTarget.blur();
        }}
        className="count-btn"
      >
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}
