export const Text = (props:{text : string}) => {
  const str = props.text.split("\n");

  return(
    <div key={"Text"}>
      {
        str.map(element => {
          return(
            <p key={"Text p"}>{element}</p>
          )
        })
      }
    </div>
  )
}