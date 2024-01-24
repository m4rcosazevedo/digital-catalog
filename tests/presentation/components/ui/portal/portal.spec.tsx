import { Portal } from '@/presentation/components/ui'
import { render, within } from '@testing-library/react'

describe('Portal', () => {
  it('should render children inside root element', () => {
    const root = document.createElement('div')

    render(<Portal root={root}>portal component</Portal>)

    const { getByText } = within(root)

    expect(root).toContainElement(getByText('portal component'))
  })
})
