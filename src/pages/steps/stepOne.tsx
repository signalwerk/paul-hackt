import React from "react";
import { usePerson } from "@/store/PersonContext";

const StepOne = () => {
  const [person, setPerson] = usePerson();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setPerson({ [name]: value });
  };

  return (
    <div>
      <p style={{ fontFamily: "var(--font-family-heading)", fontSize: "40px" }}>
        TEST
      </p>
      <p className="mb-4">
        Hallo, ich bin Lilly. Verrätst du mir deinen Namen?
      </p>
      <label className="mb-4">
        What is your name?
        <input
          type="text"
          name="name"
          value={person.name || ""}
          onChange={handleInputChange}
          className="px-2 py-1 mt-1 border border-gray-300 rounded-md"
        />
      </label>
    </div>
  );
};

export default StepOne;
