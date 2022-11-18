export default function Hero (props) {
  const {title, subTitle} = props;
  return (
    <div>
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
    </div>
  )
}