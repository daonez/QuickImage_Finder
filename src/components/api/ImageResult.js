// import React, { useState } from "react"

// const ImageResults = ({ images }) => {
//   const classes = useStyles()

//   const [open, setOpen] = useState(false)
//   const [curimg, setCurimg] = useState("")

//   const handleOpen = (img) => {
//     setOpen(true)
//     setCurimg(img)
//   }
//   const handleClose = () => {
//     setOpen(false)
//   }

//   return (
//     <div className={classes.root}>
//       <GridList cellHeight={400} cols={3}>
//         {images.map((img) => (
//           <GridListTile key={img.id}>
//             <img src={img.largeImageURL} alt="" />
//             <GridListTileBar
//               title={img.tags}
//               subtitle={
//                 <span>
//                   {" "}
//                   by <strong>{img.user}</strong>
//                 </span>
//               }
//               actionIcon={
//                 <IconButton
//                   onClick={() => handleOpen(img.largeImageURL)}
//                   aria-label={`info about ${img.tags}`}
//                   className={classes.icon}
//                 >
//                   <InfoIcon />
//                 </IconButton>
//               }
//             />
//           </GridListTile>
//         ))}
//       </GridList>
//       <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="lg">
//         <DialogContent>
//           <img src={curimg} alt="" style={{ width: "100%" }} />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   )
// }

// export default ImageResults
