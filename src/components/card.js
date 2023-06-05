import React from 'react';

export function Githubcard(data) {
  console.log(data.data)
  return (
    <div>
      <img src={data.data.avatar_url} alt="User Avatar" />
      <p>Name: {data.data.name}</p>
      <p>Login: {data.data.login}</p>
      <p>
        Account URL: <a href={data.data.html_url}>{data.data.html_url}</a>
      </p>
      <p>
        Blog URL: <a href={data.data.blog}>{data.data.blog}</a>
      </p>
      <p>Location: {data.data.location}</p>
      <p>Email: {data.data.email}</p>
      <p>Followers: {data.data.followers}</p>
      <p>Following: {data.data.following}</p>
    </div>
  );
}
