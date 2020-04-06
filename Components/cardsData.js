import React, { Component } from 'react'
import { View } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper';
import styles from './css';


export default class CardsData extends Component {

    contentRelating=()=>{
        
        // this.props.navigation.navigate('ContentRelating')
        alert("wellcome")
    }


    render() {
        return (
            <View>
                {/* ######################## CARDS ############################ */}
                <View>
                    <View style={styles.mainSection}>
                    
                    <Card onPress={this.contentRelating} style={styles.cardStyling}>
                        <Card.Content >
                        <Title style={styles.cardTile}>Folder Name</Title>
                        <Paragraph style={styles.cardDescription}>Description</Paragraph>
                        </Card.Content>
                        {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                    </Card>
                    
                    </View>
                </View>
            </View>
        )
    }
}
