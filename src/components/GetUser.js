//@flow

import React from "react";
import useFetch from "./useFetch";
import Child from "./Child";

function GetUser(): React$Element<*> {
  const url = "https://randomuser.me/api/";
  const { data, error } = useFetch(url);

  return (
    <div>
      {error && (
        <div>
          <p>Unable to get a user</p>
        </div>
      )}

      {data && (
        <div>
          <h2>User</h2>
          <h3>{data.results[0].name.first}</h3>
          <Child />
        </div>
      )}
    </div>
  );
}

export default GetUser;
