import { useState } from 'react';

// State
export const useEducationState = () => {
  const [educations, setEducations] = useState([{ school: '', major: '', degree: '', graduationDate: '' }]);
  const [draggedItem, setDraggedItem] = useState(null);
  
  return { educations, setEducations, draggedItem, setDraggedItem };
};

// Input handling
export const handleEducationInputChange = (educations, setEducations, onInfoChange) => (e, index) => {
  const { name, value } = e.target;
  const newEducations = [...educations];
  newEducations[index][name] = value;
  setEducations(newEducations);
  onInfoChange(prevInfo => ({ ...prevInfo, educations: newEducations }));
};

// Add & Delete
export const addEducation = (educations, setEducations) => () => {
  setEducations([...educations, { school: '', major: '', degree: '', graduationDate: '' }]);
};

export const handleDeleteEducation = (educations, setEducations, onInfoChange) => (indexToDelete) => {
  const newEducations = educations.filter((_, index) => index !== indexToDelete);
  setEducations(newEducations);
  onInfoChange(prevInfo => ({ ...prevInfo, educations: newEducations }));
};

// Drag & Drop functionality
export const handleDragStart = (setDraggedItem) => (e, index) => {
  setDraggedItem(index);
};

export const handleEducationDrop = (educations, setEducations, onInfoChange, draggedItem, setDraggedItem) => (e, index) => {
  e.preventDefault();

  const list = [...educations];
  const draggedEducation = list[draggedItem];
  list.splice(draggedItem, 1);
  list.splice(index, 0, draggedEducation);

  setEducations(list);
  onInfoChange(prevInfo => ({ ...prevInfo, educations: list }));
  setDraggedItem(null);
};

export const handleDragOver = (e) => {
  e.preventDefault();
};
