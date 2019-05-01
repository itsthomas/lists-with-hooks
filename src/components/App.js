import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = props => {
  // state = {
  //   resource: 'posts'
  // };

  const [resource, setResource] = useState('posts');

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      {/* {this.state.resource} */}
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
