import React from 'react'
import { Text, View, Image } from '@react-pdf/renderer';
import Divider from './Divider';

import  Header from './Header'

const WeightCharges = () => {
    return (
          
        <View style={{ padding: 0, }}>
            <Header
                        title="Uniform Household Goods Bill of Lading"
                        bolText={"(BOL No. 8889999)"}
                        pageText={"Page 3 of 6"} />
            <View style={{ padding: 12, }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }}>
                <Text style={{ color: "#757575", fontWeight: 500, paddingBottom: "4px" }}>Charges & Services (Weight/Mileage Basis - if applicable)</Text>
            </View>
            <View style={{
                display: 'flex', flexDirection: 'row', color: '#000',
                justifyContent: 'space-between', gap: 20, padding: 4
            }}>
                <View style={{ width: '50%' }}>
                    <View style={{ display: 'flex' }} >
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 8 }}>
                            <Text style={{ fontWeight: 500 }}>Net Weight of Shipment:</Text>
                            <Text style={{ textAlign: "right" }}>1,200 lbs.</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 8 }}>
                            <Text style={{ fontWeight: 500 }}>Rate per 100 lbs:</Text>
                            <Text style={{ textAlign: "right" }}>$50.00</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 8 }}>
                            <Text style={{ fontWeight: 500 }}>Valuation Charge:{"\n"}
                                <Text style={{ color: "#757575", }}>Full Value Protection</Text>
                            </Text>
                            <Text style={{ textAlign: "right" }}>$500.00.</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 8 }}>
                            <Text style={{ fontWeight: 500 }}>Container Charge:{"\n"}
                                <Text style={{ color: "#757575", }}>Overnight storage</Text>
                            </Text>
                            <Text style={{ textAlign: "right" }}>$600.00{"\n"}
                                <Text style={{ color: "#757575", }}>3% of total</Text>
                            </Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 8 }}>
                            <Text style={{ fontWeight: 500 }}>Discount:{"\n"}
                                <Text style={{ color: "#757575", }}>(if applicable)</Text>
                            </Text>
                            <Text style={{ textAlign: "right" }}>$50 Off Coupon</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: '50%' }}>
                    <View style={{ display: 'flex' }} >
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 8 }}>
                            <Text style={{ fontWeight: 500 }}>Total Mileage:</Text>
                            <Text style={{ textAlign: "right" }}>66 miles</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 8 }}>
                            <Text style={{ fontWeight: 500 }}>Total W/M Charge:</Text>
                            <Text style={{ textAlign: "right" }}>$600.00</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 8 }}>
                            <Text style={{ fontWeight: 500 }}>Additional Charges:{"\n"}
                                <Text style={{ color: "#757575", }}>Warehouse handling</Text>
                            </Text>
                            <Text style={{ textAlign: "right" }}>$250.00.</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 8 }}>
                            <Text style={{ fontWeight: 500 }}>Fuel Surcharge</Text>
                            <Text style={{ textAlign: "right" }}>$400.00{"\n"}
                                <Text style={{ color: "#757575", }}>12% of total</Text>
                            </Text>
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
                        <Text style={{ fontWeight: 900 }}>Total Weight/Mileage Charges:</Text>
                    </View>
                </View>
                <View style={{ width: '50%' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 6 }}>
                        <Text style={{ textAlign: "right" }}>$3100</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 12, marginBottom: 12 }}>
                <View style={{ borderTop: "1px solid #a1a1a1" }} />
            </View>


            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }}>
                <Text style={{ color: "#757575", fontWeight: 500, paddingBottom: "4px" }}>Containers / Materials</Text>
            </View>
            <View style={{
                display: 'flex', flexDirection: 'row', color: '#000',
                justifyContent: 'space-between', gap: 20, padding: 4
            }}>
                <View style={{ width: '50%' }}>
                    <View style={{ display: 'flex' }} >
                        <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Carton 1.5 cu. ft.:</Text>
                            <Text style={{ textAlign: "right" }}>1,200 lbs.</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Carton 3 cu. ft.</Text>
                            <Text style={{ textAlign: "right" }}>1</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Carton 4.5 cu. ft.</Text>
                            <Text style={{ textAlign: "right" }}>3</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Carton 6 cu. ft.</Text>
                            <Text style={{ textAlign: "right" }}>5</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Net Weight of Shipment:</Text>
                            <Text style={{ textAlign: "right" }}>1,200 lbs.</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Rate per 100 lbs:</Text>
                            <Text style={{ textAlign: "right" }}>$50.00</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Net Weight of Shipment:</Text>
                            <Text style={{ textAlign: "right" }}>1,200 lbs.</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Rate per 100 lbs:</Text>
                            <Text style={{ textAlign: "right" }}>$50.00</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Net Weight of Shipment:</Text>
                            <Text style={{ textAlign: "right" }}>1,200 lbs.</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Rate per 100 lbs:</Text>
                            <Text style={{ textAlign: "right" }}>$50.00</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Net Weight of Shipment:</Text>
                            <Text style={{ textAlign: "right" }}>1,200 lbs.</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: '50%' }}>
                    <View style={{ display: 'flex' }} >
                        <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Net Weight of Shipment:</Text>
                            <Text style={{ textAlign: "right" }}>1,200 lbs.</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Rate per 100 lbs:</Text>
                            <Text style={{ textAlign: "right" }}>$50.00</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Net Weight of Shipment:</Text>
                            <Text style={{ textAlign: "right" }}>1,200 lbs.</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Rate per 100 lbs:</Text>
                            <Text style={{ textAlign: "right" }}>$50.00</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Net Weight of Shipment:</Text>
                            <Text style={{ textAlign: "right" }}>1,200 lbs.</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Rate per 100 lbs:</Text>
                            <Text style={{ textAlign: "right" }}>$50.00</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Net Weight of Shipment:</Text>
                            <Text style={{ textAlign: "right" }}>1,200 lbs.</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Rate per 100 lbs:</Text>
                            <Text style={{ textAlign: "right" }}>$50.00</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Net Weight of Shipment:</Text>
                            <Text style={{ textAlign: "right" }}>1,200 lbs.</Text>
                        </View>
                        {/* <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Rate per 100 lbs:</Text>
                            <Text style={{ textAlign: "right" }}>$50.00</Text>
                        </View>
                        <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 4 }}>
                            <Text style={{ fontWeight: 500 }}>Net Weight of Shipment:</Text>
                            <Text style={{ textAlign: "right" }}>1,200 lbs.</Text>
                        </View> */}
                    </View>
                </View>
            </View>
            </View>
        </View >
    )
}

export default WeightCharges