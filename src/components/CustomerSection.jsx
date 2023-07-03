import React from 'react'
import { Text, View, Link } from '@react-pdf/renderer';
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
        <View style={{
            display: 'flex', flexDirection: 'row', color: '#000',
            justifyContent: 'space-between', paddingBottom: 12, paddingTop: 12
        }}>
            <View style={{ width: '50%', paddingLeft: 12, paddingRight: 12 }}>
                <View style={{ display: 'flex' }} >
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }}>
                        <Text style={{ color: "#757575", fontWeight: 500, paddingBottom: "4px" }}>Customer Details</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }}>
                        <Text style={{ fontWeight: 500 }}>AMS JOB Identifier (CID):</Text>
                        <Text style={{ textAlign: "right" }}>{pdfdata ? pdfdata.customer_details ? pdfdata.customer_details.cid : "" : ""}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 10 }}>
                        <Text style={{ color: "#757575", fontWeight: 500, paddingBottom: "4px" }}>Customer (Shipper)</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                        <Text style={{ fontWeight: 500 }}>Name:</Text>
                        <Text style={{ textAlign: "right" }}>{pdfdata ? pdfdata.customer_shipper ? pdfdata.customer_shipper.name : "" : ""}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                        <Text style={{ fontWeight: 500 }}>Origin:</Text>
                        <Text style={{ textAlign: "right" }}>{origin_address}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                        <Text style={{ fontWeight: 500 }}>Origin Phone:</Text>
                        <Text style={{ textAlign: "right" }}>{pdfdata ? pdfdata.customer_shipper ? pdfdata.customer_shipper.origin_phone : "" : ""}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                        <Text style={{ fontWeight: 500 }}>Email:</Text>
                        <Link style={{ textAlign: "right" }}>{pdfdata ? pdfdata.customer_shipper ? pdfdata.customer_shipper.email : "" : ""}</Link>
                    </View>
                </View>
            </View>
            <View style={{ width: '50%', paddingLeft: 12, paddingRight: 12 }}>
                <View style={{ display: 'flex' }} >
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }}>
                        <Text style={{ color: "#757575", fontWeight: 500, paddingBottom: "4px" }}>{" "}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }}>
                        <Text style={{ fontWeight: 500 }}>{" "}</Text>
                        <Text style={{ textAlign: "right" }}>{" "}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 10 }}>
                        <Text style={{ color: "#757575", fontWeight: 500, paddingBottom: "4px" }}>Consignee:</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                        <Text style={{ fontWeight: 500 }}>Name:</Text>
                        <Text style={{ textAlign: "right" }}>{pdfdata ? pdfdata.consignee ? pdfdata.consignee.name : "" : ""}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                        <Text style={{ fontWeight: 500 }}>Destination Address:</Text>
                        <Text style={{ textAlign: "right" }}>{destination_address}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                        <Text style={{ fontWeight: 500 }}>Destination Phone:</Text>
                        <Text style={{ textAlign: "right" }}>{pdfdata ? pdfdata.consignee ? pdfdata.consignee.destination_phone : "" : ""}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                        <Text style={{ fontWeight: 500 }}>{" "}</Text>
                        <Text style={{ textAlign: "right" }}>{" "}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CustomerSection