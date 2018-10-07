import * as React from 'react'
import './Hello.css'

export interface Props {
  name: string
  enthusiasmLevel?: number
}

interface State {
    currentEnthusiasm: number;
}

class Hello extends React.Component<Props, State> {

    state = {
        currentEnthusiasm: this.props.enthusiasmLevel || 1
    }

    onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
    onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

    updateEnthusiasm(currentEnthusiasm: number) {
        this.setState({ currentEnthusiasm });
    }

    render() {
      const { name, enthusiasmLevel = 1 } = this.props
  
      if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D')
      }
  
      return (
        <div className="hello">
          <div className="greeting">
            Hello {name + getExclamationMarks(enthusiasmLevel)}
          </div>
        </div>
      );
    }
  }

export default Hello

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!')
}