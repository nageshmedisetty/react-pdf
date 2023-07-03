import React from 'react'
import { Text, View } from '@react-pdf/renderer';
const ServiceDates = () => {
    return (
        <View style={{
            display: 'flex', flexDirection: 'row', color: '#000',
            justifyContent: 'space-between', paddingBottom: 12, paddingTop: 12
        }}>
            <View style={{ width: '50%', paddingLeft: 12, paddingRight: 12 }}>
                <View style={{ display: 'flex' }} >
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }}>
                        <Text style={{ color: "#757575", fontWeight: 500, paddingBottom: "4px" }}>Service Dates</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }}>
                        <Text style={{ color: "#757575", fontWeight: 500, paddingBottom: "4px" }}>Pack, Load / Pick-up Dates</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 16 }}>
                        <Text style={{ fontWeight: 500 }}>Actual:</Text>
                        <Text style={{ textAlign: "right" }}>6/7/2022</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 12 }}>
                        <Text style={{ fontWeight: 500 }}>Agreed (if applicable):</Text>
                        <Text style={{ textAlign: "right" }}>6/7/2022</Text>
                    </View>
                </View>
            </View>
            <View style={{ width: '50%', paddingLeft: 12, paddingRight: 12 }}>
                <View style={{ display: 'flex' }} >
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }}>
                        <Text style={{ color: "#757575", fontWeight: 500, paddingBottom: "4px" }}>{" "}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }}>
                        <Text style={{ color: "#757575", fontWeight: 500, paddingBottom: "4px" }}>Delivery Dates:</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 16 }}>
                        <Text style={{ fontWeight: 500 }}>Delivery Date(s):</Text>
                        <Text style={{ textAlign: "right" }}>6/8/2022</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 12 }}>
                        <Text style={{ fontWeight: 500 }}>Agreed (if applicable):</Text>
                        <Text style={{ textAlign: "right" }}>6/8/2022</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ServiceDates