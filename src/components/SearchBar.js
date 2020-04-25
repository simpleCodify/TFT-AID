import React, {Component} from 'react';
import { Form } from 'react-bootstrap';

class SearchBar extends Component {
    render() {
        return (

            <Form className="mx-auto my-5 col-md-4">
                <Form.Control className="text-center" type="text" placeholder="Enter Champion Name or Synergy" onChange={this.props.search} />
                <Form.Text className="text-muted text-center">
                    Search / Filter the Champions by Name or Synergy
                </Form.Text>
            </Form>
        )
    }
}

export default SearchBar;