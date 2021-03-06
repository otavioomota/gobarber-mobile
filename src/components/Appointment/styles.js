import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;

  opacity: ${props => (props.past ? 0.6 : 1)}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;
export const Time = styled.Text`
  font-size: 13px;
  color: #999;
`;
