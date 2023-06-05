import { Githubcard } from './card';
import React, { useState } from 'react';

import './style.css';

export function Github() {
  const [data, setData] = useState(null);

  async function fetchData() {

    const usernameinput = document.getElementById('username');
    const username = usernameinput.value;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    
    setData(data);
  }

  return (
    <>
      <form>
        <label htmlFor="username">GitHub Username:</label>
        <input type="text" id="username" name="username" />
        <button id="searchbtn" onClick={fetchData} type="button">
          Submit
        </button>
      </form>
      {data && <Githubcard data={data} />}
    </>
  );
}
