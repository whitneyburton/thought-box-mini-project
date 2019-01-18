import React from 'react';
import ThoughtCard from '../thoughtCard/thoughtCard';
import './thoughtList.css';

export const ThoughtList = (props) => {
  const { thoughtList, deleteThought, editThought } = props;
  return (
    <div className="ThoughtList">
      {
        thoughtList.map((thought) => {
          return <ThoughtCard
            key={thought.id}
            deleteThought={deleteThought}
            editThought={editThought}
            {...thought} />;
        })
    }
    </div>
  );
}
