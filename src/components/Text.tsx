export const Text = (props:{text : string}) => {
  const str = props.text.split("\n");

  return(
    <div key={"Text"}>
      <p>
      {
        str.map(element => {
          return(
            <span key="">{element}<br/></span>
          )
        })
      }
      </p>
    </div>
  )
}