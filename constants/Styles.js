import COLORS from './Colors';

export const space = [4, 8, 16, 24, 32, 40];

export const borderWide = 2;

const floating = (elevation = 10) => ({
  ios: {
    shadowColor: '#a0a0a0',
    shadowOffset: { height: -(elevation / 3) }, // 3
    shadowOpacity: (elevation / 100), // 0.1
    shadowRadius: (elevation / 3), // 3
  },
  android: {
    elevation,
  },
});

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
};

const button = {
  padding: space[2],
  backgroundColor: COLORS.grass,
  color: COLORS.white,
};

export const FONTS = {
  medium: {
    fontFamily: 'circularMedium',
  },
  bold: {
    fontFamily: 'circularBold',
  },
  black: {
    fontFamily: 'circularBlack',
  },
  light: {
    fontFamily: 'circularLight',
  },
  mediumItalic: {
    fontFamily: 'circularBold',
  },
  boldItalic: {
    fontFamily: 'circularBold',
  },
  blackItalic: {
    fontFamily: 'circularBold',
  },
  lightItalic: {
    fontFamily: 'circularBold',
  },
};

export const centered = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

export const verticallyCentered = {
  flex: 1,
  justifyContent: 'center',
};

export const careGuideStyles = {
  section: {
    paddingHorizontal: space[2],
    paddingVertical: space[2],
  },
  topSection: {
    paddingHorizontal: space[2],
    paddingVertical: space[4],
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  titleSpacing: {
    marginBottom: space[1],
  },
};

export const centeredHeader = {
  headerMode: 'screen',
  headerStyle: {
    backgroundColor: '#ffffff',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  headerTintColor: '#ffffff',
  headerTitleStyle: {
    color: COLORS.gray,
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  }
};

export default {
  floating,
  lockedBottom,
  lockedTop,
  button,
};
