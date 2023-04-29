import { useState } from 'react'
import './index.css'
import { useEffect } from 'react';

const Testimonials = () => {

  const [numSets, setNumSets] = useState(1);
  const [counts, setCounts] = useState(Array(numSets).fill(0));

  const handleButtonClick = (val, i) => {
    setCounts(prev => {
      const updatedCounts = [...prev];
      updatedCounts[i] = updatedCounts[i] + val;
      return updatedCounts;
    })
  }


  useEffect(() => setCounts(Array(numSets).fill(0)), [numSets]);

  const generateButtonSets = () => {
    const buttonSets = [];
    for (let i = 0; i < numSets; i++) {
      buttonSets.push(
        <div key={i}>
          <h5>count set {i + 1} : count {counts[i]} </h5>
          <button onClick={() => handleButtonClick(1, i)}>+</button>
          <button onClick={() => handleButtonClick(-1, i)}>-</button>
        </div>
      )
    }
    return buttonSets;
  };

  return (
    <section>
      <input type="number" min={1} value={numSets} onChange={e => setNumSets(parseInt(e.target.value))} />
      <div>{generateButtonSets()}</div>
    </section>
  )



}

export default Testimonials
