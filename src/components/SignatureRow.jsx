import React from 'react'
import { Text, View, Link, Image, StyleSheet } from '@react-pdf/renderer';
import signature from '../assets/signature.png'

const SignatureRow = () => {
    return (
        <View style={styles.viewTop}>
            <View style={{ width: "78%" }}>
                <View style={styles.headTitle}>
                    <View style={{}}>
                        <Image src={signature} style={{ height: 60, width: 200, paddingLeft:10 }} />
                        <View style={{ paddingBottom: 4, paddingTop: 4 }}>
                            <View style={{ borderTop: "1px solid #a1a1a1" }} />
                        </View>
                    </View>
                    <View style={{}}>
                        <Text style={styles.txt10}>Jane Haywood, Shipper{"\n"}Signature</Text>
                    </View>
                </View>
            </View>
            <View style={{ width: "20%" }}>
                <View style={styles.headTitle}>
                    <View style={{}}>
                        <View style={{
                            display: 'flex', flexDirection: 'column', color: '#000',
                            justifyContent: 'space-between', height: 60
                        }}>
                            <Text>{" "}</Text>
                            <Text style={{ paddingLeft: 8, paddingRight: 8, fontSize:12 }}>1/7/2022</Text>
                        </View>

                        <View style={{ paddingBottom: 4, paddingTop: 4 }}>
                            <View style={{ borderTop: "1px solid #a1a1a1" }} />
                        </View>
                    </View>
                    <View style={{}}>
                        <Text style={styles.txt10}>Date{"\n"}{" "}</Text>
                    </View>
                </View>
            </View>            
        </View>
    )
}

export default SignatureRow

const styles = StyleSheet.create({
    viewTop:{ display: 'flex', flexDirection: 'row', color: '#000', paddingTop: 16, paddingBottom: 16,
    justifyContent: 'space-between' },
    headTitle:{
        display: 'flex', flexDirection: 'column', color: '#000',
                    justifyContent: 'space-between'
    },
    lableLeft:{
        fontWeight: 500, fontSize:12
    },
    lableRight:{
        fontWeight: 500, fontSize:12, textAlign: "right"
    },
    viewleft6:{
        display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6
    },
    viewleft10:{
        display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 10
    },
    viewhd:{ 
        display: 'flex', flexDirection: 'row', justifyContent: "space-between", 
    },
    viewrow:{
        width: '50%', paddingLeft: 12, paddingRight: 12 
    },
    txt10:{
        fontWeight: 500, paddingLeft: 8, paddingRight: 8, paddingBottom: 4, fontSize:10
    },
    viewAll:{
        display: 'flex', flexDirection: 'row', color: '#000',
                justifyContent: 'space-between', paddingTop: 16, paddingBottom: 16
    },
    viewpara:{
        fontSize: 11, color: "#000", padding:10, opacity:0.85
    },
    agtext:{
        fontSize: 12, padding: "16px 4px"
    }
    
});