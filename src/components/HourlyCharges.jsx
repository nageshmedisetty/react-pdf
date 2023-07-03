import React from 'react'
import { Text, View, Image } from '@react-pdf/renderer';
const HourlyCharges = () => {
    return (
        <View>

            <View style={{
                display: 'flex', flexDirection: 'row', color: '#000',
                justifyContent: 'space-between', gap: 20
            }}>
                <View style={{ width: '50%' }}>
                    <View style={{ display: 'flex' }} >
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }}>
                            <Text style={{ color: "#757575", fontWeight: 500, paddingBottom: "4px" }}>Charges & Services (Hourly Basis - if applicable)</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                            <Text style={{ fontWeight: 500 }}>Start Time:</Text>
                            <Text style={{ textAlign: "right" }}>8:00 AM</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                            <Text style={{ fontWeight: 500 }}>Travel Charge:</Text>
                            <Text style={{ textAlign: "right" }}>$189.00</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: '50%' }}>
                    <View style={{ display: 'flex' }} >
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }}>
                            <Text style={{ color: "#757575", fontWeight: 500, paddingBottom: "4px" }}>{" "}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                            <Text style={{ fontWeight: 500 }}>Stop Time:</Text>
                            <Text style={{ textAlign: "right" }}>2.00 PM</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                            <Text style={{ fontWeight: 500 }}>Labour Charge:</Text>
                            <Text style={{ textAlign: "right" }}>$500</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{
                display: 'flex', flexDirection: 'row', color: '#000',
                justifyContent: 'space-between', marginTop: 12, gap: 20
            }}>
                <View style={{ width: '50%' }}>
                    <View style={{ display: 'flex' }} >
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                            <Text style={{ fontWeight: 500 }}>Miles:</Text>
                            <Text style={{ textAlign: "right" }}>50 miles</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                            <Text style={{ fontWeight: 500 }}>Number of Men:</Text>
                            <Text style={{ textAlign: "right" }}>3</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: '50%' }}>
                    <View style={{ display: 'flex' }} >
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                            <Text style={{ fontWeight: 500 }}>Hourly Rate:</Text>
                            <Text style={{ textAlign: "right" }}>$189.00</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                            <Text style={{ fontWeight: 500 }}>Valuation Charge:{"\n"}
                                <Text style={{ color: "#757575", }}>Full Value Protection</Text>
                            </Text>
                            <Text style={{ textAlign: "right" }}>$500.00</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{
                display: 'flex', flexDirection: 'row', color: '#000',
                justifyContent: 'space-between', marginTop: 12, gap: 20
            }}>
                <View style={{ width: '50%' }}>
                    <View style={{ display: 'flex' }} >
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                            <Text style={{ fontWeight: 500 }}>Overtime Charge:</Text>
                            <Text style={{ textAlign: "right" }}>$250.00</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                            <Text style={{ fontWeight: 500 }}>Fuel Surcharge:</Text>
                            <Text style={{ textAlign: "right" }}>$400.00{"\n"}
                                <Text style={{ color: "#757575", }}>12% of total</Text>
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: '50%' }}>
                    <View style={{ display: 'flex' }} >
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                            <Text style={{ fontWeight: 500 }}>Specialty/Bulky Items:</Text>
                            <Text style={{ textAlign: "right" }}>$150.00</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                            <Text style={{ fontWeight: 500 }}>Overnight Storage (if applicable):</Text>
                            <Text style={{ textAlign: "right" }}>$500.00</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{
                display: 'flex', flexDirection: 'row', color: '#000',
                justifyContent: 'space-between', marginTop: 12, gap: 20, fontSize: 14, fontWeight: 'bold'
            }}>
                <View style={{ width: '50%' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                        <Text style={{ fontWeight: 900 }}>Total Hourly Charges:</Text>
                    </View>
                </View>
                <View style={{ width: '50%' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                        <Text style={{ textAlign: "right" }}>$2697</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default HourlyCharges