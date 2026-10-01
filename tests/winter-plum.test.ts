import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import ComponentGallery from '../src/showcases/chinese-winter-plum/components/ComponentGallery.vue'
import App from '../src/App.vue'

describe('朱墙冬梅首页', () => {
  it('从展示登记入口呈现原句，并将网站 footer 放在场景之外', () => {
    const wrapper = mount(App)
    const scene = wrapper.get('#chinese-winter-plum')

    expect(scene.get('blockquote').text()).toBe('在坚冰还盖着北海的时候，我看到了怒放的梅花。')
    expect(scene.find('footer').exists()).toBe(false)
    expect(scene.find('nav').exists()).toBe(false)
    expect(wrapper.find('nav[aria-label="网站导航"]').exists()).toBe(true)
    expect(wrapper.get('#site-footer').text()).toContain('浙ICP备2026034080号-1')
    wrapper.unmount()
  })

  it('落梅仅响应鼠标移动，动画结束后清理粒子', async () => {
    const wrapper = mount(App)
    const scene = wrapper.get('#chinese-winter-plum')
    const bounds = new DOMRect(0, 0, 1200, 720)
    const measure = vi.spyOn(scene.element, 'getBoundingClientRect').mockReturnValue(bounds)

    await scene.trigger('pointermove', { pointerType: 'touch', clientX: 100, clientY: 100 })
    expect(wrapper.findAll('.winter-falling-petals span')).toHaveLength(0)
    await scene.trigger('pointermove', { pointerType: 'mouse', clientX: 160, clientY: 140 })
    const petal = wrapper.get('.winter-falling-petals span')
    await petal.trigger('animationend')
    expect(wrapper.findAll('.winter-falling-petals span')).toHaveLength(0)
    measure.mockRestore()
    wrapper.unmount()
  })

  it('小集的收藏示例可切换，并向辅助技术报告状态', async () => {
    const wrapper = mount(ComponentGallery)
    const button = wrapper.get('button[aria-pressed]')

    expect(button.attributes('aria-pressed')).toBe('false')
    await button.trigger('click')
    expect(button.attributes('aria-pressed')).toBe('true')
    expect(button.text()).toBe('已收进小集 ✓')
    await button.trigger('click')
    expect(button.attributes('aria-pressed')).toBe('false')
    wrapper.unmount()
  })
})
