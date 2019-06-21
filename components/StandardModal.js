import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import { SectionTitle } from './Type';
import { space } from '../constants/Styles';

const ss = StyleSheet.create({
  modalContainer: {
    padding: space[2],
  },
  buttonContainer: {
    width: 50,
  },
});

const StandardModal = ({
  visible,
  onClose,
  title = 'Tomatoes • Pets',
  children
}) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={visible}
    onRequestClose={onClose}
  >
    <View style={ss.modalContainer}>
      <TitleBar showBackButton showImage={false} onClickBack={onClose} />
      <SectionTitle uppercase color="medGray">{title}</SectionTitle>
      {children}
    </View>
  </Modal>
);

StandardModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default StandardModal;
