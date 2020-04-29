import React, { Component } from "react";

function SuggestionBlob(props) {
	const {suggestions} = props
	const suggest = Object.entries(suggestions)

	const renderUnits = (arr) => (
		arr.map((ea, idx) => {
			return (
				<p key={idx}>{ea}</p>
			)
		})
	)

	// console.log("Suggest", suggest)
	// suggest.map((ea, idx) => {
	// 	console.log("EACH", ea)
	// 	console.log("Units", ea[1].unit)
	// })
	return suggest.map((ea, idx) => 
		<div key={idx}>
			<h1>{ea[0]}</h1>
			{renderUnits(ea[1].unit)}
		</div>
	)
}
// class SuggestionBlob extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       suggestions: {},
//     };
// 	}
	
// 	componentDidUpdate(prevProps, prevState) {
// 		console.log(prevState)
// 	}



//   render() {
// 		const { suggestions } = this.props;
// 		console.log("Suggestions in Blob", suggestions)
// 		console.log("Testing Blob", Object.entries(suggestions))
// 		const suggest = Object.entries(suggestions)

// 		const renderSuggestions = () => {
// 			suggest.map((ea, idx) => (
// 				<p>{ea[0]}</p>
// 			))
// 		}

//     return (
//       <div>
//         {renderSuggestions()}
//       </div>
//     );
//   }
// }

export default SuggestionBlob;
