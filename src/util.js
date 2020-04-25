
const portraitBorderColors = ["#ababab", "#78bd6a", "#2b5cb5", "#744abd", "#baac4e"]

export const getChampionPortrait = (champ) => {
    const champName = champ
        .toLowerCase()
        .replace(/[^A-Z0-9]/ig, "")

	const imgPath = require.context ( './data/champions', true, /\.png$/ )
	const allImgFilePaths = imgPath.keys()
    const idx = allImgFilePaths.indexOf(`./${champName}.png`)

    const pngPath = allImgFilePaths[idx]
    const portrait = imgPath(pngPath)

    return portrait;
}

export const getPortraitBorder = (cost) => {
    const idx = cost - 1
    const borderStyle = `5px inset ${portraitBorderColors[idx]}`

    return borderStyle;
}

export const manaBarCurrent = (mana, startingMana) => {
    const manaPercentage = Math.round((startingMana / mana) * 100)
    const manaBarWidth = `${manaPercentage}%`

    return manaBarWidth;
}

export const manaBarBorderRadius = (mana, startingMana) => {
    const manaPercentage = Math.round((startingMana / mana) * 100)
    let manaBarRadius;
    if (manaPercentage === 100) {
        manaBarRadius = `35px`
    } else {
        manaBarRadius = '35px 0 0 35px'
    }

    return manaBarRadius;
}