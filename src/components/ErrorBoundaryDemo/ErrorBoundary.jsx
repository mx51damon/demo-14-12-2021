import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null, errorInfo: null };
  }

  static defaultProps = {
    children: <></>,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.errorInfo)
      return (
        <details>
          <h3>Something went wrong ..</h3>
          <p>{this.state.error?.toString()}</p>
          <p>{this.state.errorInfo?.componentStack}</p>
        </details>
      );
    return this.props.children;
  }
}
