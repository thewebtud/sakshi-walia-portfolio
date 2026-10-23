import { Component } from 'react'

export default class SectionBoundary extends Component {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error) {
    console.error(`Section "${this.props.name}" failed to render`, error)
  }

  render() {
    if (!this.state.failed) return this.props.children
    return (
      <section className="section container" aria-label={this.props.name}>
        <p role="alert">This section could not be displayed. Please refresh the page or download the resume instead.</p>
      </section>
    )
  }
}
