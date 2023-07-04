import React from 'react'
import { Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import SignatureRow from './SignatureRow';
import visa from '../assets/visa.png';
import discover from '../assets/discover.png';
import mastercard from '../assets/mastercard.png';
import amex from '../assets/amex.png';
import HourlyCharges from './HourlyCharges';
import Header from './Header'
const ValuationDeclaration = () => {
    return (
        <View style={{ padding: 0, }}>
            <Header
                title="Uniform Household Goods Bill of Lading"
                bolText={"(BOL No. 8889999)"}
                pageText={"Page 2 of 6"} />
            <View style={styles.viewlay}>
                <View style={styles.valayout}>
                    <Text style={styles.valtext}>Valuation Declaration & Selection</Text>
                </View>
                <View style={styles.valayout}>
                    <Text style={styles.redtxt}>please see & select valuation options on the addendum to uniform household goods bill of lading</Text>
                </View>
                <View style={styles.divider}>
                    <View style={{ borderTop: "1px solid #a1a1a1" }} />
                </View>
                <View style={styles.valayout}>
                    <Text style={styles.dectxt}>Declaration of Article(s) of Extraordinary (Unusual Value)</Text>
                </View>
                <View>
                    <Text style={{ color: "#757575", fontWeight: 800, paddingBottom: "4px" }}>
                        I acknowledge that I have prepared and retained a copy of the “Inventory of Items Valued in Excess of $100
                        Per Pound Per Article” that are included in my shipment and that I have given a copy of this inventory to
                        the mover's representative. I also acknowledge that the mover's liability for loss of or damage to any
                        articles valued in excess of $100 per pound will be limited to $100 per pound for each pound of such lost or
                        damaged article(s) (based on actual weight), not to exceed the declared value of the entire shipment, unless
                        I have specifically identified such articles for which a claim for loss or damage may be made, on the
                        attached inventory.
                    </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "flex-start", marginTop: 12, marginBottom: 12 }}>
                    <Text style={{ fontWeight: 500, paddingBottom: "4px" }}>I accept the Declaration of Article(s) of Extraordinary (Unusual) Value</Text>
                </View>
                <SignatureRow />
                <View>
                    <View style={{ borderTop: "1px solid #a1a1a1" }} />
                </View>
                <View style={{ marginTop: 4, marginBottom: 4 }}>
                    <Text style={{ fontSize: 14 }}>Accepted Methods Of COD Payments</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "flex-start", marginTop: 12, marginBottom: 12, gap: 6 }}>
                    <Image src={mastercard} style={{ height: 28 }} />
                    <Image src={visa} style={{ height: 28 }} />
                    <Image src={amex} style={{ height: 28 }} />
                    <Image src={discover} style={{ height: 28 }} />
                </View>
                <Text style={{ fontWeight: 500 }}>
                    Cash, Credit, and Debit cards only. No Checks accepted! Thank you! Payments required prior to
                    unload.</Text>
                <View>
                    <Text style={{ color: 'red' }}>We can't transport the following items:
                        <Text style={{ color: "gray", fontWeight: 900, fontSize: 12.5 }}>{" "}Weapons & ammunition, cash, hazardous chemicals, live
                            animals, flammables, pressurized fuel/gas, waste, food/perishables, live plants. (This is a
                            partial list, call Carrier for additional items.)
                        </Text>
                    </Text>
                </View>
                <Text style={{ marginTop: 8 }}>
                    Shipper Agrees - Carrier is not responsible for, will not transport any item defined as
                    “Hazardous”, or “Illegal” by any local, state or federal law or regulation.
                </Text>
                <View style={{ marginTop: 12, marginBottom: 12 }}>
                    <View style={{ borderTop: "1px solid #a1a1a1" }} />
                </View>
                <HourlyCharges />

            </View>
        </View>
    )
}

export default ValuationDeclaration

const styles = StyleSheet.create({
    viewlay:{
         display: 'flex', padding: 12 
    },
    valayout:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignSelf: "stretch"
    },
    valtext:{
        color: "rgba(0, 0, 0, 0.54)",
        textAlign: "center",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: 1.4,
        letterSpacing: 0.1
    },
    divider:{
        marginTop: 12, marginBottom: 12
    },
    redtxt:{
        color:"#E31B0C",
        textAlign: "center",
        fontSize: 12,        
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: 1.2,
        letterSpacing: 0.4,
        textTransform: "uppercase",
    },
    valtext:{
        color: "rgba(0, 0, 0, 0.54)",
        textAlign: "center",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: 1.4,
        letterSpacing: 0.1
    },
    dectxt:{
        color: "rgba(0, 0, 0, 0.54)",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: 1,
        letterSpacing: 0.4
    }
});