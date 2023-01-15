import colors from 'constants/colors'
import { formatNumberToSocialStyle } from 'utils/utils'
import {
  HeaderInforItem,
  HeaderInforWrap,
  RateCustom,
  TextBigHeaderInforItem,
  TextSmallHeaderInforItem
} from './HeaderInfor.styled'

interface Props {
  ratings: number
  numberRatings: number
  numberSold: number
}

const HeaderInfor = ({ ratings, numberRatings, numberSold }: Props) => {
  return (
    <HeaderInforWrap>
      <HeaderInforItem>
        <TextBigHeaderInforItem color={colors.orange} colorBorder={colors.orange}>
          {ratings}
        </TextBigHeaderInforItem>
        <RateCustom disabled defaultValue={4.7} allowHalf />
      </HeaderInforItem>
      <HeaderInforItem>
        <TextBigHeaderInforItem colorBorder={colors['gray-drak']} color={colors.black}>
          {formatNumberToSocialStyle(numberRatings)}
        </TextBigHeaderInforItem>
        <TextSmallHeaderInforItem>Đánh giá</TextSmallHeaderInforItem>
      </HeaderInforItem>
      <HeaderInforItem>
        <TextBigHeaderInforItem color={colors.black}>{formatNumberToSocialStyle(numberSold)}</TextBigHeaderInforItem>
        <TextSmallHeaderInforItem>Đã bán</TextSmallHeaderInforItem>
      </HeaderInforItem>
    </HeaderInforWrap>
  )
}

export default HeaderInfor
