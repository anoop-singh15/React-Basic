import Greet from "../Greet"

export const CustomComponent = (props:React.ComponentProps<typeof Greet>) => {
  return (
    <div>CustomComponent {props.isLoggedIn} {props.name}</div>
  )
}
