import React from "react";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import styles from './styles.module.css';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

// import YoutubeEmbed from '/src/components/YoutubeEmbed';
// <YoutubeEmbed source="embed_id" title="Video Title" params="start=17&end=20"></YoutubeEmbed>
export default class YoutubeEmbed extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.videoContainer}>
                <LiteYouTubeEmbed
                    id={this.props.source}
                    params="autoplay=1&autohide=1&showinfo=0&rel=0" {this.props.params}
                    title={this.props.title}
                    poster="maxresdefault"
                    webp
                />
            </div>
        );
    }
}
