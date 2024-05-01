"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Filter({ filterParam }) {
  const [searchValue, setValue] = useState("");

  useEffect(() => {
    if (filterParam) {
      setValue(filterParam);
    }
  }, []);

  const handleChange = (e) => {
    if (e.target.value === "") {
      router.push(`/products`);
    }
    setValue(e.target.value);
  };
  const router = useRouter();

  function filter() {
    if (searchValue) {
      router.push(`/products?filter=${searchValue}`);
    }
  }

  return (
    <div className="input-group mb-3 mt-3 ">
      <button className="btn btn-outline-secondary" type="button" onClick={filter}>
        Filter
      </button>
      <input
        type="text"
        className="form-control"
        placeholder="ex: Laptop"
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
        value={searchValue}
        onChange={handleChange}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            filter();
          }
        }}
      />
    </div>
  );
}
