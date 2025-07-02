import {
  type Contact as ContactType,
} from "@features/transactions/hooks/useRecentContacts"

function Contact({ name, phone }: ContactType) {
  return (
    <div>
      <strong>
        {name}
      </strong>
      <span>
        {phone}
      </span>
    </div>
  )
}

export default Contact
