    function connect (mapStateToProps) {
      return (Component) => {

        class Receiver extends React.Component {
          componentDidMount () {
            const { subscribe } = this.props.store

            this.unsubscribe = subscribe(() => {
              this.forceUpdate()
            })
          }

          componentWillUnmount () {
            this.unsubscribe()
          }

          render() {
            const store = this.props.store
            const state = store.getState()
            const stateNeeded = mapStateToProps(state)
            return <Component {...stateNeeded} >
          }
        }

        class ConnectedComponent extends React.Component {
          render() {
            return (
              <Context.Consumer>
                {(store) => <Receiver >}
              <Context.Consumer>
            )
          }
        }
      }
    }