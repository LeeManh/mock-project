import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import InputNumber from 'components/InputNumber'

import {
  Container,
  ContentPriceFilter,
  ItemFilter,
  ItemRate,
  ListRate,
  RateCustom,
  Separator,
  Title,
  TitleFilter
} from './SideFilter.styled'
import Button from 'components/Button'

const SideFilter = () => {
  return (
    <Container>
      <Title>
        <FontAwesomeIcon icon={faFilter} />
        BỘ LỌC TÌM KIẾM
      </Title>
      <ItemFilter>
        <TitleFilter>Khoảng Giá</TitleFilter>
        <ContentPriceFilter>
          <InputNumber placeholder='₫ TỪ' value='' style={{ textAlign: 'left' }} />
          <Separator />
          <InputNumber placeholder='₫ ĐẾN' value='' style={{ textAlign: 'left' }} />
        </ContentPriceFilter>
        <Button typeBtn='primary' style={{ textTransform: 'uppercase' }}>
          Áp dụng
        </Button>
      </ItemFilter>

      <ItemFilter>
        <TitleFilter>Đánh Giá</TitleFilter>
        <ListRate>
          <ItemRate>
            <RateCustom disabled defaultValue={5} />
          </ItemRate>
          <ItemRate>
            <RateCustom disabled defaultValue={4} />
            trở lên
          </ItemRate>
          <ItemRate>
            <RateCustom disabled defaultValue={3} />
            trở lên
          </ItemRate>
          <ItemRate>
            <RateCustom disabled defaultValue={2} />
            trở lên
          </ItemRate>
          <ItemRate>
            <RateCustom disabled defaultValue={1} />
            trở lên
          </ItemRate>
        </ListRate>
      </ItemFilter>

      <Button typeBtn='primary' style={{ textTransform: 'uppercase' }}>
        Xóa tất cả
      </Button>
    </Container>
  )
}

export default SideFilter
