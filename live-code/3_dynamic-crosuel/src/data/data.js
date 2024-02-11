function generateRandomKey(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let randomKey = ""

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    randomKey += characters.charAt(randomIndex)
  }

  return randomKey
}

export const data = [
  {
    title: "localhost live ",
    imgUrl:
      "https://staticg.sportskeeda.com/editor/2023/08/63291-16913969569317-1920.jpg",
  },
  {
    title: "lorem ipsum 23",
    imgUrl:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71WwQ5By4SL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "bna the kei",
    imgUrl:
      "https://static.toiimg.com/thumb/msid-104477833,width-1280,height-720,resizemode-4/104477833.jpg",
  },
  {
    title: "itachi ",
    imgUrl:
      "https://dw9to29mmj727.cloudfront.net/promo/2016/6231-SeriesHeaders_HxH_2000x800.jpg",
  },
  {
    title: "Goku Uchiha",

    imgUrl:
      "https://i.redd.it/zenkai-announcement-today-and-most-likely-i-think-its-going-v0-3086970tdp9a1.png?width=256&format=png&auto=webp&s=e81710f7dea459430bd75200a346e74d5cc579ac",
    key: generateRandomKey(5),
  },

  {
    title: "Madara Uchiha",

    imgUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f849f1e6-b991-4b89-bd9b-7b86ae209054/d8xqso3-9dbbfcd8-00ac-4474-8cc3-e61053233dce.png/v1/fill/w_1024,h_1707/itachi_uchiha_render_by_lwisf3rxd_d8xqso3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcwNyIsInBhdGgiOiJcL2ZcL2Y4NDlmMWU2LWI5OTEtNGI4OS1iZDliLTdiODZhZTIwOTA1NFwvZDh4cXNvMy05ZGJiZmNkOC0wMGFjLTQ0NzQtOGNjMy1lNjEwNTMyMzNkY2UucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.DAD5AuG8hX8oZ_BlQCxi8jsEKEIMc2-WHSb92eMiJlI",
    key: generateRandomKey(5),
  },

  {
    title: "Sasuke",
    imgUrl:
      "https://cdn.freelogovectors.net/wp-content/uploads/2012/04/pikachu.png",
    key: generateRandomKey(5),
  },

  {
    title: "Mrs. Dennis Schulist    ",
    imgUrl: "https://www.pngmart.com/files/13/Charmander-PNG-Transparent.png",
    key: generateRandomKey(5),
  },
]

const a = data?.map(d => d?.imgUrl)
console.log(a);