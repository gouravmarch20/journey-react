export const  data = {
    USA: [
      {
        state: "usa1",
      },
      {
        state: "usa2",
      },
    ],
    India: [
      {
        state: "india1",
      },
      {
        state: "India2",
      },
    ],
  }
  console.log(data);
  
  // console.log(Object.keys(data));
  console.log(data["USA"].map(v => console.log(v)) );