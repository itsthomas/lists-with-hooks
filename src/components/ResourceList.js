import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
  };

  // The second argument [resource] means if the resource is the same, don't run the inner function inside useEffect
  // This is the same as both componentDidMount and componentDidUpdate.
  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return (
    <ul>
      {/* {props.resource} */}
      {resources.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
