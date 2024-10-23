import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

  const data = { name: 'John', age: 30 };

  const routes = [
    { path: 'counter', name: 'Counter' },
    { path: 'form', name: 'Form Components' },
    { path: 'toggle', name: 'Toggle Component' },
    { path: 'dashboard', name: 'Dashboard' },
    { path: 'stopWatch', name: 'StopWatch' },
  ];
  
  

  return (
    <div>
      <h1>Available Pages</h1>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={`${route.path}`}>{route.name}</Link>
          </li>
        ))}

      </ul>
      <h1>with params</h1>
      <ul>
       <li>

            <Link to={`counter?name=${data.name}`}> counterWithurl </Link>

       </li>
        <li>

      <Link to={`stopWatch/${data.name}`}> stopWatchWithurl </Link>

        </li>

      </ul>
    </div>
  );
}
