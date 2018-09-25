// @flow

import React from 'react';
import Product from 'components/Product';
import Error from 'components/Error';

class App extends React.Component<Props, State> {
    state = {
      products: [],
      error: null,
    };

	componentDidMount() {
      axios.get('/api/products')
      	.then(({ products }) => {
        	this.setState({ products });
      	})
      	.catch(({ error }) => {
        	this.setState({ error });
      	});
    }

    render() {
      return (
        <div>
          {this.state.error
            ? <Error>{this.state.error}</Error>
            : this.state.products.map((product) => (
            	<Product key={product.id} {...product} />
            ))
           }
        </div>
      );
    }
}

export default App;
