export const RECENT_CONTACTS_LIMIT = 6 as const
export const RECENT_CONTACTS_ERROR_MESSAGE = "Failed to fetch recent contacts!" as const
export const RECENT_CONTACTS_EMPTY_MESSAGE = "No recent contacts" as const

export const SCANNER_DECORATION_BORDER_CLASSES = [
  "-top-4 -left-4 border-t-6 border-l-6 border-t-primary-default border-l-primary-default rounded-tl-md",
  "-top-4 -right-4 border-t-6 border-r-6 border-t-primary-default border-r-primary-default rounded-tr-md",
  "-bottom-4 -right-4 border-b-6 border-r-6 border-b-primary-default border-r-primary-default rounded-br-md",
  "-bottom-4 -left-4 border-b-6 border-l-6 border-b-primary-default border-l-primary-default rounded-bl-md",
] as const
