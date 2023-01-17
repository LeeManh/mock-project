import { Pagination } from 'antd'
import colors from 'constants/colors'
import styled from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const PaginationCustom = styled(Pagination)`
  li {
    width: 4rem;
    height: 3rem;
    font-size: 1.6rem;
    font-weight: 500;

    &:not(:last-child) {
      margin-right: 1.5rem;
    }

    &.ant-pagination-item {
      a {
        color: ${colors['gray-3']};
      }
    }

    &.ant-pagination-item-active {
      border: none;
      outline: none;
      border-radius: 2px;
      background-color: ${colors.orange};
      color: ${colors.white};

      &:hover {
        a {
          color: inherit;
        }
      }

      a {
        color: inherit;
      }
    }
  }
  .anticon {
    font-size: 1.4rem;
  }
`
