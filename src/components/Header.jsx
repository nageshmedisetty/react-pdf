import React from 'react'
import { Text, View } from '@react-pdf/renderer';



const Header = ({ title = "Uniform Household Goods Bill of Lading", bolText, pageText }) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#3A7C63', color: '#fff', justifyContent: 'space-between', padding: 12, fontSize:14 }}>
            <View>
                <Text className={"header-title"}>{title}</Text>
            </View>
            <View>
                <Text className={"header-title"}>{bolText}</Text>
            </View>
            <View>
                <Text className={"header-title"}>{pageText}</Text>
            </View>
        </View>
    )
}

export default Header