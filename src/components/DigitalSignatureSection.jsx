import React from 'react'
import { Text, View, Link, Image, StyleSheet } from '@react-pdf/renderer';
import SignatureRow from './SignatureRow';
const DigitalSignatureSection = () => {
    return (
        <View style={styles.viewTop}>
            <View style={styles.viewrow}>
                <Text style={styles.headTitle}>Digital Signature & Counterparts</Text>
                <Text style={styles.txt10}>Help us confirm or edit your info</Text>
            </View>

            <View style={styles.viewAll}>
                <View style={styles.viewrow}>
                    <View style={styles.viewleft6}>
                        <Text style={styles.lableLeft}>Email:</Text>
                        <Link style={styles.lableRight}>someone@gmail.com</Link>
                    </View>
                </View>
                <View style={styles.viewrow}>
                    <View style={styles.viewleft6}>
                        <Text style={styles.lableLeft}>Phone:{" "}</Text>
                        <Text style={styles.lableRight}>(214) 555-5555</Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewpara}>
                <Text >
                    Note: This Bill of Lading, the Delivery Acknowledgment Receipt, Estimate, and Itemization of Charges
                    to be Executed upon receipt of the household goods services which are the subject of such Bill of
                    Lading may be executed in counterparts and delivered by email or PDF (or other electronic
                    transmission), each of which shall be legal and binding upon the parties executing each of such
                    documents, and all which counterparts shall constitute one and the same instrument and shall have
                    the same force and effect as if a paper original of each of such documents had been delivered and
                    had been signed using a handwritten signature. The parties executing such documents are consenting
                    that a signature by electronic means shall constitute an Electronic Signature to an Electronic
                    Record under the Uniform Electronic Transactions Act, to the extent applicable, or under other
                    applicable law with respect to the transaction provided for in such documents.
                </Text>
                <Text style={styles.agtext}>
                    I agree my signature and/or typed name provided here will be legally binding and utilized
                    throughout this entire digital document. Genuine signature required.
                </Text>
            </View>
            <Text style={styles.viewparaempty}></Text>
            <SignatureRow />
        </View>
    )
}

export default DigitalSignatureSection

const styles = StyleSheet.create({
    viewTop:{ display: 'flex', color: '#000', padding: 0, marginTop:10 },
    headTitle:{
        color: "#757575", fontWeight: 500, paddingBottom: "4px", fontSize:12
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
        fontSize: 10
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
    },
    viewparaempty:{
        fontSize: 9, color: "#000", padding:5, opacity:0.85
    },
});