import React from 'react';
import { ThoughtCard } from '../thoughtCard/thoughtCard';
import './thoughtList.css';

export const ThoughtList = (props) => {
  const { thoughtList, deleteThought, editThought } = props;

  const thoughts = thoughtList.map(thought => {
    return <ThoughtCard
      key={thought.id}
      deleteThought={deleteThought}
      editThought={editThought}
      {...thought} />;
  });

  return (
    <div className="ThoughtList">
      { thoughts }
    </div>
  );
}
