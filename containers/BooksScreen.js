import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { books } from '../Data';
import Products from '../components/Products';

class BooksScreen extends Component {
  static navigationOptions= {
    headerTitle: 'Books',
  };

  render() {
    return (
      <View style={styles.container}>
        <Products products = {books} onPress={this.props.addItemToCart}/>
      </View>
    );
  }

}

const mapDispatchToProps = (dispatch) =>{
  return {
    addItemToCart: (product) => dispatch({type: 'ADD_TO_CART',
    payload: product})
  };
}
export default connect(null, mapDispatchToProps)(BooksScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }
    });
