import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { Icon } from 'expo';
import PropTypes from 'prop-types';
import { NavText } from './Type';
import Touchable from './Touchable';
import ThumbnailWithFallback from './ThumbnailWithFallback';
import COLORS from '../constants/Colors';
import { space } from '../constants/Styles';

const ss = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: space[0],
    paddingTop: Platform.OS === 'ios' ? space[0] : StatusBar.currentHeight + space[0],
    alignItems: 'center',
  },
  button: {
    width: 50,
    alignItems: 'center',
  },
  title: {
    paddingLeft: space[1],
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
});

const TitleBar = ({
  showBackButton = true,
  onClickBack,
  title,
  imageUrl,
  showImage = true,
}) => (
  <View style={ss.container}>
    {showBackButton
      && (
      <View style={ss.button}>
        <Touchable onPress={onClickBack}>
          <Icon.Ionicons
            name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
            size={30}
            style={{ marginBottom: -3 }}
            color={COLORS.gray}
          />
        </Touchable>
      </View>
      )
    }
    <View style={ss.main}>
      {showImage && <ThumbnailWithFallback imageUrl={imageUrl} name={title} />}
      <View style={ss.title}>
        {title && <NavText>{title}</NavText>}
      </View>
    </View>
    <View style={ss.button} />
  </View>
);

TitleBar.propTypes = {
  showBackButton: PropTypes.bool,
  onClickBack: PropTypes.func,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  showImage: PropTypes.bool,
};

export default TitleBar;
