type ButtonPropsType = {
  name?: string
  callback:()=>void
}

export function Button(props: ButtonPropsType) {
  const onClickHandler = () => {
    props.callback()
  }
  return <button onClick={onClickHandler}>{props.name}</button>
}