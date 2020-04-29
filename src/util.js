import tierlist from "./data/tierlist.json";

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
  let filtered = data.filter((ea) => ea.cost === num);
  return filtered;
};

let keySuggestion = {};

export const suggestSynergy = (currentTeam) => {
	// console.log("currentTeam", currentTeam)

  function test(tier, unit) {
    let unitName = unit.name
    let tierName;
    let units;

    Object.entries(tier).forEach((ea) => {
      const tierGrade = ea[0];
      ea[1].forEach((ins) => {
				tierName = ins.name;
        units = ins.units;
        if (units.includes(unitName)) {
          // console.log("Found a match inside units", units)

          let reqUnits = {}
          reqUnits.unit = units
          let unitIndex = reqUnits.unit.indexOf(unitName)
          reqUnits.unit.splice(unitIndex, 1);

					keySuggestion[tierName] = reqUnits
					keySuggestion[tierName]["grade"] = tierGrade
        }
      });
    });
    // console.log("test: ending keySuggestion:", keySuggestion);
  }


  function arraytest(currentTeam) {
    const tierABC = JSON.parse(JSON.stringify(tierlist))
  
		if (currentTeam.length < 1) {
      keySuggestion = {} 
    }
    else {
    // console.log("arraytest: currentTeam : " , currentTeam);
    currentTeam.forEach((ea) => {
      test(tierABC, ea);
    });
    }
	}
	
  arraytest(currentTeam);
	return keySuggestion
};
