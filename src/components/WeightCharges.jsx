import React from 'react'
import { Text, View, Image } from '@react-pdf/renderer';
import Divider from './Divider';
import SignatureRow from './SignatureRow';

import Header from './Header'

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
                    justifyContent: 'space-between', gap: 20, padding: 2
                }}>
                    <View style={{ width: '50%' }}>
                        <View style={{ display: 'flex' }} >
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 5 }}>
                                <Text style={{ fontWeight: 500 }}>Net Weight of Shipment:</Text>
                                <Text style={{ textAlign: "right" }}>1,200 lbs.</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 5 }}>
                                <Text style={{ fontWeight: 500 }}>Rate per 100 lbs:</Text>
                                <Text style={{ textAlign: "right" }}>$50.00</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 5 }}>
                                <Text style={{ fontWeight: 500 }}>Valuation Charge:{"\n"}
                                    <Text style={{ color: "#757575", }}>Full Value Protection</Text>
                                </Text>
                                <Text style={{ textAlign: "right" }}>$500.00.</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 5 }}>
                                <Text style={{ fontWeight: 500 }}>Container Charge:{"\n"}
                                    <Text style={{ color: "#757575", }}>Overnight storage</Text>
                                </Text>
                                <Text style={{ textAlign: "right" }}>$600.00{"\n"}
                                    <Text style={{ color: "#757575", }}>3% of total</Text>
                                </Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 5 }}>
                                <Text style={{ fontWeight: 500 }}>Discount:{"\n"}
                                    <Text style={{ color: "#757575", }}>(if applicable)</Text>
                                </Text>
                                <Text style={{ textAlign: "right" }}>$50 Off Coupon</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '50%' }}>
                        <View style={{ display: 'flex' }} >
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 5 }}>
                                <Text style={{ fontWeight: 500 }}>Total Mileage:</Text>
                                <Text style={{ textAlign: "right" }}>66 miles</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 5 }}>
                                <Text style={{ fontWeight: 500 }}>Total W/M Charge:</Text>
                                <Text style={{ textAlign: "right" }}>$600.00</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 5 }}>
                                <Text style={{ fontWeight: 500 }}>Additional Charges:{"\n"}
                                    <Text style={{ color: "#757575", }}>Warehouse handling</Text>
                                </Text>
                                <Text style={{ textAlign: "right" }}>$250.00.</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 5 }}>
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
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 5 }}>
                            <Text style={{ fontWeight: 900 }}>Total Weight/Mileage Charges:</Text>
                        </View>
                    </View>
                    <View style={{ width: '50%' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop: 5 }}>
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
                    justifyContent: 'space-between', gap: 10, padding: 2
                }}>
                    <View style={{ width: '50%' }}>
                        <View style={{ display: 'flex' }} >
                            <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Carton 1.5 cu. ft.:</Text>
                                <Text style={{ textAlign: "right" }}>2</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Carton 3 cu. ft.</Text>
                                <Text style={{ textAlign: "right" }}>1</Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Carton 4.5 cu. ft.</Text>
                                <Text style={{ textAlign: "right" }}>3</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Carton 6 cu. ft.</Text>
                                <Text style={{ textAlign: "right" }}>5</Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Lamp Box</Text>
                                <Text style={{ textAlign: "right" }}>1</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Disk Pack</Text>
                                <Text style={{ textAlign: "right" }}>2</Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Wardrobe</Text>
                                <Text style={{ textAlign: "right" }}>1</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Wardrobe Rental</Text>
                                <Text style={{ textAlign: "right" }}>1</Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>TV Box</Text>
                                <Text style={{ textAlign: "right" }}>3</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>TV Box Rental</Text>
                                <Text style={{ textAlign: "right" }}>1</Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Mirror Carton</Text>
                                <Text style={{ textAlign: "right" }}>1</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '50%' }}>
                        <View style={{ display: 'flex' }} >
                            <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Mattress Bags</Text>
                                <Text style={{ textAlign: "right" }}>1</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Mattress Carton</Text>
                                <Text style={{ textAlign: "right" }}>2</Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Shink-wrap (full-roll)</Text>
                                <Text style={{ textAlign: "right" }}>2</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Paper pads</Text>
                                <Text style={{ textAlign: "right" }}>2</Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Type (per roll)</Text>
                                <Text style={{ textAlign: "right" }}>3</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Carpet Shield (per roll)</Text>
                                <Text style={{ textAlign: "right" }}>4</Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Moving Pad (per pad)</Text>
                                <Text style={{ textAlign: "right" }}>5</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Salt (12lb. Container)</Text>
                                <Text style={{ textAlign: "right" }}>1</Text>
                            </View>

                        </View>
                    </View>
                </View>

                <View style={{ marginLeft: 12, marginRight: 12 }}>
                    <View style={{ borderTop: "1px solid #a1a1a1" }} />
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", }}>
                    <Text style={{ color: "#757575", fontWeight: 500, paddingBottom: "4px" }}>Specialty / Bulky Irems</Text>
                </View>
                <View style={{
                    display: 'flex', flexDirection: 'row', color: '#000',
                    justifyContent: 'space-between', gap: 20, padding: 2
                }}>
                    <View style={{ width: '50%' }}>
                        <View style={{ display: 'flex' }} >
                            <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Pianos / Pipe Organ</Text>
                                <Text style={{ textAlign: "right" }}>$</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Safe</Text>
                                <Text style={{ textAlign: "right" }}>$</Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Billiards Table</Text>
                                <Text style={{ textAlign: "right" }}>$</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Hot Tubes</Text>
                                <Text style={{ textAlign: "right" }}>$</Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Motorcycles</Text>
                                <Text style={{ textAlign: "right" }}>$</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '50%' }}>
                        <View style={{ display: 'flex' }} >
                            <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Riding Mower</Text>
                                <Text style={{ textAlign: "right" }}>$</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Canoe / Small Boat</Text>
                                <Text style={{ textAlign: "right" }}>$</Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Trampoline</Text>
                                <Text style={{ textAlign: "right" }}>$</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Workout Machines</Text>
                                <Text style={{ textAlign: "right" }}>$</Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(238, 238, 238, 1)', display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
                                <Text style={{ fontWeight: 500 }}>Swing Sets</Text>
                                <Text style={{ textAlign: "right" }}>$</Text>
                            </View>


                        </View>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "flex-start", marginTop: 4, marginBottom: 12 }}>
                <Text style={{ color: "#757575", fontWeight: 500, paddingBottom: "4px" }}>Estimate Type: Binding</Text>
            </View>
            <View>
                <Text style={{ color: "#757575", fontWeight: 800, paddingBottom: "4px" }}>
                   This estimate guarantees the total cost of the move based upon the quantities, conditions, and services defined by your binding estimate.
                   If you tender additional household goods or require additional services not identified in the binding estimate, the Carrier can either: 
                </Text>       
              
                <Text style={{ fontWeight: 'bold' }}>
                        1. Negotiate a new binding estimate, accurately listing, in detail, the additional services required or requested.
                </Text>
                <Text style={{ fontWeight: 'bold' }}>
                        2. Abide by the original binding estimate.
                </Text>
                <Text style={{ fontWeight: 'bold' }}>
                        3. Potentially deny service.
                </Text>
            </View>
            <SignatureRow />
            

            </View>
        </View >
    )
}

export default WeightCharges