<Flex
direction="column"
// align="center"
// // justify="center"
// width="100%"
// style={{
//   padding: "1rem",
//   backgroundColor: "#fafafa",
//   borderRadius: "12px",
//   boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
// }}
>
{/* Hold Phrase */}
<div
  style={{
    width: "90%",
    maxWidth: "600px",
    textAlign: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "#333",
    marginBottom: "1rem",
  }}
>
  <JumpingBallLoading />
  {!loading &&
  loadingDetails?.type === "tool" &&
  loadingDetails?.hold_phrase
    ? loadingDetails.hold_phrase
    : "Thinking..."}{" "}
</div>

{/* Stream Image */}
{/* <Flex
  justify="center"
  align="center"
  width="100%"
  overflowX="auto"
  style={{
    padding: "0.5rem",
  }}
>
  <img
    src={imageStream?.currentImg}
    alt="crickbuzz"
    style={{
      width: "180px",
      height: "170px",
      objectFit: "contain",
      border: "1px solid #eee",
      borderRadius: "8px",
      backgroundColor: "#fff",
    }}
  />
</Flex> */}
</Flex>