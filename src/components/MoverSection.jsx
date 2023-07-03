import React from 'react'
import { Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import Logo from '../assets/AMSLogo.jpg'
import Header from './Header'

const MoverSection = (props) => {
    console.log("response--->",props.data)
    
    return (
        <View style={styles.viewepad}>
            <Header
                title="Uniform Household Goods Bill of Lading"
                bolText={"(BOL No. 8889999)"}
                pageText={"Page 1 of 6"} />
            <View style={styles.viewmain}>

                <View style={styles.viewtab}>
                    <Image src={Logo} style={{ width: 240 }} />
                </View>
                <View style={styles.viewtab}>
                    <Text style={{ color: "#757575", fontWeight: 500, paddingBottom: "4px" }}>Mover (Carrier)</Text>
                    <Text style={{ fontWeight: 500, fontSize: 14 }}>All My Sons Moving & Storage of Dallas, LLC</Text>
                    <Text >2400 Old Mill Rd., Carrollton, TX 75007</Text>
                    <Text >972-367-1095</Text>
                    <View style={{ marginTop: "5px", display: 'flex' }} >
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 500 }}>Intrastate #:</Text>
                            <Text style={{ marginLeft: 12 }}>TxDMV No. 000531426B</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 500 }}>AMS Truck #:</Text>
                            <Text style={{ marginLeft: 12 }}>DAL 126</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
       
    )
}

export default MoverSection


const styles = StyleSheet.create({
    viewepad: {
        padding:0
    },
    viewmain:{
        display: 'flex', 
        flexDirection: 'row', 
        color: '#000', 
        padding: 12,
        justifyContent: 'space-between'
    },
    viewtab:{
        width: '50%', 
        justifyContent: "center", 
        alignItems: 'center', 
        textAlign: 'center'
    }
    
});