
import PropTypes from "prop-types"
import { ErrorMensageStyles } from "./styles"

export function ErrorMenssage({ children }) {

  return (

    <ErrorMensageStyles>
      {children}
    </ErrorMensageStyles>

  )
}

ErrorMenssage.propTypes = {
  children: PropTypes.string
}
