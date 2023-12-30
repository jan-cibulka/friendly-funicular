import { useContext } from "solid-js";
import { IdContext } from "./IdContext";

function IdComponent() {
  const { value, setValue } = useContext(IdContext);

  function handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    setValue(parseInt(target.value));
    console.log(target.value);
  }

  return (
    <div class="p-4 flex gap-2 items-center">
      <label
        for="numberInput"
        class="block text-sm font-medium text-gray-700 mb-1"
      >
        ID
      </label>
      <input
        id="numberInput"
        type="number"
        class="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 block w-full sm:text-sm border p-2"
        value={value()}
        onInput={handleInputChange}
      />
    </div>
  );
}

export default IdComponent;
