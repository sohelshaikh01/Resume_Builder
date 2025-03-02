import React, { useEffect, useState } from 'react';
import { fetchTemplates } from '../services/api';

function TemplateSelection({ onSelect }) {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetchTemplates().then(setTemplates).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Select a Template</h2>
      {templates.map((template) => (
        <div key={template.id}>
          <h3>{template.name}</h3>
          <button onClick={() => onSelect(template)}>Select</button>
        </div>
      ))}
    </div>
  );
}

export default TemplateSelection;
