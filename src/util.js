const portraitBorderColors = [
  "#ababab",
  "#78bd6a",
  "#2b5cb5",
  "#744abd",
  "#baac4e",
];

export const getChampionPortrait = (champ) => {
  const champName = champ.toLowerCase().replace(/[^A-Z0-9]/gi, "");

  const imgPath = require.context("./data/champions", true, /\.png$/);
  const allImgFilePaths = imgPath.keys();
  const idx = allImgFilePaths.indexOf(`./${champName}.png`);

  const pngPath = allImgFilePaths[idx];
  const portrait = imgPath(pngPath);

  return portrait;
};

export const getPortraitBorder = (cost) => {
  const idx = cost - 1;
  const borderStyle = `5px inset ${portraitBorderColors[idx]}`;

  return borderStyle;
};

export const manaBarCurrent = (mana, startingMana) => {
  if (mana === 0) {
    return "0%";
  }
  const manaPercentage = Math.round((startingMana / mana) * 100);
  const manaBarWidth = `${manaPercentage}%`;

  return manaBarWidth;
};

export const manaBarBorderRadius = (mana, startingMana) => {
  const manaPercentage = Math.round((startingMana / mana) * 100);
  let manaBarRadius;
  if (manaPercentage === 100) {
    manaBarRadius = `35px`;
  } else {
    manaBarRadius = "35px 0 0 35px";
  }

  return manaBarRadius;
};

export const getCostUnits = (data, num) => {
	let filtered = data.filter(ea => ea.cost === num)
	return filtered;
}

export const reorder = (list, startIndex, endIndex) => {
	console.log("LIST: ", list)
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

export const move = (source, destination, droppableSource, droppableDestination) => {
	const sourceClone = Array.from(source);
	const destClone = Array.from(destination);
	const [removed] = sourceClone.splice(droppableSource.index, 1);

	destClone.splice(droppableDestination.index, 0, removed);

	const result = {};
	result[droppableSource.droppableId] = sourceClone;
	result[droppableDestination.droppableId] = destClone;

	return result;
};