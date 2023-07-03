import React from 'react'
import { Text, View, Link, Image } from '@react-pdf/renderer';
import SignatureRow from './SignatureRow';
const DigitalSignatureSection = () => {
    return (
        <View style={{ display: 'flex', color: '#000', padding: 12 }}>
            <View style={{ width: '50%' }}>
                <Text style={{ color: "#757575", fontWeight: 500, paddingBottom: "4px" }}>Digital Signature & Counterparts</Text>
                <Text style={{ fontSize: 10 }}>Help us confirm or edit your info</Text>
            </View>

            <View style={{
                display: 'flex', flexDirection: 'row', color: '#000',
                justifyContent: 'space-between', paddingTop: 16, paddingBottom: 16
            }}>
                <View style={{ width: '50%' }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 500 }}>Email:</Text>
                        <Link style={{ marginLeft: 8, textAlign: "right" }}>someone@gmail.com</Link>
                    </View>
                </View>
                <View style={{ width: '50%' }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 500 }}>Phone:{" "}</Text>
                        <Text style={{ marginLeft: 8, textAlign: "right" }}>(214) 555-5555</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={{ fontSize: 11, color: "#757575" }}>
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
                <Text style={{ fontSize: 14, padding: "16px 4px" }}>
                    I agree my signature and/or typed name provided here will be legally binding and utilized
                    throughout this entire digital document. Genuine signature required.
                </Text>
            </View>
            <SignatureRow />
            
            {/* <View style={{
                display: 'flex', flexDirection: 'row', color: '#000', paddingTop: 16, paddingBottom: 16,
                justifyContent: 'space-between'
            }}>
                <View style={{ width: "78%" }}>
                    <View style={{
                        display: 'flex', flexDirection: 'column', color: '#000',
                        justifyContent: 'space-between'
                    }}>
                        <View style={{}}>
                            <Image src={"https://react-pdf.org/images/logo.png"} style={{ height: 60, width: 200 }} />
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
            </View> */}
        </View>
    )
}

export default DigitalSignatureSection