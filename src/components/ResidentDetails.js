import { useEffect, useState } from "react";

export default function ResidentDetails({ residentURL }) {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    fetch(residentURL)
      .then((response) => response.json())
      .then((data) => {
        setResident(data);
      })
      .catch((error) => console.error("Error fetching resident:", error));
  }, [residentURL]);

  if (!resident) {
    return null;
  }

  return (
    <div>
      <p>
        <strong>Name:</strong> {resident.name}
      </p>
      <p>
        <strong>Height:</strong> {resident.height}
      </p>
      <p>
        <strong>Mass:</strong> {resident.mass}
      </p>
      <p>
        <strong>Gender:</strong> {resident.gender}
      </p>
    </div>
  );
}
