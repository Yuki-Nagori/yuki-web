import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import App from '../src/App.vue'

describe('网站 footer', () => {
  it('在新页面保留动态年份、版权和备案链接', () => {
    const wrapper = mount(App)
    const footer = wrapper.get('footer')

    expect(footer.text()).toContain(`© ${new Date().getFullYear()} Yuki 版权所有`)
    const link = footer.get('a')
    expect(link.text()).toBe('浙ICP备2026034080号-1')
    expect(link.attributes('href')).toBe('https://beian.miit.gov.cn')
    expect(link.attributes('target')).toBe('_blank')
    expect(link.attributes('rel')).toBe('noopener noreferrer')
    wrapper.unmount()
  })
})
