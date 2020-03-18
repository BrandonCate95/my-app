import * as React from 'react'
import './Header.css'
import { SyntheticEvent } from '../types/SyntheticEvent '

export interface Props {
  initalQueryString?: string | number
  getMovie?: any
}

interface State {
    queryString: string | number
}

class Header extends React.Component<Props> {

    state: State = {
        queryString: this.props.initalQueryString || '',
    }

    handleChange = (e: SyntheticEvent): void => {
        this.setState({queryString: e.target.value})
    }

    handleSearch = (): void => {
        this.props.getMovie()
    }

    render() {
      const { queryString } = this.state

      return (
        <header className="search-header">
            <input 
                className="search-input"
                type="text"
                value={queryString}
                onChange={this.handleChange.bind(this)}
            />
            <button 
                className="search-button"
                onClick={this.handleSearch.bind(this)}
            >search</button>
        </header>
      )
    }
  }

export default Header