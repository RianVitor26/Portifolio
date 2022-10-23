import * as C from "./styles"

type cardProps = {
  src: string,
  alt: string,
  title: string,
  stacks: string,
  desc: string,
  link: string
}

export const Card = ({ src, alt, title, stacks, desc, link}: cardProps) => {
  return (
    <C.Card>
      <C.CardImage>
        <img src={src} alt={alt} />
      </C.CardImage>
      <C.CardContent>
        <h1>{title}</h1>
        <h2>{stacks}</h2>
        <p>{desc}</p>
      </C.CardContent>
      <a href={link}>Go to Project</a>
    </C.Card>
  )
}
