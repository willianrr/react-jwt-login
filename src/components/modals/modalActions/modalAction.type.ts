export interface ModalActionsProps {
  title: string
  description?: string
  primaryAction: () => void
  primaryText: string
  secondaryAction?: () => void
  secondaryActionText?: string
}
