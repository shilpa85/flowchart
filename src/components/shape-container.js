import React from 'react';
import Shape from './shape'

function ShapeContainer() {
  return (
    <div className="drag-container">
	<h2> Shapes </h2>
		<Shape id ="shape-1" shape = "rect" x="60" y="10" rx="0" ry="0" />

		<Shape id ="shape-2" shape = "circle"  cx="200" cy="200" r="50" />

		<Shape id ="shape-3" shape = "traingle"  x="200" y="200" rx="100" ry="100" />
		
		<h2> Lines </h2>
		<Shape id ="shape-4" shape = "line"  x="200" y="200" rx="100" ry="100" />
		
    </div>
  );
}

export default ShapeContainer;