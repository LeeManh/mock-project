import routePaths from 'constants/routePaths'
import { useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import useQueryParams from './useQueryParams'

const useSearchProduct = () => {
  const navigate = useNavigate()
  const queryParams = useQueryParams()

  const [keyword, setKeyword] = useState(queryParams?.keyword || '')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!keyword.trim()) return

    navigate({
      pathname: routePaths.searchProduct,
      search: createSearchParams({ keyword: keyword.trim() }).toString()
    })
  }

  return { keyword, setKeyword, onChange, onSearch }
}

export default useSearchProduct
