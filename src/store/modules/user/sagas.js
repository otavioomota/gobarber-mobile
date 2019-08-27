import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { updateProfileSuccess, updateProfileFailure } from './actions';
import api from '../../../services/api';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;
    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {})
    };

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Sucesso !', 'Dados atualizados');
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert('Erro ao atualizar', 'Verifique seus dados e tente novamente');
    yield put(updateProfileFailure());
  }
}
export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
