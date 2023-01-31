import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

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
import type { FilterSchema } from 'utils/rules'
import { filterSchema } from 'utils/rules'
import InputNumber from 'components/InputNumber'
import { ErrorMessage } from 'globalStyle.styled'

const priceSchema = filterSchema.pick(['price_max', 'price_min'])
type PriceFilter = Pick<FilterSchema, 'price_max' | 'price_min'>

const SideFilter = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    trigger
  } = useForm<PriceFilter>({
    resolver: yupResolver(priceSchema),
    defaultValues: {
      price_max: '',
      price_min: ''
    }
  })

  const error = errors.price_max?.message || errors.price_min?.message

  const onSubmit = (data: PriceFilter) => {
    console.log(data)
  }

  return (
    <Container>
      <Title>
        <FontAwesomeIcon icon={faFilter} />
        BỘ LỌC TÌM KIẾM
      </Title>
      <ItemFilter as={'form'} onSubmit={handleSubmit(onSubmit)} gap='1rem'>
        <TitleFilter>Khoảng Giá</TitleFilter>
        <ContentPriceFilter>
          <Controller
            control={control}
            name='price_min'
            render={({ field }) => {
              return (
                <InputNumber
                  {...field}
                  maxValue={'100'}
                  placeholder='₫ TỪ'
                  style={{ textAlign: 'left' }}
                  onChange={(event) => {
                    field.onChange(event)
                    trigger('price_max')
                  }}
                />
              )
            }}
          />

          <Separator />

          <Controller
            control={control}
            name='price_max'
            render={({ field }) => {
              return (
                <InputNumber
                  {...field}
                  placeholder='₫ TỪ'
                  style={{ textAlign: 'left' }}
                  onChange={(event) => {
                    field.onChange(event)
                    trigger('price_max')
                  }}
                />
              )
            }}
          />
        </ContentPriceFilter>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button type='submit' typeBtn='primary' style={{ textTransform: 'uppercase' }}>
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
