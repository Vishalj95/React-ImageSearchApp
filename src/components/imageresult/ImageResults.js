import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GridList } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import ZoomIn from 'material-ui/svg-icons/action/zoom-in'
import Dialog from 'material-ui/Dialog'
import FlateButton from 'material-ui/FlatButton'
import GridTile from 'material-ui/GridList/GridTile';

class ImageResults extends Component {
    state = {
        open: false,
        currentImg: ''
    }

    handleOpen = img => {
        this.setState({ open: true, currentImg: img });
    }

    handleClose = () => {
        this.setState({ open: false });
    }


    render() {
        let ImagesListContent;
        console.log(this.props.images);
        const { images } = this.props;
        console.log("In image " + images);

        if (images) {
            ImagesListContent = (
                <GridList cols={3} >
                    {images.map(img => (
                        <GridTile
                            title={img.tags}
                            key={img.id}
                            subtitle={
                                <span>
                                    by <strong>{img.user}</strong>
                                </span>
                            }
                            actionIcon={
                                <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                                    <ZoomIn color="white" />
                                </IconButton>
                            }
                        >
                            <img src={img.previewURL} alt="" />
                        </GridTile>
                    ))}
                </GridList >
            )
        } else {
            ImagesListContent = null;
        }

        const actions = [
            <FlateButton label="Close" primary={true} onClick={this.handleClose} />
        ]

        return (
            <div>
                {ImagesListContent}
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose} >
                    <img src={this.state.currentImg} alt="" style={{ width: '100%' }} />
                </Dialog>
            </div>
        )
    }
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImageResults;