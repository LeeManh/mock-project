import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate, useLocation, createSearchParams } from 'react-router-dom'

import type { FilterSchema } from 'utils/rules'
import Button from 'components/Button'
import { filterSchema } from 'utils/rules'
import InputNumber from 'components/InputNumber'
import useFilterPrice from 'hooks/useFilterPrice'
import { ErrorMessage } from 'globalStyle.styled'
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
import useQueryConfig from 'hooks/useQueryConfig'

const priceSchema = filterSchema.pick(['price_max', 'price_min'])
type PriceFilter = Pick<FilterSchema, 'price_max' | 'price_min'>

const SideFilter = () => {
  const {
    handleSubmit: handleSubmitFilterPrice,
    control,
    formState: { errors: errorsFilterPrice },
    trigger
  } = useForm<PriceFilter>({
    resolver: yupResolver(priceSchema),
    defaultValues: {
      price_min: '',
      price_max: ''
    }
  })
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const queryConfig = useQueryConfig()

  const currentFilterRating = queryConfig.rating_filter || null
  const isActiceRatingItem = (val: number) => {
    if (currentFilterRating && +currentFilterRating === val) {
      return true
    }
    return false
  }

  const error = errorsFilterPrice.price_max?.message || errorsFilterPrice.price_min?.message

  const { onSubmit: onSubmitFilterPrice } = useFilterPrice()

  return (
    <Container>
      <Title>
        <FontAwesomeIcon icon={faFilter} />
        BỘ LỌC TÌM KIẾM
      </Title>
      <ItemFilter as={'form'} onSubmit={handleSubmitFilterPrice(onSubmitFilterPrice)} gap='1rem'>
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
                  style={{ textAlign: 'left', fontSize: '1.2rem' }}
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
                  style={{ textAlign: 'left', fontSize: '1.2rem' }}
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

      <form>
        <ItemFilter>
          <TitleFilter>Đánh Giá</TitleFilter>
          <ListRate>
            {Array.from({ length: 5 }, (_, k) => k + 1)
              .reverse()
              .map((val) => (
                <ItemRate
                  active={isActiceRatingItem(val)}
                  key={val}
                  onClick={() =>
                    navigate({
                      pathname,
                      search: createSearchParams({
                        ...(queryConfig as Record<string, string>),
                        rating_filter: String(val),
                        page: '1'
                      }).toString()
                    })
                  }
                >
                  <RateCustom disabled defaultValue={val} />

                  {val !== 5 && 'trở lên'}
                </ItemRate>
              ))}
          </ListRate>
        </ItemFilter>

        <Button
          type='submit'
          typeBtn='primary'
          style={{ textTransform: 'uppercase', width: '100%', marginTop: '2rem' }}
          onClick={() => {
            navigate(pathname)
          }}
        >
          Xóa tất cả
        </Button>
      </form>
    </Container>
  )
}

export default SideFilter
