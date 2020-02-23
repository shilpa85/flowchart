import React from 'react';


class Shape  extends React.Component{

	
	renderShape(){
	let shape;
	
	if(this.props.shape === "rect"){
		shape = <rect width="100" height="100" />
	} else if(this.props.shape ==="circle"){
		//shape = <circle cx="{props.cx}" cy="{props.cy}" r="{props.r}"/>;
		shape = <circle cx="50" cy="50" r="50"/>;
	} else if(this.props.shape === "traingle"){
		shape = <polygon points="0,100 50,25 50,75" />;
	
	} else if(this.props.shape === "line"){
		shape = <line x1="0" y1="80" x2="100" y2="20" stroke="black" />;
	}
	
	return shape;
	}
	

  dragStart = (e) => {
	 // var target = e.target;
	 // const selectedIndex = e.target.options.selectedIndex;
        console.log(e.target.dataset.index);
	 e.dataTransfer.setData("text/html", e.target.dataset.index); 
  }
  
   dropOver = (e) => {
		e.preventDefault();
  }
  
  
  render(){
	
  return (
		<div 
			key = {this.props.id}
			data-index={this.props.id}
			className = "drag-item"
			draggable = "true"
			onDragStart = {this.dragStart}
			onDropOver = {this.dropOver}
			>
			<div id={this.props.id} >
				<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
				  <g fill="white" stroke="black" strokeWidth="2">
				  {this.renderShape()}
				  </g>
				</svg>
			</div>
		</div>

  );
  
  }
}

export default Shape;
