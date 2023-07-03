import React from 'react'
import { Text, View } from '@react-pdf/renderer';

const Header = ({ title = "Uniform Household Goods Bill of Lading", bolText, pageText }) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#3A7C63', color: '#fff', justifyContent: 'space-between', padding: 12 }}>
            <View>
                <Text>{title}</Text>
            </View>
            <View>
                <Text>{bolText}</Text>
            </View>
            <View>
                <Text>{pageText}</Text>
            </View>
        </View>
    )
}

export default Header