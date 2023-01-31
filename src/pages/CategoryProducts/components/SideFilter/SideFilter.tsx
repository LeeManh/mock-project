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
import useFilterPrice from 'hooks/useFilterPrice'

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
      price_min: '',
      price_max: ''
    }
  })

  const error = errors.price_max?.message || errors.price_min?.message

  const { onSubmit } = useFilterPrice()

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
                  onChange={(event) => {
                    field.onChange(event)
                    trigger('price_max')
                  }}
                  placeholder='₫ TỪ'
                  style={{ textAlign: 'left' }}
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
                  onChange={(event) => {
                    field.onChange(event)
                    trigger('price_min')
                  }}
                  placeholder='₫ TỪ'
                  style={{ textAlign: 'left' }}
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
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <ItemRate key={index}>
                <RateCustom disabled defaultValue={5 - index} />

                {index !== 0 && 'trở lên'}
              </ItemRate>
            ))}
        </ListRate>
      </ItemFilter>

      <Button typeBtn='primary' style={{ textTransform: 'uppercase' }}>
        Xóa tất cả
      </Button>
    </Container>
  )
}

export default SideFilter
