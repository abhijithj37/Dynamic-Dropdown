import React from "react";
import { tables } from "../../data/data.json";
import useFetchData from "../hooks/useFetchData";

const DynamicDropDown = () => {
  const {setTable, isLoading, err, data} = useFetchData();

  return (
    <>
      <div data-testid="dropdown">
        
        <select  name="" id="" onChange={(e) => setTable(e.target.value)}>
          {tables.map((e) => {
            return (
              <option value={e.endpoint} key={e.name}>
                {e.name}
              </option>
            );
          })}
        </select>

        <div className="">
          {isLoading ? (
            <p>. . . Loading</p>
          ) : err ? (
            <p>{err}</p>
          ) : (
            <ol>
              {data?.map((e) => {
                return <li key={e.id}>{e.name}</li>;
              })}
            </ol>
          )}
        </div>
      </div>
    </>
  );
};

export default DynamicDropDown;
