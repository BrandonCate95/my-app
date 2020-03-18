import * as React from 'react'
import * as enzyme from 'enzyme'
import Header from './Header'

it('renders the correct text when given intial query', () => {
  const header = enzyme.shallow(<Header initalQueryString='Daniel' />)
  expect(header.find(".search-input").props().value).toEqual('Daniel')
})