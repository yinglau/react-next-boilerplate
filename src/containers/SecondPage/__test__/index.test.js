/**
 * SecondPage component test
 * author: winson
 * email: 501285598@qq.com
 */

import "@babel/polyfill"
import React from 'react'
import { shallow } from 'enzyme'

import { SecondPage as Component} from '../'

describe('test SecondPage', () => {
  it('instance of SecondPage', () => {
    const props = {
      dispatch: () => {}
    }
    const wrapper = shallow(<Component {...props} />)
    const instance = wrapper.instance()
    expect(instance).toBeInstanceOf(Component)
  })
})
