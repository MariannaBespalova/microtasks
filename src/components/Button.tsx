type ButtonPropsType = {
  name?: string
  callback:()=>void
}

export function Button(props: ButtonPropsType) {
  const onClickButtonHandler = () => {
    props.callback()
  }
  return <button onClick={onClickButtonHandler}>{props.name}</button>
}