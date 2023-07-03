import React from 'react'
import { Text, View, Link, Image } from '@react-pdf/renderer';
import signature from '../assets/signature.png'

const SignatureRow = () => {
    return (
        <View style={{
            display: 'flex', flexDirection: 'row', color: '#000', paddingTop: 16, paddingBottom: 16,
            justifyContent: 'space-between'
        }}>
            <View style={{ width: "78%" }}>
                <View style={{
                    display: 'flex', flexDirection: 'column', color: '#000',
                    justifyContent: 'space-between'
                }}>
                    <View style={{}}>
                        <Image src={signature} style={{ height: 60, width: 200 }} />
                        <View style={{ paddingBottom: 4, paddingTop: 4 }}>
                            <View style={{ borderTop: "1px solid #a1a1a1" }} />
                        </View>
                    </View>
                    <View style={{}}>
                        <Text style={{ fontWeight: 500, paddingLeft: 8, paddingRight: 8, paddingBottom: 4 }}>Jane Haywood, Shipper{"\n"}Signature</Text>
                    </View>
                </View>
            </View>
            <View style={{ width: "20%" }}>
                <View style={{
                    display: 'flex', flexDirection: 'column', color: '#000',
                    justifyContent: 'space-between'
                }}>
                    <View style={{}}>
                        <View style={{
                            display: 'flex', flexDirection: 'column', color: '#000',
                            justifyContent: 'space-between', height: 60
                        }}>
                            <Text>{" "}</Text>
                            <Text style={{ paddingLeft: 8, paddingRight: 8 }}>1/7/2022</Text>
                        </View>

                        <View style={{ paddingBottom: 4, paddingTop: 4 }}>
                            <View style={{ borderTop: "1px solid #a1a1a1" }} />
                        </View>
                    </View>
                    <View style={{}}>
                        <Text style={{ fontWeight: 500, paddingLeft: 8, paddingRight: 8, paddingBottom: 4 }}>Date{"\n"}{" "}</Text>
                    </View>
                </View>
            </View>            
        </View>
    )
}

export default SignatureRow