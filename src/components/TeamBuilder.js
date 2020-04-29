import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import data from "../data/champions.json";
import { suggestSynergy } from '../util';

import SuggestionBlob from '../components/SuggestionBlob';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const grid = 4;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250,
});

class TeamBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      champions: data,
			selected: [],
			suggestTeam: [],
      suggestUnits: [],
			suggestItems: [],
			suggestion: {}
    };
	}
	
	componentDidUpdate(prevProps, prevState) {
		console.log(this.state.suggestion)
	}

  id2List = {
    droppable: "champions",
    droppable2: "selected",
  };

  getList = (id) => this.state[this.id2List[id]];

  onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = { items };
      
      if (source.droppableId === "droppable2") {
        state = { selected: items };
      }

      this.setState(state);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
			);

			let currentTeam = result.droppable2
			let keySuggestion = suggestSynergy(currentTeam)

      this.setState({
        champions: result.droppable,
				selected: result.droppable2,
				suggestion: keySuggestion
      });
    }
  };

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity

  render() {
    const { suggestion } = this.state;

    const renderSuggestion = () => (
      <div>
        <h1>RENDERING SUGGESTION:</h1>
      </div>
    )
    
    return (
      <div className="text-center d-flex mx-auto justify-content-center">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                className="col-md-2 mx-5"
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {this.state.champions.map((item, index) => (
                  <Draggable
                    key={item.championId}
                    draggableId={item.name}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item.name}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="droppable2">
            {(provided, snapshot) => (
              <div
                className="col-md-6 mx-5"
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                <div>
                  <h1>Team:</h1>
									{Object.keys(suggestion).length !== 0  ? <SuggestionBlob suggestions={suggestion} /> : <p>Place a Unit</p>}
									
                </div>
                {this.state.selected.map((item, index) => (
                  <Draggable
                    key={item.championId}
                    draggableId={item.name}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        className="col-md-2"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item.name}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

export default TeamBuilder;
