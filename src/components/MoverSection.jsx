import React from 'react'

import { Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import Logo from '../assets/AMSLogo.jpg'
import Header from './Header'
import '@fontsource/roboto';

const MoverSection = (props) => {
    console.log("response--->",props.data)
    
    return (
        <View style={styles.viewepad}>
            <Header
                title="Uniform Household Goods Bill of Lading"
                bolText={"(BOL No. 8889999)"}
                pageText={"Page 1 of 6"}/>
            <View style={styles.viewmain}>

                <View style={styles.viewtab}>
                    <Image src={Logo} style={{ width: 240 }} />
                </View>
                <View style={styles.viewtabnext}>
                    <Text style={styles.txtMover}>Mover (Carrier)</Text>
                    <Text style={styles.mxas}>All My Sons Moving & Storage of Dallas, LLC</Text>
                    <Text style={styles.mxas}>2400 Old Mill Rd., Carrollton, TX 75007</Text>
                    <Text style={styles.mxas}>972-367-1095</Text>
                    <View style={styles.viewint} >
                        <View style={styles.viewintf}>
                            <Text style={styles.intrastate}>Intrastate #:</Text>
                            <Text style={styles.intrastate}>TxDMV No. 000531426B</Text>
                        </View>
                        <View style={styles.viewints}>
                            <Text style={styles.intrastate}>AMS Truck #:</Text>
                            <Text style={styles.intrastate}>DAL 126</Text>
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
        // fontFamily: 'Roboto',
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
    },
    viewtabnext:{
        width: '50%', 
        justifyContent: "left", 
        alignItems: 'left', 
        textAlign: 'left'
    },
    viewint:{
        marginTop: "5px", display: 'flex'
    },
    viewintf:{
        display: 'flex', flexDirection: 'row', paddingBottom: "4px"
    },
    viewints:{
        display: 'flex', flexDirection: 'row'
    },
    txtMover:{
        color: "rgba(0, 0, 0, 0.54)",
        fontSize: 12,
        // fontFamily: "Roboto, sans-serif",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: 1.6,
        letterSpacing: 0.4,
    },
    mxas:{
        color: "rgba(0, 0, 0, 0.87)",
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 1.6,
        letterSpacing: 0.4
    },
    
    intrastate:{
        color: "rgba(0, 0, 0, 0.87)",
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 1,
        letterSpacing: 0.4
    }
});