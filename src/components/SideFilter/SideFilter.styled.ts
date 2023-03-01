import styled, { css } from 'styled-components'
import colors from 'constants/colors'
import { Rate } from 'antd'
import breakPonits from 'constants/breakPoints'

export const Container = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  @media screen and (max-width: ${breakPonits.md}) {
    display: none;
  }
`
export const BorderBottom = css`
  border-bottom: 1px solid ${colors['gray-light-2']};
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  font-size: 1.5rem;
`
export const ItemFilter = styled.div`
  ${BorderBottom}
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: ${(props: { gap?: string }) => props.gap || '2rem'};
`
export const TitleFilter = styled.div``
export const ContentPriceFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
export const Separator = styled.div`
  width: 10px;
  height: 2px;
  border-radius: 2px;
  background-color: ${colors['gray-text']};
  flex-shrink: 0;
`
export const ItemRate = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1.2rem;
  background-color: ${({ active }: { active?: boolean }) => (active ? `${colors['gray-light-3']}` : 'transparent')};
  border-radius: 2rem;
  width: fit-content;
  font-size: 1.3rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    cursor: pointer;
  }
`
export const RateCustom = styled(Rate)`
  font-size: 1.4rem;
  margin-bottom: 4px;
  color: ${colors.yellow};

  :where(.css-dev-only-do-not-override-sk7ap8).ant-rate .ant-rate-star:not(:last-child) {
    margin-inline-end: 4px;
  }
`
export const ListRate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`
