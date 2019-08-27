import styled from 'styled-components/native';

import Button from '../../../components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;

  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 60px;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const Time = styled.Text`
  font-size: 18px;
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.6);
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  align-self: stretch;
`;
