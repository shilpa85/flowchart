import React from 'react';
import html2canvas from 'html2canvas';
import { connect } from 'react-redux';
import { saveFlowchart } from '../actions/save-flowchart';
import { fetchFlowchart } from '../actions/fetch-flowchart';

class DiagramContainer extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {};
	}
	
	componentDidMount(){
		this.props.fetchFlowchart();
	}
	
   drop = (e) => {
	    e.preventDefault();
		
		var data=  e.dataTransfer.getData("text/html");
		const shapeCopy = document.getElementById(data).cloneNode(true);
		 shapeCopy.id =  "flowchart-" + data;
		
		shapeCopy.style.display = "block";
		shapeCopy.classList.add("resizable-tem");
		shapeCopy.classList.add("flowchart-item");
		
		//shapeCopy.addEventListener("dblclick", this.writText);
		shapeCopy.addEventListener("mousedown", this.mousedown);
		
		
		e.target.appendChild(shapeCopy);
		
    }
	
	writText = (e) => {
		
	/*	
	var element = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	element.setAttributeNS(null, 'x', 30);
	element.setAttributeNS(null, 'y', 45);
	element.setAttributeNS(null,"font-size","10");
	element.setAttributeNS(null,"fill","black");
	var txt = document.createTextNode("Write Text");

	element.appendChild(txt);
	e.target.parentNode.appendChild(element);
	
	*/
		
	
	}
	
	mousedown = (e) =>{
	
	localStorage.setItem('prevX', e.clientX);
	localStorage.setItem('prevY', e.clientY);
	
	window.addEventListener("mousemove", this.mousemove);
	window.addEventListener("mouseup", this.mouseup);
	
}

 mousemove = (e) => {
		e.stopPropagation();

		let newX =  localStorage.getItem('prevX') - e.clientX;
		let newY =  localStorage.getItem('prevY') - e.clientY;
		

		let targetElement = e.target.parentNode.parentNode.parentNode;
		
		if(e.target.className === 'resizable-tem flowchart-item'){
			targetElement = e.target;
		} else if(e.target.parentNode.className === 'resizable-tem flowchart-item'){
			targetElement = e.target.parentNode;
		} else if(e.target.parentNode.parentNode.className === 'resizable-tem flowchart-item'){
			targetElement = e.target.parentNode.parentNode;
		} 
		
		//console.log(targetElement);

		const rect = targetElement.getBoundingClientRect();

		targetElement.style.left = rect.left - newX + "px";
		targetElement.style.top = rect.top -newY + "px";


		localStorage.setItem('prevX', e.clientX);
		localStorage.setItem('prevY', e.clientY);
		
	}
	
	 mouseup = (e) => {
		window.removeEventListener("mousemove", this.mousemove);
		window.removeEventListener("mouseup", this.mouseup);
	}


	
    dragOver = e => {
		
		e.preventDefault();
	}
	
	saveFile = e  => {

		html2canvas(document.querySelector("#drop-container")).then(canvas => {
			this.props.saveFlowchart(canvas);
		});
	}
	
	downloadFile = e  => {
		console.log(this.props.canvas);
		 if(this.props.canvas){
  					 
			 const image = this.props.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
			 window.location.href = image;

		 }
	}
	
	
	render(){
	
		  return (
		    <div>
				<div className = "toolbar-container">
					<button className = "save-button" onClick = {this.saveFile} > Save  </button>
					<button className = "save-button" onClick = {this.downloadFile} > Download </button>
				</div>
				<div 
				   id = "drop-container"
				   className="drop-container"
				   onDrop = {this.drop}
				   onDragOver = {this.dragOver}
				   
				   >{this.props.children}
				</div>
			</div>
		  );
	}
}

function mapStateToProps(state){
	console.log(state.canvas);
	return {canvas: state.canvas};
	
}

export default connect(mapStateToProps, {saveFlowchart, fetchFlowchart})(DiagramContainer);
