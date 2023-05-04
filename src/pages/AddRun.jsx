import { useState } from "react";

const AddRun = () => {
  const [distance, setDistance] = useState(0);

  return (
    <div>
      <form>
        <div>
          Distance:
          <input type="text" onChange={(e) => setDistance(e.target.value)} />
        </div>
      </form>
    </div>
  );
};

export default AddRun;
