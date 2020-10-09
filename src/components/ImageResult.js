import React, { useState } from "react"

import { makeStyles } from "@material-ui/core/styles"

import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"

import IconButton from "@material-ui/core/IconButton"
import InfoIcon from "@material-ui/icons/Info"

import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: "rgba(255,255,255,0.5)",
  },
}))

const ImageResults = ({ images }) => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const [curimg, setCurimg] = useState("")

  const handleOpen = (img) => {
    setOpen(true)
    setCurimg(img)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={400} cols={3}>
        {images.map((img) => (
          <GridListTile key={img.id}>
            <img src={img.largeImageURL} alt="" />
            <GridListTileBar
              title={img.tags}
              subtitle={
                <span>
                  {" "}
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton
                  onClick={() => handleOpen(img.largeImageURL)}
                  aria-label={`info about ${img.tags}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="lg">
        <DialogContent>
          <img src={curimg} alt="" style={{ width: "100%" }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ImageResults
