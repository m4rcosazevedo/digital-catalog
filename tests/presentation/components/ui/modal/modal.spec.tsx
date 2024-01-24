import { Modal } from '@/presentation/components/ui'
import { render, screen } from '@testing-library/react'

describe('Modal', () => {
  it('should render', () => {
    render(
      <Modal open onClose={jest.fn()}>
        modal component
      </Modal>
    )

    expect(screen.getByText(/modal component/i)).toBeInTheDocument()
  })
})
