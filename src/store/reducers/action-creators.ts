import { AuthActionCreators } from "./auth/action-crearots"
import { EventActionCreators } from "./event/action-creators"

export const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreators
}