import React from "react";
import CodeBlock from '@theme/CodeBlock';
import 'cross-fetch/polyfill';

//Usage
// import FileFetch from '/src/components/FileFetch';
// <FileFetch url="https://raw.githubusercontent.com/*/config.yml"></FileFetch>
export default class FileFetch extends React.Component {
    constructor(props) {
        super(props);

        this.state = { text: "Fetching latest config.." };

        if(!this.props.url) {
            this.state.text = "Missing URL property";
            return;
        }

        fetch(this.props.url)
            .then(response => response.text())
            .then(response => {
                this.setState({text: response})
            })
            .catch(e => this.setState({text: "Error: " + e}));
    }
    render() {
        return (
            <CodeBlock language="yaml">{this.state.text}</CodeBlock>
        );
    }
}
