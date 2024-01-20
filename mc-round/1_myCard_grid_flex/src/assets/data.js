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
    username: "Goku Uchiha",
    email: "goku@april.biz",
    phone: "1-770-736-8031 x56442",
    link: "http://goku.com",
    avatarUrl: "https://i.redd.it/zenkai-announcement-today-and-most-likely-i-think-its-going-v0-3086970tdp9a1.png?width=256&format=png&auto=webp&s=e81710f7dea459430bd75200a346e74d5cc579ac",
    key: generateRandomKey(5),
  },

  {
    username: "Madara Uchiha",
    email: "Madara@april.biz",
    phone: "1-770-736-8031",
    link: "http://hildegard.org",
    avatarUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f849f1e6-b991-4b89-bd9b-7b86ae209054/d8xqso3-9dbbfcd8-00ac-4474-8cc3-e61053233dce.png/v1/fill/w_1024,h_1707/itachi_uchiha_render_by_lwisf3rxd_d8xqso3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcwNyIsInBhdGgiOiJcL2ZcL2Y4NDlmMWU2LWI5OTEtNGI4OS1iZDliLTdiODZhZTIwOTA1NFwvZDh4cXNvMy05ZGJiZmNkOC0wMGFjLTQ0NzQtOGNjMy1lNjEwNTMyMzNkY2UucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.DAD5AuG8hX8oZ_BlQCxi8jsEKEIMc2-WHSb92eMiJlI",
    key: generateRandomKey(5),
  },

  {
    username: "Sasuke",
    email: "Sasuke@uc.biz",
    phone: "1-463-123-4447",
    link: "http://kale.biz    ",
    avatarUrl: "https://cdn.freelogovectors.net/wp-content/uploads/2012/04/pikachu.png",
    key: generateRandomKey(5),
  },

  {
    username: "Mrs. Dennis Schulist    ",
    email: "Karley_Dach@jasper.info    ",
    phone: "210.067.6132    ",
    link: "http://hildegard.org",
    avatarUrl: "https://www.pngmart.com/files/13/Charmander-PNG-Transparent.png",
    key: generateRandomKey(5),
  },

  {
    username: "Clementina DuBuque    ",
    phone: "024-648-3804    ",
    link: "http://ambrose.net",
    email: "jestrada@gmail.com",
    avatarUrl: "",
    key: generateRandomKey(5),
  },
  {
    username: "Clementina DuBuque    ",
    email: "Rey.Padberg@karina.biz",
    phone: "024-648-3804    ",
    link: "http://ambrose.net",
    avatarUrl: "",
    key: generateRandomKey(5),
  },
  {
    username: "Goku    ",
    email: "Goku@dbz.biz",
    phone: "024-321-3804    ",
    link: "http://goku.com",
    avatarUrl: "",
    key: generateRandomKey(5),
  },
  {
    username: "Chelsey Dietrich    ",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289    ",
    link: "http://demarco.info    ",
    avatarUrl: "",
    key: generateRandomKey(5),
  },
]
