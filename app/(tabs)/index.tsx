import styled from '@emotion/native';

import { CustomText } from '@/src/components/common/Text/CustomText';

export default function HomeScreen() {
  return (
    <S.Container>
      <CustomText type='title'>Welcome to Expo</CustomText>
    </S.Container>
  );
}

const S = {
  Container: styled.SafeAreaView`
    flex: 1;
  `,
};
