'use client'

import { ModalActionsProps } from './modalAction.type'

const ModalActions = ({
  title,
  description,
  primaryAction,
  primaryText,
  secondaryAction,
  secondaryActionText,
}: ModalActionsProps) => {
  return (
    <div className="fixed left-0 top-0 z-10 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5">
      <div className="w-full max-w-142.5 rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:px-17.5 md:py-15">
        <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
          {title}
        </h3>
        <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>
        <p className="mb-10 font-medium">{description}</p>
        <div className="-mx-3 flex flex-wrap gap-y-4">
          <div className="w-full px-3 2xsm:w-1/2">
            {secondaryActionText && (
              <button
                onClick={secondaryAction}
                className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1"
              >
                {secondaryActionText}
              </button>
            )}
          </div>
          <div className="w-full px-3 2xsm:w-1/2">
            {primaryText && (
              <button
                onClick={primaryAction}
                className="block w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90"
              >
                {primaryText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalActions
