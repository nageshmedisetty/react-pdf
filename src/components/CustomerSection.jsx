import React from 'react'
import { Text, View, Link, StyleSheet } from '@react-pdf/renderer';
const CustomerSection = (props) => {
    var destination_address =""
    var origin_address =""
    const pdfdata = props ? props.data ? props.data.data ?  props.data.data : "" :"" :"";

    const desadd = pdfdata ? pdfdata.consignee ? pdfdata.consignee.destination_address : "" : ""
    if(desadd){
        var madd = desadd.split(",")
        destination_address = `${madd[0]} \n ${madd[1]}`
    }
    const origadd =pdfdata ? pdfdata.customer_shipper ? pdfdata.customer_shipper.origin : "" : ""
    if(origadd){
        var madd = origadd.split(",")
        origin_address = `${madd[0]} \n ${madd[1]}`
    }
    
    return (
        <View style={styles.viewTop}>
            <View style={{ width: '50%', paddingLeft: 12, paddingRight: 12 }}>
                <View style={{ display: 'flex' }} >
                    <View style={styles.viewhd}>
                        <Text style={styles.headTitle}>Customer Details</Text>
                    </View>
                    <View style={styles.viewhd}>
                        <Text style={styles.lableLeft}>AMS JOB Identifier (CID):</Text>
                        <Text style={styles.lableRight}>{pdfdata ? pdfdata.customer_details ? pdfdata.customer_details.cid : "" : ""}</Text>
                    </View>
                    <View style={styles.viewleft10}>
                        <Text style={styles.headTitle}>Customer (Shipper)</Text>
                    </View>
                    <View style={styles.viewleft6}>
                        <Text style={styles.lableLeft}>Name:</Text>
                        <Text style={styles.lableRight}>{pdfdata ? pdfdata.customer_shipper ? pdfdata.customer_shipper.name : "" : ""}</Text>
                    </View>
                    <View style={styles.viewleft6}>
                        <Text style={styles.lableLeft}>Origin:</Text>
                        <Text style={styles.lableRight}>{origin_address}</Text>
                    </View>
                    <View style={styles.viewleft6}>
                        <Text style={styles.lableLeft}>Origin Phone:</Text>
                        <Text style={styles.lableRight}>{pdfdata ? pdfdata.customer_shipper ? pdfdata.customer_shipper.origin_phone : "" : ""}</Text>
                    </View>
                    <View style={styles.viewleft6}>
                        <Text style={styles.lableLeft}>Email:</Text>
                        <Link style={styles.lableRight}>{pdfdata ? pdfdata.customer_shipper ? pdfdata.customer_shipper.email : "" : ""}</Link>
                    </View>
                </View>
            </View>
            <View style={{ width: '50%', paddingLeft: 12, paddingRight: 12 }}>
                <View style={{ display: 'flex' }} >
                    <View style={styles.viewhd}>
                        <Text style={styles.headTitle}>{" "}</Text>
                    </View>
                    <View style={styles.viewhd}>
                        <Text style={styles.lableLeft}>{" "}</Text>
                        <Text style={styles.lableRight}>{" "}</Text>
                    </View>
                    <View style={styles.viewleft10}>
                        <Text style={styles.headTitle}>Consignee:</Text>
                    </View>
                    <View style={styles.viewleft6}>
                        <Text style={styles.lableLeft}>Name:</Text>
                        <Text style={styles.lableRight}>{pdfdata ? pdfdata.consignee ? pdfdata.consignee.name : "" : ""}</Text>
                    </View>
                    <View style={styles.viewleft6}>
                        <Text style={styles.lableLeft}>Destination Address:</Text>
                        <Text style={styles.lableRight}>{destination_address}</Text>
                    </View>
                    <View style={styles.viewleft6}>
                        <Text style={styles.lableLeft}>Destination Phone:</Text>
                        <Text style={styles.lableRight}>{pdfdata ? pdfdata.consignee ? pdfdata.consignee.destination_phone : "" : ""}</Text>
                    </View>
                    <View style={styles.viewleft6}>
                        <Text style={styles.lableLeft}>{" "}</Text>
                        <Text style={styles.lableRight}>{" "}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CustomerSection

const styles = StyleSheet.create({
    viewTop:{
        display: 'flex', flexDirection: 'row', color: '#000',
            justifyContent: 'space-between', paddingBottom: 8, paddingTop: 8
    },
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
    }
    
});