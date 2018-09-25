// @flow

import React from 'react';

import OldProduct from 'components/OldProduct';
import NewProduct from 'components/NewProduct';

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.products.map((product) => (
                    this.props.user.app.newProducts
                        ? <NewProduct key={product.id} {...product} />
                        : <OldProduct key={product.id} {...product} />
                ))}
            </div>
        );
    }
}

export default App;
