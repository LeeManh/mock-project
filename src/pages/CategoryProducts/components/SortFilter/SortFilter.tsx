import styled from 'styled-components'
import { useNavigate, createSearchParams, useLocation } from 'react-router-dom'

import Select from 'components/Select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Button from 'components/Button'
import breakPonits from 'constants/breakPoints'
import useQueryConfig from 'hooks/useQueryConfig'
import { useMemo } from 'react'

const Container = styled.div`
  padding: 1.5rem 2rem;
  background-color: #ededed;
  border-radius: 2px;

  @media screen and (max-width: ${breakPonits.md}) {
    display: none;
  }
`
const ListSortButton = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const SortFilter = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const queryConfig = useQueryConfig()

  const tittleSortPrice =
    queryConfig.sort_by === 'price'
      ? queryConfig.order === 'desc'
        ? 'Giá : Cao đến Thấp'
        : 'Giá : Thấp đến Cao'
      : 'Giá'

  const items = useMemo(
    () => [
      {
        key: '1',
        label: <div>Giá : Thấp đến Cao</div>,
        onClick: () => {
          navigate({
            pathname,
            search: createSearchParams({
              ...(queryConfig as Record<string, string>),
              page: '1',
              order: 'asc',
              sort_by: 'price'
            }).toString()
          })
        }
      },
      {
        key: '2',
        label: <div>Giá : Cao đến Thấp</div>,
        onClick: () => {
          navigate({
            pathname,
            search: createSearchParams({
              ...(queryConfig as Record<string, string>),
              page: '1',
              order: 'desc',
              sort_by: 'price'
            }).toString()
          })
        }
      }
    ],
    [navigate, pathname, queryConfig]
  )

  return (
    <Container>
      <ListSortButton>
        <div>Sắp xếp theo</div>

        <Button
          typeBtn='primary'
          size='default'
          active={queryConfig.sort_by === 'ctime'}
          onClick={() => {
            navigate({
              pathname,
              search: createSearchParams({
                ...(queryConfig as Record<string, string>),
                page: '1',
                sort_by: 'ctime'
              }).toString()
            })
          }}
        >
          Mới nhất
        </Button>
        <Button
          typeBtn='primary'
          size='default'
          active={queryConfig.sort_by === 'sales'}
          onClick={() => {
            navigate({
              pathname,
              search: createSearchParams({
                ...(queryConfig as Record<string, string>),
                page: '1',
                sort_by: 'sales'
              }).toString()
            })
          }}
        >
          Bán chạy
        </Button>
        <Select items={items}>
          <Button
            typeBtn='primary'
            active={queryConfig.sort_by === 'price'}
            style={{ width: '20rem', justifyContent: 'space-between' }}
          >
            {tittleSortPrice}
            <FontAwesomeIcon icon={faChevronDown} />
          </Button>
        </Select>
      </ListSortButton>
    </Container>
  )
}

export default SortFilter
