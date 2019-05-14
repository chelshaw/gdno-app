const floating = (elevation = 10) => {
  return {
    ios: {
      shadowColor: 'black',
      shadowOffset: { height: -(elevation / 3) }, // 3
      shadowOpacity: (elevation / 100), // 0.1
      shadowRadius: (elevation / 3), // 3
    },
    android: {
      elevation,
    },
  }
};

const lockedBottom = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
};

const lockedTop = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
}

export default {
  floating,

}
